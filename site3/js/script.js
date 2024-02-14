$(document).ready(function () {

    //1. hover text
    $("h2:hover").css("color", "red");

    //2. hide
    $("div#green").hide();

    //3. boutons 
    $("div#checkbox input").checkboxradio({
        icon: false
    });

    // 4. bouton change couleur
    $("div#forme div.rectangle").click(function () {
        var color = $(this).attr("id");
        $("div#checkbox label").css("color", color);
    });

    // 5. toggle les rectangle
    $("div#checkbox input").click(function () {
        var color = $(this).val();
        $("#" + color).toggle();
    });

    // 6.  slider changer grosseur rectangles
    $("#slider").slider({
        range: "min",
        value: 70,
        min: 10,
        max: 140,
        slide: function (event, ui) {
            $("div#largeur label").text(ui.value + "px");
            $(".rectangle").width(ui.value);
        }
    });

    //7. slider message info
    $("#slider").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    //8. afficher message
    $("button#message").button({
        icons: {
            primary: "ui-icon-comment"
        }
    });
    $("div#dialog").dialog({
        autoOpen: false,
        modal: true
    });
    $("#message").click(function () {
        $("#dialog").dialog("open");
    });


    //9-10. ajouter et supprimer ligne 
    $("#add").button({
        icons: {
            primary: "ui-icon-plus"
        }
    });

    $("#del").button({
        icons: {
            primary: "ui-icon-minus"
        }
    });

    $("#add").click(function () {
        if ($("#paragraphe").find("p").length == 0) 
        { $("#del").prop("disabled", false); 
        $(".loader").remove();
        }

        var nouvligne = "<p>Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec adgnosco postulo.</p>";
        $(nouvligne).insertBefore("#add");
        if ($("#paragraphe").find("p").length > 0) { $("#del").prop("disabled", false); }
    });

    $("#del").click(function () {
        $("#paragraphe p").last().remove();
    });

    // 11. animer bouton
    $("#animation button").button({
        icons: {
            primary: "ui-icon-play"
        }
    });

    $("#animation button").click(function () {
        var button = $("#animation button");
        button.animate({ left: '300px' }, "slow");
        button.animate({ left: '0px' }, "slow");
    });

    //12. AJAX
    $("#ajax button").button({
        icons: {
            primary: "ui-icon-help"
        }
    });
    $("#ajax button").click(function () {
        $("div#reponse").load("ajax/jquery.txt");

    });



    //13. date picker
    $(function () {
        $("#datepicker").datepicker({
        });
    });

    //14. spinner
    $(function () {
        $("#spinner").spinner({
            min: 0,
            max: 10
        });
    });

    //15. 

    //loader
    $("#del").click(function () {
        // Vérifier s'il y a des éléments <p> dans le div de paragraphe
        if ($("#paragraphe").find("p").length === 0) {
          // S'il n'y en a aucun, ajouter le loader
          $("<div class=\"loader\"></div>").insertBefore("#add");
          $("#del").prop("disabled", true);
        }
    });

    // draggable + droppable
    $(function() {
        $("#draggable").draggable();
        $("#droppable").droppable({
            drop: function(event, ui) {
                // Change the image source when dropped
                $("#draggable img").attr("src", "img/djk2.png");
            }
        });
        });


    // resize
    $( function() {
        $( "#draggable img" ).resizable();
      } );


});
