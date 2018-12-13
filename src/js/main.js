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
    var selectArray = {};
    $('.first-select-block-js .jq-selectbox__dropdown').click(function (e) {
        e.preventDefault();
        var value = $('.first-select-block-js select').val();
        selectArray.select1 = value;
    });
    $('.second-select-block-js .jq-selectbox__dropdown').click(function (e) {
        e.preventDefault();
        var value2 = $('.second-select-block-js select').val();
        selectArray.select2 = value2;
    });
    $('.third-select-block-js .jq-selectbox__dropdown').click(function (e) {
        e.preventDefault();
        var value3 = $('.third-select-block-js select').val();
        selectArray.select3 = value3;
        var ajaksLine = $.param(selectArray);
        console.log(ajaksLine);
    });
    $('.specifications').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '5px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.specifications').css('border-top', '5px solid #ff6e0b').find('button').css({'borderTopLeftRadius' : '10px'});
    });
    $('.schedule').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '5px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.schedule').css('border-top', '5px solid #0090c4').find('button').css({'borderTopLeftRadius' : '10px'});
    });
    $('.reviews').click(function () {
        $('.specifications, .schedule, .reviews').css({'borderTop' : '5px solid transparent'}).find('button').css({'borderTopLeftRadius' : '15px'});
        $('.reviews').css('border-top', '5px solid #01c0bb').find('button').css({'borderTopLeftRadius' : '10px'});
    });
});
var isEvent = false;
$(window).on('scroll', function () {
    var heightBlocks = $("#orange").outerHeight() + $("footer").outerHeight();
    console.log(heightBlocks);
    if (($(window).scrollTop() >= $(document).height() - $(window).height() - heightBlocks) && !isEvent) {
        filter2(n);
        n = n +3;
        isEvent = true;
        setTimeout( function() {
            isEvent = false;
        }, 1000);
    }
});
