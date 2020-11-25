	//Funcion llamar tabla
	$(document).ready(function(){
	     $("#tablaProducto").load("js/tabla_producto.html");
	});
	
	
//registrar producto
$(document).ready(function () {
	$(document).delegate('#ingProducto', 'click', function (event) {
		event.preventDefault();
		var nombre = $('#nombre').val();
		var precio = $('#precio').val();
		var descripcion = $('#descripcion').val();
		var categoriaId = $('#categoriaId').val();
		var inicio = $('#inicio').val();
		var cantidad = $('#cantidad').val();
	
		console.log(nombre);
		console.log(precio);
		console.log(descripcion);
		console.log(categoriaId);
		console.log(inicio);
		console.log(cantidad);
	
		var img = $('input[name="imagen1"]').get(0).files[0];
		var img2 = $('input[name="imagen2"]').get(0).files[0];
		var img3 = $('input[name="imagen3"]').get(0).files[0];
		console.log(img);
		console.log(img2);
		console.log(img3);

		var formData = new FormData();
		formData.append('img', img);
		formData.append('img2', img2);
		formData.append('img3', img3);
		var objArr = [];

		objArr.push({ "nombre": nombre, "precio": precio, "descripcion": descripcion, "categoriaid": categoriaId, "inicio":inicio, "cantidad":cantidad });
		console.log(objArr);
 
		formData.append('producto', JSON.stringify(objArr));
		console.log(formData);

		$.ajax({
			type: "POST",
			url: "http://localhost:9091/api/v1/producto",
			data: formData,
			cache: false,
			processData: false,
			contentType: false,
			success: function (result) {
				console.log(result);
				$.alert({
						title: 'OK',
						content: 'El integrante ha sido publicado!',
					});
				/*setTimeout(
					function () {
						window.location.href = "listarJugadores.html";
					},2000);*/
			},
			error: function (xhr, exception) {
				if (xhr.status === 0)
					alert('Error : ' + xhr.status + 'You are not connected.');
				else if (xhr.status == "409"){
					$.alert({
						title: 'Error',
						content: 'Este nombre de integrante ya existe!',
					});
				}
				else if (xhr.status == "404")
					alert('Error : ' + xhr.status + '\nPage note found');
				else if (xhr.status == "500")
					alert('Internal Server Error [500].');
				else if (exception === 'parsererror')
					alert('Error : ' + xhr.status + '\nImpossible to parse result.');
				else if (exception === 'timeout')
					alert('Error : ' + xhr.status + '\nRequest timeout.');
				else
					alert('Error .\n' + xhr.responseText);
			}
		});
	});
});	
          

	
	
		
function eliminarProducto(id){
	 	if(confirm("Esta seguro de eliminar el producto, ¿Aceptar para continuar?")){     
            $.ajax({
                type:"DELETE",
                url:"http://localhost:9091/api/v1/producto/" + id,
                data:"id="+id, 
	
		});
		
		
		
		$("#eliminado").show("fast");
            
			//alerta de eliminar quitando en un tiempo
            setTimeout(function() {
                $("#eliminado").fadeOut();           
            },3500);

			$("#"+id).hide("slow");
		}
		//$('#'+id).hide("slow");
		//$("#tablaCategoria").load("js/tabla_categoria.html");
}

