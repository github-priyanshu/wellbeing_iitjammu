var menuData = {
  "Home": ["home","index.html"],
  "About Us": ["info_i","aboutus.html"],
  "Events": ["timeline","events.html"],
  "Council": ["productivity","council.html"],
  "Support": ["support_agent","support.html"],
  // "Testimonials": ["3p","#testimonials"],
  "FAQ's": ["contact_support","index.html#faq"],
  "Team": ["group","team.html"],
}
var menuxx = "";
for (val in menuData) {
  menuxx += `
      <div class="menu">
        <p class="flex"><a href="${menuData[val][1]}"> <span class="material-symbols-outlined">${menuData[val][0]}</span> <b>${val}</b></a></p>
      </div>
    `
}
var menuHtml = `

    <style>
    .menuPan {
      width: 100%;

      & .menuBox {
        max-width: 1200px;
        padding: 10px 20px;
        & .menu {
          display: inline-block;
          margin: 2px;
          padding: 5px 10px;
          cursor: pointer;

          & p a{
            text-decoration: none;
          }

          & p span{
            margin-right: 5px;
            font-size: 1.5em;
            top: 5px;
          }
        }


      }
    }
  </style>

  <div class="menuPan flex">
    <div class="menuBox">
${menuxx}
    </div>
  </div>

`

document.body.insertAdjacentHTML("beforeend", menuHtml);