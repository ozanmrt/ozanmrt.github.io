const skills = [
  ['HTML 5 - CSS - Bootstrap - Tailwind', 90],
  ['JavaScript', 85],
  ['ReactJs - NextJs', 75],
  ['NodeJs - ExpressJs', 70],
  ['MsSQL - MySQL', 85],
  ['MongoDB - Mongoose', 80],
  ['.NET - C# - Java', 90],
  ['Python', 60],
];

const projects = [
  {
    title: 'Script Sharing Platform',
    category: 'Web',
    images: ['newhhell1.png', 'newhhell2.png', 'newhhell3.png', 'newhhell4.png'],
    description: 'A Roblox-focused script sharing platform built with Next.js, designed for publishing, browsing and managing community scripts.',
    tags: ['Next.js', 'MongoDB', 'Redis', 'Docker'],
    links: [{ label: 'Visit Site', href: 'https://haxhell.com/', icon: 'external-link', secondary: true }]
  },
  {
    title: 'Smart EDU',
    category: 'Backend',
    images: ['smart-edu1.png', 'smart-edu2.png', 'smart-edu3.png', 'smart-edu4.png'],
    description: 'A dynamic education management platform built with Node.js, Express.js, MongoDB and Mongoose. It includes MVC architecture, CRUD operations, session management, validation and email flows.',
    tags: ['Node.js', 'Express', 'MongoDB', 'MVC'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/smartEdu', icon: 'github' }]
  },
  {
    title: 'Photo Blog',
    category: 'Backend',
    images: ['photo-blog.png', 'photo-blog2.png'],
    description: 'A MongoDB-backed photo blog application built with Node.js and Express.js. The project uses EJS templates, middleware, pagination and a clean MVC structure.',
    tags: ['Node.js', 'EJS', 'MongoDB'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/photo-blog', icon: 'github' }]
  },
  {
    title: 'Mail Alert',
    category: 'Tool',
    images: ['ma1.png', 'ma2.png'],
    description: 'A C# email monitoring tool that triggers an alarm when an incoming email contains critical keywords. Keywords are stored in an MSSQL database.',
    tags: ['C#', 'MSSQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/mail-alert', icon: 'github' }]
  },
  {
    title: 'WordPress Post Sharing Website',
    category: 'Web',
    images: ['hhell1.png', 'hhell2.png', 'hhell3.png'],
    description: 'A web project designed for WordPress content sharing with a fast, clear and user-friendly flow.',
    tags: ['Web', 'WordPress', 'PHP']
  },
  {
    title: 'HaxBall Bot',
    category: 'Bot',
    images: ['aylik.png'],
    description: 'A HaxBall bot where each player has only one shot attempt, built around a simple one-chance gameplay flow.',
    tags: ['Bot', 'JavaScript', 'HaxBall']
  },
  {
    title: 'HaxBall V4 League Bot',
    category: 'Bot',
    images: ['lig.png', 'lig2.png', 'lig3.png'],
    description: 'A HaxBall bot developed for league tracking, match flow and community management needs.',
    tags: ['Bot', 'League', 'HaxBall']
  },
  {
    title: 'Tic Tac Toe Game',
    category: 'Game',
    images: ['xox.png'],
    description: 'A Tic Tac Toe game built with React. The game flow is structured around reusable components and clear state management.',
    tags: ['React', 'Game', 'State'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/tic-tac-toe', icon: 'github' }]
  },
  {
    title: 'Social Media Template',
    category: 'Web',
    images: ['sm1.png', 'sm2.png'],
    description: 'A responsive social media interface template built with Bootstrap, focused on mobile compatibility and a readable grid system.',
    tags: ['Bootstrap', 'Responsive', 'Template'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/social-media-template', icon: 'github' }]
  },
  {
    title: 'Script Injection Tool',
    category: 'Desktop',
    images: ['hxx.png'],
    description: 'A script injection tool built with C# Windows Forms. The project is still in development.',
    tags: ['C#', 'Windows Forms']
  },
  {
    title: 'Game Website Template',
    category: 'Web',
    images: ['od1.png', 'od2.png'],
    description: 'A game website template built with HTML, CSS and JavaScript, originally designed around browser experiences from the Flash Player era.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/game-website-template', icon: 'github' }]
  },
  {
    title: 'Silicon Valley History',
    category: 'Web',
    images: ['sv1.png', 'sv2.png', 'sv3.png'],
    description: 'A Silicon Valley history project built with HTML, CSS and JavaScript during 2017-2018.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/silicon-valley', icon: 'github' }]
  },
  {
    title: 'CPU Benchmark',
    category: 'Tool',
    images: ['cpu1.png', 'cpu2.png'],
    description: 'A CPU score comparison tool built with JavaScript and Bootstrap.',
    tags: ['JavaScript', 'Bootstrap'],
    links: [{ label: 'GitHub', href: 'https://github.com/ozanmrt/CPU-Benchmark', icon: 'github' }]
  },
  {
    title: 'Roblox Tax Escape Game',
    category: 'Game',
    images: ['vergi.png', 'vergi2.png'],
    description: 'A Roblox game coded with Lua. The game reached more than one million total plays.',
    tags: ['Lua', 'Roblox', '1M+'],
    links: [{ label: 'Visit Site', href: 'https://www.roblox.com/games/6571015039/RTE-Vergiden-Ka-T-RK', icon: 'external-link', secondary: true }]
  },
  {
    title: 'Number Sorting Game',
    category: 'Desktop',
    images: ['sd1.png', 'sd2.png', 'sd3.png', 'sd4.png'],
    description: 'A number sorting game developed with C# Windows Forms.',
    tags: ['C#', 'Windows Forms'],
    links: [
      { label: 'Download', href: 'assets/exe/sayilaridizme.exe', icon: 'download', secondary: true },
      { label: 'GitHub', href: 'https://github.com/ozanmrt/sayilari-dizme-oyunu', icon: 'github' }
    ]
  },
  {
    title: 'Catch the Button Game',
    category: 'Desktop',
    images: ['by.png'],
    description: 'A catch-the-button game built with C# Windows Forms.',
    tags: ['C#', 'Windows Forms'],
    links: [
      { label: 'Download', href: 'assets/exe/butonuyakala.exe', icon: 'download', secondary: true },
      { label: 'GitHub', href: 'https://github.com/ozanmrt/catch-the-button-game', icon: 'github' }
    ]
  }
];

