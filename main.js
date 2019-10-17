

   function createTask(){
       var taskName = $("#myTask").val();
       $(".containerWithTask").append("<div>" + taskName + "</div>");
   };

    function Remove() {
        $(".containerWithTask").remove();
    };