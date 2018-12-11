let month
let year
let today
let curMonth
let curYear

let itemTables

let nb_visible = 3
const max_visible = 10
let barModal;
let addTag


window.onload = () => {

    //set ajax in navigator
    document.getElementById('dir-home').onclick = directHomePage
    document.getElementById("dir-tables").onclick = directTablesPage
    document.getElementById('dir-calendar').onclick = directCalendar
    document.getElementById('profile-item').onclick = directProfile
    document.getElementById('name-app').onclick = directHomePage
}



