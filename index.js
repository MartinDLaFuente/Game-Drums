// function rolita() {
//     var rola = new Audio('sounds/cool.mp3');
//     rola.play();
// }

for (let i = 0; i <= 6; i++) {

    document.querySelectorAll('button')[i].addEventListener('click', function() {
        // this.style.color = 'blue';

        var sound_type = this.innerHTML;

        main(sound_type);
        animacion(sound_type);

    });
    
}


document.addEventListener('keydown', function(event) {
    alert('A key was pressed');

    main(event.key);
    animacion(event.key);
  

});


function main(tecla) {
    
    switch (tecla) {
        case "w":

        var rola1 = new Audio('sounds/tom-1.mp3');
        rola1.play();
            
            break;

            case "a":

            var rola_a1 = new Audio('sounds/tom-2.mp3');
            rola_a1.play();
                
                break;

                case "s":

                var rola_s1 = new Audio('sounds/tom-3.mp3');
                rola_s1.play();
                    
                    break;

                    case "d":

                    var rola_d1 = new Audio('sounds/tom-4.mp3');
                    rola_d1.play();
                        
                        break;
                        

                        case "j":

                        var rola_j1 = new Audio('sounds/snare.mp3');
                        rola_j1.play();
                            
                            break;

                            case "k":

                            var rola_k1 = new Audio('sounds/kick-bass.mp3');
                            rola_k1.play();
                                
                                break;

                                case "l":

                                var rola_l1 = new Audio('sounds/crash.mp3');
                                rola_l1.play();
                                    
                                    break;
                        

    
        default:

    }

}

function animacion(ehh) {

    document.querySelector('.' + ehh).classList.add('pressed');

    setTimeout(function() {
        document.querySelector('.' + ehh).classList.remove('pressed');
    
    } , 100);
    
}


// ESTO ES JQUERY

// $('button.w').click(function() {
//     $('button.w').css('color', 'red');
//     $('h1').css('color', 'orange');

// })

// $('input').keydown(function(objeto) {
//     console.log(objeto.key);
// })

// $(document).on('mouseover', function(objeto) {
//     $('h1').css('color', 'white');
// })


// $('h1').before('<button>HOLA</button>');
// $('h1').after('<button>HOLA</button>');
// $('h1').prepend('<button>HOLA</button>');
// $('h1').append('<button>HOLA</button>');

// $('button').click(function() {
//     $('h1').toggle();
//     $('h1').fadeToggle();
//     $('h1').slideToggle();
    // $('h1').animate({opacity: 0.5});
    // $('h1').slideUp().slideDown().animate({opacity: 0.5});

// })
