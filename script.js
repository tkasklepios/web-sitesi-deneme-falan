/* ============================================================
   AKDENIZ ÇİT & PANEL - script.js
   Görevi: Mobildeki hamburger (☰) butonuna basınca menüyü aç/kapat.
   ============================================================ */

/*
  document.querySelector(".menu-toggle")
  => Sayfada class="menu-toggle" olan ilk elemanı (hamburger butonu) BULUR
     ve bir "değişkene" (menuToggle) kaydeder ki sonra ona seslenebilelim.
  "const" => değeri sonradan değişmeyecek bir değişken tanımlar.
*/
const menuToggle = document.querySelector(".menu-toggle");

/* Aynı şekilde <nav> etiketini (asıl menüyü) buluyoruz. */
const nav = document.querySelector("nav");

/*
  addEventListener("click", ...) => "Bu butona TIKLANDIĞINDA şu işi yap" der.
  Yani hamburger butonuna her tıklanışta içerideki fonksiyon çalışır.
*/
menuToggle.addEventListener("click", function () {
  /*
    classList.toggle("active")
    => nav elemanına "active" adlı class'ı EKLE-ÇIKAR yapar (anahtar gibi):
       - Menü kapalıysa "active" ekler  => CSS onu GÖRÜNÜR yapar.
       - Menü açıksa "active" çıkarır    => CSS onu tekrar GİZLER.
    Görünür/gizli işini CSS'te ".nav.active" kuralıyla hallediyoruz.
  */
  nav.classList.toggle("active");
});
