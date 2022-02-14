/* #region Accordion Open Only One */
const details = document.querySelectorAll('details');

details.forEach(detail => {
  detail.addEventListener('click', function(e) {
    details.forEach(det => {
      if (detail.open && detail === det) {
        e.preventDefault();
      } else {
        det.open = false;
      }
    })
  })
})

/* #endregion */

/* #region Accordion Desktop Functionality */
const accordions = document.querySelectorAll('.accordion-desktop-wrapper .accordion');

accordions.forEach(acc => {
  acc.addEventListener('click', function(e){
    showPanel(e); // <- Chamada de Função Anônima pra poder usar o evento na função
  })
});

function showPanel(event) {
  const panels = document.querySelectorAll('.accordion-desktop-wrapper .panel');

  panels.forEach(panel => {
    if (event.target === panel.previousElementSibling) {
      panel.previousElementSibling.classList.add('active-button', 'active-button::after'); // <- Botão que foi clicado
      panel.classList.add('active-panel');
    } else {
      panel.previousElementSibling.classList.remove('active-button', 'active-button::after');
      panel.classList.remove('active-panel');
    }
  })
};

/* #endregion */

/* #region Carousel */
const sliders = document.querySelectorAll('.sliders-wrapper :nth-child(n)');
const slides = document.querySelectorAll('.carousel .slide');
let activeSlide = 1; // <- Rastreia qual slider está ativo pra uso posterior

sliders.forEach(slider => {
  slider.addEventListener('click', function(e) {
    showSlide(e.target);
  })
});

function showSlide(slider) {
  switch (slider.id) {
    case '1':
      if (slides[0].classList.contains(slider.id.toString())) {
        slides[0].classList.replace('hideSlide', 'showSlide');
      }
      closeOthers(slides[0]);
      activeSlide = 1;
      break;
    case '2':
      if (slides[1].classList.contains(slider.id.toString())) {
        slides[1].classList.replace('hideSlide', 'showSlide');
      }
      closeOthers(slides[1]);
      activeSlide = 2;
      break;
    case '3':
      if (slides[2].classList.contains(sliders[2].id.toString())) {
        slides[2].classList.replace('hideSlide', 'showSlide');
      }
      closeOthers(slides[2]);
      activeSlide = 3;
      break;
    case '4':
      if (slides[3].classList.contains(sliders[3].id.toString())) {
        slides[3].classList.replace('hideSlide', 'showSlide');
      }
     closeOthers(slides[3]);
     activeSlide = 4;
      break;
  }
}

// Função para fechar os slides não ativos
function closeOthers(currentSlide) {
  slides.forEach(slide => {
    if (slide != currentSlide) {
      slide.classList.replace('showSlide', 'hideSlide');
    }
  })
}

const slideControl = document.querySelectorAll('#nextSlide, #previousSlide');
// Evento de proximo e anterior usando o rastreio do slide ativo
slideControl.forEach(control => {
  control.addEventListener('click', function(e){
    if (e.target.id === 'nextSlide') {
      activeSlide += 1;
      if (activeSlide > 4) { activeSlide = 1 };
    } else {
      activeSlide -= 1;
      if (activeSlide < 1) { activeSlide = 4 };
    }

    sliders.forEach(slider => { 
// Função que exibe slide proximo ou anterior
      if (activeSlide === parseInt(slider.id)) {
        showSlide(slider);
        slider.checked = true;
      }
    })
  })
})

/* #endregion */

/* #region Modal */
// Troca a mensagem de erro quando o input for invalido
const formInputs = document.querySelectorAll('.modal .input-wrapper input');

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].oninvalid = function(e) {
    if (e.target.id === 'telefone' && !e.target.validity.valid) {
      e.target.setCustomValidity('Preenchimento inválido! Use somente números ex: (00) 00000-0000');
    } else if (!e.target.validity.valid) {
      e.target.setCustomValidity('Campo obrigatório!');
    } 
    formInputs[i].oninput = function(e) {
      e.target.setCustomValidity('');
    }
  };
  
}

// Faz o modal aparecer ou sumir quando evento ocorrer
const modal = document.querySelector('.modal');
const btnInteresse = document.querySelectorAll('.button-noFill');
const closeModal = document.querySelector('.close-button');

btnInteresse.forEach(button => {
  button.addEventListener('click', function() {
    modal.classList.replace('modal-hide', 'modal-show');
  })
})

closeModal.addEventListener('click', function() {
  modal.classList.replace('modal-show', 'modal-hide');
})
/* #endregion */