const certificates = [
  {
    title: 'Node.js Backend Path',
    image: 'nodejs-sertifika.png',
    href: 'https://academy.patika.dev/tr/certificates/Nj0qeSpr'
  },
  {
    title: 'Beginner Frontend Web Development Path',
    image: 'beginner-frontend-sertifika.png',
    href: 'https://academy.patika.dev/tr/certificates/nu7gNNVh'
  }
];

const typedWords = ['Full Stack Developer', 'Software Engineer', 'Freelancer', 'Developer'];
let typedWordIndex = 0;
let typedCharIndex = 0;
let deleting = false;

function typeLoop() {
  const target = document.querySelector('#typedText');
  if (!target) return;

  const word = typedWords[typedWordIndex];
  target.textContent = word.slice(0, typedCharIndex);

  if (!deleting && typedCharIndex < word.length) {
    typedCharIndex += 1;
    setTimeout(typeLoop, 78);
    return;
  }

  if (!deleting && typedCharIndex === word.length) {
    deleting = true;
    setTimeout(typeLoop, 1250);
    return;
  }

  if (deleting && typedCharIndex > 0) {
    typedCharIndex -= 1;
    setTimeout(typeLoop, 38);
    return;
  }

  deleting = false;
  typedWordIndex = (typedWordIndex + 1) % typedWords.length;
  setTimeout(typeLoop, 280);
}

const brandIcons = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.26c0 5.2 3.36 9.6 8.03 11.15.59.11.8-.26.8-.57v-2.02c-3.27.73-3.96-1.44-3.96-1.44-.53-1.4-1.3-1.77-1.3-1.77-1.07-.75.08-.73.08-.73 1.18.08 1.8 1.25 1.8 1.25 1.05 1.85 2.76 1.32 3.43 1.01.11-.78.41-1.32.75-1.62-2.61-.31-5.36-1.34-5.36-5.96 0-1.32.46-2.39 1.21-3.23-.12-.31-.53-1.54.12-3.19 0 0 .99-.33 3.24 1.23a10.97 10.97 0 0 1 5.9 0c2.25-1.56 3.24-1.23 3.24-1.23.65 1.65.24 2.88.12 3.19.76.84 1.21 1.91 1.21 3.23 0 4.64-2.75 5.64-5.38 5.95.43.38.81 1.12.81 2.26v3.36c0 .31.21.68.81.57a11.77 11.77 0 0 0 8.02-11.15A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.96 1.84-1.84 3.78-1.84 4.04 0 4.79 2.48 4.79 5.71v5.41h-4v-4.8c0-1.15-.02-2.62-1.71-2.62-1.72 0-1.98 1.25-1.98 2.54v4.88h-4V9.75Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 2.05a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"/></svg>'
};

