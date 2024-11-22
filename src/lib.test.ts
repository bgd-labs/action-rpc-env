import { describe } from "node:test";
import { expect, it } from "vitest";
import { networkMap } from "./alchemyIds";
import {
  ChainId,
  alchemySupportedChainIds,
  getAlchemyRPC,
  getNetworkEnv,
  getRPCUrl,
} from "./lib";

Object.keys(process.env).map((key) => delete process.env[key]);

describe("lib", () => {
  it("should use env var if given", () => {
    process.env.RPC_MAINNET = "https://rpc.mainnet.com";
    expect(getRPCUrl(ChainId.mainnet)).toMatchInlineSnapshot(
      `"https://rpc.mainnet.com"`,
    );
  });

  it("should throw if no env var is given and alchemy key not passed", () => {
    process.env.RPC_MAINNET = "";
    expect(() =>
      getAlchemyRPC(ChainId.mainnet, undefined as unknown as string),
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: ChainId '1' is supported by Alchemy, but no 'alchemyKey' was provided.]`,
    );
  });

  it("should generate url if no env var is given and alchemy key is passed", () => {
    process.env.RPC_MAINNET = "";
    expect(
      getRPCUrl(ChainId.mainnet, { alchemyKey: "abc" }),
    ).toMatchInlineSnapshot(`"https://eth-mainnet.g.alchemy.com/v2/abc"`);
  });

  it.each(alchemySupportedChainIds)(
    "should return alchemy supported chain %s",
    (chainId) => {
      expect(getRPCUrl(chainId, { alchemyKey: "abc" })).toMatchSnapshot(
        networkMap[chainId as keyof typeof networkMap],
      );
    },
  );

  it("has sensible env names for RPC_", () => {
    const envs = Object.fromEntries(
      Object.values(ChainId).map((chainId) => [
        getNetworkEnv(chainId),
        chainId,
      ]),
    );

    expect(envs).toMatchInlineSnapshot(`
      {
        "RPC_ARBITRUM": 42161,
        "RPC_ARBITRUM_SEPOLIA": 421614,
        "RPC_AVALANCHE": 43114,
        "RPC_AVALANCHE_FUJI": 43113,
        "RPC_BASE": 8453,
        "RPC_BASE_SEPOLIA": 84532,
        "RPC_BNB": 56,
        "RPC_CELO": 42220,
        "RPC_FANTOM": 250,
        "RPC_FANTOM_TESTNET": 4002,
        "RPC_GNOSIS": 100,
        "RPC_HARMONY": 1666600000,
        "RPC_LINEA": 59144,
        "RPC_MAINNET": 1,
        "RPC_METIS": 1088,
        "RPC_OPTIMISM": 10,
        "RPC_OPTIMISM_SEPOLIA": 11155420,
        "RPC_POLYGON": 137,
        "RPC_POLYGON_AMOY": 80002,
        "RPC_SCROLL": 534352,
        "RPC_SCROLL_SEPOLIA": 534351,
        "RPC_SEPOLIA": 11155111,
        "RPC_ZKEVM": 1101,
        "RPC_ZKSYNC": 324,
      }
    `);
  });
});
