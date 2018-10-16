while(true)
{
var pre = prompt("Soy un marciano que sé el fututo. Escribe tu pregunta:");
var pro = Math.random(); /*Toma valores entre 0 y 1*/

if (pro < 0.34)
{
	alert("NO");
}else if (pro <= 0.67)
	{
		alert("QUIZÁS")
	}else 
	{
		alert("Sí");
	}
console.log(pre,pro);
}
