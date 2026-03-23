const form = document.getElementById("contactForm");

if (form) {
    // Show messages using the page's response element
    const responseDiv = document.getElementById('responseMessage');

    async function sendToTelegram() {
        // NOTE: sending bot token from client is not secure for production.
        const botToken = "7611061729:AAFmgmHYburqhwOFlFpn5Ij-uEGLiNUL-D0";
        const chatId = "6504383276";

        const bodyMessage = `👤 Name: ${form.name.value}\n📧 Email: ${form.email.value}\n📞 Phone: ${form.phone.value}\n📝 Message: ${form.message.value}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: bodyMessage })
            });
            const data = await res.json();

            if (data && data.ok) {
                if (responseDiv) {
                    responseDiv.textContent = 'Message sent!';
                    responseDiv.classList.add('show');
                    setTimeout(() => responseDiv.classList.remove('show'), 3000);
                }
                form.reset();
            } else {
                if (responseDiv) {
                    responseDiv.textContent = 'Error sending message. Please try again.';
                    responseDiv.classList.add('show');
                    setTimeout(() => responseDiv.classList.remove('show'), 3500);
                }
            }
        } catch (err) {
            if (responseDiv) {
                responseDiv.textContent = 'Network error. Please try again.';
                responseDiv.classList.add('show');
                setTimeout(() => responseDiv.classList.remove('show'), 3500);
            }
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // basic validation
        if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
            if (responseDiv) {
                responseDiv.textContent = 'Please fill in the required fields.';
                responseDiv.classList.add('show');
                setTimeout(() => responseDiv.classList.remove('show'), 3000);
            }
            return;
        }

        sendToTelegram();
    });
}
