import prismaClient from "../prisma";

interface CreateCustomerProps {
    name:   string;
    email:  string;
}

class CreateCustomerService{
    async execute({ name, email }: CreateCustomerProps) {

        if(!name||!email) { // Verifico se ele não preencheu algum campo
            throw new Error("Preencha todos os campos") 
        }
        
        const customer = await prismaClient.customer.create({ // Aqui eu vou estar fazendo minha primeira requisição
            data: {
                name,
                email,
                status: true
            }
        })
        
        return customer // Retornando meu 'customer' para minha controler qual item foi cadastrado no banco
    }
}

export { CreateCustomerService }