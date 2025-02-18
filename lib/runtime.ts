export const isDeno = typeof Deno !== "undefined";
export const isBreezeRuntime = typeof BreezeRuntime !== "undefined";

export function getEnv(key: string): string | undefined {
  return Deno.env.get(key);
}

export function getEnvOrThrow(key: string): string {
  const value = getEnv(key);
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export function serve(
  handler: (req: Request) => Response | Promise<Response>,
) {
  Deno.serve({ port: 0 }, handler);
}

function doGetEnv(key: string): string | undefined {
  return Deno.env.get(key);
}

export const _internals = { doGetEnv };
