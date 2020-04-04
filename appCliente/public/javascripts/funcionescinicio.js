$(document).ready(function(){    
    $(function(){
          var tbodytabla=$("#tabla")
          $.ajax({
            url: 'http://localhost:3000/estudiante/ListarEstudiante',
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(respuesta){
              $('#tablaEs').DataTable({
                "data":respuesta.response,
                "destroy":true,
                "columns":[
                  {'data':'nombre'},
                  {'data':'apellidopaterno'},
                  {'data':'apellidomaterno'},
                  {'data':'estatus'}
                ]
              });
            },
            error: function(err){
              console.log(err);
              alert(err);
            }
          });
        });
});
