var counter = 0;
var slides = [];

$(document).ready(function(){

    $('.emailbody').hide();
      $('.emailobject').click(function(){   
        $(this).next().toggle();
});
	
  let title = $('.category-title');
	let content = title.next();
	content.hide();
	title.on('click',function(){
		content.hide();
		$(this).next().show();
	});

	let avat = $('.avatar');
	let menu = $('.dropdown-content')
	menu.hide()
	avat.on('click', function() {
		menu.toggle();
	});

	// Get the modal
	let modal = document.getElementById("myModal");

	// Get the button that opens the modal
	let signup = document.getElementById("signup");

	// Get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	signup.addEventListener('click',function(e){
		e.preventDefault();
		modal.style.display = "block";
	});

	// When the user clicks on <span> (x), close the modal
	span.addEventListener('click',function(e){
		e.preventDefault();
		modal.style.display = "none";
	});

	let modal1 = document.getElementById("myModal1");

	// Get the button that opens the modal
	let login = document.getElementById("login");

	let span1 = document.getElementsByClassName("close")[1];

	login.addEventListener('click',function(e){
		e.preventDefault();
		modal1.style.display = "block";
	});

	// When the user clicks on <span> (x), close the modal
	span1.addEventListener('click',function(e){
		e.preventDefault();
		modal1.style.display = "none";
	});


	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }else if(event.target == modal1){
	  	modal1.style.display = "none";
	  }
	};

// //Carroussel
	
// 	$('img.rounded-circle').each(function(index, item) {
//       slides.push($(item).attr('src'));
//     });

//     var slide = '';
//     var ul = "<div>";
//     for(let i = 0; i<slides.length; i++) {
//       slide += "<div class='slide'>"+"<img src='"+slides[i]+"' style='width:1500px;height:500px;margin-top:-300px;'/>"+"</div>";
//       $('.slides').html(slide);
//       ul += "<div data-active="+i+" class='item mr-1' style='width:10px;height:10px;background:#fff;border-radius:50%;border:1px solid #000;'></div></div>";
//       $('.captions').html(ul);
//     }

//     $('.slide').each(function(index, value){
//       if(index !== 0) {
//         $('.slide').eq(index).hide();
//       }
//     });
    
//     load();
//     change();

//   });

//   function next() {

//     $('.item').removeClass('active');
//     if(counter <= slides.length-1) {
//       $($('.item')[counter]).addClass('active');
//       slide = "<div class='slide'>"+"<img src='"+slides[counter]+"' />"+"</div>";
//       $('.slides').html(slide);

//     } else {
//       counter = slides.length-1;
//       if(counter == slides.length-1){
//         $($('.item')[slides.length-1]).addClass('active');
//       }
//     }


//     counter++;

//   }

//   function prev() {
//     counter--;

//     $('.item').removeClass('active');
//     if(counter >= 0) {
//       $($('.item')[counter]).addClass('active');
//       slide = "<div class='slide'>"+"<img src='"+slides[counter]+"' />"+"</div>";
//       $('.slides').html(slide);

//     } else {
      
//       counter = 0;

//     }

//   }

//   function load() {
//     window.setInterval(function() {
//       $('.item').removeClass('active');
//       $('.item').each(function(i,k){
//         $($('.item')[counter]).addClass('active');
//       });

//       slide = "<div class='slide'>"+"<img src='"+slides[counter]+"' />"+"</div>";
//       $('.slides').html(slide);

//       if(counter == slides.length-1) {
//         counter = -1;
//       }

//       counter++;
//     },50000);
//   }

//   function change() {
//     $('.item').each(function(index, item){
//       $(item).on('click', function(event){
//         $('.item').removeClass('active');
//         $(this).addClass('active');

//         slide = "<div class='slide'>"+"<img src='"+slides[index]+"' />"+"</div>";
//         $('.slides').html(slide);

//         counter = $(this).data('active');
//         event.preventDefault();
//       })

//     });

 

});
