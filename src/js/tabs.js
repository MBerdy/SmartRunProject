window.addEventListener('DOMContentLoaded', function() {
    let info = document.querySelector('.catalog__tabs');
    let tab = document.querySelectorAll('.catalog__tab');
    let tabContent = document.querySelectorAll('.catalog__content');

        function hideTabContent(a) {
            for (let i = a; i<tabContent.length; i++ ) {
                tabContent[i].classList.remove('catalog__content_active');
                tab[i].classList.remove('catalog__tab_active');     
            }
        };

        function showTabContent(b) {
            tabContent[b].classList.add('catalog__content_active'); 
            tab[b].classList.add('catalog__tab_active');
        };

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('catalog__tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if(target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);                        
                        break;
                    }
                }
            }
        });
    
  });