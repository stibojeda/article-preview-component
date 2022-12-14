window.onload = () => {

  let shareButton = document.getElementById("share-button");
  let shareIconNormal = document.querySelector(".share-icon");
  let shareIconActive = document.querySelector(".share-icon--active");
  let boxActive = document.querySelector('.profile-block__share-active');
  let active = false;


  shareButton.addEventListener("click", () => {
    boxActive.style.display = "block";
    shareIconNormal.style.display = "none";
    shareIconActive.style.display = "block";
  });

  shareButton.addEventListener("focusout", () => {
    boxActive.style.display = "none";
    shareIconNormal.style.display = "block";
    shareIconActive.style.display = "none";
  })
  

}