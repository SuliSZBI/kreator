let menu = document.querySelector('#menu');
let szamlalo = 0;

menu.addEventListener('click', () => {
    let lik = document.querySelectorAll('nav li');
    let nav = document.querySelector('nav');

    if (szamlalo % 2 === 0) {
        nav.style.height = '426px';
        for (let i = 1; i < lik.length; i++) {
            lik[i].style.display = 'block';
        }

        szamlalo++;
    } else {
        nav.style.height = '84px';
        for (let i = 1; i < lik.length; i++) {
            lik[i].style.display = 'none';
        }

        szamlalo++;
    }
});
