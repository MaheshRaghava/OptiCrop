document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('input[type="number"]');
            let hasError = false;

            inputs.forEach(input => {
                if (input.value.trim() === '' || isNaN(input.value)) {
                    hasError = true;
                    input.style.borderColor = '#c62828';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (hasError) {
                e.preventDefault();
                alert('Please fill in all fields with valid numbers.');
            }
        });
    }
});