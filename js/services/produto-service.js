class ProdutoService{
    constructor(){

        //Referencia da colecao com o conversor aplicado
        this.produtosRef = db.collection('produtos')
        .withConverter(produtoConverter)
        //elementos da dom
        this.produtoLista = document.getElementById('produtosLista')
        this.produtosTabela = document.getElementById('produtosTabela')
        this.loadingDiv = document.getElementById('loading')
    }
    carregarProdutos(){
        this.produtosRef.onSnapshot(
            (snapshot) => this.processarSnapshot(snapshot),
            (error) => this.tratarErro(error)
        )
    }

    processarSnapshot(snapshot){
        this.produtoLista.innerHTML = '';
        this.loadingDiv.style.display = 'none';
        this.produtosTabela.style.display = 'table';

        snapshot.forEach((doc) => {
            const produto = doc.data()
            this.adicionarProdutoNaTabela(produto)
        })
    }

    adicionarProdutoNaTabela(produto){
        const div = document.createElement('div');
        div.style.display = 'flex'
        div.style.width = '100%'
        div.innerHTML = `
        <div class="px-4 py-2 px-1 text-sm" style="width: 100%; color: #f1f1f1;">
          <span class="text-sm">${produto.nome}</span>
        </div>
        <div class="py-2 px-1 text-sm" style="width: 100%; color: #f1f1f1;">
          <span class="text-sm">${produto.descricao}</span>
        </div>
        <div class="py-2 px-1 text-sm" style="width: 100%; color: #f1f1f1;">
          <span class="text-sm">${produto.precoFormatado()}</span>
        </div>
        <div class="py-2 px-1 text-sm" style="width: 100%; color: #f1f1f1;">
          <span class="text-sm">${produto.estoque}</span>
        </div>
                <div class="py-2 px-1 text-sm" style="width: 100%; color: #f1f1f1;">
          <span class="text-sm">${produto.categoria}</span>
        </div>
        `

        this.produtoLista.appendChild(div)
    }

    tratarErro(error){
        console.log(error)
    }
}