
$('.enter_link').click(function() { 
        $(this).parent().fadeOut(500);
 });
 
 // socket code
 
 var socket = io();
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });