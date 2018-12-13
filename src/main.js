$(document).ready(function() {
    $('select').styler();


    var selectArray = {};
    $('.first-select-block-js .jq-selectbox__dropdown').click(function (e) {
        console.log(true);
        e.preventDefault();
        var value = $('.first-select-block-js select').val();

        selectArray.select1 = value;
        var ajaksLine = $.param(selectArray);
        filter1(ajaksLine)
    });
    $('.second-select-block-js .jq-selectbox__dropdown').click(function (e) {
        e.preventDefault();
        var value2 = $('.second-select-block-js select').val();

        selectArray.select2 = value2;
        var ajaksLine = $.param(selectArray);
        filter1(ajaksLine)
    });
    $('.third-select-block-js .jq-selectbox__dropdown').click(function (e) {
        e.preventDefault();
        var value3 = $('.third-select-block-js select').val();

        selectArray.select3 = value3;
        var ajaksLine = $.param(selectArray);
        filter1(ajaksLine)
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