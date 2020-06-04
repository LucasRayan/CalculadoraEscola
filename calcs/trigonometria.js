function formatoComDecimal(numero){
    return numero.toFixed(3).replace(".",",")
}
function formatoSemDecimal(numero){
    return numero.toFixed().replace(".",",")
}

const angulos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
     41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
     61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
     81, 82, 83, 84, 85, 86, 87, 88, 89
];

var catetoAdjacente = document.getElementById('inputCatetoAdjacente') || calcCateA;
var catetoOposto = document.getElementById('inputCatetoOposto') || calcCateO;
var Hipotenusa = document.getElementById('inputHipotenusa') || calcHip;

function calcCatetoAdjacente() {
    var calcCateA = Math.pow(Math.pow(Hipotenusa.value, 2) - Math.pow(catetoOposto.value, 2), 0.5)
    buttonCalcCatetoAdjacente.innerHTML = `Cateto<br>Adjacente = ${formatoSemDecimal(calcCateA)}`;
    return document.getElementById('inputCatetoAdjacente').value = `${formatoSemDecimal(calcCateA)}`;
}

function calcCatetoOposto() {
    var calcCateO = Math.pow(Math.pow(Hipotenusa.value, 2) - Math.pow(catetoAdjacente.value, 2), 0.5)
    buttonCalcCatetoOposto.innerHTML = `Cateto<br>Oposto = ${formatoSemDecimal(calcCateO)}`;
    return document.getElementById('inputCatetoOposto').value = `${formatoSemDecimal(calcCateO)}`;
}

function calcHipotenusa() {
    var calcHip = Math.pow(Math.pow(catetoAdjacente.value, 2) + Math.pow(catetoOposto.value, 2), 0.5)
    buttonCalcHipotenusa.innerHTML = `Hipotenusa = ${formatoSemDecimal(calcHip)}`;
    return document.getElementById('inputHipotenusa').value = `${formatoSemDecimal(calcHip)}`;
}

function calcSeno() {
    var calcSen = catetoOposto.value/Hipotenusa.value;
    const valoresSeno = [
        0.017, 0.035, 0.052, 0.070, 0.087, 0.105, 0.122, 0.139, 0.156, 0.174, 0.191, 0.208, 0.225,
         0.242, 0.259, 0.276, 0.292, 0.309, 0.326, 0.342, 0.358, 0.375, 0.391, 0.407, 0.423, 0.438,
         0.454, 0.469, 0.485, 0.500, 0.515, 0.530, 0.545, 0.559, 0.574, 0.588, 0.602, 0.616, 0.629,
         0.643, 0.656, 0.669, 0.682, 0.695, 0.707, 0.719, 0.731, 0.743, 0.755, 0.766, 0.777, 0.788,
         0.799, 0.809, 0.819, 0.829, 0.839, 0.848, 0.857, 0.866, 0.875, 0.883, 0.891, 0.899, 0.906,
         0.914, 0.921, 0.927, 0.934, 0.940, 0.946, 0.951, 0.956, 0.961, 0.966, 0.970, 0.974, 0.978,
         0.982, 0.985, 0.988, 0.990, 0.993, 0.995, 0.996, 0.998, 0.999, 0.999, 1.000
    ];
    var seno = valoresSeno.reduce(function(anterior, corrente) {
        return (Math.abs(corrente - calcSen) < Math.abs(anterior - calcSen) ? corrente : anterior);
    });
    var valorAnguloSen = valoresSeno.indexOf(seno);
    var anguloSen = angulos[valorAnguloSen];
    return buttonCalcSeno.innerHTML = `Seno X = ${formatoComDecimal(seno)}<br>ou ${anguloSen}°`;
}

function calcCosseno() {
    var calcCos = catetoAdjacente.value/Hipotenusa.value;
    const valoresCosseno = [
        1.000, 0.999, 0.999, 0.998, 0.996, 0.995, 0.993, 0.990, 0.988, 0.985, 0.982, 0.978, 0.974,
         0.970, 0.966, 0.961, 0.956, 0.951, 0.946, 0.940, 0.934, 0.927, 0.921, 0.914, 0.906, 0.899,
         0.891, 0.883, 0.875, 0.866, 0.857, 0.848, 0.839, 0.829, 0.819, 0.809, 0.799, 0.788, 0.777,
         0.766, 0.755, 0.743, 0.731, 0.719, 0.707, 0.695, 0.682, 0.669, 0.656, 0.643, 0.629, 0.616,
         0.602, 0.588, 0.574, 0.559, 0.545, 0.530, 0.515, 0.500, 0.485, 0.469, 0.454, 0.438, 0.423,
         0.407, 0.391, 0.375, 0.358, 0.342, 0.326, 0.309, 0.292, 0.276, 0.259, 0.242, 0.225, 0.208,
         0.191, 0.174, 0.156, 0.139, 0.122, 0.105, 0.087, 0.070, 0.052, 0.035, 0.017
    ];
    var cosseno = valoresCosseno.reduce(function(anterior, corrente) {
        return (Math.abs(corrente - calcCos) < Math.abs(anterior - calcCos) ? corrente : anterior);
    });
    var valorAnguloCos = valoresCosseno.indexOf(cosseno);
    var anguloCos = angulos[valorAnguloCos];
    return buttonCalcCosseno.innerHTML = `Cosseno X = ${formatoComDecimal(cosseno)}<br>ou ${anguloCos}°`;
}

function calcTangente() {
    var calcTg = catetoOposto.value/catetoAdjacente.value;
    const valoresTangente = [
        0.017, 0.035, 0.052, 0.070, 0.087, 0.105, 0.123, 0.141, 0.158, 0.176, 0.194, 0.213, 0.231,
         0.249, 0.268, 0.287, 0.306, 0.325, 0.344, 0.364, 0.384, 0.404, 0.424, 0.445, 0.466, 0.488,
         0.510, 0.532, 0.554, 0.577, 0.601, 0.625, 0.649, 0.675, 0.700, 0.727, 0.754, 0.781, 0.810,
         0.839, 0.869, 0.900, 0.933, 0.966, 1.000, 1.036, 1.072, 1.111, 1.150, 1.192, 1.235, 1.280,
         1.327, 1.376, 1.428, 1.483, 1.540, 1.600, 1.664, 1.732, 1.804, 1.881, 1.963, 2.050, 2.145,
         2.246, 2.356, 2.475, 2.605, 2.747, 2.904, 3.078, 3.271, 3.487, 3.732, 4.011, 4.332, 4.705,
         5.145, 5.671, 6.314, 7.115, 8.144, 9.514, 11.430, 14.301, 19.081, 28.636, 57.290
    ];
    var tangente = valoresTangente.reduce(function(anterior, corrente) {
        return (Math.abs(corrente - calcTg) < Math.abs(anterior - calcTg) ? corrente : anterior);
    });
    var valorAnguloTg = valoresTangente.indexOf(tangente);
    var anguloTg = angulos[valorAnguloTg];
    return buttonCalcTangente.innerHTML = `Tangente = ${formatoComDecimal(tangente)}<br>ou ${anguloTg}°`;
}