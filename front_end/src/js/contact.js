let form = document.getElementById("contact_form");
let submitButton = document.querySelector(
  "#contact_form button[type='submit']"
);

let loading = document.getElementById("loading");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const first_name = document.getElementById("first_name").value.trim();
  const last_name = document.getElementById("last_name").value.trim();
  const email = document.getElementById("contact_email").value.trim();
  const phone = document.getElementById("contact_phone").value.trim();
  const mes = document.getElementById("contact_message_text").value.trim();

  if (!first_name || !last_name || !email || !phone || !mes) {
    showMessage("Toate câmpurile sunt obligatorii.", false);
  } else if (!isValidEmail(email)) {
    showMessage("Adresa de email introdusă nu este validă.", false);
  } else if (mes.length < 15) {
    showMessage("Mesajul introdus este prea scurt.", false);
  } else {
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Se trimite...";
    }
    removeMessage();
    loading.classList.add("show");

    try {
      const res = await fetch("https://api.coco-cakes.ro/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderName: first_name + " " + last_name,
          senderEmail: email,
          userMessage: mes,
          phoneNumber: phone,
        }),
      });
      if (res.ok) {
        setTimeout(() => {
          showMessage("Mesajul introdus a fost trimis cu succes.", true);
          loading.classList.remove("show");
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Trimite Mesajul";
          }
        }, 3000);
      } else {
        setTimeout(() => {
          showMessage("A apărut o eroare la trimiterea mesajului.", false);
          loading.classList.remove("show");
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Trimite Mesajul";
          }
        }, 3000);
      }
    } catch (error) {
      showMessage("A apărut o eroare la rețea. Reîncearcă.", false);
      loading.classList.remove("show");
    }
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const message = document.getElementById("error_message");

function showMessage(text, succes) {
  if (succes) {
    message.textContent = text;
    message.classList.add("glow");
    message.classList.remove("glow");

    message.classList.add("accepted_message");
    message.classList.remove("rejected_message");
  } else {
    message.textContent = text;
    message.classList.remove("accepted_message");
    message.classList.add("rejected_message");
  }
}

function removeMessage() {
  message.textContent = "";
  message.classList.remove("accepted_message");
  message.classList.remove("rejected_message");
}
