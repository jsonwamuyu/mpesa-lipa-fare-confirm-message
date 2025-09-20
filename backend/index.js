import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas/productSchema.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.KEY_MONGODB;

const app = express();

mongoose.connect(DB_URI);
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
