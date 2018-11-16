if (window.screen.width <= 320 || window.screen.height <= 640 ) {
    $(".drag").hide()
    $(".box").hide()
}
// 喜欢
$(".one-like").click(function(){
    $(".cover-top").animate({height: "50%", top: "0"}, 1000, function(){
        $(".oneScene").hide()
        $(".twoScene").show(function(){
            initAnimate()
        })
    })
    $(".cover-bottom").animate({height: "50%", bottom: "0"}, 1000, function() {
        $(".cover-top").animate({height: "0", top: "0"}, 2000)
        $(".cover-bottom").animate({height: "0", bottom: "0"}, 2000) 
    })
})
// 不喜欢
$(".one-dislike").click(function(){
    $(".cover-top").animate({height: "50%", top: "0"}, 1000, function(){
        $(".oneScene").css({visibility: "hidden", width: "0", height: "0"})
        $(".threeScene").show(function(){
            var time = 10
            countDown(time)
        })
    })
    $(".cover-bottom").animate({height: "50%", bottom: "0"}, 1000, function() {
        $(".cover-top").animate({height: "0", top: "0"}, 2000)
        $(".cover-bottom").animate({height: "0", bottom: "0"}, 2000) 
    })
})

function countDown(time) {
    var timer
    timer = setInterval(function(){
        time--
        if (time <= 0) {
            clearInterval(timer)
            if (time == 0) {
                $(".cover-top").animate({height: "50%", top: "0"}, 1000, function(){
                    $(".threeScene").hide()
                    $(".oneScene").css({visibility: "visible", width: "100%", height: "100%"})
                })
                $(".cover-bottom").animate({height: "50%", bottom: "0"}, 1000, function() {
                    $(".cover-top").animate({height: "0", top: "0"}, 2000)
                    $(".cover-bottom").animate({height: "0", bottom: "0"}, 2000) 
                })
            }
        } 
        $(".countDown").text(`${time}`)
    }, 1000)
}

var flag = true
$(".drag").click(function () {
    if (flag == true) {
        $(".drag").animate({ right: "336px" }, 1000, function () {
            // $(".drag").text("》")
            flag = false
        })
        $("iframe").animate({ right: "0" }, 1000)
    } else {
        $(".drag").animate({ right: "10px" }, 1000, function () {
            // $(".drag").text("《")
            flag = true
        })
        $("iframe").animate({ right: "-336px" }, 1000) 
    }

})
