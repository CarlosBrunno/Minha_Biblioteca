document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redireciona para a página de login
});

document.getElementById('editar-dados').addEventListener('click', function() {
    const spans = document.querySelectorAll('.dados-container span');
    spans.forEach(span => {
        const currentValue = span.innerText;
        span.innerHTML = `<input type="text" class="editavel" value="${currentValue}">`;
    });

    document.getElementById('editar-dados').style.display = 'none';
    document.getElementById('salvar-dados').style.display = 'block';
    document.getElementById('salvar-dados').classList.add('editing');
});

document.getElementById('salvar-dados').addEventListener('click', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.dados-container input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.border = '1px solid red'; 
        } else {
            input.style.border = '1px solid transparent';
        }
    });



    const emailInput = document.querySelector('#email input.editavel');
    console.log("Email", emailInput)
    if (emailInput && !validateEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.border = '1px solid red';
    }

    if (isValid) {
        inputs.forEach(input => {
            const span = input.parentElement;
            span.innerHTML = input.value;
        });

        document.getElementById('editar-dados').style.display = '';
        document.getElementById('salvar-dados').style.display = 'none';
        document.getElementById('salvar-dados').classList.remove('editing');

        alert('Dados salvos com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


