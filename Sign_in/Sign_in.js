document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('input[type="text"]');

    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.style.borderColor = '#71A5DE';
        });

        input.addEventListener('input', function() {
            if (input.value === '') {
                input.style.borderColor = '#62626C';
            } else {
                input.style.borderColor = '#71A5DE';
            }
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                input.style.borderColor = '#62626C';
            }
        });
    });
});
