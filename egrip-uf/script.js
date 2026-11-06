// Mobilmeny
const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// "Beställ" fyller i meddelandet
const message = document.querySelector('textarea[name="meddelande"]');
document.querySelectorAll('[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    message.value = `Hej! Jag vill beställa: ${btn.dataset.product}.`;
  });
});

// Kontaktformulär – öppnar användarens mejlprogram (byt till t.ex. Formspree för riktig sändning)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(`Meddelande från ${f.namn.value}`);
  const body = encodeURIComponent(`${f.meddelande.value}\n\n${f.namn.value} (${f.epost.value})`);
  window.location.href = `mailto:egripuf@exempel.se?subject=${subject}&body=${body}`;
  f.querySelector('.form-note').textContent = 'Tack! Ditt mejlprogram öppnas nu.';
});

document.getElementById('year').textContent = new Date().getFullYear();
