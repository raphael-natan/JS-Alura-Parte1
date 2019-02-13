class Mensagem{
    constructor(){
        this._texto;
    }
//teste
    get texto(){
        return this._texto;
    }

    set texto(texto){//teste
        this._texto = texto;
    }
}