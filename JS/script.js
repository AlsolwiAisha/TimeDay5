//Time
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
function display_ct() {
    var x = new Date()
    var x1= ` ${x.getHours( )}:${ x.getMinutes()}:${ x.getSeconds()}`;
    document.querySelector('.clock').innerHTML = x1;
    display_c();
     }
     display_ct();