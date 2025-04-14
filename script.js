
const itens = [
  { tipo: "comida", nome: "🍕 Pizza", preco: 35 },
  { tipo: "comida", nome: "🍔 Hambúrguer", preco: 25 },
  { tipo: "comida", nome: "🍣 Sushi", preco: 40 },
  { tipo: "erva", nome: "🌿 Purple Haze", preco: 40 },
  { tipo: "erva", nome: "🍋 Lemon Kush", preco: 45 },
  { tipo: "erva", nome: "🧱 Haxixe", preco: 50 },
  { tipo: "bebida", nome: "💧 Água", preco: 3 },
  { tipo: "bebida", nome: "🥤 Refrigerante", preco: 7 },
  { tipo: "bebida", nome: "🥭 Suco de manga", preco: 10 }
];

let carrinho = [];

function renderizar(itensFiltrados) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  itensFiltrados.forEach(item => {
    const itemHTML = document.createElement('div');
    itemHTML.className = 'item';
    itemHTML.innerHTML = `
      <div>${item.nome}</div>
      <div class="preco">R$ ${item.preco}</div>
      <button onclick='adicionarAoCarrinho(${JSON.stringify(item)})'>Adicionar</button>
    `;
    catalogo.appendChild(itemHTML);
  });
}

function adicionarAoCarrinho(item) {
  carrinho.push(item);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const divCarrinho = document.getElementById("carrinho");
  divCarrinho.innerHTML = "<strong>Carrinho:</strong> ";
  carrinho.forEach((item, index) => {
    const span = document.createElement("span");
    span.textContent = `${item.nome} `;
    divCarrinho.appendChild(span);
  });
}

function filtrar(tipo) {
  if (tipo === "todos") {
    renderizar(itens);
  } else {
    const filtrados = itens.filter(item => item.tipo === tipo);
    renderizar(filtrados);
  }
}

// Renderiza todos inicialmente
renderizar(itens);
