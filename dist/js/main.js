$(document).ready(function(){

    var bit_two = {
        textcounter: 0,
        imagecounter: 1,
        graphicAnim: true,
        developAnim: false,
        changeTrigger: false,
        currentpage: 'home',
        hashChange : function() {

            switch(window.location.hash) {

                case "#hero":
                    $('html, body').animate({scrollTop: $('.hero').offset().top });
                break;
                case "#ux":
                    $('html, body').animate({scrollTop: $('.ux').offset().top });
                break;
                case "#graphic":
                    $('html, body').animate({scrollTop: $('.graphic').offset().top });
                break;
                case "#development":
                    $('html, body').animate({scrollTop: $('.development').offset().top });
                break;
                case "#motion":
                    $('html, body').animate({scrollTop: $('.motion').offset().top });
                break;
                case "#contact":
                    $('html, body').animate({scrollTop: $('.contact').offset().top });
                break;
                default:
                    $('html, body').animate({scrollTop: $('.hero').offset().top });
                break;
            }
        },
        addListeners : function() {
            $('.nav li a').click(function(e){
                setTimeout(function(){
                    bit_two.hashChange();
                }, 100);
            });

            $('.projects').click(function(e){
                $('.development').removeClass('first').addClass('second');
            });

            $('.development-nav li').click(function(e){
                var index = $(this).index();

                $('.development .container .row').hide();
            })
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
                bit_two.textcounter > 5 ? $('.hero ul').addClass('border') : '';
            }
        },
        changePage: function(index) {
            $('.graphic, .diagonal-box').removeClass('show').addClass('hide');

            switch(index) {
                case 0:
                    // Hero section
                    
                    $('.hero-bg').addClass('show');
                    $('.development-bg').removeClass('show');
                break;
                case 1:
                    // UX section

                    $('.development-bg').addClass('expand show').removeClass('grey');
                break;
                case 2:
                    // Development section

                    bit_two.webscroll();

                    $('.development-bg').addClass('grey expand show').removeClass('blue');
                break;
                case 3:
                    // Graphic section

                     bit_two.graphicAnim ? $('.graphic, .diagonal-box').addClass('animate') : $('.graphic, .diagonal-box').addClass('show');

                    bit_two.graphicAnim = false;
                    
                    $('.development-bg').addClass('blue expand show').removeClass('grey gold');
                break;
                case 4:
                    // Motion section

                    $('.development-bg').addClass('gold expand show');
                    $('.development-bg').removeClass('rotate');
                break;
                case 5:
                    // Contact section

                    $('.development-bg').addClass('rotate expand show');
                break;
            }

        },
        scrollWatch: function(scrolled) {

            switch(bit_two.currentpage) {
                    case 'home':
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
                        if (scrolled > 4500 && scrolled < 5800) {
                            bit_two.changePage(4);
                        }
                        if (scrolled > 5800) {
                            bit_two.changePage(5);
                        }
                    break;
                    case 'development':
                        if (scrolled < 850) {
                            console.log('devel 1');
                        }
                        if (scrolled > 850 && scrolled < 2100) {
                            console.log('devel 2');
                        }
                        if (scrolled > 2100 && scrolled < 3500) {
                            console.log('devel 3');
                        }
                        if (scrolled > 3500 && scrolled < 4500) {
                            console.log('devel 4');
                        }
                        if (scrolled > 4500) {
                            console.log('devel 5');
                        }
                    break;
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


            if (location.href.split("/").slice(-1) == "development.html") {
                bit_two.currentpage = "development";
            } else {
                bit_two.currentpage = "home";
            }

            bit_two.addListeners();
        }
    }

bit_two.init();


});
