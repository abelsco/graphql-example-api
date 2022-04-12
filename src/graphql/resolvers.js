import path from "path";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesArray = loadFilesSync(
  path.join(__dirname, "modules/**", "resolvers.js"),
  { recursive: true }
);
const typeDefs = mergeResolvers(typesArray);

export default typeDefs;
