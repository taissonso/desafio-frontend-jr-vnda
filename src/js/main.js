$('body').on("scroll", function () {
    if ($('body').scrollTop() > 100) {
        $(".container-header").addClass("colormenu");
    } else {
        $(".container-header").removeClass("colormenu");
    }
});

$('.iconmenu').click(() => {
    if (!$('.menu').hasClass('responsive')) {
        $('.menu').addClass('responsive');
        $('.container-header').addClass('openmenucontainer');
        $('.navbar').addClass('openmenu');
        $('.subnav').hide();
        $('.linklogotipo').hide();
    } else {
        closeMenu();
    }
})

$('.item').click(() => {
    closeMenu();
})

const closeMenu = () => {
    $('.menu').removeClass('responsive');
    $('.container-header').removeClass('openmenucontainer');
    $('.navbar').removeClass('openmenu');
    $('.subnav').show();
    // $('.logotipo').show();
    $('.linklogotipo').show();
    $(".container-header").css("style", "");
    $('.menu').find('ul').removeClass('activesubmenu')
}



$('.submitemail').on('click', function () {
    var email = $('#email').val();
    if (validateEmail(email)) {
        $('.erroremail').addClass('sucessemail');
        $('.erroremail').text('Email enviado com sucesso');
        setTimeout(() => {
            $('.erroremail').removeClass('sucessemail');
            $('.erroremail').css('display', 'none');
            $('subscribeform').find('input').val("");
        }, 3000);
    } else {
        $('.erroremail').css('display', 'block');
        $('.erroremail').text('* Email inválido');
    }
});


var validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}