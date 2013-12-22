var myVideo = document.getElementById('mainvideo');
var myclass = document.getElementById('playpause');

  if (myVideo) {
        document.getElementById("avancementsur").innerHTML = '/' + formaterATemps(myVideo.duration.toFixed(0));
        myVideo.addEventListener("timeupdate", curTimeUpdate, false);
          function curTimeUpdate(evt) {
            document.getElementById("avancementsur").innerHTML = '/' + formaterATemps(myVideo.duration.toFixed(0));
            document.getElementById("avancementnum").innerHTML = formaterATemps(myVideo.currentTime.toFixed(0));
            if((myVideo.currentTime / myVideo.duration )* 100 < 98 )
            document.getElementById("avancement").style.width = (myVideo.currentTime / myVideo.duration )* 100  + '%';
            
            else myclass.className="play";
        }   
  }


  function playPause()
  {

   if (myVideo.paused) 
 	  {
 	  	myVideo.play(); 
 	  	myclass.className="pause";
 	  }
	 else 
	 {
	   myVideo.pause(); 
	   myclass.className="play";
	 }
  } 

  function formaterATemps(seconde)
  {
	 return (seconde / 60).toFixed(0) + ':' + (seconde % 60) ;
  }

  function enterFullscreen(element) {
        if(element.requestFullScreen) {
                element.requestFullScreen();
        } else if(element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if(element.mozRequestFullScreen){
                element.mozRequestFullScreen();
        } else {
                alert('Votre navigateur ne supporte pas le mode plein écran, il est temps de passer à un plus récent ;)');
        }
   }

  function mute()
  {
    if (myVideo.muted)
         myVideo.muted=false;
    else myVideo.muted=true;
  }

	  $(document).ready(function(e) {

	     var mousedown = false ;
                  $('#videoprogressbar').click(function(e) {   //Default mouse Position 
                       var pos = $('#videoprogressbar').position();
               myVideo.currentTime = (event.pageX - pos.left) * myVideo.duration / 360;
                });
               
                  $("#videoprogressbar").mousedown(function(e){
                        mousedown = true;
                  });
                  $("#videoprogressbar").mouseup(function(e){
                        mousedown = false;
                  });


                  $(document).mousemove(function(e){
                      if(mousedown)
                   {
                         var pos = $('#videoprogressbar').position();
                          myVideo.currentTime = (event.pageX - pos.left) * myVideo.duration / 360;
                   }
      
                  }); 
                  
    });
