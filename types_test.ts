import {
  assertType,
  Has,
  IsExact,
  IsNullable,
} from "https://deno.land/std@0.212.0/testing/types.ts";

// env
{
  // get
  {
    const value = BreezeRuntime.env.get("foo");

    assertType<IsNullable<typeof value>>(true);
    assertType<Has<typeof value, string>>(true);
  }

  // toObject
  {
    const values = BreezeRuntime.env.toObject();

    assertType<IsExact<typeof values, Record<string, string | undefined>>>(
      true,
    );
  }

  // has
  {
    const value = BreezeRuntime.env.has("foo");

    assertType<IsExact<typeof value, boolean>>(true);
  }
}

// plugins
{
  // get a plugin
  {
    const plugin = BreezeRuntime.plugins.kv;

    assertType<IsExact<typeof plugin, BreezeRuntime.Plugin>>(true);
  }

  // getEndpoint
  {
    const result = BreezeRuntime.plugins.kv.getEndpoint();

    assertType<IsExact<typeof result, Promise<URL>>>(true);
  }
}

// serveHttp
{
  type Params = Parameters<typeof BreezeRuntime.serveHttp>[0];

  assertType<
    IsExact<Params, (req: Request) => Response | Promise<Response>>
  >(true);
}
