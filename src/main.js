import "./style.css";

const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
document.head.appendChild(faLink);

// Inject HTML awal
document.querySelector("#app").innerHTML = `
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#"><img src="forestRanger.png" alt="Logo Forest Ranger"/></a>
    </div>
    <ul class="navbar-links">
      <li><a href="#flora-fauna">Species</a></li>
      <li class="show-abt"><a href="#">About us</a></li>
      <li><a id="login" href="http://localhost/web_prog/public/php-login/donate.php">Donation</a></li>
    </ul>

  </nav>

  <div class="container">
    <div class="sideText">
      <h1>Forest Ranger:<br />Endangered Species of Indonesia</h1>
    <p>Step into the wild and be a voice for the voiceless — protect Indonesia’s <br> rare animals and unique plants before they disappear forever. <br> Your awareness is the first step toward conservation.</p>
      
    </div>
  </div>

  <div id="abt-popup" class="modal-abt hidden-abt">
      <button class="close-abt">&times;</button>

      <h1 class="aboutUs-txt" id="aboutUs">About Us</h1>
      <p class="aboutUs-txt" id="p1">
        Forest Ranger adalah platform digital yang bertujuan meningkatkan kesadaran tentang spesies langka di Indonesia.
      </p>
      <p class="aboutUs-txt">
        Kami percaya setiap makhluk memiliki cerita yang layak untuk dibagikan melalui gambar. Misi kami adalah menyuarakan alam,
        mendukung pelestarian, dan menginspirasi masyarakat untuk melindungi keanekaragaman hayati demi masa depan
      </p>
      <p class="aboutUs-txt">
        Melalui pendekatan visual dan edukatif, kami menghubungkan masyarakat dengan alam liar Indonesia dari hutan tropis hingga
        pegunungan yang menjadi rumah bagi satwa terancam punah.
        Kami berkomitmen menjadi jembatan antara manusia dan alam, serta mengajak semua orang untuk menjadi bagian dari perubahan positif dalam menjaga kehidupan liar.
      </p>
      <div class="slider">
        <div class="slide-track">
          
          <div class="slide">
            <img src="images/badak sumatera.jpeg" class="slide-img">
          </div>

          <div class="slide">
            <img src="images/burung cenderawasih.jpg" class="slide-img">
          </div>
          
          <div class="slide">
            <img src="images/harimau.jpg" class="slide-img">
          </div>      

          <div class="slide">
            <img src="images/komodo.jpg" class="slide-img">
          </div>

          <div class="slide">
            <img src="images/orang utan.JPG" class="slide-img">
          </div>
          <div class="slide">
            <img src="images/badak sumatera.jpeg"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="images/burung cenderawasih.jpg"/ class="slide-img">
          </div>
          
          <div class="slide">
            <img src="images/harimau.jpg"/ class="slide-img">
          </div>      

          <div class="slide">
            <img src="images/komodo.jpg"/ class="slide-img">
          </div>

          <div class="slide">
            <img src="images/orang utan.JPG"/ class="slide-img">
          </div>

        </div>
      </div>  
    </div>

  <div class="overlay-abt hidden-abt"></div>

  <div id="pop-up" class="modal hidden"></div>
  <div class="overlay hidden"></div>

  <div class="bacthed-container">
    <div class="container-flora-fauna">
      <h1>Endangered Species</h1>
      <div class="flora-fauna" id="flora-fauna">
        <span data-region="Sumatra" class="btn-filter">Sumatra</span>
        <span data-region="Kalimantan" class="btn-filter">Kalimantan</span>
        <span data-region="Jawa" class="btn-filter">Jawa</span>
        <span data-region="Sulawesi" class="btn-filter">Sulawesi</span>
        <span data-region="Papua" class="btn-filter">Papua</span>
      </div>
    </div>

    <div class="card-container"></div>
  </div>

  
  <footer>
    <div class="logo"><img src="forestRanger.png"/></div>

    <ul class="nav-footer">
      <li><a href="#">Support</a></li>
      <li><a href="#flora-fauna">Species</a></li>
      <li class="show-abt"><a href="#">About us</a></li>
      <li><a href="#" class="logo-social-media"><i class="fa fa-youtube"></i></a></li>
      <li><a href="#" class="logo-social-media"><i class="fa fa-instagram"></i></a></li>
      <li><a href="#" class="logo-social-media"><i class="fa fa-twitter"></i></a></li>
    </ul>

  </footer>
`;

