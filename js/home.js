
/*
		//console.log("Ingrese al script");	//debug
		var xhr = new XMLHttpRequest();
        xhr.open('GET', 'logout.php', false);  // Solicitud sincrona para asegurar que se ejecute antes de cerrar la ventana
        xhr.send();

function cerrarSesion() {
            window.location.href = 'logout.php';
        }
*/


/*
function leerNumSolicitud() {
    var xhr = new XMLHttpRequest();
    var solicitud; 
	var url = 'obtener_num_solicitud.php?solicitud=' + solicitud;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var solicitud = parseInt(xhr.responseText);
                solicitud = solicitud + 1;
                console.log('Solicitud Numero:', solicitud);
            } else {
                console.error('Error al obtener el contador');
            }
        }
    };
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    leerNumSolicitud();
});
*/


/*
function leer_id() {
	var idnumber;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'obtener_id.php', false); // Solicitud sincronica, habia copiado un ejemplo de codigo donde lo ponian asincrono, pero no funcionaba, no se enviaba el numero idnumber. 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var responseText = xhr.responseText;
                var last_id = responseText.match(/\d+/); // Extraigo el numero de la respuesta
				idnumber = last_id[0];
                console.log('50: Numero id DB:', idnumber);
            } else {
                console.error('Error al obtener el numero de id');
            }
        }
    };
    xhr.send();
	
	return idnumber;
}
*/


//Funciones para ajustar el zoom del navegador si la resolucion en altura del monitor es menor o igual a 960 px
/* lo mande al windowres.js */

//Funcion para mostrar salida por status bar
function mostrar_mensaje_status_bar(texto) {
    console.log("mostrando");  //a modo de debug
    document.getElementById("status-display").innerHTML = texto;
}

function showCamposItem01(itemValue) {
	datos.item = itemValue;
	//actualizarCodLocalidad(); // Llamada a la función actualizarCodLocalidad
	datos.codlocalidad = actualizarCodLocalidad();
    document.getElementById('campos_item_1').classList.remove('hidden');
    document.getElementById('campos_item_1').classList.add('aside');
    document.getElementById('campos_item_2').classList.add('hidden');
    document.getElementById('campos_item_3').classList.add('hidden');
}



/***************************************



VER COMO RESOLVER PARA GENERAR UN NUMERO 
DE SOLICITUD HASTA QUE CIERREN SESION



*****************************************/

function showCamposItem02(itemValue) {
	//datos.item = 'AMMT';
	//datos.solicitud = solicitud;
	//datos.idnum = leer_id();  console.log("100: datos.idnum = ", datos.idnum);
	datos.item = itemValue; console.log("item: ", itemValue);
	const coditem = 'M';	//Para AMMT agrega el codigo de item = M. 
	//var localidades = actualizarCodLocalidad(); // Llamada a la funcion actualizarCodLocalidad
	datos.codlocalidad = actualizarCodLocalidad();	// Llamada a la funcion actualizarCodLocalidad	//datos.codlocalidad = localidades.codlocalidad;	console.log("datos.codlocaliad linea 69: ", localidades.codlocalidad)	//datos.localidad = localidades.localidad;		console.log("localidades.localidad linea 70: ", localidades.localidad)
	switch (datos.codlocalidad) {
			case 'G':	datos.localidad = 'Guaymallen';	console.log("121: localidad = ", datos.localidad);  break;
			case 'H':	datos.localidad = 'Las Heras';	break;
			case 'V':	datos.localidad = 'Lavalle';	break;
			case 'J':	datos.localidad = 'Lujan';		break;
			case 'I':	datos.localidad = 'Maipu';		break;
			case 'U':	datos.localidad = 'Malargue';	break;
			case 'M':	datos.localidad = 'Mendoza';	break;
			case 'Y':	datos.localidad = 'Tunuyan';	break;
			case 'T':	datos.localidad = 'Tupungato';	break;
			case 'L':	datos.localidad = 'San Carlos';	break;
			case 'Z':	datos.localidad = 'San Rafael';	break;
			default:	datos.localidad = 'Guaymallen';		
		}
	//este mismo switch / case lo puse tambien en la funcion de actualizacion de la localidad con el menu desplegable, sino no se 
	//actualizaban las localidades cuando cambiaban desde el menu.
	
	datos.coditem = coditem;	console.log("coditem: ", coditem);
	datos.subitem1 = actualizar_subitem_ammt();	//actualiza en la variable la seleccion del item.
	datos.subitem2 = 'N/A';	datos.subitem3 = 'N/A';	datos.subitem4 = 'N/A';
	//datos.localidad = localidad;
	
	
    document.getElementById('campos_item_2').classList.remove('hidden');	//muestra el menu 2, que es el de los AMMT
    document.getElementById('campos_item_2').classList.add('aside');
    document.getElementById('campos_item_1').classList.add('hidden');		//oculta el resto de los menus (menu 1 en este caso)
    document.getElementById('campos_item_3').classList.add('hidden');		//oculta el resto de los menus
    /*console.log("entre a show campos item 02");*/ 	console.log("Codigo de item: ", coditem);
	
	return datos.localidad;
}

