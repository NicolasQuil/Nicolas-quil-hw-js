export const lightboxInit = () => {
  // מייצר אותו בבאדי
  createLightBox();
  // מסתיר אותו בהתחלה
  hideLightBox();
}

const createLightBox = () => {
  let divLight = document.createElement("div");
  divLight.className = "light_box";
  divLight.id = "id_lightbox";
  document.body.append(divLight);
  divLight.innerHTML =
    ` <div class="light_box_inside ">
        <img id="id_light_img">
        <h2 id="id_light_name"></h2>
        <div>Email💌: <span id="id_light_email"></span>
        <div>Address✉️: <span id="id_light_address"></span></div>
        <p>Phone📞: <span id="id_light_phone"></span></p>
        <button class="btn btn-primary myBtn">Close</button>
      </div>   `

  let closebtn = divLight.querySelector(".myBtn");
  closebtn.addEventListener("click", hideLightBox)
}

// מסתיר את הלייטבוקס
const hideLightBox = () => {
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "none";
}

export const showLightBox = (_item) => {
  //מחזיר הלייטבוקס
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "flex";

  //מדפיס את המידע
  document.querySelector("#id_light_img").src = _item.img
  document.querySelector("#id_light_name").innerHTML = _item.first_name + " " + _item.last_name;
  document.querySelector("#id_light_email").innerHTML = _item.email;
  document.querySelector("#id_light_phone").innerHTML = _item.phone;
  document.querySelector("#id_light_address").innerHTML = _item.street_name + " " + _item.street_number;
}