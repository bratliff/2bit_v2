$(document).ready(function(){

    var bit_two = {
        counter: 0,
        openingtext : function() {
            if(bit_two.counter < 6) {
                $('.herotext li').eq(bit_two.counter).addClass('active');
                bit_two.counter++;
            }
        },
        init : function() {

            $('.graphic').click(function(){
                $('.graphic').addClass('animate');
            });

            setInterval(function(){
                bit_two.openingtext();
            }, 400);
        }
    }

bit_two.init();

});
