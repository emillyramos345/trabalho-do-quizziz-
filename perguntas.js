const perguntas = [
    {
        pergunta: "De quem é a musica 'Deus é além''?",
        opcoes: [
            "Bruna Olly",
            "Thales",
            "Cassiane",
            "Ana paula"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "Qual a musica de talles'?",
        opcoes: [
            "Geração bem aventurada",
            "Não pare",
            "Deus faz além ",
            "Eu sei"
        ],
        resposta: 1
    },
    {
        pergunta: "Quem canta a musica 'Bençãos que não tem fim'?",
        opcoes: [
            "Isadora pompeo",
            "Akine barros",
            "anita",
            "Claudia leitte"
        ],
        resposta: 0
    },
    {
        pergunta: "Quem foi o pai dos musicos?",
        opcoes: [
            "Iracema",
            "Johann sebastian",
            "lula",
            "vicente neri"
        ],
        resposta: 1
    
    },
    {
        pergunta: "Qual musica é da ludmila'?",
        opcoes: [
            "Maliciosa",
            "Bellakeo",
            "Coração cigano",
            "Solteiro forçado"
        ],
        resposta: 0
    },
    {
        pergunta: "Em que ano foi lançado a primeira musica da ana castela'?",
        opcoes: [
            "2021",
            "1888",
            "2019",
            "2003"
        ],
        resposta: 2
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;