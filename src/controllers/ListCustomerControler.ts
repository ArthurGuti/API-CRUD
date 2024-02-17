import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerControler {
    async handle(request: FastifyRequest, reply:FastifyReply) {
        const listCustomerService = new ListCustomerService(); // Aqui eu estou inicializando a nossa classe

        const customers = await listCustomerService.execute(); //Aqui eu estou incializando o servico

        reply.send(customers);
    }
} 

export {ListCustomerControler}