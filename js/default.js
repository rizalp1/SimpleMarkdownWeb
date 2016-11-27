// Converts markdown into html for insertion into the respective div
var showdown_converter = new showdown.Converter();

/** TODO Change this when you want a new blog to be the default blog. **/
var defaultBlog = "blog1.md";

var main_body_div = "#main_body";
var left_nav_div = "#left_nav";
var left_md_file = "left.md";
var left_nav_links = "#left_nav a";

var applyMdToDiv = function(mdFileName, div) {
    $.get("../markdown/" + mdFileName, function( data ) {
            var convertedHtml = showdown_converter.makeHtml(data);
            $(div).html(convertedHtml);
            console.log(mdFileName + " will be rendered to " + div);
        }).fail(function () {
            console.log("Link was dead, couldn't render entry to " + div);
        });
};

var getMdFileFromHash = function(hash) {
    if (!hash.startsWith('#')) {
        throw "hash doesn't begin with #";
    }
    return hash.substring(1) + ".md"; // strip off '#' and add .md extension
};

$(document).ready(function() {
    // Fetch left.md and apply to left navigation
    applyMdToDiv(left_md_file, left_nav_div);

    // Either apply default blog or the blog that was specified in url
    var current_hash = $(location).attr('hash');
    if (current_hash) {
        applyMdToDiv(getMdFileFromHash(current_hash), main_body_div);
    } else {
        // Load default blog
        applyMdToDiv(defaultBlog, main_body_div);
    }

    $("body").on("click", left_nav_links, function() {
        var element = $(this);
        var href = element.attr('href');
        if (!href.startsWith('#')) {
            return;
        }

        var mdFileName = getMdFileFromHash(href);
        applyMdToDiv(mdFileName, main_body_div);
    });


});