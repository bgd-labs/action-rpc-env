declare const ChainId: {
    readonly mainnet: 1;
    readonly polygon: 137;
    readonly polygon_amoy: 80002;
    readonly avalanche: 43114;
    readonly avalanche_fuji: 43113;
    readonly arbitrum: 42161;
    readonly arbitrum_sepolia: 421614;
    readonly fantom: 250;
    readonly fantom_testnet: 4002;
    readonly optimism: 10;
    readonly optimism_sepolia: 11155420;
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

type SupportedChainIds = (typeof ChainId)[keyof typeof ChainId];
declare const alchemySupportedChainIds: (1 | 137 | 80002 | 43114 | 43113 | 42161 | 421614 | 250 | 4002 | 10 | 11155420 | 1666600000 | 11155111 | 534352 | 534351 | 1088 | 8453 | 84532 | 56 | 100 | 1101 | 42220 | 324)[];
declare const getNetworkEnv: (chainId: SupportedChainIds) => "RPC_MAINNET" | "RPC_POLYGON" | "RPC_POLYGON_AMOY" | "RPC_AVALANCHE" | "RPC_AVALANCHE_FUJI" | "RPC_ARBITRUM" | "RPC_ARBITRUM_SEPOLIA" | "RPC_FANTOM" | "RPC_FANTOM_TESTNET" | "RPC_OPTIMISM" | "RPC_OPTIMISM_SEPOLIA" | "RPC_HARMONY" | "RPC_SEPOLIA" | "RPC_SCROLL" | "RPC_SCROLL_SEPOLIA" | "RPC_METIS" | "RPC_BASE" | "RPC_BASE_SEPOLIA" | "RPC_BNB" | "RPC_GNOSIS" | "RPC_ZKEVM" | "RPC_CELO" | "RPC_ZKSYNC";
declare function getExplicitRPC(chainId: SupportedChainIds): string;
declare function getAlchemyRPC(chainId: SupportedChainIds, alchemyKey: string): string;
type GetRPCUrlOptions = {
    alchemyKey?: string;
};
/**
 * Return a RPC_URL for supported chains.
 * If the RPC_URL environment variable is set, it will be used.
 * Otherwise will construct the URL based on the chain ID and Alchemy API key.
 *
 * @notice This method acts as fall-through and will only revert if the ChainId is strictly not supported.
 * If no RPC_URL is set, and non of the private rpc providers supports the chain, it will return undefined.
 * @param chainId
 * @param alchemyKey
 * @returns the RPC_URL for the given chain ID
 */
declare const getRPCUrl: (chainId: SupportedChainIds, options?: GetRPCUrlOptions) => string | undefined;

export { ChainId, alchemySupportedChainIds, getAlchemyRPC, getExplicitRPC, getNetworkEnv, getRPCUrl };
