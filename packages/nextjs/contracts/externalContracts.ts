import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const externalContracts = {
    11155111: {
        LSP23Factory: {
            address: "0x2300000a84d25df63081feaa37ba6b62c4c89a30",
            abi: [
                {
                    "inputs": [],
                    "name": "InvalidValueSum",
                    "type": "error"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "errorData",
                            "type": "bytes"
                        }
                    ],
                    "name": "PrimaryContractProxyInitFailureError",
                    "type": "error"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "errorData",
                            "type": "bytes"
                        }
                    ],
                    "name": "SecondaryContractProxyInitFailureError",
                    "type": "error"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "primaryContract",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "secondaryContract",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeployment",
                            "name": "primaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraConstructorParams",
                                    "type": "bytes"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeployment",
                            "name": "secondaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "DeployedContracts",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "primaryContract",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "secondaryContract",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeploymentInit",
                            "name": "primaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraInitializationParams",
                                    "type": "bytes"
                                }
                            ],
                            "indexed": false,
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeploymentInit",
                            "name": "secondaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "DeployedERC1167Proxies",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeployment",
                            "name": "primaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraConstructorParams",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeployment",
                            "name": "secondaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "computeAddresses",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "primaryContractAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "secondaryContractAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeploymentInit",
                            "name": "primaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraInitializationParams",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeploymentInit",
                            "name": "secondaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "computeERC1167Addresses",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "primaryContractAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "secondaryContractAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeployment",
                            "name": "primaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "creationBytecode",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraConstructorParams",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeployment",
                            "name": "secondaryContractDeployment",
                            "type": "tuple"
                        },
                        {
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "deployContracts",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "primaryContractAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "secondaryContractAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.PrimaryContractDeploymentInit",
                            "name": "primaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "fundingAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "implementationContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "initializationCalldata",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "addPrimaryContractAddress",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraInitializationParams",
                                    "type": "bytes"
                                }
                            ],
                            "internalType": "struct ILSP23LinkedContractsFactory.SecondaryContractDeploymentInit",
                            "name": "secondaryContractDeploymentInit",
                            "type": "tuple"
                        },
                        {
                            "internalType": "address",
                            "name": "postDeploymentModule",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "postDeploymentModuleCalldata",
                            "type": "bytes"
                        }
                    ],
                    "name": "deployERC1167Proxies",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "primaryContractAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "secondaryContractAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function"
                }
            ]
        }
    }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
