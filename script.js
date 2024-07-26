function handleChangeMode() {
    const smsElement = document.getElementById("sms");
    const emailElement = document.getElementById("email");
    smsElement.classList.toggle("mode-changer");
    smsElement.classList.toggle("remove-mode-changer");
    emailElement.classList.toggle("mode-changer");
    emailElement.classList.toggle("remove-mode-changer");
  }

  function handlePageChange(url) {
    // Navigate to the new URL
    window.location.href = url;
  }

  function addClassBasedOnURL() {
    // Get the current URL and extract the last part of the URL
    let currentURL = window.location.href;
    let urlParts = currentURL.split("/");
    let lastElement = urlParts[urlParts.length - 1];

    // Handle empty last element if the URL ends with a slash
    if (lastElement === "") {
      lastElement = urlParts[urlParts.length - 2];
    }

    // Remove 'hdListColor' class from all list items
    document.querySelectorAll(".head-wrapper ol li").forEach((li) => {
      li.classList.remove("hdListColor");
    });

    // Add 'hdListColor' class to the appropriate list item based on the URL
    if (lastElement === "index.html") {
      document.getElementById("home").classList.add("hdListColor");
    } else if (lastElement === "about.html") {
      document.getElementById("about").classList.add("hdListColor");
    } else if (lastElement === "qna.html") {
      document.getElementById("qna").classList.add("hdListColor");
    }
  }

  // Call the function when the page loads
  window.onload = addClassBasedOnURL;