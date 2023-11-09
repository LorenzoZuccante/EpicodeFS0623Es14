let tabellone = [];
for (i = 1;i <= 76;i++ ){
    tabellone.push(i)

}
function appendtabellone(){
    for (i = 0 ; i< tabellone.length ; i++){
     let divisorio = document.createElement("div");
     divisorio.textContent = tabellone[i];
     let container = document.getElementById("tabellonecontainer");
     container.appendChild(divisorio);
     
    
    }

    


}
appendtabellone();

function sceltaCasuale(array){
    let array1 = Math.floor(Math.random()*array.length +1);
    return array1.push(numeriEstratti)
}

let numeriEstratti = []
console.log(numeriEstratti)

let button = document.getElementById("randombtn");

     function classAdd(){
     let container = document.getElementById("tabellonecontainer");
     let divFigli = container.getElementsByTagName("div");
     for (i = 0; i < divFigli.length; i++){
        if (divFigli[i].textContent === numeriEstratti){
            divFigli[i].classList.add("selected")
     }

    }
}
button = sceltaCasuale()