conts menuToggle = document.querySelector('.menu-toggle input');
conts container = document.querySelector('.container ul');

menuToggle.addEventListener('click', function(){
    container.classlist.toggle('slide');
});