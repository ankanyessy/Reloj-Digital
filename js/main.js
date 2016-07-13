function reloj(){

	//Extraemos la hora del sistema, Normalmente es la misma hora del Navegador
	var rTime= new Date();
	
	//Extraemos cantidad de Horas
    var rHours= rTime.getHours();
	
	//Extraemos cantidad de Minutos
    var rMinutes= rTime.getMinutes();
	
	//Extraemos cantidad de Segundos
    var rSeconds= rTime.getSeconds ( );
	
	//Mientras que los minutos sean menores que 10 concatenamos 0 a los minutos
    rMinutes=(rMinutes<10?"0" : "" ) + rMinutes;
    rSeconds= (rSeconds < 10 ? "0" : "") + rSeconds;
	
	//Aqui definimos si es Antes del Meridiano o Despues, basados en si las Horas son mayor a 12.
    var TimeOfDay= (rHours< 12)?"AM" : "PM";
    rHours=(rHours> 12)? rHours - 12 : rHours;
    rHours=(rHours== 0)? 12 : rHours;
	
	//Concatenamos valores de hora minutos y segundos.
    var rTimeStr= rHours + ":" + rMinutes + ":" + rSeconds + " " + TimeOfDay;
 
	//Actualizamos div que tiene id reloj con el contenido que tiene la variable rTimeStr
    $("#reloj").html(rTimeStr);

}

$(document).ready(reloj);

//Para que nuestra pagina ejecute la misma funcion cada 1 segundo 
$(document).ready(function(){
   setInterval("reloj()", 1000);
});

//Para mostrar en pantalla ciudades
$(".agregar").on("click", function(){
	$(".zonaHoraria").show();
});

//Al seleccionar ciudad hacer click en pantalla y ocultar div ciudades
$(".segundobtn").on("click", function(){
	$(".zonaHoraria").hide();
});

//Mostrar hora de las ciudades seleccionadas

/*(function agregarHora(){
	//funciones
	var ciudades=[
			{Id:"Chicago",
			nombre:"Chicago",
			zonaHoraria:-5}, 

			{id:"SaoPaulo",
			nombre:"SaoPaulo",
			zonaHoraria:-3},

			{id:"Santiago",
			nombre:"Santiago",
			zonaHoraria:-4
			}, 

			{id:"Mexico",
			nombre:"Mexico",
			zonaHoraria:-5
			}, 

			{id:"Caracas",
			nombre:"Caracas",
			zonaHoraria:-4
			},

			{id:"Brasilia",
			nombre:"Brasilia",
			zonaHoraria: -3;
			}, 

			{id:"Quito",
			nombre:"Quito",
			zonaHoraria: -5
			}, 

			{id:"Guayaquil",
			nombre:"Guayaquil",
			zonaHoraria: -5
			}, 

			{id:"SantaMarta",
			nombre:"SantaMaria",
			zonaHoraria: -5
			},

			{id:"Bogota",
			nombre:"Bogota",
			zonaHoraria: -5
			}]
	var agregarHora=function(){};
	var nuevaHora=function(){};
	var mostrarHora=function(){};
	//eventos

	//agregar tarea
	//btnNuevaTarea.addEventListener("click", agregarTarea);


	//comprobar input
	nuevaHora.addEventListener(mostrarHora);
	for( var=ciudades; ciudades<=agregarHora.children.length-1; ciudades++){
		agregarHora.children[ciudades].addEventListener(reloj);
	}

});*/


