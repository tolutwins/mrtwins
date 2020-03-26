$('.divAlert').click(function() {
    
    var htmlElement = $(this);
    alert(htmlElement[0].innerText)

});

var movies = [
    {
        Title: 'Avengers',
        Image: 'images/thumbnails/avengers.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Black Panther',
        Image: 'images/thumbnails/blackpanther.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Black Widow',
        Image: 'images/thumbnails/blackwidow.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Dead Pool',
        Image: 'images/thumbnails/deadpool.jpg',
        Description: 'This is an action packed super hero movie'
    }
];

// get html for thumbnails
var html = getHtml(movies);
$(".thumbnailsContainer").html(html);


// functions
function getHtml(movies) {
    var htmlString = '';
    for(let i = 0; i < movies.length; i++) {
        htmlString = htmlString + `<div title="${movies[i].Title}" data-url="${movies[i].Image.replace("thumbnails", "large")}" class="thumb"><img src="${movies[i].Image}" title="${movies[i].Title}" /></div>`;
    }
    return htmlString;
}

// detect the clicking of all .thumb
// using jquery
$('.thumb').click(function() {

    // find the exact html element that made the call
    var htmlElement = $(this); // array
    
    // get the title
    // var title = htmlElement[0].title;
    // alert(title);

    // get the url for the large image
    var largeImageUrl = htmlElement.data('url');
    
    // replace large image
    $(".replaceImage").attr("src", largeImageUrl);
});