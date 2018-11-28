let month
let year
let today
let curMonth
let curYear

window.onload = () => {
    //Set event for direction button in navigator
    let directPages = document.querySelectorAll(".direct-event")
    directPages.forEach(element => {
        element.onclick = directPage
    });


    // document.getElementById("setChange").onchange = function(){
    //     console.log(this.value);
    // }
    
}

function directPage(){
    //Ajax call API of purpose page
    let name = this.getAttribute('name')
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText

            if(name == "calendar"){
                let head = document.getElementsByTagName('head')[0];
                let script = document.createElement('script');
                script.id = "setCalendar";
                script.src = 'js/calendar.js';
                head.appendChild(script);
            }

            if(name != "calendar"){
                let script = document.getElementById("setCalendar")
                if(script != undefined){
                    document.getElementsByTagName('head')[0].removeChild(script)
                }
            }
        }
    }

    let last_url = 'http://localhost:3300/' + name
    // console.log(last_url)
    xhttp.open('GET', last_url, true)
    xhttp.send()
}
