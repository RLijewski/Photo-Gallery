//rebox
$('.photo-gallery').rebox({ selector: 'a' });


//list
var options = {
    valueNames: [ { attr: 'title', name: 'photo-caption'} ]
};

var hackerList = new List('photos', options);
