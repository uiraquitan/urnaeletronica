const candidatos = [
    { id: 1, numero: 22, nome: "Cacique Martins", img: "1" },
    { id: 2, numero: 52, nome: "Wagner Matos", img: "2" },
    { id: 3, numero: 32, nome: "Criatiano Bento", img: "3" },
    { id: 4, numero: 27, nome: "Camila Lartes", img: "4" },
    { id: 5, numero: 225, nome: "Julio Nones", img: "5" },
    { id: 6, numero: 527, nome: "Tamara Cristina", img: "6" },
    { id: 7, numero: 322, nome: "Carlos Albuquerque", img: "7" },
    { id: 8, numero: 279, nome: "Uiraquitan Pessoa", img: "8" },
    { id: 9, numero: 2242, nome: "Pâmela Martins", img: "19" },
    { id: 10, numero: 5252, nome: "Izaquiele Karis", img: "10" },
    { id: 11, numero: 3225, nome: "Kaio Martc", img: "11" },
    { id: 12, numero: 2752, nome: "Ivam Fredchi", img: "12" },
    { id: 13, numero: 22221, nome: "Ana Link", img: "20" },
    { id: 14, numero: 52322, nome: "Tercia Larissa", img: "13" },
    { id: 15, numero: 27000, nome: "Larissa Berts", img: "14" },
    { id: 16, numero: 32535, nome: "Anny Yaskusi", img: "15" },
    { id: 17, numero: 22522, nome: "Iamimoto Larque", img: "16" },
    { id: 18, numero: 32152, nome: "Tharli Queri", img: "17" },
    { id: 19, numero: 27625, nome: "Margo Ster", img: "18" },
    { id: 20, numero: 00, nome: "00", img: "1" },
    { id: 21, numero: 000, nome: "000", img: "1" },
    { id: 21, numero: 0000, nome: "0000", img: "1" },
    { id: 21, numero: 00000, nome: "00000", img: "1" },
]

// Selecionando todos os botoes numéricos
const btnNumeros = document.querySelectorAll(".numero ul li");

// selecionando botoes de opções
const btnBranco = document.querySelector("[data-btnBranco]");
const btnCorrigir = document.querySelector("[data-btnCorrigir]");
const btnConfirmar = document.querySelector("[data-btnConfirmar]");
const btnConfirma = document.querySelector("[data-btnConfirma]");

/* TRABALHANDO COM OS NUMEROS DA URNA*/

let voto = [];
function numeroUrna(e) {
    voto.push(e.target.innerText);
    tela();
    if (voto.length == telas.length) {
        if (candidato()) {
            let infor = ` 
            <li><span>Numero</span>: ${candidato().numero}</li>
            <li><span>Nome</span>: ${candidato().nome}</li>
            `;
            let imagem = `
            <img src="./imagens/${candidato().img}.jpeg" alt="">
            `;
            document.querySelector(".dados ul").innerHTML = infor;
            document.querySelector(".img_candidato").innerHTML = imagem;

        }

    }
}

btnNumeros.forEach((item) => {
    item.addEventListener("click", numeroUrna);
});

// SELECIONANDO O VISOR e trabalhando com o visor
const telas = document.querySelectorAll(".escolha span");

function tela() {
    let i = 0;
    for (let index = 0; index < voto.length; index++) {
        if (voto.length <= telas.length) {
            telas[index].innerHTML = voto[index];
        }
    }

}

// buscando candidado
function candidato() {
    let juntar = "";
    telas.forEach((buscar) => {
        juntar += buscar.innerText;
    });

    let candidadoEncontrado = candidatos.find(item => item.numero == juntar);
    if (!candidadoEncontrado) {
        let infor = ` 
        <li>Candidato não encontrado</li>
       `;
        let imagem = `
        <img src="./erro.png" alt="">
        `;

        document.querySelector(".img_candidato").innerHTML = imagem;
        document.querySelector(".dados ul").innerHTML = infor;

        return;
    }
    return candidadoEncontrado;
}

// trabalhando com botões
function confirmar() {
    let infor = ` 
        <p>Confirmar Voto ?</p>
       `;
    document.querySelector(".dadoss").innerHTML = infor;
}

function confirma() {

    setInterval(() => {
        telas.forEach((item) => {
            item.innerText = "";
        });

        document.querySelector(".dados ul").innerHTML = "";
        document.querySelector(".img_candidato").innerHTML = "";
        document.querySelector(".img_candidato").innerHTML = "";
        document.querySelector(".dadoss").innerHTML = "";
        
    }, 300);

}

btnConfirmar.addEventListener("click", confirmar);
btnConfirma.addEventListener("click", confirma);