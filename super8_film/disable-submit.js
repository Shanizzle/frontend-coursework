(function() {

	var form = document.getElementById('newPwd');
	var password = document.getElementById('pwd');
	var submit = document.getElementById('submit');

	var submitted = false;

	submit.disabled = true;
	submit.className = 'disabled'; //css style

	addEvent(password, 'input', function(e) {
		var target = e.target || e.srcElement;
		submit.disabled = submitted || !target.value;
		submit.className = (!target.value || submitted ) ? 'disabled' : 'enabled';
	});

	addEvent(form, 'submit', function() {
		if (submitted.disabled || submitted) {
			e.preventDefault();
			return;
		}

		submit.disabled = false;
		submitted = true;
		submit.className = 'disabled';
	});
} ());