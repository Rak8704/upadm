
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OtpRecord
 * 
 */
export type OtpRecord = $Result.DefaultSelection<Prisma.$OtpRecordPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model GameTransaction
 * 
 */
export type GameTransaction = $Result.DefaultSelection<Prisma.$GameTransactionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model SlideImage
 * 
 */
export type SlideImage = $Result.DefaultSelection<Prisma.$SlideImagePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model SubAdmin
 * 
 */
export type SubAdmin = $Result.DefaultSelection<Prisma.$SubAdminPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model SubAdminPermission
 * 
 */
export type SubAdminPermission = $Result.DefaultSelection<Prisma.$SubAdminPermissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const TransactionType: {
  deposit: 'deposit',
  withdraw: 'withdraw',
  bonus: 'bonus',
  commission: 'commission',
  salary: 'salary'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const SlideImagePlacement: {
  first_slide: 'first_slide',
  second_slide: 'second_slide',
  third_slide: 'third_slide'
};

export type SlideImagePlacement = (typeof SlideImagePlacement)[keyof typeof SlideImagePlacement]


export const DeviceType: {
  desktop: 'desktop',
  mobile: 'mobile',
  tablet: 'tablet'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const SlideImagePage: {
  home: 'home',
  referral: 'referral',
  wallet: 'wallet',
  promotions: 'promotions',
  games: 'games'
};

export type SlideImagePage = (typeof SlideImagePage)[keyof typeof SlideImagePage]


export const AdminStatus: {
  active: 'active',
  inactive: 'inactive',
  suspended: 'suspended'
};

export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus]


export const SubAdminStatus: {
  active: 'active',
  inactive: 'inactive',
  suspended: 'suspended'
};

export type SubAdminStatus = (typeof SubAdminStatus)[keyof typeof SubAdminStatus]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type SlideImagePlacement = $Enums.SlideImagePlacement

export const SlideImagePlacement: typeof $Enums.SlideImagePlacement

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type SlideImagePage = $Enums.SlideImagePage

export const SlideImagePage: typeof $Enums.SlideImagePage

export type AdminStatus = $Enums.AdminStatus

export const AdminStatus: typeof $Enums.AdminStatus

export type SubAdminStatus = $Enums.SubAdminStatus

export const SubAdminStatus: typeof $Enums.SubAdminStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpRecord`: Exposes CRUD operations for the **OtpRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpRecords
    * const otpRecords = await prisma.otpRecord.findMany()
    * ```
    */
  get otpRecord(): Prisma.OtpRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameTransaction`: Exposes CRUD operations for the **GameTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameTransactions
    * const gameTransactions = await prisma.gameTransaction.findMany()
    * ```
    */
  get gameTransaction(): Prisma.GameTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slideImage`: Exposes CRUD operations for the **SlideImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlideImages
    * const slideImages = await prisma.slideImage.findMany()
    * ```
    */
  get slideImage(): Prisma.SlideImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subAdmin`: Exposes CRUD operations for the **SubAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubAdmins
    * const subAdmins = await prisma.subAdmin.findMany()
    * ```
    */
  get subAdmin(): Prisma.SubAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subAdminPermission`: Exposes CRUD operations for the **SubAdminPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubAdminPermissions
    * const subAdminPermissions = await prisma.subAdminPermission.findMany()
    * ```
    */
  get subAdminPermission(): Prisma.SubAdminPermissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    OtpRecord: 'OtpRecord',
    Transaction: 'Transaction',
    GameTransaction: 'GameTransaction',
    Message: 'Message',
    Voucher: 'Voucher',
    SlideImage: 'SlideImage',
    Admin: 'Admin',
    SubAdmin: 'SubAdmin',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    SubAdminPermission: 'SubAdminPermission'
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
      modelProps: "user" | "otpRecord" | "transaction" | "gameTransaction" | "message" | "voucher" | "slideImage" | "admin" | "subAdmin" | "permission" | "rolePermission" | "subAdminPermission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OtpRecord: {
        payload: Prisma.$OtpRecordPayload<ExtArgs>
        fields: Prisma.OtpRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          findFirst: {
            args: Prisma.OtpRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          findMany: {
            args: Prisma.OtpRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          create: {
            args: Prisma.OtpRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          createMany: {
            args: Prisma.OtpRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          delete: {
            args: Prisma.OtpRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          update: {
            args: Prisma.OtpRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          deleteMany: {
            args: Prisma.OtpRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          upsert: {
            args: Prisma.OtpRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          aggregate: {
            args: Prisma.OtpRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpRecord>
          }
          groupBy: {
            args: Prisma.OtpRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpRecordCountArgs<ExtArgs>
            result: $Utils.Optional<OtpRecordCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      GameTransaction: {
        payload: Prisma.$GameTransactionPayload<ExtArgs>
        fields: Prisma.GameTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          findFirst: {
            args: Prisma.GameTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          findMany: {
            args: Prisma.GameTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          create: {
            args: Prisma.GameTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          createMany: {
            args: Prisma.GameTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          delete: {
            args: Prisma.GameTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          update: {
            args: Prisma.GameTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          deleteMany: {
            args: Prisma.GameTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          upsert: {
            args: Prisma.GameTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          aggregate: {
            args: Prisma.GameTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameTransaction>
          }
          groupBy: {
            args: Prisma.GameTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<GameTransactionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      SlideImage: {
        payload: Prisma.$SlideImagePayload<ExtArgs>
        fields: Prisma.SlideImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlideImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlideImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          findFirst: {
            args: Prisma.SlideImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlideImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          findMany: {
            args: Prisma.SlideImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>[]
          }
          create: {
            args: Prisma.SlideImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          createMany: {
            args: Prisma.SlideImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlideImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>[]
          }
          delete: {
            args: Prisma.SlideImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          update: {
            args: Prisma.SlideImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          deleteMany: {
            args: Prisma.SlideImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlideImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlideImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>[]
          }
          upsert: {
            args: Prisma.SlideImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideImagePayload>
          }
          aggregate: {
            args: Prisma.SlideImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlideImage>
          }
          groupBy: {
            args: Prisma.SlideImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlideImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlideImageCountArgs<ExtArgs>
            result: $Utils.Optional<SlideImageCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      SubAdmin: {
        payload: Prisma.$SubAdminPayload<ExtArgs>
        fields: Prisma.SubAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          findFirst: {
            args: Prisma.SubAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          findMany: {
            args: Prisma.SubAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>[]
          }
          create: {
            args: Prisma.SubAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          createMany: {
            args: Prisma.SubAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>[]
          }
          delete: {
            args: Prisma.SubAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          update: {
            args: Prisma.SubAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          deleteMany: {
            args: Prisma.SubAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>[]
          }
          upsert: {
            args: Prisma.SubAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPayload>
          }
          aggregate: {
            args: Prisma.SubAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubAdmin>
          }
          groupBy: {
            args: Prisma.SubAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SubAdminCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      SubAdminPermission: {
        payload: Prisma.$SubAdminPermissionPayload<ExtArgs>
        fields: Prisma.SubAdminPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubAdminPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubAdminPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          findFirst: {
            args: Prisma.SubAdminPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubAdminPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          findMany: {
            args: Prisma.SubAdminPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>[]
          }
          create: {
            args: Prisma.SubAdminPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          createMany: {
            args: Prisma.SubAdminPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubAdminPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>[]
          }
          delete: {
            args: Prisma.SubAdminPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          update: {
            args: Prisma.SubAdminPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          deleteMany: {
            args: Prisma.SubAdminPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubAdminPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubAdminPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>[]
          }
          upsert: {
            args: Prisma.SubAdminPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAdminPermissionPayload>
          }
          aggregate: {
            args: Prisma.SubAdminPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubAdminPermission>
          }
          groupBy: {
            args: Prisma.SubAdminPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubAdminPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubAdminPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubAdminPermissionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    otpRecord?: OtpRecordOmit
    transaction?: TransactionOmit
    gameTransaction?: GameTransactionOmit
    message?: MessageOmit
    voucher?: VoucherOmit
    slideImage?: SlideImageOmit
    admin?: AdminOmit
    subAdmin?: SubAdminOmit
    permission?: PermissionOmit
    rolePermission?: RolePermissionOmit
    subAdminPermission?: SubAdminPermissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    game_transactions: number
    transactions: number
    otp_records: number
    vouchers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_transactions?: boolean | UserCountOutputTypeCountGame_transactionsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    otp_records?: boolean | UserCountOutputTypeCountOtp_recordsArgs
    vouchers?: boolean | UserCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGame_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtp_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    subAdmins: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subAdmins?: boolean | AdminCountOutputTypeCountSubAdminsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSubAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAdminWhereInput
  }


  /**
   * Count Type SubAdminCountOutputType
   */

  export type SubAdminCountOutputType = {
    permissions: number
  }

  export type SubAdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | SubAdminCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * SubAdminCountOutputType without action
   */
  export type SubAdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminCountOutputType
     */
    select?: SubAdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubAdminCountOutputType without action
   */
  export type SubAdminCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAdminPermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    rolePermissions: number
    subAdminPermissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | PermissionCountOutputTypeCountRolePermissionsArgs
    subAdminPermissions?: boolean | PermissionCountOutputTypeCountSubAdminPermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountSubAdminPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAdminPermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    turn_over: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    turn_over: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    status: string | null
    phone_number: string | null
    user_code: string | null
    recovery_code: string | null
    password: string | null
    fp_id: string | null
    ip: string | null
    balance: Decimal | null
    turn_over: Decimal | null
    invited_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    status: string | null
    phone_number: string | null
    user_code: string | null
    recovery_code: string | null
    password: string | null
    fp_id: string | null
    ip: string | null
    balance: Decimal | null
    turn_over: Decimal | null
    invited_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    status: number
    phone_number: number
    user_code: number
    recovery_code: number
    password: number
    fp_id: number
    ip: number
    balance: number
    turn_over: number
    invited_by: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    balance?: true
    turn_over?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    balance?: true
    turn_over?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    user_code?: true
    recovery_code?: true
    password?: true
    fp_id?: true
    ip?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    user_code?: true
    recovery_code?: true
    password?: true
    fp_id?: true
    ip?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    user_code?: true
    recovery_code?: true
    password?: true
    fp_id?: true
    ip?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    status: string
    phone_number: string
    user_code: string | null
    recovery_code: string | null
    password: string
    fp_id: string
    ip: string
    balance: Decimal
    turn_over: Decimal
    invited_by: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    user_code?: boolean
    recovery_code?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game_transactions?: boolean | User$game_transactionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    otp_records?: boolean | User$otp_recordsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    user_code?: boolean
    recovery_code?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    user_code?: boolean
    recovery_code?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    status?: boolean
    phone_number?: boolean
    user_code?: boolean
    recovery_code?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "phone_number" | "user_code" | "recovery_code" | "password" | "fp_id" | "ip" | "balance" | "turn_over" | "invited_by" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_transactions?: boolean | User$game_transactionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    otp_records?: boolean | User$otp_recordsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      game_transactions: Prisma.$GameTransactionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      otp_records: Prisma.$OtpRecordPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      phone_number: string
      user_code: string | null
      recovery_code: string | null
      password: string
      fp_id: string
      ip: string
      balance: Prisma.Decimal
      turn_over: Prisma.Decimal
      invited_by: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game_transactions<T extends User$game_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$game_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otp_records<T extends User$otp_recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$otp_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends User$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly user_code: FieldRef<"User", 'String'>
    readonly recovery_code: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fp_id: FieldRef<"User", 'String'>
    readonly ip: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Decimal'>
    readonly turn_over: FieldRef<"User", 'Decimal'>
    readonly invited_by: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.game_transactions
   */
  export type User$game_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    where?: GameTransactionWhereInput
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    cursor?: GameTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.otp_records
   */
  export type User$otp_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    where?: OtpRecordWhereInput
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    cursor?: OtpRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * User.vouchers
   */
  export type User$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OtpRecord
   */

  export type AggregateOtpRecord = {
    _count: OtpRecordCountAggregateOutputType | null
    _avg: OtpRecordAvgAggregateOutputType | null
    _sum: OtpRecordSumAggregateOutputType | null
    _min: OtpRecordMinAggregateOutputType | null
    _max: OtpRecordMaxAggregateOutputType | null
  }

  export type OtpRecordAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpRecordSumAggregateOutputType = {
    id: number | null
  }

  export type OtpRecordMinAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    valid: boolean | null
    createdAt: Date | null
  }

  export type OtpRecordMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    valid: boolean | null
    createdAt: Date | null
  }

  export type OtpRecordCountAggregateOutputType = {
    id: number
    phone: number
    otp: number
    valid: number
    createdAt: number
    _all: number
  }


  export type OtpRecordAvgAggregateInputType = {
    id?: true
  }

  export type OtpRecordSumAggregateInputType = {
    id?: true
  }

  export type OtpRecordMinAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    valid?: true
    createdAt?: true
  }

  export type OtpRecordMaxAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    valid?: true
    createdAt?: true
  }

  export type OtpRecordCountAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    valid?: true
    createdAt?: true
    _all?: true
  }

  export type OtpRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpRecord to aggregate.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpRecords
    **/
    _count?: true | OtpRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpRecordMaxAggregateInputType
  }

  export type GetOtpRecordAggregateType<T extends OtpRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpRecord[P]>
      : GetScalarType<T[P], AggregateOtpRecord[P]>
  }




  export type OtpRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpRecordWhereInput
    orderBy?: OtpRecordOrderByWithAggregationInput | OtpRecordOrderByWithAggregationInput[]
    by: OtpRecordScalarFieldEnum[] | OtpRecordScalarFieldEnum
    having?: OtpRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpRecordCountAggregateInputType | true
    _avg?: OtpRecordAvgAggregateInputType
    _sum?: OtpRecordSumAggregateInputType
    _min?: OtpRecordMinAggregateInputType
    _max?: OtpRecordMaxAggregateInputType
  }

  export type OtpRecordGroupByOutputType = {
    id: number
    phone: string
    otp: string
    valid: boolean
    createdAt: Date
    _count: OtpRecordCountAggregateOutputType | null
    _avg: OtpRecordAvgAggregateOutputType | null
    _sum: OtpRecordSumAggregateOutputType | null
    _min: OtpRecordMinAggregateOutputType | null
    _max: OtpRecordMaxAggregateOutputType | null
  }

  type GetOtpRecordGroupByPayload<T extends OtpRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpRecordGroupByOutputType[P]>
            : GetScalarType<T[P], OtpRecordGroupByOutputType[P]>
        }
      >
    >


  export type OtpRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    valid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    valid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    valid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectScalar = {
    id?: boolean
    phone?: boolean
    otp?: boolean
    valid?: boolean
    createdAt?: boolean
  }

  export type OtpRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "otp" | "valid" | "createdAt", ExtArgs["result"]["otpRecord"]>
  export type OtpRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      otp: string
      valid: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpRecord"]>
    composites: {}
  }

  type OtpRecordGetPayload<S extends boolean | null | undefined | OtpRecordDefaultArgs> = $Result.GetResult<Prisma.$OtpRecordPayload, S>

  type OtpRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpRecordCountAggregateInputType | true
    }

  export interface OtpRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpRecord'], meta: { name: 'OtpRecord' } }
    /**
     * Find zero or one OtpRecord that matches the filter.
     * @param {OtpRecordFindUniqueArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpRecordFindUniqueArgs>(args: SelectSubset<T, OtpRecordFindUniqueArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpRecordFindUniqueOrThrowArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindFirstArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpRecordFindFirstArgs>(args?: SelectSubset<T, OtpRecordFindFirstArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindFirstOrThrowArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpRecords
     * const otpRecords = await prisma.otpRecord.findMany()
     * 
     * // Get first 10 OtpRecords
     * const otpRecords = await prisma.otpRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpRecordFindManyArgs>(args?: SelectSubset<T, OtpRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpRecord.
     * @param {OtpRecordCreateArgs} args - Arguments to create a OtpRecord.
     * @example
     * // Create one OtpRecord
     * const OtpRecord = await prisma.otpRecord.create({
     *   data: {
     *     // ... data to create a OtpRecord
     *   }
     * })
     * 
     */
    create<T extends OtpRecordCreateArgs>(args: SelectSubset<T, OtpRecordCreateArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpRecords.
     * @param {OtpRecordCreateManyArgs} args - Arguments to create many OtpRecords.
     * @example
     * // Create many OtpRecords
     * const otpRecord = await prisma.otpRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpRecordCreateManyArgs>(args?: SelectSubset<T, OtpRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpRecords and returns the data saved in the database.
     * @param {OtpRecordCreateManyAndReturnArgs} args - Arguments to create many OtpRecords.
     * @example
     * // Create many OtpRecords
     * const otpRecord = await prisma.otpRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpRecords and only return the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpRecord.
     * @param {OtpRecordDeleteArgs} args - Arguments to delete one OtpRecord.
     * @example
     * // Delete one OtpRecord
     * const OtpRecord = await prisma.otpRecord.delete({
     *   where: {
     *     // ... filter to delete one OtpRecord
     *   }
     * })
     * 
     */
    delete<T extends OtpRecordDeleteArgs>(args: SelectSubset<T, OtpRecordDeleteArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpRecord.
     * @param {OtpRecordUpdateArgs} args - Arguments to update one OtpRecord.
     * @example
     * // Update one OtpRecord
     * const otpRecord = await prisma.otpRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpRecordUpdateArgs>(args: SelectSubset<T, OtpRecordUpdateArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpRecords.
     * @param {OtpRecordDeleteManyArgs} args - Arguments to filter OtpRecords to delete.
     * @example
     * // Delete a few OtpRecords
     * const { count } = await prisma.otpRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpRecordDeleteManyArgs>(args?: SelectSubset<T, OtpRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpRecords
     * const otpRecord = await prisma.otpRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpRecordUpdateManyArgs>(args: SelectSubset<T, OtpRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpRecords and returns the data updated in the database.
     * @param {OtpRecordUpdateManyAndReturnArgs} args - Arguments to update many OtpRecords.
     * @example
     * // Update many OtpRecords
     * const otpRecord = await prisma.otpRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpRecords and only return the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpRecord.
     * @param {OtpRecordUpsertArgs} args - Arguments to update or create a OtpRecord.
     * @example
     * // Update or create a OtpRecord
     * const otpRecord = await prisma.otpRecord.upsert({
     *   create: {
     *     // ... data to create a OtpRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpRecord we want to update
     *   }
     * })
     */
    upsert<T extends OtpRecordUpsertArgs>(args: SelectSubset<T, OtpRecordUpsertArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordCountArgs} args - Arguments to filter OtpRecords to count.
     * @example
     * // Count the number of OtpRecords
     * const count = await prisma.otpRecord.count({
     *   where: {
     *     // ... the filter for the OtpRecords we want to count
     *   }
     * })
    **/
    count<T extends OtpRecordCountArgs>(
      args?: Subset<T, OtpRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpRecordAggregateArgs>(args: Subset<T, OtpRecordAggregateArgs>): Prisma.PrismaPromise<GetOtpRecordAggregateType<T>>

    /**
     * Group by OtpRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordGroupByArgs} args - Group by arguments.
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
      T extends OtpRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpRecordGroupByArgs['orderBy'] }
        : { orderBy?: OtpRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpRecord model
   */
  readonly fields: OtpRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtpRecord model
   */
  interface OtpRecordFieldRefs {
    readonly id: FieldRef<"OtpRecord", 'Int'>
    readonly phone: FieldRef<"OtpRecord", 'String'>
    readonly otp: FieldRef<"OtpRecord", 'String'>
    readonly valid: FieldRef<"OtpRecord", 'Boolean'>
    readonly createdAt: FieldRef<"OtpRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpRecord findUnique
   */
  export type OtpRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord findUniqueOrThrow
   */
  export type OtpRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord findFirst
   */
  export type OtpRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpRecords.
     */
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord findFirstOrThrow
   */
  export type OtpRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpRecords.
     */
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord findMany
   */
  export type OtpRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecords to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord create
   */
  export type OtpRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a OtpRecord.
     */
    data: XOR<OtpRecordCreateInput, OtpRecordUncheckedCreateInput>
  }

  /**
   * OtpRecord createMany
   */
  export type OtpRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpRecords.
     */
    data: OtpRecordCreateManyInput | OtpRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpRecord createManyAndReturn
   */
  export type OtpRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * The data used to create many OtpRecords.
     */
    data: OtpRecordCreateManyInput | OtpRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpRecord update
   */
  export type OtpRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a OtpRecord.
     */
    data: XOR<OtpRecordUpdateInput, OtpRecordUncheckedUpdateInput>
    /**
     * Choose, which OtpRecord to update.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord updateMany
   */
  export type OtpRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpRecords.
     */
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyInput>
    /**
     * Filter which OtpRecords to update
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to update.
     */
    limit?: number
  }

  /**
   * OtpRecord updateManyAndReturn
   */
  export type OtpRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * The data used to update OtpRecords.
     */
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyInput>
    /**
     * Filter which OtpRecords to update
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpRecord upsert
   */
  export type OtpRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the OtpRecord to update in case it exists.
     */
    where: OtpRecordWhereUniqueInput
    /**
     * In case the OtpRecord found by the `where` argument doesn't exist, create a new OtpRecord with this data.
     */
    create: XOR<OtpRecordCreateInput, OtpRecordUncheckedCreateInput>
    /**
     * In case the OtpRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpRecordUpdateInput, OtpRecordUncheckedUpdateInput>
  }

  /**
   * OtpRecord delete
   */
  export type OtpRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter which OtpRecord to delete.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord deleteMany
   */
  export type OtpRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpRecords to delete
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to delete.
     */
    limit?: number
  }

  /**
   * OtpRecord without action
   */
  export type OtpRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus | null
    user_id: number | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus | null
    user_id: number | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    trx_id: number
    sign: number
    status: number
    user_id: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    amount: Decimal
    type: $Enums.TransactionType
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus
    user_id: number
    method: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "trx_id" | "sign" | "status" | "user_id" | "method" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: Prisma.Decimal
      type: $Enums.TransactionType
      trx_id: string | null
      sign: string | null
      status: $Enums.TransactionStatus
      user_id: number
      method: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly trx_id: FieldRef<"Transaction", 'String'>
    readonly sign: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly method: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model GameTransaction
   */

  export type AggregateGameTransaction = {
    _count: GameTransactionCountAggregateOutputType | null
    _avg: GameTransactionAvgAggregateOutputType | null
    _sum: GameTransactionSumAggregateOutputType | null
    _min: GameTransactionMinAggregateOutputType | null
    _max: GameTransactionMaxAggregateOutputType | null
  }

  export type GameTransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type GameTransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type GameTransactionMinAggregateOutputType = {
    id: number | null
    trans_id: string | null
    type: string | null
    amount: Decimal | null
    game_code: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameTransactionMaxAggregateOutputType = {
    id: number | null
    trans_id: string | null
    type: string | null
    amount: Decimal | null
    game_code: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameTransactionCountAggregateOutputType = {
    id: number
    trans_id: number
    type: number
    amount: number
    game_code: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameTransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type GameTransactionSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type GameTransactionMinAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameTransactionMaxAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameTransactionCountAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTransaction to aggregate.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameTransactions
    **/
    _count?: true | GameTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameTransactionMaxAggregateInputType
  }

  export type GetGameTransactionAggregateType<T extends GameTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameTransaction[P]>
      : GetScalarType<T[P], AggregateGameTransaction[P]>
  }




  export type GameTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTransactionWhereInput
    orderBy?: GameTransactionOrderByWithAggregationInput | GameTransactionOrderByWithAggregationInput[]
    by: GameTransactionScalarFieldEnum[] | GameTransactionScalarFieldEnum
    having?: GameTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameTransactionCountAggregateInputType | true
    _avg?: GameTransactionAvgAggregateInputType
    _sum?: GameTransactionSumAggregateInputType
    _min?: GameTransactionMinAggregateInputType
    _max?: GameTransactionMaxAggregateInputType
  }

  export type GameTransactionGroupByOutputType = {
    id: number
    trans_id: string
    type: string
    amount: Decimal
    game_code: string | null
    user_id: number
    createdAt: Date
    updatedAt: Date
    _count: GameTransactionCountAggregateOutputType | null
    _avg: GameTransactionAvgAggregateOutputType | null
    _sum: GameTransactionSumAggregateOutputType | null
    _min: GameTransactionMinAggregateOutputType | null
    _max: GameTransactionMaxAggregateOutputType | null
  }

  type GetGameTransactionGroupByPayload<T extends GameTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], GameTransactionGroupByOutputType[P]>
        }
      >
    >


  export type GameTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectScalar = {
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trans_id" | "type" | "amount" | "game_code" | "user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["gameTransaction"]>
  export type GameTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trans_id: string
      type: string
      amount: Prisma.Decimal
      game_code: string | null
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameTransaction"]>
    composites: {}
  }

  type GameTransactionGetPayload<S extends boolean | null | undefined | GameTransactionDefaultArgs> = $Result.GetResult<Prisma.$GameTransactionPayload, S>

  type GameTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameTransactionCountAggregateInputType | true
    }

  export interface GameTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameTransaction'], meta: { name: 'GameTransaction' } }
    /**
     * Find zero or one GameTransaction that matches the filter.
     * @param {GameTransactionFindUniqueArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameTransactionFindUniqueArgs>(args: SelectSubset<T, GameTransactionFindUniqueArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameTransactionFindUniqueOrThrowArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindFirstArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameTransactionFindFirstArgs>(args?: SelectSubset<T, GameTransactionFindFirstArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindFirstOrThrowArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameTransactions
     * const gameTransactions = await prisma.gameTransaction.findMany()
     * 
     * // Get first 10 GameTransactions
     * const gameTransactions = await prisma.gameTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameTransactionFindManyArgs>(args?: SelectSubset<T, GameTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameTransaction.
     * @param {GameTransactionCreateArgs} args - Arguments to create a GameTransaction.
     * @example
     * // Create one GameTransaction
     * const GameTransaction = await prisma.gameTransaction.create({
     *   data: {
     *     // ... data to create a GameTransaction
     *   }
     * })
     * 
     */
    create<T extends GameTransactionCreateArgs>(args: SelectSubset<T, GameTransactionCreateArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameTransactions.
     * @param {GameTransactionCreateManyArgs} args - Arguments to create many GameTransactions.
     * @example
     * // Create many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameTransactionCreateManyArgs>(args?: SelectSubset<T, GameTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameTransactions and returns the data saved in the database.
     * @param {GameTransactionCreateManyAndReturnArgs} args - Arguments to create many GameTransactions.
     * @example
     * // Create many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameTransactions and only return the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameTransaction.
     * @param {GameTransactionDeleteArgs} args - Arguments to delete one GameTransaction.
     * @example
     * // Delete one GameTransaction
     * const GameTransaction = await prisma.gameTransaction.delete({
     *   where: {
     *     // ... filter to delete one GameTransaction
     *   }
     * })
     * 
     */
    delete<T extends GameTransactionDeleteArgs>(args: SelectSubset<T, GameTransactionDeleteArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameTransaction.
     * @param {GameTransactionUpdateArgs} args - Arguments to update one GameTransaction.
     * @example
     * // Update one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameTransactionUpdateArgs>(args: SelectSubset<T, GameTransactionUpdateArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameTransactions.
     * @param {GameTransactionDeleteManyArgs} args - Arguments to filter GameTransactions to delete.
     * @example
     * // Delete a few GameTransactions
     * const { count } = await prisma.gameTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameTransactionDeleteManyArgs>(args?: SelectSubset<T, GameTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameTransactionUpdateManyArgs>(args: SelectSubset<T, GameTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTransactions and returns the data updated in the database.
     * @param {GameTransactionUpdateManyAndReturnArgs} args - Arguments to update many GameTransactions.
     * @example
     * // Update many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameTransactions and only return the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameTransaction.
     * @param {GameTransactionUpsertArgs} args - Arguments to update or create a GameTransaction.
     * @example
     * // Update or create a GameTransaction
     * const gameTransaction = await prisma.gameTransaction.upsert({
     *   create: {
     *     // ... data to create a GameTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameTransaction we want to update
     *   }
     * })
     */
    upsert<T extends GameTransactionUpsertArgs>(args: SelectSubset<T, GameTransactionUpsertArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionCountArgs} args - Arguments to filter GameTransactions to count.
     * @example
     * // Count the number of GameTransactions
     * const count = await prisma.gameTransaction.count({
     *   where: {
     *     // ... the filter for the GameTransactions we want to count
     *   }
     * })
    **/
    count<T extends GameTransactionCountArgs>(
      args?: Subset<T, GameTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameTransactionAggregateArgs>(args: Subset<T, GameTransactionAggregateArgs>): Prisma.PrismaPromise<GetGameTransactionAggregateType<T>>

    /**
     * Group by GameTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionGroupByArgs} args - Group by arguments.
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
      T extends GameTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameTransactionGroupByArgs['orderBy'] }
        : { orderBy?: GameTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameTransaction model
   */
  readonly fields: GameTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameTransaction model
   */
  interface GameTransactionFieldRefs {
    readonly id: FieldRef<"GameTransaction", 'Int'>
    readonly trans_id: FieldRef<"GameTransaction", 'String'>
    readonly type: FieldRef<"GameTransaction", 'String'>
    readonly amount: FieldRef<"GameTransaction", 'Decimal'>
    readonly game_code: FieldRef<"GameTransaction", 'String'>
    readonly user_id: FieldRef<"GameTransaction", 'Int'>
    readonly createdAt: FieldRef<"GameTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"GameTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameTransaction findUnique
   */
  export type GameTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction findUniqueOrThrow
   */
  export type GameTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction findFirst
   */
  export type GameTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTransactions.
     */
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction findFirstOrThrow
   */
  export type GameTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTransactions.
     */
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction findMany
   */
  export type GameTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransactions to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction create
   */
  export type GameTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameTransaction.
     */
    data: XOR<GameTransactionCreateInput, GameTransactionUncheckedCreateInput>
  }

  /**
   * GameTransaction createMany
   */
  export type GameTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameTransactions.
     */
    data: GameTransactionCreateManyInput | GameTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameTransaction createManyAndReturn
   */
  export type GameTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many GameTransactions.
     */
    data: GameTransactionCreateManyInput | GameTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameTransaction update
   */
  export type GameTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameTransaction.
     */
    data: XOR<GameTransactionUpdateInput, GameTransactionUncheckedUpdateInput>
    /**
     * Choose, which GameTransaction to update.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction updateMany
   */
  export type GameTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameTransactions.
     */
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyInput>
    /**
     * Filter which GameTransactions to update
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to update.
     */
    limit?: number
  }

  /**
   * GameTransaction updateManyAndReturn
   */
  export type GameTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * The data used to update GameTransactions.
     */
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyInput>
    /**
     * Filter which GameTransactions to update
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameTransaction upsert
   */
  export type GameTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameTransaction to update in case it exists.
     */
    where: GameTransactionWhereUniqueInput
    /**
     * In case the GameTransaction found by the `where` argument doesn't exist, create a new GameTransaction with this data.
     */
    create: XOR<GameTransactionCreateInput, GameTransactionUncheckedCreateInput>
    /**
     * In case the GameTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameTransactionUpdateInput, GameTransactionUncheckedUpdateInput>
  }

  /**
   * GameTransaction delete
   */
  export type GameTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter which GameTransaction to delete.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction deleteMany
   */
  export type GameTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTransactions to delete
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to delete.
     */
    limit?: number
  }

  /**
   * GameTransaction without action
   */
  export type GameTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    sender: number
    receiver: number
    content: number
    fileUrl: number
    createdAt: number
    seen: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    sender: string
    receiver: string
    content: string | null
    fileUrl: string | null
    createdAt: Date
    seen: boolean
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender" | "receiver" | "content" | "fileUrl" | "createdAt" | "seen", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender: string
      receiver: string
      content: string | null
      fileUrl: string | null
      createdAt: Date
      seen: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly sender: FieldRef<"Message", 'String'>
    readonly receiver: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly seen: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    collected_by: number | null
  }

  export type VoucherSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    collected_by: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: number | null
    code: string | null
    amount: Decimal | null
    collected: boolean | null
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: number | null
    code: string | null
    amount: Decimal | null
    collected: boolean | null
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    code: number
    amount: number
    collected: number
    collected_at: number
    message: number
    collected_by: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    id?: true
    amount?: true
    collected_by?: true
  }

  export type VoucherSumAggregateInputType = {
    id?: true
    amount?: true
    collected_by?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: number
    code: string
    amount: Decimal
    collected: boolean
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date
    createdAt: Date
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "amount" | "collected" | "collected_at" | "message" | "collected_by" | "updatedAt" | "createdAt", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      amount: Prisma.Decimal
      collected: boolean
      collected_at: Date | null
      message: string | null
      collected_by: number | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Voucher$userArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'Int'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly amount: FieldRef<"Voucher", 'Decimal'>
    readonly collected: FieldRef<"Voucher", 'Boolean'>
    readonly collected_at: FieldRef<"Voucher", 'DateTime'>
    readonly message: FieldRef<"Voucher", 'String'>
    readonly collected_by: FieldRef<"Voucher", 'Int'>
    readonly updatedAt: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.user
   */
  export type Voucher$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model SlideImage
   */

  export type AggregateSlideImage = {
    _count: SlideImageCountAggregateOutputType | null
    _avg: SlideImageAvgAggregateOutputType | null
    _sum: SlideImageSumAggregateOutputType | null
    _min: SlideImageMinAggregateOutputType | null
    _max: SlideImageMaxAggregateOutputType | null
  }

  export type SlideImageAvgAggregateOutputType = {
    id: number | null
  }

  export type SlideImageSumAggregateOutputType = {
    id: number | null
  }

  export type SlideImageMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    page: $Enums.SlideImagePage | null
    placement: $Enums.SlideImagePlacement | null
    device: $Enums.DeviceType | null
    createdAt: Date | null
  }

  export type SlideImageMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    page: $Enums.SlideImagePage | null
    placement: $Enums.SlideImagePlacement | null
    device: $Enums.DeviceType | null
    createdAt: Date | null
  }

  export type SlideImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    page: number
    placement: number
    device: number
    createdAt: number
    _all: number
  }


  export type SlideImageAvgAggregateInputType = {
    id?: true
  }

  export type SlideImageSumAggregateInputType = {
    id?: true
  }

  export type SlideImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    page?: true
    placement?: true
    device?: true
    createdAt?: true
  }

  export type SlideImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    page?: true
    placement?: true
    device?: true
    createdAt?: true
  }

  export type SlideImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    page?: true
    placement?: true
    device?: true
    createdAt?: true
    _all?: true
  }

  export type SlideImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideImage to aggregate.
     */
    where?: SlideImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideImages to fetch.
     */
    orderBy?: SlideImageOrderByWithRelationInput | SlideImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlideImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlideImages
    **/
    _count?: true | SlideImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlideImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlideImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlideImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlideImageMaxAggregateInputType
  }

  export type GetSlideImageAggregateType<T extends SlideImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSlideImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlideImage[P]>
      : GetScalarType<T[P], AggregateSlideImage[P]>
  }




  export type SlideImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideImageWhereInput
    orderBy?: SlideImageOrderByWithAggregationInput | SlideImageOrderByWithAggregationInput[]
    by: SlideImageScalarFieldEnum[] | SlideImageScalarFieldEnum
    having?: SlideImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlideImageCountAggregateInputType | true
    _avg?: SlideImageAvgAggregateInputType
    _sum?: SlideImageSumAggregateInputType
    _min?: SlideImageMinAggregateInputType
    _max?: SlideImageMaxAggregateInputType
  }

  export type SlideImageGroupByOutputType = {
    id: number
    imageUrl: string
    page: $Enums.SlideImagePage
    placement: $Enums.SlideImagePlacement | null
    device: $Enums.DeviceType | null
    createdAt: Date
    _count: SlideImageCountAggregateOutputType | null
    _avg: SlideImageAvgAggregateOutputType | null
    _sum: SlideImageSumAggregateOutputType | null
    _min: SlideImageMinAggregateOutputType | null
    _max: SlideImageMaxAggregateOutputType | null
  }

  type GetSlideImageGroupByPayload<T extends SlideImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlideImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlideImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlideImageGroupByOutputType[P]>
            : GetScalarType<T[P], SlideImageGroupByOutputType[P]>
        }
      >
    >


  export type SlideImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    page?: boolean
    placement?: boolean
    device?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["slideImage"]>

  export type SlideImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    page?: boolean
    placement?: boolean
    device?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["slideImage"]>

  export type SlideImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    page?: boolean
    placement?: boolean
    device?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["slideImage"]>

  export type SlideImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    page?: boolean
    placement?: boolean
    device?: boolean
    createdAt?: boolean
  }

  export type SlideImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "page" | "placement" | "device" | "createdAt", ExtArgs["result"]["slideImage"]>

  export type $SlideImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlideImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      page: $Enums.SlideImagePage
      placement: $Enums.SlideImagePlacement | null
      device: $Enums.DeviceType | null
      createdAt: Date
    }, ExtArgs["result"]["slideImage"]>
    composites: {}
  }

  type SlideImageGetPayload<S extends boolean | null | undefined | SlideImageDefaultArgs> = $Result.GetResult<Prisma.$SlideImagePayload, S>

  type SlideImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlideImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlideImageCountAggregateInputType | true
    }

  export interface SlideImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlideImage'], meta: { name: 'SlideImage' } }
    /**
     * Find zero or one SlideImage that matches the filter.
     * @param {SlideImageFindUniqueArgs} args - Arguments to find a SlideImage
     * @example
     * // Get one SlideImage
     * const slideImage = await prisma.slideImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlideImageFindUniqueArgs>(args: SelectSubset<T, SlideImageFindUniqueArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlideImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlideImageFindUniqueOrThrowArgs} args - Arguments to find a SlideImage
     * @example
     * // Get one SlideImage
     * const slideImage = await prisma.slideImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlideImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SlideImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageFindFirstArgs} args - Arguments to find a SlideImage
     * @example
     * // Get one SlideImage
     * const slideImage = await prisma.slideImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlideImageFindFirstArgs>(args?: SelectSubset<T, SlideImageFindFirstArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageFindFirstOrThrowArgs} args - Arguments to find a SlideImage
     * @example
     * // Get one SlideImage
     * const slideImage = await prisma.slideImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlideImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SlideImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlideImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlideImages
     * const slideImages = await prisma.slideImage.findMany()
     * 
     * // Get first 10 SlideImages
     * const slideImages = await prisma.slideImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideImageWithIdOnly = await prisma.slideImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlideImageFindManyArgs>(args?: SelectSubset<T, SlideImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlideImage.
     * @param {SlideImageCreateArgs} args - Arguments to create a SlideImage.
     * @example
     * // Create one SlideImage
     * const SlideImage = await prisma.slideImage.create({
     *   data: {
     *     // ... data to create a SlideImage
     *   }
     * })
     * 
     */
    create<T extends SlideImageCreateArgs>(args: SelectSubset<T, SlideImageCreateArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlideImages.
     * @param {SlideImageCreateManyArgs} args - Arguments to create many SlideImages.
     * @example
     * // Create many SlideImages
     * const slideImage = await prisma.slideImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlideImageCreateManyArgs>(args?: SelectSubset<T, SlideImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlideImages and returns the data saved in the database.
     * @param {SlideImageCreateManyAndReturnArgs} args - Arguments to create many SlideImages.
     * @example
     * // Create many SlideImages
     * const slideImage = await prisma.slideImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlideImages and only return the `id`
     * const slideImageWithIdOnly = await prisma.slideImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlideImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SlideImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlideImage.
     * @param {SlideImageDeleteArgs} args - Arguments to delete one SlideImage.
     * @example
     * // Delete one SlideImage
     * const SlideImage = await prisma.slideImage.delete({
     *   where: {
     *     // ... filter to delete one SlideImage
     *   }
     * })
     * 
     */
    delete<T extends SlideImageDeleteArgs>(args: SelectSubset<T, SlideImageDeleteArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlideImage.
     * @param {SlideImageUpdateArgs} args - Arguments to update one SlideImage.
     * @example
     * // Update one SlideImage
     * const slideImage = await prisma.slideImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlideImageUpdateArgs>(args: SelectSubset<T, SlideImageUpdateArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlideImages.
     * @param {SlideImageDeleteManyArgs} args - Arguments to filter SlideImages to delete.
     * @example
     * // Delete a few SlideImages
     * const { count } = await prisma.slideImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlideImageDeleteManyArgs>(args?: SelectSubset<T, SlideImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlideImages
     * const slideImage = await prisma.slideImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlideImageUpdateManyArgs>(args: SelectSubset<T, SlideImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideImages and returns the data updated in the database.
     * @param {SlideImageUpdateManyAndReturnArgs} args - Arguments to update many SlideImages.
     * @example
     * // Update many SlideImages
     * const slideImage = await prisma.slideImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlideImages and only return the `id`
     * const slideImageWithIdOnly = await prisma.slideImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlideImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SlideImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlideImage.
     * @param {SlideImageUpsertArgs} args - Arguments to update or create a SlideImage.
     * @example
     * // Update or create a SlideImage
     * const slideImage = await prisma.slideImage.upsert({
     *   create: {
     *     // ... data to create a SlideImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlideImage we want to update
     *   }
     * })
     */
    upsert<T extends SlideImageUpsertArgs>(args: SelectSubset<T, SlideImageUpsertArgs<ExtArgs>>): Prisma__SlideImageClient<$Result.GetResult<Prisma.$SlideImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlideImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageCountArgs} args - Arguments to filter SlideImages to count.
     * @example
     * // Count the number of SlideImages
     * const count = await prisma.slideImage.count({
     *   where: {
     *     // ... the filter for the SlideImages we want to count
     *   }
     * })
    **/
    count<T extends SlideImageCountArgs>(
      args?: Subset<T, SlideImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlideImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlideImageAggregateArgs>(args: Subset<T, SlideImageAggregateArgs>): Prisma.PrismaPromise<GetSlideImageAggregateType<T>>

    /**
     * Group by SlideImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideImageGroupByArgs} args - Group by arguments.
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
      T extends SlideImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlideImageGroupByArgs['orderBy'] }
        : { orderBy?: SlideImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlideImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlideImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlideImage model
   */
  readonly fields: SlideImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlideImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlideImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SlideImage model
   */
  interface SlideImageFieldRefs {
    readonly id: FieldRef<"SlideImage", 'Int'>
    readonly imageUrl: FieldRef<"SlideImage", 'String'>
    readonly page: FieldRef<"SlideImage", 'SlideImagePage'>
    readonly placement: FieldRef<"SlideImage", 'SlideImagePlacement'>
    readonly device: FieldRef<"SlideImage", 'DeviceType'>
    readonly createdAt: FieldRef<"SlideImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlideImage findUnique
   */
  export type SlideImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter, which SlideImage to fetch.
     */
    where: SlideImageWhereUniqueInput
  }

  /**
   * SlideImage findUniqueOrThrow
   */
  export type SlideImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter, which SlideImage to fetch.
     */
    where: SlideImageWhereUniqueInput
  }

  /**
   * SlideImage findFirst
   */
  export type SlideImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter, which SlideImage to fetch.
     */
    where?: SlideImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideImages to fetch.
     */
    orderBy?: SlideImageOrderByWithRelationInput | SlideImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideImages.
     */
    cursor?: SlideImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideImages.
     */
    distinct?: SlideImageScalarFieldEnum | SlideImageScalarFieldEnum[]
  }

  /**
   * SlideImage findFirstOrThrow
   */
  export type SlideImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter, which SlideImage to fetch.
     */
    where?: SlideImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideImages to fetch.
     */
    orderBy?: SlideImageOrderByWithRelationInput | SlideImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideImages.
     */
    cursor?: SlideImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideImages.
     */
    distinct?: SlideImageScalarFieldEnum | SlideImageScalarFieldEnum[]
  }

  /**
   * SlideImage findMany
   */
  export type SlideImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter, which SlideImages to fetch.
     */
    where?: SlideImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideImages to fetch.
     */
    orderBy?: SlideImageOrderByWithRelationInput | SlideImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlideImages.
     */
    cursor?: SlideImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideImages.
     */
    skip?: number
    distinct?: SlideImageScalarFieldEnum | SlideImageScalarFieldEnum[]
  }

  /**
   * SlideImage create
   */
  export type SlideImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * The data needed to create a SlideImage.
     */
    data: XOR<SlideImageCreateInput, SlideImageUncheckedCreateInput>
  }

  /**
   * SlideImage createMany
   */
  export type SlideImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlideImages.
     */
    data: SlideImageCreateManyInput | SlideImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlideImage createManyAndReturn
   */
  export type SlideImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * The data used to create many SlideImages.
     */
    data: SlideImageCreateManyInput | SlideImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlideImage update
   */
  export type SlideImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * The data needed to update a SlideImage.
     */
    data: XOR<SlideImageUpdateInput, SlideImageUncheckedUpdateInput>
    /**
     * Choose, which SlideImage to update.
     */
    where: SlideImageWhereUniqueInput
  }

  /**
   * SlideImage updateMany
   */
  export type SlideImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlideImages.
     */
    data: XOR<SlideImageUpdateManyMutationInput, SlideImageUncheckedUpdateManyInput>
    /**
     * Filter which SlideImages to update
     */
    where?: SlideImageWhereInput
    /**
     * Limit how many SlideImages to update.
     */
    limit?: number
  }

  /**
   * SlideImage updateManyAndReturn
   */
  export type SlideImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * The data used to update SlideImages.
     */
    data: XOR<SlideImageUpdateManyMutationInput, SlideImageUncheckedUpdateManyInput>
    /**
     * Filter which SlideImages to update
     */
    where?: SlideImageWhereInput
    /**
     * Limit how many SlideImages to update.
     */
    limit?: number
  }

  /**
   * SlideImage upsert
   */
  export type SlideImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * The filter to search for the SlideImage to update in case it exists.
     */
    where: SlideImageWhereUniqueInput
    /**
     * In case the SlideImage found by the `where` argument doesn't exist, create a new SlideImage with this data.
     */
    create: XOR<SlideImageCreateInput, SlideImageUncheckedCreateInput>
    /**
     * In case the SlideImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlideImageUpdateInput, SlideImageUncheckedUpdateInput>
  }

  /**
   * SlideImage delete
   */
  export type SlideImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
    /**
     * Filter which SlideImage to delete.
     */
    where: SlideImageWhereUniqueInput
  }

  /**
   * SlideImage deleteMany
   */
  export type SlideImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideImages to delete
     */
    where?: SlideImageWhereInput
    /**
     * Limit how many SlideImages to delete.
     */
    limit?: number
  }

  /**
   * SlideImage without action
   */
  export type SlideImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideImage
     */
    select?: SlideImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideImage
     */
    omit?: SlideImageOmit<ExtArgs> | null
  }


  /**
   * Model Admin
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
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.AdminStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.AdminStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    lastLogin: number
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
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
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




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
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
    email: string
    password: string
    role: string
    status: $Enums.AdminStatus
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
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


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    subAdmins?: boolean | Admin$subAdminsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt" | "lastLogin", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subAdmins?: boolean | Admin$subAdminsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      subAdmins: Prisma.$SubAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      status: $Enums.AdminStatus
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
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
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
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
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
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
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
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
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subAdmins<T extends Admin$subAdminsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$subAdminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly status: FieldRef<"Admin", 'AdminStatus'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly lastLogin: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.subAdmins
   */
  export type Admin$subAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    where?: SubAdminWhereInput
    orderBy?: SubAdminOrderByWithRelationInput | SubAdminOrderByWithRelationInput[]
    cursor?: SubAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubAdminScalarFieldEnum | SubAdminScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model SubAdmin
   */

  export type AggregateSubAdmin = {
    _count: SubAdminCountAggregateOutputType | null
    _avg: SubAdminAvgAggregateOutputType | null
    _sum: SubAdminSumAggregateOutputType | null
    _min: SubAdminMinAggregateOutputType | null
    _max: SubAdminMaxAggregateOutputType | null
  }

  export type SubAdminAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type SubAdminSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type SubAdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.SubAdminStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    createdBy: number | null
  }

  export type SubAdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.SubAdminStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    createdBy: number | null
  }

  export type SubAdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    createdBy: number
    _all: number
  }


  export type SubAdminAvgAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type SubAdminSumAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type SubAdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    createdBy?: true
  }

  export type SubAdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    createdBy?: true
  }

  export type SubAdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    createdBy?: true
    _all?: true
  }

  export type SubAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAdmin to aggregate.
     */
    where?: SubAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdmins to fetch.
     */
    orderBy?: SubAdminOrderByWithRelationInput | SubAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubAdmins
    **/
    _count?: true | SubAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubAdminMaxAggregateInputType
  }

  export type GetSubAdminAggregateType<T extends SubAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSubAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubAdmin[P]>
      : GetScalarType<T[P], AggregateSubAdmin[P]>
  }




  export type SubAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAdminWhereInput
    orderBy?: SubAdminOrderByWithAggregationInput | SubAdminOrderByWithAggregationInput[]
    by: SubAdminScalarFieldEnum[] | SubAdminScalarFieldEnum
    having?: SubAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubAdminCountAggregateInputType | true
    _avg?: SubAdminAvgAggregateInputType
    _sum?: SubAdminSumAggregateInputType
    _min?: SubAdminMinAggregateInputType
    _max?: SubAdminMaxAggregateInputType
  }

  export type SubAdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    status: $Enums.SubAdminStatus
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    createdBy: number | null
    _count: SubAdminCountAggregateOutputType | null
    _avg: SubAdminAvgAggregateOutputType | null
    _sum: SubAdminSumAggregateOutputType | null
    _min: SubAdminMinAggregateOutputType | null
    _max: SubAdminMaxAggregateOutputType | null
  }

  type GetSubAdminGroupByPayload<T extends SubAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SubAdminGroupByOutputType[P]>
        }
      >
    >


  export type SubAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    createdBy?: boolean
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
    permissions?: boolean | SubAdmin$permissionsArgs<ExtArgs>
    _count?: boolean | SubAdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subAdmin"]>

  export type SubAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    createdBy?: boolean
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
  }, ExtArgs["result"]["subAdmin"]>

  export type SubAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    createdBy?: boolean
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
  }, ExtArgs["result"]["subAdmin"]>

  export type SubAdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    createdBy?: boolean
  }

  export type SubAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt" | "lastLogin" | "createdBy", ExtArgs["result"]["subAdmin"]>
  export type SubAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
    permissions?: boolean | SubAdmin$permissionsArgs<ExtArgs>
    _count?: boolean | SubAdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubAdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
  }
  export type SubAdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByAdmin?: boolean | SubAdmin$createdByAdminArgs<ExtArgs>
  }

  export type $SubAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubAdmin"
    objects: {
      createdByAdmin: Prisma.$AdminPayload<ExtArgs> | null
      permissions: Prisma.$SubAdminPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      status: $Enums.SubAdminStatus
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
      createdBy: number | null
    }, ExtArgs["result"]["subAdmin"]>
    composites: {}
  }

  type SubAdminGetPayload<S extends boolean | null | undefined | SubAdminDefaultArgs> = $Result.GetResult<Prisma.$SubAdminPayload, S>

  type SubAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubAdminCountAggregateInputType | true
    }

  export interface SubAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubAdmin'], meta: { name: 'SubAdmin' } }
    /**
     * Find zero or one SubAdmin that matches the filter.
     * @param {SubAdminFindUniqueArgs} args - Arguments to find a SubAdmin
     * @example
     * // Get one SubAdmin
     * const subAdmin = await prisma.subAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubAdminFindUniqueArgs>(args: SelectSubset<T, SubAdminFindUniqueArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubAdminFindUniqueOrThrowArgs} args - Arguments to find a SubAdmin
     * @example
     * // Get one SubAdmin
     * const subAdmin = await prisma.subAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SubAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminFindFirstArgs} args - Arguments to find a SubAdmin
     * @example
     * // Get one SubAdmin
     * const subAdmin = await prisma.subAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubAdminFindFirstArgs>(args?: SelectSubset<T, SubAdminFindFirstArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminFindFirstOrThrowArgs} args - Arguments to find a SubAdmin
     * @example
     * // Get one SubAdmin
     * const subAdmin = await prisma.subAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SubAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubAdmins
     * const subAdmins = await prisma.subAdmin.findMany()
     * 
     * // Get first 10 SubAdmins
     * const subAdmins = await prisma.subAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subAdminWithIdOnly = await prisma.subAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubAdminFindManyArgs>(args?: SelectSubset<T, SubAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubAdmin.
     * @param {SubAdminCreateArgs} args - Arguments to create a SubAdmin.
     * @example
     * // Create one SubAdmin
     * const SubAdmin = await prisma.subAdmin.create({
     *   data: {
     *     // ... data to create a SubAdmin
     *   }
     * })
     * 
     */
    create<T extends SubAdminCreateArgs>(args: SelectSubset<T, SubAdminCreateArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubAdmins.
     * @param {SubAdminCreateManyArgs} args - Arguments to create many SubAdmins.
     * @example
     * // Create many SubAdmins
     * const subAdmin = await prisma.subAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubAdminCreateManyArgs>(args?: SelectSubset<T, SubAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubAdmins and returns the data saved in the database.
     * @param {SubAdminCreateManyAndReturnArgs} args - Arguments to create many SubAdmins.
     * @example
     * // Create many SubAdmins
     * const subAdmin = await prisma.subAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubAdmins and only return the `id`
     * const subAdminWithIdOnly = await prisma.subAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, SubAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubAdmin.
     * @param {SubAdminDeleteArgs} args - Arguments to delete one SubAdmin.
     * @example
     * // Delete one SubAdmin
     * const SubAdmin = await prisma.subAdmin.delete({
     *   where: {
     *     // ... filter to delete one SubAdmin
     *   }
     * })
     * 
     */
    delete<T extends SubAdminDeleteArgs>(args: SelectSubset<T, SubAdminDeleteArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubAdmin.
     * @param {SubAdminUpdateArgs} args - Arguments to update one SubAdmin.
     * @example
     * // Update one SubAdmin
     * const subAdmin = await prisma.subAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubAdminUpdateArgs>(args: SelectSubset<T, SubAdminUpdateArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubAdmins.
     * @param {SubAdminDeleteManyArgs} args - Arguments to filter SubAdmins to delete.
     * @example
     * // Delete a few SubAdmins
     * const { count } = await prisma.subAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubAdminDeleteManyArgs>(args?: SelectSubset<T, SubAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubAdmins
     * const subAdmin = await prisma.subAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubAdminUpdateManyArgs>(args: SelectSubset<T, SubAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAdmins and returns the data updated in the database.
     * @param {SubAdminUpdateManyAndReturnArgs} args - Arguments to update many SubAdmins.
     * @example
     * // Update many SubAdmins
     * const subAdmin = await prisma.subAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubAdmins and only return the `id`
     * const subAdminWithIdOnly = await prisma.subAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, SubAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubAdmin.
     * @param {SubAdminUpsertArgs} args - Arguments to update or create a SubAdmin.
     * @example
     * // Update or create a SubAdmin
     * const subAdmin = await prisma.subAdmin.upsert({
     *   create: {
     *     // ... data to create a SubAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SubAdminUpsertArgs>(args: SelectSubset<T, SubAdminUpsertArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminCountArgs} args - Arguments to filter SubAdmins to count.
     * @example
     * // Count the number of SubAdmins
     * const count = await prisma.subAdmin.count({
     *   where: {
     *     // ... the filter for the SubAdmins we want to count
     *   }
     * })
    **/
    count<T extends SubAdminCountArgs>(
      args?: Subset<T, SubAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubAdminAggregateArgs>(args: Subset<T, SubAdminAggregateArgs>): Prisma.PrismaPromise<GetSubAdminAggregateType<T>>

    /**
     * Group by SubAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminGroupByArgs} args - Group by arguments.
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
      T extends SubAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubAdminGroupByArgs['orderBy'] }
        : { orderBy?: SubAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubAdmin model
   */
  readonly fields: SubAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByAdmin<T extends SubAdmin$createdByAdminArgs<ExtArgs> = {}>(args?: Subset<T, SubAdmin$createdByAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permissions<T extends SubAdmin$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, SubAdmin$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubAdmin model
   */
  interface SubAdminFieldRefs {
    readonly id: FieldRef<"SubAdmin", 'Int'>
    readonly name: FieldRef<"SubAdmin", 'String'>
    readonly email: FieldRef<"SubAdmin", 'String'>
    readonly password: FieldRef<"SubAdmin", 'String'>
    readonly role: FieldRef<"SubAdmin", 'String'>
    readonly status: FieldRef<"SubAdmin", 'SubAdminStatus'>
    readonly createdAt: FieldRef<"SubAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"SubAdmin", 'DateTime'>
    readonly lastLogin: FieldRef<"SubAdmin", 'DateTime'>
    readonly createdBy: FieldRef<"SubAdmin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubAdmin findUnique
   */
  export type SubAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter, which SubAdmin to fetch.
     */
    where: SubAdminWhereUniqueInput
  }

  /**
   * SubAdmin findUniqueOrThrow
   */
  export type SubAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter, which SubAdmin to fetch.
     */
    where: SubAdminWhereUniqueInput
  }

  /**
   * SubAdmin findFirst
   */
  export type SubAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter, which SubAdmin to fetch.
     */
    where?: SubAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdmins to fetch.
     */
    orderBy?: SubAdminOrderByWithRelationInput | SubAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAdmins.
     */
    cursor?: SubAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAdmins.
     */
    distinct?: SubAdminScalarFieldEnum | SubAdminScalarFieldEnum[]
  }

  /**
   * SubAdmin findFirstOrThrow
   */
  export type SubAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter, which SubAdmin to fetch.
     */
    where?: SubAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdmins to fetch.
     */
    orderBy?: SubAdminOrderByWithRelationInput | SubAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAdmins.
     */
    cursor?: SubAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAdmins.
     */
    distinct?: SubAdminScalarFieldEnum | SubAdminScalarFieldEnum[]
  }

  /**
   * SubAdmin findMany
   */
  export type SubAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter, which SubAdmins to fetch.
     */
    where?: SubAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdmins to fetch.
     */
    orderBy?: SubAdminOrderByWithRelationInput | SubAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubAdmins.
     */
    cursor?: SubAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdmins.
     */
    skip?: number
    distinct?: SubAdminScalarFieldEnum | SubAdminScalarFieldEnum[]
  }

  /**
   * SubAdmin create
   */
  export type SubAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a SubAdmin.
     */
    data: XOR<SubAdminCreateInput, SubAdminUncheckedCreateInput>
  }

  /**
   * SubAdmin createMany
   */
  export type SubAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubAdmins.
     */
    data: SubAdminCreateManyInput | SubAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubAdmin createManyAndReturn
   */
  export type SubAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * The data used to create many SubAdmins.
     */
    data: SubAdminCreateManyInput | SubAdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubAdmin update
   */
  export type SubAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a SubAdmin.
     */
    data: XOR<SubAdminUpdateInput, SubAdminUncheckedUpdateInput>
    /**
     * Choose, which SubAdmin to update.
     */
    where: SubAdminWhereUniqueInput
  }

  /**
   * SubAdmin updateMany
   */
  export type SubAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubAdmins.
     */
    data: XOR<SubAdminUpdateManyMutationInput, SubAdminUncheckedUpdateManyInput>
    /**
     * Filter which SubAdmins to update
     */
    where?: SubAdminWhereInput
    /**
     * Limit how many SubAdmins to update.
     */
    limit?: number
  }

  /**
   * SubAdmin updateManyAndReturn
   */
  export type SubAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * The data used to update SubAdmins.
     */
    data: XOR<SubAdminUpdateManyMutationInput, SubAdminUncheckedUpdateManyInput>
    /**
     * Filter which SubAdmins to update
     */
    where?: SubAdminWhereInput
    /**
     * Limit how many SubAdmins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubAdmin upsert
   */
  export type SubAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the SubAdmin to update in case it exists.
     */
    where: SubAdminWhereUniqueInput
    /**
     * In case the SubAdmin found by the `where` argument doesn't exist, create a new SubAdmin with this data.
     */
    create: XOR<SubAdminCreateInput, SubAdminUncheckedCreateInput>
    /**
     * In case the SubAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubAdminUpdateInput, SubAdminUncheckedUpdateInput>
  }

  /**
   * SubAdmin delete
   */
  export type SubAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
    /**
     * Filter which SubAdmin to delete.
     */
    where: SubAdminWhereUniqueInput
  }

  /**
   * SubAdmin deleteMany
   */
  export type SubAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAdmins to delete
     */
    where?: SubAdminWhereInput
    /**
     * Limit how many SubAdmins to delete.
     */
    limit?: number
  }

  /**
   * SubAdmin.createdByAdmin
   */
  export type SubAdmin$createdByAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * SubAdmin.permissions
   */
  export type SubAdmin$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    where?: SubAdminPermissionWhereInput
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    cursor?: SubAdminPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubAdminPermissionScalarFieldEnum | SubAdminPermissionScalarFieldEnum[]
  }

  /**
   * SubAdmin without action
   */
  export type SubAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdmin
     */
    select?: SubAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdmin
     */
    omit?: SubAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    module: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    module: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    module: number
    description: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    module?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    module?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    module?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    module: string
    description: string | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    module?: boolean
    description?: boolean
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    subAdminPermissions?: boolean | Permission$subAdminPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    module?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    module?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    module?: boolean
    description?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "module" | "description", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    subAdminPermissions?: boolean | Permission$subAdminPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      subAdminPermissions: Prisma.$SubAdminPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      module: string
      description: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends Permission$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subAdminPermissions<T extends Permission$subAdminPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$subAdminPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly module: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.rolePermissions
   */
  export type Permission$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission.subAdminPermissions
   */
  export type Permission$subAdminPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    where?: SubAdminPermissionWhereInput
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    cursor?: SubAdminPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubAdminPermissionScalarFieldEnum | SubAdminPermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    canView: boolean | null
    canCreate: boolean | null
    canEdit: boolean | null
    canDelete: boolean | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
    canView: boolean | null
    canCreate: boolean | null
    canEdit: boolean | null
    canDelete: boolean | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    canView: number
    canCreate: number
    canEdit: number
    canDelete: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    canView: boolean
    canCreate: boolean
    canEdit: boolean
    canDelete: boolean
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId" | "canView" | "canCreate" | "canEdit" | "canDelete", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
      canView: boolean
      canCreate: boolean
      canEdit: boolean
      canDelete: boolean
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
    readonly canView: FieldRef<"RolePermission", 'Boolean'>
    readonly canCreate: FieldRef<"RolePermission", 'Boolean'>
    readonly canEdit: FieldRef<"RolePermission", 'Boolean'>
    readonly canDelete: FieldRef<"RolePermission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model SubAdminPermission
   */

  export type AggregateSubAdminPermission = {
    _count: SubAdminPermissionCountAggregateOutputType | null
    _avg: SubAdminPermissionAvgAggregateOutputType | null
    _sum: SubAdminPermissionSumAggregateOutputType | null
    _min: SubAdminPermissionMinAggregateOutputType | null
    _max: SubAdminPermissionMaxAggregateOutputType | null
  }

  export type SubAdminPermissionAvgAggregateOutputType = {
    id: number | null
    subAdminId: number | null
    permissionId: number | null
  }

  export type SubAdminPermissionSumAggregateOutputType = {
    id: number | null
    subAdminId: number | null
    permissionId: number | null
  }

  export type SubAdminPermissionMinAggregateOutputType = {
    id: number | null
    subAdminId: number | null
    permissionId: number | null
    canView: boolean | null
    canCreate: boolean | null
    canEdit: boolean | null
    canDelete: boolean | null
  }

  export type SubAdminPermissionMaxAggregateOutputType = {
    id: number | null
    subAdminId: number | null
    permissionId: number | null
    canView: boolean | null
    canCreate: boolean | null
    canEdit: boolean | null
    canDelete: boolean | null
  }

  export type SubAdminPermissionCountAggregateOutputType = {
    id: number
    subAdminId: number
    permissionId: number
    canView: number
    canCreate: number
    canEdit: number
    canDelete: number
    _all: number
  }


  export type SubAdminPermissionAvgAggregateInputType = {
    id?: true
    subAdminId?: true
    permissionId?: true
  }

  export type SubAdminPermissionSumAggregateInputType = {
    id?: true
    subAdminId?: true
    permissionId?: true
  }

  export type SubAdminPermissionMinAggregateInputType = {
    id?: true
    subAdminId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
  }

  export type SubAdminPermissionMaxAggregateInputType = {
    id?: true
    subAdminId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
  }

  export type SubAdminPermissionCountAggregateInputType = {
    id?: true
    subAdminId?: true
    permissionId?: true
    canView?: true
    canCreate?: true
    canEdit?: true
    canDelete?: true
    _all?: true
  }

  export type SubAdminPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAdminPermission to aggregate.
     */
    where?: SubAdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdminPermissions to fetch.
     */
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubAdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubAdminPermissions
    **/
    _count?: true | SubAdminPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubAdminPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubAdminPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubAdminPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubAdminPermissionMaxAggregateInputType
  }

  export type GetSubAdminPermissionAggregateType<T extends SubAdminPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubAdminPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubAdminPermission[P]>
      : GetScalarType<T[P], AggregateSubAdminPermission[P]>
  }




  export type SubAdminPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAdminPermissionWhereInput
    orderBy?: SubAdminPermissionOrderByWithAggregationInput | SubAdminPermissionOrderByWithAggregationInput[]
    by: SubAdminPermissionScalarFieldEnum[] | SubAdminPermissionScalarFieldEnum
    having?: SubAdminPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubAdminPermissionCountAggregateInputType | true
    _avg?: SubAdminPermissionAvgAggregateInputType
    _sum?: SubAdminPermissionSumAggregateInputType
    _min?: SubAdminPermissionMinAggregateInputType
    _max?: SubAdminPermissionMaxAggregateInputType
  }

  export type SubAdminPermissionGroupByOutputType = {
    id: number
    subAdminId: number
    permissionId: number
    canView: boolean
    canCreate: boolean
    canEdit: boolean
    canDelete: boolean
    _count: SubAdminPermissionCountAggregateOutputType | null
    _avg: SubAdminPermissionAvgAggregateOutputType | null
    _sum: SubAdminPermissionSumAggregateOutputType | null
    _min: SubAdminPermissionMinAggregateOutputType | null
    _max: SubAdminPermissionMaxAggregateOutputType | null
  }

  type GetSubAdminPermissionGroupByPayload<T extends SubAdminPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubAdminPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubAdminPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubAdminPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubAdminPermissionGroupByOutputType[P]>
        }
      >
    >


  export type SubAdminPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subAdminId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subAdminPermission"]>

  export type SubAdminPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subAdminId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subAdminPermission"]>

  export type SubAdminPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subAdminId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subAdminPermission"]>

  export type SubAdminPermissionSelectScalar = {
    id?: boolean
    subAdminId?: boolean
    permissionId?: boolean
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subAdminId" | "permissionId" | "canView" | "canCreate" | "canEdit" | "canDelete", ExtArgs["result"]["subAdminPermission"]>
  export type SubAdminPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type SubAdminPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type SubAdminPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subAdmin?: boolean | SubAdminDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $SubAdminPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubAdminPermission"
    objects: {
      subAdmin: Prisma.$SubAdminPayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subAdminId: number
      permissionId: number
      canView: boolean
      canCreate: boolean
      canEdit: boolean
      canDelete: boolean
    }, ExtArgs["result"]["subAdminPermission"]>
    composites: {}
  }

  type SubAdminPermissionGetPayload<S extends boolean | null | undefined | SubAdminPermissionDefaultArgs> = $Result.GetResult<Prisma.$SubAdminPermissionPayload, S>

  type SubAdminPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubAdminPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubAdminPermissionCountAggregateInputType | true
    }

  export interface SubAdminPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubAdminPermission'], meta: { name: 'SubAdminPermission' } }
    /**
     * Find zero or one SubAdminPermission that matches the filter.
     * @param {SubAdminPermissionFindUniqueArgs} args - Arguments to find a SubAdminPermission
     * @example
     * // Get one SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubAdminPermissionFindUniqueArgs>(args: SelectSubset<T, SubAdminPermissionFindUniqueArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubAdminPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubAdminPermissionFindUniqueOrThrowArgs} args - Arguments to find a SubAdminPermission
     * @example
     * // Get one SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubAdminPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubAdminPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAdminPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionFindFirstArgs} args - Arguments to find a SubAdminPermission
     * @example
     * // Get one SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubAdminPermissionFindFirstArgs>(args?: SelectSubset<T, SubAdminPermissionFindFirstArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAdminPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionFindFirstOrThrowArgs} args - Arguments to find a SubAdminPermission
     * @example
     * // Get one SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubAdminPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubAdminPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubAdminPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubAdminPermissions
     * const subAdminPermissions = await prisma.subAdminPermission.findMany()
     * 
     * // Get first 10 SubAdminPermissions
     * const subAdminPermissions = await prisma.subAdminPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subAdminPermissionWithIdOnly = await prisma.subAdminPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubAdminPermissionFindManyArgs>(args?: SelectSubset<T, SubAdminPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubAdminPermission.
     * @param {SubAdminPermissionCreateArgs} args - Arguments to create a SubAdminPermission.
     * @example
     * // Create one SubAdminPermission
     * const SubAdminPermission = await prisma.subAdminPermission.create({
     *   data: {
     *     // ... data to create a SubAdminPermission
     *   }
     * })
     * 
     */
    create<T extends SubAdminPermissionCreateArgs>(args: SelectSubset<T, SubAdminPermissionCreateArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubAdminPermissions.
     * @param {SubAdminPermissionCreateManyArgs} args - Arguments to create many SubAdminPermissions.
     * @example
     * // Create many SubAdminPermissions
     * const subAdminPermission = await prisma.subAdminPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubAdminPermissionCreateManyArgs>(args?: SelectSubset<T, SubAdminPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubAdminPermissions and returns the data saved in the database.
     * @param {SubAdminPermissionCreateManyAndReturnArgs} args - Arguments to create many SubAdminPermissions.
     * @example
     * // Create many SubAdminPermissions
     * const subAdminPermission = await prisma.subAdminPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubAdminPermissions and only return the `id`
     * const subAdminPermissionWithIdOnly = await prisma.subAdminPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubAdminPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubAdminPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubAdminPermission.
     * @param {SubAdminPermissionDeleteArgs} args - Arguments to delete one SubAdminPermission.
     * @example
     * // Delete one SubAdminPermission
     * const SubAdminPermission = await prisma.subAdminPermission.delete({
     *   where: {
     *     // ... filter to delete one SubAdminPermission
     *   }
     * })
     * 
     */
    delete<T extends SubAdminPermissionDeleteArgs>(args: SelectSubset<T, SubAdminPermissionDeleteArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubAdminPermission.
     * @param {SubAdminPermissionUpdateArgs} args - Arguments to update one SubAdminPermission.
     * @example
     * // Update one SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubAdminPermissionUpdateArgs>(args: SelectSubset<T, SubAdminPermissionUpdateArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubAdminPermissions.
     * @param {SubAdminPermissionDeleteManyArgs} args - Arguments to filter SubAdminPermissions to delete.
     * @example
     * // Delete a few SubAdminPermissions
     * const { count } = await prisma.subAdminPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubAdminPermissionDeleteManyArgs>(args?: SelectSubset<T, SubAdminPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAdminPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubAdminPermissions
     * const subAdminPermission = await prisma.subAdminPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubAdminPermissionUpdateManyArgs>(args: SelectSubset<T, SubAdminPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAdminPermissions and returns the data updated in the database.
     * @param {SubAdminPermissionUpdateManyAndReturnArgs} args - Arguments to update many SubAdminPermissions.
     * @example
     * // Update many SubAdminPermissions
     * const subAdminPermission = await prisma.subAdminPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubAdminPermissions and only return the `id`
     * const subAdminPermissionWithIdOnly = await prisma.subAdminPermission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubAdminPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubAdminPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubAdminPermission.
     * @param {SubAdminPermissionUpsertArgs} args - Arguments to update or create a SubAdminPermission.
     * @example
     * // Update or create a SubAdminPermission
     * const subAdminPermission = await prisma.subAdminPermission.upsert({
     *   create: {
     *     // ... data to create a SubAdminPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubAdminPermission we want to update
     *   }
     * })
     */
    upsert<T extends SubAdminPermissionUpsertArgs>(args: SelectSubset<T, SubAdminPermissionUpsertArgs<ExtArgs>>): Prisma__SubAdminPermissionClient<$Result.GetResult<Prisma.$SubAdminPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubAdminPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionCountArgs} args - Arguments to filter SubAdminPermissions to count.
     * @example
     * // Count the number of SubAdminPermissions
     * const count = await prisma.subAdminPermission.count({
     *   where: {
     *     // ... the filter for the SubAdminPermissions we want to count
     *   }
     * })
    **/
    count<T extends SubAdminPermissionCountArgs>(
      args?: Subset<T, SubAdminPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubAdminPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubAdminPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubAdminPermissionAggregateArgs>(args: Subset<T, SubAdminPermissionAggregateArgs>): Prisma.PrismaPromise<GetSubAdminPermissionAggregateType<T>>

    /**
     * Group by SubAdminPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAdminPermissionGroupByArgs} args - Group by arguments.
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
      T extends SubAdminPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubAdminPermissionGroupByArgs['orderBy'] }
        : { orderBy?: SubAdminPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubAdminPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubAdminPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubAdminPermission model
   */
  readonly fields: SubAdminPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubAdminPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubAdminPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subAdmin<T extends SubAdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubAdminDefaultArgs<ExtArgs>>): Prisma__SubAdminClient<$Result.GetResult<Prisma.$SubAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubAdminPermission model
   */
  interface SubAdminPermissionFieldRefs {
    readonly id: FieldRef<"SubAdminPermission", 'Int'>
    readonly subAdminId: FieldRef<"SubAdminPermission", 'Int'>
    readonly permissionId: FieldRef<"SubAdminPermission", 'Int'>
    readonly canView: FieldRef<"SubAdminPermission", 'Boolean'>
    readonly canCreate: FieldRef<"SubAdminPermission", 'Boolean'>
    readonly canEdit: FieldRef<"SubAdminPermission", 'Boolean'>
    readonly canDelete: FieldRef<"SubAdminPermission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SubAdminPermission findUnique
   */
  export type SubAdminPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which SubAdminPermission to fetch.
     */
    where: SubAdminPermissionWhereUniqueInput
  }

  /**
   * SubAdminPermission findUniqueOrThrow
   */
  export type SubAdminPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which SubAdminPermission to fetch.
     */
    where: SubAdminPermissionWhereUniqueInput
  }

  /**
   * SubAdminPermission findFirst
   */
  export type SubAdminPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which SubAdminPermission to fetch.
     */
    where?: SubAdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdminPermissions to fetch.
     */
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAdminPermissions.
     */
    cursor?: SubAdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAdminPermissions.
     */
    distinct?: SubAdminPermissionScalarFieldEnum | SubAdminPermissionScalarFieldEnum[]
  }

  /**
   * SubAdminPermission findFirstOrThrow
   */
  export type SubAdminPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which SubAdminPermission to fetch.
     */
    where?: SubAdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdminPermissions to fetch.
     */
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAdminPermissions.
     */
    cursor?: SubAdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdminPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAdminPermissions.
     */
    distinct?: SubAdminPermissionScalarFieldEnum | SubAdminPermissionScalarFieldEnum[]
  }

  /**
   * SubAdminPermission findMany
   */
  export type SubAdminPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter, which SubAdminPermissions to fetch.
     */
    where?: SubAdminPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAdminPermissions to fetch.
     */
    orderBy?: SubAdminPermissionOrderByWithRelationInput | SubAdminPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubAdminPermissions.
     */
    cursor?: SubAdminPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAdminPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAdminPermissions.
     */
    skip?: number
    distinct?: SubAdminPermissionScalarFieldEnum | SubAdminPermissionScalarFieldEnum[]
  }

  /**
   * SubAdminPermission create
   */
  export type SubAdminPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a SubAdminPermission.
     */
    data: XOR<SubAdminPermissionCreateInput, SubAdminPermissionUncheckedCreateInput>
  }

  /**
   * SubAdminPermission createMany
   */
  export type SubAdminPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubAdminPermissions.
     */
    data: SubAdminPermissionCreateManyInput | SubAdminPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubAdminPermission createManyAndReturn
   */
  export type SubAdminPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many SubAdminPermissions.
     */
    data: SubAdminPermissionCreateManyInput | SubAdminPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubAdminPermission update
   */
  export type SubAdminPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a SubAdminPermission.
     */
    data: XOR<SubAdminPermissionUpdateInput, SubAdminPermissionUncheckedUpdateInput>
    /**
     * Choose, which SubAdminPermission to update.
     */
    where: SubAdminPermissionWhereUniqueInput
  }

  /**
   * SubAdminPermission updateMany
   */
  export type SubAdminPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubAdminPermissions.
     */
    data: XOR<SubAdminPermissionUpdateManyMutationInput, SubAdminPermissionUncheckedUpdateManyInput>
    /**
     * Filter which SubAdminPermissions to update
     */
    where?: SubAdminPermissionWhereInput
    /**
     * Limit how many SubAdminPermissions to update.
     */
    limit?: number
  }

  /**
   * SubAdminPermission updateManyAndReturn
   */
  export type SubAdminPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * The data used to update SubAdminPermissions.
     */
    data: XOR<SubAdminPermissionUpdateManyMutationInput, SubAdminPermissionUncheckedUpdateManyInput>
    /**
     * Filter which SubAdminPermissions to update
     */
    where?: SubAdminPermissionWhereInput
    /**
     * Limit how many SubAdminPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubAdminPermission upsert
   */
  export type SubAdminPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the SubAdminPermission to update in case it exists.
     */
    where: SubAdminPermissionWhereUniqueInput
    /**
     * In case the SubAdminPermission found by the `where` argument doesn't exist, create a new SubAdminPermission with this data.
     */
    create: XOR<SubAdminPermissionCreateInput, SubAdminPermissionUncheckedCreateInput>
    /**
     * In case the SubAdminPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubAdminPermissionUpdateInput, SubAdminPermissionUncheckedUpdateInput>
  }

  /**
   * SubAdminPermission delete
   */
  export type SubAdminPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
    /**
     * Filter which SubAdminPermission to delete.
     */
    where: SubAdminPermissionWhereUniqueInput
  }

  /**
   * SubAdminPermission deleteMany
   */
  export type SubAdminPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAdminPermissions to delete
     */
    where?: SubAdminPermissionWhereInput
    /**
     * Limit how many SubAdminPermissions to delete.
     */
    limit?: number
  }

  /**
   * SubAdminPermission without action
   */
  export type SubAdminPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAdminPermission
     */
    select?: SubAdminPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAdminPermission
     */
    omit?: SubAdminPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAdminPermissionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    status: 'status',
    phone_number: 'phone_number',
    user_code: 'user_code',
    recovery_code: 'recovery_code',
    password: 'password',
    fp_id: 'fp_id',
    ip: 'ip',
    balance: 'balance',
    turn_over: 'turn_over',
    invited_by: 'invited_by',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpRecordScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    otp: 'otp',
    valid: 'valid',
    createdAt: 'createdAt'
  };

  export type OtpRecordScalarFieldEnum = (typeof OtpRecordScalarFieldEnum)[keyof typeof OtpRecordScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    trx_id: 'trx_id',
    sign: 'sign',
    status: 'status',
    user_id: 'user_id',
    method: 'method',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const GameTransactionScalarFieldEnum: {
    id: 'id',
    trans_id: 'trans_id',
    type: 'type',
    amount: 'amount',
    game_code: 'game_code',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameTransactionScalarFieldEnum = (typeof GameTransactionScalarFieldEnum)[keyof typeof GameTransactionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    sender: 'sender',
    receiver: 'receiver',
    content: 'content',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    seen: 'seen'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    code: 'code',
    amount: 'amount',
    collected: 'collected',
    collected_at: 'collected_at',
    message: 'message',
    collected_by: 'collected_by',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const SlideImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    page: 'page',
    placement: 'placement',
    device: 'device',
    createdAt: 'createdAt'
  };

  export type SlideImageScalarFieldEnum = (typeof SlideImageScalarFieldEnum)[keyof typeof SlideImageScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SubAdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    createdBy: 'createdBy'
  };

  export type SubAdminScalarFieldEnum = (typeof SubAdminScalarFieldEnum)[keyof typeof SubAdminScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    module: 'module',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    canView: 'canView',
    canCreate: 'canCreate',
    canEdit: 'canEdit',
    canDelete: 'canDelete'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const SubAdminPermissionScalarFieldEnum: {
    id: 'id',
    subAdminId: 'subAdminId',
    permissionId: 'permissionId',
    canView: 'canView',
    canCreate: 'canCreate',
    canEdit: 'canEdit',
    canDelete: 'canDelete'
  };

  export type SubAdminPermissionScalarFieldEnum = (typeof SubAdminPermissionScalarFieldEnum)[keyof typeof SubAdminPermissionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'SlideImagePage'
   */
  export type EnumSlideImagePageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlideImagePage'>
    


  /**
   * Reference to a field of type 'SlideImagePage[]'
   */
  export type ListEnumSlideImagePageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlideImagePage[]'>
    


  /**
   * Reference to a field of type 'SlideImagePlacement'
   */
  export type EnumSlideImagePlacementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlideImagePlacement'>
    


  /**
   * Reference to a field of type 'SlideImagePlacement[]'
   */
  export type ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlideImagePlacement[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'AdminStatus'
   */
  export type EnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus'>
    


  /**
   * Reference to a field of type 'AdminStatus[]'
   */
  export type ListEnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus[]'>
    


  /**
   * Reference to a field of type 'SubAdminStatus'
   */
  export type EnumSubAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubAdminStatus'>
    


  /**
   * Reference to a field of type 'SubAdminStatus[]'
   */
  export type ListEnumSubAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubAdminStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    status?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    user_code?: StringNullableFilter<"User"> | string | null
    recovery_code?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    fp_id?: StringFilter<"User"> | string
    ip?: StringFilter<"User"> | string
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    game_transactions?: GameTransactionListRelationFilter
    transactions?: TransactionListRelationFilter
    otp_records?: OtpRecordListRelationFilter
    vouchers?: VoucherListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    user_code?: SortOrderInput | SortOrder
    recovery_code?: SortOrderInput | SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game_transactions?: GameTransactionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    otp_records?: OtpRecordOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    status?: StringFilter<"User"> | string
    user_code?: StringNullableFilter<"User"> | string | null
    recovery_code?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    fp_id?: StringFilter<"User"> | string
    ip?: StringFilter<"User"> | string
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    game_transactions?: GameTransactionListRelationFilter
    transactions?: TransactionListRelationFilter
    otp_records?: OtpRecordListRelationFilter
    vouchers?: VoucherListRelationFilter
  }, "id" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    user_code?: SortOrderInput | SortOrder
    recovery_code?: SortOrderInput | SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    status?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    user_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    recovery_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    fp_id?: StringWithAggregatesFilter<"User"> | string
    ip?: StringWithAggregatesFilter<"User"> | string
    balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpRecordWhereInput = {
    AND?: OtpRecordWhereInput | OtpRecordWhereInput[]
    OR?: OtpRecordWhereInput[]
    NOT?: OtpRecordWhereInput | OtpRecordWhereInput[]
    id?: IntFilter<"OtpRecord"> | number
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    valid?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpRecordOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtpRecordWhereInput | OtpRecordWhereInput[]
    OR?: OtpRecordWhereInput[]
    NOT?: OtpRecordWhereInput | OtpRecordWhereInput[]
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    valid?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OtpRecordOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    _count?: OtpRecordCountOrderByAggregateInput
    _avg?: OtpRecordAvgOrderByAggregateInput
    _max?: OtpRecordMaxOrderByAggregateInput
    _min?: OtpRecordMinOrderByAggregateInput
    _sum?: OtpRecordSumOrderByAggregateInput
  }

  export type OtpRecordScalarWhereWithAggregatesInput = {
    AND?: OtpRecordScalarWhereWithAggregatesInput | OtpRecordScalarWhereWithAggregatesInput[]
    OR?: OtpRecordScalarWhereWithAggregatesInput[]
    NOT?: OtpRecordScalarWhereWithAggregatesInput | OtpRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtpRecord"> | number
    phone?: StringWithAggregatesFilter<"OtpRecord"> | string
    otp?: StringWithAggregatesFilter<"OtpRecord"> | string
    valid?: BoolWithAggregatesFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpRecord"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrderInput | SortOrder
    sign?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrderInput | SortOrder
    sign?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    sign?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntWithAggregatesFilter<"Transaction"> | number
    method?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type GameTransactionWhereInput = {
    AND?: GameTransactionWhereInput | GameTransactionWhereInput[]
    OR?: GameTransactionWhereInput[]
    NOT?: GameTransactionWhereInput | GameTransactionWhereInput[]
    id?: IntFilter<"GameTransaction"> | number
    trans_id?: StringFilter<"GameTransaction"> | string
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameTransactionOrderByWithRelationInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GameTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trans_id?: string
    AND?: GameTransactionWhereInput | GameTransactionWhereInput[]
    OR?: GameTransactionWhereInput[]
    NOT?: GameTransactionWhereInput | GameTransactionWhereInput[]
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "trans_id">

  export type GameTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameTransactionCountOrderByAggregateInput
    _avg?: GameTransactionAvgOrderByAggregateInput
    _max?: GameTransactionMaxOrderByAggregateInput
    _min?: GameTransactionMinOrderByAggregateInput
    _sum?: GameTransactionSumOrderByAggregateInput
  }

  export type GameTransactionScalarWhereWithAggregatesInput = {
    AND?: GameTransactionScalarWhereWithAggregatesInput | GameTransactionScalarWhereWithAggregatesInput[]
    OR?: GameTransactionScalarWhereWithAggregatesInput[]
    NOT?: GameTransactionScalarWhereWithAggregatesInput | GameTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameTransaction"> | number
    trans_id?: StringWithAggregatesFilter<"GameTransaction"> | string
    type?: StringWithAggregatesFilter<"GameTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableWithAggregatesFilter<"GameTransaction"> | string | null
    user_id?: IntWithAggregatesFilter<"GameTransaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameTransaction"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    sender?: StringFilter<"Message"> | string
    receiver?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    sender?: StringFilter<"Message"> | string
    receiver?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    sender?: StringWithAggregatesFilter<"Message"> | string
    receiver?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    seen?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    collected_by?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    collected_by?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Voucher"> | number
    code?: StringWithAggregatesFilter<"Voucher"> | string
    amount?: DecimalWithAggregatesFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolWithAggregatesFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    message?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    collected_by?: IntNullableWithAggregatesFilter<"Voucher"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
  }

  export type SlideImageWhereInput = {
    AND?: SlideImageWhereInput | SlideImageWhereInput[]
    OR?: SlideImageWhereInput[]
    NOT?: SlideImageWhereInput | SlideImageWhereInput[]
    id?: IntFilter<"SlideImage"> | number
    imageUrl?: StringFilter<"SlideImage"> | string
    page?: EnumSlideImagePageFilter<"SlideImage"> | $Enums.SlideImagePage
    placement?: EnumSlideImagePlacementNullableFilter<"SlideImage"> | $Enums.SlideImagePlacement | null
    device?: EnumDeviceTypeNullableFilter<"SlideImage"> | $Enums.DeviceType | null
    createdAt?: DateTimeFilter<"SlideImage"> | Date | string
  }

  export type SlideImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    page?: SortOrder
    placement?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SlideImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SlideImageWhereInput | SlideImageWhereInput[]
    OR?: SlideImageWhereInput[]
    NOT?: SlideImageWhereInput | SlideImageWhereInput[]
    imageUrl?: StringFilter<"SlideImage"> | string
    page?: EnumSlideImagePageFilter<"SlideImage"> | $Enums.SlideImagePage
    placement?: EnumSlideImagePlacementNullableFilter<"SlideImage"> | $Enums.SlideImagePlacement | null
    device?: EnumDeviceTypeNullableFilter<"SlideImage"> | $Enums.DeviceType | null
    createdAt?: DateTimeFilter<"SlideImage"> | Date | string
  }, "id">

  export type SlideImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    page?: SortOrder
    placement?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SlideImageCountOrderByAggregateInput
    _avg?: SlideImageAvgOrderByAggregateInput
    _max?: SlideImageMaxOrderByAggregateInput
    _min?: SlideImageMinOrderByAggregateInput
    _sum?: SlideImageSumOrderByAggregateInput
  }

  export type SlideImageScalarWhereWithAggregatesInput = {
    AND?: SlideImageScalarWhereWithAggregatesInput | SlideImageScalarWhereWithAggregatesInput[]
    OR?: SlideImageScalarWhereWithAggregatesInput[]
    NOT?: SlideImageScalarWhereWithAggregatesInput | SlideImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SlideImage"> | number
    imageUrl?: StringWithAggregatesFilter<"SlideImage"> | string
    page?: EnumSlideImagePageWithAggregatesFilter<"SlideImage"> | $Enums.SlideImagePage
    placement?: EnumSlideImagePlacementNullableWithAggregatesFilter<"SlideImage"> | $Enums.SlideImagePlacement | null
    device?: EnumDeviceTypeNullableWithAggregatesFilter<"SlideImage"> | $Enums.DeviceType | null
    createdAt?: DateTimeWithAggregatesFilter<"SlideImage"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Admin"> | Date | string | null
    subAdmins?: SubAdminListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    subAdmins?: SubAdminOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Admin"> | Date | string | null
    subAdmins?: SubAdminListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    status?: EnumAdminStatusWithAggregatesFilter<"Admin"> | $Enums.AdminStatus
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type SubAdminWhereInput = {
    AND?: SubAdminWhereInput | SubAdminWhereInput[]
    OR?: SubAdminWhereInput[]
    NOT?: SubAdminWhereInput | SubAdminWhereInput[]
    id?: IntFilter<"SubAdmin"> | number
    name?: StringFilter<"SubAdmin"> | string
    email?: StringFilter<"SubAdmin"> | string
    password?: StringFilter<"SubAdmin"> | string
    role?: StringFilter<"SubAdmin"> | string
    status?: EnumSubAdminStatusFilter<"SubAdmin"> | $Enums.SubAdminStatus
    createdAt?: DateTimeFilter<"SubAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SubAdmin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"SubAdmin"> | Date | string | null
    createdBy?: IntNullableFilter<"SubAdmin"> | number | null
    createdByAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    permissions?: SubAdminPermissionListRelationFilter
  }

  export type SubAdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdByAdmin?: AdminOrderByWithRelationInput
    permissions?: SubAdminPermissionOrderByRelationAggregateInput
  }

  export type SubAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SubAdminWhereInput | SubAdminWhereInput[]
    OR?: SubAdminWhereInput[]
    NOT?: SubAdminWhereInput | SubAdminWhereInput[]
    name?: StringFilter<"SubAdmin"> | string
    password?: StringFilter<"SubAdmin"> | string
    role?: StringFilter<"SubAdmin"> | string
    status?: EnumSubAdminStatusFilter<"SubAdmin"> | $Enums.SubAdminStatus
    createdAt?: DateTimeFilter<"SubAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SubAdmin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"SubAdmin"> | Date | string | null
    createdBy?: IntNullableFilter<"SubAdmin"> | number | null
    createdByAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    permissions?: SubAdminPermissionListRelationFilter
  }, "id" | "email">

  export type SubAdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: SubAdminCountOrderByAggregateInput
    _avg?: SubAdminAvgOrderByAggregateInput
    _max?: SubAdminMaxOrderByAggregateInput
    _min?: SubAdminMinOrderByAggregateInput
    _sum?: SubAdminSumOrderByAggregateInput
  }

  export type SubAdminScalarWhereWithAggregatesInput = {
    AND?: SubAdminScalarWhereWithAggregatesInput | SubAdminScalarWhereWithAggregatesInput[]
    OR?: SubAdminScalarWhereWithAggregatesInput[]
    NOT?: SubAdminScalarWhereWithAggregatesInput | SubAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubAdmin"> | number
    name?: StringWithAggregatesFilter<"SubAdmin"> | string
    email?: StringWithAggregatesFilter<"SubAdmin"> | string
    password?: StringWithAggregatesFilter<"SubAdmin"> | string
    role?: StringWithAggregatesFilter<"SubAdmin"> | string
    status?: EnumSubAdminStatusWithAggregatesFilter<"SubAdmin"> | $Enums.SubAdminStatus
    createdAt?: DateTimeWithAggregatesFilter<"SubAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubAdmin"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"SubAdmin"> | Date | string | null
    createdBy?: IntNullableWithAggregatesFilter<"SubAdmin"> | number | null
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    module?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
    subAdminPermissions?: SubAdminPermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
    subAdminPermissions?: SubAdminPermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    module?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
    subAdminPermissions?: SubAdminPermissionListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
    module?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    canView?: BoolFilter<"RolePermission"> | boolean
    canCreate?: BoolFilter<"RolePermission"> | boolean
    canEdit?: BoolFilter<"RolePermission"> | boolean
    canDelete?: BoolFilter<"RolePermission"> | boolean
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    canView?: BoolFilter<"RolePermission"> | boolean
    canCreate?: BoolFilter<"RolePermission"> | boolean
    canEdit?: BoolFilter<"RolePermission"> | boolean
    canDelete?: BoolFilter<"RolePermission"> | boolean
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
    canView?: BoolWithAggregatesFilter<"RolePermission"> | boolean
    canCreate?: BoolWithAggregatesFilter<"RolePermission"> | boolean
    canEdit?: BoolWithAggregatesFilter<"RolePermission"> | boolean
    canDelete?: BoolWithAggregatesFilter<"RolePermission"> | boolean
  }

  export type SubAdminPermissionWhereInput = {
    AND?: SubAdminPermissionWhereInput | SubAdminPermissionWhereInput[]
    OR?: SubAdminPermissionWhereInput[]
    NOT?: SubAdminPermissionWhereInput | SubAdminPermissionWhereInput[]
    id?: IntFilter<"SubAdminPermission"> | number
    subAdminId?: IntFilter<"SubAdminPermission"> | number
    permissionId?: IntFilter<"SubAdminPermission"> | number
    canView?: BoolFilter<"SubAdminPermission"> | boolean
    canCreate?: BoolFilter<"SubAdminPermission"> | boolean
    canEdit?: BoolFilter<"SubAdminPermission"> | boolean
    canDelete?: BoolFilter<"SubAdminPermission"> | boolean
    subAdmin?: XOR<SubAdminScalarRelationFilter, SubAdminWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type SubAdminPermissionOrderByWithRelationInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
    subAdmin?: SubAdminOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type SubAdminPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    subAdminId_permissionId?: SubAdminPermissionSubAdminIdPermissionIdCompoundUniqueInput
    AND?: SubAdminPermissionWhereInput | SubAdminPermissionWhereInput[]
    OR?: SubAdminPermissionWhereInput[]
    NOT?: SubAdminPermissionWhereInput | SubAdminPermissionWhereInput[]
    subAdminId?: IntFilter<"SubAdminPermission"> | number
    permissionId?: IntFilter<"SubAdminPermission"> | number
    canView?: BoolFilter<"SubAdminPermission"> | boolean
    canCreate?: BoolFilter<"SubAdminPermission"> | boolean
    canEdit?: BoolFilter<"SubAdminPermission"> | boolean
    canDelete?: BoolFilter<"SubAdminPermission"> | boolean
    subAdmin?: XOR<SubAdminScalarRelationFilter, SubAdminWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "subAdminId_permissionId">

  export type SubAdminPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
    _count?: SubAdminPermissionCountOrderByAggregateInput
    _avg?: SubAdminPermissionAvgOrderByAggregateInput
    _max?: SubAdminPermissionMaxOrderByAggregateInput
    _min?: SubAdminPermissionMinOrderByAggregateInput
    _sum?: SubAdminPermissionSumOrderByAggregateInput
  }

  export type SubAdminPermissionScalarWhereWithAggregatesInput = {
    AND?: SubAdminPermissionScalarWhereWithAggregatesInput | SubAdminPermissionScalarWhereWithAggregatesInput[]
    OR?: SubAdminPermissionScalarWhereWithAggregatesInput[]
    NOT?: SubAdminPermissionScalarWhereWithAggregatesInput | SubAdminPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubAdminPermission"> | number
    subAdminId?: IntWithAggregatesFilter<"SubAdminPermission"> | number
    permissionId?: IntWithAggregatesFilter<"SubAdminPermission"> | number
    canView?: BoolWithAggregatesFilter<"SubAdminPermission"> | boolean
    canCreate?: BoolWithAggregatesFilter<"SubAdminPermission"> | boolean
    canEdit?: BoolWithAggregatesFilter<"SubAdminPermission"> | boolean
    canDelete?: BoolWithAggregatesFilter<"SubAdminPermission"> | boolean
  }

  export type UserCreateInput = {
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordCreateInput = {
    otp: string
    valid?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtp_recordsInput
  }

  export type OtpRecordUncheckedCreateInput = {
    id?: number
    phone: string
    otp: string
    valid?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtp_recordsNestedInput
  }

  export type OtpRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordCreateManyInput = {
    id?: number
    phone: string
    otp: string
    valid?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    user_id: number
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user_id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    user_id: number
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user_id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionCreateInput = {
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGame_transactionsInput
  }

  export type GameTransactionUncheckedCreateInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUpdateInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGame_transactionsNestedInput
  }

  export type GameTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionCreateManyInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUpdateManyMutationInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: number
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherCreateInput = {
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    collected_by?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    collected_by?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherCreateManyInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    collected_by?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    collected_by?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideImageCreateInput = {
    imageUrl: string
    page: $Enums.SlideImagePage
    placement?: $Enums.SlideImagePlacement | null
    device?: $Enums.DeviceType | null
    createdAt?: Date | string
  }

  export type SlideImageUncheckedCreateInput = {
    id?: number
    imageUrl: string
    page: $Enums.SlideImagePage
    placement?: $Enums.SlideImagePlacement | null
    device?: $Enums.DeviceType | null
    createdAt?: Date | string
  }

  export type SlideImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    page?: EnumSlideImagePageFieldUpdateOperationsInput | $Enums.SlideImagePage
    placement?: NullableEnumSlideImagePlacementFieldUpdateOperationsInput | $Enums.SlideImagePlacement | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    page?: EnumSlideImagePageFieldUpdateOperationsInput | $Enums.SlideImagePage
    placement?: NullableEnumSlideImagePlacementFieldUpdateOperationsInput | $Enums.SlideImagePlacement | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideImageCreateManyInput = {
    id?: number
    imageUrl: string
    page: $Enums.SlideImagePage
    placement?: $Enums.SlideImagePlacement | null
    device?: $Enums.DeviceType | null
    createdAt?: Date | string
  }

  export type SlideImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    page?: EnumSlideImagePageFieldUpdateOperationsInput | $Enums.SlideImagePage
    placement?: NullableEnumSlideImagePlacementFieldUpdateOperationsInput | $Enums.SlideImagePlacement | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    page?: EnumSlideImagePageFieldUpdateOperationsInput | $Enums.SlideImagePage
    placement?: NullableEnumSlideImagePlacementFieldUpdateOperationsInput | $Enums.SlideImagePlacement | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.AdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    subAdmins?: SubAdminCreateNestedManyWithoutCreatedByAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.AdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    subAdmins?: SubAdminUncheckedCreateNestedManyWithoutCreatedByAdminInput
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subAdmins?: SubAdminUpdateManyWithoutCreatedByAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subAdmins?: SubAdminUncheckedUpdateManyWithoutCreatedByAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.AdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubAdminCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    createdByAdmin?: AdminCreateNestedOneWithoutSubAdminsInput
    permissions?: SubAdminPermissionCreateNestedManyWithoutSubAdminInput
  }

  export type SubAdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    createdBy?: number | null
    permissions?: SubAdminPermissionUncheckedCreateNestedManyWithoutSubAdminInput
  }

  export type SubAdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdByAdmin?: AdminUpdateOneWithoutSubAdminsNestedInput
    permissions?: SubAdminPermissionUpdateManyWithoutSubAdminNestedInput
  }

  export type SubAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    permissions?: SubAdminPermissionUncheckedUpdateManyWithoutSubAdminNestedInput
  }

  export type SubAdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    createdBy?: number | null
  }

  export type SubAdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionCreateInput = {
    name: string
    module: string
    description?: string | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutPermissionInput
    subAdminPermissions?: SubAdminPermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    module: string
    description?: string | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
    subAdminPermissions?: SubAdminPermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUpdateManyWithoutPermissionNestedInput
    subAdminPermissions?: SubAdminPermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
    subAdminPermissions?: SubAdminPermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    name: string
    module: string
    description?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateInput = {
    roleId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    roleId: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionUpdateManyMutationInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionCreateInput = {
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    subAdmin: SubAdminCreateNestedOneWithoutPermissionsInput
    permission: PermissionCreateNestedOneWithoutSubAdminPermissionsInput
  }

  export type SubAdminPermissionUncheckedCreateInput = {
    id?: number
    subAdminId: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionUpdateInput = {
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    subAdmin?: SubAdminUpdateOneRequiredWithoutPermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutSubAdminPermissionsNestedInput
  }

  export type SubAdminPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subAdminId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionCreateManyInput = {
    id?: number
    subAdminId: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionUpdateManyMutationInput = {
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subAdminId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type GameTransactionListRelationFilter = {
    every?: GameTransactionWhereInput
    some?: GameTransactionWhereInput
    none?: GameTransactionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type OtpRecordListRelationFilter = {
    every?: OtpRecordWhereInput
    some?: OtpRecordWhereInput
    none?: OtpRecordWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OtpRecordCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type GameTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type GameTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    collected_by?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    collected_by?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSlideImagePageFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePage | EnumSlideImagePageFieldRefInput<$PrismaModel>
    in?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    not?: NestedEnumSlideImagePageFilter<$PrismaModel> | $Enums.SlideImagePage
  }

  export type EnumSlideImagePlacementNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePlacement | EnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    in?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel> | $Enums.SlideImagePlacement | null
  }

  export type EnumDeviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableFilter<$PrismaModel> | $Enums.DeviceType | null
  }

  export type SlideImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    page?: SortOrder
    placement?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SlideImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    page?: SortOrder
    placement?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    page?: SortOrder
    placement?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSlideImagePageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePage | EnumSlideImagePageFieldRefInput<$PrismaModel>
    in?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    not?: NestedEnumSlideImagePageWithAggregatesFilter<$PrismaModel> | $Enums.SlideImagePage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlideImagePageFilter<$PrismaModel>
    _max?: NestedEnumSlideImagePageFilter<$PrismaModel>
  }

  export type EnumSlideImagePlacementNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePlacement | EnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    in?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSlideImagePlacementNullableWithAggregatesFilter<$PrismaModel> | $Enums.SlideImagePlacement | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel>
    _max?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel>
  }

  export type EnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
  }

  export type EnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type SubAdminListRelationFilter = {
    every?: SubAdminWhereInput
    some?: SubAdminWhereInput
    none?: SubAdminWhereInput
  }

  export type SubAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type EnumSubAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubAdminStatus | EnumSubAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAdminStatusFilter<$PrismaModel> | $Enums.SubAdminStatus
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SubAdminPermissionListRelationFilter = {
    every?: SubAdminPermissionWhereInput
    some?: SubAdminPermissionWhereInput
    none?: SubAdminPermissionWhereInput
  }

  export type SubAdminPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubAdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    createdBy?: SortOrder
  }

  export type SubAdminAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type SubAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    createdBy?: SortOrder
  }

  export type SubAdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    createdBy?: SortOrder
  }

  export type SubAdminSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumSubAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubAdminStatus | EnumSubAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubAdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumSubAdminStatusFilter<$PrismaModel>
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type SubAdminScalarRelationFilter = {
    is?: SubAdminWhereInput
    isNot?: SubAdminWhereInput
  }

  export type SubAdminPermissionSubAdminIdPermissionIdCompoundUniqueInput = {
    subAdminId: number
    permissionId: number
  }

  export type SubAdminPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type SubAdminPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
  }

  export type SubAdminPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type SubAdminPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
    canView?: SortOrder
    canCreate?: SortOrder
    canEdit?: SortOrder
    canDelete?: SortOrder
  }

  export type SubAdminPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    subAdminId?: SortOrder
    permissionId?: SortOrder
  }

  export type GameTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OtpRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type GameTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OtpRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    upsert?: GameTransactionUpsertWithWhereUniqueWithoutUserInput | GameTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    set?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    disconnect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    delete?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    update?: GameTransactionUpdateWithWhereUniqueWithoutUserInput | GameTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameTransactionUpdateManyWithWhereWithoutUserInput | GameTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OtpRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    upsert?: OtpRecordUpsertWithWhereUniqueWithoutUserInput | OtpRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    set?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    disconnect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    delete?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    update?: OtpRecordUpdateWithWhereUniqueWithoutUserInput | OtpRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpRecordUpdateManyWithWhereWithoutUserInput | OtpRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    upsert?: GameTransactionUpsertWithWhereUniqueWithoutUserInput | GameTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    set?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    disconnect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    delete?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    update?: GameTransactionUpdateWithWhereUniqueWithoutUserInput | GameTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameTransactionUpdateManyWithWhereWithoutUserInput | GameTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OtpRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    upsert?: OtpRecordUpsertWithWhereUniqueWithoutUserInput | OtpRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    set?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    disconnect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    delete?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    update?: OtpRecordUpdateWithWhereUniqueWithoutUserInput | OtpRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpRecordUpdateManyWithWhereWithoutUserInput | OtpRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtp_recordsInput = {
    create?: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtp_recordsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOtp_recordsNestedInput = {
    create?: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtp_recordsInput
    upsert?: UserUpsertWithoutOtp_recordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtp_recordsInput, UserUpdateWithoutOtp_recordsInput>, UserUncheckedUpdateWithoutOtp_recordsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutGame_transactionsInput = {
    create?: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_transactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGame_transactionsNestedInput = {
    create?: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_transactionsInput
    upsert?: UserUpsertWithoutGame_transactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGame_transactionsInput, UserUpdateWithoutGame_transactionsInput>, UserUncheckedUpdateWithoutGame_transactionsInput>
  }

  export type UserCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutVouchersNestedInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    upsert?: UserUpsertWithoutVouchersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchersInput, UserUpdateWithoutVouchersInput>, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSlideImagePageFieldUpdateOperationsInput = {
    set?: $Enums.SlideImagePage
  }

  export type NullableEnumSlideImagePlacementFieldUpdateOperationsInput = {
    set?: $Enums.SlideImagePlacement | null
  }

  export type NullableEnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType | null
  }

  export type SubAdminCreateNestedManyWithoutCreatedByAdminInput = {
    create?: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput> | SubAdminCreateWithoutCreatedByAdminInput[] | SubAdminUncheckedCreateWithoutCreatedByAdminInput[]
    connectOrCreate?: SubAdminCreateOrConnectWithoutCreatedByAdminInput | SubAdminCreateOrConnectWithoutCreatedByAdminInput[]
    createMany?: SubAdminCreateManyCreatedByAdminInputEnvelope
    connect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
  }

  export type SubAdminUncheckedCreateNestedManyWithoutCreatedByAdminInput = {
    create?: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput> | SubAdminCreateWithoutCreatedByAdminInput[] | SubAdminUncheckedCreateWithoutCreatedByAdminInput[]
    connectOrCreate?: SubAdminCreateOrConnectWithoutCreatedByAdminInput | SubAdminCreateOrConnectWithoutCreatedByAdminInput[]
    createMany?: SubAdminCreateManyCreatedByAdminInputEnvelope
    connect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
  }

  export type EnumAdminStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdminStatus
  }

  export type SubAdminUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput> | SubAdminCreateWithoutCreatedByAdminInput[] | SubAdminUncheckedCreateWithoutCreatedByAdminInput[]
    connectOrCreate?: SubAdminCreateOrConnectWithoutCreatedByAdminInput | SubAdminCreateOrConnectWithoutCreatedByAdminInput[]
    upsert?: SubAdminUpsertWithWhereUniqueWithoutCreatedByAdminInput | SubAdminUpsertWithWhereUniqueWithoutCreatedByAdminInput[]
    createMany?: SubAdminCreateManyCreatedByAdminInputEnvelope
    set?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    disconnect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    delete?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    connect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    update?: SubAdminUpdateWithWhereUniqueWithoutCreatedByAdminInput | SubAdminUpdateWithWhereUniqueWithoutCreatedByAdminInput[]
    updateMany?: SubAdminUpdateManyWithWhereWithoutCreatedByAdminInput | SubAdminUpdateManyWithWhereWithoutCreatedByAdminInput[]
    deleteMany?: SubAdminScalarWhereInput | SubAdminScalarWhereInput[]
  }

  export type SubAdminUncheckedUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput> | SubAdminCreateWithoutCreatedByAdminInput[] | SubAdminUncheckedCreateWithoutCreatedByAdminInput[]
    connectOrCreate?: SubAdminCreateOrConnectWithoutCreatedByAdminInput | SubAdminCreateOrConnectWithoutCreatedByAdminInput[]
    upsert?: SubAdminUpsertWithWhereUniqueWithoutCreatedByAdminInput | SubAdminUpsertWithWhereUniqueWithoutCreatedByAdminInput[]
    createMany?: SubAdminCreateManyCreatedByAdminInputEnvelope
    set?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    disconnect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    delete?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    connect?: SubAdminWhereUniqueInput | SubAdminWhereUniqueInput[]
    update?: SubAdminUpdateWithWhereUniqueWithoutCreatedByAdminInput | SubAdminUpdateWithWhereUniqueWithoutCreatedByAdminInput[]
    updateMany?: SubAdminUpdateManyWithWhereWithoutCreatedByAdminInput | SubAdminUpdateManyWithWhereWithoutCreatedByAdminInput[]
    deleteMany?: SubAdminScalarWhereInput | SubAdminScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutSubAdminsInput = {
    create?: XOR<AdminCreateWithoutSubAdminsInput, AdminUncheckedCreateWithoutSubAdminsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSubAdminsInput
    connect?: AdminWhereUniqueInput
  }

  export type SubAdminPermissionCreateNestedManyWithoutSubAdminInput = {
    create?: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput> | SubAdminPermissionCreateWithoutSubAdminInput[] | SubAdminPermissionUncheckedCreateWithoutSubAdminInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutSubAdminInput | SubAdminPermissionCreateOrConnectWithoutSubAdminInput[]
    createMany?: SubAdminPermissionCreateManySubAdminInputEnvelope
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
  }

  export type SubAdminPermissionUncheckedCreateNestedManyWithoutSubAdminInput = {
    create?: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput> | SubAdminPermissionCreateWithoutSubAdminInput[] | SubAdminPermissionUncheckedCreateWithoutSubAdminInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutSubAdminInput | SubAdminPermissionCreateOrConnectWithoutSubAdminInput[]
    createMany?: SubAdminPermissionCreateManySubAdminInputEnvelope
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
  }

  export type EnumSubAdminStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubAdminStatus
  }

  export type AdminUpdateOneWithoutSubAdminsNestedInput = {
    create?: XOR<AdminCreateWithoutSubAdminsInput, AdminUncheckedCreateWithoutSubAdminsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSubAdminsInput
    upsert?: AdminUpsertWithoutSubAdminsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSubAdminsInput, AdminUpdateWithoutSubAdminsInput>, AdminUncheckedUpdateWithoutSubAdminsInput>
  }

  export type SubAdminPermissionUpdateManyWithoutSubAdminNestedInput = {
    create?: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput> | SubAdminPermissionCreateWithoutSubAdminInput[] | SubAdminPermissionUncheckedCreateWithoutSubAdminInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutSubAdminInput | SubAdminPermissionCreateOrConnectWithoutSubAdminInput[]
    upsert?: SubAdminPermissionUpsertWithWhereUniqueWithoutSubAdminInput | SubAdminPermissionUpsertWithWhereUniqueWithoutSubAdminInput[]
    createMany?: SubAdminPermissionCreateManySubAdminInputEnvelope
    set?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    disconnect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    delete?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    update?: SubAdminPermissionUpdateWithWhereUniqueWithoutSubAdminInput | SubAdminPermissionUpdateWithWhereUniqueWithoutSubAdminInput[]
    updateMany?: SubAdminPermissionUpdateManyWithWhereWithoutSubAdminInput | SubAdminPermissionUpdateManyWithWhereWithoutSubAdminInput[]
    deleteMany?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
  }

  export type SubAdminPermissionUncheckedUpdateManyWithoutSubAdminNestedInput = {
    create?: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput> | SubAdminPermissionCreateWithoutSubAdminInput[] | SubAdminPermissionUncheckedCreateWithoutSubAdminInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutSubAdminInput | SubAdminPermissionCreateOrConnectWithoutSubAdminInput[]
    upsert?: SubAdminPermissionUpsertWithWhereUniqueWithoutSubAdminInput | SubAdminPermissionUpsertWithWhereUniqueWithoutSubAdminInput[]
    createMany?: SubAdminPermissionCreateManySubAdminInputEnvelope
    set?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    disconnect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    delete?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    update?: SubAdminPermissionUpdateWithWhereUniqueWithoutSubAdminInput | SubAdminPermissionUpdateWithWhereUniqueWithoutSubAdminInput[]
    updateMany?: SubAdminPermissionUpdateManyWithWhereWithoutSubAdminInput | SubAdminPermissionUpdateManyWithWhereWithoutSubAdminInput[]
    deleteMany?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type SubAdminPermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput> | SubAdminPermissionCreateWithoutPermissionInput[] | SubAdminPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutPermissionInput | SubAdminPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: SubAdminPermissionCreateManyPermissionInputEnvelope
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type SubAdminPermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput> | SubAdminPermissionCreateWithoutPermissionInput[] | SubAdminPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutPermissionInput | SubAdminPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: SubAdminPermissionCreateManyPermissionInputEnvelope
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type SubAdminPermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput> | SubAdminPermissionCreateWithoutPermissionInput[] | SubAdminPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutPermissionInput | SubAdminPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: SubAdminPermissionUpsertWithWhereUniqueWithoutPermissionInput | SubAdminPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: SubAdminPermissionCreateManyPermissionInputEnvelope
    set?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    disconnect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    delete?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    update?: SubAdminPermissionUpdateWithWhereUniqueWithoutPermissionInput | SubAdminPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: SubAdminPermissionUpdateManyWithWhereWithoutPermissionInput | SubAdminPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type SubAdminPermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput> | SubAdminPermissionCreateWithoutPermissionInput[] | SubAdminPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: SubAdminPermissionCreateOrConnectWithoutPermissionInput | SubAdminPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: SubAdminPermissionUpsertWithWhereUniqueWithoutPermissionInput | SubAdminPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: SubAdminPermissionCreateManyPermissionInputEnvelope
    set?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    disconnect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    delete?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    connect?: SubAdminPermissionWhereUniqueInput | SubAdminPermissionWhereUniqueInput[]
    update?: SubAdminPermissionUpdateWithWhereUniqueWithoutPermissionInput | SubAdminPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: SubAdminPermissionUpdateManyWithWhereWithoutPermissionInput | SubAdminPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
  }

  export type PermissionCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    upsert?: PermissionUpsertWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, PermissionUpdateWithoutRolePermissionsInput>, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type SubAdminCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<SubAdminCreateWithoutPermissionsInput, SubAdminUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: SubAdminCreateOrConnectWithoutPermissionsInput
    connect?: SubAdminWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutSubAdminPermissionsInput = {
    create?: XOR<PermissionCreateWithoutSubAdminPermissionsInput, PermissionUncheckedCreateWithoutSubAdminPermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutSubAdminPermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type SubAdminUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<SubAdminCreateWithoutPermissionsInput, SubAdminUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: SubAdminCreateOrConnectWithoutPermissionsInput
    upsert?: SubAdminUpsertWithoutPermissionsInput
    connect?: SubAdminWhereUniqueInput
    update?: XOR<XOR<SubAdminUpdateToOneWithWhereWithoutPermissionsInput, SubAdminUpdateWithoutPermissionsInput>, SubAdminUncheckedUpdateWithoutPermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutSubAdminPermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutSubAdminPermissionsInput, PermissionUncheckedCreateWithoutSubAdminPermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutSubAdminPermissionsInput
    upsert?: PermissionUpsertWithoutSubAdminPermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutSubAdminPermissionsInput, PermissionUpdateWithoutSubAdminPermissionsInput>, PermissionUncheckedUpdateWithoutSubAdminPermissionsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSlideImagePageFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePage | EnumSlideImagePageFieldRefInput<$PrismaModel>
    in?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    not?: NestedEnumSlideImagePageFilter<$PrismaModel> | $Enums.SlideImagePage
  }

  export type NestedEnumSlideImagePlacementNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePlacement | EnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    in?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel> | $Enums.SlideImagePlacement | null
  }

  export type NestedEnumDeviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableFilter<$PrismaModel> | $Enums.DeviceType | null
  }

  export type NestedEnumSlideImagePageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePage | EnumSlideImagePageFieldRefInput<$PrismaModel>
    in?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlideImagePage[] | ListEnumSlideImagePageFieldRefInput<$PrismaModel>
    not?: NestedEnumSlideImagePageWithAggregatesFilter<$PrismaModel> | $Enums.SlideImagePage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlideImagePageFilter<$PrismaModel>
    _max?: NestedEnumSlideImagePageFilter<$PrismaModel>
  }

  export type NestedEnumSlideImagePlacementNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlideImagePlacement | EnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    in?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SlideImagePlacement[] | ListEnumSlideImagePlacementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSlideImagePlacementNullableWithAggregatesFilter<$PrismaModel> | $Enums.SlideImagePlacement | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel>
    _max?: NestedEnumSlideImagePlacementNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubAdminStatus | EnumSubAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAdminStatusFilter<$PrismaModel> | $Enums.SubAdminStatus
  }

  export type NestedEnumSubAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubAdminStatus | EnumSubAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubAdminStatus[] | ListEnumSubAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubAdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumSubAdminStatusFilter<$PrismaModel>
  }

  export type GameTransactionCreateWithoutUserInput = {
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionCreateOrConnectWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    create: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput>
  }

  export type GameTransactionCreateManyUserInputEnvelope = {
    data: GameTransactionCreateManyUserInput | GameTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OtpRecordCreateWithoutUserInput = {
    otp: string
    valid?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    valid?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordCreateOrConnectWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    create: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput>
  }

  export type OtpRecordCreateManyUserInputEnvelope = {
    data: OtpRecordCreateManyUserInput | OtpRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutUserInput = {
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherCreateOrConnectWithoutUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherCreateManyUserInputEnvelope = {
    data: VoucherCreateManyUserInput | VoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    update: XOR<GameTransactionUpdateWithoutUserInput, GameTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput>
  }

  export type GameTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    data: XOR<GameTransactionUpdateWithoutUserInput, GameTransactionUncheckedUpdateWithoutUserInput>
  }

  export type GameTransactionUpdateManyWithWhereWithoutUserInput = {
    where: GameTransactionScalarWhereInput
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type GameTransactionScalarWhereInput = {
    AND?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
    OR?: GameTransactionScalarWhereInput[]
    NOT?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
    id?: IntFilter<"GameTransaction"> | number
    trans_id?: StringFilter<"GameTransaction"> | string
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type OtpRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    update: XOR<OtpRecordUpdateWithoutUserInput, OtpRecordUncheckedUpdateWithoutUserInput>
    create: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput>
  }

  export type OtpRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    data: XOR<OtpRecordUpdateWithoutUserInput, OtpRecordUncheckedUpdateWithoutUserInput>
  }

  export type OtpRecordUpdateManyWithWhereWithoutUserInput = {
    where: OtpRecordScalarWhereInput
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpRecordScalarWhereInput = {
    AND?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
    OR?: OtpRecordScalarWhereInput[]
    NOT?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
    id?: IntFilter<"OtpRecord"> | number
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    valid?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
  }

  export type VoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
  }

  export type UserCreateWithoutOtp_recordsInput = {
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtp_recordsInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtp_recordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
  }

  export type UserUpsertWithoutOtp_recordsInput = {
    update: XOR<UserUpdateWithoutOtp_recordsInput, UserUncheckedUpdateWithoutOtp_recordsInput>
    create: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtp_recordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtp_recordsInput, UserUncheckedUpdateWithoutOtp_recordsInput>
  }

  export type UserUpdateWithoutOtp_recordsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtp_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGame_transactionsInput = {
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGame_transactionsInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGame_transactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
  }

  export type UserUpsertWithoutGame_transactionsInput = {
    update: XOR<UserUpdateWithoutGame_transactionsInput, UserUncheckedUpdateWithoutGame_transactionsInput>
    create: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGame_transactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGame_transactionsInput, UserUncheckedUpdateWithoutGame_transactionsInput>
  }

  export type UserUpdateWithoutGame_transactionsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGame_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVouchersInput = {
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVouchersInput = {
    id?: number
    status?: string
    phone_number: string
    user_code?: string | null
    recovery_code?: string | null
    password: string
    fp_id: string
    ip: string
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
  }

  export type UserUpsertWithoutVouchersInput = {
    update: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateWithoutVouchersInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubAdminCreateWithoutCreatedByAdminInput = {
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: SubAdminPermissionCreateNestedManyWithoutSubAdminInput
  }

  export type SubAdminUncheckedCreateWithoutCreatedByAdminInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: SubAdminPermissionUncheckedCreateNestedManyWithoutSubAdminInput
  }

  export type SubAdminCreateOrConnectWithoutCreatedByAdminInput = {
    where: SubAdminWhereUniqueInput
    create: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput>
  }

  export type SubAdminCreateManyCreatedByAdminInputEnvelope = {
    data: SubAdminCreateManyCreatedByAdminInput | SubAdminCreateManyCreatedByAdminInput[]
    skipDuplicates?: boolean
  }

  export type SubAdminUpsertWithWhereUniqueWithoutCreatedByAdminInput = {
    where: SubAdminWhereUniqueInput
    update: XOR<SubAdminUpdateWithoutCreatedByAdminInput, SubAdminUncheckedUpdateWithoutCreatedByAdminInput>
    create: XOR<SubAdminCreateWithoutCreatedByAdminInput, SubAdminUncheckedCreateWithoutCreatedByAdminInput>
  }

  export type SubAdminUpdateWithWhereUniqueWithoutCreatedByAdminInput = {
    where: SubAdminWhereUniqueInput
    data: XOR<SubAdminUpdateWithoutCreatedByAdminInput, SubAdminUncheckedUpdateWithoutCreatedByAdminInput>
  }

  export type SubAdminUpdateManyWithWhereWithoutCreatedByAdminInput = {
    where: SubAdminScalarWhereInput
    data: XOR<SubAdminUpdateManyMutationInput, SubAdminUncheckedUpdateManyWithoutCreatedByAdminInput>
  }

  export type SubAdminScalarWhereInput = {
    AND?: SubAdminScalarWhereInput | SubAdminScalarWhereInput[]
    OR?: SubAdminScalarWhereInput[]
    NOT?: SubAdminScalarWhereInput | SubAdminScalarWhereInput[]
    id?: IntFilter<"SubAdmin"> | number
    name?: StringFilter<"SubAdmin"> | string
    email?: StringFilter<"SubAdmin"> | string
    password?: StringFilter<"SubAdmin"> | string
    role?: StringFilter<"SubAdmin"> | string
    status?: EnumSubAdminStatusFilter<"SubAdmin"> | $Enums.SubAdminStatus
    createdAt?: DateTimeFilter<"SubAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"SubAdmin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"SubAdmin"> | Date | string | null
    createdBy?: IntNullableFilter<"SubAdmin"> | number | null
  }

  export type AdminCreateWithoutSubAdminsInput = {
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.AdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type AdminUncheckedCreateWithoutSubAdminsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.AdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type AdminCreateOrConnectWithoutSubAdminsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSubAdminsInput, AdminUncheckedCreateWithoutSubAdminsInput>
  }

  export type SubAdminPermissionCreateWithoutSubAdminInput = {
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    permission: PermissionCreateNestedOneWithoutSubAdminPermissionsInput
  }

  export type SubAdminPermissionUncheckedCreateWithoutSubAdminInput = {
    id?: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionCreateOrConnectWithoutSubAdminInput = {
    where: SubAdminPermissionWhereUniqueInput
    create: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput>
  }

  export type SubAdminPermissionCreateManySubAdminInputEnvelope = {
    data: SubAdminPermissionCreateManySubAdminInput | SubAdminPermissionCreateManySubAdminInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutSubAdminsInput = {
    update: XOR<AdminUpdateWithoutSubAdminsInput, AdminUncheckedUpdateWithoutSubAdminsInput>
    create: XOR<AdminCreateWithoutSubAdminsInput, AdminUncheckedCreateWithoutSubAdminsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSubAdminsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSubAdminsInput, AdminUncheckedUpdateWithoutSubAdminsInput>
  }

  export type AdminUpdateWithoutSubAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateWithoutSubAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubAdminPermissionUpsertWithWhereUniqueWithoutSubAdminInput = {
    where: SubAdminPermissionWhereUniqueInput
    update: XOR<SubAdminPermissionUpdateWithoutSubAdminInput, SubAdminPermissionUncheckedUpdateWithoutSubAdminInput>
    create: XOR<SubAdminPermissionCreateWithoutSubAdminInput, SubAdminPermissionUncheckedCreateWithoutSubAdminInput>
  }

  export type SubAdminPermissionUpdateWithWhereUniqueWithoutSubAdminInput = {
    where: SubAdminPermissionWhereUniqueInput
    data: XOR<SubAdminPermissionUpdateWithoutSubAdminInput, SubAdminPermissionUncheckedUpdateWithoutSubAdminInput>
  }

  export type SubAdminPermissionUpdateManyWithWhereWithoutSubAdminInput = {
    where: SubAdminPermissionScalarWhereInput
    data: XOR<SubAdminPermissionUpdateManyMutationInput, SubAdminPermissionUncheckedUpdateManyWithoutSubAdminInput>
  }

  export type SubAdminPermissionScalarWhereInput = {
    AND?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
    OR?: SubAdminPermissionScalarWhereInput[]
    NOT?: SubAdminPermissionScalarWhereInput | SubAdminPermissionScalarWhereInput[]
    id?: IntFilter<"SubAdminPermission"> | number
    subAdminId?: IntFilter<"SubAdminPermission"> | number
    permissionId?: IntFilter<"SubAdminPermission"> | number
    canView?: BoolFilter<"SubAdminPermission"> | boolean
    canCreate?: BoolFilter<"SubAdminPermission"> | boolean
    canEdit?: BoolFilter<"SubAdminPermission"> | boolean
    canDelete?: BoolFilter<"SubAdminPermission"> | boolean
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    roleId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    roleId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type SubAdminPermissionCreateWithoutPermissionInput = {
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
    subAdmin: SubAdminCreateNestedOneWithoutPermissionsInput
  }

  export type SubAdminPermissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    subAdminId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionCreateOrConnectWithoutPermissionInput = {
    where: SubAdminPermissionWhereUniqueInput
    create: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type SubAdminPermissionCreateManyPermissionInputEnvelope = {
    data: SubAdminPermissionCreateManyPermissionInput | SubAdminPermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    canView?: BoolFilter<"RolePermission"> | boolean
    canCreate?: BoolFilter<"RolePermission"> | boolean
    canEdit?: BoolFilter<"RolePermission"> | boolean
    canDelete?: BoolFilter<"RolePermission"> | boolean
  }

  export type SubAdminPermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: SubAdminPermissionWhereUniqueInput
    update: XOR<SubAdminPermissionUpdateWithoutPermissionInput, SubAdminPermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<SubAdminPermissionCreateWithoutPermissionInput, SubAdminPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type SubAdminPermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: SubAdminPermissionWhereUniqueInput
    data: XOR<SubAdminPermissionUpdateWithoutPermissionInput, SubAdminPermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type SubAdminPermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: SubAdminPermissionScalarWhereInput
    data: XOR<SubAdminPermissionUpdateManyMutationInput, SubAdminPermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionCreateWithoutRolePermissionsInput = {
    name: string
    module: string
    description?: string | null
    subAdminPermissions?: SubAdminPermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutRolePermissionsInput = {
    id?: number
    name: string
    module: string
    description?: string | null
    subAdminPermissions?: SubAdminPermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutRolePermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
  }

  export type PermissionUpsertWithoutRolePermissionsInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateWithoutRolePermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subAdminPermissions?: SubAdminPermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subAdminPermissions?: SubAdminPermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type SubAdminCreateWithoutPermissionsInput = {
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    createdByAdmin?: AdminCreateNestedOneWithoutSubAdminsInput
  }

  export type SubAdminUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    createdBy?: number | null
  }

  export type SubAdminCreateOrConnectWithoutPermissionsInput = {
    where: SubAdminWhereUniqueInput
    create: XOR<SubAdminCreateWithoutPermissionsInput, SubAdminUncheckedCreateWithoutPermissionsInput>
  }

  export type PermissionCreateWithoutSubAdminPermissionsInput = {
    name: string
    module: string
    description?: string | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutSubAdminPermissionsInput = {
    id?: number
    name: string
    module: string
    description?: string | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutSubAdminPermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutSubAdminPermissionsInput, PermissionUncheckedCreateWithoutSubAdminPermissionsInput>
  }

  export type SubAdminUpsertWithoutPermissionsInput = {
    update: XOR<SubAdminUpdateWithoutPermissionsInput, SubAdminUncheckedUpdateWithoutPermissionsInput>
    create: XOR<SubAdminCreateWithoutPermissionsInput, SubAdminUncheckedCreateWithoutPermissionsInput>
    where?: SubAdminWhereInput
  }

  export type SubAdminUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: SubAdminWhereInput
    data: XOR<SubAdminUpdateWithoutPermissionsInput, SubAdminUncheckedUpdateWithoutPermissionsInput>
  }

  export type SubAdminUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdByAdmin?: AdminUpdateOneWithoutSubAdminsNestedInput
  }

  export type SubAdminUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionUpsertWithoutSubAdminPermissionsInput = {
    update: XOR<PermissionUpdateWithoutSubAdminPermissionsInput, PermissionUncheckedUpdateWithoutSubAdminPermissionsInput>
    create: XOR<PermissionCreateWithoutSubAdminPermissionsInput, PermissionUncheckedCreateWithoutSubAdminPermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutSubAdminPermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutSubAdminPermissionsInput, PermissionUncheckedUpdateWithoutSubAdminPermissionsInput>
  }

  export type PermissionUpdateWithoutSubAdminPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutSubAdminPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type GameTransactionCreateManyUserInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpRecordCreateManyUserInput = {
    id?: number
    otp: string
    valid?: boolean
    createdAt?: Date | string
  }

  export type VoucherCreateManyUserInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type GameTransactionUpdateWithoutUserInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubAdminCreateManyCreatedByAdminInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    status?: $Enums.SubAdminStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type SubAdminUpdateWithoutCreatedByAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: SubAdminPermissionUpdateManyWithoutSubAdminNestedInput
  }

  export type SubAdminUncheckedUpdateWithoutCreatedByAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: SubAdminPermissionUncheckedUpdateManyWithoutSubAdminNestedInput
  }

  export type SubAdminUncheckedUpdateManyWithoutCreatedByAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: EnumSubAdminStatusFieldUpdateOperationsInput | $Enums.SubAdminStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubAdminPermissionCreateManySubAdminInput = {
    id?: number
    permissionId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionUpdateWithoutSubAdminInput = {
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    permission?: PermissionUpdateOneRequiredWithoutSubAdminPermissionsNestedInput
  }

  export type SubAdminPermissionUncheckedUpdateWithoutSubAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionUncheckedUpdateManyWithoutSubAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionCreateManyPermissionInput = {
    id?: number
    roleId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type SubAdminPermissionCreateManyPermissionInput = {
    id?: number
    subAdminId: number
    canView?: boolean
    canCreate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionUpdateWithoutPermissionInput = {
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    subAdmin?: SubAdminUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type SubAdminPermissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    subAdminId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubAdminPermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    subAdminId?: IntFieldUpdateOperationsInput | number
    canView?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
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