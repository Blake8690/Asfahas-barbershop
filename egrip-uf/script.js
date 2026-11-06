// Meny (öppna/stäng)
const overlay = document.getElementById('overlay');
document.querySelectorAll('.menu-btn').forEach(b => b.addEventListener('click', () => overlay.classList.toggle('open')));
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => overlay.classList.remove('open')));

document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// Storleksval (beställningssidan)
const sizes = document.querySelectorAll('.sizes button');
const price = document.getElementById('price');
let size = sizes[0]?.textContent;
sizes.forEach(b => b.addEventListener('click', () => {
  sizes.forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  size = b.textContent;
  price.textContent = `${b.dataset.price} kr`;
}));

// Beställningsformulär – öppnar mejl (kan bytas mot Fortnox/Swish senare)
const form = document.getElementById('order-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const body = encodeURIComponent(
    `Beställning: ${size} (${price.textContent})\n\nNamn: ${form.namn.value}\nE-post: ${form.epost.value}\nTelefon: ${form.telefon.value}\n\n${form.meddelande.value}`);
  window.location.href = `mailto:egripuf@exempel.se?subject=${encodeURIComponent('Ny beställning')}&body=${body}`;
  form.querySelector('.status').textContent = 'Tack! Ditt mejlprogram öppnas nu.';
});
