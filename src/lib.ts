import { networkMap } from "./alchemyIds";
import { ChainId, ChainList } from "./chainIds";
import { publicRPCs } from "./publicRPCs";
import { quicknodeNetworkMap } from "./quicknodeIds";

type SupportedChainIds = (typeof ChainId)[keyof typeof ChainId];

type AlchemyChainIds = keyof typeof networkMap;

export const alchemySupportedChainIds = Object.values(ChainId).filter(
  (id) => networkMap[id as keyof typeof networkMap],
);

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

export function getExplicitRPC(chainId: SupportedChainIds) {
  const env = getNetworkEnv(chainId);

  // User provided RPC_ URL
  if (process.env[env]) {
    return process.env[env];
  }
  throw new Error(`Env '${env}' is not set. Please set it manually.`);
}

export function getAlchemyRPC(chainId: SupportedChainIds, alchemyKey: string) {
  const alchemyId = networkMap[chainId as keyof typeof networkMap];

  if (!alchemyId) {
    throw new Error(`ChainId '${chainId}' is not supported by Alchemy.`);
  }

  // Typescript prevents this, catching it in runtime for js-usages
  if (!alchemyKey) {
    throw new Error(
      `ChainId '${chainId}' is supported by Alchemy, but no 'alchemyKey' was provided.`,
    );
  }

  return `https://${alchemyId}.g.alchemy.com/v2/${alchemyKey}`;
}

export function getPublicRpc(chainId: SupportedChainIds) {
  const publicRpc = publicRPCs[chainId as keyof typeof publicRPCs];
  if (!publicRpc)
    throw new Error(`No default public rpc for '${chainId}' configured.`);
  return publicRpc;
}

export function getQuickNodeRpc(
  chainId: SupportedChainIds,
  options: { quicknodeEndpointName: string; quicknodeToken: string },
) {
  const quickNodeSlug =
    quicknodeNetworkMap[chainId as keyof typeof quicknodeNetworkMap];
  if (!quickNodeSlug) {
    throw new Error(`ChainId '${chainId}' is not supported by Quicknode.`);
  }

  // Typescript prevents this, catching it in runtime for js-usages
  if (!options.quicknodeEndpointName) {
    throw new Error(
      `ChainId '${chainId}' is supported by Quicknode, but no 'quicknodeEndpointName' was provided.`,
    );
  }
  if (!options.quicknodeToken) {
    throw new Error(
      `ChainId '${chainId}' is supported by Quicknode, but no 'quicknodeToken' was provided.`,
    );
  }
  // for mainnet the api slug provided apparently is wrong and the network for whatever reason has no slug at all
  if (chainId === ChainId.mainnet) {
    return `https://${options.quicknodeEndpointName}.quiknode.pro/${options.quicknodeToken}`;
  }
  return `https://${options.quicknodeEndpointName}.${quickNodeSlug}.quiknode.pro/${options.quicknodeToken}`;
}

type GetRPCUrlOptions = {
  alchemyKey?: string;
  quicknodeEndpointName?: string;
  quicknodeToken?: string;
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
export const getRPCUrl = (
  chainId: SupportedChainIds,
  options?: GetRPCUrlOptions,
) => {
  // Typescript prevents this, catching it in runtime for js-usages
  if (!Object.values(ChainId).includes(chainId)) {
    throw new Error(
      `ChainId '${chainId}' is not supported by this library. Feel free to open an issue.`,
    );
  }

  try {
    return getExplicitRPC(chainId);
  } catch (e) {
    // ignore error as getRPCURL should never throw
  }
  if (options?.alchemyKey) {
    try {
      return getAlchemyRPC(chainId, options?.alchemyKey);
    } catch (e) {}
  }
  if (options?.quicknodeEndpointName && options.quicknodeToken) {
    try {
      return getQuickNodeRpc(chainId, {
        quicknodeToken: options.quicknodeToken,
        quicknodeEndpointName: options.quicknodeEndpointName,
      });
    } catch (e) {}
  }
  try {
    return getPublicRpc(chainId);
  } catch (e) {}
};

export { ChainId, ChainList, type SupportedChainIds };
