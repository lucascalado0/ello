var voltar = document.getElementById("voltar")

voltar.addEventListener("click", function() {
    window.location.href = "./acesso.html"
})

(() => {
    'use strict'
  

    const forms = document.querySelectorAll('.needs-validation')
  

    Array.from(forms).forEach(form => {
      form.addEventListener('Acessar sistema', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()