// Função para calcular o total automaticamente com base no preço e quantidade
function calcularTotal() {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    if (preco > 0 && quantidade >= 1) {
        var total = preco * quantidade;
        document.getElementById("total").value = total.toFixed(2); // Arredondar para 2 casas decimais
    } else {
        document.getElementById("total").value = "0.00"; // Se valores inválidos, o total fica 0.00
    }
}

// Função de validação do formulário
function validarFormulario(event) {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);

    // Verificar se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        alert("O preço deve ser um número válido maior que 0.");
        event.preventDefault();
        return false;
    }

    // Verificar se a quantidade é um número válido
    if (isNaN(quantidade) || quantidade < 1) {
        alert("A quantidade deve ser um número válido e no mínimo 1.");
        event.preventDefault();
        return false;
    }

    // Se tudo estiver correto, o formulário será enviado
    return true;
}

// Adicionando evento de 'input' para o campo preço e quantidade para recalcular o total automaticamente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("preco").addEventListener('input', calcularTotal);
    document.getElementById("quantidade").addEventListener('input', calcularTotal);
});