document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle-x');
    const menuClose = document.querySelector('.menu-close');
    const sidebar = document.querySelector('.sidebar-x');
    const overlay = document.querySelector('.overlay-x');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    

    const currentPath = window.location.pathname;
    
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        menuToggle.classList.add('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        
        setTimeout(() => {
            menuToggle.classList.remove('hidden');
        }, 300);
        
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    
    hasSubmenuItems.forEach(function (item) {
        const link = item.querySelector('.menu-link-x');
        
        link.addEventListener('click', function (e) {
           
            if (item.classList.contains('has-submenu')) {
                e.preventDefault();
            }
            
            const siblings = Array.from(this.parentElement.parentElement.children)
                .filter(el => el.classList.contains('has-submenu') && el !== this.parentElement);
            
            siblings.forEach(sibling => {
                sibling.classList.remove('open');
            });
            
            item.classList.toggle('open');
        });
    });
    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
    
    function btnSize() {
        const btn = document.querySelector('.menu-toggle-x');
        if (window.innerWidth < 630) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
    
    window.addEventListener('load', btnSize);
    window.addEventListener('resize', btnSize);
    

    const menuLinks = document.querySelectorAll('.menu-link-x');
    menuLinks.forEach(link => {

        const linkPath = link.getAttribute('href');
        
 
        if (linkPath === currentPath) {
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
        
        if (!link.parentElement.classList.contains('has-submenu')) {
            link.addEventListener('click', function() {
                menuLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
               
                if (window.innerWidth < 768) {
                    closeMenu(); 
                }
            });
        }
    });
});