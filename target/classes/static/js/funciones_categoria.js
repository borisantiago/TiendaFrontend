
		$("#tablaCategoria").load("js/tabla_categoria.html");
	

//agregar categoria	
			$(document).delegate('#regCategoria', 'click', function (event) {
			event.preventDefault();
			var nombre = $('#nombre').val();

			console.log(nombre);

			var formData = new FormData();
			var objArr = [];

			objArr.push({ "nombre": nombre });
			console.log(objArr);

			formData.append('categoria', JSON.stringify(objArr));
			console.log(formData);

			$.ajax({
				type: 'POST',
				//contentType: "application/json; charset=utf-8",
					
				url: "http://localhost:9091/api/v1/categoria",
				data: formData,
				//data: JSON.stringify({'nombre': nombre}),
				cache: false,
				processData: false,
				contentType: false,
				
				success: function (result) {
				console.log(result);
				$.alert({
					title: 'OK',
					content: 'El servicio ha sido publicado!',
				});
				setTimeout(
				function () {
					window.location.href = "listarServicios.html";
				},2000);
			},
		error: function (xhr, exception) {
			if (xhr.status === 0)
				alert('Error : ' + xhr.status + 'You are not connected.');
			else if (xhr.status == "409"){
				$.alert({
					title: 'Error',
					content: 'Este nombre de servicio ya existe!',
				});
			}
			else if (xhr.status == "404")
				alert('Error : ' + xhr.status + '\nPage note found');
			else if (xhr.status == "500"){
				$("#categoria_existente").show("fast");
				document.formCategoria.nombre.style.border="1px solid red";
					//setTimeout(function() {
               		//	$("#categoria_existente").fadeOut();           
            		//	},3000);
					//alert('Existencia de registro [500].');
			}
			else if (xhr.status == "200"){
				$("#categoria_existente").show("fast");
				document.formCategoria.nombre.value="";
				$("#agregadaCategoria").show("fast");
			}			
			else if (exception === 'parsererror')
				alert('Error : ' + xhr.status + '\nImpossible to parse result.');
			else if (exception === 'timeout')
				alert('Error : ' + xhr.status + '\nRequest timeout.');
			else
				alert('Error .\n' + xhr.responseText);
		}
			});
				$("#tablaCategoria").reload("js/tabla_categoria.html");
		});	
	
	
				



//Borrar

function eliminarCategoria(id){
	 if(confirm("Esta seguro de eliminar el producto, ¿Aceptar para continuar?")){     
            $.ajax({
                type:"DELETE",
                url:"http://localhost:9091/api/v1/categoria/" + id,
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
		
function nombre_colocado(){
            $("#categoria_existente").hide("fast");
			document.formCategoria.nombre.style.border="1px solid green";		
}

//actualizar actu
$(document).ready(function () {
	$(document).delegate('#ingCategoriaU', 'click', function (event) {
		event.preventDefault();
		var id = $('#id').val();
		var nombre = $('#nombreU').val();
	
		console.log(nombre);
	
		var formData = new FormData();

		var objArr = [];

		objArr.push({"id":id, "nombre": nombre });
		console.log(objArr);
 
		formData.append('categoria', JSON.stringify(objArr));
		console.log(formData);

		$.ajax({
			type: "PUT",
			url: "http://localhost:9091/api/v1/categoria",
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


