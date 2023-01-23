const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const a = document.querySelectorAll("a");

var i = 0;
a.forEach((a) => {
  a.classList.add("italic");
  a.textContent = siteContent.nav["nav-item-" + (i + 1)];
  i++;
});
document.getElementsByTagName("a")[6].classList.remove("italic");
document.getElementsByTagName("a")[6].classList.add("bold");

document
  .querySelector("#logo-img")
  .setAttribute("src", "http://localhost:9000/img/logo.png");

document.querySelector("button").textContent = "Başlayın";

document.querySelector("h1").textContent = "Bu DOM Mükemmel";

document
  .querySelector("#cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png");

document.querySelectorAll("h4")[0].textContent = "Özellikler";
document.querySelectorAll("p")[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posure elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll("h4")[1].textContent = "Hakkında";
document.querySelectorAll("p")[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posure elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document
  .querySelector(".middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");

document.querySelectorAll("h4")[2].textContent = "Servisler";
document.querySelectorAll("p")[2].textContent =
  "Servisler içeriği elementum magna eros, ac posure elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll("h4")[3].textContent = "Ürünler";
document.querySelectorAll("p")[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posure elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll("h4")[4].textContent = "Vizyon";
document.querySelectorAll("p")[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posure elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll("h4")[5].textContent = "İletişim";
document.querySelectorAll("p")[5].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
document.querySelectorAll("p")[6].textContent = "+90 (123) 456-7899";
document.querySelectorAll("p")[7].textContent = "satis@birsirketsitesi.com.tr";

document.querySelector(".bold").textContent =
  "Copyright Bir Şirket Sitesi 2022";
