$(document).ready(function(){

    var bit_two = {
        counter: 0,
        openingtext : function() {
            
        },
        init : function() {

            $('.graphic').click(function(){
                $('.graphic').addClass('animate');
            });

            setInterval(function(){
                bit_two.openingtext()
            }, 400);
        }
    }

bit_two.init();

});
