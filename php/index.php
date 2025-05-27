<?php
require_once "config/settings.php";

$pages = [
    "accueil" => "accueil.php",
    "meteo" => "meteo.php",
    "agenda" => "agenda.php",
    "bloc_note" => "blocNote.php",
    "mail" => "mail.php"
];
if (isset($_GET["page"])){
    include $pages[$_GET["page"]];
} else {
    echo "ytfytf";
    // include $pages["accueil"];
    include "accueil.php";
}
?>
