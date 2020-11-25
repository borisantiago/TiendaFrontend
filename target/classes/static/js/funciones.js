
//Funcion HEADRT
	$(document).ready(function(){
	     $("#header").load("header.html");
	});

//Funcion FOODER
	$(document).ready(function(){
	     $("#footer").load("footer.html");
	});
	
//Funcion MOSTRAR PRODUBCTOS`
	$(document).ready(function(){
	     $("#listar_productos").load("listar_productos.html");
	});

//Funcion Widget carrito`
	$(document).ready(function(){
	     $("#carrito").load("carrito.html");
	});


function b_logeo(){
	//$("#form_login").hide("slow");
	if(document.formLogin.nombre.value=='admin' && document.formLogin.password.value=='123'){
		window.location.href="gestionAdministrador.html";
	}else{
		 document.formLogin.nombre.style.border="1px solid red";
		 document.formLogin.password.style.border="1px solid red";
		 $("#noAdmin").show("slow");
	}
}

function userColocado(){
	document.formLogin.nombre.style.border="1px solid green";
	$("#noAdmin").hide("slow");
}

function passColocado(){
	document.formLogin.password.style.border="1px solid green";
	$("#noAdmin").hide("slow");
}

