<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="planning quotidien">
    <meta name="keywords" content="agenda,mail,rendez-vous,meteo,organisateur de journée">
    <link rel="stylesheet" href="<?= CSS_DIR;?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    
    <!-- Appel du fichier JS -->
    <script  src="dist/js/theme.js" defer></script> 

    <title>AIO</title>
</head>

<body>

    <div class="page">

        <!-- Création du menu dans le DOM -->
        <div class="mainMenu" id="main-menu">
            <span class="close-mainMenu">
                <svg version="1.1" viewBox="0 0 36 36" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="icons">
                        <path fill="currentColor" stroke="currentColor" d="M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z" />
                    </g>
                </svg>
            </span>
            <div id="menu-js"></div>
        </div>

        <header id="header">

            <div class="header_btn_Menu">
                <img src="images/burger-menu-svgrepo-com.svg" alt="menu" class="header_btn_menu_logo">
            </div>

            <div class="search_Bar">
                <input type="text" placeholder="Recherche.." class="search_Bar_text">
            </div>

            <div class="logo">
                <img src="images/Animation_-_1743170664427.gif" alt="">
            </div>
        </header>
        <!-- meteo -->
        <div class="meteo">
            <div class="meteo_sliders">
            <div class="meteo_widget">Widget Meteo</div>
            <img class="background_meteo" src="images/nuage.jpg" alt="">
            <div class="meteo_widget">Widget Meteo</div>
            <img class="background_meteo" src="images/nuage.jpg" alt="">
        </div>
        </div>
        <!-- notification -->
        <div class="body_app">
            <div class="notif">
                <div class="notif -blue">
                    <div class="notif_content">
                        <div class="notif_content_date">
                            <span class="date">30/12</span>
                            <span class="year">2025</span>
                        </div>
                        <div class="notif_content_title">
                            Rendez-vous garage pour changer les pneus ...
                        </div>
                        <div class="notif_content_action">
                            <img src="images/chevron-right.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="notif -purple">
                    <div class="notif_content">
                        <div class="notif_content_date">
                            <span class="date">16/04</span>
                            <span class="year">2025</span>
                        </div>
                        <div class="notif_content_title">
                            Rendez-vous docteur
                        </div>
                        <div class="notif_content_action">
                            <img src="images/chevron-right.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn_bleu">
                <a class="btn_bleu_text" href="agenda.html">Tout voir</a>

            </div>
            <!-- fin de notification -->
            <!-- minuteur -->
            <div class="minuteur">
                <div class="minuteur_titre">Minuteur</div>
                <div class="minuteur_time">00.00.00</div>
                <div class="minuteur_container">
                    <div class="heures">heures</div>
                    <div class="minutes">minutes</div>
                    <div class="secondes"> secondes</div>
                </div>

                <div class="btn_vert">Demarrer</div>
            </div>

            <!-- fin de minuteur  -->
            <!-- bloc note  -->
            <div class="bloc">
                <div class="bloc_item">
                    <img src="images/memo-removebg-preview.png" alt="">
                </div>
                <!-- fin de bloc note  -->
                <!-- bloc mail  -->
                <div class="bloc_item">
                    <img src="images/mail-removebg-preview.png" alt="">
                </div>
            </div>
            <!-- fin de bloc mail  -->
        </div> 
        <footer class="footer">
            <p class="footer_year">2025</p>
        </footer>   
</body>

</html>