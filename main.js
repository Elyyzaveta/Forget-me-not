var i = 0;

function createTask() {
    var taskName = $("#myTask").val();
    $("body").append("<div class='tsk' id=" + i + " onclick='remove(this.id)'>" + taskName + "</div>");
    i++;
};

function remove(id) {
	console.log(id);	
}

