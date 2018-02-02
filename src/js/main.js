$(document).ready(function(){

    var bit_two = {
        textcounter: 0,
        imagecounter: 1,
        graphicAnim: true,
        developAnim: false,
        changeTrigger: false,
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
            $('.bg').addClass('hide');
            $('.bg').eq(index).removeClass('hide').addClass('show');

            switch(index) {
                case 0:

                break;
                case 1:
                    bit_two.graphicAnim ? $('.graphic, .diagonal-box').addClass('animate') : $('.graphic, .diagonal-box').addClass('show');

                    bit_two.graphicAnim = false;
                break;
                case 2:
                    bit_two.webscroll();
                    $('.development-bg').addClass('expand');
                break;
            }

        },
        scrollWatch: function(scrolled) {
            if (scrolled < 400) {
                bit_two.changePage(0);
            }
            if (scrolled > 400 && scrolled < 1200) {
                bit_two.changePage(1);
            }
            if (scrolled > 1300) {
                bit_two.changePage(2);
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
        }
    }

bit_two.init();

});
