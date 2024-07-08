const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const port = 3003;
const url = 'mongodb+srv://pappulasathvikareddy:sathvikareddy0309@cluster0.xohsfhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error(err);
  });

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server is alive at port ${port}`);
  });
}
function Testing(){
  return 0;
}

startServer();
