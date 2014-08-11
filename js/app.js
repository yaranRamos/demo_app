Lungo.init({
	name: 'dish',
	version: '1.0'
});

Lungo.ready(function(){
	$$('#btn_aceptar').tap(function(){
		Lungo.Router.section("sec_principal");
	});
});