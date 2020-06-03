function formatoComDecimal(numero){
    return numero.toFixed(3).replace(".",",")
}
function formatoSemDecimal(numero){
    return numero.toFixed().replace(".",",")
}

var catetoAdjacente = document.getElementById('inputCatetoAdjacente');
var catetoOposto = document.getElementById('inputCatetoOposto');
var Hipotenusa = document.getElementById('inputHipotenusa');

function calcCatetoAdjacente() {
    var calcCateA = Math.pow(Math.pow(Hipotenusa.value, 2) - Math.pow(catetoOposto.value, 2), 0.5)
    return buttonCalcCatetoAdjacente.innerHTML = `Cateto Adjacente = ${formatoSemDecimal(calcCateA)}`;
}
function calcCatetoOposto() {
    var calcCateO = Math.pow(Math.pow(Hipotenusa.value, 2) - Math.pow(catetoAdjacente.value, 2), 0.5)
    return buttonCalcCatetoOposto.innerHTML = `Cateto Oposto = ${formatoSemDecimal(calcCateO)}`;
}
function calcHipotenusa() {
    var calcHip = Math.pow(Math.pow(catetoAdjacente.value, 2) + Math.pow(catetoOposto.value, 2), 0.5)
    return buttonCalcHipotenusa.innerHTML = `Hipotenusa = ${formatoSemDecimal(calcHip)}`;
}
function calcSeno() {
    var calcSen = 0.015;
    var angulo = ""
    if (calcSen <= 0.017) {
        angulo = "1°";
    } else if (calcSen <= 0.035) {
        angulo = "2°";
    } else if (calcSen <= 0.052) {
        angulo = "3°";
    } else if (calcSen <= 0.070) {
        angulo = "4°";
    } else if (calcSen <= 0.087) {
        angulo = "5°";
    } else if (calcSen <= 0.105) {
        angulo = "6°";
    } else if (calcSen <= 0.122) {
        angulo = "7°";
    } else if (calcSen <= 0.139) {
        angulo = "8°";
    } else if (calcSen <= 0.156) {
        angulo = "9°";
    } else if (calcSen <= 0.174) {
        angulo = "10°";
    } else if (calcSen <= 0.191) {
        angulo = "11°";
    } else if (calcSen <= 0.208) {
        angulo = "12°";
    } else if (calcSen <= 0.225) {
        angulo = "13°";
    } else if (calcSen <= 0.249) {
        angulo = "14°";
    }
    return buttonCalcSeno.innerHTML = `Seno = ${formatoComDecimal(calcSen)} ou ${angulo}`;
}