function tablet () {
    return window.matchMedia('(max-width: 991px)').matches;
}
$(document).ready(function() {
    $('select').styler();
    if (tablet()) {
        $('.arrow-block').click(function () {
            $('.hidden-block').show(300);
        });
        $(document).mouseup(function (e) {
            var div = $(".hidden-block");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide();
            }
        });
    }
    $('.specifications').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '14px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.specifications').css('border-top', '14px solid #fe6e1f').find('button').css({'borderTopLeftRadius' : '0'});
    });
    $('.schedule').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '14px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.schedule').css('border-top', '14px solid #438fc1').find('button').css({'borderTopLeftRadius' : '0'});
    });
    $('.reviews').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '14px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.reviews').css('border-top', '14px solid #66bfba').find('button').css({'borderTopLeftRadius' : '0'});
    });
});