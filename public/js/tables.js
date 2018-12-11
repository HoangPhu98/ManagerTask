
itemTables = document.getElementsByTagName('a')

console.log(itemTables.length)

for(let i = 0; i < itemTables.length; i++){
    itemTables[i].onclick = directParticularTable
}
