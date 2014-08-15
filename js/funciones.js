// $$('#btn_login').tap(function(){
// 	//VALIDACION DE CAMPOS VACIOS
// 	var expRegNombre = /^\s*$/;//expRegular valida no vacio
// 	var n_cliente = $$('#n_cliente').val();
// 	var password = $$('#contrasena').val();

// 	if(n_cliente == '' || password == '' || expRegNombre.test(n_cliente)){
// 		Lungo.Notification.error(
// 			"ATENCION",
// 			"Ingresa Ambos Campos",
// 			"warning-sign",
// 			3
// 		);
// 		return;
// 	}else{
// 		alert("Los datos fueron ingresados!!");
// 	}

// 	//Lungo.Router.section("sec_principal");
// });

/*$$('#guardar_datos').tap(function () {
		var expRegNombre = /^\s*$/;//expRegular valida no vacio
		var nombre = $$('#nombre').val();
		var dia = $$('#dia_fecha').val();
		var mes = $$('#mes_fecha').val();
		var ano = $$('#ano_fecha').val();
		var pin = $$('#pin_seguridad').val();
		if (nombre == "" || dia == "" || mes == "" || ano == "" || pin == "") {
			Lungo.Notification.error(
				"Error",
				"Todos los datos son requeridos",
				"warning-sign",
				3);
				return;
		}else if(expRegNombre.test(nombre)){
			Lungo.Notification.error(
				"Error",
				"Todos los datos son requeridos",
				"warning-sign",
				3);
			return;
		} else {
			if(pin.length == 4){
				var fecha = dia+"/"+mes+"/"+ano;
				db.transaction(function(tx){
					tx.executeSql("INSERT INTO usuario (nombre, fecha, pin) VALUES ('"+nombre+"', '"+fecha+"', '"+pin+"');");
					localStorage["nombre"] = nombre;
					localStorage["fecha"] = fecha;
					localStorage["pin"] = pin;
					localStorage["alarma"] = 15;
					datos_pamtalla_inicial();
				}, error_log);
				Lungo.Router.section('main');// redirige a una seccion
			} else{
				Lungo.Notification.error(
					"Error",
					"El pin debe ser de 4 caracteres",
					"warning-sign",
					3);
			}
		}
	});*/