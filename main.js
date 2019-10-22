

   function createTask() {
       var taskName = $("#myTask").val();
       $("body").append("<div id='containerWithTask'>" + taskName + "<button id='btnDel' type='button'/>" +"</div>");
       var i=0;
       $('div').each(function(){
           i++;
           var newID='#myTask'+i;
           $(this).attr('id',newID);
           $(this).val(i);
       });
   };
   $("#btnDel").onclick(function () {
       $("#myTask").remove();
   });