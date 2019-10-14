var task =  false;
$(document).ready(function () {
    $("#bt2").click(function () {
        $("<div/>").attr("class","container").appendTo("body");
    });
    $("#bt1").click(function () {
        if(task === false){
            $(".container").show();
            task = true;
        };


    });
    });

