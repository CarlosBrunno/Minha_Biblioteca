document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  async function loadCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2");
      const countries = await response.json();

      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

      countrySelect.innerHTML =
        '<option value="">Selecione seu país...</option>';

      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.cca2.toLowerCase();
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    } catch (error) {
      console.error("Erro ao carregar países:", error);
      countrySelect.innerHTML = '<option value="">Erro ao carregar</option>';
    }
  }

  loadCountries();
});

// Captura o envio do formulário e salva os dados no localStorage
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.form-signin');
  
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Impede o envio real do formulário

      const userData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        country: document.getElementById('country').value
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      alert('Dados salvos localmente!');

      // Redireciona usando caminho relativo
      window.location.href = '../tela-principal.html';
    });
  }
});