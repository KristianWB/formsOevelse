let loginObjekt = {};
let lead = document.getElementById("pre");
let email = document.getElementById("exampleInputEmail1");

f = () => {
  if (email.value) {
    lead.innerHTML = lead.innerHTML + "E-mail: " + email.value + "\n # ";
  }
};
