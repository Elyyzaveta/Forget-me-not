var i = 0;

function createTask() {
    var taskName = $("#myTask").val();
    $("body").append("<div class='tsk'>" + taskName + "</div>");

    $(".tsk").each(function () {
        i++;
        $(this).attr("id",);
        $(this).val(i);
    });
};

