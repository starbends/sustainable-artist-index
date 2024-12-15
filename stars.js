//hello

// player.src = `https://bandcamp.com/EmbeddedPlayer/track=${track.id}/size=large/artwork=small/tracklist=false/bgcol=333333/linkcol=0f91ff/transparent=true/`;

//      { platform: 'spotify', id: '152vpC0RadNVkqsdEm0ZbF?si=400053e86ffd4d46' }, //quiet i can feel it - nana grizol
//{ platform: 'spotify', id: '6mak71CUyrLX1cSoJFGrmZ?si=e47e39bca328432a' }, //smother - jordaan mason
//{ platform: 'spotify', id: '6Y5icCFW6DGDTJbfzmPPh7?si=fc43c5f524d0492f' }, //jane cum - japanese breakfast
//{ platform: 'bandcamp', id: '3255257262' },                                //we're softly drifting[...] - starbends
//{ platform: 'bandcamp', id: '3918470282' },                                //smking to dth - cbmc
//{ platform: 'bandcamp', id: '1541720942' }                                 //sandjorda - binarpilot

// stars.js
document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 200; // Adjust number of stars

    if (!starContainer) {
        console.error('No element found with class .stars!');
        return;
    }

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position
        const xPosition = Math.random() * 100; // 0 to 100%
        const yPosition = Math.random() * 100; // 0 to 100%
        star.style.left = `${xPosition}%`;
        star.style.top = `${yPosition}%`;

        // Randomize animation duration
        const animationDuration = Math.random() * 2 + 1; // 1-3 seconds
        star.style.animationDuration = `${animationDuration}s`;

        // Log position to console
        console.log(`Star ${i}: Position -> left: ${xPosition}%, top: ${yPosition}%`);

        // Append the star to the container
        starContainer.appendChild(star);
    }

    console.log(`Created ${numberOfStars} stars!`);
});

