import { describe } from "node:test";
import { expect, it } from "vitest";
import { ChainId, getRPCUrl } from "./lib";

describe("lib", () => {
  it("should use env var if given", () => {
    process.env.RPC_MAINNET = "https://rpc.mainnet.com";
    expect(getRPCUrl(ChainId.mainnet)).toMatchInlineSnapshot(
      `"https://rpc.mainnet.com"`,
    );
  });

  it("should return undefined if no env var is given and alchemy key not passed", () => {
    process.env.RPC_MAINNET = "";
    expect(getRPCUrl(ChainId.mainnet)).toBeUndefined();
  });

  it("should generate url if no env var is given and alchemy key is passed", () => {
    process.env.RPC_MAINNET = "";
    expect(getRPCUrl(ChainId.mainnet, "abc")).toMatchInlineSnapshot(
      `"https://eth-mainnet.g.alchemy.com/v2/abc"`,
    );
  });
});
