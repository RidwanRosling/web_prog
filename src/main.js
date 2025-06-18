import "./style.css";
import {closeModal, openModal} from "./app.js";

document.querySelector("#app").innerHTML = `
   <nav class="navbar">
      <div class="navbar-brand">
        <a>Wild Voice</a>
      </div>
      <ul class="navbar-links">
        <li><a href="#">Support</a></li>
        <li><a href="#">Species</a></li>
        <li class="show-aboutUs"><a href="#">About us</a></li>
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

    <div class="modal hidden">
      <button class="close-aboutUs">>&times;</button>
      <h1>About Us</h1>
      <p>
        Testing 123
      </p>
    </div>

    <div class="overlay hidden"></div>
`;

// setupCounter(document.querySelector("#counter"));