function showCamposItem03(itemValue) {
	datos.item = itemValue;
	//actualizarCodLocalidad(); // Llamada a la función actualizarCodLocalidad
	datos.codlocalidad = actualizarCodLocalidad();
    document.getElementById('campos_item_3').classList.remove('hidden');
    document.getElementById('campos_item_3').classList.add('aside');
    document.getElementById('campos_item_1').classList.add('hidden');
    document.getElementById('campos_item_2').classList.add('hidden');
}


//Funciones para asignar una letra de localidad, a cada localidad elegida desde el menu desplegable
 function actualizarCodLocalidad() {
    //var localidad = selectedOption ? selectedOption.value : '1'; // Valor predeterminado '1' para 'Guaymallen'
	//var codlocalidad = selectedOption ? selectedOption.value : '11'; // Valor predeterminado '1' para 'Guaymallen'
    var codlocalidad = '11'; // fijo este valor para la demo.
	var selectedOption = document.getElementById('localidad').options[document.getElementById('localidad').selectedIndex];

		switch (selectedOption.value) {
			case '1':	codlocalidad = 'G';	localidad = 'Guaymallen';	break;
			case '2':	codlocalidad = 'H';	localidad = 'Las Heras';	break;
			case '3':	codlocalidad = 'V';	localidad = 'Lavalle';		break;
			case '4':	codlocalidad = 'J';	localidad = 'Lujan';		break;
			case '5':	codlocalidad = 'I';	localidad = 'Maipu';		break;
			case '6':	codlocalidad = 'U';	localidad = 'Malargue';		break;
			case '7':	codlocalidad = 'M';	localidad = 'Mendoza';		break;
			case '8':	codlocalidad = 'Y';	localidad = 'Tunuyan';		break;
			case '9':	codlocalidad = 'T';	localidad = 'Tupungato';	break;
			case '10':	codlocalidad = 'L';	localidad = 'San Carlos';	break;
			case '11':	codlocalidad = 'Z';	localidad = 'San Rafael';	break;
			default:	codlocalidad = 'G';	//pongo como default el primero del menu desplegable	
			localidad = 'Guaymallen';
		}
		
    console.log('variable codlocalidad:', codlocalidad);
	console.log('variable localidad:', localidad);
	
	/*
	//todo este codigo lo dejo comentado para el demo.
	    // Obtengo contador para la localidad seleccionada
    var xhr = new XMLHttpRequest();
    var url = 'obtener_contador.php?codlocalidad=' + codlocalidad + '&item=' + datos.item; 
    xhr.open('GET', url, false); // Solicitud sincronica
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var contador = xhr.responseText;
                datos.contador = contador;
                console.log('136 Contador obtenido:', contador);
				
				// Actualizo el codigo con la nueva localidad y contador
                if (datos.item === 'AMMT') {
                    datos.codigo = codlocalidad + 'M' + contador.toString().padStart(6, '0');
                } else {
                    datos.codigo = codlocalidad + datos.item + contador.toString().padStart(6, '0');
                }
                console.log('Codigo actualizado en home.js:', datos.codigo);
				
				
            } else {
                console.error('Error al obtener el contador');
            }
        }
    };
    xhr.send();
	*/
	
	//return { codlocalidad: codlocalidad, localidad: localidad };
    return codlocalidad;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('localidad').addEventListener('change', function() {
        datos.codlocalidad = actualizarCodLocalidad(); // Aqui asignamos el valor a la propiedad codlocalidad de datos
		//En funcion del codigo de localidad actualizado, actualizo la localidad con el switch / case:
			switch (datos.codlocalidad) {
			case 'G':	datos.localidad = 'Guaymallen'; break;
			case 'H':	datos.localidad = 'Las Heras';	break;
			case 'V':	datos.localidad = 'Lavalle';	break;
			case 'J':	datos.localidad = 'Lujan';		break;
			case 'I':	datos.localidad = 'Maipu';		break;
			case 'U':	datos.localidad = 'Malargue';	break;
			case 'M':	datos.localidad = 'Mendoza';	break;
			case 'Y':	datos.localidad = 'Tunuyan';	break;
			case 'T':	datos.localidad = 'Tupungato';	break;
			case 'L':	datos.localidad = 'San Carlos';	break;
			case 'Z':	datos.localidad = 'San Rafael';	break;
			default:	datos.localidad = 'Guaymallen';		
		}
        //console.log('239: codlocalidad actualizado:', datos.codlocalidad);
		//console.log('240: localidad actualizada:', datos.codlocalidad);
    });
});



