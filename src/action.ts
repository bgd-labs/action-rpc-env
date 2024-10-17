import actions from "@actions/core";
import { getRPCUrl, networkEnv, supportedChainIds } from "./lib";

const alchemyKey =
	actions.getInput("ALCHEMY_API_KEY") !== ""
		? actions.getInput("ALCHEMY_API_KEY")
		: undefined;

/**
 * Iterates over the supported chain ids and sets the corresponding env var
 * if the input is not empty.
 * Tries to use the input first, then constructs the url from the alchemy key.
 */
for (const chainId of supportedChainIds) {
	const envVarName = networkEnv[chainId];

	const input = actions.getInput(envVarName);

	const hasEnvVar = input && input !== "";

	if (hasEnvVar) {
		actions.debug(`Found '${envVarName}' env var and using it.`);
		process.env[networkEnv[chainId]] = input;
	} else {
		actions.debug(`No '${envVarName}; env var, using alchemy.`);
		process.env[networkEnv[chainId]] = getRPCUrl(chainId, alchemyKey);
	}
}
