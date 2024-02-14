const form = document.getElementById("form-nome");
let linhas = '';
const nome = [];
const numero = [];



form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

document.getElementById("numero-contato").addEventListener('input'), function(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ``);
    input.value = value;
    avisoTelefone.style.display = "none";

}

function adicionaLinha() {
    
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (numero.includes(parseFloat(inputNumeroContato.value)) || (nome.includes(inputNomeContato.value))) {
        document.querySelector(".error-mensage").style.display = "block";
    } else {
        document.querySelector(".error-mensage").style.display = "none";
        nome.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}