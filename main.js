const form = document.getElementById("form-nome");
let linhas = '';
const nome = [];
const numero = [];



form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    validaNumeros();
    adicionaLinha();
    atualizaTabela(); 

    if (!validaNumeros(inputNumeroContato.value)) {
    avisoTelefone.style.display = "block";
    }
});

document.getElementById("numero-contato").addEventListener('input'), function(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ``);
    input.value = value;
    avisoTelefone.style.display = "none";

}

function validaNumeros(valor) {
    return /^[0-9]+$/.test(valor);
}

function adicionaLinha() {
    
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (numero.includes(parseFloat(inputNumeroContato.value)) || (nome.includes(inputNomeContato.value))) {
        alert(`Esse número ${inputNumeroContato.value} de contato ou o nome ${inputNomeContato.value}já foi inserido na sua agenda!!!`);
    } else {
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