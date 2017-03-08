

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		smartSpeed: 800,
		center: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	//bxslidaa
	$('.bxslider').bxSlider({
		speed: 2000,
		controls:false,
	});
	
	//3 boxy z licznikami
	var lock_1 = 0;
	var half_h = ($(window).height()/5)*4;
	$(window).scroll(function()
	{	
		if($(".o-nas .boxy .box .box-outter").length>0)
		{
			if($(window).scrollTop() >= $(".o-nas .boxy .box .box-outter").offset().top-half_h){
				if(lock_1 === 0){
					lock_1 = 1;
					$(".box-inner .liczba").each(function(){
						calculateNo(0, null, $(this));
					});  
				}
			}
		}
		fixed_menu();
	});
	
	
	function calculateNo(start, end, el){
			calosc = el.data("val");
			calosc +="";
			reszta = calosc.replace(/[0-9]/g, "");
		if(end == null){
			end = parseInt(el.data("val"));
		}
		el.text(start+""+reszta);
		if(start !== end){
			setTimeout(function(){
				start++;
				calculateNo(start, end, el);   
			}, 2000/end);
		}
	}

	//mobile menu
	menu_mobile()
	$('#top .mobile-menu img').click(function(){
        if($(".menu-top").hasClass('.open_top_menu'))
		{
			$(".menu-top").removeClass('.open_top_menu');
			$(".menu-top").slideUp();
		}
		else
		{
			$(".menu-top").addClass('.open_top_menu');
			$(".menu-top").slideDown();
		}
	})


	
	
	//slickslidaa
	
	$('.slick-partnerzy').slick({
		autoplay: true,
		autoplaySpeed:00,
		speed: 3000,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
					
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
			}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	

    /*
	if( $('#produkt').length>0){  
        //START SLIDER PRODUCT FOTOS
        var maxSlides;
        if      ( $(window).width() > 1199 ){ maxSlides = 3 ; }
        else if ( $(window).width() > 991 ){ maxSlides = 2 ; }
        else if ( $(window).width() > 976 ){ maxSlides = 2 ; }
        else if ( $(window).width() > 770 ){ maxSlides = 4 ; }
        else if ( $(window).width() > 580 ){ maxSlides = 3 ; }
        else { maxSlides = 2 ; }
        var product_fotos_slider = $('.bxslider').bxSlider({
            minSlides: 2,
            maxSlides: maxSlides,
            slideWidth: 171,
            slideMargin: 5,
            moveSlides: 1,
            pager: false,
            onSliderLoad: function(){ afterSliderLoad(); }
        }); 
		
        function reloadSliderFoto(){
            if      ( $(window).width() > 1199 ){ maxSlides = 3 ; }
			else if ( $(window).width() > 991 ){ maxSlides = 2 ; }
			else if ( $(window).width() > 976 ){ maxSlides = 2 ; }
			else if ( $(window).width() > 770 ){ maxSlides = 4 ; }
			else if ( $(window).width() > 580 ){ maxSlides = 3 ; }
            else { maxSlides = 2 ; }
            product_fotos_slider.reloadSlider({
                minSlides: 2,
				maxSlides: maxSlides,
				slideWidth: 171,
				slideMargin: 5,
				moveSlides: 1,
				pager: false,
            });
        }
		
		function afterSliderLoad(){
			$("#produkt-obraz").elevateZoom({
				gallery:'zoomGallery', 
				galleryActiveClass: 'active',
				borderSize: 2,
				scrollZoom : true,
				borderColour: '#90c3d4',
				zoomType	: "lens",
				lensShape : "round",
				lensSize : 200 
			});
        }
		
        $( window ).resize(function() { reloadSliderFoto(); });
        $( window ).on( "orientationchange", function(){ reloadSliderFoto(); });   
    //----------------------------------------------------------------------------------------------------------------------//   
    }
	*/
});

function menu_mobile()
{
	if($(window).width()>=768)
	{

		$(".menu-top").show();
		$("#top .mobile-menu").hide();
	}
	else
	{
		$(".menu-top").hide();
		$("#top .mobile-menu").show();
	}
	
	$(window).resize(function(){
		if($(window).width()>=768)
		{

				$(".menu-top").show();
				$("#top .mobile-menu").hide();
			
			
		}
		else
		{
			if(!$(".menu-top").hasClass('.open_top_menu')){
				$(".menu-top").hide();
				
			 }
			 $("#top .mobile-menu").show();
		}
	});	
	
}

 function fixed_menu()
 {
		var menu_wys = $("#top").height();
		if ($(window).scrollTop() > menu_wys)
		{	
			$('#page_wrapper').css('margin-top',menu_wys)
			$("#top").addClass("fixed_top_menu");
		}
		else
		{
			$('#page_wrapper').css('margin-top',0)
			$("#top").removeClass("fixed_top_menu");
		}
 }

$(window).load(function() {
    /*
    $("#menu-mobile").click(function(){
        $(".menu_list").slideToggle();    
    })
    $( window ).resize(function() { 
        if($(window).width()>768)
        {
            $(".menu_list").css('display','block')
        }
        else
        {
            $(".menu_list").css('display','none')
        }
    });
    $("#arrow-slider").click(function(){
        
        $('html,body').animate({
        scrollTop: $('.slider-home-boxes').offset().top},
        'slow');
    })
    
    
	$(".colorbox-1").colorbox();

	
	$(".ikona_flaga").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	$(".ikona_socialka").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	
	 $(".zakladka").click(function(){
        var index = $(this).data("index");    
        $(".tresc[data-index='"+index+"']").fadeIn();   
    })
      
    $(".home-article-list-titles-single").click(function(){
        $(".active_news").removeClass("active_news");
        $(this).addClass("active_news");
        var index = $(this).data("index");
        $(".home-article-list-text-single").each(
                function(){$(this).removeClass("active_news_text");}
                );
		$(".home-article-list-text-single[data-index='"+index+"']").addClass("active_news_text");
    });
	*/
	$('.slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 5000,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 00,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
    /*
    $('.table-responsive table').each(function(){ 
       $(this).addClass('table'); 
    });
    
    */
    
    
});
$(window).resize(function(){
	$(".ps-list").height($(".ps-current").height());
	//$(".ps-list li").css("height", '33%');
});
$(window).load(function() {
	
});