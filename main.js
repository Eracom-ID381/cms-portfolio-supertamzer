$(document).ready(function () {
    var cH = $('#crosshair-h'), cV = $('#crosshair-v');

    $(this).on('mousemove touchmove', function (e) {
        var x = e.pageX - 1;
        var y = e.pageY - 1;
        cH.css('top', e.pageY);
        cV.css('left', e.pageX);

        $('#mousepos').css({
            top: e.pageY + 'px',
            left: e.pageX + 'px'
        }, 800);
        $('#mousepos').text("X: " + x + "px, Y: " + y + "px");
        e.stopPropagation();
    });

    $('div.button-first > a').click(function(){
        $(".button-second > a").removeClass("selected");
        $(".button-first > a").removeClass("selected");
        $(this).addClass("selected");
        $('div.button-second').css('visibility', 'hidden');
        $('div.button-third').css('visibility', 'hidden');
        projects = $('div.btn.button-second > a')
        selected = this.id
        $('.button-second').css('visibility', 'visible')
        for(var i = 0; i < projects.length; i++){
            projects[i].style.display = "none"
            if (projects[i].className.includes(selected)){
                projects[i].style.display = "block"
            }
        }
    })

    $('div.button-second > a').click(function () {
        $(".button-second > a").removeClass("selected");
        if (this.text == "CONTENT INCOMGING") {
            return;
        }
        $(this).addClass("selected");
        selected = this.id
        projects = $('div.btn.button-third > a')
        $('.button-third').css('visibility', 'visible')
        for (var i = 0; i < projects.length; i++) {
            projects[i].style.display = "none"
            if (projects[i].className.includes(selected)) {
                projects[i].style.display = "block"
            }
        }
    })

    $('div.button-third > a').click(function () {
        $(".button-third > a").removeClass("selected");
        $(this).addClass("selected");
    })
});

function loadIframe(iframeName, url) {
    $('.project-frame').removeClass("hide");
    var $iframe = $('#' + iframeName);

    if ($iframe.length) {
        $iframe.attr('src', url);
        return false;
    }
    return true;
}
