import express from 'express';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import pkg from 'body-parser';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import http from 'http';
import UserType from './graphql/types/User.js';
import ProjectType from './graphql/types/Project.js';
import EducationType from './graphql/types/Education.js';
import ExperienceType from './graphql/types/Experience.js';
import userResolvers from './graphql/resolvers/user.resolver.js';

dotenv.config();
const { json } = pkg;

const app = express();
const httpServer = http.createServer(app);

const gqlServer = new ApolloServer({
  typeDefs: [UserType, ProjectType, EducationType, ExperienceType],
  resolvers: [userResolvers],
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await gqlServer.start();

app.use(
  '/graphql',
  cors(),
  json(),
  expressMiddleware(gqlServer, {
    context: async ({ req }) => ({ test: 'test' }),
  })
);

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);
console.log(`🚀 Server ready on port ${process.env.PORT}`);
