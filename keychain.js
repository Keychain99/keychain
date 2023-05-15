const modal = document.getElementById('modal');
const modalActivate = document.getElementById('modal__activate')
const closeBtn = document.getElementById('close')

const modalActive = () => {
    modal.style.display = 'block'
}

// const closeWindow = () => {
//     modal.style.display = 'none'
// }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// closeBtn.addEventListener('click',closeWindow)
modalActivate.addEventListener('click',modalActive)