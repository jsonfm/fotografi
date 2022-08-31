const toggleBtn = document.querySelector('#toggle');
const toggleIcon = document.querySelector('#toggle-icon');
const navigation = document.querySelector('#navigation');

const toggleMenu = () => {
    if (toggleIcon.classList.contains('uil-bars')){
        toggleIcon.classList.remove('uil-bars');
        toggleIcon.classList.add('uil-times')
    } else {
        toggleIcon.classList.remove('uil-times');
        toggleIcon.classList.add('uil-bars');
    }
    navigation.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleMenu);