import {
  assertType,
  Has,
  IsExact,
  IsNullable,
} from "https://deno.land/std@0.212.0/testing/types.ts";

{
  type Result = ReturnType<typeof BreezeRuntime.getDeploymentInfo>;

  assertType<IsExact<Result, BreezeRuntime.DeploymentInfo>>(true);
}

{
  type Name = Parameters<typeof BreezeRuntime.getPlugin>[0];
  type Result = ReturnType<typeof BreezeRuntime.getPlugin>;

  assertType<IsExact<Name, string>>(true);
  assertType<Has<Result, BreezeRuntime.Plugin>>(true);
  assertType<IsNullable<Result>>(true);
}

{
  type Options = Parameters<typeof BreezeRuntime.generateToken>[0];
  type Result = ReturnType<typeof BreezeRuntime.generateToken>;

  assertType<Has<Options, BreezeRuntime.TokenOptions>>(true);
  assertType<IsNullable<Options>>(true);
  assertType<IsExact<Result, string>>(true);
}

{
  type Name = Parameters<typeof BreezeRuntime.pluginFetch>[0];
  type Options = Parameters<typeof BreezeRuntime.pluginFetch>[1];
  type Result = ReturnType<typeof BreezeRuntime.pluginFetch>;

  assertType<IsExact<Name, string>>(true);
  assertType<Has<Options, RequestInit>>(true);
  assertType<IsExact<Result, Promise<Response>>>(true);
}
