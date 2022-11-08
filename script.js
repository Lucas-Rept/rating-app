
let cont = 0;
let selected = null;
var result = null;

function select(option){
    if(cont == 0){
        selected = option.innerText;
        option.setAttribute("sel", 1);
    }
    if(selected != option){
        let li = document.getElementsByTagName("li")[selected - 1];
        li.style.backgroundColor = "rgb(53, 53, 53)";
        li.style.color = "grey";
        li.setAttribute("sel", 0)
        selected = option.innerText;
    }
    cont++;
    console.log(selected);
    option.style.backgroundColor = "orange";
    option.style.color = "white";
    option.setAttribute("sel", 1);
    result = option.innerText;
}

function change(){
    if(result == null){
        return;
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("end").style.display = "flex";
    document.getElementsByTagName("span")[0].innerText = result;
}