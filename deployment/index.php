<?php
  $FRONTEND_HOST = "https://tools.smtdfc.rf.gd"; 
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>smtdfc tools - Powerful Tools for Your Tasks</title>

  <meta name="description" content="smtdfc tools - A collection of powerful tools to simplify and optimize your tasks.">
  <meta name="keywords" content="smtdfc tools, Task Tools, Productivity, Utilities, Developer Tools, Web Tools">
  <meta name="author" content="smtdfc team">

  <meta property="og:title" content="smtdfc tools - Powerful Tools for Your Tasks">
  <meta property="og:description" content="Explore smtdfc tools - A versatile collection designed to boost your productivity.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tools.smtdfc.rf.gd">
  <meta property="og:image" content="https://tools.smtdfc.rf.gd/og-image.jpg">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="smtdfc tools - Powerful Tools for Your Tasks">
  <meta name="twitter:description" content="A collection of versatile tools to help you complete tasks faster and smarter.">
  <meta name="twitter:image" content="https://your-website.com/twitter-image.jpg">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="<?= $FRONTEND_HOST ?>/dist/index.min.js" as="script">
  <link rel="stylesheet" href="<?= $FRONTEND_HOST ?>/styles/index.css" type="text/css" media="all">
</head>

<body>
  <div id="root">
    <div class="loader" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div class="spinner-loader"></div>
    </div>
  </div>

  <script>
    window.onload = function() {
      document.querySelector('.loader').style.display = 'none';
    };
  </script>

  <script type="module" src="<?= $FRONTEND_HOST ?>/dist/index.min.js" defer></script>
</body>

</html>