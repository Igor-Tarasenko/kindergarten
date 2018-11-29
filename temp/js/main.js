$(document).ready(function() {
    $('select').styler();
    $('.arrow-block').click(function () {
        $('.hidden-block').show(300);
    });
    $(document).mouseup(function (e) {
        var div = $(".hidden-block");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
        }
    });
});