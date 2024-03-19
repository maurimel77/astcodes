
//Funciones para ajustar el zoom del navegador si la resolucion en altura del monitor es menor o igual a 850 px
window.onload = function() {
    checkResolution();
};
    
window.onresize = function() {
    checkResolution();
};
    
function checkResolution() {
    //console.log("debug funct");
    var zoomLevel = 1.0;
    if (window.innerHeight <= 850) {
        zoomLevel = 0.85;
		console.log("zoom corregido al 85%");
    }
    document.body.style.zoom = zoomLevel;
}