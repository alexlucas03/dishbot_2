
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model january
 * 
 */
export type january = $Result.DefaultSelection<Prisma.$januaryPayload>
/**
 * Model february
 * 
 */
export type february = $Result.DefaultSelection<Prisma.$februaryPayload>
/**
 * Model march
 * 
 */
export type march = $Result.DefaultSelection<Prisma.$marchPayload>
/**
 * Model april
 * 
 */
export type april = $Result.DefaultSelection<Prisma.$aprilPayload>
/**
 * Model may
 * 
 */
export type may = $Result.DefaultSelection<Prisma.$mayPayload>
/**
 * Model june
 * 
 */
export type june = $Result.DefaultSelection<Prisma.$junePayload>
/**
 * Model july
 * 
 */
export type july = $Result.DefaultSelection<Prisma.$julyPayload>
/**
 * Model august
 * 
 */
export type august = $Result.DefaultSelection<Prisma.$augustPayload>
/**
 * Model september
 * 
 */
export type september = $Result.DefaultSelection<Prisma.$septemberPayload>
/**
 * Model october
 * 
 */
export type october = $Result.DefaultSelection<Prisma.$octoberPayload>
/**
 * Model november
 * 
 */
export type november = $Result.DefaultSelection<Prisma.$novemberPayload>
/**
 * Model december
 * 
 */
export type december = $Result.DefaultSelection<Prisma.$decemberPayload>
/**
 * Model people2
 * 
 */
export type people2 = $Result.DefaultSelection<Prisma.$people2Payload>
/**
 * Model startend2
 * 
 */
