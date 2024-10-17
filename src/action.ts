import { debug, exportVariable, getInput } from "@actions/core";
import { getRPCUrl, networkEnv, supportedChainIds } from "./lib";

const alchemyKey =
  getInput("ALCHEMY_API_KEY") !== "" ? getInput("ALCHEMY_API_KEY") : undefined;

/**
 * Iterates over the supported chain ids and sets the corresponding env var
 * if the input is not empty.
 * Tries to use the input first, then constructs the url from the alchemy key.
 */
for (const chainId of supportedChainIds) {
  const envVarName = networkEnv[chainId];
  exportVariable(envVarName, getRPCUrl(chainId, alchemyKey));
}
