$(document).ready(function(){

    var bit_two = {
        counter: 0,
        graphicAnim: true,
        changeTrigger: false,

        openingtext : function() {
            if(bit_two.counter < 6) {
                $('.herotext li').eq(bit_two.counter).addClass('active');
                bit_two.counter++;
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
            if (scrolled > 1200) {
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
