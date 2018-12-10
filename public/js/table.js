let nb_visible = 3
const max_visible = 10
document.getElementById("buble").style.display = 'none'

for(let i = nb_visible; i < max_visible; i++){
    console.log("right-defaults" + i)
    document.getElementById("right-defaults" + i).parentNode.style.display = "none"
}
let barModal = null;

let addTag = document.querySelectorAll(".add-tag")
addTag.forEach(element => {
    let nodeCur = element;
    element.onclick = ()=>{
        nodeCur.style.display = 'none'

        //create input tag  to get content for tag
        let nodeHtml = document.createElement("div")
        nodeHtml.style.whiteSpace = 'normal'
        nodeHtml.innerHTML = "<input style='z-index: 1000' id='inContent' type='text' autofocus />"
            + "<button style='z-index: 1000;' id='saveTag'>Luu</button>"
            + "<button id='cancelTag'>Huy</button>"
        let nodeList = nodeCur.parentNode.children[1];
        let idNode = nodeCur.parentNode.id + (nodeList.children.length + 1)
        nodeHtml.id = idNode
        
        nodeList.appendChild(nodeHtml)
        
        createNewTag(idNode, nodeCur)
       
        
    }

});

function createNewTag(idNode, hideTag){
    // document.getElementById("buble").style.display = 'inline-block'

    document.getElementById("saveTag").onclick = () => {
        let content = document.getElementById('inContent').value
        let curNode = document.getElementById(idNode)
        while (curNode.firstChild) {
            curNode.removeChild(curNode.firstChild);
        }
        curNode.innerHTML = content
        hideTag.style.display = 'block'
    }

    document.getElementById('cancelTag').onclick = () => {
        document.getElementById(idNode).remove()

        hideTag.style.display = 'block'
    }
    
}


document.getElementById("add-list").onclick = function(){
    console.log("hello")
    nb_visible++;
    document.querySelectorAll(".part_table")[nb_visible].style.display = 'inline-block'
}

document.getElementById("tag1_1_1").onclick = () => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("outcontent").innerHTML = this.responseText;

            let head = document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            script.id = "setBar";
            script.src = '../js/bar.js';
            head.appendChild(script);
        }
    };

    let last_url = 'http://localhost:3300/bar';
    xhttp.open('GET', last_url, true);
    xhttp.send();
};