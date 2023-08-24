<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Olá! Meu nome é Kaique, sou um desenvolvedor front-end, focado em performance, qualidade, responsividade e SEO.">
    <meta name="keywords" content="website, designer, site, programação, programador,  kiq, desenvolvimento, portfólio, front-end, kaique, frontend, ui, sites, ui designer, developer">
    <meta name="copyright" content="Kaique Oliveira">
    <meta http-equiv="content-language" content="pt-br">
    <meta property="og:image" content="./assets/img/preview.png">
    <meta property="og:title" content="Portfólio Kaique Oliveira">
    <meta property="og:description" content="Portfólio Kaique Oliveira">
    <link rel="canonical" href="https://okaique.com">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaique Oliveira</title>
    <link rel="icon" href="assets/svg/logoIcon.svg">

    <!-- TypedJS biblioteca para texto digitado em loop-->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.1"></script>

    <!-- SwiperJS biblioteca para carrosseis-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>

    <!-- Meu CSS/estilo -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Início navbar -->
    <header>
        <?php require_once("content/header.php")?>
    </header>
    <!-- Fim navbar -->
    <main>
        <!-- Início home -->
        <?php require_once("content/homeSection.php")?>
        <!-- Fim home -->
        <?php require_once("content/portfolioHome.php")?>
        <?php require_once("content/servicos.php")?>
        <hr>
        <?php require_once("content/sobre.php")?>
        <hr>
        <?php require_once("content/contato.php")?>
    </main>
    <hr>
    <footer>
        <?php require_once("content/rodape.php")?>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>