declare const networkMap: {
    readonly 1: "eth-mainnet";
    readonly 3: "eth-ropsten";
    readonly 4: "eth-rinkeby";
    readonly 5: "eth-goerli";
    readonly 10: "opt-mainnet";
    readonly 30: "rootstock-mainnet";
    readonly 31: "rootstock-testnet";
    readonly 42: "eth-kovan";
    readonly 56: "bnb-mainnet";
    readonly 69: "opt-kovan";
    readonly 97: "bnb-testnet";
    readonly 100: "gnosis-mainnet";
    readonly 137: "polygon-mainnet";
    readonly 204: "opbnb-mainnet";
    readonly 250: "fantom-mainnet";
    readonly 252: "frax-mainnet";
    readonly 300: "zksync-sepolia";
    readonly 324: "zksync-mainnet";
    readonly 420: "opt-goerli";
    readonly 480: "worldchain-mainnet";
    readonly 592: "astar-mainnet";
    readonly 747: "flow-mainnet";
    readonly 1088: "metis-mainnet";
    readonly 1101: "polygonzkevm-mainnet";
    readonly 1301: "unichain-sepolia";
    readonly 1442: "polygonzkevm-testnet";
    readonly 1946: "soneium-minato";
    readonly 2442: "polygonzkevm-cardona";
    readonly 2522: "frax-sepolia";
    readonly 4002: "fantom-testnet";
    readonly 4801: "worldchain-sepolia";
    readonly 5611: "opbnb-testnet";
    readonly 7000: "zetachain-mainnet";
    readonly 7001: "zetachain-testnet";
    readonly 8453: "base-mainnet";
    readonly 10200: "gnosis-chiado";
    readonly 11011: "shape-sepolia";
    readonly 42161: "arb-mainnet";
    readonly 42170: "arbnova-mainnet";
    readonly 43113: "avax-fuji";
    readonly 43114: "avax-mainnet";
    readonly 59141: "linea-sepolia";
    readonly 59144: "linea-mainnet";
    readonly 63157: "geist-mainnet";
    readonly 80001: "polygon-mumbai";
    readonly 80002: "polygon-amoy";
    readonly 80084: "berachain-bartio";
    readonly 81457: "blast-mainnet";
    readonly 84531: "base-goerli";
    readonly 84532: "base-sepolia";
    readonly 421611: "arb-rinkeby";
    readonly 421613: "arb-goerli";
    readonly 421614: "arb-sepolia";
    readonly 534351: "scroll-sepolia";
    readonly 534352: "scroll-mainnet";
    readonly 7777777: "zora-mainnet";
    readonly 11155111: "eth-sepolia";
    readonly 11155420: "opt-sepolia";
    readonly 168587773: "blast-sepolia";
    readonly 999999999: "zora-sepolia";
};

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

type SupportedChainIds = (typeof ChainId)[keyof typeof ChainId] & keyof typeof networkMap;
declare const supportedChainIds: SupportedChainIds[];
declare const getNetworkEnv: (chainId: SupportedChainIds) => "RPC_MAINNET" | "RPC_GOERLI" | "RPC_POLYGON" | "RPC_MUMBAI" | "RPC_AVALANCHE" | "RPC_FUJI" | "RPC_ARBITRUM_ONE" | "RPC_ARBITRUM_GOERLI" | "RPC_ARBITRUM_SEPOLIA" | "RPC_FANTOM" | "RPC_FANTOM_TESTNET" | "RPC_OPTIMISM" | "RPC_OPTIMISM_SEPOLIA" | "RPC_OPTIMISM_GOERLI" | "RPC_HARMONY" | "RPC_SEPOLIA" | "RPC_SCROLL" | "RPC_SCROLL_SEPOLIA" | "RPC_METIS" | "RPC_BASE" | "RPC_BASE_SEPOLIA" | "RPC_BNB" | "RPC_GNOSIS" | "RPC_ZKEVM" | "RPC_CELO" | "RPC_ZKSYNC";
/**
 * Return a RPC_URL for supported chains.
 * If the RPC_URL environment variable is set, it will be used.
 * Otherwise will construct the URL based on the chain ID and Alchemy API key.
 * @param chainId
 * @param alchemyKey
 * @returns the RPC_URL for the given chain ID
 */
declare const getRPCUrl: (chainId: SupportedChainIds, alchemyKey?: string) => string;

export { ChainId, getNetworkEnv, getRPCUrl, supportedChainIds };
