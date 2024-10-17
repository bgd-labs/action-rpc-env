import { ChainId } from "@bgd-labs/js-utils";

type ChainIdValue = (typeof ChainId)[keyof typeof ChainId];

// @notice: fetched from alchemy private trpc api
// const data = await(await fetch('https://app-api.alchemy.com/trpc/config.getNetworkConfig')).json();
// data.result.data.reduce((acc,val) => {
//     acc[val.networkChainId] = val.kebabCaseId;
//     return acc;
// },{})
const alchemyNetworks = {
  1: "eth-mainnet",
  3: "eth-ropsten",
  4: "eth-rinkeby",
  5: "eth-goerli",
  10: "opt-mainnet",
  42: "eth-kovan",
  56: "bnb-mainnet",
  69: "opt-kovan",
  97: "bnb-testnet",
  100: "gnosis-mainnet",
  137: "polygon-mainnet",
  204: "opbnb-mainnet",
  250: "fantom-mainnet",
  252: "frax-mainnet",
  300: "zksync-sepolia",
  324: "zksync-mainnet",
  420: "opt-goerli",
  592: "astar-mainnet",
  747: "flow-mainnet",
  1088: "metis-mainnet",
  1101: "polygonzkevm-mainnet",
  1301: "unichain-sepolia",
  1442: "polygonzkevm-testnet",
  1946: "soneium-minato",
  2442: "polygonzkevm-cardona",
  2522: "frax-sepolia",
  4002: "fantom-testnet",
  5611: "opbnb-testnet",
  7000: "zetachain-mainnet",
  7001: "zetachain-testnet",
  8453: "base-mainnet",
  10200: "gnosis-chiado",
  11011: "shape-sepolia",
  42161: "arb-mainnet",
  42170: "arbnova-mainnet",
  43113: "avax-fuji",
  43114: "avax-mainnet",
  59141: "linea-sepolia",
  59144: "linea-mainnet",
  80001: "polygon-mumbai",
  80002: "polygon-amoy",
  80084: "berachain-bartio",
  81457: "blast-mainnet",
  84531: "base-goerli",
  84532: "base-sepolia",
  421611: "arb-rinkeby",
  421613: "arb-goerli",
  421614: "arb-sepolia",
  534351: "scroll-sepolia",
  534352: "scroll-mainnet",
  7777777: "zora-mainnet",
  11155111: "eth-sepolia",
  11155420: "opt-sepolia",
  168587773: "blast-sepolia",
  999999999: "zora-sepolia",
} as const satisfies
  | Record<ChainIdValue, Readonly<string>>
  | Record<number, Readonly<string>>;

export const networkEnv = {
  [ChainId.mainnet]: "RPC_MAINNET",
  [ChainId.optimism]: "RPC_OPTIMISM",
  [ChainId.bnb]: "RPC_BNB",
  [ChainId.gnosis]: "RPC_GNOSIS",
  [ChainId.polygon]: "RPC_POLYGON",
  [ChainId.fantom]: "RPC_FANTOM",
  [ChainId.zkSync]: "RPC_ZKSYNC",
  [ChainId.metis]: "RPC_METIS",
  [ChainId.base]: "RPC_BASE",
  [ChainId.arbitrum_one]: "RPC_ARBITRUM",
  [ChainId.avalanche]: "RPC_AVALANCHE",
  [ChainId.scroll]: "RPC_SCROLL",
} as const satisfies Partial<{ [chainId in ChainIdValue]: Readonly<string> }>;

export const supportedChainIds = Object.keys(
  networkEnv,
) as unknown as (keyof typeof networkEnv)[];

/**
 * Return a RPC_URL for supported chains.
 * If the RPC_URL environment variable is set, it will be used.
 * Otherwise will construct the URL based on the chain ID and Alchemy API key.
 * @param chainId
 * @param alchemyKey
 * @returns the RPC_URL for the given chain ID
 */
export const getRPCUrl = (
  chainId: keyof typeof networkEnv,
  alchemyKey?: string,
) => {
  if (process.env[networkEnv[chainId]]) {
    return process.env[networkEnv[chainId]];
  }
  if (alchemyNetworks[chainId] && alchemyKey) {
    return `https://${alchemyNetworks[chainId]}.g.alchemy.com/v2/${alchemyKey}`;
  }
};
