let nb_visible = 3
const max_visible = 10
for(let i = nb_visible; i < max_visible; i++){
    console.log("right-defaults" + i)
    document.getElementById("right-defaults" + i).parentNode.style.display = "none"
}

let addTag = document.querySelectorAll(".add-tag")
addTag.forEach(element => {
   //event add input tag to create bar in .container_d
});

document.getElementById("add-list").onclick = function(){
    //add event create new list
}

document.getElementById("tag1_1_1").onclick = () => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("outcontent").innerHTML = this.responseText
        }
    }

    let last_url = 'http://localhost:3300/bar'
    // console.log(last_url)
    xhttp.open('GET', last_url, true)
    xhttp.send()
}
