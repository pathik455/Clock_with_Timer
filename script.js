const timer = document.getElementById("time");
const button = document.getElementById("stop-timer");
const button2 = document.getElementById("start-timer");

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} :: ${currentTime.getMilliseconds()}`;
    timer.innerText = time;
}

let interval = setInterval(showTime, 100);

button.addEventListener("click", () =>{
    let insertedTime = document.getElementById("put-time").value;
    setTimeout(function( ) { clearInterval( interval ); alert("alarm")}, insertedTime*1000);
})

button2.addEventListener("click", () =>{
    interval = setInterval(showTime, 100);
})