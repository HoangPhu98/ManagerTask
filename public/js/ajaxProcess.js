
function directHomePage(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText
            
        }
    }

    let last_url = 'http://localhost:3300/home'
    xhttp.open('GET', last_url, true)
    xhttp.send()
}

function directTablesPage(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText
        
            let head = document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            script.id = "setTables";
            script.src = 'js/tables.js';
            head.appendChild(script);

            let scriptTables = document.getElementById("setTables")
            if(scriptTables != undefined){
                document.getElementsByTagName('head')[0].removeChild(scriptTables)
            }
        }
    }

    let last_url = 'http://localhost:3300/tables'
    // console.log(last_url)
    xhttp.open('GET', last_url, true)
    xhttp.send()
}

function directCalendar(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText

            let head = document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            script.id = "setCalendar";
            script.src = 'js/calendar.js';
            head.appendChild(script);

            let scriptCalendar = document.getElementById("setCalendar")
            if(scriptCalendar != undefined){
                document.getElementsByTagName('head')[0].removeChild(scriptCalendar)
            }
        }
    }

    let last_url = 'http://localhost:3300/calendar'
    xhttp.open('GET', last_url, true)
    xhttp.send()
}

function directProfile(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText

        }
    }

    let last_url = 'http://localhost:3300/profile'
    xhttp.open('GET', last_url, true)
    xhttp.send()
}

function directParticularTable(){
    let id = this.id;    
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            document.getElementById("main").innerHTML = this.responseText
            
            let head = document.getElementsByTagName('head')[0];

            let script2 = document.createElement('script');
            script2.id = "setTableMin";
            script2.src = 'js/example.min.js';
            head.appendChild(script2);

            let script3 = document.createElement('script');
            script3.id = "setTable";
            script3.src = 'js/table.js';
            head.appendChild(script3);
        }
    }

    let last_url = 'http://localhost:3300/table/' + id;
    xhttp.open('GET', last_url, true)
    xhttp.send();

}