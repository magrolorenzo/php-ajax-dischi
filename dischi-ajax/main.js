$(document).ready(function() {

    // Creazione template per creazione card
    const card_structure = $("#cd-card-template").html();
    const template = Handlebars.compile(card_structure);

    // Chiamata ajax al file php
    $.ajax({
        url: "dischi.php",
        method: "GET",
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {

                var infos = {
                    "title": data[i].title,
                    "author": data[i].author,
                    "poster": data[i].poster,
                    "year": data[i].year,
                    "genre": data[i].genre
                }

                var card = template(infos);
                $(".cd-wrapper").append(card);
            }
        },
        error: function(){
            console.log("Errore nel caricamento dati.");
        }
    });
});
