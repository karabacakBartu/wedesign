var menu_button = document.getElementById('menu-button');

menu_button.addEventListener("click", function(e){
    var full_page_menu = document.getElementById('full-page-menu');
    var body = document.body;

    this.classList.toggle("change");

    const status = this.getAttribute('aria-expanded');

    if(status != "true"){
        full_page_menu.style.transform = 'translateX(0)';

        this.setAttribute('aria-expanded', 'true');

        body.style.overflowY = 'hidden';
        body.style.height = '100vh';
    }else{
        full_page_menu.style.transform = 'translateX(100%)';

        this.setAttribute('aria-expanded', 'false');

        body.style.overflowY = 'unset';
        body.style.height = '100%';
    }
   
})