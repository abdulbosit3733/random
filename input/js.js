let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
let p = document.getElementById("p")


function nmadr(event){
    console.log(inp.value)

    if ((event.key === 'Enter' || event.type ==='click') && inp.value.trim()){
        ul.innerHTML += `
        <p id="p">${inp.value}</p>
    `
    inp.value = ''
    }
    
    

}