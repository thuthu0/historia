const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com um mostro, o que fazer?",
        alternativas: [
            {
                texto: "Correr",
                afirmacao: "você foge do monstro . "
            },
            {
                texto: "atacar",
                afirmacao: "Você ataca o monstro, ele foge de você."
            }
        ]
    },
    {
        enunciado: "Depois do acontecimento do monstro você se depara com uma batata voatora de outra dimenção, ele faz uma pergunda,'qual o sentido da vida?'a batata pergunta",
        alternativas: [
            {
                texto: "42.",
                afirmacao: "A batata explode com a resposta."
            },
            {
                texto: "Nada.",
                afirmacao: "a batata fica com a resposta triste e vai embora."
            }
        ]
    },
    {
        enunciado: "depois disso você vai para casa para durmir, mas não sabe aonde dormir, onde você quer dormir?",
        alternativas: [
            {
                texto: "Sofa.",
                afirmacao: "Você tem um pesadelo."
            },
            {
                texto: "cama.",
                afirmacao: "Você não dorme."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
