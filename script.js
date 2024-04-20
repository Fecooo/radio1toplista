fetch("https://api.f5api.xyz/radio1top")
.then(res => res.json())
.then(data => {
    data.tracks.forEach(track => {
        document.getElementById("content").innerHTML +=
        `
            <div class="track">
                <h2>${track.place - 1}</h2>
                <img src="${track.cover}" alt="">
                <div class="trackinfo">
                    <p>${track.artist} - ${track.title}</p>
                    <p>Lejátszva: ${track.frequency} alkalommal</p>
                </div>
            </div>
        `
    });
})