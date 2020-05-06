$(document).ready(function() {


// page 1
  var max = 200;
  var min = 50;

// var string = "hello"
// var bool = "true"

  for (var i = 0; i < 50; i++) {
    //create and append a square into the animation
    var leftPosition = Math.floor(Math.random() * 100);
    var size = Math.floor(Math.random() * max - min + 1) + min;
    var delay = Math.floor(Math.random() * 15);
    var square = $("<li></li>");
    square.css({'left': leftPosition + '%', 'top': '100%', 'width': size + 'px', 'height' : size + 'px', 'animation-delay': delay + 's'});
    $('.squares').append(square);
  }

  $('.squares li').mouseover(function() {
    $(this).css('background', 'lightblue');
  });

// page 2
$(".album-poster").on('click', function(e){
	var dataSwitchId = $(this).attr('data-switch');
	console.log(dataSwitchId);

	ap.list.switch(dataSwitchId);

	ap.play();
	$("#aplayer").addClass('showPlayer');
});

	const ap = new APlayer({
    container: document.getElementById('aplayer'),
		listFolded: true,
    audio: [
			{
        name: 'Intention',
        artist: 'Justin Bieber',
        url: 'music/3.mp3',
        cover: 'img/3.jpg'
    },
		{
			name: 'ILYSB',
			artist: 'LANY',
			url: 'music/5.mp3',
			cover: 'img/5.jpg'
	},
	{
		name: 'Youre On My Mind',
		artist: 'Tom Misch',
		url: 'music/7.mp3',
		cover: 'img/7.jpg'
},
{
	name: 'ball w/o you',
	artist: '21 Savage',
	url: 'music/1.mp3',
	cover: 'img/1.jpg'
},

{
	name: 'Nowhere Near',
	artist: 'Yo La Tengo',
	url: 'music/8.mp3',
	cover: 'img/8.jpg'
},
{
	name: 'La vie en rose',
	artist: 'Louis Armstrong',
	url: 'music/6.mp3',
	cover: 'img/6.jpg'
},
{
	name: 'The Next Best American Records',
	artist: 'Lana Del Rey',
	url: 'music/4.mp3',
	cover: 'img/4.jpg'
},
{
	name: 'Killing Me Softly With His Song',
	artist: 'Fugees',
	url: 'music/2.mp3',
	cover: 'img/2.jpg'
},
	]
});

// page 3
var div1 = $(".grid div:first-child img").offset();
var div2 = $(".grid div:nth-child(3) img").offset();
var div3 = $(".grid div:nth-child(5) img").offset();
var div4 = $(".grid div:nth-child(7) img").offset();


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	if(wScroll > div1.top - 300) {
			//do stuff
			$(".grid div:first-child img").addClass('anim');
	}
	if(wScroll > div2.top - 300) {
			//do stuff
			$(".grid div:nth-child(3) img").addClass('anim');
	}
	if(wScroll > div3.top - 300) {
			//do stuff
			$(".grid div:nth-child(5) img").addClass('anim');
	}
	if(wScroll > div4.top - 300) {
			//do stuff
			$(".grid div:nth-child(7) img").addClass('anim');
	}
});

// page4//////////////
$('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });

// footer animation///////////


});
