<?php
if($_SERVER['REQUEST_METHOD']==='GET'){
    $respuesta = "El metodo si es GET";
    echo $respuesta;
}else {
    echo "ERROR el metodo no es GET";
};