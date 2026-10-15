const backgrounds = [
    'image/guts-5k-berserk-5120x2880-13631.jpg',
    'image/illustration-anime-city.jpg',
    'image/ken-takakura-okarun-3840x2160-20021.jpg',
    'image/laughing-luffy-one-5120x2880-19342.jpg',
    'image/my-hero-academia-7680x4320-20251.jpg',
    'image/saitama-dark-5120x2880-19846.png',
    'image/son-goku-shenron-5120x2880-19885.jpg',
    'image/son-goku-silhouette-11520x6480-17760.png'
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
if(document.querySelector('.background')) {
    document.querySelector('.background').style.backgroundImage = `url('${randomBg}')`;
}

document.addEventListener('DOMContentLoaded', function() {
    const profileFixed = document.querySelector('.profile-fixed img');
    const profileMenu = document.querySelector('.profile-menu');
    
    if(profileFixed && profileMenu) {
        profileFixed.addEventListener('click', function(e) {
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if(!profileMenu.contains(e.target)) {
                profileMenu.classList.remove('active');
            }
        });
    }
    
    const exploreBtn = document.querySelector('.explore-btn');
    const watchBtn = document.querySelector('.watch-btn');
    
    if(exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'explore.html';
        });
    }
    
    if(watchBtn) {
        watchBtn.addEventListener('click', function() {
            alert('Starting to watch...');
        });
    }
});
