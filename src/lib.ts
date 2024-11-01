import { networkMap } from "./alchemyIds";
import { ChainId } from "./chainIds";

type ChainIdValue = (typeof ChainId)[keyof typeof ChainId];

const alchemyNetworks = networkMap satisfies
  | Record<ChainIdValue, Readonly<string>>
  | Record<number, Readonly<string>>;

export const networkEnv = {
  [ChainId.mainnet]: "RPC_MAINNET",
  [ChainId.optimism]: "RPC_OPTIMISM",
  [ChainId.bnb]: "RPC_BNB",
  [ChainId.gnosis]: "RPC_GNOSIS",
  [ChainId.polygon]: "RPC_POLYGON",
  [ChainId.fantom]: "RPC_FANTOM",
  [ChainId.zksync]: "RPC_ZKSYNC",
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

export { ChainId };
