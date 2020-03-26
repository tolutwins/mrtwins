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
    },
    {
        Title: 'Jack Rabbit',
        Image: 'images/thumbnails/jackrabbit.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Onwards',
        Image: 'images/thumbnails/Onwards.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Resident Evil',
        Image: 'images/thumbnails/residentevil.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Sky Scraper',
        Image: 'images/thumbnails/skyscraper.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Star Wars',
        Image: 'images/thumbnails/starwars.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Tan Haji',
        Image: 'images/thumbnails/tanhaji.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Wonder Woman',
        Image: 'images/thumbnails/wonderwoman.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Xmen',
        Image: 'images/thumbnails/xmen.jpg',
        Description: 'This is an action packed super hero movie'
    }
];

var html = getHtml(movies);

$(".thumbnailsContainer").html(html);
var devs = $(".development");

// functions
function getHtml(movies) {
    var htmlString = '';
    for(let i = 0; i < movies.length; i++) {
        htmlString = htmlString + `<div title="${movies[i].Title}" data-url="${movies[i].Image.replace("thumbnails", "large")}" class="thumb"><img src="${movies[i].Image}" title="${movies[i].Title}" /></div>`;
    }
    return htmlString;
}


// anonymous function does not need to be called
(function () {
    // alert("Hello Tolu!!");  // I will invoke myself
})();
// alert gets called


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


function MakeSkyFall() {

}

function MakeRainFall() {
    
}

function MakeHeavensFall() {
    
}