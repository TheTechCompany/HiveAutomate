import { config } from 'dotenv'
config()
import { HiveGraph } from '@hexhive/graphql-server'
import { PrismaClient } from '@prisma/client';

import express from 'express'
import schema from './schema';

const app = express();

const prisma = new PrismaClient();

(async () => {

    const {typeDefs, resolvers} = schema(prisma);

    const hiveGraph = new HiveGraph({
        dev: false,
        rootServer: process.env.ROOT_SERVER || 'http://localhost:7000',
        schema: {
            typeDefs: typeDefs,
            resolvers: resolvers
        }
    })

    await hiveGraph.init()

    app.use(hiveGraph.middleware)

    app.listen(8020, () => {

    })

})()