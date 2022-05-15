class contabank {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo (){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo= valor;
    }

    sacar(valor){
        if (valor > this._slado){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contabank{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}

class contaPoupnaca extends contabank {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
       
    }
}

class universitaria extends contabank{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';  
    }

    sacar(valor){
        if (valor > 500){
            return "Operação negada!"
        }

        this._saldo = this_saldo - valor;
    }
}