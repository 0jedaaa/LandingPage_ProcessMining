const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')
const navItem = document.querySelectorAll('.menu-item'); 

$btnMenuOpen.addEventListener('click', function(){
 $menu.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
   })

navItem.forEach(li =>{
    li.addEventListener('click', function(){
        navItem.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});