// Author: Chris Witko @ 2025
// Website: https://chriswitko.com
// Credits: https://codepen.io/zerospree/pen/Vwvqbw @ Codrin Pavel

class MadeWithLove extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Styles
    const style = document.createElement("style");
    style.textContent = `
      :host {
        --size: 15px;
        --cols: 7;
        --rows: 7;
        --color1: #8e1a19;
        --color2: #ac0500;
        --color3: #f73f0c;
        --color4: #fa5f27;
        --color5: #740100;
        --color6: #f84010;

        display: block;
        position: relative;
        width: calc(var(--cols) * var(--size));
        height: calc(var(--rows) * var(--size));
      }

      .heart {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--cols) + var(--size));
        height: calc(var(--rows) + var(--size));
        margin: calc(var(--rows) / -2 * var(--size)) 0 0 calc(var(--cols) / -2 * var(--size));
      }

      .heart:hover::before {
        animation-play-state: paused;
        border-radius: 100%;
        opacity: 0;
      }

      .heart::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: var(--size);
        height: var(--size);
        margin: 0;
        box-shadow: 
          calc(2 * var(--size)) calc(1 * var(--size)) var(--color1),
          calc(3 * var(--size)) calc(1 * var(--size)) var(--color2),
          calc(5 * var(--size)) calc(1 * var(--size)) var(--color3),
          calc(6 * var(--size)) calc(1 * var(--size)) var(--color4),
          calc(1 * var(--size)) calc(2 * var(--size)) var(--color5),
          calc(2 * var(--size)) calc(2 * var(--size)) var(--color6),
          calc(3 * var(--size)) calc(2 * var(--size)) var(--color1),
          calc(4 * var(--size)) calc(2 * var(--size)) var(--color2),
          calc(5 * var(--size)) calc(2 * var(--size)) var(--color3),
          calc(6 * var(--size)) calc(2 * var(--size)) var(--color4),
          calc(7 * var(--size)) calc(2 * var(--size)) var(--color5),
          calc(1 * var(--size)) calc(3 * var(--size)) var(--color6),
          calc(2 * var(--size)) calc(3 * var(--size)) var(--color1),
          calc(3 * var(--size)) calc(3 * var(--size)) var(--color2),
          calc(4 * var(--size)) calc(3 * var(--size)) var(--color3),
          calc(5 * var(--size)) calc(3 * var(--size)) var(--color4),
          calc(6 * var(--size)) calc(3 * var(--size)) var(--color5),
          calc(7 * var(--size)) calc(3 * var(--size)) var(--color6),
          calc(1 * var(--size)) calc(4 * var(--size)) var(--color1),
          calc(2 * var(--size)) calc(4 * var(--size)) var(--color2),
          calc(3 * var(--size)) calc(4 * var(--size)) var(--color3),
          calc(4 * var(--size)) calc(4 * var(--size)) var(--color4),
          calc(5 * var(--size)) calc(4 * var(--size)) var(--color5),
          calc(6 * var(--size)) calc(4 * var(--size)) var(--color6),
          calc(7 * var(--size)) calc(4 * var(--size)) var(--color1),
          calc(2 * var(--size)) calc(5 * var(--size)) var(--color2),
          calc(3 * var(--size)) calc(5 * var(--size)) var(--color3),
          calc(4 * var(--size)) calc(5 * var(--size)) var(--color4),
          calc(5 * var(--size)) calc(5 * var(--size)) var(--color5),
          calc(6 * var(--size)) calc(5 * var(--size)) var(--color6),
          calc(3 * var(--size)) calc(6 * var(--size)) var(--color1),
          calc(4 * var(--size)) calc(6 * var(--size)) var(--color2),
          calc(5 * var(--size)) calc(6 * var(--size)) var(--color3),
          calc(4 * var(--size)) calc(7 * var(--size)) var(--color4);

        animation: pulse 1.2s steps(1) infinite;
        transition: all 400ms;
      }

      @keyframes pulse {
        50% {
          filter: blur(1.4px);
          transform: translate(-50%, -50%) scale(1.2);
        }
      }
    `;

    // Heart container
    const container = document.createElement("div");
    container.classList.add("heart");

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("made-with-love", MadeWithLove);
