// ฟังก์ชันการเปลี่ยนสี navbar เมื่อเลื่อนหน้าจอ
window.onscroll = function() {changeNavbarColor()};

function changeNavbarColor() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// เพิ่ม CSS สำหรับ .scrolled ในไฟล์ CSS ของคุณ