const jogosLista = document.getElementById("jogos-lista");
const imageFallback = "assets/sem-imagem.jpg";
const APIURL = "https://www.cheapshark.com/api/1.0/deals?pageSize=12&storeID=1&onSale=1&AAA=1"

const opcoes = {
  buscaAtiva: "",
  ordAtual: "Deal Rating",
  pagAtual: 0
}

function calcularDesconto(precoNormal, precoAtual) {
  precoNormal = parseFloat(precoNormal);
  precoAtual = parseFloat(precoAtual);

  if(precoAtual === 0)
    return "Grátis";

  const porcentagem = 100 - precoAtual / precoNormal * 100;
  return `-${Math.round(porcentagem)}%`;
}

function carregarDados(url = APIURL) {
  if(opcoes.pagAtual)
    url += `&pageNumber=${opcoes.pagAtual}`;
  
  if(opcoes.buscaAtiva)
    url += `&title=${opcoes.buscaAtiva}`;
    
  if(opcoes.ordAtual)
    url += `&sortBy=${opcoes.ordAtual}`;

  if(opcoes.ordDecres)
    url += `&desc=1`;
    
  return fetch(url)
    .then(resp => resp.json())
    .then(data => renderizarOfertas(data))
    .catch(() => alert("Erro ao Carregar as Ofertas"));
}

function buscarJogos(event) {
  event.preventDefault();
  opcoes.pagAtual = 0;
  opcoes.buscaAtiva = event.target.value;
  jogosLista.innerHTML = "";

  carregarDados()
}

function ordenarLista(event) {
  const valores = event.target.value?.split(",");

  event.preventDefault();
  opcoes.pagAtual = 0;
  opcoes.ordDecres = !!valores[1];
  opcoes.ordAtual = valores[0];
  jogosLista.innerHTML = "";

  carregarDados()
}

function proximaPagina() {
  opcoes.pagAtual++;

  carregarDados()
}

function fallbackImagem(image, url = imageFallback) {
  image.onError = null;
  image.src = url;
}

function renderizarOfertas(data) {
  data.map(oferta => {
    jogosLista.innerHTML += `
      <article class="oferta">
        <figure>
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/${oferta.steamAppID}/header.jpg" onerror="fallbackImagem(this)" alt="${oferta.title}">
        </figure>

        <section class="conteiner-jogo">
          <h3>${oferta.title}</h3>
        
          <div class="informacao">
            <button class="botao detalhe">Detalhes</button>

            <div>
              <small class="preco-normal">$ ${oferta.normalPrice}</small>
              <h5 class="preco-oferta">$ ${oferta.salePrice}</h5>
            </div>
            <button class="botao desconto">${calcularDesconto(oferta.normalPrice, oferta.salePrice)}</button>
          </div>
        </section>
      </article>
      `;
  });
}

window.onload = () => {
  carregarDados()
};
