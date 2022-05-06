import { config } from 'dotenv'
config()
import { HiveGraph } from '@hexhive/graphql-server'

import express from 'express'

const app = express();

(async () => {

    const hiveGraph = new HiveGraph({
        dev: true,
        rootServer: process.env.ROOT_SERVER || 'http://localhost:7000',
        schema: {
            typeDefs: ``,
            resolvers: {}
        }
    })

    await hiveGraph.init()

    app.use(hiveGraph.middleware)

    app.listen(8020, () => {

    })

})()