// Variabel global
let imgData = {};
let ffData = {};

// Ambil data FF.json
fetch("FF.json")
  .then((res) => res.json())
  .then((data) => {
    ffData = data;
  });

// Ambil data img.json & render awal
fetch("img.json")
  .then((res) => res.json())
  .then((data) => {
    imgData = data;
    renderRegion("Sumatra");

    // Region filter listener
    document.querySelectorAll(".btn-filter").forEach((span) => {
      span.addEventListener("click", () => {
        renderRegion(span.dataset.region);
      });
    });
  });

// Render fauna & flora + tombol detail
function renderRegion(regionName) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  const region = imgData[regionName];
  if (!region) return;

  // Fauna
  region.fauna.forEach((fauna) => {
    container.innerHTML += `
      <div class="fauna-card-container-${fauna.id}">
        <img src="${fauna.image}" alt="${fauna.nama}">
        <button 
          class="fauna-btn-detail-${fauna.id}" 
          data-nama="${fauna.nama}" 
          data-region="${regionName}" 
          data-img="${fauna.image}"
          data-type="fauna"
        >Detail Info</button>
      </div>
    `;
  });
  // Flora
  region.flora.forEach((flora) => {
    container.innerHTML += `
      <div class="flora-card-container-${flora.id}">
        <img src="${flora.image}" alt="${flora.nama}">
        <button 
          class="flora-btn-detail-${flora.id}" 
          data-nama="${flora.nama}" 
          data-region="${regionName}" 
          data-img="${flora.image}"
          data-type="flora"
        >Detail</button>
      </div>
    `;
  });

  // pasang handler ke semua tombol detail
  document.querySelectorAll("button[data-type]").forEach((btn) => {
    btn.onclick = () => {
      const nama = btn.dataset.nama;
      const region = btn.dataset.region;
      const type = btn.dataset.type;
      const imgUrl = btn.dataset.img;
      const item = ffData[region]?.[type]?.find((x) => x.nama === nama);
      console.log(item);
      if (item) showDetailPopup(item, imgUrl);
      else alert("Data tidak ditemukan.");
    };
  });
}

function showDetailPopup(data, imageUrl) {
  const modal = document.getElementById("pop-up");
  const overlay = document.querySelector(".overlay");

  modal.innerHTML = `
    <button class="close-aboutUs">&times;</button>
    <div class="modal-content">
      <img src="${imageUrl}" alt="${data.nama}">
      <div class="modal-text">
        <h2>${data.nama}</h2>
        <p><strong>Spesies:</strong> ${data.spesies}</p>
        <p><strong>Asal:</strong> ${data.asal}</p>
        <p><strong>Keterangan:</strong> ${data.keterangan}</p>
      </div>
    </div>
  `;

  modal.style.display = "block";
  overlay.style.display = "block";

  modal.querySelector(".close-aboutUs").onclick = closeModal;
  overlay.onclick = closeModal;
}

function closeModal() {
  document.getElementById("pop-up").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

// Scroll navbar style
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelector(".navbar-links");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbarLinks.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbarLinks.classList.remove("scrolled");
  }
});


// 2. Ambil elemen yang kita butuhkan
const modal = document.querySelector(".modal-abt");
const overlay = document.querySelector(".overlay-abt");
const btnCloseModal = document.querySelector(".close-abt");
const btnOpenModal = document.querySelectorAll(".show-abt");

// 3. Definisi fungsi
const openModal_abt = function () {
  modal.classList.remove("hidden-abt");
  overlay.classList.remove("hidden-abt");
};

const closeModal_abt = function () {
  modal.classList.add("hidden-abt");
  overlay.classList.add("hidden-abt");
};

// 4. Event binding
// 4a. Tombol “About us”
btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal_abt));

// 4b. Tombol ✕ dan overlay background
btnCloseModal.addEventListener("click", closeModal_abt);
overlay.addEventListener("click", closeModal_abt);

// 4c. Tutup dengan Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-abt")) {
    closeModal_abt();
  }
});

// 5. Jika ingin modalnya langsung tersembunyi di awal,
//    pastikan class="hidden" sudah ada di HTML (sudah kita pakai).
//    Jadi **tidak perlu** memanggil closeModal() lagi di sini.
