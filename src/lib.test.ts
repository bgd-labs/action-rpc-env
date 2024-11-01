import { describe } from "node:test";
import { expect, it } from "vitest";
import { networkMap } from "./alchemyIds";
import { ChainId, getRPCUrl, supportedChainIds } from "./lib";

describe("lib", () => {
  it("should use env var if given", () => {
    process.env.RPC_MAINNET = "https://rpc.mainnet.com";
    expect(getRPCUrl(ChainId.mainnet)).toMatchInlineSnapshot(
      `"https://rpc.mainnet.com"`,
    );
  });

  it("should throw if no env var is given and alchemy key not passed", () => {
    process.env.RPC_MAINNET = "";
    expect(() => getRPCUrl(ChainId.mainnet)).toThrowErrorMatchingInlineSnapshot(
      `[Error: ChainId '1' is supported by Alchemy. Either provide RPC_MAINNET or an 'alchemyKey'.]`,
    );
  });

  it("should generate url if no env var is given and alchemy key is passed", () => {
    process.env.RPC_MAINNET = "";
    expect(getRPCUrl(ChainId.mainnet, "abc")).toMatchInlineSnapshot(
      `"https://eth-mainnet.g.alchemy.com/v2/abc"`,
    );
  });

  it.each(supportedChainIds)("should return supported chain %s", (chainId) => {
    expect(getRPCUrl(chainId, "abc")).toMatchSnapshot(networkMap[chainId]);
  });
});
