import { ApolloServer } from "apollo-server";
import typeDefs from "./typedefs.js";
import resolvers from "./resolvers.js";

const { PORT = 3030 } = process.env;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});