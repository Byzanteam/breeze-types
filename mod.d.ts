declare namespace BreezeRuntime {
  export interface Env {
    /**
     * Retrieves the value of an environment variable.
     * @param key The name of the environment variable.
     * @returns The value of the environment variable, or undefined if it is not set.
     *
     * @example
     * ```ts
     * BreezeRuntime.env.get("foo");
     * // Returns "bar" if the environment variable "foo" is set to "bar".
     * ```
     */
    get(key: string): string | undefined;

    /**
     * Retrieves all environment variables.
     * @returns A map of all environment variables.
     *
     * @example
     * ```ts
     * BreezeRuntime.env.toObject();
     * // Returns { foo: "bar" } if the environment variable "foo" is set to "bar".
     * ```
     */
    toObject(): Record<string, string | undefined>;

    /**
     * Checks whether an environment variable is set.
     * @param key The name of the environment variable.
     * @returns Whether the environment variable is set.
     *
     * @example
     * ```ts
     * BreezeRuntime.env.has("foo");
     * // Returns true if the environment variable "foo" is set.
     * ```
     */
    has(key: string): boolean;
  }

  export interface Plugin {
    /**
     * Retrieves the plugin's endpoint.
     *
     * @example
     *
     * To retrieve the endpoint of the kv plugin:
     * ```ts
     * BreezeRuntime.plugins.kv.getEndpoint();
     * // Returns new URL("breeze://kv.plugins")
     * ```
     *
     * To retrieve the endpoint of the kv plugin under a subpath:
     * ```ts
     * BreezeRuntime.plugins.kv.getEndpoint("/put");
     * // Returns new URL("breeze://kv.plugins/put")
     * ```
     */
    getEndpoint(subpath?: string): Promise<URL>;
  }

  /**
   * The environment variables.
   */
  export const env: Env;

  /**
   * A map of all plugins.
   */
  export const plugins: Record<string, Plugin>;
}
