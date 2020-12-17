<?php
    include "dischi.php";
?>

<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/app.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==" crossorigin="anonymous"></script>
        <title>
            Php Dischi
        </title>
    </head>
    <body>
        <div id="root">
            <div class="container">
                <!-- <div class="select-container">
                    <div>
                        <label for="select-genre">Genres</label>
                        <select name="genres" id="select-genre" v-model="genre_selected">
                            <option value="All">All</option>
                            <option v-for="(genre, index) in genres_array" :value="genre">{{genre}}</option>
                        </select>
                    </div>
                    <div>
                        <label for="sorting">Sort by Year: </label>
                        <select name="sort" id="sorting">
                            <option value="no"> - </option>
                            <option value="asc">Asc ▲</option>
                            <option value="desc">Desc ▼</option>
                        </select>
                    </div>
                </div> -->
                <div class="cd-wrapper">

                    <?php foreach ($dischi as $disco) { ?>

                    <div class="cd-card">
                        <div class="image-container">
                            <img src="<?php echo $disco["poster"] ?>" alt="" class="poster">
                        </div>
                        <div class="title-container">
                            <span class="title"><?php echo $disco["title"] ?></span>
                        </div>
                        <div class="author-container">
                            <span class="author"><?php echo $disco["author"] ?></span>
                        </div>
                        <div class="genre-container">
                            <span class="genre">Genre: <?php echo $disco["genre"] ?></span>
                        </div>
                        <div class="year-container">
                            <span class="year">Year: <?php echo $disco["year"] ?></span>
                        </div>
                    </div>

                    <?php } ?>
                </div>
            </div>
        </div>
    </body>
</html>
