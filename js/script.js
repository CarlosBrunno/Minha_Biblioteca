document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  async function loadCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
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