//Actualiza contadores
function actualizarContador() {
	console.log("**** Ingrese a actualizarContador() *****");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'actualizar_contador.php', false); // Solicitud sincronica
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Creo el objeto con los datos a enviar
    var data = {
        codlocalidad: datos.codlocalidad,
        item: datos.item
    };
	
	console.log("185 codlocalidad: ", data.codlocalidad);
	console.log("186 item: ", data.item);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('190 Contador actualizado correctamente');
                document.getElementById("status-display").innerHTML = "Contador actualizado correctamente";
            } else {
                console.error('Error al actualizar contador');
            }
        }
    };

    xhr.send(JSON.stringify(data));
}








//Funcion para asignarle al sub_item1 el valor de AMMT seleccionado

 function actualizar_subitem_ammt() {
    //var codlocalidad = '';
	var subitem1 = selectedOption ? selectedOption.value : '1'; // Valor predeterminado '1' para 'Guaymallen'
    var selectedOption = document.getElementById('item-ammt').options[document.getElementById('item-ammt').selectedIndex];

		switch (selectedOption.value) {
			case '1': subitem1 = 'Cuchillas'; 		break;
			case '2': subitem1 = 'MN242'; 			break;
			case '3': subitem1 = 'Puentes';			break;
			case '4': subitem1 = 'Interruptor';		break;
			case '5': subitem1 = 'Celda'; 			break;
			case '6': subitem1 = 'Acoplamiento';	break;
			default:  subitem1 = 'Cuchillas';	//pongo como default el primero del menu desplegable
		}   //console.log('subitem1:', subitem1);
    return subitem1;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('item-ammt').addEventListener('change', function() {
        datos.subitem1 = actualizar_subitem_ammt(); // Aqui asigno el valor a la propiedad subitem1 de datos
        console.log('subitem1 actualizado:', datos.subitem1);
    });
});



function guardarJSON(){
			var datosJSON = JSON.stringify(datos); // Convertir el objeto datos a una cadena JSON
			// Verificar si datosJSON es un JSON valido
			try {
			JSON.parse(datosJSON);
			console.log('datos es un JSON valido: ', datosJSON);
			} catch (e) {
			console.error('datos no es un JSON valido');
		}
				
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'guardar_json.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('JSON enviado correctamente');
                } else {
                    console.error('Error al enviar el JSON');
                }
            }
        };
        xhr.send(datosJSON);
}




function cargaDatosComunes() {

		var expediente = document.getElementById("expediente").value;
		var sector = document.getElementById("sector").value;
        var refelectrica = document.getElementById("refelectrica").value;
        var razonsocial = document.getElementById("razon").value;
        var nic = document.getElementById("nic").value;
        var nis = document.getElementById("nis").value;
		var direccion = document.getElementById("direccion").value;
		var coordenadas = document.getElementById("coordenadas").value;
		var observaciones = document.getElementById("observaciones").value;

        // Actualizo el objeto 'datos'
        datos.expediente = expediente;
        datos.sector = sector;
        datos.refelectrica = refelectrica;
        datos.razonsocial = razonsocial;
        datos.nic = nic;
        datos.nis = nis;
		datos.direccion = direccion;
		datos.coordenadas = coordenadas;
		datos.observaciones = observaciones;
		
		datos.idnum = leer_id();
}












