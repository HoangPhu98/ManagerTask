window.onload = () => {
    //Set event for direction button in navigator
    let directPages = document.querySelectorAll(".direct-event")
    directPages.forEach(element => {
        element.onclick = directPage
    });
}

function directPage(){
    //Ajax call API of purpose page
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText
        }
    }
    let last_url = 'http://localhost:3300/' + this.getAttribute('name')
    // console.log(last_url)
    xhttp.open('GET', last_url, true)
    xhttp.send()
}