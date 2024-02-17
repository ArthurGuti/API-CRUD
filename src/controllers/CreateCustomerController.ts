import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/createCustomerServices';

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string, email: string};
        
        //* Esas linhas de código servem para verificar se está funcionando o meu cadastro no BD
        // const { name, email } = request.body as { name: string, email: string};
        // console.log(name);
        // console.log(email);

        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({name, email}); // O meu controller recebe do meu Serviço o 'customer' e vai devolver no meu 'reply'

        reply.send(customer)

    }
}

export { CreateCustomerController }