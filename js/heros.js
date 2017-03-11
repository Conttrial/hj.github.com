var video =$("header video");
var svg =$("svg");
$(function(){
    if($(window).width()>=992){
        video.first().trigger("play");
        setInterval("showcase()",40);
    }


    video.on("play",function(){
        index=$(this).index();
        $(".showcase a").eq(index).addClass("active").siblings("a").removeClass("active");
        $(".showcase h3").eq(index).addClass("active").siblings("h3").removeClass("active");
        svg[index].setAttribute("class","active");
    });


    video.on("ended",function(){
        $(this).removeClass("active");
        var index=$(this).index();
        svg[index].removeAttribute("class","active");
        $(this).load();
        if(index === video.length-1){
            video.eq(0).addClass("active").trigger("play");
        }else{
            $(this).next().addClass("active").trigger("play");
        }
    });


    $(".showcase a").on("click", function () {
        video.filter(".active").load();
        svg[index].removeAttribute("class","active");
        video.eq($(this).index("a")).addClass("active").trigger("play").siblings("video").removeClass("active");
    })


    $(window).resize(function () {
        if ($(window).width() <= 992) {
            video.trigger("pause");
        }
        if($(window).width()>992){
            $("header video.active").trigger("play");
            setInterval("showcase()",40);
        }
    });




    $(".content-title div").on("click",function(){
        $(this).addClass("active").siblings("div").removeClass("active");
        if($(this).index() ===0){
            $(".details-bg video").show();
            $(".details-bg img").hide();
        }else{
            $(".details-bg img").show();
            $(".details-bg video").hide();
        }
        $(".content").eq($(this).index()).addClass("active").siblings(".content").removeClass("active");
    })

});

function showcase(){
    var percent = video[index].currentTime/video[index].duration;
    perimeter = Math.PI * 2 * 48;
    $("circle")[index].setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
}












