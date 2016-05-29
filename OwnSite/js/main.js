(function () {
	document.getElementById("sendButton").addEventListener("click", sendMessage);
	
    function validateContactData() {
		var nameValue = document.getElementById("name").value;
		var mailValue = document.getElementById("mail").value;
		var commentValue = document.getElementById("comment").value;
		
		if(nameValue.length < 3){
			return false;
		}
		else if(!mailValue.endsWith('.com')){
			return false;
		}
		else if(comment.length < 20){
			return false;
		}
		else{
			return true;
		}
    };

    function sendMessage() { 
		if (validateContactData()) {
			alert("Your Message was sent.");
		}else {
			alert("Invalid input.")
		}
    };

})();
