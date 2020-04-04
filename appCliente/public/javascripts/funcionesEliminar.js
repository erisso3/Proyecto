$('#cb').ready(function(){    
    var aux=$('#cb');
    $.ajax({
      url: 'http://localhost:3000/estudiante/ListarEstudiante',
      data: {},
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(respuesta){
        for(var i=0;i<respuesta.response.length;i++){
            aux.append(
                '<option value="'+respuesta.response[i].id_estudiante+'">'+respuesta.response[i].nombre+' '+respuesta.response[i].apellidopaterno+'</option>'
            );
        }
      },
      error: function(err){
        console.log(err);
        alert(err);
      }
    });
});

$('#cb').change(function(){    
    var aux=$('#cb').val();
    let calle=$('#ca');
    let colonia=$('#co');
    let municipio=$('#mu');
    let estado=$('#es');
    let pais=$('#pa');
    let cp=$('#cp');

    $.ajax({
      url: 'http://localhost:3000/estudiante/DatosDire/'+aux,
      data: {},
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(respuesta){
        calle.val(respuesta.response[0].calle);
        colonia.val(respuesta.response[0].colonia);
        municipio.val(respuesta.response[0].municipio);
        estado.val(respuesta.response[0].estado);
        pais.val(respuesta.response[0].pais);
        cp.val(respuesta.response[0].codigopostal);
      },
      error: function(err){
        console.log(err);
        alert(err);
      }
    });
});

$('#boton').click(function(){    
    var aux=$('#cb').val();
    alert(aux);
    $.ajax({
      url: 'http://localhost:3000/estudiante/Eliminar/'+aux,
      data: {},
      type: 'PUT',
      contentType:'application/json; charset=utf-8',
      dataType: 'json',
      success: function(respuesta){
       alert('camara');
      },
      error: function(err){
        console.log(err);
        alert(err);
      }
    });
});
  
  

