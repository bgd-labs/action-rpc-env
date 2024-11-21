#!/usr/bin/env node
import "dotenv/config";
import { ChainId, getNetworkEnv, getRPCUrl } from "./lib";

(function print() {
  let env = "";
  let toml = "";
  Object.entries(ChainId).map(([key, chainId]) => {
    const networkEnv = getNetworkEnv(chainId);
    const rpc = getRPCUrl(chainId, { alchemyKey: process.env.ALCHEMY_API_KEY });
    env += `${networkEnv}=${rpc || ""}\n`;
    toml += `${key}="\${${networkEnv}}"\n`;
  });

  console.log("### .env ###");
  console.log(env);

  console.log("### foundry toml ###");
  console.log(toml);
})();
