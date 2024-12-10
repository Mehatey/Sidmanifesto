document.addEventListener('DOMContentLoaded', () => {
    const scene1 = document.getElementById('scene1');
    const manifestoScene = document.getElementById('manifesto-scene');
    const sceneImage = document.getElementById('sceneImage');
    const titleContainer = document.querySelector('.title-container');
    const startButton = document.querySelector('.start-button');
    const titleText = document.querySelector('.title-text');
    const manifestoHeader = document.querySelector('.manifesto-header');
    const manifestoBody = document.querySelector('.manifesto-body');
    const barriersContainer = document.querySelector('.barriers-container');

    const typingSound = new Audio('typing.mp3');
    const backgroundSound = new Audio('scary.mp3');

    const manifestoPoints = [
        {
            header: "Design for People, Not Profit",
            body: "Stop designing for wallets. Start designing for souls. People don't want another ad disguised as meaning—they want to feel seen, heard, and understood. Unless you're a billionaire, in which case, congrats… but maybe chill on the greed?"
        },
        {
            header: "Create Immersive Connections",
            body: "Make people feel something so deep they forget their phones for five whole minutes. Build worlds that grab their emotions and shake them like a snow globe—except less chaotic and more beautiful."
        },
        {
            header: "Tell Stories That Matter",
            body: "Forget the endless scroll of cat videos and influencer drama. Design is a megaphone—use it to tell stories about what actually matters: the world, its people, and the big issues like racism, climate change, and why socks always disappear in the laundry."
        },
        {
            header: "Tackle Social Issues",
            body: "Design isn’t just for pretty things; it’s for gritty things. Use your skills to punch poverty, slap climate change, and outsmart mental health stigma. Just make sure your punches actually land—and don’t break your own hand."
        },
        {
            header: "Evoke Emotion",
            body: "Make your designs hit harder than a sad Adele song on a rainy Tuesday. If your work doesn’t make someone cry, laugh, or question their life choices, what are you even doing?"
        },
        {
            header: "Help People Find Purpose",
            body: "Some people are looking for love. Others are looking for meaning. Use your design to whisper in their ears: ‘You’ve got this. Life isn’t just Netflix and snacks.’ Be their lightbulb moment."
        },
        {
            header: "Celebrate Nature and Local Voices",
            body: "Stop turning every story into a generic Hallmark movie. Design should capture the beauty of nature, the quirks of local communities, and the fact that no one drinks tea the same way twice. Make it real; make it matter."
        },
        {
            header: "Promote Happiness",
            body: "Happiness isn’t a trendy app feature—it’s the little moments your design can create. Be the reason someone smiles today. Or at least the reason they don’t rage-quit life. Think TED-Ed, not TikTok doom-scroll."
        },
        {
            header: "Offer Depth in a Tech-Heavy World",
            body: "People are drowning in notifications, algorithms, and pointless memes. Throw them a lifeboat of depth. Design experiences that slow them down and make them breathe. If it lasts longer than a dopamine hit, you’re winning."
        },
        {
            header: "Innovate for a Better Future",
            body: "Trends come and go, but legacies stick around. Push design beyond shiny buttons and slick animations. Think about the people who’ll live in the world you’re helping to shape—and make it a place they actually want to be."
        }
    ];

    const barriers = [
        "Greed 💰", "Apathy 😐", "Clickbait 📰", "Avoidance 🙈",
        "Numbness 🧊", "Confusion ❓", "Exploitation 🪓", "Burnout 🔥",
        "Distraction 📱", "Stagnation 🕸️"
    ];

    let currentPoint = 0;

    // Initially hide elements
    titleContainer.style.display = 'none';
    startButton.style.display = 'none';

    // Setup background music
    backgroundSound.loop = true;
    backgroundSound.volume = 0.5;
    backgroundSound.play();

    async function typewriterEffect(element, text) {
        element.textContent = '';
        for (let char of text) {
            element.textContent += char;
            typingSound.currentTime = 0;
            typingSound.play();
            await new Promise(resolve => setTimeout(resolve, 25)); // Double the speed
        }
        typingSound.pause();
    }

    function createBarriers() {
        barriersContainer.innerHTML = '';
        const numBarriers = Math.max(5, 50 - (currentPoint * 5)); // Reduces by 5 each time, minimum 5 barriers

        for (let i = 0; i < numBarriers; i++) {
            const div = document.createElement('div');
            div.className = 'barrier';
            div.textContent = barriers[Math.floor(Math.random() * barriers.length)];
            div.style.left = `${Math.random() * 90}vw`;
            div.style.top = `${Math.random() * 90}vh`;
            div.style.setProperty('--moveX', `${-100 + Math.random() * 200}px`);
            div.style.setProperty('--moveY', `${-100 + Math.random() * 200}px`);
            div.style.setProperty('--scale', `${0.8 + Math.random() * 1.5}`);
            div.style.setProperty('--startRotation', `${Math.random() * 360}deg`);
            div.style.setProperty('--midRotation', `${Math.random() * 720 - 360}deg`);
            div.style.setProperty('--endRotation', `${Math.random() * 360}deg`);
            div.style.fontSize = `${12 + Math.random() * 36}px`;
            div.style.animationDuration = `${12 + Math.random() * 8}s`;
            barriersContainer.appendChild(div);
        }
    }

    async function showManifestoPoint() {
        if (currentPoint >= manifestoPoints.length) {
            alert("End of manifesto!");
            return;
        }

        const point = manifestoPoints[currentPoint];

        createBarriers(); // Start barriers while typing
        await typewriterEffect(manifestoHeader, point.header);
        await typewriterEffect(manifestoBody, point.body);
    }

    sceneImage.addEventListener('click', async () => {
        sceneImage.src = 'sid.gif';
        titleContainer.style.display = 'block';
        await typewriterEffect(titleText, "Hey! These are my 10 manifesto points");
        startButton.style.display = 'block';
    });

    startButton.addEventListener('click', () => {
        scene1.style.display = 'none';
        manifestoScene.style.display = 'flex';
        showManifestoPoint();
    });

    manifestoHeader.addEventListener('click', () => {
        currentPoint++;
        if (currentPoint < manifestoPoints.length) {
            showManifestoPoint();
        } else {
            alert("End of manifesto!");
        }
    });
});