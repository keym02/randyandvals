document.addEventListener('DOMContentLoaded', () => {
    
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            sidebarLinks.forEach(item => item.parentElement.classList.remove('active'));
            
            this.parentElement.classList.add('active');
        });
    });

    
    const tabButtons = document.querySelectorAll('.tabs .tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');

            
            console.log(`Tab clicked: ${this.textContent}`);
        });
    });

    
    const navIcons = document.querySelectorAll('.nav-icons .icon-button');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            
            if (this.querySelector('.fa-bell')) {
                alert('Notifications clicked!');
                
            } else if (this.querySelector('.fa-search')) {
                alert('Search clicked!');
                
            } else if (this.querySelector('.fa-bars')) {
                alert('Menu clicked!');
                
            }
        });
    });
});







