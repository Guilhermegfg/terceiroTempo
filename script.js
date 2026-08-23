const novidades = [
  {
    destaque: true,
    tipo: "NOVIDADE",
    titulo: "O Terceiro Tempo começa a ganhar forma.",
    texto: "A obra avançou e, a partir de agora, você acompanha por aqui cada etapa até a inauguração.",
    data: "Atualizado em agosto de 2026"
  },
  {
    tipo: "ESPORTE",
    titulo: "Quadra de areia",
    texto: "O espaço será preparado para futevôlei, vôlei e beach tennis.",
    data: "Em construção"
  },
  {
    tipo: "EXPERIÊNCIA",
    titulo: "Mais que uma quadra",
    texto: "Bar, espetaria, sinuca, games, jogos ao vivo, espaço família e eventos fazem parte do conceito.",
    data: "Já confirmado"
  }
];

const newsGrid = document.querySelector('#newsGrid');

novidades.forEach(item => {
  const article = document.createElement('article');
  article.className = `news-card reveal${item.destaque ? ' featured' : ''}`;
  article.innerHTML = `
    <span class="news-tag">${item.tipo}</span>
    <h3>${item.titulo}</h3>
    <p>${item.texto}</p>
    <span class="news-date">${item.data}</span>
  `;
  newsGrid.appendChild(article);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}));