export type startend2 = $Result.DefaultSelection<Prisma.$startend2Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.january`: Exposes CRUD operations for the **january** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Januaries
    * const januaries = await prisma.january.findMany()
    * ```
    */
  get january(): Prisma.januaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.february`: Exposes CRUD operations for the **february** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Februaries
    * const februaries = await prisma.february.findMany()
    * ```
    */
  get february(): Prisma.februaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.march`: Exposes CRUD operations for the **march** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marches
    * const marches = await prisma.march.findMany()
    * ```
    */
  get march(): Prisma.marchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.april`: Exposes CRUD operations for the **april** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aprils
    * const aprils = await prisma.april.findMany()
    * ```
    */
  get april(): Prisma.aprilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.may`: Exposes CRUD operations for the **may** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mays
    * const mays = await prisma.may.findMany()
    * ```
    */
  get may(): Prisma.mayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.june`: Exposes CRUD operations for the **june** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Junes
    * const junes = await prisma.june.findMany()
    * ```
    */
  get june(): Prisma.juneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.july`: Exposes CRUD operations for the **july** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Julies
    * const julies = await prisma.july.findMany()
    * ```
    */
  get july(): Prisma.julyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.august`: Exposes CRUD operations for the **august** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Augusts
    * const augusts = await prisma.august.findMany()
    * ```
    */
  get august(): Prisma.augustDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.september`: Exposes CRUD operations for the **september** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Septembers
    * const septembers = await prisma.september.findMany()
    * ```
    */
  get september(): Prisma.septemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.october`: Exposes CRUD operations for the **october** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Octobers
    * const octobers = await prisma.october.findMany()
    * ```
    */
  get october(): Prisma.octoberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.november`: Exposes CRUD operations for the **november** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novembers
    * const novembers = await prisma.november.findMany()
    * ```
    */
  get november(): Prisma.novemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.december`: Exposes CRUD operations for the **december** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decembers
    * const decembers = await prisma.december.findMany()
    * ```
    */
  get december(): Prisma.decemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.people2`: Exposes CRUD operations for the **people2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People2s
    * const people2s = await prisma.people2.findMany()
    * ```
    */
  get people2(): Prisma.people2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.startend2`: Exposes CRUD operations for the **startend2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Startend2s
    * const startend2s = await prisma.startend2.findMany()
    * ```
    */
  get startend2(): Prisma.startend2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    january: 'january',
    february: 'february',
    march: 'march',
    april: 'april',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
    people2: 'people2',
    startend2: 'startend2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december" | "people2" | "startend2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      january: {
        payload: Prisma.$januaryPayload<ExtArgs>
        fields: Prisma.januaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.januaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.januaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          findFirst: {
            args: Prisma.januaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.januaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          findMany: {
            args: Prisma.januaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>[]
          }
          create: {
            args: Prisma.januaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          createMany: {
            args: Prisma.januaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.januaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>[]
          }
          delete: {
            args: Prisma.januaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          update: {
            args: Prisma.januaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          deleteMany: {
            args: Prisma.januaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.januaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.januaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>[]
          }
          upsert: {
            args: Prisma.januaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$januaryPayload>
          }
          aggregate: {
            args: Prisma.JanuaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJanuary>
          }
          groupBy: {
            args: Prisma.januaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JanuaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.januaryCountArgs<ExtArgs>
            result: $Utils.Optional<JanuaryCountAggregateOutputType> | number
          }
        }
      }
      february: {
        payload: Prisma.$februaryPayload<ExtArgs>
        fields: Prisma.februaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.februaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.februaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          findFirst: {
            args: Prisma.februaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.februaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          findMany: {
            args: Prisma.februaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>[]
          }
          create: {
            args: Prisma.februaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          createMany: {
            args: Prisma.februaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.februaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>[]
          }
          delete: {
            args: Prisma.februaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          update: {
            args: Prisma.februaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          deleteMany: {
            args: Prisma.februaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.februaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.februaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>[]
          }
          upsert: {
            args: Prisma.februaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$februaryPayload>
          }
          aggregate: {
            args: Prisma.FebruaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFebruary>
          }
          groupBy: {
            args: Prisma.februaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FebruaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.februaryCountArgs<ExtArgs>
            result: $Utils.Optional<FebruaryCountAggregateOutputType> | number
          }
        }
      }
      march: {
        payload: Prisma.$marchPayload<ExtArgs>
        fields: Prisma.marchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          findFirst: {
            args: Prisma.marchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          findMany: {
            args: Prisma.marchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>[]
          }
          create: {
            args: Prisma.marchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          createMany: {
            args: Prisma.marchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.marchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>[]
          }
          delete: {
            args: Prisma.marchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          update: {
            args: Prisma.marchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          deleteMany: {
            args: Prisma.marchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.marchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>[]
          }
          upsert: {
            args: Prisma.marchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marchPayload>
          }
          aggregate: {
            args: Prisma.MarchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarch>
          }
          groupBy: {
            args: Prisma.marchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarchGroupByOutputType>[]
          }
          count: {
            args: Prisma.marchCountArgs<ExtArgs>
            result: $Utils.Optional<MarchCountAggregateOutputType> | number
          }
        }
      }
      april: {
        payload: Prisma.$aprilPayload<ExtArgs>
        fields: Prisma.aprilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aprilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aprilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          findFirst: {
            args: Prisma.aprilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aprilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          findMany: {
            args: Prisma.aprilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>[]
          }
          create: {
            args: Prisma.aprilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          createMany: {
            args: Prisma.aprilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.aprilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>[]
          }
          delete: {
            args: Prisma.aprilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          update: {
            args: Prisma.aprilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          deleteMany: {
            args: Prisma.aprilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aprilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.aprilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>[]
          }
          upsert: {
            args: Prisma.aprilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aprilPayload>
          }
          aggregate: {
            args: Prisma.AprilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApril>
          }
          groupBy: {
            args: Prisma.aprilGroupByArgs<ExtArgs>
            result: $Utils.Optional<AprilGroupByOutputType>[]
          }
          count: {
            args: Prisma.aprilCountArgs<ExtArgs>
            result: $Utils.Optional<AprilCountAggregateOutputType> | number
          }
        }
      }
      may: {
        payload: Prisma.$mayPayload<ExtArgs>
        fields: Prisma.mayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          findFirst: {
            args: Prisma.mayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          findMany: {
            args: Prisma.mayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>[]
          }
          create: {
            args: Prisma.mayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          createMany: {
            args: Prisma.mayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>[]
          }
          delete: {
            args: Prisma.mayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          update: {
            args: Prisma.mayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          deleteMany: {
            args: Prisma.mayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>[]
          }
          upsert: {
            args: Prisma.mayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mayPayload>
          }
          aggregate: {
            args: Prisma.MayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMay>
          }
          groupBy: {
            args: Prisma.mayGroupByArgs<ExtArgs>
            result: $Utils.Optional<MayGroupByOutputType>[]
          }
          count: {
            args: Prisma.mayCountArgs<ExtArgs>
            result: $Utils.Optional<MayCountAggregateOutputType> | number
          }
        }
      }
      june: {
        payload: Prisma.$junePayload<ExtArgs>
        fields: Prisma.juneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.juneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.juneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          findFirst: {
            args: Prisma.juneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.juneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          findMany: {
            args: Prisma.juneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>[]
          }
          create: {
            args: Prisma.juneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          createMany: {
            args: Prisma.juneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.juneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>[]
          }
          delete: {
            args: Prisma.juneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          update: {
            args: Prisma.juneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          deleteMany: {
            args: Prisma.juneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.juneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.juneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>[]
          }
          upsert: {
            args: Prisma.juneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$junePayload>
          }
          aggregate: {
            args: Prisma.JuneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJune>
          }
          groupBy: {
            args: Prisma.juneGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuneGroupByOutputType>[]
          }
          count: {
            args: Prisma.juneCountArgs<ExtArgs>
            result: $Utils.Optional<JuneCountAggregateOutputType> | number
          }
        }
      }
      july: {
        payload: Prisma.$julyPayload<ExtArgs>
        fields: Prisma.julyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.julyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.julyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          findFirst: {
            args: Prisma.julyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.julyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          findMany: {
            args: Prisma.julyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>[]
          }
          create: {
            args: Prisma.julyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          createMany: {
            args: Prisma.julyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.julyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>[]
          }
          delete: {
            args: Prisma.julyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          update: {
            args: Prisma.julyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          deleteMany: {
            args: Prisma.julyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.julyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.julyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>[]
          }
          upsert: {
            args: Prisma.julyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$julyPayload>
          }
          aggregate: {
            args: Prisma.JulyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuly>
          }
          groupBy: {
            args: Prisma.julyGroupByArgs<ExtArgs>
            result: $Utils.Optional<JulyGroupByOutputType>[]
          }
          count: {
            args: Prisma.julyCountArgs<ExtArgs>
            result: $Utils.Optional<JulyCountAggregateOutputType> | number
          }
        }
      }
      august: {
        payload: Prisma.$augustPayload<ExtArgs>
        fields: Prisma.augustFieldRefs
        operations: {
          findUnique: {
            args: Prisma.augustFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.augustFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          findFirst: {
            args: Prisma.augustFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.augustFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          findMany: {
            args: Prisma.augustFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>[]
          }
          create: {
            args: Prisma.augustCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          createMany: {
            args: Prisma.augustCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.augustCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>[]
          }
          delete: {
            args: Prisma.augustDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          update: {
            args: Prisma.augustUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          deleteMany: {
            args: Prisma.augustDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.augustUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.augustUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>[]
          }
          upsert: {
            args: Prisma.augustUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$augustPayload>
          }
          aggregate: {
            args: Prisma.AugustAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAugust>
          }
          groupBy: {
            args: Prisma.augustGroupByArgs<ExtArgs>
            result: $Utils.Optional<AugustGroupByOutputType>[]
          }
          count: {
            args: Prisma.augustCountArgs<ExtArgs>
            result: $Utils.Optional<AugustCountAggregateOutputType> | number
          }
        }
      }
      september: {
        payload: Prisma.$septemberPayload<ExtArgs>
        fields: Prisma.septemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.septemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.septemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          findFirst: {
            args: Prisma.septemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.septemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          findMany: {
            args: Prisma.septemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>[]
          }
          create: {
            args: Prisma.septemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          createMany: {
            args: Prisma.septemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.septemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>[]
          }
          delete: {
            args: Prisma.septemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          update: {
            args: Prisma.septemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          deleteMany: {
            args: Prisma.septemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.septemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.septemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>[]
          }
          upsert: {
            args: Prisma.septemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$septemberPayload>
          }
          aggregate: {
            args: Prisma.SeptemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeptember>
          }
          groupBy: {
            args: Prisma.septemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeptemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.septemberCountArgs<ExtArgs>
            result: $Utils.Optional<SeptemberCountAggregateOutputType> | number
          }
        }
      }
      october: {
        payload: Prisma.$octoberPayload<ExtArgs>
        fields: Prisma.octoberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.octoberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.octoberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          findFirst: {
            args: Prisma.octoberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.octoberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          findMany: {
            args: Prisma.octoberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>[]
          }
          create: {
            args: Prisma.octoberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          createMany: {
            args: Prisma.octoberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.octoberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>[]
          }
          delete: {
            args: Prisma.octoberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          update: {
            args: Prisma.octoberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          deleteMany: {
            args: Prisma.octoberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.octoberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.octoberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>[]
          }
          upsert: {
            args: Prisma.octoberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$octoberPayload>
          }
          aggregate: {
            args: Prisma.OctoberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOctober>
          }
          groupBy: {
            args: Prisma.octoberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OctoberGroupByOutputType>[]
          }
          count: {
            args: Prisma.octoberCountArgs<ExtArgs>
            result: $Utils.Optional<OctoberCountAggregateOutputType> | number
          }
        }
      }
      november: {
        payload: Prisma.$novemberPayload<ExtArgs>
        fields: Prisma.novemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.novemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.novemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          findFirst: {
            args: Prisma.novemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.novemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          findMany: {
            args: Prisma.novemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>[]
          }
          create: {
            args: Prisma.novemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          createMany: {
            args: Prisma.novemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.novemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>[]
          }
          delete: {
            args: Prisma.novemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          update: {
            args: Prisma.novemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          deleteMany: {
            args: Prisma.novemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.novemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.novemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>[]
          }
          upsert: {
            args: Prisma.novemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novemberPayload>
          }
          aggregate: {
            args: Prisma.NovemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovember>
          }
          groupBy: {
            args: Prisma.novemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.novemberCountArgs<ExtArgs>
            result: $Utils.Optional<NovemberCountAggregateOutputType> | number
          }
        }
      }
      december: {
        payload: Prisma.$decemberPayload<ExtArgs>
        fields: Prisma.decemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.decemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.decemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          findFirst: {
            args: Prisma.decemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.decemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          findMany: {
            args: Prisma.decemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>[]
          }
          create: {
            args: Prisma.decemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          createMany: {
            args: Prisma.decemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.decemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>[]
          }
          delete: {
            args: Prisma.decemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          update: {
            args: Prisma.decemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          deleteMany: {
            args: Prisma.decemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.decemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.decemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>[]
          }
          upsert: {
            args: Prisma.decemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decemberPayload>
          }
          aggregate: {
            args: Prisma.DecemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecember>
          }
          groupBy: {
            args: Prisma.decemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.decemberCountArgs<ExtArgs>
            result: $Utils.Optional<DecemberCountAggregateOutputType> | number
          }
        }
      }
      people2: {
        payload: Prisma.$people2Payload<ExtArgs>
        fields: Prisma.people2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.people2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.people2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          findFirst: {
            args: Prisma.people2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.people2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          findMany: {
            args: Prisma.people2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>[]
          }
          create: {
            args: Prisma.people2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          createMany: {
            args: Prisma.people2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.people2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>[]
          }
          delete: {
            args: Prisma.people2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          update: {
            args: Prisma.people2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          deleteMany: {
            args: Prisma.people2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.people2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.people2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>[]
          }
          upsert: {
            args: Prisma.people2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$people2Payload>
          }
          aggregate: {
            args: Prisma.People2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeople2>
          }
          groupBy: {
            args: Prisma.people2GroupByArgs<ExtArgs>
            result: $Utils.Optional<People2GroupByOutputType>[]
          }
          count: {
            args: Prisma.people2CountArgs<ExtArgs>
            result: $Utils.Optional<People2CountAggregateOutputType> | number
          }
        }
      }
      startend2: {
        payload: Prisma.$startend2Payload<ExtArgs>
        fields: Prisma.startend2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.startend2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.startend2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          findFirst: {
            args: Prisma.startend2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.startend2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          findMany: {
            args: Prisma.startend2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>[]
          }
          create: {
            args: Prisma.startend2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          createMany: {
            args: Prisma.startend2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.startend2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>[]
          }
          delete: {
            args: Prisma.startend2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          update: {
            args: Prisma.startend2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          deleteMany: {
            args: Prisma.startend2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.startend2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.startend2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>[]
          }
          upsert: {
            args: Prisma.startend2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startend2Payload>
          }
          aggregate: {
            args: Prisma.Startend2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartend2>
          }
          groupBy: {
            args: Prisma.startend2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Startend2GroupByOutputType>[]
          }
          count: {
            args: Prisma.startend2CountArgs<ExtArgs>
            result: $Utils.Optional<Startend2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    january?: januaryOmit
    february?: februaryOmit
    march?: marchOmit
    april?: aprilOmit
    may?: mayOmit
    june?: juneOmit
    july?: julyOmit
    august?: augustOmit
    september?: septemberOmit
    october?: octoberOmit
    november?: novemberOmit
    december?: decemberOmit
    people2?: people2Omit
    startend2?: startend2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model january
   */

  export type AggregateJanuary = {
    _count: JanuaryCountAggregateOutputType | null
    _min: JanuaryMinAggregateOutputType | null
    _max: JanuaryMaxAggregateOutputType | null
  }

  export type JanuaryMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JanuaryMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JanuaryCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type JanuaryMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JanuaryMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JanuaryCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type JanuaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which january to aggregate.
     */
    where?: januaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of januaries to fetch.
     */
    orderBy?: januaryOrderByWithRelationInput | januaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: januaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` januaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` januaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned januaries
    **/
    _count?: true | JanuaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JanuaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JanuaryMaxAggregateInputType
  }

  export type GetJanuaryAggregateType<T extends JanuaryAggregateArgs> = {
        [P in keyof T & keyof AggregateJanuary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJanuary[P]>
      : GetScalarType<T[P], AggregateJanuary[P]>
  }




  export type januaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: januaryWhereInput
    orderBy?: januaryOrderByWithAggregationInput | januaryOrderByWithAggregationInput[]
    by: JanuaryScalarFieldEnum[] | JanuaryScalarFieldEnum
    having?: januaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JanuaryCountAggregateInputType | true
    _min?: JanuaryMinAggregateInputType
    _max?: JanuaryMaxAggregateInputType
  }

  export type JanuaryGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: JanuaryCountAggregateOutputType | null
    _min: JanuaryMinAggregateOutputType | null
    _max: JanuaryMaxAggregateOutputType | null
  }

  type GetJanuaryGroupByPayload<T extends januaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JanuaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JanuaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JanuaryGroupByOutputType[P]>
            : GetScalarType<T[P], JanuaryGroupByOutputType[P]>
        }
      >
    >


  export type januarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["january"]>

  export type januarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["january"]>

  export type januarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["january"]>

  export type januarySelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type januaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["january"]>

  export type $januaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "january"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["january"]>
    composites: {}
  }

  type januaryGetPayload<S extends boolean | null | undefined | januaryDefaultArgs> = $Result.GetResult<Prisma.$januaryPayload, S>

  type januaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<januaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JanuaryCountAggregateInputType | true
    }

  export interface januaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['january'], meta: { name: 'january' } }
    /**
     * Find zero or one January that matches the filter.
     * @param {januaryFindUniqueArgs} args - Arguments to find a January
     * @example
     * // Get one January
     * const january = await prisma.january.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends januaryFindUniqueArgs>(args: SelectSubset<T, januaryFindUniqueArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one January that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {januaryFindUniqueOrThrowArgs} args - Arguments to find a January
     * @example
     * // Get one January
     * const january = await prisma.january.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends januaryFindUniqueOrThrowArgs>(args: SelectSubset<T, januaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first January that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryFindFirstArgs} args - Arguments to find a January
     * @example
     * // Get one January
     * const january = await prisma.january.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends januaryFindFirstArgs>(args?: SelectSubset<T, januaryFindFirstArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first January that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryFindFirstOrThrowArgs} args - Arguments to find a January
     * @example
     * // Get one January
     * const january = await prisma.january.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends januaryFindFirstOrThrowArgs>(args?: SelectSubset<T, januaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Januaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Januaries
     * const januaries = await prisma.january.findMany()
     * 
     * // Get first 10 Januaries
     * const januaries = await prisma.january.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const januaryWithIdOnly = await prisma.january.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends januaryFindManyArgs>(args?: SelectSubset<T, januaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a January.
     * @param {januaryCreateArgs} args - Arguments to create a January.
     * @example
     * // Create one January
     * const January = await prisma.january.create({
     *   data: {
     *     // ... data to create a January
     *   }
     * })
     * 
     */
    create<T extends januaryCreateArgs>(args: SelectSubset<T, januaryCreateArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Januaries.
     * @param {januaryCreateManyArgs} args - Arguments to create many Januaries.
     * @example
     * // Create many Januaries
     * const january = await prisma.january.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends januaryCreateManyArgs>(args?: SelectSubset<T, januaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Januaries and returns the data saved in the database.
     * @param {januaryCreateManyAndReturnArgs} args - Arguments to create many Januaries.
     * @example
     * // Create many Januaries
     * const january = await prisma.january.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Januaries and only return the `id`
     * const januaryWithIdOnly = await prisma.january.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends januaryCreateManyAndReturnArgs>(args?: SelectSubset<T, januaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a January.
     * @param {januaryDeleteArgs} args - Arguments to delete one January.
     * @example
     * // Delete one January
     * const January = await prisma.january.delete({
     *   where: {
     *     // ... filter to delete one January
     *   }
     * })
     * 
     */
    delete<T extends januaryDeleteArgs>(args: SelectSubset<T, januaryDeleteArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one January.
     * @param {januaryUpdateArgs} args - Arguments to update one January.
     * @example
     * // Update one January
     * const january = await prisma.january.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends januaryUpdateArgs>(args: SelectSubset<T, januaryUpdateArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Januaries.
     * @param {januaryDeleteManyArgs} args - Arguments to filter Januaries to delete.
     * @example
     * // Delete a few Januaries
     * const { count } = await prisma.january.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends januaryDeleteManyArgs>(args?: SelectSubset<T, januaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Januaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Januaries
     * const january = await prisma.january.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends januaryUpdateManyArgs>(args: SelectSubset<T, januaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Januaries and returns the data updated in the database.
     * @param {januaryUpdateManyAndReturnArgs} args - Arguments to update many Januaries.
     * @example
     * // Update many Januaries
     * const january = await prisma.january.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Januaries and only return the `id`
     * const januaryWithIdOnly = await prisma.january.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends januaryUpdateManyAndReturnArgs>(args: SelectSubset<T, januaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one January.
     * @param {januaryUpsertArgs} args - Arguments to update or create a January.
     * @example
     * // Update or create a January
     * const january = await prisma.january.upsert({
     *   create: {
     *     // ... data to create a January
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the January we want to update
     *   }
     * })
     */
    upsert<T extends januaryUpsertArgs>(args: SelectSubset<T, januaryUpsertArgs<ExtArgs>>): Prisma__januaryClient<$Result.GetResult<Prisma.$januaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Januaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryCountArgs} args - Arguments to filter Januaries to count.
     * @example
     * // Count the number of Januaries
     * const count = await prisma.january.count({
     *   where: {
     *     // ... the filter for the Januaries we want to count
     *   }
     * })
    **/
    count<T extends januaryCountArgs>(
      args?: Subset<T, januaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JanuaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a January.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JanuaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JanuaryAggregateArgs>(args: Subset<T, JanuaryAggregateArgs>): Prisma.PrismaPromise<GetJanuaryAggregateType<T>>

    /**
     * Group by January.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {januaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends januaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: januaryGroupByArgs['orderBy'] }
        : { orderBy?: januaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, januaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJanuaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the january model
   */
  readonly fields: januaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for january.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__januaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the january model
   */
  interface januaryFieldRefs {
    readonly id: FieldRef<"january", 'String'>
    readonly year: FieldRef<"january", 'String'>
    readonly day: FieldRef<"january", 'String'>
    readonly owner: FieldRef<"january", 'String'>
    readonly type: FieldRef<"january", 'String'>
  }
    

  // Custom InputTypes
  /**
   * january findUnique
   */
  export type januaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter, which january to fetch.
     */
    where: januaryWhereUniqueInput
  }

  /**
   * january findUniqueOrThrow
   */
  export type januaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter, which january to fetch.
     */
    where: januaryWhereUniqueInput
  }

  /**
   * january findFirst
   */
  export type januaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter, which january to fetch.
     */
    where?: januaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of januaries to fetch.
     */
    orderBy?: januaryOrderByWithRelationInput | januaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for januaries.
     */
    cursor?: januaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` januaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` januaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of januaries.
     */
    distinct?: JanuaryScalarFieldEnum | JanuaryScalarFieldEnum[]
  }

  /**
   * january findFirstOrThrow
   */
  export type januaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter, which january to fetch.
     */
    where?: januaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of januaries to fetch.
     */
    orderBy?: januaryOrderByWithRelationInput | januaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for januaries.
     */
    cursor?: januaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` januaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` januaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of januaries.
     */
    distinct?: JanuaryScalarFieldEnum | JanuaryScalarFieldEnum[]
  }

  /**
   * january findMany
   */
  export type januaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter, which januaries to fetch.
     */
    where?: januaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of januaries to fetch.
     */
    orderBy?: januaryOrderByWithRelationInput | januaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing januaries.
     */
    cursor?: januaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` januaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` januaries.
     */
    skip?: number
    distinct?: JanuaryScalarFieldEnum | JanuaryScalarFieldEnum[]
  }

  /**
   * january create
   */
  export type januaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * The data needed to create a january.
     */
    data: XOR<januaryCreateInput, januaryUncheckedCreateInput>
  }

  /**
   * january createMany
   */
  export type januaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many januaries.
     */
    data: januaryCreateManyInput | januaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * january createManyAndReturn
   */
  export type januaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * The data used to create many januaries.
     */
    data: januaryCreateManyInput | januaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * january update
   */
  export type januaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * The data needed to update a january.
     */
    data: XOR<januaryUpdateInput, januaryUncheckedUpdateInput>
    /**
     * Choose, which january to update.
     */
    where: januaryWhereUniqueInput
  }

  /**
   * january updateMany
   */
  export type januaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update januaries.
     */
    data: XOR<januaryUpdateManyMutationInput, januaryUncheckedUpdateManyInput>
    /**
     * Filter which januaries to update
     */
    where?: januaryWhereInput
    /**
     * Limit how many januaries to update.
     */
    limit?: number
  }

  /**
   * january updateManyAndReturn
   */
  export type januaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * The data used to update januaries.
     */
    data: XOR<januaryUpdateManyMutationInput, januaryUncheckedUpdateManyInput>
    /**
     * Filter which januaries to update
     */
    where?: januaryWhereInput
    /**
     * Limit how many januaries to update.
     */
    limit?: number
  }

  /**
   * january upsert
   */
  export type januaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * The filter to search for the january to update in case it exists.
     */
    where: januaryWhereUniqueInput
    /**
     * In case the january found by the `where` argument doesn't exist, create a new january with this data.
     */
    create: XOR<januaryCreateInput, januaryUncheckedCreateInput>
    /**
     * In case the january was found with the provided `where` argument, update it with this data.
     */
    update: XOR<januaryUpdateInput, januaryUncheckedUpdateInput>
  }

  /**
   * january delete
   */
  export type januaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
    /**
     * Filter which january to delete.
     */
    where: januaryWhereUniqueInput
  }

  /**
   * january deleteMany
   */
  export type januaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which januaries to delete
     */
    where?: januaryWhereInput
    /**
     * Limit how many januaries to delete.
     */
    limit?: number
  }

  /**
   * january without action
   */
  export type januaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the january
     */
    select?: januarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the january
     */
    omit?: januaryOmit<ExtArgs> | null
  }


  /**
   * Model february
   */

  export type AggregateFebruary = {
    _count: FebruaryCountAggregateOutputType | null
    _min: FebruaryMinAggregateOutputType | null
    _max: FebruaryMaxAggregateOutputType | null
  }

  export type FebruaryMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type FebruaryMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type FebruaryCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type FebruaryMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type FebruaryMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type FebruaryCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type FebruaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which february to aggregate.
     */
    where?: februaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of februaries to fetch.
     */
    orderBy?: februaryOrderByWithRelationInput | februaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: februaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` februaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` februaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned februaries
    **/
    _count?: true | FebruaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FebruaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FebruaryMaxAggregateInputType
  }

  export type GetFebruaryAggregateType<T extends FebruaryAggregateArgs> = {
        [P in keyof T & keyof AggregateFebruary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFebruary[P]>
      : GetScalarType<T[P], AggregateFebruary[P]>
  }




  export type februaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: februaryWhereInput
    orderBy?: februaryOrderByWithAggregationInput | februaryOrderByWithAggregationInput[]
    by: FebruaryScalarFieldEnum[] | FebruaryScalarFieldEnum
    having?: februaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FebruaryCountAggregateInputType | true
    _min?: FebruaryMinAggregateInputType
    _max?: FebruaryMaxAggregateInputType
  }

  export type FebruaryGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: FebruaryCountAggregateOutputType | null
    _min: FebruaryMinAggregateOutputType | null
    _max: FebruaryMaxAggregateOutputType | null
  }

  type GetFebruaryGroupByPayload<T extends februaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FebruaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FebruaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FebruaryGroupByOutputType[P]>
            : GetScalarType<T[P], FebruaryGroupByOutputType[P]>
        }
      >
    >


  export type februarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["february"]>

  export type februarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["february"]>

  export type februarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["february"]>

  export type februarySelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type februaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["february"]>

  export type $februaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "february"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["february"]>
    composites: {}
  }

  type februaryGetPayload<S extends boolean | null | undefined | februaryDefaultArgs> = $Result.GetResult<Prisma.$februaryPayload, S>

  type februaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<februaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FebruaryCountAggregateInputType | true
    }

  export interface februaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['february'], meta: { name: 'february' } }
    /**
     * Find zero or one February that matches the filter.
     * @param {februaryFindUniqueArgs} args - Arguments to find a February
     * @example
     * // Get one February
     * const february = await prisma.february.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends februaryFindUniqueArgs>(args: SelectSubset<T, februaryFindUniqueArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one February that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {februaryFindUniqueOrThrowArgs} args - Arguments to find a February
     * @example
     * // Get one February
     * const february = await prisma.february.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends februaryFindUniqueOrThrowArgs>(args: SelectSubset<T, februaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first February that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryFindFirstArgs} args - Arguments to find a February
     * @example
     * // Get one February
     * const february = await prisma.february.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends februaryFindFirstArgs>(args?: SelectSubset<T, februaryFindFirstArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first February that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryFindFirstOrThrowArgs} args - Arguments to find a February
     * @example
     * // Get one February
     * const february = await prisma.february.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends februaryFindFirstOrThrowArgs>(args?: SelectSubset<T, februaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Februaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Februaries
     * const februaries = await prisma.february.findMany()
     * 
     * // Get first 10 Februaries
     * const februaries = await prisma.february.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const februaryWithIdOnly = await prisma.february.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends februaryFindManyArgs>(args?: SelectSubset<T, februaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a February.
     * @param {februaryCreateArgs} args - Arguments to create a February.
     * @example
     * // Create one February
     * const February = await prisma.february.create({
     *   data: {
     *     // ... data to create a February
     *   }
     * })
     * 
     */
    create<T extends februaryCreateArgs>(args: SelectSubset<T, februaryCreateArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Februaries.
     * @param {februaryCreateManyArgs} args - Arguments to create many Februaries.
     * @example
     * // Create many Februaries
     * const february = await prisma.february.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends februaryCreateManyArgs>(args?: SelectSubset<T, februaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Februaries and returns the data saved in the database.
     * @param {februaryCreateManyAndReturnArgs} args - Arguments to create many Februaries.
     * @example
     * // Create many Februaries
     * const february = await prisma.february.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Februaries and only return the `id`
     * const februaryWithIdOnly = await prisma.february.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends februaryCreateManyAndReturnArgs>(args?: SelectSubset<T, februaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a February.
     * @param {februaryDeleteArgs} args - Arguments to delete one February.
     * @example
     * // Delete one February
     * const February = await prisma.february.delete({
     *   where: {
     *     // ... filter to delete one February
     *   }
     * })
     * 
     */
    delete<T extends februaryDeleteArgs>(args: SelectSubset<T, februaryDeleteArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one February.
     * @param {februaryUpdateArgs} args - Arguments to update one February.
     * @example
     * // Update one February
     * const february = await prisma.february.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends februaryUpdateArgs>(args: SelectSubset<T, februaryUpdateArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Februaries.
     * @param {februaryDeleteManyArgs} args - Arguments to filter Februaries to delete.
     * @example
     * // Delete a few Februaries
     * const { count } = await prisma.february.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends februaryDeleteManyArgs>(args?: SelectSubset<T, februaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Februaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Februaries
     * const february = await prisma.february.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends februaryUpdateManyArgs>(args: SelectSubset<T, februaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Februaries and returns the data updated in the database.
     * @param {februaryUpdateManyAndReturnArgs} args - Arguments to update many Februaries.
     * @example
     * // Update many Februaries
     * const february = await prisma.february.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Februaries and only return the `id`
     * const februaryWithIdOnly = await prisma.february.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends februaryUpdateManyAndReturnArgs>(args: SelectSubset<T, februaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one February.
     * @param {februaryUpsertArgs} args - Arguments to update or create a February.
     * @example
     * // Update or create a February
     * const february = await prisma.february.upsert({
     *   create: {
     *     // ... data to create a February
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the February we want to update
     *   }
     * })
     */
    upsert<T extends februaryUpsertArgs>(args: SelectSubset<T, februaryUpsertArgs<ExtArgs>>): Prisma__februaryClient<$Result.GetResult<Prisma.$februaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Februaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryCountArgs} args - Arguments to filter Februaries to count.
     * @example
     * // Count the number of Februaries
     * const count = await prisma.february.count({
     *   where: {
     *     // ... the filter for the Februaries we want to count
     *   }
     * })
    **/
    count<T extends februaryCountArgs>(
      args?: Subset<T, februaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FebruaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a February.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FebruaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FebruaryAggregateArgs>(args: Subset<T, FebruaryAggregateArgs>): Prisma.PrismaPromise<GetFebruaryAggregateType<T>>

    /**
     * Group by February.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {februaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends februaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: februaryGroupByArgs['orderBy'] }
        : { orderBy?: februaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, februaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFebruaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the february model
   */
  readonly fields: februaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for february.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__februaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the february model
   */
  interface februaryFieldRefs {
    readonly id: FieldRef<"february", 'String'>
    readonly year: FieldRef<"february", 'String'>
    readonly day: FieldRef<"february", 'String'>
    readonly owner: FieldRef<"february", 'String'>
    readonly type: FieldRef<"february", 'String'>
  }
    

  // Custom InputTypes
  /**
   * february findUnique
   */
  export type februaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter, which february to fetch.
     */
    where: februaryWhereUniqueInput
  }

  /**
   * february findUniqueOrThrow
   */
  export type februaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter, which february to fetch.
     */
    where: februaryWhereUniqueInput
  }

  /**
   * february findFirst
   */
  export type februaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter, which february to fetch.
     */
    where?: februaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of februaries to fetch.
     */
    orderBy?: februaryOrderByWithRelationInput | februaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for februaries.
     */
    cursor?: februaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` februaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` februaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of februaries.
     */
    distinct?: FebruaryScalarFieldEnum | FebruaryScalarFieldEnum[]
  }

  /**
   * february findFirstOrThrow
   */
  export type februaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter, which february to fetch.
     */
    where?: februaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of februaries to fetch.
     */
    orderBy?: februaryOrderByWithRelationInput | februaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for februaries.
     */
    cursor?: februaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` februaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` februaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of februaries.
     */
    distinct?: FebruaryScalarFieldEnum | FebruaryScalarFieldEnum[]
  }

  /**
   * february findMany
   */
  export type februaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter, which februaries to fetch.
     */
    where?: februaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of februaries to fetch.
     */
    orderBy?: februaryOrderByWithRelationInput | februaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing februaries.
     */
    cursor?: februaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` februaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` februaries.
     */
    skip?: number
    distinct?: FebruaryScalarFieldEnum | FebruaryScalarFieldEnum[]
  }

  /**
   * february create
   */
  export type februaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * The data needed to create a february.
     */
    data: XOR<februaryCreateInput, februaryUncheckedCreateInput>
  }

  /**
   * february createMany
   */
  export type februaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many februaries.
     */
    data: februaryCreateManyInput | februaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * february createManyAndReturn
   */
  export type februaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * The data used to create many februaries.
     */
    data: februaryCreateManyInput | februaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * february update
   */
  export type februaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * The data needed to update a february.
     */
    data: XOR<februaryUpdateInput, februaryUncheckedUpdateInput>
    /**
     * Choose, which february to update.
     */
    where: februaryWhereUniqueInput
  }

  /**
   * february updateMany
   */
  export type februaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update februaries.
     */
    data: XOR<februaryUpdateManyMutationInput, februaryUncheckedUpdateManyInput>
    /**
     * Filter which februaries to update
     */
    where?: februaryWhereInput
    /**
     * Limit how many februaries to update.
     */
    limit?: number
  }

  /**
   * february updateManyAndReturn
   */
  export type februaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * The data used to update februaries.
     */
    data: XOR<februaryUpdateManyMutationInput, februaryUncheckedUpdateManyInput>
    /**
     * Filter which februaries to update
     */
    where?: februaryWhereInput
    /**
     * Limit how many februaries to update.
     */
    limit?: number
  }

  /**
   * february upsert
   */
  export type februaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * The filter to search for the february to update in case it exists.
     */
    where: februaryWhereUniqueInput
    /**
     * In case the february found by the `where` argument doesn't exist, create a new february with this data.
     */
    create: XOR<februaryCreateInput, februaryUncheckedCreateInput>
    /**
     * In case the february was found with the provided `where` argument, update it with this data.
     */
    update: XOR<februaryUpdateInput, februaryUncheckedUpdateInput>
  }

  /**
   * february delete
   */
  export type februaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
    /**
     * Filter which february to delete.
     */
    where: februaryWhereUniqueInput
  }

  /**
   * february deleteMany
   */
  export type februaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which februaries to delete
     */
    where?: februaryWhereInput
    /**
     * Limit how many februaries to delete.
     */
    limit?: number
  }

  /**
   * february without action
   */
  export type februaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the february
     */
    select?: februarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the february
     */
    omit?: februaryOmit<ExtArgs> | null
  }


  /**
   * Model march
   */

  export type AggregateMarch = {
    _count: MarchCountAggregateOutputType | null
    _min: MarchMinAggregateOutputType | null
    _max: MarchMaxAggregateOutputType | null
  }

  export type MarchMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type MarchMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type MarchCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type MarchMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type MarchMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type MarchCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type MarchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which march to aggregate.
     */
    where?: marchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marches to fetch.
     */
    orderBy?: marchOrderByWithRelationInput | marchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marches
    **/
    _count?: true | MarchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarchMaxAggregateInputType
  }

  export type GetMarchAggregateType<T extends MarchAggregateArgs> = {
        [P in keyof T & keyof AggregateMarch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarch[P]>
      : GetScalarType<T[P], AggregateMarch[P]>
  }




  export type marchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marchWhereInput
    orderBy?: marchOrderByWithAggregationInput | marchOrderByWithAggregationInput[]
    by: MarchScalarFieldEnum[] | MarchScalarFieldEnum
    having?: marchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarchCountAggregateInputType | true
    _min?: MarchMinAggregateInputType
    _max?: MarchMaxAggregateInputType
  }

  export type MarchGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: MarchCountAggregateOutputType | null
    _min: MarchMinAggregateOutputType | null
    _max: MarchMaxAggregateOutputType | null
  }

  type GetMarchGroupByPayload<T extends marchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarchGroupByOutputType[P]>
            : GetScalarType<T[P], MarchGroupByOutputType[P]>
        }
      >
    >


  export type marchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["march"]>

  export type marchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["march"]>

  export type marchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["march"]>

  export type marchSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type marchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["march"]>

  export type $marchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "march"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["march"]>
    composites: {}
  }

  type marchGetPayload<S extends boolean | null | undefined | marchDefaultArgs> = $Result.GetResult<Prisma.$marchPayload, S>

  type marchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarchCountAggregateInputType | true
    }

  export interface marchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['march'], meta: { name: 'march' } }
    /**
     * Find zero or one March that matches the filter.
     * @param {marchFindUniqueArgs} args - Arguments to find a March
     * @example
     * // Get one March
     * const march = await prisma.march.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marchFindUniqueArgs>(args: SelectSubset<T, marchFindUniqueArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one March that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marchFindUniqueOrThrowArgs} args - Arguments to find a March
     * @example
     * // Get one March
     * const march = await prisma.march.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marchFindUniqueOrThrowArgs>(args: SelectSubset<T, marchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first March that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchFindFirstArgs} args - Arguments to find a March
     * @example
     * // Get one March
     * const march = await prisma.march.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marchFindFirstArgs>(args?: SelectSubset<T, marchFindFirstArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first March that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchFindFirstOrThrowArgs} args - Arguments to find a March
     * @example
     * // Get one March
     * const march = await prisma.march.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marchFindFirstOrThrowArgs>(args?: SelectSubset<T, marchFindFirstOrThrowArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marches
     * const marches = await prisma.march.findMany()
     * 
     * // Get first 10 Marches
     * const marches = await prisma.march.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marchWithIdOnly = await prisma.march.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends marchFindManyArgs>(args?: SelectSubset<T, marchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a March.
     * @param {marchCreateArgs} args - Arguments to create a March.
     * @example
     * // Create one March
     * const March = await prisma.march.create({
     *   data: {
     *     // ... data to create a March
     *   }
     * })
     * 
     */
    create<T extends marchCreateArgs>(args: SelectSubset<T, marchCreateArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marches.
     * @param {marchCreateManyArgs} args - Arguments to create many Marches.
     * @example
     * // Create many Marches
     * const march = await prisma.march.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marchCreateManyArgs>(args?: SelectSubset<T, marchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marches and returns the data saved in the database.
     * @param {marchCreateManyAndReturnArgs} args - Arguments to create many Marches.
     * @example
     * // Create many Marches
     * const march = await prisma.march.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marches and only return the `id`
     * const marchWithIdOnly = await prisma.march.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends marchCreateManyAndReturnArgs>(args?: SelectSubset<T, marchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a March.
     * @param {marchDeleteArgs} args - Arguments to delete one March.
     * @example
     * // Delete one March
     * const March = await prisma.march.delete({
     *   where: {
     *     // ... filter to delete one March
     *   }
     * })
     * 
     */
    delete<T extends marchDeleteArgs>(args: SelectSubset<T, marchDeleteArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one March.
     * @param {marchUpdateArgs} args - Arguments to update one March.
     * @example
     * // Update one March
     * const march = await prisma.march.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marchUpdateArgs>(args: SelectSubset<T, marchUpdateArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marches.
     * @param {marchDeleteManyArgs} args - Arguments to filter Marches to delete.
     * @example
     * // Delete a few Marches
     * const { count } = await prisma.march.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marchDeleteManyArgs>(args?: SelectSubset<T, marchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marches
     * const march = await prisma.march.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marchUpdateManyArgs>(args: SelectSubset<T, marchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marches and returns the data updated in the database.
     * @param {marchUpdateManyAndReturnArgs} args - Arguments to update many Marches.
     * @example
     * // Update many Marches
     * const march = await prisma.march.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marches and only return the `id`
     * const marchWithIdOnly = await prisma.march.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends marchUpdateManyAndReturnArgs>(args: SelectSubset<T, marchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one March.
     * @param {marchUpsertArgs} args - Arguments to update or create a March.
     * @example
     * // Update or create a March
     * const march = await prisma.march.upsert({
     *   create: {
     *     // ... data to create a March
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the March we want to update
     *   }
     * })
     */
    upsert<T extends marchUpsertArgs>(args: SelectSubset<T, marchUpsertArgs<ExtArgs>>): Prisma__marchClient<$Result.GetResult<Prisma.$marchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchCountArgs} args - Arguments to filter Marches to count.
     * @example
     * // Count the number of Marches
     * const count = await prisma.march.count({
     *   where: {
     *     // ... the filter for the Marches we want to count
     *   }
     * })
    **/
    count<T extends marchCountArgs>(
      args?: Subset<T, marchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a March.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarchAggregateArgs>(args: Subset<T, MarchAggregateArgs>): Prisma.PrismaPromise<GetMarchAggregateType<T>>

    /**
     * Group by March.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends marchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marchGroupByArgs['orderBy'] }
        : { orderBy?: marchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, marchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the march model
   */
  readonly fields: marchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for march.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the march model
   */
  interface marchFieldRefs {
    readonly id: FieldRef<"march", 'String'>
    readonly year: FieldRef<"march", 'String'>
    readonly day: FieldRef<"march", 'String'>
    readonly owner: FieldRef<"march", 'String'>
    readonly type: FieldRef<"march", 'String'>
  }
    

  // Custom InputTypes
  /**
   * march findUnique
   */
  export type marchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter, which march to fetch.
     */
    where: marchWhereUniqueInput
  }

  /**
   * march findUniqueOrThrow
   */
  export type marchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter, which march to fetch.
     */
    where: marchWhereUniqueInput
  }

  /**
   * march findFirst
   */
  export type marchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter, which march to fetch.
     */
    where?: marchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marches to fetch.
     */
    orderBy?: marchOrderByWithRelationInput | marchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marches.
     */
    cursor?: marchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marches.
     */
    distinct?: MarchScalarFieldEnum | MarchScalarFieldEnum[]
  }

  /**
   * march findFirstOrThrow
   */
  export type marchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter, which march to fetch.
     */
    where?: marchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marches to fetch.
     */
    orderBy?: marchOrderByWithRelationInput | marchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marches.
     */
    cursor?: marchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marches.
     */
    distinct?: MarchScalarFieldEnum | MarchScalarFieldEnum[]
  }

  /**
   * march findMany
   */
  export type marchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter, which marches to fetch.
     */
    where?: marchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marches to fetch.
     */
    orderBy?: marchOrderByWithRelationInput | marchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marches.
     */
    cursor?: marchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marches.
     */
    skip?: number
    distinct?: MarchScalarFieldEnum | MarchScalarFieldEnum[]
  }

  /**
   * march create
   */
  export type marchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * The data needed to create a march.
     */
    data: XOR<marchCreateInput, marchUncheckedCreateInput>
  }

  /**
   * march createMany
   */
  export type marchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marches.
     */
    data: marchCreateManyInput | marchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * march createManyAndReturn
   */
  export type marchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * The data used to create many marches.
     */
    data: marchCreateManyInput | marchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * march update
   */
  export type marchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * The data needed to update a march.
     */
    data: XOR<marchUpdateInput, marchUncheckedUpdateInput>
    /**
     * Choose, which march to update.
     */
    where: marchWhereUniqueInput
  }

  /**
   * march updateMany
   */
  export type marchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marches.
     */
    data: XOR<marchUpdateManyMutationInput, marchUncheckedUpdateManyInput>
    /**
     * Filter which marches to update
     */
    where?: marchWhereInput
    /**
     * Limit how many marches to update.
     */
    limit?: number
  }

  /**
   * march updateManyAndReturn
   */
  export type marchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * The data used to update marches.
     */
    data: XOR<marchUpdateManyMutationInput, marchUncheckedUpdateManyInput>
    /**
     * Filter which marches to update
     */
    where?: marchWhereInput
    /**
     * Limit how many marches to update.
     */
    limit?: number
  }

  /**
   * march upsert
   */
  export type marchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * The filter to search for the march to update in case it exists.
     */
    where: marchWhereUniqueInput
    /**
     * In case the march found by the `where` argument doesn't exist, create a new march with this data.
     */
    create: XOR<marchCreateInput, marchUncheckedCreateInput>
    /**
     * In case the march was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marchUpdateInput, marchUncheckedUpdateInput>
  }

  /**
   * march delete
   */
  export type marchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
    /**
     * Filter which march to delete.
     */
    where: marchWhereUniqueInput
  }

  /**
   * march deleteMany
   */
  export type marchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marches to delete
     */
    where?: marchWhereInput
    /**
     * Limit how many marches to delete.
     */
    limit?: number
  }

  /**
   * march without action
   */
  export type marchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the march
     */
    select?: marchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the march
     */
    omit?: marchOmit<ExtArgs> | null
  }


  /**
   * Model april
   */

  export type AggregateApril = {
    _count: AprilCountAggregateOutputType | null
    _min: AprilMinAggregateOutputType | null
    _max: AprilMaxAggregateOutputType | null
  }

  export type AprilMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type AprilMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type AprilCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type AprilMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type AprilMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type AprilCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type AprilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which april to aggregate.
     */
    where?: aprilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprils to fetch.
     */
    orderBy?: aprilOrderByWithRelationInput | aprilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aprilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aprils
    **/
    _count?: true | AprilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AprilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AprilMaxAggregateInputType
  }

  export type GetAprilAggregateType<T extends AprilAggregateArgs> = {
        [P in keyof T & keyof AggregateApril]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApril[P]>
      : GetScalarType<T[P], AggregateApril[P]>
  }




  export type aprilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aprilWhereInput
    orderBy?: aprilOrderByWithAggregationInput | aprilOrderByWithAggregationInput[]
    by: AprilScalarFieldEnum[] | AprilScalarFieldEnum
    having?: aprilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AprilCountAggregateInputType | true
    _min?: AprilMinAggregateInputType
    _max?: AprilMaxAggregateInputType
  }

  export type AprilGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: AprilCountAggregateOutputType | null
    _min: AprilMinAggregateOutputType | null
    _max: AprilMaxAggregateOutputType | null
  }

  type GetAprilGroupByPayload<T extends aprilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AprilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AprilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AprilGroupByOutputType[P]>
            : GetScalarType<T[P], AprilGroupByOutputType[P]>
        }
      >
    >


  export type aprilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["april"]>

  export type aprilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["april"]>

  export type aprilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["april"]>

  export type aprilSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type aprilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["april"]>

  export type $aprilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "april"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["april"]>
    composites: {}
  }

  type aprilGetPayload<S extends boolean | null | undefined | aprilDefaultArgs> = $Result.GetResult<Prisma.$aprilPayload, S>

  type aprilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aprilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AprilCountAggregateInputType | true
    }

  export interface aprilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['april'], meta: { name: 'april' } }
    /**
     * Find zero or one April that matches the filter.
     * @param {aprilFindUniqueArgs} args - Arguments to find a April
     * @example
     * // Get one April
     * const april = await prisma.april.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aprilFindUniqueArgs>(args: SelectSubset<T, aprilFindUniqueArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one April that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aprilFindUniqueOrThrowArgs} args - Arguments to find a April
     * @example
     * // Get one April
     * const april = await prisma.april.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aprilFindUniqueOrThrowArgs>(args: SelectSubset<T, aprilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first April that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilFindFirstArgs} args - Arguments to find a April
     * @example
     * // Get one April
     * const april = await prisma.april.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aprilFindFirstArgs>(args?: SelectSubset<T, aprilFindFirstArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first April that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilFindFirstOrThrowArgs} args - Arguments to find a April
     * @example
     * // Get one April
     * const april = await prisma.april.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aprilFindFirstOrThrowArgs>(args?: SelectSubset<T, aprilFindFirstOrThrowArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aprils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aprils
     * const aprils = await prisma.april.findMany()
     * 
     * // Get first 10 Aprils
     * const aprils = await prisma.april.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aprilWithIdOnly = await prisma.april.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends aprilFindManyArgs>(args?: SelectSubset<T, aprilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a April.
     * @param {aprilCreateArgs} args - Arguments to create a April.
     * @example
     * // Create one April
     * const April = await prisma.april.create({
     *   data: {
     *     // ... data to create a April
     *   }
     * })
     * 
     */
    create<T extends aprilCreateArgs>(args: SelectSubset<T, aprilCreateArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aprils.
     * @param {aprilCreateManyArgs} args - Arguments to create many Aprils.
     * @example
     * // Create many Aprils
     * const april = await prisma.april.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aprilCreateManyArgs>(args?: SelectSubset<T, aprilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aprils and returns the data saved in the database.
     * @param {aprilCreateManyAndReturnArgs} args - Arguments to create many Aprils.
     * @example
     * // Create many Aprils
     * const april = await prisma.april.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aprils and only return the `id`
     * const aprilWithIdOnly = await prisma.april.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends aprilCreateManyAndReturnArgs>(args?: SelectSubset<T, aprilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a April.
     * @param {aprilDeleteArgs} args - Arguments to delete one April.
     * @example
     * // Delete one April
     * const April = await prisma.april.delete({
     *   where: {
     *     // ... filter to delete one April
     *   }
     * })
     * 
     */
    delete<T extends aprilDeleteArgs>(args: SelectSubset<T, aprilDeleteArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one April.
     * @param {aprilUpdateArgs} args - Arguments to update one April.
     * @example
     * // Update one April
     * const april = await prisma.april.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aprilUpdateArgs>(args: SelectSubset<T, aprilUpdateArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aprils.
     * @param {aprilDeleteManyArgs} args - Arguments to filter Aprils to delete.
     * @example
     * // Delete a few Aprils
     * const { count } = await prisma.april.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aprilDeleteManyArgs>(args?: SelectSubset<T, aprilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aprils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aprils
     * const april = await prisma.april.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aprilUpdateManyArgs>(args: SelectSubset<T, aprilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aprils and returns the data updated in the database.
     * @param {aprilUpdateManyAndReturnArgs} args - Arguments to update many Aprils.
     * @example
     * // Update many Aprils
     * const april = await prisma.april.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aprils and only return the `id`
     * const aprilWithIdOnly = await prisma.april.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends aprilUpdateManyAndReturnArgs>(args: SelectSubset<T, aprilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one April.
     * @param {aprilUpsertArgs} args - Arguments to update or create a April.
     * @example
     * // Update or create a April
     * const april = await prisma.april.upsert({
     *   create: {
     *     // ... data to create a April
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the April we want to update
     *   }
     * })
     */
    upsert<T extends aprilUpsertArgs>(args: SelectSubset<T, aprilUpsertArgs<ExtArgs>>): Prisma__aprilClient<$Result.GetResult<Prisma.$aprilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aprils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilCountArgs} args - Arguments to filter Aprils to count.
     * @example
     * // Count the number of Aprils
     * const count = await prisma.april.count({
     *   where: {
     *     // ... the filter for the Aprils we want to count
     *   }
     * })
    **/
    count<T extends aprilCountArgs>(
      args?: Subset<T, aprilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AprilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a April.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AprilAggregateArgs>(args: Subset<T, AprilAggregateArgs>): Prisma.PrismaPromise<GetAprilAggregateType<T>>

    /**
     * Group by April.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aprilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aprilGroupByArgs['orderBy'] }
        : { orderBy?: aprilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aprilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAprilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the april model
   */
  readonly fields: aprilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for april.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aprilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the april model
   */
  interface aprilFieldRefs {
    readonly id: FieldRef<"april", 'String'>
    readonly year: FieldRef<"april", 'String'>
    readonly day: FieldRef<"april", 'String'>
    readonly owner: FieldRef<"april", 'String'>
    readonly type: FieldRef<"april", 'String'>
  }
    

  // Custom InputTypes
  /**
   * april findUnique
   */
  export type aprilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter, which april to fetch.
     */
    where: aprilWhereUniqueInput
  }

  /**
   * april findUniqueOrThrow
   */
  export type aprilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter, which april to fetch.
     */
    where: aprilWhereUniqueInput
  }

  /**
   * april findFirst
   */
  export type aprilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter, which april to fetch.
     */
    where?: aprilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprils to fetch.
     */
    orderBy?: aprilOrderByWithRelationInput | aprilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aprils.
     */
    cursor?: aprilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aprils.
     */
    distinct?: AprilScalarFieldEnum | AprilScalarFieldEnum[]
  }

  /**
   * april findFirstOrThrow
   */
  export type aprilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter, which april to fetch.
     */
    where?: aprilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprils to fetch.
     */
    orderBy?: aprilOrderByWithRelationInput | aprilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aprils.
     */
    cursor?: aprilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aprils.
     */
    distinct?: AprilScalarFieldEnum | AprilScalarFieldEnum[]
  }

  /**
   * april findMany
   */
  export type aprilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter, which aprils to fetch.
     */
    where?: aprilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprils to fetch.
     */
    orderBy?: aprilOrderByWithRelationInput | aprilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aprils.
     */
    cursor?: aprilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprils.
     */
    skip?: number
    distinct?: AprilScalarFieldEnum | AprilScalarFieldEnum[]
  }

  /**
   * april create
   */
  export type aprilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * The data needed to create a april.
     */
    data: XOR<aprilCreateInput, aprilUncheckedCreateInput>
  }

  /**
   * april createMany
   */
  export type aprilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aprils.
     */
    data: aprilCreateManyInput | aprilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * april createManyAndReturn
   */
  export type aprilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * The data used to create many aprils.
     */
    data: aprilCreateManyInput | aprilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * april update
   */
  export type aprilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * The data needed to update a april.
     */
    data: XOR<aprilUpdateInput, aprilUncheckedUpdateInput>
    /**
     * Choose, which april to update.
     */
    where: aprilWhereUniqueInput
  }

  /**
   * april updateMany
   */
  export type aprilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aprils.
     */
    data: XOR<aprilUpdateManyMutationInput, aprilUncheckedUpdateManyInput>
    /**
     * Filter which aprils to update
     */
    where?: aprilWhereInput
    /**
     * Limit how many aprils to update.
     */
    limit?: number
  }

  /**
   * april updateManyAndReturn
   */
  export type aprilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * The data used to update aprils.
     */
    data: XOR<aprilUpdateManyMutationInput, aprilUncheckedUpdateManyInput>
    /**
     * Filter which aprils to update
     */
    where?: aprilWhereInput
    /**
     * Limit how many aprils to update.
     */
    limit?: number
  }

  /**
   * april upsert
   */
  export type aprilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * The filter to search for the april to update in case it exists.
     */
    where: aprilWhereUniqueInput
    /**
     * In case the april found by the `where` argument doesn't exist, create a new april with this data.
     */
    create: XOR<aprilCreateInput, aprilUncheckedCreateInput>
    /**
     * In case the april was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aprilUpdateInput, aprilUncheckedUpdateInput>
  }

  /**
   * april delete
   */
  export type aprilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
    /**
     * Filter which april to delete.
     */
    where: aprilWhereUniqueInput
  }

  /**
   * april deleteMany
   */
  export type aprilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aprils to delete
     */
    where?: aprilWhereInput
    /**
     * Limit how many aprils to delete.
     */
    limit?: number
  }

  /**
   * april without action
   */
  export type aprilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the april
     */
    select?: aprilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the april
     */
    omit?: aprilOmit<ExtArgs> | null
  }


  /**
   * Model may
   */

  export type AggregateMay = {
    _count: MayCountAggregateOutputType | null
    _min: MayMinAggregateOutputType | null
    _max: MayMaxAggregateOutputType | null
  }

  export type MayMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type MayMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type MayCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type MayMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type MayMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type MayCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type MayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which may to aggregate.
     */
    where?: mayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mays to fetch.
     */
    orderBy?: mayOrderByWithRelationInput | mayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mays
    **/
    _count?: true | MayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MayMaxAggregateInputType
  }

  export type GetMayAggregateType<T extends MayAggregateArgs> = {
        [P in keyof T & keyof AggregateMay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMay[P]>
      : GetScalarType<T[P], AggregateMay[P]>
  }




  export type mayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mayWhereInput
    orderBy?: mayOrderByWithAggregationInput | mayOrderByWithAggregationInput[]
    by: MayScalarFieldEnum[] | MayScalarFieldEnum
    having?: mayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MayCountAggregateInputType | true
    _min?: MayMinAggregateInputType
    _max?: MayMaxAggregateInputType
  }

  export type MayGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: MayCountAggregateOutputType | null
    _min: MayMinAggregateOutputType | null
    _max: MayMaxAggregateOutputType | null
  }

  type GetMayGroupByPayload<T extends mayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MayGroupByOutputType[P]>
            : GetScalarType<T[P], MayGroupByOutputType[P]>
        }
      >
    >


  export type maySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["may"]>

  export type maySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["may"]>

  export type maySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["may"]>

  export type maySelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type mayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["may"]>

  export type $mayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "may"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["may"]>
    composites: {}
  }

  type mayGetPayload<S extends boolean | null | undefined | mayDefaultArgs> = $Result.GetResult<Prisma.$mayPayload, S>

  type mayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MayCountAggregateInputType | true
    }

  export interface mayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['may'], meta: { name: 'may' } }
    /**
     * Find zero or one May that matches the filter.
     * @param {mayFindUniqueArgs} args - Arguments to find a May
     * @example
     * // Get one May
     * const may = await prisma.may.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mayFindUniqueArgs>(args: SelectSubset<T, mayFindUniqueArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one May that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mayFindUniqueOrThrowArgs} args - Arguments to find a May
     * @example
     * // Get one May
     * const may = await prisma.may.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mayFindUniqueOrThrowArgs>(args: SelectSubset<T, mayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first May that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayFindFirstArgs} args - Arguments to find a May
     * @example
     * // Get one May
     * const may = await prisma.may.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mayFindFirstArgs>(args?: SelectSubset<T, mayFindFirstArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first May that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayFindFirstOrThrowArgs} args - Arguments to find a May
     * @example
     * // Get one May
     * const may = await prisma.may.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mayFindFirstOrThrowArgs>(args?: SelectSubset<T, mayFindFirstOrThrowArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mays
     * const mays = await prisma.may.findMany()
     * 
     * // Get first 10 Mays
     * const mays = await prisma.may.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mayWithIdOnly = await prisma.may.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mayFindManyArgs>(args?: SelectSubset<T, mayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a May.
     * @param {mayCreateArgs} args - Arguments to create a May.
     * @example
     * // Create one May
     * const May = await prisma.may.create({
     *   data: {
     *     // ... data to create a May
     *   }
     * })
     * 
     */
    create<T extends mayCreateArgs>(args: SelectSubset<T, mayCreateArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mays.
     * @param {mayCreateManyArgs} args - Arguments to create many Mays.
     * @example
     * // Create many Mays
     * const may = await prisma.may.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mayCreateManyArgs>(args?: SelectSubset<T, mayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mays and returns the data saved in the database.
     * @param {mayCreateManyAndReturnArgs} args - Arguments to create many Mays.
     * @example
     * // Create many Mays
     * const may = await prisma.may.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mays and only return the `id`
     * const mayWithIdOnly = await prisma.may.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mayCreateManyAndReturnArgs>(args?: SelectSubset<T, mayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a May.
     * @param {mayDeleteArgs} args - Arguments to delete one May.
     * @example
     * // Delete one May
     * const May = await prisma.may.delete({
     *   where: {
     *     // ... filter to delete one May
     *   }
     * })
     * 
     */
    delete<T extends mayDeleteArgs>(args: SelectSubset<T, mayDeleteArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one May.
     * @param {mayUpdateArgs} args - Arguments to update one May.
     * @example
     * // Update one May
     * const may = await prisma.may.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mayUpdateArgs>(args: SelectSubset<T, mayUpdateArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mays.
     * @param {mayDeleteManyArgs} args - Arguments to filter Mays to delete.
     * @example
     * // Delete a few Mays
     * const { count } = await prisma.may.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mayDeleteManyArgs>(args?: SelectSubset<T, mayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mays
     * const may = await prisma.may.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mayUpdateManyArgs>(args: SelectSubset<T, mayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mays and returns the data updated in the database.
     * @param {mayUpdateManyAndReturnArgs} args - Arguments to update many Mays.
     * @example
     * // Update many Mays
     * const may = await prisma.may.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mays and only return the `id`
     * const mayWithIdOnly = await prisma.may.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mayUpdateManyAndReturnArgs>(args: SelectSubset<T, mayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one May.
     * @param {mayUpsertArgs} args - Arguments to update or create a May.
     * @example
     * // Update or create a May
     * const may = await prisma.may.upsert({
     *   create: {
     *     // ... data to create a May
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the May we want to update
     *   }
     * })
     */
    upsert<T extends mayUpsertArgs>(args: SelectSubset<T, mayUpsertArgs<ExtArgs>>): Prisma__mayClient<$Result.GetResult<Prisma.$mayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayCountArgs} args - Arguments to filter Mays to count.
     * @example
     * // Count the number of Mays
     * const count = await prisma.may.count({
     *   where: {
     *     // ... the filter for the Mays we want to count
     *   }
     * })
    **/
    count<T extends mayCountArgs>(
      args?: Subset<T, mayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a May.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MayAggregateArgs>(args: Subset<T, MayAggregateArgs>): Prisma.PrismaPromise<GetMayAggregateType<T>>

    /**
     * Group by May.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mayGroupByArgs['orderBy'] }
        : { orderBy?: mayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the may model
   */
  readonly fields: mayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for may.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the may model
   */
  interface mayFieldRefs {
    readonly id: FieldRef<"may", 'String'>
    readonly year: FieldRef<"may", 'String'>
    readonly day: FieldRef<"may", 'String'>
    readonly owner: FieldRef<"may", 'String'>
    readonly type: FieldRef<"may", 'String'>
  }
    

  // Custom InputTypes
  /**
   * may findUnique
   */
  export type mayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter, which may to fetch.
     */
    where: mayWhereUniqueInput
  }

  /**
   * may findUniqueOrThrow
   */
  export type mayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter, which may to fetch.
     */
    where: mayWhereUniqueInput
  }

  /**
   * may findFirst
   */
  export type mayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter, which may to fetch.
     */
    where?: mayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mays to fetch.
     */
    orderBy?: mayOrderByWithRelationInput | mayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mays.
     */
    cursor?: mayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mays.
     */
    distinct?: MayScalarFieldEnum | MayScalarFieldEnum[]
  }

  /**
   * may findFirstOrThrow
   */
  export type mayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter, which may to fetch.
     */
    where?: mayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mays to fetch.
     */
    orderBy?: mayOrderByWithRelationInput | mayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mays.
     */
    cursor?: mayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mays.
     */
    distinct?: MayScalarFieldEnum | MayScalarFieldEnum[]
  }

  /**
   * may findMany
   */
  export type mayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter, which mays to fetch.
     */
    where?: mayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mays to fetch.
     */
    orderBy?: mayOrderByWithRelationInput | mayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mays.
     */
    cursor?: mayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mays.
     */
    skip?: number
    distinct?: MayScalarFieldEnum | MayScalarFieldEnum[]
  }

  /**
   * may create
   */
  export type mayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * The data needed to create a may.
     */
    data: XOR<mayCreateInput, mayUncheckedCreateInput>
  }

  /**
   * may createMany
   */
  export type mayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mays.
     */
    data: mayCreateManyInput | mayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * may createManyAndReturn
   */
  export type mayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * The data used to create many mays.
     */
    data: mayCreateManyInput | mayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * may update
   */
  export type mayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * The data needed to update a may.
     */
    data: XOR<mayUpdateInput, mayUncheckedUpdateInput>
    /**
     * Choose, which may to update.
     */
    where: mayWhereUniqueInput
  }

  /**
   * may updateMany
   */
  export type mayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mays.
     */
    data: XOR<mayUpdateManyMutationInput, mayUncheckedUpdateManyInput>
    /**
     * Filter which mays to update
     */
    where?: mayWhereInput
    /**
     * Limit how many mays to update.
     */
    limit?: number
  }

  /**
   * may updateManyAndReturn
   */
  export type mayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * The data used to update mays.
     */
    data: XOR<mayUpdateManyMutationInput, mayUncheckedUpdateManyInput>
    /**
     * Filter which mays to update
     */
    where?: mayWhereInput
    /**
     * Limit how many mays to update.
     */
    limit?: number
  }

  /**
   * may upsert
   */
  export type mayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * The filter to search for the may to update in case it exists.
     */
    where: mayWhereUniqueInput
    /**
     * In case the may found by the `where` argument doesn't exist, create a new may with this data.
     */
    create: XOR<mayCreateInput, mayUncheckedCreateInput>
    /**
     * In case the may was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mayUpdateInput, mayUncheckedUpdateInput>
  }

  /**
   * may delete
   */
  export type mayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
    /**
     * Filter which may to delete.
     */
    where: mayWhereUniqueInput
  }

  /**
   * may deleteMany
   */
  export type mayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mays to delete
     */
    where?: mayWhereInput
    /**
     * Limit how many mays to delete.
     */
    limit?: number
  }

  /**
   * may without action
   */
  export type mayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the may
     */
    select?: maySelect<ExtArgs> | null
    /**
     * Omit specific fields from the may
     */
    omit?: mayOmit<ExtArgs> | null
  }


  /**
   * Model june
   */

  export type AggregateJune = {
    _count: JuneCountAggregateOutputType | null
    _min: JuneMinAggregateOutputType | null
    _max: JuneMaxAggregateOutputType | null
  }

  export type JuneMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JuneMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JuneCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type JuneMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JuneMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JuneCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type JuneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which june to aggregate.
     */
    where?: juneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of junes to fetch.
     */
    orderBy?: juneOrderByWithRelationInput | juneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: juneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` junes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` junes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned junes
    **/
    _count?: true | JuneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuneMaxAggregateInputType
  }

  export type GetJuneAggregateType<T extends JuneAggregateArgs> = {
        [P in keyof T & keyof AggregateJune]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJune[P]>
      : GetScalarType<T[P], AggregateJune[P]>
  }




  export type juneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: juneWhereInput
    orderBy?: juneOrderByWithAggregationInput | juneOrderByWithAggregationInput[]
    by: JuneScalarFieldEnum[] | JuneScalarFieldEnum
    having?: juneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuneCountAggregateInputType | true
    _min?: JuneMinAggregateInputType
    _max?: JuneMaxAggregateInputType
  }

  export type JuneGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: JuneCountAggregateOutputType | null
    _min: JuneMinAggregateOutputType | null
    _max: JuneMaxAggregateOutputType | null
  }

  type GetJuneGroupByPayload<T extends juneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuneGroupByOutputType[P]>
            : GetScalarType<T[P], JuneGroupByOutputType[P]>
        }
      >
    >


  export type juneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["june"]>

  export type juneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["june"]>

  export type juneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["june"]>

  export type juneSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type juneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["june"]>

  export type $junePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "june"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["june"]>
    composites: {}
  }

  type juneGetPayload<S extends boolean | null | undefined | juneDefaultArgs> = $Result.GetResult<Prisma.$junePayload, S>

  type juneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<juneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuneCountAggregateInputType | true
    }

  export interface juneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['june'], meta: { name: 'june' } }
    /**
     * Find zero or one June that matches the filter.
     * @param {juneFindUniqueArgs} args - Arguments to find a June
     * @example
     * // Get one June
     * const june = await prisma.june.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends juneFindUniqueArgs>(args: SelectSubset<T, juneFindUniqueArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one June that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {juneFindUniqueOrThrowArgs} args - Arguments to find a June
     * @example
     * // Get one June
     * const june = await prisma.june.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends juneFindUniqueOrThrowArgs>(args: SelectSubset<T, juneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first June that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneFindFirstArgs} args - Arguments to find a June
     * @example
     * // Get one June
     * const june = await prisma.june.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends juneFindFirstArgs>(args?: SelectSubset<T, juneFindFirstArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first June that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneFindFirstOrThrowArgs} args - Arguments to find a June
     * @example
     * // Get one June
     * const june = await prisma.june.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends juneFindFirstOrThrowArgs>(args?: SelectSubset<T, juneFindFirstOrThrowArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Junes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Junes
     * const junes = await prisma.june.findMany()
     * 
     * // Get first 10 Junes
     * const junes = await prisma.june.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juneWithIdOnly = await prisma.june.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends juneFindManyArgs>(args?: SelectSubset<T, juneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a June.
     * @param {juneCreateArgs} args - Arguments to create a June.
     * @example
     * // Create one June
     * const June = await prisma.june.create({
     *   data: {
     *     // ... data to create a June
     *   }
     * })
     * 
     */
    create<T extends juneCreateArgs>(args: SelectSubset<T, juneCreateArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Junes.
     * @param {juneCreateManyArgs} args - Arguments to create many Junes.
     * @example
     * // Create many Junes
     * const june = await prisma.june.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends juneCreateManyArgs>(args?: SelectSubset<T, juneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Junes and returns the data saved in the database.
     * @param {juneCreateManyAndReturnArgs} args - Arguments to create many Junes.
     * @example
     * // Create many Junes
     * const june = await prisma.june.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Junes and only return the `id`
     * const juneWithIdOnly = await prisma.june.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends juneCreateManyAndReturnArgs>(args?: SelectSubset<T, juneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a June.
     * @param {juneDeleteArgs} args - Arguments to delete one June.
     * @example
     * // Delete one June
     * const June = await prisma.june.delete({
     *   where: {
     *     // ... filter to delete one June
     *   }
     * })
     * 
     */
    delete<T extends juneDeleteArgs>(args: SelectSubset<T, juneDeleteArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one June.
     * @param {juneUpdateArgs} args - Arguments to update one June.
     * @example
     * // Update one June
     * const june = await prisma.june.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends juneUpdateArgs>(args: SelectSubset<T, juneUpdateArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Junes.
     * @param {juneDeleteManyArgs} args - Arguments to filter Junes to delete.
     * @example
     * // Delete a few Junes
     * const { count } = await prisma.june.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends juneDeleteManyArgs>(args?: SelectSubset<T, juneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Junes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Junes
     * const june = await prisma.june.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends juneUpdateManyArgs>(args: SelectSubset<T, juneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Junes and returns the data updated in the database.
     * @param {juneUpdateManyAndReturnArgs} args - Arguments to update many Junes.
     * @example
     * // Update many Junes
     * const june = await prisma.june.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Junes and only return the `id`
     * const juneWithIdOnly = await prisma.june.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends juneUpdateManyAndReturnArgs>(args: SelectSubset<T, juneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one June.
     * @param {juneUpsertArgs} args - Arguments to update or create a June.
     * @example
     * // Update or create a June
     * const june = await prisma.june.upsert({
     *   create: {
     *     // ... data to create a June
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the June we want to update
     *   }
     * })
     */
    upsert<T extends juneUpsertArgs>(args: SelectSubset<T, juneUpsertArgs<ExtArgs>>): Prisma__juneClient<$Result.GetResult<Prisma.$junePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Junes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneCountArgs} args - Arguments to filter Junes to count.
     * @example
     * // Count the number of Junes
     * const count = await prisma.june.count({
     *   where: {
     *     // ... the filter for the Junes we want to count
     *   }
     * })
    **/
    count<T extends juneCountArgs>(
      args?: Subset<T, juneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a June.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JuneAggregateArgs>(args: Subset<T, JuneAggregateArgs>): Prisma.PrismaPromise<GetJuneAggregateType<T>>

    /**
     * Group by June.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {juneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends juneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: juneGroupByArgs['orderBy'] }
        : { orderBy?: juneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, juneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the june model
   */
  readonly fields: juneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for june.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__juneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the june model
   */
  interface juneFieldRefs {
    readonly id: FieldRef<"june", 'String'>
    readonly year: FieldRef<"june", 'String'>
    readonly day: FieldRef<"june", 'String'>
    readonly owner: FieldRef<"june", 'String'>
    readonly type: FieldRef<"june", 'String'>
  }
    

  // Custom InputTypes
  /**
   * june findUnique
   */
  export type juneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter, which june to fetch.
     */
    where: juneWhereUniqueInput
  }

  /**
   * june findUniqueOrThrow
   */
  export type juneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter, which june to fetch.
     */
    where: juneWhereUniqueInput
  }

  /**
   * june findFirst
   */
  export type juneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter, which june to fetch.
     */
    where?: juneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of junes to fetch.
     */
    orderBy?: juneOrderByWithRelationInput | juneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for junes.
     */
    cursor?: juneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` junes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` junes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of junes.
     */
    distinct?: JuneScalarFieldEnum | JuneScalarFieldEnum[]
  }

  /**
   * june findFirstOrThrow
   */
  export type juneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter, which june to fetch.
     */
    where?: juneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of junes to fetch.
     */
    orderBy?: juneOrderByWithRelationInput | juneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for junes.
     */
    cursor?: juneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` junes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` junes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of junes.
     */
    distinct?: JuneScalarFieldEnum | JuneScalarFieldEnum[]
  }

  /**
   * june findMany
   */
  export type juneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter, which junes to fetch.
     */
    where?: juneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of junes to fetch.
     */
    orderBy?: juneOrderByWithRelationInput | juneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing junes.
     */
    cursor?: juneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` junes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` junes.
     */
    skip?: number
    distinct?: JuneScalarFieldEnum | JuneScalarFieldEnum[]
  }

  /**
   * june create
   */
  export type juneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * The data needed to create a june.
     */
    data: XOR<juneCreateInput, juneUncheckedCreateInput>
  }

  /**
   * june createMany
   */
  export type juneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many junes.
     */
    data: juneCreateManyInput | juneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * june createManyAndReturn
   */
  export type juneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * The data used to create many junes.
     */
    data: juneCreateManyInput | juneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * june update
   */
  export type juneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * The data needed to update a june.
     */
    data: XOR<juneUpdateInput, juneUncheckedUpdateInput>
    /**
     * Choose, which june to update.
     */
    where: juneWhereUniqueInput
  }

  /**
   * june updateMany
   */
  export type juneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update junes.
     */
    data: XOR<juneUpdateManyMutationInput, juneUncheckedUpdateManyInput>
    /**
     * Filter which junes to update
     */
    where?: juneWhereInput
    /**
     * Limit how many junes to update.
     */
    limit?: number
  }

  /**
   * june updateManyAndReturn
   */
  export type juneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * The data used to update junes.
     */
    data: XOR<juneUpdateManyMutationInput, juneUncheckedUpdateManyInput>
    /**
     * Filter which junes to update
     */
    where?: juneWhereInput
    /**
     * Limit how many junes to update.
     */
    limit?: number
  }

  /**
   * june upsert
   */
  export type juneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * The filter to search for the june to update in case it exists.
     */
    where: juneWhereUniqueInput
    /**
     * In case the june found by the `where` argument doesn't exist, create a new june with this data.
     */
    create: XOR<juneCreateInput, juneUncheckedCreateInput>
    /**
     * In case the june was found with the provided `where` argument, update it with this data.
     */
    update: XOR<juneUpdateInput, juneUncheckedUpdateInput>
  }

  /**
   * june delete
   */
  export type juneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
    /**
     * Filter which june to delete.
     */
    where: juneWhereUniqueInput
  }

  /**
   * june deleteMany
   */
  export type juneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which junes to delete
     */
    where?: juneWhereInput
    /**
     * Limit how many junes to delete.
     */
    limit?: number
  }

  /**
   * june without action
   */
  export type juneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the june
     */
    select?: juneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the june
     */
    omit?: juneOmit<ExtArgs> | null
  }


  /**
   * Model july
   */

  export type AggregateJuly = {
    _count: JulyCountAggregateOutputType | null
    _min: JulyMinAggregateOutputType | null
    _max: JulyMaxAggregateOutputType | null
  }

  export type JulyMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JulyMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type JulyCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type JulyMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JulyMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type JulyCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type JulyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which july to aggregate.
     */
    where?: julyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of julies to fetch.
     */
    orderBy?: julyOrderByWithRelationInput | julyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: julyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` julies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` julies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned julies
    **/
    _count?: true | JulyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JulyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JulyMaxAggregateInputType
  }

  export type GetJulyAggregateType<T extends JulyAggregateArgs> = {
        [P in keyof T & keyof AggregateJuly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuly[P]>
      : GetScalarType<T[P], AggregateJuly[P]>
  }




  export type julyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: julyWhereInput
    orderBy?: julyOrderByWithAggregationInput | julyOrderByWithAggregationInput[]
    by: JulyScalarFieldEnum[] | JulyScalarFieldEnum
    having?: julyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JulyCountAggregateInputType | true
    _min?: JulyMinAggregateInputType
    _max?: JulyMaxAggregateInputType
  }

  export type JulyGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: JulyCountAggregateOutputType | null
    _min: JulyMinAggregateOutputType | null
    _max: JulyMaxAggregateOutputType | null
  }

  type GetJulyGroupByPayload<T extends julyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JulyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JulyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JulyGroupByOutputType[P]>
            : GetScalarType<T[P], JulyGroupByOutputType[P]>
        }
      >
    >


  export type julySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["july"]>

  export type julySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["july"]>

  export type julySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["july"]>

  export type julySelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type julyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["july"]>

  export type $julyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "july"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["july"]>
    composites: {}
  }

  type julyGetPayload<S extends boolean | null | undefined | julyDefaultArgs> = $Result.GetResult<Prisma.$julyPayload, S>

  type julyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<julyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JulyCountAggregateInputType | true
    }

  export interface julyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['july'], meta: { name: 'july' } }
    /**
     * Find zero or one July that matches the filter.
     * @param {julyFindUniqueArgs} args - Arguments to find a July
     * @example
     * // Get one July
     * const july = await prisma.july.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends julyFindUniqueArgs>(args: SelectSubset<T, julyFindUniqueArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one July that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {julyFindUniqueOrThrowArgs} args - Arguments to find a July
     * @example
     * // Get one July
     * const july = await prisma.july.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends julyFindUniqueOrThrowArgs>(args: SelectSubset<T, julyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first July that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyFindFirstArgs} args - Arguments to find a July
     * @example
     * // Get one July
     * const july = await prisma.july.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends julyFindFirstArgs>(args?: SelectSubset<T, julyFindFirstArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first July that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyFindFirstOrThrowArgs} args - Arguments to find a July
     * @example
     * // Get one July
     * const july = await prisma.july.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends julyFindFirstOrThrowArgs>(args?: SelectSubset<T, julyFindFirstOrThrowArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Julies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Julies
     * const julies = await prisma.july.findMany()
     * 
     * // Get first 10 Julies
     * const julies = await prisma.july.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const julyWithIdOnly = await prisma.july.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends julyFindManyArgs>(args?: SelectSubset<T, julyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a July.
     * @param {julyCreateArgs} args - Arguments to create a July.
     * @example
     * // Create one July
     * const July = await prisma.july.create({
     *   data: {
     *     // ... data to create a July
     *   }
     * })
     * 
     */
    create<T extends julyCreateArgs>(args: SelectSubset<T, julyCreateArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Julies.
     * @param {julyCreateManyArgs} args - Arguments to create many Julies.
     * @example
     * // Create many Julies
     * const july = await prisma.july.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends julyCreateManyArgs>(args?: SelectSubset<T, julyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Julies and returns the data saved in the database.
     * @param {julyCreateManyAndReturnArgs} args - Arguments to create many Julies.
     * @example
     * // Create many Julies
     * const july = await prisma.july.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Julies and only return the `id`
     * const julyWithIdOnly = await prisma.july.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends julyCreateManyAndReturnArgs>(args?: SelectSubset<T, julyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a July.
     * @param {julyDeleteArgs} args - Arguments to delete one July.
     * @example
     * // Delete one July
     * const July = await prisma.july.delete({
     *   where: {
     *     // ... filter to delete one July
     *   }
     * })
     * 
     */
    delete<T extends julyDeleteArgs>(args: SelectSubset<T, julyDeleteArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one July.
     * @param {julyUpdateArgs} args - Arguments to update one July.
     * @example
     * // Update one July
     * const july = await prisma.july.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends julyUpdateArgs>(args: SelectSubset<T, julyUpdateArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Julies.
     * @param {julyDeleteManyArgs} args - Arguments to filter Julies to delete.
     * @example
     * // Delete a few Julies
     * const { count } = await prisma.july.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends julyDeleteManyArgs>(args?: SelectSubset<T, julyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Julies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Julies
     * const july = await prisma.july.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends julyUpdateManyArgs>(args: SelectSubset<T, julyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Julies and returns the data updated in the database.
     * @param {julyUpdateManyAndReturnArgs} args - Arguments to update many Julies.
     * @example
     * // Update many Julies
     * const july = await prisma.july.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Julies and only return the `id`
     * const julyWithIdOnly = await prisma.july.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends julyUpdateManyAndReturnArgs>(args: SelectSubset<T, julyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one July.
     * @param {julyUpsertArgs} args - Arguments to update or create a July.
     * @example
     * // Update or create a July
     * const july = await prisma.july.upsert({
     *   create: {
     *     // ... data to create a July
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the July we want to update
     *   }
     * })
     */
    upsert<T extends julyUpsertArgs>(args: SelectSubset<T, julyUpsertArgs<ExtArgs>>): Prisma__julyClient<$Result.GetResult<Prisma.$julyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Julies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyCountArgs} args - Arguments to filter Julies to count.
     * @example
     * // Count the number of Julies
     * const count = await prisma.july.count({
     *   where: {
     *     // ... the filter for the Julies we want to count
     *   }
     * })
    **/
    count<T extends julyCountArgs>(
      args?: Subset<T, julyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JulyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a July.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JulyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JulyAggregateArgs>(args: Subset<T, JulyAggregateArgs>): Prisma.PrismaPromise<GetJulyAggregateType<T>>

    /**
     * Group by July.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {julyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends julyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: julyGroupByArgs['orderBy'] }
        : { orderBy?: julyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, julyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJulyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the july model
   */
  readonly fields: julyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for july.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__julyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the july model
   */
  interface julyFieldRefs {
    readonly id: FieldRef<"july", 'String'>
    readonly year: FieldRef<"july", 'String'>
    readonly day: FieldRef<"july", 'String'>
    readonly owner: FieldRef<"july", 'String'>
    readonly type: FieldRef<"july", 'String'>
  }
    

  // Custom InputTypes
  /**
   * july findUnique
   */
  export type julyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter, which july to fetch.
     */
    where: julyWhereUniqueInput
  }

  /**
   * july findUniqueOrThrow
   */
  export type julyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter, which july to fetch.
     */
    where: julyWhereUniqueInput
  }

  /**
   * july findFirst
   */
  export type julyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter, which july to fetch.
     */
    where?: julyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of julies to fetch.
     */
    orderBy?: julyOrderByWithRelationInput | julyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for julies.
     */
    cursor?: julyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` julies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` julies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of julies.
     */
    distinct?: JulyScalarFieldEnum | JulyScalarFieldEnum[]
  }

  /**
   * july findFirstOrThrow
   */
  export type julyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter, which july to fetch.
     */
    where?: julyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of julies to fetch.
     */
    orderBy?: julyOrderByWithRelationInput | julyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for julies.
     */
    cursor?: julyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` julies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` julies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of julies.
     */
    distinct?: JulyScalarFieldEnum | JulyScalarFieldEnum[]
  }

  /**
   * july findMany
   */
  export type julyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter, which julies to fetch.
     */
    where?: julyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of julies to fetch.
     */
    orderBy?: julyOrderByWithRelationInput | julyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing julies.
     */
    cursor?: julyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` julies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` julies.
     */
    skip?: number
    distinct?: JulyScalarFieldEnum | JulyScalarFieldEnum[]
  }

  /**
   * july create
   */
  export type julyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * The data needed to create a july.
     */
    data: XOR<julyCreateInput, julyUncheckedCreateInput>
  }

  /**
   * july createMany
   */
  export type julyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many julies.
     */
    data: julyCreateManyInput | julyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * july createManyAndReturn
   */
  export type julyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * The data used to create many julies.
     */
    data: julyCreateManyInput | julyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * july update
   */
  export type julyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * The data needed to update a july.
     */
    data: XOR<julyUpdateInput, julyUncheckedUpdateInput>
    /**
     * Choose, which july to update.
     */
    where: julyWhereUniqueInput
  }

  /**
   * july updateMany
   */
  export type julyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update julies.
     */
    data: XOR<julyUpdateManyMutationInput, julyUncheckedUpdateManyInput>
    /**
     * Filter which julies to update
     */
    where?: julyWhereInput
    /**
     * Limit how many julies to update.
     */
    limit?: number
  }

  /**
   * july updateManyAndReturn
   */
  export type julyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * The data used to update julies.
     */
    data: XOR<julyUpdateManyMutationInput, julyUncheckedUpdateManyInput>
    /**
     * Filter which julies to update
     */
    where?: julyWhereInput
    /**
     * Limit how many julies to update.
     */
    limit?: number
  }

  /**
   * july upsert
   */
  export type julyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * The filter to search for the july to update in case it exists.
     */
    where: julyWhereUniqueInput
    /**
     * In case the july found by the `where` argument doesn't exist, create a new july with this data.
     */
    create: XOR<julyCreateInput, julyUncheckedCreateInput>
    /**
     * In case the july was found with the provided `where` argument, update it with this data.
     */
    update: XOR<julyUpdateInput, julyUncheckedUpdateInput>
  }

  /**
   * july delete
   */
  export type julyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
    /**
     * Filter which july to delete.
     */
    where: julyWhereUniqueInput
  }

  /**
   * july deleteMany
   */
  export type julyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which julies to delete
     */
    where?: julyWhereInput
    /**
     * Limit how many julies to delete.
     */
    limit?: number
  }

  /**
   * july without action
   */
  export type julyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the july
     */
    select?: julySelect<ExtArgs> | null
    /**
     * Omit specific fields from the july
     */
    omit?: julyOmit<ExtArgs> | null
  }


  /**
   * Model august
   */

  export type AggregateAugust = {
    _count: AugustCountAggregateOutputType | null
    _min: AugustMinAggregateOutputType | null
    _max: AugustMaxAggregateOutputType | null
  }

  export type AugustMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type AugustMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type AugustCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type AugustMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type AugustMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type AugustCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type AugustAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which august to aggregate.
     */
    where?: augustWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of augusts to fetch.
     */
    orderBy?: augustOrderByWithRelationInput | augustOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: augustWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` augusts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` augusts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned augusts
    **/
    _count?: true | AugustCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AugustMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AugustMaxAggregateInputType
  }

  export type GetAugustAggregateType<T extends AugustAggregateArgs> = {
        [P in keyof T & keyof AggregateAugust]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAugust[P]>
      : GetScalarType<T[P], AggregateAugust[P]>
  }




  export type augustGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: augustWhereInput
    orderBy?: augustOrderByWithAggregationInput | augustOrderByWithAggregationInput[]
    by: AugustScalarFieldEnum[] | AugustScalarFieldEnum
    having?: augustScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AugustCountAggregateInputType | true
    _min?: AugustMinAggregateInputType
    _max?: AugustMaxAggregateInputType
  }

  export type AugustGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: AugustCountAggregateOutputType | null
    _min: AugustMinAggregateOutputType | null
    _max: AugustMaxAggregateOutputType | null
  }

  type GetAugustGroupByPayload<T extends augustGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AugustGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AugustGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AugustGroupByOutputType[P]>
            : GetScalarType<T[P], AugustGroupByOutputType[P]>
        }
      >
    >


  export type augustSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["august"]>

  export type augustSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["august"]>

  export type augustSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["august"]>

  export type augustSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type augustOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["august"]>

  export type $augustPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "august"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["august"]>
    composites: {}
  }

  type augustGetPayload<S extends boolean | null | undefined | augustDefaultArgs> = $Result.GetResult<Prisma.$augustPayload, S>

  type augustCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<augustFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AugustCountAggregateInputType | true
    }

  export interface augustDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['august'], meta: { name: 'august' } }
    /**
     * Find zero or one August that matches the filter.
     * @param {augustFindUniqueArgs} args - Arguments to find a August
     * @example
     * // Get one August
     * const august = await prisma.august.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends augustFindUniqueArgs>(args: SelectSubset<T, augustFindUniqueArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one August that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {augustFindUniqueOrThrowArgs} args - Arguments to find a August
     * @example
     * // Get one August
     * const august = await prisma.august.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends augustFindUniqueOrThrowArgs>(args: SelectSubset<T, augustFindUniqueOrThrowArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first August that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustFindFirstArgs} args - Arguments to find a August
     * @example
     * // Get one August
     * const august = await prisma.august.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends augustFindFirstArgs>(args?: SelectSubset<T, augustFindFirstArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first August that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustFindFirstOrThrowArgs} args - Arguments to find a August
     * @example
     * // Get one August
     * const august = await prisma.august.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends augustFindFirstOrThrowArgs>(args?: SelectSubset<T, augustFindFirstOrThrowArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Augusts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Augusts
     * const augusts = await prisma.august.findMany()
     * 
     * // Get first 10 Augusts
     * const augusts = await prisma.august.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const augustWithIdOnly = await prisma.august.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends augustFindManyArgs>(args?: SelectSubset<T, augustFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a August.
     * @param {augustCreateArgs} args - Arguments to create a August.
     * @example
     * // Create one August
     * const August = await prisma.august.create({
     *   data: {
     *     // ... data to create a August
     *   }
     * })
     * 
     */
    create<T extends augustCreateArgs>(args: SelectSubset<T, augustCreateArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Augusts.
     * @param {augustCreateManyArgs} args - Arguments to create many Augusts.
     * @example
     * // Create many Augusts
     * const august = await prisma.august.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends augustCreateManyArgs>(args?: SelectSubset<T, augustCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Augusts and returns the data saved in the database.
     * @param {augustCreateManyAndReturnArgs} args - Arguments to create many Augusts.
     * @example
     * // Create many Augusts
     * const august = await prisma.august.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Augusts and only return the `id`
     * const augustWithIdOnly = await prisma.august.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends augustCreateManyAndReturnArgs>(args?: SelectSubset<T, augustCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a August.
     * @param {augustDeleteArgs} args - Arguments to delete one August.
     * @example
     * // Delete one August
     * const August = await prisma.august.delete({
     *   where: {
     *     // ... filter to delete one August
     *   }
     * })
     * 
     */
    delete<T extends augustDeleteArgs>(args: SelectSubset<T, augustDeleteArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one August.
     * @param {augustUpdateArgs} args - Arguments to update one August.
     * @example
     * // Update one August
     * const august = await prisma.august.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends augustUpdateArgs>(args: SelectSubset<T, augustUpdateArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Augusts.
     * @param {augustDeleteManyArgs} args - Arguments to filter Augusts to delete.
     * @example
     * // Delete a few Augusts
     * const { count } = await prisma.august.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends augustDeleteManyArgs>(args?: SelectSubset<T, augustDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Augusts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Augusts
     * const august = await prisma.august.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends augustUpdateManyArgs>(args: SelectSubset<T, augustUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Augusts and returns the data updated in the database.
     * @param {augustUpdateManyAndReturnArgs} args - Arguments to update many Augusts.
     * @example
     * // Update many Augusts
     * const august = await prisma.august.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Augusts and only return the `id`
     * const augustWithIdOnly = await prisma.august.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends augustUpdateManyAndReturnArgs>(args: SelectSubset<T, augustUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one August.
     * @param {augustUpsertArgs} args - Arguments to update or create a August.
     * @example
     * // Update or create a August
     * const august = await prisma.august.upsert({
     *   create: {
     *     // ... data to create a August
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the August we want to update
     *   }
     * })
     */
    upsert<T extends augustUpsertArgs>(args: SelectSubset<T, augustUpsertArgs<ExtArgs>>): Prisma__augustClient<$Result.GetResult<Prisma.$augustPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Augusts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustCountArgs} args - Arguments to filter Augusts to count.
     * @example
     * // Count the number of Augusts
     * const count = await prisma.august.count({
     *   where: {
     *     // ... the filter for the Augusts we want to count
     *   }
     * })
    **/
    count<T extends augustCountArgs>(
      args?: Subset<T, augustCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AugustCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a August.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AugustAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AugustAggregateArgs>(args: Subset<T, AugustAggregateArgs>): Prisma.PrismaPromise<GetAugustAggregateType<T>>

    /**
     * Group by August.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {augustGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends augustGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: augustGroupByArgs['orderBy'] }
        : { orderBy?: augustGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, augustGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAugustGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the august model
   */
  readonly fields: augustFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for august.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__augustClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the august model
   */
  interface augustFieldRefs {
    readonly id: FieldRef<"august", 'String'>
    readonly year: FieldRef<"august", 'String'>
    readonly day: FieldRef<"august", 'String'>
    readonly owner: FieldRef<"august", 'String'>
    readonly type: FieldRef<"august", 'String'>
  }
    

  // Custom InputTypes
  /**
   * august findUnique
   */
  export type augustFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter, which august to fetch.
     */
    where: augustWhereUniqueInput
  }

  /**
   * august findUniqueOrThrow
   */
  export type augustFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter, which august to fetch.
     */
    where: augustWhereUniqueInput
  }

  /**
   * august findFirst
   */
  export type augustFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter, which august to fetch.
     */
    where?: augustWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of augusts to fetch.
     */
    orderBy?: augustOrderByWithRelationInput | augustOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for augusts.
     */
    cursor?: augustWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` augusts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` augusts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of augusts.
     */
    distinct?: AugustScalarFieldEnum | AugustScalarFieldEnum[]
  }

  /**
   * august findFirstOrThrow
   */
  export type augustFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter, which august to fetch.
     */
    where?: augustWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of augusts to fetch.
     */
    orderBy?: augustOrderByWithRelationInput | augustOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for augusts.
     */
    cursor?: augustWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` augusts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` augusts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of augusts.
     */
    distinct?: AugustScalarFieldEnum | AugustScalarFieldEnum[]
  }

  /**
   * august findMany
   */
  export type augustFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter, which augusts to fetch.
     */
    where?: augustWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of augusts to fetch.
     */
    orderBy?: augustOrderByWithRelationInput | augustOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing augusts.
     */
    cursor?: augustWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` augusts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` augusts.
     */
    skip?: number
    distinct?: AugustScalarFieldEnum | AugustScalarFieldEnum[]
  }

  /**
   * august create
   */
  export type augustCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * The data needed to create a august.
     */
    data: XOR<augustCreateInput, augustUncheckedCreateInput>
  }

  /**
   * august createMany
   */
  export type augustCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many augusts.
     */
    data: augustCreateManyInput | augustCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * august createManyAndReturn
   */
  export type augustCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * The data used to create many augusts.
     */
    data: augustCreateManyInput | augustCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * august update
   */
  export type augustUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * The data needed to update a august.
     */
    data: XOR<augustUpdateInput, augustUncheckedUpdateInput>
    /**
     * Choose, which august to update.
     */
    where: augustWhereUniqueInput
  }

  /**
   * august updateMany
   */
  export type augustUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update augusts.
     */
    data: XOR<augustUpdateManyMutationInput, augustUncheckedUpdateManyInput>
    /**
     * Filter which augusts to update
     */
    where?: augustWhereInput
    /**
     * Limit how many augusts to update.
     */
    limit?: number
  }

  /**
   * august updateManyAndReturn
   */
  export type augustUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * The data used to update augusts.
     */
    data: XOR<augustUpdateManyMutationInput, augustUncheckedUpdateManyInput>
    /**
     * Filter which augusts to update
     */
    where?: augustWhereInput
    /**
     * Limit how many augusts to update.
     */
    limit?: number
  }

  /**
   * august upsert
   */
  export type augustUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * The filter to search for the august to update in case it exists.
     */
    where: augustWhereUniqueInput
    /**
     * In case the august found by the `where` argument doesn't exist, create a new august with this data.
     */
    create: XOR<augustCreateInput, augustUncheckedCreateInput>
    /**
     * In case the august was found with the provided `where` argument, update it with this data.
     */
    update: XOR<augustUpdateInput, augustUncheckedUpdateInput>
  }

  /**
   * august delete
   */
  export type augustDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
    /**
     * Filter which august to delete.
     */
    where: augustWhereUniqueInput
  }

  /**
   * august deleteMany
   */
  export type augustDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which augusts to delete
     */
    where?: augustWhereInput
    /**
     * Limit how many augusts to delete.
     */
    limit?: number
  }

  /**
   * august without action
   */
  export type augustDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the august
     */
    select?: augustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the august
     */
    omit?: augustOmit<ExtArgs> | null
  }


  /**
   * Model september
   */

  export type AggregateSeptember = {
    _count: SeptemberCountAggregateOutputType | null
    _min: SeptemberMinAggregateOutputType | null
    _max: SeptemberMaxAggregateOutputType | null
  }

  export type SeptemberMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type SeptemberMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type SeptemberCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type SeptemberMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type SeptemberMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type SeptemberCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type SeptemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which september to aggregate.
     */
    where?: septemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of septembers to fetch.
     */
    orderBy?: septemberOrderByWithRelationInput | septemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: septemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` septembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` septembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned septembers
    **/
    _count?: true | SeptemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeptemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeptemberMaxAggregateInputType
  }

  export type GetSeptemberAggregateType<T extends SeptemberAggregateArgs> = {
        [P in keyof T & keyof AggregateSeptember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeptember[P]>
      : GetScalarType<T[P], AggregateSeptember[P]>
  }




  export type septemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: septemberWhereInput
    orderBy?: septemberOrderByWithAggregationInput | septemberOrderByWithAggregationInput[]
    by: SeptemberScalarFieldEnum[] | SeptemberScalarFieldEnum
    having?: septemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeptemberCountAggregateInputType | true
    _min?: SeptemberMinAggregateInputType
    _max?: SeptemberMaxAggregateInputType
  }

  export type SeptemberGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: SeptemberCountAggregateOutputType | null
    _min: SeptemberMinAggregateOutputType | null
    _max: SeptemberMaxAggregateOutputType | null
  }

  type GetSeptemberGroupByPayload<T extends septemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeptemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeptemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeptemberGroupByOutputType[P]>
            : GetScalarType<T[P], SeptemberGroupByOutputType[P]>
        }
      >
    >


  export type septemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["september"]>

  export type septemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["september"]>

  export type septemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["september"]>

  export type septemberSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type septemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["september"]>

  export type $septemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "september"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["september"]>
    composites: {}
  }

  type septemberGetPayload<S extends boolean | null | undefined | septemberDefaultArgs> = $Result.GetResult<Prisma.$septemberPayload, S>

  type septemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<septemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeptemberCountAggregateInputType | true
    }

  export interface septemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['september'], meta: { name: 'september' } }
    /**
     * Find zero or one September that matches the filter.
     * @param {septemberFindUniqueArgs} args - Arguments to find a September
     * @example
     * // Get one September
     * const september = await prisma.september.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends septemberFindUniqueArgs>(args: SelectSubset<T, septemberFindUniqueArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one September that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {septemberFindUniqueOrThrowArgs} args - Arguments to find a September
     * @example
     * // Get one September
     * const september = await prisma.september.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends septemberFindUniqueOrThrowArgs>(args: SelectSubset<T, septemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first September that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberFindFirstArgs} args - Arguments to find a September
     * @example
     * // Get one September
     * const september = await prisma.september.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends septemberFindFirstArgs>(args?: SelectSubset<T, septemberFindFirstArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first September that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberFindFirstOrThrowArgs} args - Arguments to find a September
     * @example
     * // Get one September
     * const september = await prisma.september.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends septemberFindFirstOrThrowArgs>(args?: SelectSubset<T, septemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Septembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Septembers
     * const septembers = await prisma.september.findMany()
     * 
     * // Get first 10 Septembers
     * const septembers = await prisma.september.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const septemberWithIdOnly = await prisma.september.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends septemberFindManyArgs>(args?: SelectSubset<T, septemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a September.
     * @param {septemberCreateArgs} args - Arguments to create a September.
     * @example
     * // Create one September
     * const September = await prisma.september.create({
     *   data: {
     *     // ... data to create a September
     *   }
     * })
     * 
     */
    create<T extends septemberCreateArgs>(args: SelectSubset<T, septemberCreateArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Septembers.
     * @param {septemberCreateManyArgs} args - Arguments to create many Septembers.
     * @example
     * // Create many Septembers
     * const september = await prisma.september.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends septemberCreateManyArgs>(args?: SelectSubset<T, septemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Septembers and returns the data saved in the database.
     * @param {septemberCreateManyAndReturnArgs} args - Arguments to create many Septembers.
     * @example
     * // Create many Septembers
     * const september = await prisma.september.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Septembers and only return the `id`
     * const septemberWithIdOnly = await prisma.september.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends septemberCreateManyAndReturnArgs>(args?: SelectSubset<T, septemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a September.
     * @param {septemberDeleteArgs} args - Arguments to delete one September.
     * @example
     * // Delete one September
     * const September = await prisma.september.delete({
     *   where: {
     *     // ... filter to delete one September
     *   }
     * })
     * 
     */
    delete<T extends septemberDeleteArgs>(args: SelectSubset<T, septemberDeleteArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one September.
     * @param {septemberUpdateArgs} args - Arguments to update one September.
     * @example
     * // Update one September
     * const september = await prisma.september.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends septemberUpdateArgs>(args: SelectSubset<T, septemberUpdateArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Septembers.
     * @param {septemberDeleteManyArgs} args - Arguments to filter Septembers to delete.
     * @example
     * // Delete a few Septembers
     * const { count } = await prisma.september.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends septemberDeleteManyArgs>(args?: SelectSubset<T, septemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Septembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Septembers
     * const september = await prisma.september.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends septemberUpdateManyArgs>(args: SelectSubset<T, septemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Septembers and returns the data updated in the database.
     * @param {septemberUpdateManyAndReturnArgs} args - Arguments to update many Septembers.
     * @example
     * // Update many Septembers
     * const september = await prisma.september.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Septembers and only return the `id`
     * const septemberWithIdOnly = await prisma.september.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends septemberUpdateManyAndReturnArgs>(args: SelectSubset<T, septemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one September.
     * @param {septemberUpsertArgs} args - Arguments to update or create a September.
     * @example
     * // Update or create a September
     * const september = await prisma.september.upsert({
     *   create: {
     *     // ... data to create a September
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the September we want to update
     *   }
     * })
     */
    upsert<T extends septemberUpsertArgs>(args: SelectSubset<T, septemberUpsertArgs<ExtArgs>>): Prisma__septemberClient<$Result.GetResult<Prisma.$septemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Septembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberCountArgs} args - Arguments to filter Septembers to count.
     * @example
     * // Count the number of Septembers
     * const count = await prisma.september.count({
     *   where: {
     *     // ... the filter for the Septembers we want to count
     *   }
     * })
    **/
    count<T extends septemberCountArgs>(
      args?: Subset<T, septemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeptemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a September.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeptemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeptemberAggregateArgs>(args: Subset<T, SeptemberAggregateArgs>): Prisma.PrismaPromise<GetSeptemberAggregateType<T>>

    /**
     * Group by September.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {septemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends septemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: septemberGroupByArgs['orderBy'] }
        : { orderBy?: septemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, septemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeptemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the september model
   */
  readonly fields: septemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for september.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__septemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the september model
   */
  interface septemberFieldRefs {
    readonly id: FieldRef<"september", 'String'>
    readonly year: FieldRef<"september", 'String'>
    readonly day: FieldRef<"september", 'String'>
    readonly owner: FieldRef<"september", 'String'>
    readonly type: FieldRef<"september", 'String'>
  }
    

  // Custom InputTypes
  /**
   * september findUnique
   */
  export type septemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter, which september to fetch.
     */
    where: septemberWhereUniqueInput
  }

  /**
   * september findUniqueOrThrow
   */
  export type septemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter, which september to fetch.
     */
    where: septemberWhereUniqueInput
  }

  /**
   * september findFirst
   */
  export type septemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter, which september to fetch.
     */
    where?: septemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of septembers to fetch.
     */
    orderBy?: septemberOrderByWithRelationInput | septemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for septembers.
     */
    cursor?: septemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` septembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` septembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of septembers.
     */
    distinct?: SeptemberScalarFieldEnum | SeptemberScalarFieldEnum[]
  }

  /**
   * september findFirstOrThrow
   */
  export type septemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter, which september to fetch.
     */
    where?: septemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of septembers to fetch.
     */
    orderBy?: septemberOrderByWithRelationInput | septemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for septembers.
     */
    cursor?: septemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` septembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` septembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of septembers.
     */
    distinct?: SeptemberScalarFieldEnum | SeptemberScalarFieldEnum[]
  }

  /**
   * september findMany
   */
  export type septemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter, which septembers to fetch.
     */
    where?: septemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of septembers to fetch.
     */
    orderBy?: septemberOrderByWithRelationInput | septemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing septembers.
     */
    cursor?: septemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` septembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` septembers.
     */
    skip?: number
    distinct?: SeptemberScalarFieldEnum | SeptemberScalarFieldEnum[]
  }

  /**
   * september create
   */
  export type septemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * The data needed to create a september.
     */
    data: XOR<septemberCreateInput, septemberUncheckedCreateInput>
  }

  /**
   * september createMany
   */
  export type septemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many septembers.
     */
    data: septemberCreateManyInput | septemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * september createManyAndReturn
   */
  export type septemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * The data used to create many septembers.
     */
    data: septemberCreateManyInput | septemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * september update
   */
  export type septemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * The data needed to update a september.
     */
    data: XOR<septemberUpdateInput, septemberUncheckedUpdateInput>
    /**
     * Choose, which september to update.
     */
    where: septemberWhereUniqueInput
  }

  /**
   * september updateMany
   */
  export type septemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update septembers.
     */
    data: XOR<septemberUpdateManyMutationInput, septemberUncheckedUpdateManyInput>
    /**
     * Filter which septembers to update
     */
    where?: septemberWhereInput
    /**
     * Limit how many septembers to update.
     */
    limit?: number
  }

  /**
   * september updateManyAndReturn
   */
  export type septemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * The data used to update septembers.
     */
    data: XOR<septemberUpdateManyMutationInput, septemberUncheckedUpdateManyInput>
    /**
     * Filter which septembers to update
     */
    where?: septemberWhereInput
    /**
     * Limit how many septembers to update.
     */
    limit?: number
  }

  /**
   * september upsert
   */
  export type septemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * The filter to search for the september to update in case it exists.
     */
    where: septemberWhereUniqueInput
    /**
     * In case the september found by the `where` argument doesn't exist, create a new september with this data.
     */
    create: XOR<septemberCreateInput, septemberUncheckedCreateInput>
    /**
     * In case the september was found with the provided `where` argument, update it with this data.
     */
    update: XOR<septemberUpdateInput, septemberUncheckedUpdateInput>
  }

  /**
   * september delete
   */
  export type septemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
    /**
     * Filter which september to delete.
     */
    where: septemberWhereUniqueInput
  }

  /**
   * september deleteMany
   */
  export type septemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which septembers to delete
     */
    where?: septemberWhereInput
    /**
     * Limit how many septembers to delete.
     */
    limit?: number
  }

  /**
   * september without action
   */
  export type septemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the september
     */
    select?: septemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the september
     */
    omit?: septemberOmit<ExtArgs> | null
  }


  /**
   * Model october
   */

  export type AggregateOctober = {
    _count: OctoberCountAggregateOutputType | null
    _min: OctoberMinAggregateOutputType | null
    _max: OctoberMaxAggregateOutputType | null
  }

  export type OctoberMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type OctoberMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type OctoberCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type OctoberMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type OctoberMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type OctoberCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type OctoberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which october to aggregate.
     */
    where?: octoberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of octobers to fetch.
     */
    orderBy?: octoberOrderByWithRelationInput | octoberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: octoberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` octobers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` octobers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned octobers
    **/
    _count?: true | OctoberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OctoberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OctoberMaxAggregateInputType
  }

  export type GetOctoberAggregateType<T extends OctoberAggregateArgs> = {
        [P in keyof T & keyof AggregateOctober]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOctober[P]>
      : GetScalarType<T[P], AggregateOctober[P]>
  }




  export type octoberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: octoberWhereInput
    orderBy?: octoberOrderByWithAggregationInput | octoberOrderByWithAggregationInput[]
    by: OctoberScalarFieldEnum[] | OctoberScalarFieldEnum
    having?: octoberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OctoberCountAggregateInputType | true
    _min?: OctoberMinAggregateInputType
    _max?: OctoberMaxAggregateInputType
  }

  export type OctoberGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: OctoberCountAggregateOutputType | null
    _min: OctoberMinAggregateOutputType | null
    _max: OctoberMaxAggregateOutputType | null
  }

  type GetOctoberGroupByPayload<T extends octoberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OctoberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OctoberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OctoberGroupByOutputType[P]>
            : GetScalarType<T[P], OctoberGroupByOutputType[P]>
        }
      >
    >


  export type octoberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["october"]>

  export type octoberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["october"]>

  export type octoberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["october"]>

  export type octoberSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type octoberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["october"]>

  export type $octoberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "october"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["october"]>
    composites: {}
  }

  type octoberGetPayload<S extends boolean | null | undefined | octoberDefaultArgs> = $Result.GetResult<Prisma.$octoberPayload, S>

  type octoberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<octoberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OctoberCountAggregateInputType | true
    }

  export interface octoberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['october'], meta: { name: 'october' } }
    /**
     * Find zero or one October that matches the filter.
     * @param {octoberFindUniqueArgs} args - Arguments to find a October
     * @example
     * // Get one October
     * const october = await prisma.october.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends octoberFindUniqueArgs>(args: SelectSubset<T, octoberFindUniqueArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one October that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {octoberFindUniqueOrThrowArgs} args - Arguments to find a October
     * @example
     * // Get one October
     * const october = await prisma.october.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends octoberFindUniqueOrThrowArgs>(args: SelectSubset<T, octoberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first October that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberFindFirstArgs} args - Arguments to find a October
     * @example
     * // Get one October
     * const october = await prisma.october.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends octoberFindFirstArgs>(args?: SelectSubset<T, octoberFindFirstArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first October that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberFindFirstOrThrowArgs} args - Arguments to find a October
     * @example
     * // Get one October
     * const october = await prisma.october.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends octoberFindFirstOrThrowArgs>(args?: SelectSubset<T, octoberFindFirstOrThrowArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Octobers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Octobers
     * const octobers = await prisma.october.findMany()
     * 
     * // Get first 10 Octobers
     * const octobers = await prisma.october.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const octoberWithIdOnly = await prisma.october.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends octoberFindManyArgs>(args?: SelectSubset<T, octoberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a October.
     * @param {octoberCreateArgs} args - Arguments to create a October.
     * @example
     * // Create one October
     * const October = await prisma.october.create({
     *   data: {
     *     // ... data to create a October
     *   }
     * })
     * 
     */
    create<T extends octoberCreateArgs>(args: SelectSubset<T, octoberCreateArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Octobers.
     * @param {octoberCreateManyArgs} args - Arguments to create many Octobers.
     * @example
     * // Create many Octobers
     * const october = await prisma.october.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends octoberCreateManyArgs>(args?: SelectSubset<T, octoberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Octobers and returns the data saved in the database.
     * @param {octoberCreateManyAndReturnArgs} args - Arguments to create many Octobers.
     * @example
     * // Create many Octobers
     * const october = await prisma.october.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Octobers and only return the `id`
     * const octoberWithIdOnly = await prisma.october.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends octoberCreateManyAndReturnArgs>(args?: SelectSubset<T, octoberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a October.
     * @param {octoberDeleteArgs} args - Arguments to delete one October.
     * @example
     * // Delete one October
     * const October = await prisma.october.delete({
     *   where: {
     *     // ... filter to delete one October
     *   }
     * })
     * 
     */
    delete<T extends octoberDeleteArgs>(args: SelectSubset<T, octoberDeleteArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one October.
     * @param {octoberUpdateArgs} args - Arguments to update one October.
     * @example
     * // Update one October
     * const october = await prisma.october.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends octoberUpdateArgs>(args: SelectSubset<T, octoberUpdateArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Octobers.
     * @param {octoberDeleteManyArgs} args - Arguments to filter Octobers to delete.
     * @example
     * // Delete a few Octobers
     * const { count } = await prisma.october.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends octoberDeleteManyArgs>(args?: SelectSubset<T, octoberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Octobers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Octobers
     * const october = await prisma.october.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends octoberUpdateManyArgs>(args: SelectSubset<T, octoberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Octobers and returns the data updated in the database.
     * @param {octoberUpdateManyAndReturnArgs} args - Arguments to update many Octobers.
     * @example
     * // Update many Octobers
     * const october = await prisma.october.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Octobers and only return the `id`
     * const octoberWithIdOnly = await prisma.october.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends octoberUpdateManyAndReturnArgs>(args: SelectSubset<T, octoberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one October.
     * @param {octoberUpsertArgs} args - Arguments to update or create a October.
     * @example
     * // Update or create a October
     * const october = await prisma.october.upsert({
     *   create: {
     *     // ... data to create a October
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the October we want to update
     *   }
     * })
     */
    upsert<T extends octoberUpsertArgs>(args: SelectSubset<T, octoberUpsertArgs<ExtArgs>>): Prisma__octoberClient<$Result.GetResult<Prisma.$octoberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Octobers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberCountArgs} args - Arguments to filter Octobers to count.
     * @example
     * // Count the number of Octobers
     * const count = await prisma.october.count({
     *   where: {
     *     // ... the filter for the Octobers we want to count
     *   }
     * })
    **/
    count<T extends octoberCountArgs>(
      args?: Subset<T, octoberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OctoberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a October.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OctoberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OctoberAggregateArgs>(args: Subset<T, OctoberAggregateArgs>): Prisma.PrismaPromise<GetOctoberAggregateType<T>>

    /**
     * Group by October.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {octoberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends octoberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: octoberGroupByArgs['orderBy'] }
        : { orderBy?: octoberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, octoberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOctoberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the october model
   */
  readonly fields: octoberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for october.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__octoberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the october model
   */
  interface octoberFieldRefs {
    readonly id: FieldRef<"october", 'String'>
    readonly year: FieldRef<"october", 'String'>
    readonly day: FieldRef<"october", 'String'>
    readonly owner: FieldRef<"october", 'String'>
    readonly type: FieldRef<"october", 'String'>
  }
    

  // Custom InputTypes
  /**
   * october findUnique
   */
  export type octoberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter, which october to fetch.
     */
    where: octoberWhereUniqueInput
  }

  /**
   * october findUniqueOrThrow
   */
  export type octoberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter, which october to fetch.
     */
    where: octoberWhereUniqueInput
  }

  /**
   * october findFirst
   */
  export type octoberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter, which october to fetch.
     */
    where?: octoberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of octobers to fetch.
     */
    orderBy?: octoberOrderByWithRelationInput | octoberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for octobers.
     */
    cursor?: octoberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` octobers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` octobers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of octobers.
     */
    distinct?: OctoberScalarFieldEnum | OctoberScalarFieldEnum[]
  }

  /**
   * october findFirstOrThrow
   */
  export type octoberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter, which october to fetch.
     */
    where?: octoberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of octobers to fetch.
     */
    orderBy?: octoberOrderByWithRelationInput | octoberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for octobers.
     */
    cursor?: octoberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` octobers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` octobers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of octobers.
     */
    distinct?: OctoberScalarFieldEnum | OctoberScalarFieldEnum[]
  }

  /**
   * october findMany
   */
  export type octoberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter, which octobers to fetch.
     */
    where?: octoberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of octobers to fetch.
     */
    orderBy?: octoberOrderByWithRelationInput | octoberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing octobers.
     */
    cursor?: octoberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` octobers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` octobers.
     */
    skip?: number
    distinct?: OctoberScalarFieldEnum | OctoberScalarFieldEnum[]
  }

  /**
   * october create
   */
  export type octoberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * The data needed to create a october.
     */
    data: XOR<octoberCreateInput, octoberUncheckedCreateInput>
  }

  /**
   * october createMany
   */
  export type octoberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many octobers.
     */
    data: octoberCreateManyInput | octoberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * october createManyAndReturn
   */
  export type octoberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * The data used to create many octobers.
     */
    data: octoberCreateManyInput | octoberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * october update
   */
  export type octoberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * The data needed to update a october.
     */
    data: XOR<octoberUpdateInput, octoberUncheckedUpdateInput>
    /**
     * Choose, which october to update.
     */
    where: octoberWhereUniqueInput
  }

  /**
   * october updateMany
   */
  export type octoberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update octobers.
     */
    data: XOR<octoberUpdateManyMutationInput, octoberUncheckedUpdateManyInput>
    /**
     * Filter which octobers to update
     */
    where?: octoberWhereInput
    /**
     * Limit how many octobers to update.
     */
    limit?: number
  }

  /**
   * october updateManyAndReturn
   */
  export type octoberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * The data used to update octobers.
     */
    data: XOR<octoberUpdateManyMutationInput, octoberUncheckedUpdateManyInput>
    /**
     * Filter which octobers to update
     */
    where?: octoberWhereInput
    /**
     * Limit how many octobers to update.
     */
    limit?: number
  }

  /**
   * october upsert
   */
  export type octoberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * The filter to search for the october to update in case it exists.
     */
    where: octoberWhereUniqueInput
    /**
     * In case the october found by the `where` argument doesn't exist, create a new october with this data.
     */
    create: XOR<octoberCreateInput, octoberUncheckedCreateInput>
    /**
     * In case the october was found with the provided `where` argument, update it with this data.
     */
    update: XOR<octoberUpdateInput, octoberUncheckedUpdateInput>
  }

  /**
   * october delete
   */
  export type octoberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
    /**
     * Filter which october to delete.
     */
    where: octoberWhereUniqueInput
  }

  /**
   * october deleteMany
   */
  export type octoberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which octobers to delete
     */
    where?: octoberWhereInput
    /**
     * Limit how many octobers to delete.
     */
    limit?: number
  }

  /**
   * october without action
   */
  export type octoberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the october
     */
    select?: octoberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the october
     */
    omit?: octoberOmit<ExtArgs> | null
  }


  /**
   * Model november
   */

  export type AggregateNovember = {
    _count: NovemberCountAggregateOutputType | null
    _min: NovemberMinAggregateOutputType | null
    _max: NovemberMaxAggregateOutputType | null
  }

  export type NovemberMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type NovemberMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type NovemberCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type NovemberMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type NovemberMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type NovemberCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type NovemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which november to aggregate.
     */
    where?: novemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novembers to fetch.
     */
    orderBy?: novemberOrderByWithRelationInput | novemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: novemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned novembers
    **/
    _count?: true | NovemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovemberMaxAggregateInputType
  }

  export type GetNovemberAggregateType<T extends NovemberAggregateArgs> = {
        [P in keyof T & keyof AggregateNovember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovember[P]>
      : GetScalarType<T[P], AggregateNovember[P]>
  }




  export type novemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novemberWhereInput
    orderBy?: novemberOrderByWithAggregationInput | novemberOrderByWithAggregationInput[]
    by: NovemberScalarFieldEnum[] | NovemberScalarFieldEnum
    having?: novemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovemberCountAggregateInputType | true
    _min?: NovemberMinAggregateInputType
    _max?: NovemberMaxAggregateInputType
  }

  export type NovemberGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: NovemberCountAggregateOutputType | null
    _min: NovemberMinAggregateOutputType | null
    _max: NovemberMaxAggregateOutputType | null
  }

  type GetNovemberGroupByPayload<T extends novemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovemberGroupByOutputType[P]>
            : GetScalarType<T[P], NovemberGroupByOutputType[P]>
        }
      >
    >


  export type novemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["november"]>

  export type novemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["november"]>

  export type novemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["november"]>

  export type novemberSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type novemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["november"]>

  export type $novemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "november"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["november"]>
    composites: {}
  }

  type novemberGetPayload<S extends boolean | null | undefined | novemberDefaultArgs> = $Result.GetResult<Prisma.$novemberPayload, S>

  type novemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<novemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovemberCountAggregateInputType | true
    }

  export interface novemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['november'], meta: { name: 'november' } }
    /**
     * Find zero or one November that matches the filter.
     * @param {novemberFindUniqueArgs} args - Arguments to find a November
     * @example
     * // Get one November
     * const november = await prisma.november.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends novemberFindUniqueArgs>(args: SelectSubset<T, novemberFindUniqueArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one November that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {novemberFindUniqueOrThrowArgs} args - Arguments to find a November
     * @example
     * // Get one November
     * const november = await prisma.november.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends novemberFindUniqueOrThrowArgs>(args: SelectSubset<T, novemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first November that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberFindFirstArgs} args - Arguments to find a November
     * @example
     * // Get one November
     * const november = await prisma.november.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends novemberFindFirstArgs>(args?: SelectSubset<T, novemberFindFirstArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first November that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberFindFirstOrThrowArgs} args - Arguments to find a November
     * @example
     * // Get one November
     * const november = await prisma.november.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends novemberFindFirstOrThrowArgs>(args?: SelectSubset<T, novemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novembers
     * const novembers = await prisma.november.findMany()
     * 
     * // Get first 10 Novembers
     * const novembers = await prisma.november.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const novemberWithIdOnly = await prisma.november.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends novemberFindManyArgs>(args?: SelectSubset<T, novemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a November.
     * @param {novemberCreateArgs} args - Arguments to create a November.
     * @example
     * // Create one November
     * const November = await prisma.november.create({
     *   data: {
     *     // ... data to create a November
     *   }
     * })
     * 
     */
    create<T extends novemberCreateArgs>(args: SelectSubset<T, novemberCreateArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novembers.
     * @param {novemberCreateManyArgs} args - Arguments to create many Novembers.
     * @example
     * // Create many Novembers
     * const november = await prisma.november.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends novemberCreateManyArgs>(args?: SelectSubset<T, novemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novembers and returns the data saved in the database.
     * @param {novemberCreateManyAndReturnArgs} args - Arguments to create many Novembers.
     * @example
     * // Create many Novembers
     * const november = await prisma.november.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novembers and only return the `id`
     * const novemberWithIdOnly = await prisma.november.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends novemberCreateManyAndReturnArgs>(args?: SelectSubset<T, novemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a November.
     * @param {novemberDeleteArgs} args - Arguments to delete one November.
     * @example
     * // Delete one November
     * const November = await prisma.november.delete({
     *   where: {
     *     // ... filter to delete one November
     *   }
     * })
     * 
     */
    delete<T extends novemberDeleteArgs>(args: SelectSubset<T, novemberDeleteArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one November.
     * @param {novemberUpdateArgs} args - Arguments to update one November.
     * @example
     * // Update one November
     * const november = await prisma.november.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends novemberUpdateArgs>(args: SelectSubset<T, novemberUpdateArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novembers.
     * @param {novemberDeleteManyArgs} args - Arguments to filter Novembers to delete.
     * @example
     * // Delete a few Novembers
     * const { count } = await prisma.november.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends novemberDeleteManyArgs>(args?: SelectSubset<T, novemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novembers
     * const november = await prisma.november.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends novemberUpdateManyArgs>(args: SelectSubset<T, novemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novembers and returns the data updated in the database.
     * @param {novemberUpdateManyAndReturnArgs} args - Arguments to update many Novembers.
     * @example
     * // Update many Novembers
     * const november = await prisma.november.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novembers and only return the `id`
     * const novemberWithIdOnly = await prisma.november.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends novemberUpdateManyAndReturnArgs>(args: SelectSubset<T, novemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one November.
     * @param {novemberUpsertArgs} args - Arguments to update or create a November.
     * @example
     * // Update or create a November
     * const november = await prisma.november.upsert({
     *   create: {
     *     // ... data to create a November
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the November we want to update
     *   }
     * })
     */
    upsert<T extends novemberUpsertArgs>(args: SelectSubset<T, novemberUpsertArgs<ExtArgs>>): Prisma__novemberClient<$Result.GetResult<Prisma.$novemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberCountArgs} args - Arguments to filter Novembers to count.
     * @example
     * // Count the number of Novembers
     * const count = await prisma.november.count({
     *   where: {
     *     // ... the filter for the Novembers we want to count
     *   }
     * })
    **/
    count<T extends novemberCountArgs>(
      args?: Subset<T, novemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a November.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NovemberAggregateArgs>(args: Subset<T, NovemberAggregateArgs>): Prisma.PrismaPromise<GetNovemberAggregateType<T>>

    /**
     * Group by November.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends novemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: novemberGroupByArgs['orderBy'] }
        : { orderBy?: novemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, novemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the november model
   */
  readonly fields: novemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for november.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__novemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the november model
   */
  interface novemberFieldRefs {
    readonly id: FieldRef<"november", 'String'>
    readonly year: FieldRef<"november", 'String'>
    readonly day: FieldRef<"november", 'String'>
    readonly owner: FieldRef<"november", 'String'>
    readonly type: FieldRef<"november", 'String'>
  }
    

  // Custom InputTypes
  /**
   * november findUnique
   */
  export type novemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter, which november to fetch.
     */
    where: novemberWhereUniqueInput
  }

  /**
   * november findUniqueOrThrow
   */
  export type novemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter, which november to fetch.
     */
    where: novemberWhereUniqueInput
  }

  /**
   * november findFirst
   */
  export type novemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter, which november to fetch.
     */
    where?: novemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novembers to fetch.
     */
    orderBy?: novemberOrderByWithRelationInput | novemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novembers.
     */
    cursor?: novemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novembers.
     */
    distinct?: NovemberScalarFieldEnum | NovemberScalarFieldEnum[]
  }

  /**
   * november findFirstOrThrow
   */
  export type novemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter, which november to fetch.
     */
    where?: novemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novembers to fetch.
     */
    orderBy?: novemberOrderByWithRelationInput | novemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novembers.
     */
    cursor?: novemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novembers.
     */
    distinct?: NovemberScalarFieldEnum | NovemberScalarFieldEnum[]
  }

  /**
   * november findMany
   */
  export type novemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter, which novembers to fetch.
     */
    where?: novemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novembers to fetch.
     */
    orderBy?: novemberOrderByWithRelationInput | novemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing novembers.
     */
    cursor?: novemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novembers.
     */
    skip?: number
    distinct?: NovemberScalarFieldEnum | NovemberScalarFieldEnum[]
  }

  /**
   * november create
   */
  export type novemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * The data needed to create a november.
     */
    data: XOR<novemberCreateInput, novemberUncheckedCreateInput>
  }

  /**
   * november createMany
   */
  export type novemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many novembers.
     */
    data: novemberCreateManyInput | novemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * november createManyAndReturn
   */
  export type novemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * The data used to create many novembers.
     */
    data: novemberCreateManyInput | novemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * november update
   */
  export type novemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * The data needed to update a november.
     */
    data: XOR<novemberUpdateInput, novemberUncheckedUpdateInput>
    /**
     * Choose, which november to update.
     */
    where: novemberWhereUniqueInput
  }

  /**
   * november updateMany
   */
  export type novemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update novembers.
     */
    data: XOR<novemberUpdateManyMutationInput, novemberUncheckedUpdateManyInput>
    /**
     * Filter which novembers to update
     */
    where?: novemberWhereInput
    /**
     * Limit how many novembers to update.
     */
    limit?: number
  }

  /**
   * november updateManyAndReturn
   */
  export type novemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * The data used to update novembers.
     */
    data: XOR<novemberUpdateManyMutationInput, novemberUncheckedUpdateManyInput>
    /**
     * Filter which novembers to update
     */
    where?: novemberWhereInput
    /**
     * Limit how many novembers to update.
     */
    limit?: number
  }

  /**
   * november upsert
   */
  export type novemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * The filter to search for the november to update in case it exists.
     */
    where: novemberWhereUniqueInput
    /**
     * In case the november found by the `where` argument doesn't exist, create a new november with this data.
     */
    create: XOR<novemberCreateInput, novemberUncheckedCreateInput>
    /**
     * In case the november was found with the provided `where` argument, update it with this data.
     */
    update: XOR<novemberUpdateInput, novemberUncheckedUpdateInput>
  }

  /**
   * november delete
   */
  export type novemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
    /**
     * Filter which november to delete.
     */
    where: novemberWhereUniqueInput
  }

  /**
   * november deleteMany
   */
  export type novemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which novembers to delete
     */
    where?: novemberWhereInput
    /**
     * Limit how many novembers to delete.
     */
    limit?: number
  }

  /**
   * november without action
   */
  export type novemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the november
     */
    select?: novemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the november
     */
    omit?: novemberOmit<ExtArgs> | null
  }


  /**
   * Model december
   */

  export type AggregateDecember = {
    _count: DecemberCountAggregateOutputType | null
    _min: DecemberMinAggregateOutputType | null
    _max: DecemberMaxAggregateOutputType | null
  }

  export type DecemberMinAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type DecemberMaxAggregateOutputType = {
    id: string | null
    year: string | null
    day: string | null
    owner: string | null
    type: string | null
  }

  export type DecemberCountAggregateOutputType = {
    id: number
    year: number
    day: number
    owner: number
    type: number
    _all: number
  }


  export type DecemberMinAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type DecemberMaxAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
  }

  export type DecemberCountAggregateInputType = {
    id?: true
    year?: true
    day?: true
    owner?: true
    type?: true
    _all?: true
  }

  export type DecemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which december to aggregate.
     */
    where?: decemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decembers to fetch.
     */
    orderBy?: decemberOrderByWithRelationInput | decemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: decemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned decembers
    **/
    _count?: true | DecemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecemberMaxAggregateInputType
  }

  export type GetDecemberAggregateType<T extends DecemberAggregateArgs> = {
        [P in keyof T & keyof AggregateDecember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecember[P]>
      : GetScalarType<T[P], AggregateDecember[P]>
  }




  export type decemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: decemberWhereInput
    orderBy?: decemberOrderByWithAggregationInput | decemberOrderByWithAggregationInput[]
    by: DecemberScalarFieldEnum[] | DecemberScalarFieldEnum
    having?: decemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecemberCountAggregateInputType | true
    _min?: DecemberMinAggregateInputType
    _max?: DecemberMaxAggregateInputType
  }

  export type DecemberGroupByOutputType = {
    id: string
    year: string
    day: string
    owner: string
    type: string
    _count: DecemberCountAggregateOutputType | null
    _min: DecemberMinAggregateOutputType | null
    _max: DecemberMaxAggregateOutputType | null
  }

  type GetDecemberGroupByPayload<T extends decemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecemberGroupByOutputType[P]>
            : GetScalarType<T[P], DecemberGroupByOutputType[P]>
        }
      >
    >


  export type decemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["december"]>

  export type decemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["december"]>

  export type decemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }, ExtArgs["result"]["december"]>

  export type decemberSelectScalar = {
    id?: boolean
    year?: boolean
    day?: boolean
    owner?: boolean
    type?: boolean
  }

  export type decemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "day" | "owner" | "type", ExtArgs["result"]["december"]>

  export type $decemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "december"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      day: string
      owner: string
      type: string
    }, ExtArgs["result"]["december"]>
    composites: {}
  }

  type decemberGetPayload<S extends boolean | null | undefined | decemberDefaultArgs> = $Result.GetResult<Prisma.$decemberPayload, S>

  type decemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<decemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecemberCountAggregateInputType | true
    }

  export interface decemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['december'], meta: { name: 'december' } }
    /**
     * Find zero or one December that matches the filter.
     * @param {decemberFindUniqueArgs} args - Arguments to find a December
     * @example
     * // Get one December
     * const december = await prisma.december.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends decemberFindUniqueArgs>(args: SelectSubset<T, decemberFindUniqueArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one December that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {decemberFindUniqueOrThrowArgs} args - Arguments to find a December
     * @example
     * // Get one December
     * const december = await prisma.december.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends decemberFindUniqueOrThrowArgs>(args: SelectSubset<T, decemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first December that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberFindFirstArgs} args - Arguments to find a December
     * @example
     * // Get one December
     * const december = await prisma.december.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends decemberFindFirstArgs>(args?: SelectSubset<T, decemberFindFirstArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first December that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberFindFirstOrThrowArgs} args - Arguments to find a December
     * @example
     * // Get one December
     * const december = await prisma.december.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends decemberFindFirstOrThrowArgs>(args?: SelectSubset<T, decemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decembers
     * const decembers = await prisma.december.findMany()
     * 
     * // Get first 10 Decembers
     * const decembers = await prisma.december.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decemberWithIdOnly = await prisma.december.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends decemberFindManyArgs>(args?: SelectSubset<T, decemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a December.
     * @param {decemberCreateArgs} args - Arguments to create a December.
     * @example
     * // Create one December
     * const December = await prisma.december.create({
     *   data: {
     *     // ... data to create a December
     *   }
     * })
     * 
     */
    create<T extends decemberCreateArgs>(args: SelectSubset<T, decemberCreateArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decembers.
     * @param {decemberCreateManyArgs} args - Arguments to create many Decembers.
     * @example
     * // Create many Decembers
     * const december = await prisma.december.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends decemberCreateManyArgs>(args?: SelectSubset<T, decemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decembers and returns the data saved in the database.
     * @param {decemberCreateManyAndReturnArgs} args - Arguments to create many Decembers.
     * @example
     * // Create many Decembers
     * const december = await prisma.december.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decembers and only return the `id`
     * const decemberWithIdOnly = await prisma.december.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends decemberCreateManyAndReturnArgs>(args?: SelectSubset<T, decemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a December.
     * @param {decemberDeleteArgs} args - Arguments to delete one December.
     * @example
     * // Delete one December
     * const December = await prisma.december.delete({
     *   where: {
     *     // ... filter to delete one December
     *   }
     * })
     * 
     */
    delete<T extends decemberDeleteArgs>(args: SelectSubset<T, decemberDeleteArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one December.
     * @param {decemberUpdateArgs} args - Arguments to update one December.
     * @example
     * // Update one December
     * const december = await prisma.december.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends decemberUpdateArgs>(args: SelectSubset<T, decemberUpdateArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decembers.
     * @param {decemberDeleteManyArgs} args - Arguments to filter Decembers to delete.
     * @example
     * // Delete a few Decembers
     * const { count } = await prisma.december.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends decemberDeleteManyArgs>(args?: SelectSubset<T, decemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decembers
     * const december = await prisma.december.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends decemberUpdateManyArgs>(args: SelectSubset<T, decemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decembers and returns the data updated in the database.
     * @param {decemberUpdateManyAndReturnArgs} args - Arguments to update many Decembers.
     * @example
     * // Update many Decembers
     * const december = await prisma.december.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decembers and only return the `id`
     * const decemberWithIdOnly = await prisma.december.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends decemberUpdateManyAndReturnArgs>(args: SelectSubset<T, decemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one December.
     * @param {decemberUpsertArgs} args - Arguments to update or create a December.
     * @example
     * // Update or create a December
     * const december = await prisma.december.upsert({
     *   create: {
     *     // ... data to create a December
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the December we want to update
     *   }
     * })
     */
    upsert<T extends decemberUpsertArgs>(args: SelectSubset<T, decemberUpsertArgs<ExtArgs>>): Prisma__decemberClient<$Result.GetResult<Prisma.$decemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberCountArgs} args - Arguments to filter Decembers to count.
     * @example
     * // Count the number of Decembers
     * const count = await prisma.december.count({
     *   where: {
     *     // ... the filter for the Decembers we want to count
     *   }
     * })
    **/
    count<T extends decemberCountArgs>(
      args?: Subset<T, decemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a December.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecemberAggregateArgs>(args: Subset<T, DecemberAggregateArgs>): Prisma.PrismaPromise<GetDecemberAggregateType<T>>

    /**
     * Group by December.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends decemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: decemberGroupByArgs['orderBy'] }
        : { orderBy?: decemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, decemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the december model
   */
  readonly fields: decemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for december.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__decemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the december model
   */
  interface decemberFieldRefs {
    readonly id: FieldRef<"december", 'String'>
    readonly year: FieldRef<"december", 'String'>
    readonly day: FieldRef<"december", 'String'>
    readonly owner: FieldRef<"december", 'String'>
    readonly type: FieldRef<"december", 'String'>
  }
    

  // Custom InputTypes
  /**
   * december findUnique
   */
  export type decemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter, which december to fetch.
     */
    where: decemberWhereUniqueInput
  }

  /**
   * december findUniqueOrThrow
   */
  export type decemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter, which december to fetch.
     */
    where: decemberWhereUniqueInput
  }

  /**
   * december findFirst
   */
  export type decemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter, which december to fetch.
     */
    where?: decemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decembers to fetch.
     */
    orderBy?: decemberOrderByWithRelationInput | decemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for decembers.
     */
    cursor?: decemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of decembers.
     */
    distinct?: DecemberScalarFieldEnum | DecemberScalarFieldEnum[]
  }

  /**
   * december findFirstOrThrow
   */
  export type decemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter, which december to fetch.
     */
    where?: decemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decembers to fetch.
     */
    orderBy?: decemberOrderByWithRelationInput | decemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for decembers.
     */
    cursor?: decemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of decembers.
     */
    distinct?: DecemberScalarFieldEnum | DecemberScalarFieldEnum[]
  }

  /**
   * december findMany
   */
  export type decemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter, which decembers to fetch.
     */
    where?: decemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decembers to fetch.
     */
    orderBy?: decemberOrderByWithRelationInput | decemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing decembers.
     */
    cursor?: decemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decembers.
     */
    skip?: number
    distinct?: DecemberScalarFieldEnum | DecemberScalarFieldEnum[]
  }

  /**
   * december create
   */
  export type decemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * The data needed to create a december.
     */
    data: XOR<decemberCreateInput, decemberUncheckedCreateInput>
  }

  /**
   * december createMany
   */
  export type decemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many decembers.
     */
    data: decemberCreateManyInput | decemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * december createManyAndReturn
   */
  export type decemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * The data used to create many decembers.
     */
    data: decemberCreateManyInput | decemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * december update
   */
  export type decemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * The data needed to update a december.
     */
    data: XOR<decemberUpdateInput, decemberUncheckedUpdateInput>
    /**
     * Choose, which december to update.
     */
    where: decemberWhereUniqueInput
  }

  /**
   * december updateMany
   */
  export type decemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update decembers.
     */
    data: XOR<decemberUpdateManyMutationInput, decemberUncheckedUpdateManyInput>
    /**
     * Filter which decembers to update
     */
    where?: decemberWhereInput
    /**
     * Limit how many decembers to update.
     */
    limit?: number
  }

  /**
   * december updateManyAndReturn
   */
  export type decemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * The data used to update decembers.
     */
    data: XOR<decemberUpdateManyMutationInput, decemberUncheckedUpdateManyInput>
    /**
     * Filter which decembers to update
     */
    where?: decemberWhereInput
    /**
     * Limit how many decembers to update.
     */
    limit?: number
  }

  /**
   * december upsert
   */
  export type decemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * The filter to search for the december to update in case it exists.
     */
    where: decemberWhereUniqueInput
    /**
     * In case the december found by the `where` argument doesn't exist, create a new december with this data.
     */
    create: XOR<decemberCreateInput, decemberUncheckedCreateInput>
    /**
     * In case the december was found with the provided `where` argument, update it with this data.
     */
    update: XOR<decemberUpdateInput, decemberUncheckedUpdateInput>
  }

  /**
   * december delete
   */
  export type decemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
    /**
     * Filter which december to delete.
     */
    where: decemberWhereUniqueInput
  }

  /**
   * december deleteMany
   */
  export type decemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which decembers to delete
     */
    where?: decemberWhereInput
    /**
     * Limit how many decembers to delete.
     */
    limit?: number
  }

  /**
   * december without action
   */
  export type decemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the december
     */
    select?: decemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the december
     */
    omit?: decemberOmit<ExtArgs> | null
  }


  /**
   * Model people2
   */

  export type AggregatePeople2 = {
    _count: People2CountAggregateOutputType | null
    _min: People2MinAggregateOutputType | null
    _max: People2MaxAggregateOutputType | null
  }

  export type People2MinAggregateOutputType = {
    groupmeid: string | null
    name: string | null
    username: string | null
    pickorder: string | null
    totalpoints: string | null
    admin: boolean | null
  }

  export type People2MaxAggregateOutputType = {
    groupmeid: string | null
    name: string | null
    username: string | null
    pickorder: string | null
    totalpoints: string | null
    admin: boolean | null
  }

  export type People2CountAggregateOutputType = {
    groupmeid: number
    name: number
    username: number
    pickorder: number
    totalpoints: number
    admin: number
    _all: number
  }


  export type People2MinAggregateInputType = {
    groupmeid?: true
    name?: true
    username?: true
    pickorder?: true
    totalpoints?: true
    admin?: true
  }

  export type People2MaxAggregateInputType = {
    groupmeid?: true
    name?: true
    username?: true
    pickorder?: true
    totalpoints?: true
    admin?: true
  }

  export type People2CountAggregateInputType = {
    groupmeid?: true
    name?: true
    username?: true
    pickorder?: true
    totalpoints?: true
    admin?: true
    _all?: true
  }

  export type People2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people2 to aggregate.
     */
    where?: people2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people2s to fetch.
     */
    orderBy?: people2OrderByWithRelationInput | people2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: people2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people2s
    **/
    _count?: true | People2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: People2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: People2MaxAggregateInputType
  }

  export type GetPeople2AggregateType<T extends People2AggregateArgs> = {
        [P in keyof T & keyof AggregatePeople2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeople2[P]>
      : GetScalarType<T[P], AggregatePeople2[P]>
  }




  export type people2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: people2WhereInput
    orderBy?: people2OrderByWithAggregationInput | people2OrderByWithAggregationInput[]
    by: People2ScalarFieldEnum[] | People2ScalarFieldEnum
    having?: people2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: People2CountAggregateInputType | true
    _min?: People2MinAggregateInputType
    _max?: People2MaxAggregateInputType
  }

  export type People2GroupByOutputType = {
    groupmeid: string
    name: string
    username: string
    pickorder: string
    totalpoints: string
    admin: boolean
    _count: People2CountAggregateOutputType | null
    _min: People2MinAggregateOutputType | null
    _max: People2MaxAggregateOutputType | null
  }

  type GetPeople2GroupByPayload<T extends people2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<People2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof People2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], People2GroupByOutputType[P]>
            : GetScalarType<T[P], People2GroupByOutputType[P]>
        }
      >
    >


  export type people2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupmeid?: boolean
    name?: boolean
    username?: boolean
    pickorder?: boolean
    totalpoints?: boolean
    admin?: boolean
  }, ExtArgs["result"]["people2"]>

  export type people2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupmeid?: boolean
    name?: boolean
    username?: boolean
    pickorder?: boolean
    totalpoints?: boolean
    admin?: boolean
  }, ExtArgs["result"]["people2"]>

  export type people2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupmeid?: boolean
    name?: boolean
    username?: boolean
    pickorder?: boolean
    totalpoints?: boolean
    admin?: boolean
  }, ExtArgs["result"]["people2"]>

  export type people2SelectScalar = {
    groupmeid?: boolean
    name?: boolean
    username?: boolean
    pickorder?: boolean
    totalpoints?: boolean
    admin?: boolean
  }

  export type people2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupmeid" | "name" | "username" | "pickorder" | "totalpoints" | "admin", ExtArgs["result"]["people2"]>

  export type $people2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "people2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      groupmeid: string
      name: string
      username: string
      pickorder: string
      totalpoints: string
      admin: boolean
    }, ExtArgs["result"]["people2"]>
    composites: {}
  }

  type people2GetPayload<S extends boolean | null | undefined | people2DefaultArgs> = $Result.GetResult<Prisma.$people2Payload, S>

  type people2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<people2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: People2CountAggregateInputType | true
    }

  export interface people2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['people2'], meta: { name: 'people2' } }
    /**
     * Find zero or one People2 that matches the filter.
     * @param {people2FindUniqueArgs} args - Arguments to find a People2
     * @example
     * // Get one People2
     * const people2 = await prisma.people2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends people2FindUniqueArgs>(args: SelectSubset<T, people2FindUniqueArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one People2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {people2FindUniqueOrThrowArgs} args - Arguments to find a People2
     * @example
     * // Get one People2
     * const people2 = await prisma.people2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends people2FindUniqueOrThrowArgs>(args: SelectSubset<T, people2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first People2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2FindFirstArgs} args - Arguments to find a People2
     * @example
     * // Get one People2
     * const people2 = await prisma.people2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends people2FindFirstArgs>(args?: SelectSubset<T, people2FindFirstArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first People2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2FindFirstOrThrowArgs} args - Arguments to find a People2
     * @example
     * // Get one People2
     * const people2 = await prisma.people2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends people2FindFirstOrThrowArgs>(args?: SelectSubset<T, people2FindFirstOrThrowArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People2s
     * const people2s = await prisma.people2.findMany()
     * 
     * // Get first 10 People2s
     * const people2s = await prisma.people2.findMany({ take: 10 })
     * 
     * // Only select the `groupmeid`
     * const people2WithGroupmeidOnly = await prisma.people2.findMany({ select: { groupmeid: true } })
     * 
     */
    findMany<T extends people2FindManyArgs>(args?: SelectSubset<T, people2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a People2.
     * @param {people2CreateArgs} args - Arguments to create a People2.
     * @example
     * // Create one People2
     * const People2 = await prisma.people2.create({
     *   data: {
     *     // ... data to create a People2
     *   }
     * })
     * 
     */
    create<T extends people2CreateArgs>(args: SelectSubset<T, people2CreateArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People2s.
     * @param {people2CreateManyArgs} args - Arguments to create many People2s.
     * @example
     * // Create many People2s
     * const people2 = await prisma.people2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends people2CreateManyArgs>(args?: SelectSubset<T, people2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People2s and returns the data saved in the database.
     * @param {people2CreateManyAndReturnArgs} args - Arguments to create many People2s.
     * @example
     * // Create many People2s
     * const people2 = await prisma.people2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People2s and only return the `groupmeid`
     * const people2WithGroupmeidOnly = await prisma.people2.createManyAndReturn({
     *   select: { groupmeid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends people2CreateManyAndReturnArgs>(args?: SelectSubset<T, people2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a People2.
     * @param {people2DeleteArgs} args - Arguments to delete one People2.
     * @example
     * // Delete one People2
     * const People2 = await prisma.people2.delete({
     *   where: {
     *     // ... filter to delete one People2
     *   }
     * })
     * 
     */
    delete<T extends people2DeleteArgs>(args: SelectSubset<T, people2DeleteArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one People2.
     * @param {people2UpdateArgs} args - Arguments to update one People2.
     * @example
     * // Update one People2
     * const people2 = await prisma.people2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends people2UpdateArgs>(args: SelectSubset<T, people2UpdateArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People2s.
     * @param {people2DeleteManyArgs} args - Arguments to filter People2s to delete.
     * @example
     * // Delete a few People2s
     * const { count } = await prisma.people2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends people2DeleteManyArgs>(args?: SelectSubset<T, people2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People2s
     * const people2 = await prisma.people2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends people2UpdateManyArgs>(args: SelectSubset<T, people2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People2s and returns the data updated in the database.
     * @param {people2UpdateManyAndReturnArgs} args - Arguments to update many People2s.
     * @example
     * // Update many People2s
     * const people2 = await prisma.people2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People2s and only return the `groupmeid`
     * const people2WithGroupmeidOnly = await prisma.people2.updateManyAndReturn({
     *   select: { groupmeid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends people2UpdateManyAndReturnArgs>(args: SelectSubset<T, people2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one People2.
     * @param {people2UpsertArgs} args - Arguments to update or create a People2.
     * @example
     * // Update or create a People2
     * const people2 = await prisma.people2.upsert({
     *   create: {
     *     // ... data to create a People2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the People2 we want to update
     *   }
     * })
     */
    upsert<T extends people2UpsertArgs>(args: SelectSubset<T, people2UpsertArgs<ExtArgs>>): Prisma__people2Client<$Result.GetResult<Prisma.$people2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2CountArgs} args - Arguments to filter People2s to count.
     * @example
     * // Count the number of People2s
     * const count = await prisma.people2.count({
     *   where: {
     *     // ... the filter for the People2s we want to count
     *   }
     * })
    **/
    count<T extends people2CountArgs>(
      args?: Subset<T, people2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], People2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a People2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {People2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends People2AggregateArgs>(args: Subset<T, People2AggregateArgs>): Prisma.PrismaPromise<GetPeople2AggregateType<T>>

    /**
     * Group by People2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {people2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends people2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: people2GroupByArgs['orderBy'] }
        : { orderBy?: people2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, people2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeople2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the people2 model
   */
  readonly fields: people2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for people2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__people2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the people2 model
   */
  interface people2FieldRefs {
    readonly groupmeid: FieldRef<"people2", 'String'>
    readonly name: FieldRef<"people2", 'String'>
    readonly username: FieldRef<"people2", 'String'>
    readonly pickorder: FieldRef<"people2", 'String'>
    readonly totalpoints: FieldRef<"people2", 'String'>
    readonly admin: FieldRef<"people2", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * people2 findUnique
   */
  export type people2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter, which people2 to fetch.
     */
    where: people2WhereUniqueInput
  }

  /**
   * people2 findUniqueOrThrow
   */
  export type people2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter, which people2 to fetch.
     */
    where: people2WhereUniqueInput
  }

  /**
   * people2 findFirst
   */
  export type people2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter, which people2 to fetch.
     */
    where?: people2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people2s to fetch.
     */
    orderBy?: people2OrderByWithRelationInput | people2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people2s.
     */
    cursor?: people2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people2s.
     */
    distinct?: People2ScalarFieldEnum | People2ScalarFieldEnum[]
  }

  /**
   * people2 findFirstOrThrow
   */
  export type people2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter, which people2 to fetch.
     */
    where?: people2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people2s to fetch.
     */
    orderBy?: people2OrderByWithRelationInput | people2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people2s.
     */
    cursor?: people2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people2s.
     */
    distinct?: People2ScalarFieldEnum | People2ScalarFieldEnum[]
  }

  /**
   * people2 findMany
   */
  export type people2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter, which people2s to fetch.
     */
    where?: people2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people2s to fetch.
     */
    orderBy?: people2OrderByWithRelationInput | people2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people2s.
     */
    cursor?: people2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people2s.
     */
    skip?: number
    distinct?: People2ScalarFieldEnum | People2ScalarFieldEnum[]
  }

  /**
   * people2 create
   */
  export type people2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * The data needed to create a people2.
     */
    data: XOR<people2CreateInput, people2UncheckedCreateInput>
  }

  /**
   * people2 createMany
   */
  export type people2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people2s.
     */
    data: people2CreateManyInput | people2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * people2 createManyAndReturn
   */
  export type people2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * The data used to create many people2s.
     */
    data: people2CreateManyInput | people2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * people2 update
   */
  export type people2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * The data needed to update a people2.
     */
    data: XOR<people2UpdateInput, people2UncheckedUpdateInput>
    /**
     * Choose, which people2 to update.
     */
    where: people2WhereUniqueInput
  }

  /**
   * people2 updateMany
   */
  export type people2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people2s.
     */
    data: XOR<people2UpdateManyMutationInput, people2UncheckedUpdateManyInput>
    /**
     * Filter which people2s to update
     */
    where?: people2WhereInput
    /**
     * Limit how many people2s to update.
     */
    limit?: number
  }

  /**
   * people2 updateManyAndReturn
   */
  export type people2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * The data used to update people2s.
     */
    data: XOR<people2UpdateManyMutationInput, people2UncheckedUpdateManyInput>
    /**
     * Filter which people2s to update
     */
    where?: people2WhereInput
    /**
     * Limit how many people2s to update.
     */
    limit?: number
  }

  /**
   * people2 upsert
   */
  export type people2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * The filter to search for the people2 to update in case it exists.
     */
    where: people2WhereUniqueInput
    /**
     * In case the people2 found by the `where` argument doesn't exist, create a new people2 with this data.
     */
    create: XOR<people2CreateInput, people2UncheckedCreateInput>
    /**
     * In case the people2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<people2UpdateInput, people2UncheckedUpdateInput>
  }

  /**
   * people2 delete
   */
  export type people2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
    /**
     * Filter which people2 to delete.
     */
    where: people2WhereUniqueInput
  }

  /**
   * people2 deleteMany
   */
  export type people2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people2s to delete
     */
    where?: people2WhereInput
    /**
     * Limit how many people2s to delete.
     */
    limit?: number
  }

  /**
   * people2 without action
   */
  export type people2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the people2
     */
    select?: people2Select<ExtArgs> | null
    /**
     * Omit specific fields from the people2
     */
    omit?: people2Omit<ExtArgs> | null
  }


  /**
   * Model startend2
   */

  export type AggregateStartend2 = {
    _count: Startend2CountAggregateOutputType | null
    _avg: Startend2AvgAggregateOutputType | null
    _sum: Startend2SumAggregateOutputType | null
    _min: Startend2MinAggregateOutputType | null
    _max: Startend2MaxAggregateOutputType | null
  }

  export type Startend2AvgAggregateOutputType = {
    id: number | null
  }

  export type Startend2SumAggregateOutputType = {
    id: number | null
  }

  export type Startend2MinAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type Startend2MaxAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type Startend2CountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type Startend2AvgAggregateInputType = {
    id?: true
  }

  export type Startend2SumAggregateInputType = {
    id?: true
  }

  export type Startend2MinAggregateInputType = {
    id?: true
    date?: true
  }

  export type Startend2MaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type Startend2CountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type Startend2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startend2 to aggregate.
     */
    where?: startend2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startend2s to fetch.
     */
    orderBy?: startend2OrderByWithRelationInput | startend2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: startend2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startend2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startend2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned startend2s
    **/
    _count?: true | Startend2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Startend2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Startend2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Startend2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Startend2MaxAggregateInputType
  }

  export type GetStartend2AggregateType<T extends Startend2AggregateArgs> = {
        [P in keyof T & keyof AggregateStartend2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartend2[P]>
      : GetScalarType<T[P], AggregateStartend2[P]>
  }




  export type startend2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: startend2WhereInput
    orderBy?: startend2OrderByWithAggregationInput | startend2OrderByWithAggregationInput[]
    by: Startend2ScalarFieldEnum[] | Startend2ScalarFieldEnum
    having?: startend2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Startend2CountAggregateInputType | true
    _avg?: Startend2AvgAggregateInputType
    _sum?: Startend2SumAggregateInputType
    _min?: Startend2MinAggregateInputType
    _max?: Startend2MaxAggregateInputType
  }

  export type Startend2GroupByOutputType = {
    id: number
    date: Date
    _count: Startend2CountAggregateOutputType | null
    _avg: Startend2AvgAggregateOutputType | null
    _sum: Startend2SumAggregateOutputType | null
    _min: Startend2MinAggregateOutputType | null
    _max: Startend2MaxAggregateOutputType | null
  }

  type GetStartend2GroupByPayload<T extends startend2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Startend2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Startend2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Startend2GroupByOutputType[P]>
            : GetScalarType<T[P], Startend2GroupByOutputType[P]>
        }
      >
    >


  export type startend2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
  }, ExtArgs["result"]["startend2"]>

  export type startend2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
  }, ExtArgs["result"]["startend2"]>

  export type startend2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
  }, ExtArgs["result"]["startend2"]>

  export type startend2SelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type startend2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date", ExtArgs["result"]["startend2"]>

  export type $startend2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "startend2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
    }, ExtArgs["result"]["startend2"]>
    composites: {}
  }

  type startend2GetPayload<S extends boolean | null | undefined | startend2DefaultArgs> = $Result.GetResult<Prisma.$startend2Payload, S>

  type startend2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<startend2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Startend2CountAggregateInputType | true
    }

  export interface startend2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['startend2'], meta: { name: 'startend2' } }
    /**
     * Find zero or one Startend2 that matches the filter.
     * @param {startend2FindUniqueArgs} args - Arguments to find a Startend2
     * @example
     * // Get one Startend2
     * const startend2 = await prisma.startend2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends startend2FindUniqueArgs>(args: SelectSubset<T, startend2FindUniqueArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Startend2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {startend2FindUniqueOrThrowArgs} args - Arguments to find a Startend2
     * @example
     * // Get one Startend2
     * const startend2 = await prisma.startend2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends startend2FindUniqueOrThrowArgs>(args: SelectSubset<T, startend2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startend2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2FindFirstArgs} args - Arguments to find a Startend2
     * @example
     * // Get one Startend2
     * const startend2 = await prisma.startend2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends startend2FindFirstArgs>(args?: SelectSubset<T, startend2FindFirstArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startend2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2FindFirstOrThrowArgs} args - Arguments to find a Startend2
     * @example
     * // Get one Startend2
     * const startend2 = await prisma.startend2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends startend2FindFirstOrThrowArgs>(args?: SelectSubset<T, startend2FindFirstOrThrowArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Startend2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startend2s
     * const startend2s = await prisma.startend2.findMany()
     * 
     * // Get first 10 Startend2s
     * const startend2s = await prisma.startend2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const startend2WithIdOnly = await prisma.startend2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends startend2FindManyArgs>(args?: SelectSubset<T, startend2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Startend2.
     * @param {startend2CreateArgs} args - Arguments to create a Startend2.
     * @example
     * // Create one Startend2
     * const Startend2 = await prisma.startend2.create({
     *   data: {
     *     // ... data to create a Startend2
     *   }
     * })
     * 
     */
    create<T extends startend2CreateArgs>(args: SelectSubset<T, startend2CreateArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Startend2s.
     * @param {startend2CreateManyArgs} args - Arguments to create many Startend2s.
     * @example
     * // Create many Startend2s
     * const startend2 = await prisma.startend2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends startend2CreateManyArgs>(args?: SelectSubset<T, startend2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Startend2s and returns the data saved in the database.
     * @param {startend2CreateManyAndReturnArgs} args - Arguments to create many Startend2s.
     * @example
     * // Create many Startend2s
     * const startend2 = await prisma.startend2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Startend2s and only return the `id`
     * const startend2WithIdOnly = await prisma.startend2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends startend2CreateManyAndReturnArgs>(args?: SelectSubset<T, startend2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Startend2.
     * @param {startend2DeleteArgs} args - Arguments to delete one Startend2.
     * @example
     * // Delete one Startend2
     * const Startend2 = await prisma.startend2.delete({
     *   where: {
     *     // ... filter to delete one Startend2
     *   }
     * })
     * 
     */
    delete<T extends startend2DeleteArgs>(args: SelectSubset<T, startend2DeleteArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Startend2.
     * @param {startend2UpdateArgs} args - Arguments to update one Startend2.
     * @example
     * // Update one Startend2
     * const startend2 = await prisma.startend2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends startend2UpdateArgs>(args: SelectSubset<T, startend2UpdateArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Startend2s.
     * @param {startend2DeleteManyArgs} args - Arguments to filter Startend2s to delete.
     * @example
     * // Delete a few Startend2s
     * const { count } = await prisma.startend2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends startend2DeleteManyArgs>(args?: SelectSubset<T, startend2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startend2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startend2s
     * const startend2 = await prisma.startend2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends startend2UpdateManyArgs>(args: SelectSubset<T, startend2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startend2s and returns the data updated in the database.
     * @param {startend2UpdateManyAndReturnArgs} args - Arguments to update many Startend2s.
     * @example
     * // Update many Startend2s
     * const startend2 = await prisma.startend2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Startend2s and only return the `id`
     * const startend2WithIdOnly = await prisma.startend2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends startend2UpdateManyAndReturnArgs>(args: SelectSubset<T, startend2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Startend2.
     * @param {startend2UpsertArgs} args - Arguments to update or create a Startend2.
     * @example
     * // Update or create a Startend2
     * const startend2 = await prisma.startend2.upsert({
     *   create: {
     *     // ... data to create a Startend2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startend2 we want to update
     *   }
     * })
     */
    upsert<T extends startend2UpsertArgs>(args: SelectSubset<T, startend2UpsertArgs<ExtArgs>>): Prisma__startend2Client<$Result.GetResult<Prisma.$startend2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Startend2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2CountArgs} args - Arguments to filter Startend2s to count.
     * @example
     * // Count the number of Startend2s
     * const count = await prisma.startend2.count({
     *   where: {
     *     // ... the filter for the Startend2s we want to count
     *   }
     * })
    **/
    count<T extends startend2CountArgs>(
      args?: Subset<T, startend2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Startend2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Startend2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Startend2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Startend2AggregateArgs>(args: Subset<T, Startend2AggregateArgs>): Prisma.PrismaPromise<GetStartend2AggregateType<T>>

    /**
     * Group by Startend2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startend2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends startend2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: startend2GroupByArgs['orderBy'] }
        : { orderBy?: startend2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, startend2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartend2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the startend2 model
   */
  readonly fields: startend2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for startend2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__startend2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the startend2 model
   */
  interface startend2FieldRefs {
    readonly id: FieldRef<"startend2", 'Int'>
    readonly date: FieldRef<"startend2", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * startend2 findUnique
   */
  export type startend2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter, which startend2 to fetch.
     */
    where: startend2WhereUniqueInput
  }

  /**
   * startend2 findUniqueOrThrow
   */
  export type startend2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter, which startend2 to fetch.
     */
    where: startend2WhereUniqueInput
  }

  /**
   * startend2 findFirst
   */
  export type startend2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter, which startend2 to fetch.
     */
    where?: startend2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startend2s to fetch.
     */
    orderBy?: startend2OrderByWithRelationInput | startend2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for startend2s.
     */
    cursor?: startend2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startend2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startend2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of startend2s.
     */
    distinct?: Startend2ScalarFieldEnum | Startend2ScalarFieldEnum[]
  }

  /**
   * startend2 findFirstOrThrow
   */
  export type startend2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter, which startend2 to fetch.
     */
    where?: startend2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startend2s to fetch.
     */
    orderBy?: startend2OrderByWithRelationInput | startend2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for startend2s.
     */
    cursor?: startend2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startend2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startend2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of startend2s.
     */
    distinct?: Startend2ScalarFieldEnum | Startend2ScalarFieldEnum[]
  }

  /**
   * startend2 findMany
   */
  export type startend2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter, which startend2s to fetch.
     */
    where?: startend2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startend2s to fetch.
     */
    orderBy?: startend2OrderByWithRelationInput | startend2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing startend2s.
     */
    cursor?: startend2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startend2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startend2s.
     */
    skip?: number
    distinct?: Startend2ScalarFieldEnum | Startend2ScalarFieldEnum[]
  }

  /**
   * startend2 create
   */
  export type startend2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * The data needed to create a startend2.
     */
    data: XOR<startend2CreateInput, startend2UncheckedCreateInput>
  }

  /**
   * startend2 createMany
   */
  export type startend2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many startend2s.
     */
    data: startend2CreateManyInput | startend2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * startend2 createManyAndReturn
   */
  export type startend2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * The data used to create many startend2s.
     */
    data: startend2CreateManyInput | startend2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * startend2 update
   */
  export type startend2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * The data needed to update a startend2.
     */
    data: XOR<startend2UpdateInput, startend2UncheckedUpdateInput>
    /**
     * Choose, which startend2 to update.
     */
    where: startend2WhereUniqueInput
  }

  /**
   * startend2 updateMany
   */
  export type startend2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update startend2s.
     */
    data: XOR<startend2UpdateManyMutationInput, startend2UncheckedUpdateManyInput>
    /**
     * Filter which startend2s to update
     */
    where?: startend2WhereInput
    /**
     * Limit how many startend2s to update.
     */
    limit?: number
  }

  /**
   * startend2 updateManyAndReturn
   */
  export type startend2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * The data used to update startend2s.
     */
    data: XOR<startend2UpdateManyMutationInput, startend2UncheckedUpdateManyInput>
    /**
     * Filter which startend2s to update
     */
    where?: startend2WhereInput
    /**
     * Limit how many startend2s to update.
     */
    limit?: number
  }

  /**
   * startend2 upsert
   */
  export type startend2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * The filter to search for the startend2 to update in case it exists.
     */
    where: startend2WhereUniqueInput
    /**
     * In case the startend2 found by the `where` argument doesn't exist, create a new startend2 with this data.
     */
    create: XOR<startend2CreateInput, startend2UncheckedCreateInput>
    /**
     * In case the startend2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<startend2UpdateInput, startend2UncheckedUpdateInput>
  }

  /**
   * startend2 delete
   */
  export type startend2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
    /**
     * Filter which startend2 to delete.
     */
    where: startend2WhereUniqueInput
  }

  /**
   * startend2 deleteMany
   */
  export type startend2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startend2s to delete
     */
    where?: startend2WhereInput
    /**
     * Limit how many startend2s to delete.
     */
    limit?: number
  }

  /**
   * startend2 without action
   */
  export type startend2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startend2
     */
    select?: startend2Select<ExtArgs> | null
    /**
     * Omit specific fields from the startend2
     */
    omit?: startend2Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const JanuaryScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type JanuaryScalarFieldEnum = (typeof JanuaryScalarFieldEnum)[keyof typeof JanuaryScalarFieldEnum]


  export const FebruaryScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type FebruaryScalarFieldEnum = (typeof FebruaryScalarFieldEnum)[keyof typeof FebruaryScalarFieldEnum]


  export const MarchScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type MarchScalarFieldEnum = (typeof MarchScalarFieldEnum)[keyof typeof MarchScalarFieldEnum]


  export const AprilScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type AprilScalarFieldEnum = (typeof AprilScalarFieldEnum)[keyof typeof AprilScalarFieldEnum]


  export const MayScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type MayScalarFieldEnum = (typeof MayScalarFieldEnum)[keyof typeof MayScalarFieldEnum]


  export const JuneScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type JuneScalarFieldEnum = (typeof JuneScalarFieldEnum)[keyof typeof JuneScalarFieldEnum]


  export const JulyScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type JulyScalarFieldEnum = (typeof JulyScalarFieldEnum)[keyof typeof JulyScalarFieldEnum]


  export const AugustScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type AugustScalarFieldEnum = (typeof AugustScalarFieldEnum)[keyof typeof AugustScalarFieldEnum]


  export const SeptemberScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type SeptemberScalarFieldEnum = (typeof SeptemberScalarFieldEnum)[keyof typeof SeptemberScalarFieldEnum]


  export const OctoberScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type OctoberScalarFieldEnum = (typeof OctoberScalarFieldEnum)[keyof typeof OctoberScalarFieldEnum]


  export const NovemberScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type NovemberScalarFieldEnum = (typeof NovemberScalarFieldEnum)[keyof typeof NovemberScalarFieldEnum]


  export const DecemberScalarFieldEnum: {
    id: 'id',
    year: 'year',
    day: 'day',
    owner: 'owner',
    type: 'type'
  };

  export type DecemberScalarFieldEnum = (typeof DecemberScalarFieldEnum)[keyof typeof DecemberScalarFieldEnum]


  export const People2ScalarFieldEnum: {
    groupmeid: 'groupmeid',
    name: 'name',
    username: 'username',
    pickorder: 'pickorder',
    totalpoints: 'totalpoints',
    admin: 'admin'
  };

  export type People2ScalarFieldEnum = (typeof People2ScalarFieldEnum)[keyof typeof People2ScalarFieldEnum]


  export const Startend2ScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type Startend2ScalarFieldEnum = (typeof Startend2ScalarFieldEnum)[keyof typeof Startend2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }, "id">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
  }

  export type januaryWhereInput = {
    AND?: januaryWhereInput | januaryWhereInput[]
    OR?: januaryWhereInput[]
    NOT?: januaryWhereInput | januaryWhereInput[]
    id?: StringFilter<"january"> | string
    year?: StringFilter<"january"> | string
    day?: StringFilter<"january"> | string
    owner?: StringFilter<"january"> | string
    type?: StringFilter<"january"> | string
  }

  export type januaryOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type januaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: januaryWhereInput | januaryWhereInput[]
    OR?: januaryWhereInput[]
    NOT?: januaryWhereInput | januaryWhereInput[]
    year?: StringFilter<"january"> | string
    day?: StringFilter<"january"> | string
    owner?: StringFilter<"january"> | string
    type?: StringFilter<"january"> | string
  }, "id">

  export type januaryOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: januaryCountOrderByAggregateInput
    _max?: januaryMaxOrderByAggregateInput
    _min?: januaryMinOrderByAggregateInput
  }

  export type januaryScalarWhereWithAggregatesInput = {
    AND?: januaryScalarWhereWithAggregatesInput | januaryScalarWhereWithAggregatesInput[]
    OR?: januaryScalarWhereWithAggregatesInput[]
    NOT?: januaryScalarWhereWithAggregatesInput | januaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"january"> | string
    year?: StringWithAggregatesFilter<"january"> | string
    day?: StringWithAggregatesFilter<"january"> | string
    owner?: StringWithAggregatesFilter<"january"> | string
    type?: StringWithAggregatesFilter<"january"> | string
  }

  export type februaryWhereInput = {
    AND?: februaryWhereInput | februaryWhereInput[]
    OR?: februaryWhereInput[]
    NOT?: februaryWhereInput | februaryWhereInput[]
    id?: StringFilter<"february"> | string
    year?: StringFilter<"february"> | string
    day?: StringFilter<"february"> | string
    owner?: StringFilter<"february"> | string
    type?: StringFilter<"february"> | string
  }

  export type februaryOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type februaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: februaryWhereInput | februaryWhereInput[]
    OR?: februaryWhereInput[]
    NOT?: februaryWhereInput | februaryWhereInput[]
    year?: StringFilter<"february"> | string
    day?: StringFilter<"february"> | string
    owner?: StringFilter<"february"> | string
    type?: StringFilter<"february"> | string
  }, "id">

  export type februaryOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: februaryCountOrderByAggregateInput
    _max?: februaryMaxOrderByAggregateInput
    _min?: februaryMinOrderByAggregateInput
  }

  export type februaryScalarWhereWithAggregatesInput = {
    AND?: februaryScalarWhereWithAggregatesInput | februaryScalarWhereWithAggregatesInput[]
    OR?: februaryScalarWhereWithAggregatesInput[]
    NOT?: februaryScalarWhereWithAggregatesInput | februaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"february"> | string
    year?: StringWithAggregatesFilter<"february"> | string
    day?: StringWithAggregatesFilter<"february"> | string
    owner?: StringWithAggregatesFilter<"february"> | string
    type?: StringWithAggregatesFilter<"february"> | string
  }

  export type marchWhereInput = {
    AND?: marchWhereInput | marchWhereInput[]
    OR?: marchWhereInput[]
    NOT?: marchWhereInput | marchWhereInput[]
    id?: StringFilter<"march"> | string
    year?: StringFilter<"march"> | string
    day?: StringFilter<"march"> | string
    owner?: StringFilter<"march"> | string
    type?: StringFilter<"march"> | string
  }

  export type marchOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type marchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: marchWhereInput | marchWhereInput[]
    OR?: marchWhereInput[]
    NOT?: marchWhereInput | marchWhereInput[]
    year?: StringFilter<"march"> | string
    day?: StringFilter<"march"> | string
    owner?: StringFilter<"march"> | string
    type?: StringFilter<"march"> | string
  }, "id">

  export type marchOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: marchCountOrderByAggregateInput
    _max?: marchMaxOrderByAggregateInput
    _min?: marchMinOrderByAggregateInput
  }

  export type marchScalarWhereWithAggregatesInput = {
    AND?: marchScalarWhereWithAggregatesInput | marchScalarWhereWithAggregatesInput[]
    OR?: marchScalarWhereWithAggregatesInput[]
    NOT?: marchScalarWhereWithAggregatesInput | marchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"march"> | string
    year?: StringWithAggregatesFilter<"march"> | string
    day?: StringWithAggregatesFilter<"march"> | string
    owner?: StringWithAggregatesFilter<"march"> | string
    type?: StringWithAggregatesFilter<"march"> | string
  }

  export type aprilWhereInput = {
    AND?: aprilWhereInput | aprilWhereInput[]
    OR?: aprilWhereInput[]
    NOT?: aprilWhereInput | aprilWhereInput[]
    id?: StringFilter<"april"> | string
    year?: StringFilter<"april"> | string
    day?: StringFilter<"april"> | string
    owner?: StringFilter<"april"> | string
    type?: StringFilter<"april"> | string
  }

  export type aprilOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type aprilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: aprilWhereInput | aprilWhereInput[]
    OR?: aprilWhereInput[]
    NOT?: aprilWhereInput | aprilWhereInput[]
    year?: StringFilter<"april"> | string
    day?: StringFilter<"april"> | string
    owner?: StringFilter<"april"> | string
    type?: StringFilter<"april"> | string
  }, "id">

  export type aprilOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: aprilCountOrderByAggregateInput
    _max?: aprilMaxOrderByAggregateInput
    _min?: aprilMinOrderByAggregateInput
  }

  export type aprilScalarWhereWithAggregatesInput = {
    AND?: aprilScalarWhereWithAggregatesInput | aprilScalarWhereWithAggregatesInput[]
    OR?: aprilScalarWhereWithAggregatesInput[]
    NOT?: aprilScalarWhereWithAggregatesInput | aprilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"april"> | string
    year?: StringWithAggregatesFilter<"april"> | string
    day?: StringWithAggregatesFilter<"april"> | string
    owner?: StringWithAggregatesFilter<"april"> | string
    type?: StringWithAggregatesFilter<"april"> | string
  }

  export type mayWhereInput = {
    AND?: mayWhereInput | mayWhereInput[]
    OR?: mayWhereInput[]
    NOT?: mayWhereInput | mayWhereInput[]
    id?: StringFilter<"may"> | string
    year?: StringFilter<"may"> | string
    day?: StringFilter<"may"> | string
    owner?: StringFilter<"may"> | string
    type?: StringFilter<"may"> | string
  }

  export type mayOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type mayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mayWhereInput | mayWhereInput[]
    OR?: mayWhereInput[]
    NOT?: mayWhereInput | mayWhereInput[]
    year?: StringFilter<"may"> | string
    day?: StringFilter<"may"> | string
    owner?: StringFilter<"may"> | string
    type?: StringFilter<"may"> | string
  }, "id">

  export type mayOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: mayCountOrderByAggregateInput
    _max?: mayMaxOrderByAggregateInput
    _min?: mayMinOrderByAggregateInput
  }

  export type mayScalarWhereWithAggregatesInput = {
    AND?: mayScalarWhereWithAggregatesInput | mayScalarWhereWithAggregatesInput[]
    OR?: mayScalarWhereWithAggregatesInput[]
    NOT?: mayScalarWhereWithAggregatesInput | mayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"may"> | string
    year?: StringWithAggregatesFilter<"may"> | string
    day?: StringWithAggregatesFilter<"may"> | string
    owner?: StringWithAggregatesFilter<"may"> | string
    type?: StringWithAggregatesFilter<"may"> | string
  }

  export type juneWhereInput = {
    AND?: juneWhereInput | juneWhereInput[]
    OR?: juneWhereInput[]
    NOT?: juneWhereInput | juneWhereInput[]
    id?: StringFilter<"june"> | string
    year?: StringFilter<"june"> | string
    day?: StringFilter<"june"> | string
    owner?: StringFilter<"june"> | string
    type?: StringFilter<"june"> | string
  }

  export type juneOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type juneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: juneWhereInput | juneWhereInput[]
    OR?: juneWhereInput[]
    NOT?: juneWhereInput | juneWhereInput[]
    year?: StringFilter<"june"> | string
    day?: StringFilter<"june"> | string
    owner?: StringFilter<"june"> | string
    type?: StringFilter<"june"> | string
  }, "id">

  export type juneOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: juneCountOrderByAggregateInput
    _max?: juneMaxOrderByAggregateInput
    _min?: juneMinOrderByAggregateInput
  }

  export type juneScalarWhereWithAggregatesInput = {
    AND?: juneScalarWhereWithAggregatesInput | juneScalarWhereWithAggregatesInput[]
    OR?: juneScalarWhereWithAggregatesInput[]
    NOT?: juneScalarWhereWithAggregatesInput | juneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"june"> | string
    year?: StringWithAggregatesFilter<"june"> | string
    day?: StringWithAggregatesFilter<"june"> | string
    owner?: StringWithAggregatesFilter<"june"> | string
    type?: StringWithAggregatesFilter<"june"> | string
  }

  export type julyWhereInput = {
    AND?: julyWhereInput | julyWhereInput[]
    OR?: julyWhereInput[]
    NOT?: julyWhereInput | julyWhereInput[]
    id?: StringFilter<"july"> | string
    year?: StringFilter<"july"> | string
    day?: StringFilter<"july"> | string
    owner?: StringFilter<"july"> | string
    type?: StringFilter<"july"> | string
  }

  export type julyOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type julyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: julyWhereInput | julyWhereInput[]
    OR?: julyWhereInput[]
    NOT?: julyWhereInput | julyWhereInput[]
    year?: StringFilter<"july"> | string
    day?: StringFilter<"july"> | string
    owner?: StringFilter<"july"> | string
    type?: StringFilter<"july"> | string
  }, "id">

  export type julyOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: julyCountOrderByAggregateInput
    _max?: julyMaxOrderByAggregateInput
    _min?: julyMinOrderByAggregateInput
  }

  export type julyScalarWhereWithAggregatesInput = {
    AND?: julyScalarWhereWithAggregatesInput | julyScalarWhereWithAggregatesInput[]
    OR?: julyScalarWhereWithAggregatesInput[]
    NOT?: julyScalarWhereWithAggregatesInput | julyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"july"> | string
    year?: StringWithAggregatesFilter<"july"> | string
    day?: StringWithAggregatesFilter<"july"> | string
    owner?: StringWithAggregatesFilter<"july"> | string
    type?: StringWithAggregatesFilter<"july"> | string
  }

  export type augustWhereInput = {
    AND?: augustWhereInput | augustWhereInput[]
    OR?: augustWhereInput[]
    NOT?: augustWhereInput | augustWhereInput[]
    id?: StringFilter<"august"> | string
    year?: StringFilter<"august"> | string
    day?: StringFilter<"august"> | string
    owner?: StringFilter<"august"> | string
    type?: StringFilter<"august"> | string
  }

  export type augustOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type augustWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: augustWhereInput | augustWhereInput[]
    OR?: augustWhereInput[]
    NOT?: augustWhereInput | augustWhereInput[]
    year?: StringFilter<"august"> | string
    day?: StringFilter<"august"> | string
    owner?: StringFilter<"august"> | string
    type?: StringFilter<"august"> | string
  }, "id">

  export type augustOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: augustCountOrderByAggregateInput
    _max?: augustMaxOrderByAggregateInput
    _min?: augustMinOrderByAggregateInput
  }

  export type augustScalarWhereWithAggregatesInput = {
    AND?: augustScalarWhereWithAggregatesInput | augustScalarWhereWithAggregatesInput[]
    OR?: augustScalarWhereWithAggregatesInput[]
    NOT?: augustScalarWhereWithAggregatesInput | augustScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"august"> | string
    year?: StringWithAggregatesFilter<"august"> | string
    day?: StringWithAggregatesFilter<"august"> | string
    owner?: StringWithAggregatesFilter<"august"> | string
    type?: StringWithAggregatesFilter<"august"> | string
  }

  export type septemberWhereInput = {
    AND?: septemberWhereInput | septemberWhereInput[]
    OR?: septemberWhereInput[]
    NOT?: septemberWhereInput | septemberWhereInput[]
    id?: StringFilter<"september"> | string
    year?: StringFilter<"september"> | string
    day?: StringFilter<"september"> | string
    owner?: StringFilter<"september"> | string
    type?: StringFilter<"september"> | string
  }

  export type septemberOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type septemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: septemberWhereInput | septemberWhereInput[]
    OR?: septemberWhereInput[]
    NOT?: septemberWhereInput | septemberWhereInput[]
    year?: StringFilter<"september"> | string
    day?: StringFilter<"september"> | string
    owner?: StringFilter<"september"> | string
    type?: StringFilter<"september"> | string
  }, "id">

  export type septemberOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: septemberCountOrderByAggregateInput
    _max?: septemberMaxOrderByAggregateInput
    _min?: septemberMinOrderByAggregateInput
  }

  export type septemberScalarWhereWithAggregatesInput = {
    AND?: septemberScalarWhereWithAggregatesInput | septemberScalarWhereWithAggregatesInput[]
    OR?: septemberScalarWhereWithAggregatesInput[]
    NOT?: septemberScalarWhereWithAggregatesInput | septemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"september"> | string
    year?: StringWithAggregatesFilter<"september"> | string
    day?: StringWithAggregatesFilter<"september"> | string
    owner?: StringWithAggregatesFilter<"september"> | string
    type?: StringWithAggregatesFilter<"september"> | string
  }

  export type octoberWhereInput = {
    AND?: octoberWhereInput | octoberWhereInput[]
    OR?: octoberWhereInput[]
    NOT?: octoberWhereInput | octoberWhereInput[]
    id?: StringFilter<"october"> | string
    year?: StringFilter<"october"> | string
    day?: StringFilter<"october"> | string
    owner?: StringFilter<"october"> | string
    type?: StringFilter<"october"> | string
  }

  export type octoberOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type octoberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: octoberWhereInput | octoberWhereInput[]
    OR?: octoberWhereInput[]
    NOT?: octoberWhereInput | octoberWhereInput[]
    year?: StringFilter<"october"> | string
    day?: StringFilter<"october"> | string
    owner?: StringFilter<"october"> | string
    type?: StringFilter<"october"> | string
  }, "id">

  export type octoberOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: octoberCountOrderByAggregateInput
    _max?: octoberMaxOrderByAggregateInput
    _min?: octoberMinOrderByAggregateInput
  }

  export type octoberScalarWhereWithAggregatesInput = {
    AND?: octoberScalarWhereWithAggregatesInput | octoberScalarWhereWithAggregatesInput[]
    OR?: octoberScalarWhereWithAggregatesInput[]
    NOT?: octoberScalarWhereWithAggregatesInput | octoberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"october"> | string
    year?: StringWithAggregatesFilter<"october"> | string
    day?: StringWithAggregatesFilter<"october"> | string
    owner?: StringWithAggregatesFilter<"october"> | string
    type?: StringWithAggregatesFilter<"october"> | string
  }

  export type novemberWhereInput = {
    AND?: novemberWhereInput | novemberWhereInput[]
    OR?: novemberWhereInput[]
    NOT?: novemberWhereInput | novemberWhereInput[]
    id?: StringFilter<"november"> | string
    year?: StringFilter<"november"> | string
    day?: StringFilter<"november"> | string
    owner?: StringFilter<"november"> | string
    type?: StringFilter<"november"> | string
  }

  export type novemberOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type novemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: novemberWhereInput | novemberWhereInput[]
    OR?: novemberWhereInput[]
    NOT?: novemberWhereInput | novemberWhereInput[]
    year?: StringFilter<"november"> | string
    day?: StringFilter<"november"> | string
    owner?: StringFilter<"november"> | string
    type?: StringFilter<"november"> | string
  }, "id">

  export type novemberOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: novemberCountOrderByAggregateInput
    _max?: novemberMaxOrderByAggregateInput
    _min?: novemberMinOrderByAggregateInput
  }

  export type novemberScalarWhereWithAggregatesInput = {
    AND?: novemberScalarWhereWithAggregatesInput | novemberScalarWhereWithAggregatesInput[]
    OR?: novemberScalarWhereWithAggregatesInput[]
    NOT?: novemberScalarWhereWithAggregatesInput | novemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"november"> | string
    year?: StringWithAggregatesFilter<"november"> | string
    day?: StringWithAggregatesFilter<"november"> | string
    owner?: StringWithAggregatesFilter<"november"> | string
    type?: StringWithAggregatesFilter<"november"> | string
  }

  export type decemberWhereInput = {
    AND?: decemberWhereInput | decemberWhereInput[]
    OR?: decemberWhereInput[]
    NOT?: decemberWhereInput | decemberWhereInput[]
    id?: StringFilter<"december"> | string
    year?: StringFilter<"december"> | string
    day?: StringFilter<"december"> | string
    owner?: StringFilter<"december"> | string
    type?: StringFilter<"december"> | string
  }

  export type decemberOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type decemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: decemberWhereInput | decemberWhereInput[]
    OR?: decemberWhereInput[]
    NOT?: decemberWhereInput | decemberWhereInput[]
    year?: StringFilter<"december"> | string
    day?: StringFilter<"december"> | string
    owner?: StringFilter<"december"> | string
    type?: StringFilter<"december"> | string
  }, "id">

  export type decemberOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    _count?: decemberCountOrderByAggregateInput
    _max?: decemberMaxOrderByAggregateInput
    _min?: decemberMinOrderByAggregateInput
  }

  export type decemberScalarWhereWithAggregatesInput = {
    AND?: decemberScalarWhereWithAggregatesInput | decemberScalarWhereWithAggregatesInput[]
    OR?: decemberScalarWhereWithAggregatesInput[]
    NOT?: decemberScalarWhereWithAggregatesInput | decemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"december"> | string
    year?: StringWithAggregatesFilter<"december"> | string
    day?: StringWithAggregatesFilter<"december"> | string
    owner?: StringWithAggregatesFilter<"december"> | string
    type?: StringWithAggregatesFilter<"december"> | string
  }

  export type people2WhereInput = {
    AND?: people2WhereInput | people2WhereInput[]
    OR?: people2WhereInput[]
    NOT?: people2WhereInput | people2WhereInput[]
    groupmeid?: StringFilter<"people2"> | string
    name?: StringFilter<"people2"> | string
    username?: StringFilter<"people2"> | string
    pickorder?: StringFilter<"people2"> | string
    totalpoints?: StringFilter<"people2"> | string
    admin?: BoolFilter<"people2"> | boolean
  }

  export type people2OrderByWithRelationInput = {
    groupmeid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    pickorder?: SortOrder
    totalpoints?: SortOrder
    admin?: SortOrder
  }

  export type people2WhereUniqueInput = Prisma.AtLeast<{
    groupmeid?: string
    name?: string
    AND?: people2WhereInput | people2WhereInput[]
    OR?: people2WhereInput[]
    NOT?: people2WhereInput | people2WhereInput[]
    username?: StringFilter<"people2"> | string
    pickorder?: StringFilter<"people2"> | string
    totalpoints?: StringFilter<"people2"> | string
    admin?: BoolFilter<"people2"> | boolean
  }, "groupmeid" | "name">

  export type people2OrderByWithAggregationInput = {
    groupmeid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    pickorder?: SortOrder
    totalpoints?: SortOrder
    admin?: SortOrder
    _count?: people2CountOrderByAggregateInput
    _max?: people2MaxOrderByAggregateInput
    _min?: people2MinOrderByAggregateInput
  }

  export type people2ScalarWhereWithAggregatesInput = {
    AND?: people2ScalarWhereWithAggregatesInput | people2ScalarWhereWithAggregatesInput[]
    OR?: people2ScalarWhereWithAggregatesInput[]
    NOT?: people2ScalarWhereWithAggregatesInput | people2ScalarWhereWithAggregatesInput[]
    groupmeid?: StringWithAggregatesFilter<"people2"> | string
    name?: StringWithAggregatesFilter<"people2"> | string
    username?: StringWithAggregatesFilter<"people2"> | string
    pickorder?: StringWithAggregatesFilter<"people2"> | string
    totalpoints?: StringWithAggregatesFilter<"people2"> | string
    admin?: BoolWithAggregatesFilter<"people2"> | boolean
  }

  export type startend2WhereInput = {
    AND?: startend2WhereInput | startend2WhereInput[]
    OR?: startend2WhereInput[]
    NOT?: startend2WhereInput | startend2WhereInput[]
    id?: IntFilter<"startend2"> | number
    date?: DateTimeFilter<"startend2"> | Date | string
  }

  export type startend2OrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type startend2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: startend2WhereInput | startend2WhereInput[]
    OR?: startend2WhereInput[]
    NOT?: startend2WhereInput | startend2WhereInput[]
    date?: DateTimeFilter<"startend2"> | Date | string
  }, "id">

  export type startend2OrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: startend2CountOrderByAggregateInput
    _avg?: startend2AvgOrderByAggregateInput
    _max?: startend2MaxOrderByAggregateInput
    _min?: startend2MinOrderByAggregateInput
    _sum?: startend2SumOrderByAggregateInput
  }

  export type startend2ScalarWhereWithAggregatesInput = {
    AND?: startend2ScalarWhereWithAggregatesInput | startend2ScalarWhereWithAggregatesInput[]
    OR?: startend2ScalarWhereWithAggregatesInput[]
    NOT?: startend2ScalarWhereWithAggregatesInput | startend2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"startend2"> | number
    date?: DateTimeWithAggregatesFilter<"startend2"> | Date | string
  }

  export type adminCreateInput = {
    name: string
    password: string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    name: string
    password: string
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateManyInput = {
    id?: number
    name: string
    password: string
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type januaryCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type januaryUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type januaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type januaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type januaryCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type januaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type januaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type februaryCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type februaryUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type februaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type februaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type februaryCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type februaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type februaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type marchCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type marchUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type marchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type marchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type marchCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type marchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type marchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type aprilCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type aprilUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type aprilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type aprilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type aprilCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type aprilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type aprilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mayCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type mayUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type mayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mayCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type mayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type juneCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type juneUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type juneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type juneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type juneCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type juneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type juneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type julyCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type julyUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type julyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type julyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type julyCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type julyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type julyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type augustCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type augustUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type augustUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type augustUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type augustCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type augustUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type augustUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type septemberCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type septemberUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type septemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type septemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type septemberCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type septemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type septemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type octoberCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type octoberUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type octoberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type octoberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type octoberCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type octoberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type octoberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type novemberCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type novemberUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type novemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type novemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type novemberCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type novemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type novemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type decemberCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type decemberUncheckedCreateInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type decemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type decemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type decemberCreateManyInput = {
    id: string
    year: string
    day: string
    owner: string
    type: string
  }

  export type decemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type decemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type people2CreateInput = {
    groupmeid: string
    name: string
    username: string
    pickorder: string
    totalpoints: string
    admin: boolean
  }

  export type people2UncheckedCreateInput = {
    groupmeid: string
    name: string
    username: string
    pickorder: string
    totalpoints: string
    admin: boolean
  }

  export type people2UpdateInput = {
    groupmeid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    pickorder?: StringFieldUpdateOperationsInput | string
    totalpoints?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type people2UncheckedUpdateInput = {
    groupmeid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    pickorder?: StringFieldUpdateOperationsInput | string
    totalpoints?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type people2CreateManyInput = {
    groupmeid: string
    name: string
    username: string
    pickorder: string
    totalpoints: string
    admin: boolean
  }

  export type people2UpdateManyMutationInput = {
    groupmeid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    pickorder?: StringFieldUpdateOperationsInput | string
    totalpoints?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type people2UncheckedUpdateManyInput = {
    groupmeid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    pickorder?: StringFieldUpdateOperationsInput | string
    totalpoints?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type startend2CreateInput = {
    id: number
    date: Date | string
  }

  export type startend2UncheckedCreateInput = {
    id: number
    date: Date | string
  }

  export type startend2UpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type startend2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type startend2CreateManyInput = {
    id: number
    date: Date | string
  }

  export type startend2UpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type startend2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type januaryCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type januaryMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type januaryMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type februaryCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type februaryMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type februaryMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type marchCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type marchMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type marchMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type aprilCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type aprilMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type aprilMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type mayCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type mayMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type mayMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type juneCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type juneMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type juneMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type julyCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type julyMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type julyMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type augustCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type augustMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type augustMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type septemberCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type septemberMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type septemberMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type octoberCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type octoberMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type octoberMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type novemberCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type novemberMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type novemberMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type decemberCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type decemberMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type decemberMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    day?: SortOrder
    owner?: SortOrder
    type?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type people2CountOrderByAggregateInput = {
    groupmeid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    pickorder?: SortOrder
    totalpoints?: SortOrder
    admin?: SortOrder
  }

  export type people2MaxOrderByAggregateInput = {
    groupmeid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    pickorder?: SortOrder
    totalpoints?: SortOrder
    admin?: SortOrder
  }

  export type people2MinOrderByAggregateInput = {
    groupmeid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    pickorder?: SortOrder
    totalpoints?: SortOrder
    admin?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type startend2CountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type startend2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type startend2MaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type startend2MinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type startend2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}