 
export class Banco {
    conta_Corrente: number ;
    conta_Poupanca: number ;
    exibir_Saldo: number;
    conta_Investimento: number;

    
    constructor(conta_Corrente: number,conta_Poupanca: number,exibir_Saldo: number, conta_Investimento: number) {
        this.conta_Corrente = conta_Corrente;
        this.conta_Poupanca = conta_Poupanca;
        this.exibir_Saldo = exibir_Saldo;
        this.conta_Investimento = conta_Investimento;
    }
     
    showSavings(){
        this.conta_Poupanca = 100
        console.log(`Ação de ver sua conta poupança. Você tem depositado ${this.conta_Poupanca}`);
    }

    showCurrent(){
        this.conta_Corrente = 100
        console.log(`Sua conta corrente ${this.conta_Corrente}`);
    }


    showBalance(){
        this.exibir_Saldo = this.conta_Corrente + this.conta_Poupanca
        console.log (`Seu saldo é: ${this.exibir_Saldo}`)
    }

    showInvestiment(){
        console.log(`O investimento do nosso banco é 10% do valor de sua CC e CP.`)
        this.conta_Investimento = this.exibir_Saldo *= 0.10 
        console.log(`Você investiu: ${this.conta_Investimento}.`)
    }

}










