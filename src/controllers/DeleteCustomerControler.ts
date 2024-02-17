import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerControler {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        //Aqui estou pegando o meu id 
        const { id } = request.query as {id: string} //Nesse trecho estou afirmando que vai ter o id e que ele é do tipo String

        const customerService = new DeleteCustomerService();

        //Nesse trecho estou passando o id para o execute para poder executar o meu customerService no id correto
        const customer = await customerService.execute({ id });

        //Aqui no caso estou devolvendo o meu 'customer' para o front-end
        reply.send(customer);
    }
}

export { DeleteCustomerControler }