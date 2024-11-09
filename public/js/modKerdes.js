let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();

    let id = document.querySelector('#rejtett').value;
    let targy = document.querySelector('#targy').value;
    let tipus = document.querySelector('#tipus').value;
    let kerdes = document.querySelector('#kerdes').value;
    let valaszok = document.querySelector('#valaszok').value;
    let joValaszok = document.querySelector('#jovalaszok').value;
    let kep = document.querySelector('#kep').value;

    console.log(id, targy, tipus, kerdes, valaszok, joValaszok, kep);

    const response = await fetch('/kerdes/modosit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
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
