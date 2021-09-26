function calculate() {
    var imc;
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById('weight-val').textContent = weight + " kg";
    var height = parseInt(document.getElementById("height").value);
    document.getElementById('height-val').textContent = height + " cm";

    imc = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = imc;
    if (imc < 18.5) {
        category = "Abaixo do peso";
        result.style.color = "#ffc44d";
    } else if (imc >= 18.5 && imc <= 24.9) {
        category = "Peso normal";
        result.stylecolor = "#0be881";

    } else if (imc >= 25 && imc <= 29.9) {
        category = "Acima do peso";
        result.style.color = "#ff884d";
    } else {
        category = "Obeso";
        result.style.color = "#ff5e57";
    }
    document.getElementById("category").textContent = category;
}