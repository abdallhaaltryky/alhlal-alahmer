
document.addEventListener("DOMContentLoaded", function() {
    var countdown = 3; // الوقت بالثواني
    var welcomeScreen = document.getElementById("welcomeScreen");
    var mainContent = document.getElementById("mainContent");

    setTimeout(function() {
        welcomeScreen.style.display = "none";
        mainContent.style.display = "block";
    }, countdown * 1000); // إخفاء واجهة الترحيب بعد 3 ثوانٍ
});

// تبديل حالة القائمة المنسدلة  

function toggleMenu() {  
    const menu = document.querySelector('.list');  
    const menuBtn = document.querySelector('.menu-btn');  
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
}