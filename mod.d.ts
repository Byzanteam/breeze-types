export namespace BreezeRuntime {
  export interface Env {
    get(key: string): string | undefined;
    toObject(): Record<string, string | undefined>;
    has(key: string): boolean;
  }

  export interface Plugin {
    /**
     * BreezeRuntime.plugins
     *
     * @example
     * Get endpoint of the kv plugin:
     * ```ts
     * BreezeRuntime.plugins.kv.getEndpoint();
     * // return new URL("breeze://kv.plugins")
     * ```
     */
    getEndpoint(subpath?: string): Promise<URL>;
  }

  export const env: Env;

  export const plugins: Record<string, Plugin>;
}
