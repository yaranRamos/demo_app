Lungo.init({
	name: 'dish',
	version: '1.0'
});
// Inicializa la aplicacion
Lungo.ready(function(){
	$$('#btn_login').tap(function(){
		//VALIDACION DE CAMPOS VACIOS
		var expRegNombre = /^\s*$/;//expRegular valida no vacio
		var n_cliente = $$('#n_cliente').val();
		var password = $$('#contrasena').val();

		if(n_cliente == '' || password == '' || expRegNombre.test(n_cliente)){
			Lungo.Notification.error(
				"ATENCION",
				"Ingresa Ambos Campos",
				"warning-sign",
				3
			);
		}else{
			//realizamos ajax con lungo para ver si existe el usuario
			// configuracion de framework lungo para AJAX
			Lungo.Service.async = true;
			Lungo.Service.Settings.error = function(type,xhr){
				console.log("Error al realizar la peticion; tipo="+type);
			}
			Lungo.Service.Settings.crossDomain = false;
			Lungo.Service.Settings.timeout = 8000;
		
			//Peticion Get
			var url = "http://dish.sharksoft.com.mx/index.php/welcome/ajax";
			var data = {id:n_cliente,password:password};
			var respuesta = function(data){
				var data = JSON.parse(data);
				if(data == false){
					Lungo.Notification.error(
						"ATENCION",
						"El Usuario No Existe!",
						"warning-sign",
						3
					);
					return;
				}else{
					localStorage["id_persona"] = data.id;
					localStorage["nombre"] = data.nombre;
					Lungo.Router.section("sec_principal");
					$$("#usuario").html(localStorage["nombre"]);
				}
			}

			Lungo.Service.get(url,data,respuesta, "Json");
		}
		//Lungo.Router.section("sec_principal");
	});

	$$('#btn_reporte').tap(function(){
		//	Cargo las variables que voy a almacenar
		var id_persona = localStorage["id_persona"];
		var nombre_cliente = localStorage["nombre"];
		var descripcion = $$('#descripcion').val();

		// validamos que campo descripcion tenga contenido
		if(descripcion == ''){
			Lungo.Notification.error(
				"ATENCION",
				"Ingresa Campo Descripcion",
				"warning-sign",
				3
			);
			return;
		}else{
			//realizamos ajax con lungo para ver si existe el usuario
			// configuracion de framework lungo para AJAX
			Lungo.Service.async = true;
			Lungo.Service.Settings.error = function(type,xhr){
				console.log("Error al realizar la peticion; tipo="+type);
			}
			Lungo.Service.Settings.crossDomain = false;
			Lungo.Service.Settings.timeout = 5000;

			//Peticion Get
			var url = "http://dish.sharksoft.com.mx/index.php/welcome/insert";
			var data = {id_cliente:id_persona,nombre_cliente:nombre_cliente,descripcion:descripcion};
			var respuesta = function(data){
				var resultado = JSON.parse(data);
				console.log(resultado);
				if(resultado){
					Lungo.Notification.success(
					"ATENCION",
					"Intenta Mas Tarde!!",
					"ok-sign",
					3
					);
					var descripcion = $$('#descripcion').val("");
					Lungo.Router.article('sec_principal','asesoria');
				}else{
					Lungo.Notification.error(
					"ATENCION",
					"Intenta Mas Tarde!!",
					"warning-sign",
					3
					);
					return;
				}
			}
			Lungo.Service.get(url,data,respuesta, "Json");
		}
	});
});