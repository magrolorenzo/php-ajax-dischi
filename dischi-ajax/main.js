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


});

// Funzione per cambio genere
$('#select-genre').on('change', function() {

    // Si salva il valore selezionato
    var g = $('#select-genre').children(":selected").attr("value");
    console.log("Hai selezionato " + g);

    if( g == "All" ){
        // Se è selezionato All, mostra tutte le card
        $(".cd-card").show();
    } else {

        // Altrimenti
        // Nascondile tutte
        $(".cd-card").hide();
        // Cicla tutte le card e verifica il value
        $('.cd-card').each(function () {
            // Se il value della card è uguale al genere selezionato, fai show
            if ( $(this).attr("value") == g) {
                $(this).show();
            }
        });

}

});
