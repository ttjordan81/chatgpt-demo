function startLoaderSpinner(){
    document.body.innerHTML += `<div id="loader"></div>`
}

function stopLoaderSpinner(){
    document.getElementById("loader").remove()
}