import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas/productSchema.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});
