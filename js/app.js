$('.zombie').on({
    'mouseenter': e =>{
    $(e.currentTarget).addClass('animation_paused')},

    'mouseleave': e =>{
    $(e.currentTarget).removeClass('animation_paused')}
})