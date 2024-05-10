import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import Moralis from "moralis";

function getEventABI(abi: any, name: string) {
    return abi.find((item: any) => item.type === 'event' && item.name === name);
}

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();

    const { chainId } = await hre.network.config;
    if (!chainId) {
        throw Error("chainId is undefined");
    }
    const _chainId = "0x" + chainId.toString(16);


    await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY
    });

    const { raw: { result: streams } } = await Moralis.Streams.getAll({
        limit: 100
    });

    let promises = [];
    for (let stream of streams) {
        promises.push(
            Moralis.Streams.delete({
                id: stream.id,
            })
        );
    }
    await Promise.all(promises);
    console.log(`${promises.length} streams removed`);

    const events = {
        "upDevAccountNFT": [
            "NewSource(string,string)",
            // "Requested",
            // "Fulfilled",
            // "Claimed"
        ],
    };

    for (let contract in events) {
        const _contract = await hre.ethers.getContract(contract, deployer);
        const { abi } = require(`../artifacts/contracts/${contract}.sol/${contract}.json`); // @ts-ignore
        for (let event of events[contract]) {
            const [name] = event.split("(");
            const description = contract + "/" + name;
            const stream = await Moralis.Streams.add({
                webhookUrl: process.env.MORALIS_WEBHOOK_URL + "/" + description,
                description,
                tag: contract,
                chains: [_chainId],
                includeNativeTxs: false,
                topic0: [event],
                abi: [getEventABI(abi, name)],
                includeContractLogs: true
            });
            const { id } = stream.toJSON();
            await Moralis.Streams.addAddress({
                id,
                address: _contract.address,
            });
            console.log(`Added stream for ${description}`);
        }
    }
};

export default deployYourContract;

deployYourContract.tags = ["indexer"];
