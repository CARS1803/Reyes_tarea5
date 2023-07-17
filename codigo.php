<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $respuesta = "El método sí es GET";
    mostrarRespuesta($respuesta);
} else {
    $respuesta = "ERROR: El método no es GET";
    mostrarRespuesta($respuesta);
}

function mostrarRespuesta($respuesta) {
    echo $respuesta;
}
