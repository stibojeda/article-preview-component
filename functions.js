window.onload = () => {

  let componentBox = document.querySelector(".component");
  let shareButton = document.getElementById("share-button");
  let shareIconNormal = document.querySelector(".share-icon");
  let shareIconActive = document.querySelector(".share-icon--active");
  let boxActive = document.querySelector('.profile-block__share-active');
  let networksBox = document.querySelector(".share-box");
  let profileBlock = document.querySelector(".profile-block")
  let authorAvatar = document.querySelector(".profile-block__avatar");
  let informationProfile = document.querySelector(".profile-block__information");
  let boxActiveMobile = document.querySelector(".share-active-mobile");
  let shareButtonMobile = document.querySelector(".mobile-button-share");
  console.log(document.body.clientWidth);

  if (document.body.clientWidth < 900) {
    shareButton.addEventListener("click", () => {
      profileBlock.style.display = "none";
      boxActiveMobile.style.display = "block";
    });

    shareButtonMobile.addEventListener("focusout", () => {
      profileBlock.style.display = "flex";
      boxActiveMobile.style.display = "none";
    })
  }
  if (document.body.clientWidth >= 900) {
    shareButton.addEventListener("click", () => {
      boxActive.style.display = "block";
      shareIconNormal.style.display = "none";
      shareIconActive.style.display = "block";

    });
  
    shareButton.addEventListener("focusout", () => {
      boxActive.style.display = "none";
      shareIconNormal.style.display = "block";
      shareIconActive.style.display = "none";
    });  
  }
 

}