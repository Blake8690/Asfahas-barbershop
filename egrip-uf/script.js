// Navbar blir vit när man scrollar
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll); onScroll();

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
