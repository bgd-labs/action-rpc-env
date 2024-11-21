import { ChainId } from "./chainIds";

export const publicRPCs = {
  [ChainId.mainnet]: "https://eth.llamarpc.com",
  [ChainId.polygon]: "https://polygon.llamarpc.com",
  [ChainId.arbitrum]: "https://polygon.llamarpc.com",
  [ChainId.base]: "https://base.llamarpc.com",
  [ChainId.bnb]: "https://binance.llamarpc.com",
  [ChainId.metis]: "https://andromeda.metis.io/?owner=1088",
  [ChainId.gnosis]: "https://rpc.ankr.com/gnosis",
  [ChainId.scroll]: "https://rpc.scroll.io",
  [ChainId.zksync]: "https://mainnet.era.zksync.io",
  [ChainId.fantom]: "https://rpc.ftm.tools",
  [ChainId.avalanche]: "https://api.avax.network/ext/bc/C/rpc",
} as const;
