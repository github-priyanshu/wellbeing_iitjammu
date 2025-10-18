var menuData = {
  "Home": "home",
  "About Us": "info_i",
  "Events": "timeline",
  "Council": "productivity",
  "Support": "support_agent",
  "Testimonials": "3p",
  "FAQ's": "contact_support",
  "Team": "group",
}
var menuxx = "";
for (val in menuData) {
  menuxx += `
      <div class="menu">
        <p class="flex"> <span class="material-symbols-outlined">${menuData[val]}</span> <b>${val}</b></p>
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

          & p span{
            margin-right: 5px;
            font-size: 1.5em;
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