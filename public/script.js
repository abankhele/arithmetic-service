function calc_sum() {
    var int1 = parseFloat(document.getElementById("num1").value);
    var int2 = parseFloat(document.getElementById("num2").value);

        var sum = int1 + int2;
        document.getElementById("calc_sum").innerHTML = sum;
}