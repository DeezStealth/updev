import { SecretsManager, createGist } from "@chainlink/functions-toolkit";
import latestVersions from "../../hardhat/sources/latest.json";
import { signer } from "./signer";

export type PreparedRequest = {
    secret: string,
    version: string
}

export async function prepareRequest(
    up: string,
    source: string,
    token: string,
    id?: string
): Promise<PreparedRequest> {
    // @ts-ignore
    const version = latestVersions[source];

    // encrypt secrets and upload to DON
    const secretsManager = new SecretsManager({
        signer,
        functionsRouterAddress: process.env.DON_ROUTER || "",
        donId: process.env.DON_ID_STRING || "",
    });
    await secretsManager.initialize();
    const encryptedSecretsObj = await secretsManager.encryptSecrets({
        token,
        up: up.slice(2).toLowerCase(),
        pinata: process.env.PINATA_JWT || ""
    });
    const gistURL = await createGist(
        process.env.GITHUB_API_TOKEN || "",
        JSON.stringify(encryptedSecretsObj)
    );
    const encryptedSecretsUrls = await secretsManager.encryptSecretsUrls([
        gistURL,
    ]);
    // const uploadResult = await secretsManager.uploadEncryptedSecretsToDON({
    //     encryptedSecretsHexstring: encryptedSecretsObj.encryptedSecrets,
    //     gatewayUrls: [
    //         process.env.DON_GATEWAY_URL_1 || "",
    //         process.env.DON_GATEWAY_URL_2 || "",
    //     ],
    //     slotId: 0,
    //     minutesUntilExpiration: 10,
    // });
    // if (!uploadResult.success) {
    //     throw new Error("Encrypted secrets not uploaded to DON");
    // }
    return {
        secret: encryptedSecretsUrls,
        version
    };
}
