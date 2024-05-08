"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
var load_1 = require("@graphql-tools/load");
var schema_1 = require("@graphql-tools/schema");
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var resolvers_1 = require("./resolvers");
var schema = (0, load_1.loadSchemaSync)("./schema.graphql", {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
var schemaWithResolvers = (0, schema_1.addResolversToSchema)({
    schema: schema,
    resolvers: resolvers_1.resolvers,
});
var server = new server_1.ApolloServer({
    schema: schemaWithResolvers,
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
})).url;
console.log("\uD83D\uDE80  Server ready at: ".concat(url));
