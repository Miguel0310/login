var checkbox = document.getElementById('checkbox');
var passInput = document.getElementById('passinput');
const validationContainer = document.getElementById('validationContainer');
const validationModal = document.getElementById('validationModal');
//const validationList = document.getElementById('validationList');

const validationRules = [
    /^.{8,}$/,
    /[A-Z]/,
    /[a-z]/,
    /\d/
];

passInput.addEventListener('input', function () {
    const password = passInput.value;
    const validations = validationRules.map(rule => rule.test(password));

    const validationHTML = `
        <div class="valid ${validations[0] ? 'valid' : 'invalid'}">Al menos 8 caracteres</div>
        <div class="valid ${validations[1] ? 'valid' : 'invalid'}">Al menos una letra mayúscula</div>
        <div class="valid ${validations[2] ? 'valid' : 'invalid'}">Al menos una letra minúscula</div>
        <div class="valid ${validations[3] ? 'valid' : 'invalid'}">Al menos un número</div>
    `;

    validationContainer.innerHTML = validationHTML;
    validationContainer.style.display = 'block';
    

    const allValid = validations.every(valid => valid);

    if(allValid){
        console.log("Todas são validas");
    }
});



if (checkbox && passInput) {
  checkbox.onchange = function() {
    if (this.checked) {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  };
}



