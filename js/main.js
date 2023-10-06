
$(function(){

    $('.accor_name').on('click', function(){
      if ($(this).closest('.accor_block').hasClass('opened')){
        $(this).closest('.accor_block').removeClass('opened');
      } else {
      	$(this).closest('.accor_block').siblings().removeClass('opened');
        $(this).closest('.accor_block').addClass('opened');
      }
    });

	
	var $body = $(document.body),
     	$html = $(document.documentElement);

 //  function formPopup($btn,$wrap){

 //    var closeForm = $('.formExtraWrapper .close-form'),
 //        formWrap = $($wrap),
 //        formBtn = $($btn),
 //        formOpened = 'opened',
 //        overflowHidden = 'oveflowHidden';

 //    closeForm.on('click', function() {
 //        formWrap.removeClass(formOpened);
 //        $html.removeClass(overflowHidden);
 //    });
 //    formBtn.on('click', function(event) {
 //        formWrap.addClass(formOpened);
 //        $html.toggleClass(overflowHidden);
 //        event.preventDefault();
 //    });

 //    $html.on('keyup', function(event) {
 //        if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
 //            formWrap.removeClass(formOpened);
 //            $html.removeClass(overflowHidden);
 //        }
 //    });
 //    $body.on('click touchstart', function(a) {
 //        if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
 //        if (formWrap.hasClass(formOpened)) {
 //            formWrap.removeClass(formOpened);
 //            $html.removeClass(overflowHidden);
 //        }
 //    });
 //  }

	// formPopup('.contacts_btn','.contacts_popup');

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

    $('.input-file input[type=file]').on('change', function(){
		let file = this.files[0];
		$(this).closest('.input-file').find('.input-file-text').html(file.name);
	});
});


let swiper = new Swiper(".spes_swiper", {
	loop: true,
	slidesPerView: 4,
  	spaceBetween: 30,
	lazy: true,
	breakpoints: {
	    0: {
	    	slidesPerView: 1,
	      	spaceBetween: 16
	    },
	    640: {
	    	slidesPerView: 2,
	      	spaceBetween: 20
	    },
	    1001: {
	    	slidesPerView: 3,
	      	spaceBetween: 20
	    },
	    1201: {
	      	spaceBetween: 30
	    }
	},
	navigation: {
      	nextEl: ".swiper_spes_next",
      	prevEl: ".swiper_spes_prev",
    }
});

let swiperPart = new Swiper(".part_swiper", {
	loop: true,
	slidesPerView: 6,
  	spaceBetween: 30,
	lazy: true,
	breakpoints: {
	    0: {
	    	slidesPerView: 1,
	      	spaceBetween: 16
	    },
	    640: {
	    	slidesPerView: 2,
	      	spaceBetween: 20
	    },
	    1001: {
	    	slidesPerView: 3,
	      	spaceBetween: 20
	    },
	    1201: {
	    	slidesPerView: 4,
	      	spaceBetween: 30
	    },
	    1380: {
	    	slidesPerView: 6,
	      	spaceBetween: 30
	    }
	},
	navigation: {
      	nextEl: ".swiper_part_next",
      	prevEl: ".swiper_part_prev",
    }
});