function icon(name, size = 'h-4 w-4') {
  if (brandIcons[name]) {
    return brandIcons[name];
  }
  return `<i data-lucide="${name}" class="${size}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderSkills() {
  const grid = document.querySelector('#skillsGrid');
  grid.innerHTML = skills.map(([name, value]) => `
    <article class="skill-card reveal">
      <div class="mb-3 flex items-center justify-between gap-4">
        <h3 class="font-bold text-zinc-950">${name}</h3>
        <span class="rounded-full bg-zinc-100 px-2.5 py-1 text-sm font-extrabold text-zinc-700">${value}%</span>
      </div>
      <div class="skill-bar" aria-hidden="true">
        <div class="skill-fill" data-value="${value}"></div>
      </div>
    </article>
  `).join('');
}

function projectCard(project, index) {
  const images = project.images.map(image => `assets/img/${image}`);
  const linkMarkup = (project.links || []).map(link => `
    <a class="card-link ${link.secondary ? 'secondary' : ''}" href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
      ${icon(link.icon)}
      ${link.label}
    </a>
  `).join('');

  return `
    <article class="project-card reveal" data-category="${project.category}">
      <div class="project-media" data-carousel='${JSON.stringify(images)}'>
        <img src="${images[0]}" alt="${project.title}" loading="${index < 3 ? 'eager' : 'lazy'}">
        ${images.length > 1 ? `
          <button class="carousel-btn carousel-prev" type="button" aria-label="Previous image">${icon('chevron-left', 'h-5 w-5')}</button>
          <button class="carousel-btn carousel-next" type="button" aria-label="Next image">${icon('chevron-right', 'h-5 w-5')}</button>
          <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            ${images.map((_, dotIndex) => `<span class="project-dot ${dotIndex === 0 ? 'active' : ''}"></span>`).join('')}
          </div>
        ` : ''}
      </div>
      <div class="flex flex-1 flex-col p-5">
        <div>
          <div class="mb-4 flex flex-wrap gap-2">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
          <h3 class="font-display text-2xl font-bold text-zinc-950">${project.title}</h3>
          <p class="project-description mt-3 text-sm leading-6 text-zinc-600">${project.description}</p>
        </div>
        <div class="mt-auto flex flex-wrap justify-center gap-2 pt-5">${linkMarkup}</div>
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.querySelector('#projectsGrid');
  grid.innerHTML = projects.map(projectCard).join('');
  hydrateCarousels();
  observeRevealItems();
  refreshIcons();
}

function hydrateCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const images = JSON.parse(carousel.dataset.carousel);
    const imageElement = carousel.querySelector('img');
    const dots = [...carousel.querySelectorAll('.project-dot')];
    let current = 0;

    const show = next => {
      current = (next + images.length) % images.length;
      imageElement.style.opacity = '.2';
      setTimeout(() => {
        imageElement.src = images[current];
        imageElement.style.opacity = '1';
      }, 120);
      dots.forEach((dot, index) => dot.classList.toggle('active', index === current));
    };

    carousel.querySelector('.carousel-prev')?.addEventListener('click', () => show(current - 1));
    carousel.querySelector('.carousel-next')?.addEventListener('click', () => show(current + 1));
  });
}

function renderCertificates() {
  const grid = document.querySelector('#certificateGrid');
  grid.innerHTML = certificates.map(certificate => `
    <a href="${certificate.href}" target="_blank" rel="noreferrer" class="certificate-card reveal group bg-white text-zinc-950">
      <div class="aspect-[16/10] overflow-hidden bg-zinc-100">
        <img src="assets/img/${certificate.image}" alt="${certificate.title}" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">
      </div>
      <div class="flex items-center justify-between gap-4 p-5">
        <h3 class="font-display text-xl font-bold">${certificate.title}</h3>
        ${icon('external-link', 'h-5 w-5 shrink-0 text-teal-700')}
      </div>
    </a>
  `).join('');
}

function setupMenu() {
  const button = document.querySelector('#menuButton');
  const menu = document.querySelector('#mobileMenu');

  button.addEventListener('click', () => {
    const isOpen = !menu.classList.toggle('hidden');
    button.setAttribute('aria-expanded', String(isOpen));
    button.innerHTML = icon(isOpen ? 'x' : 'menu', 'h-5 w-5');
    refreshIcons();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = icon('menu', 'h-5 w-5');
      refreshIcons();
    });
  });
}

function setupScrollState() {
  const header = document.querySelector('#siteHeader');
  const topButton = document.querySelector('#backToTop');
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav-link, .mobile-link')];

  const update = () => {
    header.classList.toggle('py-1', window.scrollY > 16);
    topButton.classList.toggle('hidden', window.scrollY < 520);
    topButton.classList.toggle('flex', window.scrollY >= 520);

    const current = sections.findLast(section => window.scrollY >= section.offsetTop - 120)?.id || 'hero';
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };

  window.addEventListener('scroll', update, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  update();
}

let revealObserver;
function observeRevealItems() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');

        entry.target.querySelectorAll('.skill-fill').forEach(fill => {
          fill.style.width = `${fill.dataset.value}%`;
        });
      });
    }, { threshold: 0.16 });
  }

  document.querySelectorAll('.reveal:not(.is-observed)').forEach(item => {
    item.classList.add('is-observed');
    revealObserver.observe(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#year').textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  renderCertificates();
  setupMenu();
  setupScrollState();
  observeRevealItems();
  typeLoop();
  refreshIcons();
});
