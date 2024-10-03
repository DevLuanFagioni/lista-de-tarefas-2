
function adicionarTarefa() {
  const tarefaInput = document.getElementById("tarefaInput")
  const listaTarefa = document.getElementById("listaTarefa")
  const tarefa = tarefaInput.value

  // cria o elemento que contem a tarefa e adiciona para dentro da listaTarefa
  const li = document.createElement("li")
  li.textContent = tarefa
  listaTarefa.appendChild(li)

  // criar um botao e adiciona para dentro da nossa tarefa(elemento li)
  const botaoRemover = document.createElement("button")
  botaoRemover.textContent = "Remover"
  li.appendChild(botaoRemover)


  // verifica um evento de click no botao e remove a tarefa
  botaoRemover.addEventListener('click', ()=>{
    li.style.display = "none"
  })

  // Limpa o input
  tarefaInput.value = ""

}
