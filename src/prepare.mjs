const data = await (
  await fetch("https://app-api.alchemy.com/trpc/config.getNetworkConfig")
).json();

const result = data.result.data.reduce((acc, val) => {
  acc[val.networkChainId] = val.kebabCaseId;
  return acc;
}, {});

const replacer = (key, value) => {
  if (key === "undefined") return undefined;
  return value;
};

console.log(
  `export const networkMap = ${JSON.stringify(result, replacer, 2).replace(/"([\d\.]+)"/g, "$1")} as const;`,
);
