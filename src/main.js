import "./style.css";
// import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
   <nav class="navbar">
      <div class="navbar-brand">
        <a>Wild Voice</a>
      </div>
      <ul class="navbar-links">
        <li><a href="#">Support</a></li>
        <li><a href="#">Species</a></li>
        <li><a href="#">About</a></li>
        <li><a id="login" href="#">Login</a></li>
      </ul>
    </nav>

    <!-- Landing Section -->
    <div class="container">
      <div class="sideText">
        <h1>
          Forest Ranger: <br />
          Endangered Species of Indonesia
        </h1>
        <p>Suara alam liar: spesies darat yang terancam punah</p>

        <div class="button-explore">
          <div class="explore">Explore</div>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>

    <div>
    <img src="/wave.svg"/>
    </div>
`;

// setupCounter(document.querySelector("#counter"));
