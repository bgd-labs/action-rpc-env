# BGD RPC ENV

When working on multichain projects it is a tedious task to setup private RPCs and managing them in your local environment or github actions.
This repository is a suite of tools to streamline the handling of RPC environment variables, by automating the creation and injection of environment variables following a common naming scheme

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
