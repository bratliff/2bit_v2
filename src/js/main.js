$(document).ready(function(){

    var bit_two = {
        textcounter: 0,
        imagecounter: 1,
        graphicAnim: true,
        developAnim: false,
        changeTrigger: false,
        addListeners : function() {
            $('.nav li').click(function(e){
                switch($(this).index()) {
                    case 0:
                        $('html, body').animate({scrollTop: $('.hero').offset().top });
                    break;
                    case 1:
                        $('html, body').animate({scrollTop: $('.graphic').offset().top });
                    break;
                    case 2:
                        $('html, body').animate({scrollTop: $('.development').offset().top });
                    break;
                    case 3:
                        $('html, body').animate({scrollTop: $('.motion').offset().top });
                    break;
                    case 4:
                        $('html, body').animate({scrollTop: $('.contact').offset().top });
                    break;
                }
            });
        },
        webscroll : function() {
            if(!bit_two.developAnim) {

                setInterval(function(){

                    if (bit_two.imagecounter == 6) {
                        $('.strip').css({'left':'0px'});
                        bit_two.imagecounter = 1;
                    };
                    $('.strip').animate({left: "-=462"}, 500);
                    bit_two.imagecounter++;
                }, 3000);
                bit_two.developAnim = true;
            }

        },
        openingtext : function() {
            if(bit_two.textcounter < 6) {
                $('.herotext li').eq(bit_two.textcounter).addClass('active');
                bit_two.textcounter++;
            }
        },
        changePage: function(index) {
            $('.graphic, .diagonal-box').removeClass('show').addClass('hide');

            switch(index) {
                case 0:
                    $('.hero-bg').addClass('show');
                    $('.graphic-bg').removeClass('show');
                break;
                case 1:
                    bit_two.graphicAnim ? $('.graphic, .diagonal-box').addClass('animate') : $('.graphic, .diagonal-box').addClass('show');

                    bit_two.graphicAnim = false;
                    $('.graphic-bg').addClass('show');
                    $('.development-bg').removeClass('show');
                break;
                case 2:
                    bit_two.webscroll();
                    $('.development-bg').addClass('expand show').removeClass('change');
                break;
                case 3:
                    $('.development-bg').addClass('change show');
                    $('.development-bg').removeClass('rotate');
                break;
                case 4:
                    $('.development-bg').addClass('rotate expand show');
                break;
            }

        },
        scrollWatch: function(scrolled) {

            if (scrolled < 850) {
                bit_two.changePage(0);
            }
            if (scrolled > 850 && scrolled < 2100) {
                bit_two.changePage(1);
            }
            if (scrolled > 2100 && scrolled < 3500) {
                bit_two.changePage(2);
            }
            if (scrolled > 3500 && scrolled < 4500) {
                bit_two.changePage(3);
            }
            if (scrolled > 4500) {
                bit_two.changePage(4);
            }
        },
        init : function() {

            $('.graphic').click(function(){
                $('.graphic').addClass('animate');
            });

            setInterval(function(){
                bit_two.openingtext();
            }, 400);

            $(window).bind('scroll',function(e){
                var scrolled = $(window).scrollTop();
                bit_two.scrollWatch(scrolled);
            });

            bit_two.addListeners();
        }
    }

bit_two.init();

});
