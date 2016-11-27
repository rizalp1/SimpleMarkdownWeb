// Converts markdown into html for insertion into the respective div
var showdown_converter = new showdown.Converter();

// Fetch body.md and insert into main_body div.
$.get("../markdown/body.md", function( data ) {
    var convertedHtml = showdown_converter.makeHtml(data);
    $("#main_body").html(convertedHtml);
        console.log( "successfully loaded body.md and applied to main div." );
    });

// Fetch left.md if it exists, and insert into left_nav. If left.md doesn't exist, we render a page without left navigation.
$.get("../markdown/left.md", function( data ) {
        var convertedHtml = showdown_converter.makeHtml(data);
        $("#left_nav").html(convertedHtml);
        console.log("left.md will be rendered.");
    }).fail(function () {
        console.log("left.md doesn't exist. This is fine if you don't want a left navigation bar.");
    });
