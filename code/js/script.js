function buildProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return; // In case we are not on index.html

    PROJECTS.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.backgroundColor = p.color;
        const mainMedia = p.media[0];
        const mediaHTML = mainMedia.src ?
            (mainMedia.type === 'video' ? `<video class="project-hero-media" src="${mainMedia.src}" muted autoplay loop playsinline></video>` : `<img class="project-hero-media" src="${mainMedia.src}" alt="${p.title}">`) :
            `<div class="project-img-placeholder"><span class="img-num">01</span><span style="font-family:'DM Mono',monospace;font-size:12px;opacity:0.3;margin-top:2px;">${mainMedia.type.toUpperCase()}</span></div>`;

        // Extract key software/tools from tags
        const softwareKeywords = ['Python', 'Maya', 'Houdini', 'VEX', 'USD', 'PyTorch', 'CUDA', 'FastAPI', 'PySide6'];
        const software = p.tags.filter(t => softwareKeywords.some(kw => t.includes(kw)));
        const softwareHTML = software.length > 0 ? `<div class="project-software">${software.slice(0, 4).map(s => `<span class="software-icon">${s}</span>`).join('')}</div>` : '';

        let linkElements = [];
        if (p.links && p.links.length > 0) {
            p.links.forEach(link => {
                const label = link.label || (link.github ? 'GitHub' : 'Link');
                const url = link.url || link.github || '#';
                linkElements.push(`<a href="${url}" target="_blank" class="btn-ghost" onclick="event.stopPropagation()">${label} ↗</a>`);
            });
        }
        
        const linkTypes = [
            { key: 'github', label: 'GitHub' },
            { key: 'youtube', label: 'YouTube' },
            { key: 'paper', label: 'Paper' },
            { key: 'vimeo', label: 'Vimeo' },
            { key: 'website', label: 'Website' }
        ];
        
        linkTypes.forEach(type => {
            if (p[type.key]) {
                linkElements.push(`<a href="${p[type.key]}" target="_blank" class="btn-ghost" onclick="event.stopPropagation()">${type.label} ↗</a>`);
            }
        });

        let linksHTML = linkElements.join(' ');

        card.innerHTML = `

<div class="project-hero-container">

    ${mediaHTML}
    <div class="project-hero-overlay">

        <h3>
            <span class="subtitle-text">${p.subtitle}</span><br>
            ${p.title}
            
        </h3>
    </div>
</div>
<div class="project-topbar">
    <div class="project-topbar-desc">
        <div class="project-year">${p.year}</div>
        <div class="desc-text">${p.desc}</div>
        ${softwareHTML}
    </div>
    <div class="project-topbar-actions">
        <div class="project-links">
            ${linksHTML}
        </div>
        <a href="projectinfo.html?id=${p.id}" class="btn-arrow">View project →</a>
    </div>
</div>
`;
        card.addEventListener('click', () => {
            window.location.href = `projectinfo.html?id=${p.id}`;
        });
        grid.appendChild(card);
    });
}

function showSection(id, el) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    const targetSection = document.getElementById(id);
    if (targetSection) targetSection.classList.add('active');
    if (el) el.classList.add('active');
    window.scrollTo(0, 0);
    return false;
}

function handleScroll() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}
window.addEventListener('scroll', handleScroll);

// Decrypt protected email links
function initProtectedEmails() {
    const emailLinks = document.querySelectorAll('.email-protected');
    emailLinks.forEach(link => {
        const encoded = link.getAttribute('data-eprot');
        if (encoded) {
            try {
                const decoded = atob(encoded);
                // Set data-url so the CSS hover effects work correctly
                link.setAttribute('data-url', decoded);
                // Set href dynamically so browser handles email navigation natively
                link.setAttribute('href', 'mailto:' + decoded);
            } catch (err) {
                console.error("Failed to decode email address:", err);
            }
        }
    });
}

// Initialize
if (typeof PROJECTS !== 'undefined') {
    buildProjects();
}
initProtectedEmails();
handleScroll();
