class NegociacaoController{
    constructor(){
       let $ = document.querySelector.bind(document);
       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');
       this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event){
       event.preventDefault();
       // let data = new Date(this._inputData.value.split('-').join(',')); Forma não regular tratando data string
       // let data = new Date(this._inputData.value.replace(/-/g,',')); Expressão regular
               
       let negociacao = new Negociacao(
           DateHelper.textoParaData(this._inputData.value),
           this._inputQuantidade.value,
           this._inputValor.value
       );

       this._listaNegociacoes.adiciona(negociacao);
       console.log(this._listaNegociacoes.negociacoes.length);

       console.log(DateHelper.dataParaTexto(negociacao.data));
       console.log(negociacao);
       this.limpaCampos();
       //alert('Chamei ação no controller');
    }
    
    limpaCampos(){
       this._inputData.value  = '';
       this._inputQuantidade.value  = 1;
       this._inputValor.value  = 0;
    
       this._inputData.focus();
    }
}