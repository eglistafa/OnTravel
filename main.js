const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header_container h1", scrollRevealOption);

ScrollReveal().reveal(".header_container h4", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_container .about_flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

//blogs container
ScrollReveal().reveal(".blogs_card", {
  duration: 1000,
  interval: 400,
});

// contact call
function callPhoneNumber() {
  var phoneNumber = document.getElementById('phoneNumber').innerText;
  window.open('tel:' + phoneNumber);
}

//contact email
function sendEmail() {
  var emailSubject = encodeURIComponent("Subject of the email");
  var emailBody = encodeURIComponent("Body of the email");
  window.location.href = "mailto:eglistafa0@egmail.com?subject=" + emailSubject + "&body=" + emailBody;
}