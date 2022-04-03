//BARRA DE NAVEGACIÓN: enlaces y datos.
//gardar los datos en arrays:
/*var titulos=new Array();
var enlaces=new Array();
//Datos de los submenús
titulos[0]=new Array(
          "Partes del pc",
          "Historia");
enlaces[0]=new Array("#","#");
titulos[1]=new Array(
          "ICFES",
          "Colegio");
enlaces[1]=new Array("#","#");
titulos[2]=new Array(
          "Historia",
          "Topologia");
enlaces[2]=new Array("#","#");*/	

//dmenusssss
/*var menu=new Array()
var submenu=new Array()*/

/*var sobre=document.getElementById("menuaqui");

function submenu1 ()
{
	document.getElementById("menuaqui").innerHTML +='<ul><li><a href="as">Partes</a></li></ul>';
}








var aleluia=new Array ()
/*
//funcion de cambiar color de los botones
/*window.onload=function()/*
{
	
/*	aleluia=document.getElementById("menuaqui")

	aleluia.innerHTML +='<ul><li><a href="xzz">Partes</a></li></ul>'
*/


/*	
	var sobre2=document.getElementById("grande2");
	var sobre3=document.getElementById("grande3");
	var sobre4=document.getElementById("grande4")
//cuando esta encima
			sobre.onmouseover = function(e)
			{
				/*document.getElementById("grande").style.backgroundColor='#6f6f6f';
				
			};

			sobre2.onmouseover = function(e)
			{
				/*document.getElementById("grande2").style.backgroundColor='#6f6f6f';
			};
			
			sobre3.onmouseover = function(e)
			{
				/*document.getElementById("grande3").style.backgroundColor='#6f6f6f';
			};
			
			sobre4.onmouseover = function(e)
			{
				/*document.getElementById("grande4").style.backgroundColor='#6f6f6f';
			};
			

//cuando se va
			sobre.onmouseout = function(e)
			{
				/*document.getElementById("grande").style.backgroundColor='#8f8f8f';
			};
			
			sobre2.onmouseout = function(e)
			{
				/*document.getElementById("grande2").style.backgroundColor='#8f8f8f';
			};

			sobre3.onmouseout = function(e)
			{
				/*document.getElementById("grande3").style.backgroundColor='#8f8f8f';
			};

			sobre4.onmouseout = function(e)
			{
				/*document.getElementById("grande4").style.backgroundColor='#8f8f8f';
			};*/

//para el menu desplegale
/*			for (i=0;i<titulos.length;i++) {
     //localizar elementos principales
     menu[i]=document.getElementById("section"+i);
     //crear elemento menu desplegable
     menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
     //localizar elemento menu desplegable
     submenu[i]=document.getElementById('subseccion'+i);
     //escribir menu desplegable
     for (j=0;j<titulos[i].length;j++) {
         submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
         }
     }
}*/


//funcion para la tabla de respuestas
var sobre=document.getElementById("grande2");

window.onload =function()
{ 
	sobre.onmouseover=function(e)
	
	{
		document.getElementById("patata").style.display="block";
	}

}
			
function icfes ()
			{	
var A1;
var B1;
var C1;
var D1;
	var A2;
	var B2;
	var C2;
	var D2;
		var A3;
		var B3;
		var C3;
		var D3;
			var A4;
			var B4;
			var C4;
			var D4;
				var A5;
				var B5;
				var C5;
				var D5;
					var A6;
					var B6;
					var C6;
					var D6;
				var A7;
				var B7;
				var C7;
				var D7;					
			var A8;
			var B8;
			var C8;
			var D8;
		var A9;
		var B9;
		var C9;
		var D9;
	var A10;
	var B10;
	var C10;
	var D10;
A1=document.getElementById("a1").value;
B1=document.getElementById("b1").value;
C1=document.getElementById("c1").value;
D1=document.getElementById("d1").value;
	A2=document.getElementById("a2").value;
	B2=document.getElementById("b2").value;
	C2=document.getElementById("c2").value;
	D2=document.getElementById("d2").value;
		A3=document.getElementById("a3").value;
		B3=document.getElementById("b3").value;
		C3=document.getElementById("c3").value;
		D3=document.getElementById("d3").value;
			A4=document.getElementById("a4").value;
			B4=document.getElementById("b4").value;
			C4=document.getElementById("c4").value;
			D4=document.getElementById("d4").value;	
				A5=document.getElementById("a5").value;
				B5=document.getElementById("b5").value;
				C5=document.getElementById("c5").value;
				D5=document.getElementById("d5").value;	
			A6=document.getElementById("a6").value;
			B6=document.getElementById("b6").value;
			C6=document.getElementById("c6").value;
			D6=document.getElementById("d6").value;	
		A7=document.getElementById("a7").value;
		B7=document.getElementById("b7").value;
		C7=document.getElementById("c7").value;
		D7=document.getElementById("d7").value;	
	A8=document.getElementById("a8").value;
	B8=document.getElementById("b8").value;
	C8=document.getElementById("c8").value;
	D8=document.getElementById("d8").value;	
A9=document.getElementById("a9").value;
B9=document.getElementById("b9").value;
C9=document.getElementById("c9").value;
D9=document.getElementById("d9").value;	
	A10=document.getElementById("a10").value;
	B10=document.getElementById("b10").value;
	C10=document.getElementById("c10").value;
	D10=document.getElementById("d10").value;					
					
					if ((C1=="X" || C1=="x") && (A1!=="X" && A1!=="x") && (B1!=="X" && B1!=="x") && (D1!=="X" && D1!=="x"))
					{
						var respuesta1= value=10;
					}
					else
					{
						var respuesta1= value=0;

					};

					if ((D2=="X" || D2=="x") && (A2!=="X" && A2!=="x") && (B2!=="X" && B2!=="x") && (C2!=="X" && C2!=="x"))
					{
						var respuesta2= value=10;
					}
					else
					{
						var respuesta2= value=0;

					};

					if ((B3=="X" || B3=="x") && (A3!=="X" && A3!=="x") && (C3!=="X" && C3!=="x") && (D3!=="X" && D3!=="x"))
					{
						var respuesta3= value=10;
					}
					else
					{
						var respuesta3= value=0;

					};

					if ((A4=="X" || A4=="x") && (B4!=="X" && B4!=="x") && (C4!=="X" && C4!=="x") && (D4!=="X" && D4!=="x"))
					{
						var respuesta4= value=10;
					}
					else
					{
						var respuesta4= value=0;

					};

					var calificacion = (respuesta1+respuesta2+respuesta3+respuesta4)/10
					document.getElementById("RES").innerHTML=(calificacion)

document.getElementById("botonaceptar").onclick = "";
				}

//RESPUESTAS: C,D,B,A