import { networkMap } from "./alchemyIds";
import { ChainId } from "./chainIds";

type SupportedChainIds = (typeof ChainId)[keyof typeof ChainId] &
  keyof typeof networkMap;
export const supportedChainIds = Object.values(ChainId).filter(
  (id) => networkMap[id as SupportedChainIds],
) as SupportedChainIds[];

export const getNetworkEnv = (chainId: SupportedChainIds) => {
  const symbol = Object.entries(ChainId).find(
    ([, value]) => value === chainId,
  )?.[0] as keyof typeof ChainId | undefined;

  if (!symbol) {
    throw new Error(
      `Didn't find a viem symbol for chainId: ${chainId}. Wire it up in 'src/chainIds.ts'!`,
    );
  }

  const env =
    `RPC_${symbol.toUpperCase() as Uppercase<typeof symbol>}` as const;

  return env;
};

/**
 * Return a RPC_URL for supported chains.
 * If the RPC_URL environment variable is set, it will be used.
 * Otherwise will construct the URL based on the chain ID and Alchemy API key.
 * @param chainId
 * @param alchemyKey
 * @returns the RPC_URL for the given chain ID
 */
export const getRPCUrl = (chainId: SupportedChainIds, alchemyKey?: string) => {
  // Typescript prevents this, catching it in runtime for js-usages
  if (!supportedChainIds.includes(chainId)) {
    throw new Error(
      `ChainId '${chainId}' is not supported by this library. Feel free to open an issue.`,
    );
  }

  const env = getNetworkEnv(chainId);

  // User provided RPC_ URL
  if (process.env[env]) {
    return process.env[env];
  }

  const alchemyId = networkMap[chainId];

  if (!alchemyKey) {
    throw new Error(
      `ChainId '${chainId}' is supported by Alchemy. Either provide ${env} or an 'alchemyKey'.`,
    );
  }

  return `https://${alchemyId}.g.alchemy.com/v2/${alchemyKey}`;
};

export { ChainId };
