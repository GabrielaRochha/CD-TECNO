function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}




const div_data=document.getElementById("div_data")
div_data.innerHTML=new Intl.DateTimeFormat('pt-BR').format(new Date());



const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sServico = document.querySelector('servico')
const sDescricao = document.querySelector('descricao')
const sPreco = document.querySelector('preco')
const sQuantidade = document.querySelector('quantidade')
const sValor = document.querySelector('valor')
const btnSalvar = document.querySelector('btnSalvar')
const sTotal = document.querySelector('total')
const container = document.querySelector('container');

let itens;
let id;
let porcentagem = 100;
let controleCampo = 1;
let valor = Number('').toFixed(2);
let preco = Number('').toFixed(2);
let quantidade = Number('').toFixed(2);




function incluir1() {
  let tbody = document.getElementById("tbody"); // Selecione a tabela corretamente
  let tr = document.createElement('tr');

  tr.innerHTML = `
  <select id="m-servico" required>
  <option selected disabled value="Selecione">Selecione</option>
  <option>FIORI</option>
  <option>---</option>
  <option>---</option>
  <option>---</option>
  <option>---</option>
  </select>&nbsp;
  <td><input id="descricao" type="text" required />
  <td><input id="preco" type="string" onchange="" /></td>
  <td><input id="quantidade" type="string" onchange=""/></td>
  <td><input id="valor" type="number" onchange="calcular()"/></td>
  <td><button type="button" onclick="removerCampo()"> 🗑️ </button></td>
  `
  tbody.appendChild(tr);



}


function calcularResultado() {
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseFloat(document.getElementById("quantidade").value);

  // Verificar se os valores são válidos
  if (!isNaN(preco) && !isNaN(quantidade)) {
      const valor = preco * quantidade;
      document.getElementById("valor").value = valor;
      return
  } else {
      document.getElementById("valor").value = ""; // Limpar o campo de resultado se os valores não forem válidos
  }
}

// Adicionar eventos de entrada (input) aos campos de entrada para atualização automática
const precoInput = document.getElementById("preco");
const quantidadeInput = document.getElementById("quantidade");

precoInput.addEventListener("input", calcularResultado);
quantidadeInput.addEventListener("input", calcularResultado);


function incluir2() {
  let tr  = document.createElement('tr');

  tr.innerHTML = `
  <select id="m-porcentagem" required>
  <option selected disabled value="">Selecione</option>
  <option>10%</option>
  <option>20%</option>
  <option>30%</option>
  <option>40%</option>
  <option>50%</option>
  <option>60%</option>
  <option>70%</option>
  <option>80%</option>
  <option>90%</option>
  <option>100%</option>
  <td><input id="m-descricao2" type="text" required /></td>
  <td><input id="m-valor2" type="number" required /></td>
  <td><button type="button" onclick="removerCampo()"> 🗑️ </button></td>

  
  `
  tbody2.appendChild(tr)



}



//function loadItens() {
  //itens = getItensBD()
  //tbody.innerHTML = ''
  //itens.forEach((item, index) => {
  //insertItem(item, index)
  //})

//}






const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

//loadItens()


//Tabela 2 




  
