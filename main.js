// Initialize Swiper for testimonials
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 270,
    modifier: 1,
    slideShadows: false,
  },
});

// Initialize Swiper for tournaments
const turnamenSwiper = new Swiper(".myTurnamenSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Cache elements for Lapangan 1
  const dateInput1 = document.getElementById("date1");
  const formattedDate1 = document.getElementById("formattedDate1");
  const startTime1 = document.getElementById("startTime1");
  const endTime1 = document.getElementById("endTime1");
  const formattedStartTime1 = document.getElementById("formattedStartTime1");
  const formattedEndTime1 = document.getElementById("formattedEndTime1");
  const bookingButton1 = document.querySelector(".harga-item:nth-child(1) .btn");

  // Cache elements for Lapangan 2
  const dateInput2 = document.getElementById("date2");
  const formattedDate2 = document.getElementById("formattedDate2");
  const startTime2 = document.getElementById("startTime2");
  const endTime2 = document.getElementById("endTime2");
  const formattedStartTime2 = document.getElementById("formattedStartTime2");
  const formattedEndTime2 = document.getElementById("formattedEndTime2");
  const bookingButton2 = document.querySelector(".harga-item:nth-child(2) .btn");

  // Helper function to format time
  const formatTime = (hour) => {
    if (hour >= 6 && hour < 12) return `${hour}:00 Pagi`;
    if (hour >= 12 && hour < 15) return `${hour}:00 Siang`;
    if (hour >= 15 && hour < 18) return `${hour}:00 Sore`;
    return `${hour}:00 Malam`;
  };

  // Helper function to format date to string
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  // Function to generate WhatsApp link for Lapangan 1
  const generateWhatsAppLink1 = () => {
    const date = dateInput1.value ? formatDate(dateInput1.value) : "";
    const startTime = startTime1.value ? formatTime(parseInt(startTime1.value, 10)) : "";
    const endTime = endTime1.value ? formatTime(parseInt(endTime1.value, 10)) : "";

    const message = `Permisi saya mau booking Lapangan 1 pada tanggal ${date} dari jam ${startTime} sampai jam ${endTime}.`;
    return `https://wa.me/6285172252910?text=${encodeURIComponent(message)}`;
  };

  // Function to generate WhatsApp link for Lapangan 2
  const generateWhatsAppLink2 = () => {
    const date = dateInput2.value ? formatDate(dateInput2.value) : "";
    const startTime = startTime2.value ? formatTime(parseInt(startTime2.value, 10)) : "";
    const endTime = endTime2.value ? formatTime(parseInt(endTime2.value, 10)) : "";

    const message = `Permisi saya mau booking Lapangan 2 pada tanggal ${date} dari jam ${startTime} sampai jam ${endTime}.`;
    return `https://wa.me/6285172252910?text=${encodeURIComponent(message)}`;
  };

  // Update the WhatsApp link for Lapangan 1
  if (bookingButton1) {
    bookingButton1.addEventListener("click", function (event) {
      event.preventDefault();
      const whatsappLink = generateWhatsAppLink1();
      window.open(whatsappLink, "_blank");
    });
  }

  // Update the WhatsApp link for Lapangan 2
  if (bookingButton2) {
    bookingButton2.addEventListener("click", function (event) {
      event.preventDefault();
      const whatsappLink = generateWhatsAppLink2();
      window.open(whatsappLink, "_blank");
    });
  }

  // Format date when selected for Lapangan 1
  if (dateInput1 && formattedDate1) {
    dateInput1.addEventListener("change", function () {
      const date = new Date(this.value);
      const options = { day: "2-digit", month: "long", year: "numeric" };
      formattedDate1.textContent = date.toLocaleDateString("id-ID", options);
    });
  }

  // Format start time when selected for Lapangan 1
  if (startTime1 && formattedStartTime1) {
    startTime1.addEventListener("change", function () {
      formattedStartTime1.textContent = formatTime(parseInt(this.value, 10));
    });
  }

  // Format end time when selected for Lapangan 1
  if (endTime1 && formattedEndTime1) {
    endTime1.addEventListener("change", function () {
      formattedEndTime1.textContent = formatTime(parseInt(this.value, 10));
    });
  }

  // Format date when selected for Lapangan 2
  if (dateInput2 && formattedDate2) {
    dateInput2.addEventListener("change", function () {
      const date = new Date(this.value);
      const options = { day: "2-digit", month: "long", year: "numeric" };
      formattedDate2.textContent = date.toLocaleDateString("id-ID", options);
    });
  }

  // Format start time when selected for Lapangan 2
  if (startTime2 && formattedStartTime2) {
    startTime2.addEventListener("change", function () {
      formattedStartTime2.textContent = formatTime(parseInt(this.value, 10));
    });
  }

  // Format end time when selected for Lapangan 2
  if (endTime2 && formattedEndTime2) {
    endTime2.addEventListener("change", function () {
      formattedEndTime2.textContent = formatTime(parseInt(this.value, 10));
    });
  }

  // Initialize AOS
  AOS.init({
    duration: 800, // Duration of the animation in milliseconds
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Whether animation should happen only once while scrolling down
    mirror: false, // Whether elements should animate out while scrolling past them
  });
});

// Show or hide the back-to-top button based on scroll position
window.onscroll = function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
document.getElementById("backToTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
