import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas/productSchema.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(
  "mongodb+srv://jysonmuchiri_db_user:uiAkPuqFat81kkVp@cluster0.ugk4srk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Sever running on port http://localhost:${PORT}/graphql`);
});