//actualizar producto
$(document).ready(function () {
	$(document).delegate('#ingProductoU', 'click', function (event) {
		event.preventDefault();
		var id = $('#id').val();
		var nombre = $('#nombreU').val();
		var precio = $('#precioU').val();
		var descripcion = $('#descripcionU').val();
		var categoriaId = $('#categoriaId').val();
		var inicio = $('#inicioU').val();
		var cantidad = $('#cantidadU').val();
	
		console.log(nombre);
		console.log(precio);
		console.log(descripcion);
		console.log(categoriaId);
		console.log(inicio);
		console.log(cantidad);

		var formData = new FormData();

		var objArr = [];

		objArr.push({"id":id, "nombre": nombre, "precio": precio, "descripcion": descripcion, "categoriaid": categoriaId,"inicio":inicio, "cantidad":cantidad });
		console.log(objArr);
 
		formData.append('producto', JSON.stringify(objArr));
		console.log(formData);

		$.ajax({
			type: "PUT",
			url: "http://localhost:9091/api/v1/producto",
			data: formData,
			cache: false,
			processData: false,
			contentType: false,
			success: function (result) {
				console.log(result);
				$.alert({
						title: 'OK',
						content: 'El integrante ha sido publicado!',
					});
				/*setTimeout(
					function () {
						window.location.href = "listarJugadores.html";
					},2000);*/
			},
			error: function (xhr, exception) {
				if (xhr.status === 0)
					alert('Error : ' + xhr.status + 'You are not connected.');
				else if (xhr.status == "409"){
					$.alert({
						title: 'Error',
						content: 'Este nombre de integrante ya existe!',
					});
				}
				else if (xhr.status == "404")
					alert('Error : ' + xhr.status + '\nPage note found');
				else if (xhr.status == "500")
					alert('Internal Server Error [500].');
				else if (exception === 'parsererror')
					alert('Error : ' + xhr.status + '\nImpossible to parse result.');
				else if (exception === 'timeout')
					alert('Error : ' + xhr.status + '\nRequest timeout.');
				else
					alert('Error .\n' + xhr.responseText);
			}
		});
	});
});	
          


 function insertar(){
		
		$('#tablaProducto').load('js/tabla_producto.html');
	
        if(document.formulario.nombre.value==""){
            $("#error_nombre").show("fast");
            document.formulario.nombre.style.border="1px solid red";
        }

        if(document.formulario.precio.value==""){
            $("#error_precio").show("fast");
            document.formulario.precio.style.border="1px solid red";
        }

        if(document.formulario.descripcion.value==""){
            $("#error_descripcion").show("fast");
            document.formulario.descripcion.style.border="1px solid red";
        }

        if(document.formulario.categoriaId.value=="Selecciona una categoria"){
            $("#error_categoria").show("fast");
            document.formulario.categoriaId.style.border="1px solid red";
        }
            
    if(document.formulario.nombre.value!="" && document.formulario.precio.value!="" && document.formulario.descripcion.value!="" && document.formulario.categoria.value!="Selecciona una categoria"){
		 /* var formData = new FormData($("#formulario")[0]);

           $.ajax({
                type:"post",
                url:"http://localhost:9091/api/v1/producto",
                data:formData,
                cache:false,
                contentType:false,
                processData:false,

//hace antes de respuestas success
                beforeSend:function(){
                    $("#agregado").hide("slow");
                    $("#noagregado").hide("slow");
                    $("#eliminado").hide("fast");
                    $("#no_imagen").hide("fast");
                    $("#carga").show("fast");
                    
                },
                
                success:function(respuesta){
                    if(respuesta=="exito"){
                        $("#carga").hide("fast");
                        $("#agregado").show("slow");

                       //alerta de agregado quitando en un tiempo
                        setTimeout(function() {
                            $("#agregado").fadeOut();           
                        },3000); 

                    //vaciar los campos cuando se guardo    
                        document.formulario.nombre.value=""; document.formulario.nombre.placeholder="Asignar nombre nuevo producto si desea";
                        document.formulario.precio.value=""; document.formulario.precio.placeholder="Ejemplo: 77.36";
                        document.formulario.descripcion.value=""; document.formulario.descripcion.placeholder="Ejemplo: Descripcion de nuevo producto";
                        document.formulario.categoria.value="Selecciona una categoria";

                        document.formulario.imagen1.value="";
                        document.formulario.imagen2.value="";
                        document.formulario.imagen3.value="";
                        
                        $("#boton_images").hide("slow");
                    }

                    if(respuesta=="error"){
                        $("#carga").hide("fast");
                        $("#noagregado").show("slow");
                        document.formulario.nombre.style.border="1px solid red";
                    }

                    if(respuesta=="no_imagen"){
                        $("#carga").hide("fast");
                        $("#no_imagen").show("fast");
                        $("#boton_images").show("slow");
                    }

              //Recargar la tabla      
                    $('#tabla').load('tabla.php');
                }
                
           });      
			*/
    }    
            
    }


 