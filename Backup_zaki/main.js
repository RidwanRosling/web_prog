import "./style.css";
// import {closeModal, openModal} from "./app.js";

document.querySelector("#app").innerHTML = `
   <nav class="navbar">
      <div class="navbar-brand">
        <img src="./Backup_zaki/images/Forest_Ranger.PNG" id="logo">
      </div>
      <ul class="navbar-links">
        <li><a href="#">Support</a></li>
        <li><a href="#">Species</a></li>
        <li class="show-aboutUs"><a href="#">About us</a></li>
        <li><a id="login" href="http://localhost/web_prog/public/php-login/login.php">login</a></li>
      </ul>
    </nav>

    <!-- Landing Section -->
    <div class="container">
      <div class="sideText">
        <h1>
          Forest Ranger: <br/>
          Endangered Species of Indonesia
        </h1>
        <p>Suara alam liar: spesies darat yang terancam punah</p>

        <div class="button-explore">
          <div class="explore"><a href="#next" id="info-txt">More Info</a></div>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>

    <div id="pop-up" class="modal hidden" >
      <button class="close-aboutUs">&times;</button>

      
      <h1 class="aboutUs-txt" id="aboutUs">About Us</h1>
      <p class="aboutUs-txt" id="p1">
        Forest ranger adalah platform digital yang bertujuan meningkatkan kesadaran tentang spesies langka di indonesia.
      </p>
      <p class="aboutUs-txt">
        Kami percaya setiap makhluk memiliki cerita yang layak untuk dibagikan melalui gambar. Misi kami adalah menyuarakan alam,
        mendukung pelestarian, dan menginspirasi masyarakat untuk melindungi keanekaragaman hayati demi masa depan.
      </p>
      <p class="aboutUs-txt">
        Melalui pendekatan visual dan edukatif, kami menghubungkan masyarakat dengan alam liar Indonesia dari hutan tropis hingga
        pegunungan yang menjadi rumah bagi satwa terancam punah.
        Kami berkomitmen menjadi jembatan antara manusia dan alam, serta mengajak semua orang untuk menjadi bagian dari perubahan positif dalam menjaga kehidupan liar.
      </p>
      <div class="slider">
        <div class="slide-track">
          
          <div class="slide">
            <img src="./Backup_zaki/images/badak sumatera.JPEG"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="./Backup_zaki/images/burung cenderawasih.jpg"/ class="slide-img">
          </div>
          
          <div class="slide">
            <img src="./Backup_zaki/images/harimau.jpg"/ class="slide-img">
          </div>      

          <div class="slide">
            <img src="./Backup_zaki/images/komodo.jpg"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="./Backup_zaki/images/orang utan.JPG"/ class="slide-img">
          </div>
          <div class="slide">
            <img src="./Backup_zaki/images/badak sumatera.JPEG"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="./Backup_zaki/images/burung cenderawasih.jpg"/ class="slide-img">
          </div>
          
          <div class="slide">
            <img src="./Backup_zaki/images/harimau.jpg"/ class="slide-img">
          </div>      

          <div class="slide">
            <img src="./Backup_zaki/images/komodo.jpg"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="./Backup_zaki/images/orang utan.JPG"/ class="slide-img">
          </div>

        </div>
      </div>  
    </div>

    <div class="overlay hidden"></div>

  <div class="bacthed-container" id="next">
    <div class="container-flora-fauna">
      <h1>Endangered Species</h1>
      <div class="flora-fauna">
        <span data-region="Sumatra" class="btn-filter">Sumatra</span>
        <span data-region="Kalimantan" class="btn-filter">Kalimantan</span>
        <span data-region="Jawa" class="btn-filter">Jawa</span>
        <span data-region="Sulawesi" class="btn-filter">Sulawesi</span>
        <span data-region="Papua" class="btn-filter">Papua</span>
      </div>
    </div>

    <div class="card-container"></div>
  </div>
`;

let allData = {};

fetch("img.json")
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    renderRegion("Sumatra");

    const spans = document.querySelectorAll(".btn-filter");
    spans.forEach((span) => {
      span.addEventListener("click", () => {
        console.log(span.dataset.region); // ➜ "Sumatra"
        const region = span.dataset.region;
        renderRegion(region);
      });
    });
  })
  .catch((error) => console.error("Gagal memuat JSON:", error));

function renderRegion(regionName) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  const region = allData[regionName];
  if (!region) return;

  region.fauna.forEach((fauna) => {
    container.innerHTML += `
      <img src="${fauna.image}" alt="${fauna.nama}" class="fauna-card-${fauna.id}">
    `;
  });

  region.flora.forEach((flora) => {
    container.innerHTML += `
      <img src="${flora.image}" alt="${flora.nama}" class="flora-card-${flora.id}">
    `;
  });
}


// 2. Ambil elemen yang kita butuhkan
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-aboutUs");
const btnOpenModal = document.querySelectorAll(".show-aboutUs");

// 3. Definisi fungsi
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 4. Event binding
// 4a. Tombol “About us”
btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// 4b. Tombol ✕ dan overlay background
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 4c. Tutup dengan Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// 5. Jika ingin modalnya langsung tersembunyi di awal,
//    pastikan class="hidden" sudah ada di HTML (sudah kita pakai).
//    Jadi **tidak perlu** memanggil closeModal() lagi di sini.
