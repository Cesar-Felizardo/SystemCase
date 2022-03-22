
function upper() {
    const textInput = document.getElementById("text").value
    document.getElementById('txtReadyonly').value = (textInput.toUpperCase())
}

function lower() {
    const textInput = document.getElementById("text").value
    document.getElementById('txtReadyonly').value = (textInput.toLowerCase())
}

function init() {
    const textInput = document.getElementById("text").value
    const txtReadyonly = document.getElementById('txtReadyonly')
    txtReadyonly.value = (textInput[0].toUpperCase() + textInput.slice(1))
}

function limpar() {
   /*  let x = confirm("Deseja limpar o texto?") 
    if(x == true) {
        alert("Em branco...")
    } else {
        alert('Não')
    }   */ 
}