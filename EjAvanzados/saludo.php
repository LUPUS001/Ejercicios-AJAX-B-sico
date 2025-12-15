<?php
/* VERSIÓN 1 */
// Recogemos los datos y los imprimimos directamente concatenados
echo "Hola " . $_POST['nombre'] . " " . $_POST['apellido'];



/* VERSIÓN 2 */
    // Recogemos los datos con $_POST
    /* if(isset($_POST['nombre']) && isset($_POST['apellido'])) {
        $n = $_POST['nombre'];
        $a = $_POST['apellido'];
        echo "Hola <strong>" . $n . " " . $a . "</strong>. He recibido tu nombre por POST.";
    } else {
        echo "No he recibido datos.";
    } */

/* VERSIÓN 3 */
    // Comprobamos si llegan los datos por POST
    /* if(isset($_POST['nombre']) && isset($_POST['apellido'])) {
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        
        // Si los campos no están vacíos
        if ($nombre != "" && $apellido != "") {
            echo "Hola, <strong>" . $nombre . " " . $apellido . "</strong>. ";
            echo "He recibido tus datos mediante AJAX usando POST.";
        } else {
            echo "Por favor, rellena los campos en el formulario.";
        }
    } else {
        echo "No se han recibido parámetros.";
    } */
?>