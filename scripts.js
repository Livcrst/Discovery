const Modal = { // Desafio: Transformar essa função em uma de alternancia
    open(){
        // Abrir modal 
        // Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')


    },
    close(){
        // fechar o modal
        //remover a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')

    }
}

const transactions = [{}]

const Transaction = {
    incomes(){
        //Somar as entradas
    },
    expenses(){

    },
    total(){
        // entradas - saidas

    }
}
const Modal = { // Desafio: Transformar essa função em uma de alternancia
    open(){
        // Abrir modal 
        // Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')


    },
    close(){
        // fechar o modal
        //remover a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')

    }
}

const transactions = [
    {
    id: 1,
    description: 'Luz',
    amoun: -50000,
    date: '23/01/2021'
    },
    {
    id: 2,
    description: 'Criação Website',
    amoun: 500000,
    date: '23/01/2021'
    },
    {
    id: 3,
    description: 'Luz',
    amoun: -20000,
    date: '23/01/2021'
    },
]

const Transaction = {
    incomes(){
        //Somar as entradas
    },
    expenses(){

    },
    total(){
        // entradas - saidas

    }
}
/* Substituir os dados que estão no HTML pelos dados que estão no JS */


const DOM = {
    
    // Criar as operações que estão nos cards 
    innerHTMLTransaction (){
        const html = `
        <tr>
        <td class="description">
            <!-- item da linha do body-->
            Luz

        </td>
        <td class="expense">
            <!-- item da linha do body-->
            - R$ 500,00

        </td>
        <td class="date">
            <!-- item da linha do body-->
            23/01/2021

        </td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
    </tr>

        `
    }
}