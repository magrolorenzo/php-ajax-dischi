$(document).ready(function() {


    // Creazione template per card
    const card_structure = $("#cd-card-template").html();
    const template_card = Handlebars.compile(card_structure);

    // Creazione template per selezione genere
    const option_structure = $("#option-template").html();
    const template_option = Handlebars.compile(option_structure);

    // Chiamata ajax al file php
    $.ajax({
        url: "dischi.php",
        method: "GET",
        success: function(data){

            var genres = [];

            // Creazione card
            for (var i = 0; i < data.length; i++) {

                var infos = {
                    "title": data[i].title,
                    "author": data[i].author,
                    "poster": data[i].poster,
                    "year": data[i].year,
                    "genre": data[i].genre
                }

                if(!genres.includes(data[i].genre)){
                    genres.push(data[i].genre);
                }

                var card = template_card(infos);
                $(".cd-wrapper").append(card);
            }

            // Creazione option
            for (var i = 0; i < genres.length; i++) {

                var this_genre = {
                    "genre": genres[i]
                };

                var option = template_option(this_genre);
                $("#select-genre").append(option);
            }
            console.log(genres);
        },
        error: function(){
            console.log("Errore nel caricamento dati.");
        }
    });

    // Funzione per cambio genere
    function change_genre(){
        var g = document.getElementById("select-genre").value;
        console.log(g);
    };


});