// **** Funciones para manejar los menu de CAS ****
//Funcion para habilitar el desplegable de seleccion de neutro cuando se elige BT.
document.addEventListener('DOMContentLoaded', function() {
  const nivelTensionSelect = document.getElementById('nivel-tension');

  nivelTensionSelect.addEventListener('change', function() {
  console.log("funcion nivel tension");

  var seccionNeutroContainer = document.getElementById('seccion-neutro-container');
  var select = document.getElementById("nivel-tension");
  var options=document.getElementsByTagName("option");
  console.log(select.value);
  //console.log(options[select.value-1].innerHTML);
    if (select.value === 'BT') { // Si se selecciona 'BT'
        seccionNeutroContainer.classList.remove('hidden');	} 
	else {	seccionNeutroContainer.classList.add('hidden');	}
  });
});

//Funcion para esconder nivel de tension cuando se seleccione Tetrapolar, y evitar que quede elegido tetrapolar y puedan cambiar a MT o AT.
document.addEventListener('DOMContentLoaded', function() {
	const cantidadDePolos = document.getElementById('cantidad-polos');

	cantidadDePolos.addEventListener('change', function() {
	console.log("Se modifico la seleccion de cantidad de polos");
	
	var nivelTensionContainer = document.getElementById('nivel-tension');
  var seccionNeutroContainer = document.getElementById('seccion-neutro-container');
	var select = document.getElementById("cantidad-polos");
	var options=document.getElementsByTagName("option");
	
	console.log("Seleccionado: ", select.value);
	if (select.value === 'Tetrapolar') {
		console.log("Se selecciono Tetrapolar");
        nivelTensionContainer.classList.add('hidden');
        seccionNeutroContainer.classList.remove('hidden');	} 
	else {	nivelTensionContainer.classList.remove('hidden');
          seccionNeutroContainer.classList.add('hidden');	}
	});	
});



document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('enviarQuery').addEventListener('click', function() {
    // Actualizar el contador leido anteriormente
	document.getElementById('campos_item_2').classList.remove('hidden');
    document.getElementById('campos_item_2').classList.add('aside');
    document.getElementById('campos_item_1').classList.add('hidden');
    document.getElementById('campos_item_3').classList.add('hidden');
	console.log("514: home.js enviarQuery ");
	
	
	//dialogoCodigos();
    actualizarCodLocalidad();
	

    });
});




/*********************
Funciones jQuery para
los pop up windows
**********************/


  
//Funcion para el pop up de sin privilegios para generar codigos.
function dialogoPrivilegios() {
  $(document).ready(function() {
    $("#privilegios").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 300
      },
      hide: {
        effect: "clip",
        duration: 300
      }
    });
 
    $("#guestmessage").on("click", function() {
      $("#privilegios").dialog("open");
    });

    $("#cerrar-button").on("click", function() {
      closeDialog();
    });

    function closeDialog() {
      $("#privilegios").dialog("close");
    }
  });
}

// Llamar a la funcion para configurar el dialogo
document.addEventListener('DOMContentLoaded', function() {
    dialogoPrivilegios();
});








//Funcion para el pop up que muestra el codigo generado.
function dialogoCodigos() {
  $(document).ready(function() {
    $("#codigos").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 300
      },
      hide: {
        effect: "clip",
        duration: 300
      }
    });
 

    $("#enviarQuery").on("click", function() {
		if(	(usuario != 'guest') && (usuario != 'invitado') )
		{
			
	  document.getElementById("msg-popup-codigos").innerHTML = "Codigo generado: " + datos.codigo; // Actualiza el texto con el valor de datos.codigo
	  console.log("606: datos.codigo: ", datos.codigo);
      //$("#codigos").dialog("open");		//muestra el cuadro de dialogo
		}
    });


    $("#ok-button").on("click", function() {
      closeDialog();
    });

    function closeDialog() {
      $("#codigos").dialog("close");
    }
})
  };

// Llamar a la funcion para configurar el dialogo

document.addEventListener('DOMContentLoaded', function() {
    dialogoCodigos();
});




