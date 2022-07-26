export default function typeWritter(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 110 * i);
  });
}
