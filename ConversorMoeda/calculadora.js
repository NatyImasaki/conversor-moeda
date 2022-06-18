function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5 
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é: " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
    var valorEmBitcoin = valorEmDolar * 0.000021
    var valorEmBitcoinFixado = valorEmBitcoin.toFixed(6)
    var elementoValorConvertido2 = document.getElementById("valorConvertidoBitcoin2")
    var valorConvertidoBitcoin = "O resultado em bitcoin é: " + valorEmBitcoinFixado
    elementoValorConvertido2.innerHTML = valorConvertidoBitcoin
    

}
function ConverterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valor = valorElemento.value;
    var valorEmEuro = parseFloat(valor);
    var valorEmReal = valorEmEuro * 6
    var elementoValorConvertido = document.getElementById("valorConvertidoEuro")
    var valorConvertidoEuro = "O resultado em real é: " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertidoEuro
    var valorEmBitcoin = valorEmEuro * 0.000025
    var valorEmBitcoinFixado = valorEmBitcoin.toFixed(6)
    var elementoValorConvertido2 = document.getElementById("valorConvertidoBitcoin")
    var valorConvertidoBitcoin = "O resultado em bitcoin é: " + valorEmBitcoinFixado
    elementoValorConvertido2.innerHTML = valorConvertidoBitcoin



}
