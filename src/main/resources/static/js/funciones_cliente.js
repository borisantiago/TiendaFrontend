//Funcion llamar tabla
	$(document).ready(function(){
	     $("#tablaCliente").load("js/tabla_cliente.html");
	});

function eliminarCliente(id){
	if(confirm("Esta seguro que desea eliminar al cliente, ¿Aceptar para continuar?")){     
            $.ajax({
                type:"DELETE",
                url:"http://localhost:9091/api/v1/cliente/" + id,
                data:"id="+id, 
	
		});
		
		$("#eliminado").show("fast");
            
			//alerta de eliminar quitando en un tiempo
            setTimeout(function() {
                $("#eliminado").fadeOut();           
            },3500);

			$("#"+id).hide("slow");
		}
}


function guardar_datos(){

        if(document.form_datos.nombre.value!="" && document.form_datos.apellido.value!="" && 
            document.form_datos.email.value!="" && document.form_datos.provincia.value!="Escojer..." && 
              document.form_datos.ciudad.value!="" && document.form_datos.direccion.value!="" && 
                document.form_datos.telefono.value!="" && document.form_datos.contrasenia.value!=""){
        if($("#condiciones").prop("checked")){
          if(colocar_nombre() && colocar_apellido() && colocar_email() && colocar_telefono() && colocar_contrasenia2() ){
               

		$(document).ready(function() {
			$(document).delegate('#addNew', 'click', function(event) {
				event.preventDefault();
				var nombre = $('#nombre').val();
				var apellido = $('#apellido').val();
				var email = $('#email').val();
				var provincia = $('#provincia').val();
				var ciudad = $('#ciudad').val();
				var direccion = $('#direccion').val();
				var telefono = $('#telefono').val();
				var contrasenia = $('#contrasenia').val();
							
								
				console.log(nombre);
				console.log(apellido);
				console.log(email);
				console.log(provincia);
				console.log(ciudad);
				console.log(direccion);
				console.log(telefono);
				console.log(contrasenia);
								
				
				var formData = new FormData();
				var objArr = [];

				objArr.push({"nombre": nombre,"apellido":apellido,"email":email,"provincia":provincia,"ciudad":ciudad,"direccion":direccion,"telefono":telefono,"contrasenia":contrasenia});
				console.log(objArr);
				
				formData.append('cliente', JSON.stringify( objArr ));
				console.log(formData);
				
				$.ajax({
					type: "POST",
					//contentType: "application/json; charset=utf-8",
					url: "http://localhost:9091/api/v1/cliente",
					//data: JSON.stringify({'nombre': nombre, 'preparacion': preparacion, 'dificultad': dificultad}),
					data: formData,
					cache: false,
					processData:false,
					contentType:false,
			        
				});
			});
	

			});

            }else{
           	  $("#datos_incorrectos").show("slow");
            }
         }else{
              $("#condiciones").show("slow");
         }

        }else{
          $("#llenar_datos").show("slow");
        }

        if(document.form_datos.nombre.value==""){
          document.form_datos.nombre.style.border="1px solid red";
        }

        if(document.form_datos.apellido.value==""){
          document.form_datos.apellido.style.border="1px solid red";
        }

        if(document.form_datos.email.value==""){
          document.form_datos.email.style.border="1px solid red";
        }

        if(document.form_datos.provincia.value=="Escojer..."){
          document.form_datos.provincia.style.border="1px solid red";
        }

        if(document.form_datos.ciudad.value==""){
          document.form_datos.ciudad.style.border="1px solid red";
        }

        if(document.form_datos.direccion.value==""){
          document.form_datos.direccion.style.border="1px solid red";
        }

        if(document.form_datos.telefono.value==""){
          document.form_datos.telefono.style.border="1px solid red";
        }

        if(document.form_datos.contrasenia.value==""){
          document.form_datos.contrasenia.style.border="1px solid red";
        }

        if(document.form_datos.condiciones.value==""){
          document.form_datos.condiciones.style.border="1px solid red";
        }

        if(document.form_datos.contrasenia.value!=document.form_datos.contrasenia2.value){
          document.form_datos.contrasenia2.style.border="1px solid red";
          $("#alerta_contra").show("slow")
        }

        if(!$("#condiciones").prop("checked")){
          $("#alerta_terminos").show("slow");
        }

      }

      function colocar_nombre(){
        var nombre_v=document.form_datos.nombre.value;
        expr2 = /^([a-zA-Z])+$/;
        if (expr2.test(nombre_v) ){
            
            document.form_datos.nombre.style.border="1px solid green";
            $("#alerta_nombre").hide("slow");
            return true;
        }
        else{
            
            document.form_datos.nombre.style.border="1px solid red";
            $("#alerta_nombre").show("slow");
            return false;
        } 
        
      }
      function colocar_apellido(){
        var apellido_v=document.form_datos.apellido.value;
        expr3 = /^([a-zA-Z])+$/;
        if (expr3.test(apellido_v) ){
            document.form_datos.apellido.style.border="1px solid green";
            $("#alerta_apellido").hide("slow");
            return true;
        }
        else{
            document.form_datos.apellido.style.border="1px solid red";
            $("#alerta_apellido").show("slow");
            return false;
        } 

      }

      function colocar_email(){
        var email1=document.form_datos.email.value;
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (expr.test(email1) ){
            document.form_datos.email.style.border="1px solid green";
            $("#avisomail").hide("slow");
            return true;
        }
        else{
            document.form_datos.email.style.border="1px solid red";
            $("#avisomail").show("slow");
            return false;
        }           

      }
      function colocar_provincia(){
        document.form_datos.provincia.style.border="1px solid green";
      }
      function colocar_ciudad(){
        document.form_datos.ciudad.style.border="1px solid green";
      }
      function colocar_direccion(){
        document.form_datos.direccion.style.border="1px solid green";
      }
      function colocar_telefono(){
        var telefono_v=document.form_datos.telefono.value;
        expr4 = /^([0-9])+$/;
        if (expr4.test(telefono_v) ){
            
            document.form_datos.telefono.style.border="1px solid green";
            $("#alerta_telefono").hide("slow");
            return true;
        }
        else{
            
            document.form_datos.telefono.style.border="1px solid red";
            $("#alerta_telefono").show("slow");
            return false;
        } 
      }
      function colocar_contrasenia(){
        document.form_datos.contrasenia.style.border="1px solid green";
      }
      function colocar_contrasenia2(){
        document.form_datos.contrasenia2.style.border="1px solid green";
        if(document.form_datos.contrasenia.value==document.form_datos.contrasenia2.value){
          $("#alerta_contra").hide("slow");
          return true;
        }else{
          $("#alerta_contra").show("slow");
          return false;
        }
      }
      function condiciones_aceptadas(){
          $("#alerta_terminos").hide("slow");    
      }
