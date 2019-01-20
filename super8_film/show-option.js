(function() {

	var form = document.getElementById('how-heard');
	var options = form.elements.heard;
	var other = document.getElementById('other');
	var otherText = document.getElementById('other-text');
	otherText.className = 'hide';

	for (i = 0; i < options.length; i++) {
		addEvent(options[i], 'click', radioChanged);
	}

	function radioChanged() {
		hide = other.checked ? '' : 'hide';

		otherText.className = hide;
		if (hide) {
			otherText.value = '';
		}
	}

} ());