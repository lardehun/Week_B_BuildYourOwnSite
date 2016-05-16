 validateContactData(){
	var nameValue = document.getElementById("name").value;
	var mailValue = document.getElementById("mail").value;
	var commentValue = document.getElementById("comment").value;
	
	if(nameValue.length < 3 && nameValue.length > 30 && nameValue.indexOf(" ") == -1){
		alert( "Name invalid!" );
        document.contact.name.focus();
        return false;
	}
	
	if(!mailValue.endsWith('.hu') && !mailValue.endsWith('.com')){
		alert( "Email invalid!" );
        document.contact.mail.focus();
        return false;
	}
	
	if(commentValue.length < 20 && commentValue > 500){
		alert( "Comment invalid!" );
        document.contact.comment.focus();
        return false;
	}
	return( true );
 }
 
 sendMessage(){
	var nameValue = document.getElementById("name").value;
	var mailValue = document.getElementById("mail").value;
	var commentValue = document.getElementById("comment").value;
	
	alert( "{0}{1}{2}", nameValue,mailValue,commentValue );
	alert( "Your Message was sent" );
 }