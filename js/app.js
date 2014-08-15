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
			return;
		}else{
			//realizamos ajax con lungo para ver si existe el usuario
			// configuracion de framework lungo para AJAX
			Lungo.Service.async = true;
			Lungo.Service.Settings.error = function(type,xhr){
				console.log("Error al realizar la peticion; tipo="+type);
			}
			Lungo.Service.Settings.crossDomain = false;
			Lungo.Service.Settings.timeout = 3000;
		
			//Peticion Get
			var url = "http://dish.sharksoft.com.mx/index.php/welcome/ajax";
			var data = {id:n_cliente,password:password};
			var respuesta = function(data){
				console.log(data);
			}

			Lungo.Service.get(url,data,respuesta, "Json");

		}
		//Lungo.Router.section("sec_principal");
	});
});