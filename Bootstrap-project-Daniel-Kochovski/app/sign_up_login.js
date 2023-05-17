window.addEventListener("load", (event) => {
  console.log(`This is the hash ${window.location.hash}`);
  if (window.location.hash === '#sign-up') {
    document.getElementById('reg-log').checked = true
  }
});
