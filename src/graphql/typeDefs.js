import path from "path";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesArray = loadFilesSync(path.join(__dirname, "modules/**", "*.gql"), {
  recursive: true,
});
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;
