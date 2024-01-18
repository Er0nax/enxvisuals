<?php global $app ?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <meta content="<?= $app->env->variables['METADESCRIPTION'] ?>" name="description">
    <meta content="<?= $app->env->variables['METAKEYWORDS'] ?>" name="keywords">
    <meta content="<?= $app->env->variables['METAAUTHOR'] ?>" name="author">

    <title><?= $app->env->variables['TITLE'] ?> | <?= $app->page->info['title'] ?></title>

    <link rel="icon" type="image/x-icon" href="assets/images/icons/icon-72x72.png"/>
    <link rel="manifest" href="assets/manifest/manifest.webmanifest" />

    <!-- CSS Files -->
    <?php if (!empty($app->page->cssFiles)) : ?>
        <?php foreach ($app->page->cssFiles as $cssFile) : ?>
            <link rel="stylesheet" href="<?= $cssFile ?>?v=<?= $app->settings->cssVersion ?>"/>
        <?php endforeach; ?>
    <?php endif ?>
</head>
<body>
<div class="loading-line"></div>

<!-- notification for small viewports and landscape oriented smartphones -->
<div class="device-notification">
    <a class="device-notification--logo" href="#0">
        <img src="assets/images/template/logo.png" alt="Global">
        <p>Global</p>
    </a>
    <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>


<div class="perspective effect-rotate-left">
    <div class="container">
        <div class="outer-nav--return"></div>
        <div id="viewport" class="l-viewport">
            <div class="l-wrapper">

                <!-- Header-->
                <?php include('_partials/header.php'); ?>

                <!-- inner nav-->
                <?php include('_partials/innerNav.php'); ?>

                <!--<div id="pagecontent">-->
                    <!-- site functions -->
                    <?php if (file_exists('../app/modules/site/' . $app->page->info['name'] . '.php')) : ?>
                        <?php include('../app/modules/site/' . $app->page->info['name'] . '.php') ?>
                    <?php endif ?>

                    <!-- content-->
                    <?php include('../views/content/' . $app->page->info['name'] . '/index.view.php'); ?>
                <!--</div>-->

            </div>
        </div>
    </div>

    <!-- outer nav-->
    <?php include('_partials/outerNav.php'); ?>

</div>


<script>
    const siteUrl = '<?= $app->settings->url ?>';
    const siteTitle = '<?= $app->env->variables['TITLE'] ?> | <?= $app->page->info['title'] ?>';
    const auto_scroll_top = true;
</script>

<!-- scripts -->
<?php if (!empty($app->page->jsFiles)) : ?>
    <?php foreach ($app->page->jsFiles as $jsFile) : ?>
        <script type="<?= $jsFile['type'] ?>" src="<?= $jsFile['url'] ?>?v=<?= $app->settings->jsVersion ?>"></script>
    <?php endforeach; ?>
<?php endif ?>

</body>
</html>
