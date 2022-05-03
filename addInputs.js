function sumar(){
    const numpa = document.getElementsByClassName("parada").length + 1;
    const label = document.createElement("label");
    const intput = document.createElement("input");
    const div = document.createElement("div");
    div.id = "div_parada"+numpa;
    div.className = "grupo_parada"
    label.textContent = "Parada: ";
    label.htmlFor= "parada"+numpa;
    intput.type = "text";
    intput.name = "parada";//+numpa;
    intput.id = "parada"+numpa;
    intput.className = "parada";
    intput.placeholder = "Parada";
    const salida = document.getElementById("div_paradas"); 
    div.appendChild(label);
    div.appendChild(intput);
    salida.appendChild(div);
}

function restar(){
    try{
        const numpa = document.getElementsByClassName("parada").length;
        const salida = document.getElementById("div_paradas");
        salida.removeChild(document.getElementById("div_parada"+numpa))
    }
    catch(error){
        return;
    }
}