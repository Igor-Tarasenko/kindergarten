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
$(window).scroll(function () {
    var heightBlocks = $("#orange").outerHeight() + $("footer").outerHeight();
    console.log(heightBlocks);
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - heightBlocks) {
        alert("Долистал до конца");
    }
});