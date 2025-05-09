document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

     const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all form fields.');
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xbloyevo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        form.reset();
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
      console.error('Failed to send email:', error);
    }
  });
});