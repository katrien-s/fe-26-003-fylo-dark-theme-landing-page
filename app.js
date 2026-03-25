const form = document.querySelector('.signup form');
const input = document.getElementById('signup');
const error = document.getElementById('signup-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
	if (input.value.trim() === '' || !emailRegex.test(input.value.trim())) {
		showError('Please enter a valid email address.');
		return false;
	}
	clearError();
	return true;
}

function showError(message) {
	error.textContent = message;
	input.setAttribute('aria-invalid', 'true');
}

function clearError() {
	error.textContent = '';
	input.setAttribute('aria-invalid', 'false');
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validate()) {
		input.value = '';
	}
});

input.addEventListener('blur', () => {
	if (input.value.trim() !== '') validate();
});

input.addEventListener('input', () => {
	if (input.getAttribute('aria-invalid') === 'true') validate();
});
