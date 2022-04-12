import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect("mongodb://db:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Server started at: ${url}`);
  });
}

export default startServer;
