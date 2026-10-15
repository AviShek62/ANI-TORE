const searchInput = document.querySelector('#collection-search');
const cards = [...document.querySelectorAll('.collection-card')];
const sections = [...document.querySelectorAll('.collection-section')];
const emptyState = document.querySelector('#empty-state');

searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach((card) => {
        const matches = card.dataset.search?.includes(query) ?? true;
        card.hidden = !matches;
        if (matches) visibleCards += 1;
    });

    sections.forEach((section) => {
        section.hidden = !section.querySelector('.collection-card:not([hidden])');
    });

    if (emptyState) emptyState.hidden = visibleCards > 0;
});
