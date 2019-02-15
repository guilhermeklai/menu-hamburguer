//  const caixas = document.querySelectorAll('.caixa');
//  console.log(caixas)

// const botao = document.querySelector('button');

//  const transformarEmTomate = () => {
//     caixas[0].classList.add('tomato')
//  }
//  botao.onclick = 

const burguer = document.querySelector('[menu-button]');
const meunuItens = document.querySelector('[menu-items]');

const toggleMenu = () => {
    meunuItens.classList.toggle('esconde')
}

burguer.onclick = toggleMenu;