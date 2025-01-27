import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  bsc,
  celo,
  fantom,
  fantomTestnet,
  gnosis,
  harmonyOne,
  linea,
  mainnet,
  mantle,
  metis,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  polygonZkEvm,
  scroll,
  scrollSepolia,
  sepolia,
  sonic,
  zksync,
} from "viem/chains";

export const ChainId = {
  celo: celo.id,
  mainnet: mainnet.id,
  polygon: polygon.id,
  polygon_amoy: polygonAmoy.id,
  avalanche: avalanche.id,
  avalanche_fuji: avalancheFuji.id,
  arbitrum: arbitrum.id,
  arbitrum_sepolia: arbitrumSepolia.id,
  fantom: fantom.id,
  fantom_testnet: fantomTestnet.id,
  optimism: optimism.id,
  optimism_sepolia: optimismSepolia.id,
  harmony: harmonyOne.id,
  sepolia: sepolia.id,
  scroll: scroll.id,
  scroll_sepolia: scrollSepolia.id,
  sonic: sonic.id,
  mantle: mantle.id,
  metis: metis.id,
  base: base.id,
  base_sepolia: baseSepolia.id,
  bnb: bsc.id,
  gnosis: gnosis.id,
  zkEVM: polygonZkEvm.id,
  zksync: zksync.id,
  linea: linea.id,
} as const;

export const ChainList = {
  [ChainId.mainnet]: mainnet,
  [ChainId.polygon]: polygon,
  [ChainId.polygon_amoy]: polygonAmoy,
  [ChainId.avalanche]: avalanche,
  [ChainId.avalanche_fuji]: avalancheFuji,
  [ChainId.arbitrum]: arbitrum,
  [ChainId.arbitrum_sepolia]: arbitrumSepolia,
  [ChainId.fantom]: fantom,
  [ChainId.fantom_testnet]: fantomTestnet,
  [ChainId.optimism]: optimism,
  [ChainId.optimism_sepolia]: optimismSepolia,
  [ChainId.harmony]: harmonyOne,
  [ChainId.sepolia]: sepolia,
  [ChainId.scroll]: scroll,
  [ChainId.scroll_sepolia]: scrollSepolia,
  [ChainId.sonic]: sonic,
  [ChainId.mantle]: mantle,
  [ChainId.metis]: metis,
  [ChainId.base]: base,
  [ChainId.base_sepolia]: baseSepolia,
  [ChainId.bnb]: bsc,
  [ChainId.gnosis]: gnosis,
  [ChainId.zkEVM]: polygonZkEvm,
  [ChainId.celo]: celo,
  [ChainId.zksync]: zksync,
  [ChainId.linea]: linea,
};
