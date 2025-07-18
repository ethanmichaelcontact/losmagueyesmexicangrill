const headerInfo = document.getElementById("headerInfo");
const headerPhone = document.getElementById("headerPhone");
const nprButton = document.getElementById("nprButton");
const largoButton = document.getElementById("largoButton");
const map = document.getElementById("mapsiFrame");

nprButton.addEventListener('click', () => switchMaps(0));
largoButton.addEventListener('click', () => switchMaps(1));


function switchMaps (x) {

  if (x === 0) {

    headerInfo.innerHTML = "7041 US-19, New Port Richey";
    headerPhone.innerHTML = "<a href='tel:+17272647768'>📞 (727) 264-7768</a>";

    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.263378493793!2d-82.7309392245128!3d28.2600295758703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c29025c455445b%3A0x162d1e0adbd072a3!2sLos%20Magueyes%20Mexican%20Grill!5e0!3m2!1sen!2sus!4v1752826962889!5m2!1sen!2sus";

  }

  else if (x === 1) {

    headerInfo.innerHTML = "9100 Ulmerton Rd, Largo";
    headerPhone.innerHTML = "<a href='tel:+17272707005'>📞 (727) 270-7005</a>";

    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.2576746678933!2d-82.76794382484607!3d27.894064917232043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fb93268851c7%3A0x3178cf6039829c72!2sLos%20Magueyes%20Mexican%20Grill!5e0!3m2!1sen!2sus!4v1752827965500!5m2!1sen!2sus";

  }

}
