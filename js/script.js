$(function(){
   $('#test1').click(function(){
       $('#content').removeClass('flipInX').
            addClass('flipOutX');
       $.get('test1.htm', function(data){
            setTimeout(function(){
                $('#content').removeClass('flipOutX')
                .addClass('flipInX');
                $('#content').html(data);
            },1000);
       });
   });

   $('#test2').click(function(){
       $('#content').removeClass('flipInX').
            addClass('flipOutX');
       $.get('test2.htm', function(data){
            setTimeout(function(){
                $('#content').removeClass('flipOutX')
                .addClass('flipInX');
                $('#content').html(data);
            },1000);
       });
   }) 

});