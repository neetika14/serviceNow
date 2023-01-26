var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var header = button.getAttribute('data-bs-sponsortitle')
  
   var input = button.getAttribute('data-dops')
  var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('#chosenArea')

  modalTitle.textContent = header
  modalBodyInput.value = input

})