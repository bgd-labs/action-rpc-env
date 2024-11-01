# Action: `action-rpc-env`

This action iterates over the supported chain ids and sets the corresponding env var.

## Inputs

### `ALCHEMY_API_KEY`

Alchemy API key

If given, the action substitute missing RPC_URLs with one constructed from the given key.

### Usage

```
      - uses: bgd-labs/action-rpc-env@main
        with:
          ALCHEMY_API_KEY: ${{ secrets.ALCHEMY_API_KEY }}
        env:
          RPC_POLYGON: "https://rpc.polygon.com"
```
