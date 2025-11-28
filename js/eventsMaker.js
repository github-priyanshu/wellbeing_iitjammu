var eventData = [
    {
        "title": "Tug of War Event",
        "img": "https://scontent.cdninstagram.com/v/t51.82787-15/573438372_17948976258025727_6544065861435823063_n.webp?_nc_cat=106&ig_cache_key=Mzc2MDA5NzE0NDkzMTAyODMyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODF4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wy23CCsVXngQ7kNvwEcjyWJ&_nc_oc=AdnULNTnAEqs4XUmiYwQX1kZfMXF-5IHLc8uqWFJf8LbQce-2a87QBKgcc5gM9VHlqc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9JTgdUnwnJ5076ElXCWwVQ&oh=00_AfiuYX_7KTYfhaR8l3IsvmA0dN1ulrqjHSFliH_LNhhOFw&oe=692F5401",
        "desc": `
We’re excited to announce that the Tug of War event will be held on 15th November! 🎉

Gather your strength, form your teams, and get ready to pull your way to victory! 🔥
💥 Date: 15th November
📍 Venue and Time will be shared soon .

Don’t miss out on the fun, team spirit, and the thrill of competition!
Let’s see which side has the real power! 💪⚡`
    },
    {
        "title": "Holika Dahan",
        "img": "https://scontent.cdninstagram.com/v/t51.82787-15/564612551_17946816054025727_4468185583623907676_n.webp?_nc_cat=108&ig_cache_key=Mzc0NDEyNjQyNTk5NDg0ODU3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=oKVOhdf0kjgQ7kNvwGzk5Px&_nc_oc=AdlH89wPibSSRSUYDTAo7wHfCUSVBHqRawkq1YTCKVeJf-Y2a6IfbkxzIiI0A97kyjU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=hFpu6GIwYwiiuAZ902f7VQ&oh=00_Afh67ArOHPvJ3d3Nnb-L_hxkOGhmY2K6xs-LREeb5myXVw&oe=692F5E3D",
        "desc": `
        That night, the flames burned bright with memories and meaning. 🔥
The Wellbeing Club proudly hosted a Bonfire Night celebrating both Convocation 2025 and World Mental Health Day - a night to honor journeys, friendships, and the strength of togetherness. 💚

As we watched the fire glow, we were reminded that every ending carries a spark of a new beginning - and that when we connect, we heal, we grow, and we glow. 🌙

To our graduating batch - thank you for the light you brought to this campus.
To everyone who joined - may we keep glowing, together. ✨`
    },
    {
        "title": "Bonfire Night for Graduates",
        "img": "https://scontent.cdninstagram.com/v/t51.82787-15/563298456_17946203574025727_1667028705107205705_n.webp?_nc_cat=102&ig_cache_key=MzczOTY5Mjk1NTQyMzk4MDUyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=BZBADRKEDZUQ7kNvwENjNf3&_nc_oc=Adlo1XiYsbWqLkyhHRasNaOHMEh-WSRVbm_S1Qsuw0aZbP7KI0TiAJTrQa8eX5BrN8E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=hFpu6GIwYwiiuAZ902f7VQ&oh=00_AfiI9-9AjdOSwxABmNC9pORkLppyDd-Pm8es80F-xUPC8w&oe=692F6DCE",
        "desc": `
A special bonfire evening dedicated to our graduating batch, to celebrate your journey, your laughter, and the light you’ve left behind.

As the embers fade and laughter lingers in the air, let’s gather once more under the open sky - to relive the warmth, the memories, and the glow that never truly fades.

📅 Date: 10th October
📍 Venue: Near bus stop , opposite egret hostel
🕒 Time: 10pm onwards

Let’s shine - until we glow again.🔥
- Team Wellness and Team Malang`
    },

]
var eventxx = "";
for (val of eventData) {
    eventxx += `<div class="longScrollBox">
            <img src="${val.img}" alt="">
            <div class="title">${val.title}</div>
            <p class="desc">${val.desc.replaceAll("\n","<br>")}</p>
          </div> `
}
var eventHTML = `

  <link rel="stylesheet" href="css/longScroll.css">
  <div class="gencont flex c">

    <h2>Events</h2>
    <div class="longScrollParent w100p">
      <div class="longScrollPanel">
        <div class="longScrollIn flex">

${eventxx}

        </div>
      </div>
    </div>
  </div>

`

document.body.insertAdjacentHTML("beforeend", eventHTML);