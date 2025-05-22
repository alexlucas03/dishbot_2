
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password'
};

exports.Prisma.JanuaryScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.FebruaryScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.MarchScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.AprilScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.MayScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.JuneScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.JulyScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.AugustScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.SeptemberScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.OctoberScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.NovemberScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.DecemberScalarFieldEnum = {
  id: 'id',
  year: 'year',
  day: 'day',
  owner: 'owner',
  type: 'type'
};

exports.Prisma.People2ScalarFieldEnum = {
  groupmeid: 'groupmeid',
  name: 'name',
  username: 'username',
  pickorder: 'pickorder',
  totalpoints: 'totalpoints',
  admin: 'admin'
};

exports.Prisma.Startend2ScalarFieldEnum = {
  id: 'id',
  date: 'date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/betasw/Documents/GitHub/dishbot_2/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/betasw/Documents/GitHub/dishbot_2/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DB_LINK",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DB_LINK\")\n  directUrl = env(\"DIRECT_LINK\")\n}\n\nmodel admin {\n  id       Int    @id @default(autoincrement())\n  name     String @db.VarChar(255)\n  password String @db.VarChar(255)\n}\n\nmodel january {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel february {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel march {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel april {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel may {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel june {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel july {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel august {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel september {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel october {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel november {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel december {\n  id    String @id @db.VarChar(255)\n  year  String @db.VarChar(255)\n  day   String @db.VarChar(255)\n  owner String @db.VarChar(255)\n  type  String @db.VarChar(255)\n}\n\nmodel people2 {\n  groupmeid   String  @id @db.VarChar(255)\n  name        String  @unique @db.VarChar(255)\n  username    String  @db.VarChar(255)\n  pickorder   String  @db.VarChar(255)\n  totalpoints String  @db.VarChar(255)\n  admin       Boolean\n}\n\nmodel startend2 {\n  id   Int      @id\n  date DateTime\n}\n",
  "inlineSchemaHash": "520dd93fd4f382f42b35873e7eceaca71aa760ef12b59f8d252e157d9e2ea11f",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"admin\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"january\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"february\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"march\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"april\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"may\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"june\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"july\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"august\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"september\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"october\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"november\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"december\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"day\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owner\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"people2\":{\"fields\":[{\"name\":\"groupmeid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pickorder\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"totalpoints\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"admin\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null},\"startend2\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DB_LINK: typeof globalThis !== 'undefined' && globalThis['DB_LINK'] || typeof process !== 'undefined' && process.env && process.env.DB_LINK || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

