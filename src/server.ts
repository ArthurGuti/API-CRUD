import Fastify from "fastify";
import cors from '@fastify/cors'

import { routes } from "./routes";

const app = Fastify({ logger: true }) //* ele vai devolver no console esse 'logger'

//Aqui estou fazendo uma validação de aviso de erro que está sendo lancada no meu create com um 'Preencha todos os campos'
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
})

const start = async () => {

    await app.register(routes); //* Estou importando meu arquivo de Routes
    await app.register(cors)


    try {
        await app.listen({ port: 3333 })
    } catch (err) {
        process.exit(1)
    }
}

start();