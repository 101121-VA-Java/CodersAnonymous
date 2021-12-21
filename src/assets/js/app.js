var stompClient = null;

$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      maxHeight: 400,
      overflow:'scroll',
        });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

function openChatBox() {
    $( "#dialog" ).dialog( "open" );
  };

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#messages").html("");
}

function testing1(string){
    alert("test");
}
function connect(chatroomurl) {
    var socket = new SockJS(chatroomurl);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/message', function (messages) {
            addMessage(messages.body);            
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage(username) {
    stompClient.send("/app/hello", {}, JSON.stringify({'message': $("#name").val(),
    "username" : username

}));
}


function addMessage(message) {
    // $("#messages").append("<tr><td>" + message + "</td></tr>");
    $("#usrmsgs").append(`    
    <div class="container" style = "border: 2px solid #dedede;">
  <p>${message}</p>  
</div>    
    `);



}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendMessage(); });
});

