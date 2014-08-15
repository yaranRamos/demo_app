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
			alert("si entra al if");
			Lungo.Notification.error(
				"ATENCION",
				"Ingresa Ambos Campos",
				"warning-sign",
				3
			);
			return;
		}else{
			alert("Los datos fueron ingresados!!");
		}
		//Lungo.Router.section("sec_principal");
	});
});