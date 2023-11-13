var nome = "Lucas"

var valorEmBitCoin = 0.075;
var cotacaoDoBitCoin = 182.200;
var valorEmReal = valorEmBitCoin * cotacaoDoBitCoin;

var anosLuz = 15;
var conversaoAnosLuz = 9460730777119560;
var metro = anosLuz * conversaoAnosLuz;

alert("Olá " + nome + ".\n" + valorEmBitCoin + " BitCoins = " + valorEmReal.toFixed(2) + " Reais.");