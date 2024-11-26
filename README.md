# BGD RPC ENV

When working on multichain projects it is a tedious task to setup private RPCs and managing them in your local environment or github actions.
This repository is a suite of tools to streamline the handling of RPC environment variables, by automating the creation and injection of environment variables following a common [naming scheme](./src/lib.test.ts).

## NodeJS: `@bgd-labs/rpc-env`

[![NPM Version](https://img.shields.io/npm/v/%40bgd-labs%2Frpc-env)](https://www.npmjs.com/package/@bgd-labs/rpc-env)

### Usage as a library

```typescript
import { getRPCUrl, ChainId } from "@bgd-labs/rpc-env";

// will fetch the rpc based on a opinionated priorization and does not error if no rpc is found
// 1. checks if `RPC_MAINNET` is set, otherwise
// 2. checks if alchemy key was provided & if alchemy supports the network, otherwise
// 3. checks if quicknode key was provided & if quicknode supports the network, otherwise
// 4. checks if a public rpc is configured
const url = getRPCUrl(ChainId.mainnet, {
  alchemyKey?: "[YOUR_ALCHEMY_KEY]",
  quicknodeToken?: "[QUICKNODE_TOKEN]",
  quicknodeEndpointName?: "[QUICKNODE_ENDPOINT_NAME]"
});

// alternatively you can use the explicit getters, which will throw if no rpc is found
const url = getExplicitRPC(ChainId.mainnet);
const url = getAlchemyRPC(ChainId.mainnet, alchemyKey);
const url = getQuickNodeRpc(ChainId.mainnet, {quicknodeEndpointName, quicknodeToken});
const url = getPublicRpc(ChainId.mainnet);
```

### Usage as cli

The cli will emit explicit rps and a foundry.toml configuration for each network.

```
export ALCHEMY_API_KEY=[YOUR_ALCHEMY_KEY]
export QUICKNODE_TOKEN=[QUICKNODE_TOKEN]
export QUICKNODE_ENDPOINT_NAME=[QUICKNODE_ENDPOINT_NAME]
npx @bgd-labs/rpc-env
```

## Action: `action-rpc-env`

This action iterates over the supported chain ids and sets the corresponding env var.

### Inputs

#### `ALCHEMY_API_KEY`

Alchemy API key

If given, the action substitute missing RPC_URLs with one constructed from the given key.

#### `QUICKNODE_TOKEN` & `QUICKNODE_ENDPOINT_NAME`

Quicknode API key and endpoint name

If given, the action substitute missing RPC_URLs with one constructed from the given token & name pair.

### Supported Environment Variables

The supported environment variables are documented in [this](src/lib.test.ts) test.

#### Usage

```yaml
- uses: bgd-labs/action-rpc-env@main
  with:
    ALCHEMY_API_KEY: ${{ secrets.ALCHEMY_API_KEY }}
    QUICKNODE_TOKEN: ${{ secrets.QUICKNODE_TOKEN }}
    QUICKNODE_ENDPOINT_NAME: ${{ secrets.QUICKNODE_ENDPOINT_NAME }}
  env:
    RPC_POLYGON: "https://rpc.polygon.com"
```
