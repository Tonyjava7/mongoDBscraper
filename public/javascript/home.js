function displayScrape() {
    $.getJSON("/scrape", function (scrape_code) {
        if (scrape_code.code == "success") {
            $.getJSON("/articles", function (data) {
                $("#nyt-0, #nyt-1, #nyt-2").empty();
                $("#total-number").text(data.length);
                for (var i = 0; i < data.length; i++) {
                    var mainDiv = $("<div>");
                    mainDiv.addClass("card grey lighten-2");
                    var cardContentDiv = $("<div>");
                    cardContentDiv.addClass("card-content black-text");
                    var spanTitle = $("<span>");
                    spanTitle.addClass("card-title").attr("data-id", data[i]._id).attr("id", "title-" + data[i]._id).text(data[i].title);
                    var p = $("<p>");
                    p.text(data[i].summary);
                    p.attr("id", "summary-" + data[i]._id);
                    cardContentDiv.append(spanTitle).append(p);
                    var cardActionDiv = $("<div>");
                    cardActionDiv.addClass("card-action");
                    var a = $("<a>");
                    a.attr("href", data[i].link).attr("id", "link-" + data[i]._id).text("Go to the article");
                    cardActionDiv.append(a);
                    var saveArticle = $("<a>");
                    saveArticle.addClass("waves-effect waves-light btn save-button").attr("id", data[i]._id).text("Save Article");
                    var byline = $("<p>");
                    byline.text(data[i].byline).attr("id", "byline-" + data[i]._id);
                    cardActionDiv.append(byline).append(saveArticle);
                    mainDiv.append(cardContentDiv).append(cardActionDiv);
                    $("#nyt-" + String(i % 3)).append(mainDiv);
                }
            });
        }
   });
}

$(document).ready(function () {
    $('.slider').slider();
    $(".button-collapse").sideNav();
    $('.modal').modal();
});