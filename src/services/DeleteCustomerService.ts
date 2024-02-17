import prismaClient from "../prisma";

//Aqui estou criando uma tipagem nova para o meu ID
interface DeleteCustomerProps{ 
    id: string;
}

//Para deletar é necessário que me mande o ID do cliente no qual quer deletar
class DeleteCustomerService{
    async execute ({ id }: DeleteCustomerProps){ //Aqui eu estou esperando que me mande o id
        
        //Aqui eu esotu verificando se você não me mandar o id ele acusará este erro
        if(!id) {
            throw new Error("Solicitação invalida.")
        }

        // O 'findFirst' neste caso serve para pegar o primeiro
        const findCustomer = await prismaClient.customer.findFirst({
            // O 'where' serve para conseguirmos filtrar apenas o que queremos
            where: {
                id: id
            }
        });

        //No caso se não encontrar o id que você escreveu eu dou essa mensagem
        if(!findCustomer) {
            throw new Error("Cliente não existe.")
        }
        
        //Neste trecho estou deletando de fato o id 
        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        });

        return {message: 'Deletado com sucesso!'}
    }
}

export {DeleteCustomerService}