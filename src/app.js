export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-aboutUs");
const btnOpenModal = document.querySelectorAll(".show-aboutUs");

export const closeModal = function () {
  console.log("test");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const openModal = function () {
  console.log("test");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModel.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.querySelector("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
