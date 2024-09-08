function Pesquisar() {
  let section = document.getElementById("resultados-pesquisa")
  console.log(section);

  let campoPesquisa = document.getElementById("Campo-Pesquisa").value

  console.log(campoPesquisa);

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum item foi perquisado!</p>"
    return
  }

  if (campoPesquisa.length <3) {
    section.innerHTML = "<p>Digite pelo menos 3 caracteres para pesquisar.</p>";
    return
  }
  
campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  // para cada dado dentro da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se no titulo includes campoPesquisa 
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
      {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.video}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"> mais informações aqui</a>
        </div>
      `
    }
    console.log(dado.titulo.includes(campoPesquisa))
      
    };

    if (!resultados) {
      resultados = "<p>Nenhuma informação encontrada</p>"
    }
  
  section.innerHTML = resultados
  
}
// console.log(dados);



// function Pesquisar() {
//   // Seleciona a seção onde os resultados serão exibidos pelo seu ID.
//   let section = document.getElementById("resultados-pesquisa");

//   // Inicializa uma string vazia para armazenar os resultados da pesquisa.
//   let resultados = "";

//   // Itera sobre cada item (dado) da lista de dados.
//   for (let dado of dados) {
//     // Constrói o HTML para cada resultado, formatando os dados dinamicamente.
//     // O template literal (``) facilita a criação de strings com múltiplas linhas e
//     // a interpolação de variáveis.
//     resultados += `
//       <div class="item-resultado">
//         <h2>
//           <a href="${dado.video}" target="_blank">${dado.titulo}</a>
//         </h2>
//         <p class="descrição-meta">${dado.descricao}</p>
//         <a href="${dado.link}" target="_blank"> mais informações aqui</a>
//       </div>
//     `;
//   }

//   // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
//   section.innerHTML = resultados;
// }