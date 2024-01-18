<?php if (!class_exists('index')) : ?>
    <?php include('../app/modules/site/index.php'); ?>
<?php endif ?>

<?php $index = new index(); ?>

<ul class="l-main-content main-content">
    <?php include('../views/content/index/home.view.php'); ?>
    <?php include('../views/content/index/work.view.php'); ?>
    <?php include('../views/content/index/about.view.php'); ?>
    <?php include('../views/content/index/contact.view.php'); ?>
    <?php include('../views/content/index/hire.view.php'); ?>
</ul>
