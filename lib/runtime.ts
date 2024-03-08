export const isDeno = typeof Deno !== "undefined";
export const isBreezeRuntime = typeof BreezeRuntime !== "undefined";

export function getEnv(key: string): string | undefined {
  return _internals.doGetEnv(key);
}

export function getEnvOrThrow(key: string): string {
  const value = getEnv(key);
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export function serveHttp(
  handler: (req: Request) => Response | Promise<Response>,
) {
  if (isBreezeRuntime) return BreezeRuntime.serveHttp(handler);
  if (isDeno) return Deno.serve(handler);
  throw new Error("Unknown runtime for serveHttp");
}

function doGetEnv(key: string): string | undefined {
  if (isBreezeRuntime) return BreezeRuntime.env.get(key);
  if (isDeno) return Deno.env.get(key);
  throw new Error("Unknown runtime for getEnv");
}

export const _internals = { doGetEnv };
