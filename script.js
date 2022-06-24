function gerart() {
	var number1;
	var number2;
	var result = "";

	number1 = Number(document.getElementById("number1").value);
	number2 = Number(document.getElementById("number2").value);

	for(var i = 1; i<= number2; i++){
		result = result + "<p>"+number1 + " x " + i + " = " + number1 * i+"</p>";

	}

	document.getElementById("result").innerHTML = result;
	document.getElementById("result").style.visibility = "visible";
}
