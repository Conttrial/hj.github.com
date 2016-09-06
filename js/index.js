/**
 * Created by hj on 2016/8/18.
 */


$(function(){
    $(".nav li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".hero").removeClass("show");
        if( $(this).index() === 1){
            $(".offense").addClass("show");
        }else if( $(this).index() === 2){
            $(".defense").addClass("show");
        }else if( $(this).index() === 3){
            $(".tank").addClass("show");
        }else if( $(this).index() === 4) {
            $(".support").addClass("show");
        }
        $(".support").insertBefore($(".hero").first());
        $(".tank").insertBefore($(".hero").first());
        $(".defense").insertBefore($(".hero").first());
        $(".offense").insertBefore($(".hero").first());
        $(".show").insertBefore($(".hero").first());
    });

});

