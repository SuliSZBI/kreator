async function torles(id) {
    const igenNem = window.confirm('Tényleg törölni akarod a kérdést!');
    if (igenNem) {
        const response = await fetch(`/kerdes/torol/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.replace('/kerdesek');
        }
    }
}
