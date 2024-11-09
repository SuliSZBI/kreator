let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();

    let targy = document.querySelector('#targy').value;
    let tipus = document.querySelector('#tipus').value;
    let kerdes = document.querySelector('#kerdes').value;
    let valaszok = document.querySelector('#valaszok').value;
    let joValaszok = document.querySelector('#jovalaszok').value;
    let kep = document.querySelector('#kep').value;

    console.log(targy, tipus, kerdes, valaszok, joValaszok, kep);

    const response = await fetch('/ujkerdes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            targy,
            tipus,
            kerdes,
            valaszok,
            joValaszok,
            kep,
        }),
    });

    let valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/kerdesek');
    } else {
        window.alert(valasz.msg);
    }
});
