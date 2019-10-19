

   function createTask(){
       var taskName = $("#myTask").val();
       $("body").append("<div>" + taskName + "</div>");

   };

    function Remove() {
        $(".containerWithTask").remove();
    };
   function revisedRandId() {
       return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
   }
