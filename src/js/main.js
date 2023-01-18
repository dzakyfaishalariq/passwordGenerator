import { navbar } from "./componen/navbar.js";

const p_password = document.getElementById("p_password");
const persyaratan = document.querySelectorAll("input[name='persyaratan']");
const klik = document.getElementById("generet_kode");
const hasilGenerator = document.getElementById("hasil_generator");
// todo : eksekusi
document.getElementById("navbar").innerHTML = navbar();

p_password.addEventListener("input", () => {
  document.getElementById("hasil").innerHTML = p_password.value;
});

const v_persyaratan = (persyaratan) => {
  let nilai = [];
  for (let i = 0; i < persyaratan.length; i++) {
    // if (persyaratan[i].checked) {
    //   nilai.push(persyaratan[i].value);
    // }
    nilai.push(persyaratan[i].checked);
  }
  return nilai;
};
const acakArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const randomNilai = (v_persyaratan, p_password) => {
  var angka = "1234567890";
  var huruf_b = "ABCDEFGHIJKLMNOPQRSTUFWXYZ";
  var huruf_k = "abcdefghijklmnopqrstufwxyz";
  var simbol = "~`!@#$%^&*()_+{}[]|?/>.<,";
  var password = "";
  for (let i = 0; i < p_password; i++) {
    if (v_persyaratan[0] === true) {
      let randomIndex = Math.floor(Math.random() * angka.length);
      password += angka[randomIndex];
    }
    if (v_persyaratan[1] === true) {
      let randomIndex = Math.floor(Math.random() * huruf_b.length);
      password += huruf_b[randomIndex];
    }
    if (v_persyaratan[2] === true) {
      let randomIndex = Math.floor(Math.random() * huruf_k.length);
      password += huruf_k[randomIndex];
    }
    if (v_persyaratan[3] === true) {
      let randomIndex = Math.floor(Math.random() * simbol.length);
      password += simbol[randomIndex];
    }
  }
  let tes = password.substring(0, p_password);
  //   console.log(tes.split(""));
  return acakArray(tes.split("")).join("");
};
klik.addEventListener("click", () => {
  let hasil = randomNilai(
    v_persyaratan(persyaratan),
    parseInt(p_password.value)
  );
  hasilGenerator.innerHTML = hasil;
});
