const noButton = document.querySelector(".btn-no");
const yesButton = document.querySelector(".btn-yes");
const buttonsWrap = document.querySelector(".buttons");
const overlay = document.querySelector("#celebrateOverlay");
const closeButton = document.querySelector(".btn-close");
let hasActivated = false;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const moveNoButton = () => {
  const wrapRect = buttonsWrap.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();
  const padding = 8;

  const maxX = Math.max(wrapRect.width - btnRect.width - padding, 0);
  const maxY = Math.max(wrapRect.height - btnRect.height - padding, 0);

  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  const safeX = clamp(nextX, 0, maxX);
  const safeY = clamp(nextY, 0, maxY);

  noButton.style.left = `${safeX}px`;
  noButton.style.top = `${safeY}px`;
  noButton.style.setProperty("--x", "0px");
  noButton.style.setProperty("--y", "0px");
};

const activateButtons = () => {
  if (hasActivated) {
    return;
  }
  hasActivated = true;
  buttonsWrap.classList.add("is-active");
};

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("mouseenter", moveNoButton);
document.addEventListener("mousemove", activateButtons, { passive: true });
document.addEventListener("touchmove", activateButtons, { passive: true });
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesButton.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.add("hidden");
  }
});
