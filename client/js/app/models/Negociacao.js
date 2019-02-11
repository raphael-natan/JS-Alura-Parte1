class Negociacao{
    constructor(data, quantidade, valor){
        this._data = data;//underline não permite modificação 
        this._quantidade = quantidade;
        this._valor = valor;
    }    
    /* constructor(){
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    } */
    getVolume(){
        return this._quantidade * this._valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor(){
        return this._valor;
    }
}