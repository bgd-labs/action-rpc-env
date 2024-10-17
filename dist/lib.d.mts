declare const networkEnv: {
    readonly 1: "RPC_MAINNET";
    readonly 10: "RPC_OPTIMISM";
    readonly 56: "RPC_BNB";
    readonly 100: "RPC_GNOSIS";
    readonly 137: "RPC_POLYGON";
    readonly 250: "RPC_FANTOM";
    readonly 324: "RPC_ZKSYNC";
    readonly 1088: "RPC_METIS";
    readonly 8453: "RPC_BASE";
    readonly 42161: "RPC_ARBITRUM";
    readonly 43114: "RPC_AVALANCHE";
    readonly 534352: "RPC_SCROLL";
};
declare const supportedChainIds: (keyof typeof networkEnv)[];
/**
 * Return a RPC_URL for supported chains.
 * If the RPC_URL environment variable is set, it will be used.
 * Otherwise will construct the URL based on the chain ID and Alchemy API key.
 * @param chainId
 * @param alchemyKey
 * @returns the RPC_URL for the given chain ID
 */
declare const getRPCUrl: (chainId: keyof typeof networkEnv, alchemyKey?: string) => string | undefined;

export { getRPCUrl, networkEnv, supportedChainIds };
