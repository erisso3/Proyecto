$('#boton').click(function(){    
    let nombre=$('#nombre').val();
    let apellidopaterno=$('#apellidopaterno').val();
    let apellidomaterno=$('#apellidomaterno').val();
    let sexo=$('#sexo').val();
    let telefono=$('#telefono').val();
    let email=$('#email').val();
    let celular=$('#celular').val();
    let calle=$('#calle').val();
    let colonia=$('#colonia').val();
    let municipio=$('#municipio').val();
    let estado=$('#estado').val();
    let pais=$('#pais').val();
    let codigopostal=$('#codigopostal').val();
    let curp=$('#curp').val();
    let estatus=$('#estatus').val();
    let id_estado=$('#id_estado').val();
    let id_academico=$('#id_academico').val();
    let id_tutor=$('#id_tutor').val();
    let sangre=$('#sangre').val();
    let alergia=$('#alergia').val();
    let numeroseguro=$('#numeroseguro').val();
    $.ajax({
      url: 'http://localhost:3000/estudiante/nuevoEstudiante/',
      data: {
          nombre : nombre,
          apellidopaterno : apellidopaterno,
          apellidomaterno : apellidomaterno,
          sexo : sexo,
          telefono : telefono,
          email : email,
          celular : celular,
          calle : calle,
          colonia : colonia,
          municipio : municipio,
          estado : estado,
          pais : pais,
          codigopostal : codigopostal,
          curp : curp,
          estatus : estatus,
          id_estado : id_estado,
          id_academico : id_academico,
          id_tutor : id_tutor,
          sangre : sangre,
          alergia : alergia,
          numeroseguro : numeroseguro
      },
      type: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
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
  

$('#id_estado').ready(function(){    
  var aux=$('#id_estado');
  $.ajax({
    url: 'http://localhost:3000/estudiante/ListarEstados',
    data: {},
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(respuesta){
      for(var i=0;i<respuesta.response.length;i++){
          aux.append(
              '<option value="'+respuesta.response[i].id_estado+'">'+respuesta.response[i].descripcion+'</option>'
          );
      }
    },
    error: function(err){
      console.log(err);
      alert(err);
    }
  });
});

$('#id_academico').ready(function(){    
  var aux=$('#id_academico');
  $.ajax({
    url: 'http://localhost:3000/estudiante/ListarAcademicos',
    data: {},
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(respuesta){
      for(var i=0;i<respuesta.response.length;i++){
          aux.append(
              '<option value="'+respuesta.response[i].id_academico+'">'+respuesta.response[i].escuelaE+'</option>'
          );
      }
    },
    error: function(err){
      console.log(err);
      alert(err);
    }
  });
});


$('#id_tutor').ready(function(){    
  var aux=$('#id_tutor');
  $.ajax({
    url: 'http://localhost:3000/estudiante/ListarPersonas',
    data: {},
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(respuesta){
      for(var i=0;i<respuesta.response.length;i++){
          aux.append(
              '<option value="'+respuesta.response[i].id_persona+'">'+respuesta.response[i].nombre+' '+respuesta.response[i].apellidopaterno+'</option>'
          );
      }
    },
    error: function(err){
      console.log(err);
      alert(err);
    }
  });
});

