$(function(){
    // NAV
    $('.nav>li').mouseenter(function(){
        $(this).children('.subnav').stop(true).slideDown(150)
    }).mouseleave(function(){
        $(this).children('.subnav').stop(true).slideUp(150)
    })

    // SLIDE
    setInterval(function(){
        $('.slides').animate({'margin-left':'-100%'}, function(){
            $('.slide:first').appendTo('.slides')
            $('.slides').css({'margin-left':'0%'})
        })
    }, 3000)

    // TABS
    $('.gallery>a>h3').click(function(){
        $(this).addClass('active')
        $('.notice>a>h3').removeClass('active')
        $('.notice>ul').stop(true).fadeOut(200)
        $('.gallery>ul').stop(true).fadeIn(200)
    })
    $('.notice>a>h3').click(function(){
        $(this).addClass('active')
        $('.gallery>a>h3').removeClass('active')
        $('.gallery>ul').stop(true).fadeOut(200)
        $('.notice>ul').stop(true).fadeIn(200)
    })

    // POPUP
    $('.notice>ul>li').click(function(){
        $('.popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('.popup').stop(true).fadeOut(200)
    })
})