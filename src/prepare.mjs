const data = await (
  await fetch("https://app-api.alchemy.com/trpc/config.getNetworkConfig")
).json();

const result = data.result.data.reduce((acc, val) => {
  acc[val.networkChainId] = val.kebabCaseId;
  return acc;
}, {});

console.log(
  `export const networkMap = ${JSON.stringify(result, null, 2)} as const;`,
);
