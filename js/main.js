function reloj (){
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
    rSeconds= ( rSeconds < 10 ? "0" : "" ) + rSeconds;
	
	//Aqui definimos si es Antes del Meridiano o Despues, basados en si las Horas son mayor a 12.
    var TimeOfDay= (rHours< 12)?"AM" : "PM";
    rHours=(rHours> 12)? rHours - 12 : rHours;
    rHours=(rHours== 0)? 12 : rHours;
	
	//Concatenamos valores de hora minutos y segundos.
    var rTimeStr= rHours + ":" + rMinutes + ":" + rSeconds + " " + TimeOfDay;
 
	//Actualizamos div que tiene id reloj con el contenido que tiene la variable rTimeStr
    $("#reloj").html(rTimeStr);
}
//Para que nuestra pagina ejecute la misma funcion cada 1 segundo 
$(document).ready(function(){
   setInterval('reloj()', 1000);
});

/*$(document).ready(function(){
	$("#EligeZona").live("click", function(){
		alert("Eligue zona horaria")
	});
});




$(document.body)
.append("<div class="reloj" data-offset="-5" data-label="Chicago" id="chicago"></div>");
.append("<div class="reloj" data-offset="" data-label="SaoPaulo" id="SaoPaulo"></div>");
.append("<div class="reloj" data-offset="-6" data-label="Santiago" id="Santiago"></div>");
.append("<div class="reloj" data-offset="-5" data-label="Mexico D F" id="Mexico"></div>");
.append("<div class="reloj" data-offset="-5" data-label="Caracas" id="Caracas"></div>");
.append("<div class="reloj" data-offset="-3" data-label="Brasilia" id="Brasilia"></div>");
.append("<div class="reloj" data-offset="-6" data-label="Quito" id="Quito"></div>");
.append("<div class="reloj" data-offset="-4.5" data-label="Guayaquil" id="Guayaquil"></div>");
.append("<div class="reloj" data-offset="-4.5" data-label="Santa Marta" id="SantaMarta"></div>");
.append("<div class="reloj" data-offset="-4" data-label="Bogota" id="Bogota"></div>");




$("zonaHoraria").nuevo{
	var ciudades=[{
		id:"Chicago",
		nombre:"Chicago",
		zonaHoraria:-5;
		}, {
			id:"SaoPaulo",
			nombre:"SaoPaulo",
			zonaHoraria:-3;
		}, {
			id:"Santiago",
			nombre:"Santiago",
			zonaHoraria:-3;
		}, {
			id:"Mexico",
			nombre:"Mexico",
			zonaHoraria:-5;
		}, {
			id:"Caracas",
			nombre:"Caracas",
			zonaHoraria:-4.5;
		}, {
			id:"Brasilia",
			nombre:"Brasilia",
			zonaHoraria: ;
		}, {
			id:"Quito",
			nombre:"Quito",
			zonaHoraria: -3;
		}, {
			id:"Guayaquil",
			nombre:"Guayaquil",
			zonaHoraria: -3;
		}, {
			id:"SantaMaria",
			nombre:"SantaMaria",
			zonaHoraria: -3;
		}, {
			id:"Bogota",
			nombre:"Bogota",
			zonaHoraria: -3;
		}];

		$(document).ready(function(){
			createCheckBoxesCiudades();
			setHoraLocal();

			setInterval("setHoraLocal()", 1000);
			setInterval("ciudades()", 1000);
		});
	}());*/





