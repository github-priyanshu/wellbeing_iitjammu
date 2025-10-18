function makeSmallHeader(title="Change me please!"){
    document.body.insertAdjacentHTML("beforeend",`
          <style>
    .bannerPan {
      background: url("img/bannerbg.jpg");
      width: 100%;
      height: clamp(150px,25vw,25vh);
      background-attachment: fixed;
      background-size: cover;
      background-position: center 800px;

      & .banner {
        height: 100%;

        & .head {
          font-family: "Audiowide";
          font-size: clamp(2em, 4vw, 4em);
          text-align: center;
          transform: scaleY(1.2);
          background: linear-gradient(#ffffff9c, #9addfa);
          -webkit-background-clip: text;
          color: transparent;
          backdrop-filter: blur(1px);
        }
      }
    }

    .bannerPan::before {
      content: "";
      width: 100%;
      height: 67px;
      background: #000;
      position: absolute;
      background: linear-gradient(#0000, var(--lightBg2));
      bottom: 0;
    }
  </style>

  <div class="bannerPan">
    <div class="banner w100p flex">
      <div class="headBox flex">
        <div class="head">${title}</div>
      </div>
    </div>
  </div>
`)

}