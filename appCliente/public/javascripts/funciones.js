
$(document).ready(function(){    
    var aux='';
    if ($('#opciones').val()=='Municipio') {
      aux='municipio'
    }
    if ($('#opciones').val()=='Escuela') {
      aux='escuelaE'
    }
    if ($('#opciones').val()=='Estudiante') {
      aux='estatus'
    }
    if ($('#opciones').val()=='Promedio') {
      aux='promedio'
    }
    var tbodytabla=$("#tabla")
    $.ajax({
      url: 'http://localhost:3000/estudiante/'+$('#opciones').val(),
      data: {},
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(respuesta){
        $('#tablaBuscar').DataTable({
          "data":respuesta.response,
          "destroy":true,
          "columns":[
            {'data':'nombre'},
            {'data':'apellidopaterno'},
            {'data':'apellidomaterno'},
            {'data': aux}
          ]
        });
      },
      error: function(err){
        console.log(err);
        alert(err);
      }
    });
});

$(function(){
  $( '#opciones').change(function(){
    var aux='';
    if ($('#opciones').val()=='Municipio') {
      aux='municipio'
    }
    if ($('#opciones').val()=='Escuela') {
      aux='escuelaE'
    }
    if ($('#opciones').val()=='Estudiante') {
      aux='estatus'
    }
    if ($('#opciones').val()=='Promedio') {
      aux='promedio'
    }
    var tbodytabla=$("#tabla")
    $.ajax({
      url: 'http://localhost:3000/estudiante/'+$('#opciones').val(),
      data: {},
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(respuesta){
        $('#tablaBuscar').DataTable({
          "data":respuesta.response,
          "destroy":true,
          "columns":[
            {'data':'nombre'},
            {'data':'apellidopaterno'},
            {'data':'apellidomaterno'},
            {'data': aux}
          ]
        });
      },
      error: function(err){
        console.log(err);
        alert(err);
      }
    });
  })
});
