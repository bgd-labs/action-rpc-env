import { writeFileSync } from "node:fs";

const data = await (
  await fetch("https://app-api.alchemy.com/trpc/config.getNetworkConfig")
).json();

const result = data.result.data.reduce((acc, val) => {
  acc[val.networkChainId] = val.kebabCaseId;
  return acc;
}, {});

const replacer = (key, value) => {
  if (key === "undefined") return undefined;
  return value;
};

writeFileSync(
  "./src/alchemyIds.ts",
  `export const networkMap = ${JSON.stringify(result, replacer, 2).replace(/"([\d\.]+)"/g, "$1")} as const;`,
);

// api is currently permissioned making it a bit painful to use,
// therefore for now i'm just inlining the response here
const quickNodeApiResponse = {
  data: [
    {
      slug: "linea",
      networks: [
        { slug: "linea-mainnet", name: "Linea Mainnet", chain_id: 59144 },
      ],
    },
    {
      slug: "avax",
      networks: [
        {
          slug: "avalanche-mainnet",
          name: "Avalanche Mainnet",
          chain_id: 43114,
        },
        {
          slug: "avalanche-testnet",
          name: "Avalanche Fuji Testnet",
          chain_id: 43113,
        },
      ],
    },
    {
      slug: "ftm",
      networks: [{ slug: "fantom", name: "Fantom main", chain_id: 250 }],
    },
    {
      slug: "sol",
      networks: [
        { slug: "solana-mainnet", name: "Solana main beta", chain_id: null },
        { slug: "solana-testnet", name: "Solana test", chain_id: null },
        { slug: "solana-devnet", name: "Solana dev", chain_id: null },
      ],
    },
    {
      slug: "arb",
      networks: [
        {
          slug: "arbitrum-testnet",
          name: "Arbitrum rinkeby test",
          chain_id: null,
        },
        { slug: "arbitrum-mainnet", name: "Arbitrum main", chain_id: 42161 },
        {
          slug: "arbitrum-goerli",
          name: "Arbitrum goerli test",
          chain_id: 421613,
        },
        {
          slug: "arbitrum-sepolia",
          name: "Arbitrum Sepolia Testnet",
          chain_id: 421614,
        },
      ],
    },
    {
      slug: "bera",
      networks: [
        {
          slug: "bera-artio",
          name: "Berachain Artio Testnet",
          chain_id: 80085,
        },
        {
          slug: "bera-bartio",
          name: "Berachain bArtio Testnet",
          chain_id: 80084,
        },
        { slug: "bera-mainnet", name: "Berachain Mainnet", chain_id: null },
      ],
    },
    {
      slug: "tron",
      networks: [
        { slug: "tron-mainnet", name: "TRON Mainnet", chain_id: null },
      ],
    },
    {
      slug: "nova",
      networks: [{ slug: "nova-mainnet", name: "Nova main", chain_id: 42170 }],
    },
    {
      slug: "morph",
      networks: [
        { slug: "morph-mainnet", name: "Morph Mainnet", chain_id: 2818 },
        { slug: "morph-holesky", name: "Morph Holesky", chain_id: 2810 },
      ],
    },
    {
      slug: "apt",
      networks: [
        { slug: "aptos-mainnet", name: "Aptos Mainnet", chain_id: null },
        { slug: "aptos-testnet", name: "Aptos Testnet", chain_id: null },
      ],
    },
    {
      slug: "cyber",
      networks: [
        { slug: "cyber-mainnet", name: "Cyber L2 Mainnet", chain_id: 7560 },
        {
          slug: "cyber-sepolia",
          name: "Cyber L2 Sepolia",
          chain_id: 111557560,
        },
      ],
    },
    {
      slug: "strk",
      networks: [
        { slug: "strk-mainnet", name: "Starknet Mainnet", chain_id: null },
        {
          slug: "strk-sepolia",
          name: "Starknet Sepolia Testnet",
          chain_id: null,
        },
      ],
    },
    {
      slug: "flow",
      networks: [
        { slug: "flow-mainnet", name: "Flow Mainnet", chain_id: 747 },
        { slug: "flow-testnet", name: "Flow Testnet", chain_id: 545 },
      ],
    },
    {
      slug: "optimism",
      networks: [
        {
          slug: "optimism-goerli",
          name: "Optimistic ETH goerli test",
          chain_id: null,
        },
        { slug: "optimism", name: "Optimistic ethereum main", chain_id: 10 },
        {
          slug: "optimism-sepolia",
          name: "Optimism Sepolia Testnet",
          chain_id: 11155420,
        },
      ],
    },
    {
      slug: "sei",
      networks: [
        { slug: "sei-arctic", name: "Sei Arctic-1 Devnet", chain_id: null },
        {
          slug: "sei-atlantic",
          name: "Sei Atlantic-2 Testnet",
          chain_id: 1328,
        },
        { slug: "sei-pacific", name: "Sei Pacific-1 Mainnet", chain_id: 1329 },
      ],
    },
    {
      slug: "zkevm",
      networks: [
        {
          slug: "zkevm-mainnet",
          name: "Polygon zkEVM Mainnet",
          chain_id: 1101,
        },
        {
          slug: "zkevm-testnet",
          name: "Polygon zkEVM Testnet",
          chain_id: null,
        },
        {
          slug: "zkevm-cardona",
          name: "zkEVM Cardona Testnet",
          chain_id: 2442,
        },
      ],
    },
    {
      slug: "base",
      networks: [
        { slug: "base-goerli", name: "Base Goerli Testnet", chain_id: null },
        { slug: "base-mainnet", name: "Base Mainnet", chain_id: 8453 },
        { slug: "base-sepolia", name: "Base Sepolia Testnet", chain_id: 84532 },
      ],
    },
    {
      slug: "xdai",
      networks: [{ slug: "xdai", name: "Gnosis main", chain_id: 100 }],
    },
    {
      slug: "scroll",
      networks: [
        { slug: "scroll-mainnet", name: "Scroll Mainnet", chain_id: 534352 },
        { slug: "scroll-testnet", name: "Scroll Testnet", chain_id: 534351 },
      ],
    },
    {
      slug: "near",
      networks: [
        { slug: "near-mainnet", name: "NEAR Mainnet", chain_id: null },
        { slug: "near-testnet", name: "NEAR Test", chain_id: null },
      ],
    },
    {
      slug: "matic",
      networks: [
        { slug: "matic-testnet", name: "Matic testnet", chain_id: null },
        { slug: "matic", name: "Matic main", chain_id: 137 },
        { slug: "matic-amoy", name: "Polygon Amoy Testnet", chain_id: 80002 },
      ],
    },
    {
      slug: "eth",
      networks: [
        { slug: "mainnet", name: "Ethereum main", chain_id: 1 },
        { slug: "ethereum-goerli", name: "Goerli PoS test", chain_id: null },
        {
          slug: "ethereum-holesky",
          name: "Ethereum Holesky Testnet",
          chain_id: 17000,
        },
        { slug: "ropsten", name: "Ropsten PoS test", chain_id: null },
        { slug: "kovan", name: "Kovan PoA test", chain_id: null },
        { slug: "rinkeby", name: "Rinkeby PoA test", chain_id: null },
        {
          slug: "ethereum-sepolia",
          name: "Ethereum Sepolia",
          chain_id: 11155111,
        },
      ],
    },
    {
      slug: "stellar",
      networks: [
        { slug: "stellar-mainnet", name: "Stellar Mainnet", chain_id: null },
        { slug: "stellar-testnet", name: "Stellar Testnet", chain_id: null },
      ],
    },
    {
      slug: "stx",
      networks: [
        { slug: "stacks-mainnet", name: "Stacks Main", chain_id: null },
        { slug: "stacks-nakamoto", name: "Nakamoto Testnet", chain_id: null },
        { slug: "stacks-testnet", name: "Stacks Test", chain_id: null },
      ],
    },
    {
      slug: "bsc",
      networks: [
        { slug: "bsc", name: "BNB main", chain_id: 56 },
        { slug: "bsc-testnet", name: "BNB Smart Chain test", chain_id: 97 },
      ],
    },
    {
      slug: "celo",
      networks: [{ slug: "celo-mainnet", name: "CELO main", chain_id: 42220 }],
    },
    {
      slug: "btc",
      networks: [
        { slug: "btc", name: "Bitcoin main", chain_id: null },
        { slug: "btc-testnet", name: "Bitcoin test", chain_id: null },
      ],
    },
    {
      slug: "imx",
      networks: [
        {
          slug: "imx-testnet",
          name: "Immutable zkEVM Testnet",
          chain_id: 13473,
        },
        { slug: "imx-mainnet", name: "Immutable Mainnet", chain_id: 13371 },
      ],
    },
    {
      slug: "blast",
      networks: [
        { slug: "blast-sepolia", name: "Blast Sepolia", chain_id: 168587773 },
        { slug: "blast-mainnet", name: "Blast Mainnet", chain_id: 81457 },
      ],
    },
    {
      slug: "xai",
      networks: [
        { slug: "xai-mainnet", name: "Xai Mainnet", chain_id: 660279 },
        { slug: "xai-testnet", name: "Xai Testnet", chain_id: 37714555429 },
      ],
    },
    {
      slug: "dot",
      networks: [
        { slug: "dot-mainnet", name: "Polkadot Mainnet", chain_id: null },
      ],
    },
    {
      slug: "mantle",
      networks: [
        { slug: "mantle-mainnet", name: "Mantle Mainnet", chain_id: 5000 },
        { slug: "mantle-sepolia", name: "Mantle Sepolia", chain_id: 5003 },
      ],
    },
    {
      slug: "xrp",
      networks: [
        { slug: "xrp-mainnet", name: "XRP Ledger Mainnet", chain_id: null },
        { slug: "xrp-testnet", name: "XRP Ledger Testnet", chain_id: null },
      ],
    },
    {
      slug: "zksync",
      networks: [
        { slug: "zksync-testnet", name: "zkSync Era Testnet", chain_id: null },
        { slug: "zksync-mainnet", name: "zkSync Era Mainnet", chain_id: 324 },
        { slug: "zksync-sepolia", name: "zkSync Era Sepolia", chain_id: 300 },
      ],
    },
    {
      slug: "fuel",
      networks: [
        { slug: "fuel-sepolia", name: "Fuel Sepolia", chain_id: null },
        { slug: "fuel-mainnet", name: "Fuel Mainnet", chain_id: null },
      ],
    },
    {
      slug: "cosmos",
      networks: [
        { slug: "cosmos-mainnet", name: "Cosmos Mainnet", chain_id: null },
      ],
    },
    {
      slug: "ton",
      networks: [{ slug: "ton-mainnet", name: "TON Mainnet", chain_id: null }],
    },
    {
      slug: "osmosis",
      networks: [
        { slug: "osmosis-mainnet", name: "Osmosis Mainnet", chain_id: null },
      ],
    },
    {
      slug: "unichain",
      networks: [
        { slug: "unichain-mainnet", name: "Unichain Mainnet", chain_id: 130 },
        { slug: "unichain-sepolia", name: "Unichain Sepolia", chain_id: 1301 },
      ],
    },
    {
      slug: "abstract",
      networks: [
        { slug: "abstract-testnet", name: "Abstract Testnet", chain_id: 11124 },
        { slug: "abstract-mainnet", name: "Abstract Mainnet", chain_id: 2741 },
      ],
    },
    {
      slug: "ink",
      networks: [
        { slug: "ink-mainnet", name: "Ink Mainnet", chain_id: null },
        { slug: "ink-sepolia", name: "Ink Sepolia", chain_id: 763373 },
      ],
    },
    {
      slug: "story",
      networks: [
        { slug: "story-mainnet", name: "Story Mainnet", chain_id: null },
        { slug: "story-testnet", name: "Story Iliad Testnet", chain_id: 1513 },
        { slug: "story-odyssey", name: "Story Odyssey", chain_id: 1516 },
      ],
    },
    {
      slug: "celestia",
      networks: [
        { slug: "celestia-mainnet", name: "Celestia Mainnet", chain_id: null },
        {
          slug: "celestia-mocha",
          name: "Celestia Mocha Testnet",
          chain_id: null,
        },
      ],
    },
    {
      slug: "omni",
      networks: [
        { slug: "omni-omega", name: "Omni Omega", chain_id: 164 },
        { slug: "omni-mainnet", name: "Omni Mainnet", chain_id: 166 },
      ],
    },
    {
      slug: "b3",
      networks: [
        { slug: "b3-mainnet", name: "B3 Mainnet", chain_id: 8333 },
        { slug: "b3-sepolia", name: "B3 Sepolia", chain_id: 1993 },
      ],
    },
    {
      slug: "race",
      networks: [
        { slug: "race-mainnet", name: "RACE Mainnet", chain_id: 6805 },
        { slug: "race-sepolia", name: "RACE Testnet", chain_id: 6806 },
      ],
    },
    {
      slug: "kaia",
      networks: [
        { slug: "kaia-kairos", name: "Kaia Kairos Testnet", chain_id: 1001 },
        { slug: "kaia-mainnet", name: "Kaia Mainnet", chain_id: 8217 },
      ],
    },
    {
      slug: "camp",
      networks: [
        { slug: "camp-mainnet", name: "Camp Mainnet", chain_id: null },
        { slug: "camp-sepolia", name: "Camp Sepolia", chain_id: 325000 },
      ],
    },
    {
      slug: "hedera",
      networks: [
        { slug: "hedera-mainnet", name: "Hedera Mainnet", chain_id: 295 },
        { slug: "hedera-testnet", name: "Hedera Testnet", chain_id: 296 },
      ],
    },
  ],
  error: null,
};

const quicknodeNetworkMap = quickNodeApiResponse.data.reduce((acc, network) => {
  network.networks.forEach((nw) => {
    if (nw.chain_id) {
      acc[nw.chain_id] = nw.slug;
    }
  });
  return acc;
}, {});

writeFileSync(
  "./src/quicknodeIds.ts",
  `export const quicknodeNetworkMap = ${JSON.stringify(quicknodeNetworkMap, null, 2).replace(/"([\d\.]+)"/g, "$1")} as const;`,
);
