declare const ChainId: {
    readonly mainnet: 1;
    readonly goerli: 5;
    readonly polygon: 137;
    readonly mumbai: 80001;
    readonly avalanche: 43114;
    readonly fuji: 43113;
    readonly arbitrum_one: 42161;
    readonly arbitrum_goerli: 421613;
    readonly arbitrum_sepolia: 421614;
    readonly fantom: 250;
    readonly fantom_testnet: 4002;
    readonly optimism: 10;
    readonly optimism_sepolia: 11155420;
    readonly optimism_goerli: 420;
    readonly harmony: 1666600000;
    readonly sepolia: 11155111;
    readonly scroll: 534352;
    readonly scroll_sepolia: 534351;
    readonly metis: 1088;
    readonly base: 8453;
    readonly base_sepolia: 84532;
    readonly bnb: 56;
    readonly gnosis: 100;
    readonly zkEVM: 1101;
    readonly celo: 42220;
    readonly zksync: 324;
};

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

export { ChainId, getRPCUrl, networkEnv, supportedChainIds };
