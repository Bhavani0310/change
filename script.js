const btn = document.getElementById("button");
const body = document.body;

const colors = ['red','green','purple','blue','yellow','pink','black','maroon','aqua']
body.style.backgroundColor="blanchedalmond"
btn.addEventListener('click',change)

function change(){
     const index =Math.floor(Math.random()*colors.length)
     body.style.backgroundColor=colors[index]
}