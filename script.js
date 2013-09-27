/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {
	var login_users = {
		username:"", 
		password:""
	};
	
	$('.signup-form').addClass("hidden_form");
	

	$('#nav_signup_button').click(function() 
	{
		//Switching forms	
			$('.signup-form').removeClass("hidden_form");
			$('.login-form').addClass("hidden_form");

		//Active Button Styling
			$('#nav_login_button').removeClass("active");
			$('#nav_signup_button').addClass("active");


	});

	$('#nav_login_button').click(function() 
	{
		//Switching forms
		
		$('.login-form').removeClass("hidden_form");
		$('.signup-form').addClass("hidden_form");

		//Active Button Styling
		$('#nav_signup_button').removeClass("active");
		$('#nav_login_button').addClass("active");


	});

	$('#login_button').click(function() 
	{
		login_users['username'] = $('#login-email-field').val();
		login_users['password'] = $('#login-password-field').val();
		console.log("Username:", login_users['username']);
		console.log("Password:", login_users['password']);
		var server_check = codepen.api.login(login_users);

		if (server_check['success'] == true)
		{
			alert("You successfully logged into nothing!")
		}
		else
		{
			alert(server_check['error'])
		}
		return false;

	})
	
	//put code here

});