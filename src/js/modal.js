window.addEventListener('DOMContentLoaded', function() {
    let buttonConsultation = document.querySelectorAll('[data-modal = consultation]'),
        buttonOrder = document.querySelectorAll('.button_mini'),
        close = document.querySelectorAll('.modal__close'),
        consultation = document.getElementById('consultation'),
        order = document.getElementById('order'),
        modalDescr = document.querySelector('#order>.modal__descr'),
        catalogSubtitle = document.querySelectorAll('.catalog-item__subtitle'),
        overlay = document.querySelector('.overlay');
        

    buttonConsultation.forEach( item => {
        item.addEventListener('click', () => {
            overlay.style.display ="block";
            consultation.style.display ="block";
        })
    });

    close.forEach (item => {
        item.addEventListener('click', () => {
            overlay.style.display ="none";
        })
    });

    buttonOrder.forEach( (item, index) => {
        item.addEventListener('click', () => {
            modalDescr.innerText = catalogSubtitle[index].textContent;
            overlay.style.display ="block";
            order.style.display ="block";
        })     
    })
  
  });