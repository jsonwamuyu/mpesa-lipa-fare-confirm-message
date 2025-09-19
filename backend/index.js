import express from "express";
import { graphqlHTTP } from "express-graphql";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    scheme: null,
  })
);
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});
