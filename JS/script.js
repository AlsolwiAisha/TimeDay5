//Time
let x1,x2,date_;
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('getResponse()',refresh)
    if(x1== x2)
    playaudio();
    }
function display_ct() {
     let x= new Date(date_);
       x1= `${x.getHours()}:${ x.getMinutes()}:${ x.getSeconds()}`;
    document.querySelector('.clock').innerHTML = x1;
    display_c();
   
     }
     //function of renge of hour time
     let hh=document.querySelector("#hh");
     let mm=document.querySelector("#mm");
     let ss=document.querySelector("#ss");
     function rengrTime(){
         if(mm.value>60)mm.value=null;
         if(ss.value>60)ss.value=null;
         if(hh.value>24)hh.value=null;
     }
     
     //function of Session
     function Sess(){
      document.querySelector(".inerr").innerHTML+= `<h1 class="h">${x1}</h1>`
     }
//function play audio
     function timeRemh(){
        document.querySelector(".timeRemh2").innerHTML= `<h1>${hh.value}:${mm.value}:${ss.value}</h1>`
        x2=`${hh.value}:${mm.value}:${ss.value}`
   
    }
     function playaudio(){
       let audio = new Audio('./JS/1.mp3');
       audio.play();}

//function getResponse of time
  async function getResponse() {
	const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Paris');
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const date = await response.json();
    date_=date.datetime;
    //console.log(date_)
   display_ct();
}
getResponse();