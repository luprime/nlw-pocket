// Seleção dos elementos HTML por ID
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
}

// Atualiza o estado do wrapper conforme o conteúdo do elemento
function updateEditableWrapperState(element, wrapper) {
  //trim remove espaços em branco no início e no fim
  const hasText = element.textContent.trim().length > 0

  // toggle adiciona ou remove a classe dependendo do valor booleano
  wrapper.classList.toggle("is-empty", !hasText)
}

// Atualiza o estado de todos os elementos editáveis
function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

//Adiciona ouvintes de input para utilizar wrappers em tempo real
function attachAllEditableHandlers() {

    elements.promptTitle.addEventListener("input", () => {
      updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
    })
    elements.promptContent.addEventListener("input", () => {
      updateEditableWrapperState(
        elements.promptContent,
        elements.contentWrapper
      )
    })
}

// Inicialização
function init() {
  attachAllEditableHandlers()
  updateAllEditableStates()
}
// Executa a inicialização ao carregar o script
init()
