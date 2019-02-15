class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {
        event.preventDefault();
        // let data = new Date(this._inputData.value.split('-').join(',')); Forma não regular tratando data string
        // let data = new Date(this._inputData.value.replace(/-/g,',')); Expressão regular

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        //this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); serve tb porém está fora do adiciona, preciso de cópia da lista
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes.length);
        //this._listaNegociacoes.negociacoes.length=0; não zera devido ao concat, cópia da lista
        console.log(this._listaNegociacoes.negociacoes);
        //alert('Chamei ação no controller');
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}