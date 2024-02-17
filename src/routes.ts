import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';

import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomerControler } from './controllers/ListCustomerControler';
import { DeleteCustomerControler } from './controllers/DeleteCustomerControler';

// fastfy é uma propriedade que recebe o tipo FastiFyInstance e o mesmo acontece com o options
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) { 
    
    // Estou criando uma rota do tipo Get
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => { // Como estou usando TypeScript é bom passar o tipo da cada propriedade (ex: reply: FastifyReply)
        return { ok: true }
    })

    // O tipo 'post' serve como se tivesse que criar algo novo
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply) // Nosso metodo do 'controller' no caso é o 'handle'
    })

    //O tipo 'get' é porque eu estou querendo listar o servico
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerControler().handle(request, reply) // Nosso metodo do 'controller' no caso é o 'handle'
    })
    
    //O tipo 'delet' é porque estou querendo deletar o 'usuário'
    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerControler().handle(request, reply) // Nosso metodo do 'controller' no caso é o 'handle'
    })
}