(function () {

	if ('placeholder' in document.createElement('input')) {
		return;
	}

	var length = document.forms.length;

	for (var i = 0, i < length; i++) {
		showPlaceholder(document.forms[i].elements);
	}

	function showPlaceholder(elements) {
		for (i = 0, l = elements.length; i < l; i++) {
			var el = elements[i];
			if (!e.placeholder) {
				continie;
			}
			el.style.color = '#666';
			el.value = el.placeholder;

			addEvent(el, 'focus', function() {
				if (this.value === this.placeholder) {
					this.value = '';
					this.style.color = '#000'
				}
			});

			addEvent(el, 'blur', function() {
				if (this.value === '') {
					this.value = this.placeholder;
					this.style.color = '#666';
				}
			});
		}
	}



} ());