function validaArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");
        
        if(typeof arr !== 'objetc') throw new TypeError("Array precisa ser do tipo object");
        
        if(typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number");
        
        if(Array.length !== num) throw new RangeError("Tamanho inválido");

        return arr;
    } catch(e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um erro de referência!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um erro de tipo!")
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("Este erro é um erro de Range!")
            console.log(e.message)
        } else {
            console.log("Erro não esperado:" + e)
        }
    }
}

console.log(validaArray(5));