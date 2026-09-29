/* =====================================
   GET HTML ELEMENTS
===================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const moodScreen =
    document.getElementById("moodScreen");

const letterScreen =
    document.getElementById("letterScreen");

const promiseScreen =
    document.getElementById("promiseScreen");

const finalScreen =
    document.getElementById("finalScreen");

const openWhenScreen =
    document.getElementById("openWhenScreen");


/* =====================================
   ENVELOPE
===================================== */

const envelope =
    document.getElementById("envelope");


/* =====================================
   MOOD
===================================== */

const moodButtons =
    document.querySelectorAll(".mood-button");

const moodResponse =
    document.getElementById("moodResponse");

const moodContinue =
    document.getElementById("moodContinue");


/* =====================================
   LETTER
===================================== */

const letterText =
    document.getElementById("letterText");

const nextButton =
    document.getElementById("nextButton");

const letterProgress =
    document.getElementById("letterProgress");

const pageNumber =
    document.getElementById("pageNumber");

const totalPages =
    document.getElementById("totalPages");


/* =====================================
   PROMISE
===================================== */

const promiseButtons =
    document.querySelectorAll(".promise-button");

const promiseResponse =
    document.getElementById("promiseResponse");

const promiseContinue =
    document.getElementById("promiseContinue");


/* =====================================
   FINAL
===================================== */

const readAgainButton =
    document.getElementById("readAgainButton");

const openWhenButton =
    document.getElementById("openWhenButton");

const openWhenBackButton =
    document.getElementById("openWhenBackButton");

const extraScreens = document.querySelectorAll("[data-extra-screen]");
const extraBackButtons = document.querySelectorAll(".extra-back-button");
const memoryCards = document.querySelectorAll(".memory-card");
const memoryDialog = document.getElementById("memoryDialog");
const memoryDialogPanel = document.querySelector(".memory-dialog-panel");
const memoryDialogTitle = document.getElementById("memoryDialogTitle");
const memoryDialogText = document.getElementById("memoryDialogText");
const dialogClose = document.querySelector(".dialog-close");
const appreciationCards = document.querySelectorAll(".appreciation-card");


/* =====================================
   OPEN WHEN ELEMENTS
===================================== */

const openWhenCards =
    document.querySelectorAll(".open-when-card");

const openWhenCardsContainer =
    document.getElementById("openWhenCards");

const openWhenHeader =
    document.getElementById("openWhenHeader");

const openWhenLetter =
    document.getElementById("openWhenLetter");

const openWhenEnvelopeStage =
    document.getElementById("openWhenEnvelopeStage");

const openWhenEnvelope =
    document.getElementById("openWhenEnvelope");

const openWhenEnvelopeHint =
    document.getElementById("openWhenEnvelopeHint");

const openWhenLetterContent =
    document.getElementById("openWhenLetterContent");

const openWhenLetterTitle =
    document.getElementById("openWhenLetterTitle");

const openWhenLetterText =
    document.getElementById("openWhenLetterText");

const openWhenSlideCounter =
    document.getElementById("openWhenSlideCounter");

const openWhenPrevButton =
    document.getElementById("openWhenPrevButton");

const openWhenNextButton =
    document.getElementById("openWhenNextButton");

const openWhenCloseButton =
    document.getElementById("openWhenCloseButton");


/* =====================================
   SAFETY CHECK
===================================== */

if (
    !welcomeScreen ||
    !moodScreen ||
    !letterScreen ||
    !promiseScreen ||
    !finalScreen ||
    !openWhenScreen ||
    !envelope
) {
    console.error(
        "Some required HTML elements were not found."
    );
}


/* =====================================
   SCREEN NAVIGATION
===================================== */

function showScreen(screenToShow) {

    const screens = [
        welcomeScreen,
        moodScreen,
        letterScreen,
        promiseScreen,
        finalScreen,
        openWhenScreen,
        document.getElementById("memoriesScreen"),
        document.getElementById("timelineScreen"),
        document.getElementById("appreciationScreen")
    ];


    screens.forEach(function (screen) {

        if (screen) {
            screen.classList.remove("active");
        }

    });


    if (screenToShow) {
        screenToShow.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

}

extraScreens.forEach(function (button) {
    button.addEventListener("click", function () {
        showScreen(document.getElementById(button.dataset.extraScreen));
        heartBurst(4);
    });
});

extraBackButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        showScreen(finalScreen);
        heartBurst(3);
    });
});

memoryCards.forEach(function (card) {
    card.addEventListener("click", function () {
        memoryDialogPanel.style.setProperty(
            "--memory-image",
            `url("${card.dataset.memoryImage}")`
        );
        memoryDialogTitle.textContent = card.dataset.memoryTitle;
        memoryDialogText.textContent = card.dataset.memoryText;
        memoryDialog.hidden = false;
        heartBurst(3);
        dialogClose.focus();
    });
});

function closeMemoryDialog() {
    memoryDialog.hidden = true;
}

dialogClose.addEventListener("click", closeMemoryDialog);
memoryDialog.addEventListener("click", function (event) {
    if (event.target === memoryDialog) {
        closeMemoryDialog();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !memoryDialog.hidden) {
        closeMemoryDialog();
    }
});

appreciationCards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
        heartBurst(2);
    });
});


/* =====================================
   PHASE 1
   FLOATING HEART SYSTEM
===================================== */

function createFloatingHeart() {

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent = "♥";


    /* Random horizontal position */

    const left =
        Math.random() * 100;

    heart.style.setProperty(
        "--left",
        left + "%"
    );


    /* Random size */

    const size =
        14 + Math.random() * 14;

    heart.style.setProperty(
        "--size",
        size + "px"
    );


    /* Random animation duration */

    const duration =
        4.5 + Math.random() * 3;

    heart.style.setProperty(
        "--duration",
        duration + "s"
    );


    /* Random horizontal movement */

    const drift =
        -50 + Math.random() * 100;

    heart.style.setProperty(
        "--drift",
        drift + "px"
    );


    /* Add to page */

    document.body.appendChild(heart);


    /* Remove after animation */

    setTimeout(function () {

        heart.remove();

    }, (duration + 0.5) * 1000);

}


/* =====================================
   CREATE SMALL HEART BURST
===================================== */

function heartBurst(amount = 5) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(function () {

            createFloatingHeart();

        }, i * 180);

    }

}


/* =====================================
   START BACKGROUND HEARTS
===================================== */

let floatingHeartInterval = null;


function startFloatingHearts() {

    if (floatingHeartInterval) {
        return;
    }


    floatingHeartInterval =
        setInterval(function () {

            createFloatingHeart();

        }, 1800);

}


/* =====================================
   STOP BACKGROUND HEARTS
===================================== */

function stopFloatingHearts() {

    if (!floatingHeartInterval) {
        return;
    }


    clearInterval(
        floatingHeartInterval
    );

    floatingHeartInterval = null;

}


/* =====================================
   START HEART EFFECT
===================================== */

startFloatingHearts();


/* =====================================
   MAIN ENVELOPE
===================================== */

let envelopeOpened = false;


function openEnvelope() {

    /*
     * Prevent multiple clicks
     */

    if (envelopeOpened) {
        return;
    }


    envelopeOpened = true;


    /*
     * Start envelope animation
     */

    envelope.classList.add("open");


    /*
     * Change hint
     */

    const hint =
        document.querySelector(
            ".envelope-hint"
        );


    if (hint) {

        hint.textContent =
            "Opening your letter... ❤️";

    }


    /*
     * Small heart burst
     */

    heartBurst(6);


    /*
     * Wait for envelope animation
     */

    setTimeout(function () {

        showScreen(moodScreen);

    }, 1200);

}


/* =====================================
   MOUSE / TOUCH
===================================== */

envelope.addEventListener(
    "click",
    openEnvelope
);


/* =====================================
   KEYBOARD SUPPORT
===================================== */

envelope.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);


/* =====================================
   MOOD SYSTEM
===================================== */

const moodMessages = {

    sad:
        "Then take a breath. This little message is especially for you. ❤️",

    okay:
        "Then maybe I can make your day just a tiny bit better. 🌷",

    happy:
        "Good. Keep that smile. You deserve plenty more moments like this. 😊"

};


let selectedMood = null;

function resetMoodSelection() {
    selectedMood = null;

    moodButtons.forEach(function (button) {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
    });

    if (moodResponse) {
        moodResponse.textContent = "";
        moodResponse.classList.remove("show");
    }

    if (moodContinue) {
        moodContinue.classList.remove("show");
    }
}


/* =====================================
   MOOD BUTTONS
===================================== */

moodButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            /*
             * Get selected mood
             */

            selectedMood =
                button.dataset.mood;


            /*
             * Remove previous selection
             */

            moodButtons.forEach(
                function (item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            /*
             * Select current button
             */

            button.classList.add(
                "selected"
            );
            button.setAttribute("aria-pressed", "true");

            moodButtons.forEach(function (item) {
                if (item !== button) {
                    item.setAttribute("aria-pressed", "false");
                }
            });


            /*
             * Display response
             */

            moodResponse.textContent =
                moodMessages[selectedMood];


            /*
             * Restart response animation
             */

            moodResponse.classList.remove(
                "show"
            );


            setTimeout(function () {

                moodResponse.classList.add(
                    "show"
                );

            }, 50);


            /*
             * Show continue button
             */

            moodContinue.classList.add(
                "show"
            );


            /*
             * Small heart burst
             */

            heartBurst(3);

        }
    );

});


/* =====================================
   LETTER CONTENT
===================================== */

const messages = [

    `
        I just want you to remember one thing —
        you're genuinely one of the sweetest and
        purest-hearted people I know.

        <br><br>

        You deserve happiness, peace, and people
        who truly value you. ❤️
    `,


    `
        So please don't let anything or anyone
        from your past disturb your present.

        <br><br>

        What's gone is gone, and you don't have
        to carry it with you anymore.
    `,


    `
        Sometimes things don't make sense
        immediately.

        <br><br>

        But trust me, with time, everything will
        fall into place and everything will be fine. ❤️
    `,


    `
        And no matter what happens, always remember
        that you're special to me.

        <br><br>

        You're my only and very special female friend,
        and that place in my life will always be yours. 🫶
    `,


    `
        So smile, take care of yourself,
        and don't overthink things.

        <br><br>

        Better days are coming.

        <br><br>

        And I'll always be wishing the best for you. ✨
    `

];


let currentMessage = 0;


/* =====================================
   SHOW LETTER
===================================== */

function showLetter() {

    /*
     * Validate message index
     */

    if (
        currentMessage < 0 ||
        currentMessage >= messages.length
    ) {

        return;

    }


    /*
     * Get letter card
     */

    const letterCard =
        document.querySelector(
            ".letter-card"
        );


    /*
     * Start transition
     */

    if (letterCard) {

        letterCard.classList.add(
            "changing"
        );

    }


    /*
     * Wait for fade-out
     */

    setTimeout(function () {

        /*
         * Update text
         */

        letterText.innerHTML =
            messages[currentMessage];


        /*
         * Update page number
         */

        if (pageNumber) {

            pageNumber.textContent =
                currentMessage + 1;

        }


        /*
         * Update total pages
         */

        if (totalPages) {

            totalPages.textContent =
                messages.length;

        }


        /*
         * Update progress
         */

        updateProgress();


        /*
         * Fade card back in
         */

        if (letterCard) {

            letterCard.classList.remove(
                "changing"
            );

        }

    }, 250);


    /*
     * Update button text
     */

    if (
        currentMessage ===
        messages.length - 1
    ) {

        nextButton.textContent =
            "One Last Thing 🫶";

    }

    else {

        nextButton.textContent =
            "Keep Reading ❤️";

    }

}


/* =====================================
   LETTER PROGRESS
===================================== */

function updateProgress() {

    if (!letterProgress) {
        return;
    }


    const total =
        messages.length;


    const current =
        currentMessage + 1;


    const percentage =
        (current / total) * 100;


    letterProgress.style.width =
        `${percentage}%`;

}


/* =====================================
   PROMISE SYSTEM
===================================== */

const promiseMessages = {

    promise:
        "I knew you could do that. ❤️ Be gentle with yourself, okay?",

    try:
        "That's more than enough. You don't have to be perfect — just try, one day at a time. 🥹❤️"

};


let selectedPromise = null;

function resetExperienceState() {
    selectedMood = null;
    selectedPromise = null;
    currentMessage = 0;
    envelopeOpened = false;

    if (envelope) {
        envelope.classList.remove("open");
    }

    resetMoodSelection();
    resetPromise();
    resetOpenWhen();

    if (moodResponse) {
        moodResponse.textContent = "";
    }

    if (promiseResponse) {
        promiseResponse.textContent = "";
    }

    if (nextButton) {
        nextButton.textContent = "Keep Reading ❤️";
    }
}


/* =====================================
   RESET PROMISE
===================================== */

function resetPromise() {

    selectedPromise = null;


    /*
     * Remove selections
     */

    promiseButtons.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );

        }
    );


    /*
     * Clear response
     */

    if (promiseResponse) {

        promiseResponse.textContent =
            "";

        promiseResponse.classList.remove(
            "show"
        );

    }


    /*
     * Hide continue
     */

    if (promiseContinue) {

        promiseContinue.classList.remove(
            "show"
        );

    }

}


/* =====================================
   SHOW PROMISE
===================================== */

function showPromise() {

    resetPromise();

    showScreen(promiseScreen);

    heartBurst(5);

}


/* =====================================
   PROMISE BUTTONS
===================================== */

promiseButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /*
                 * Get promise
                 */

                selectedPromise =
                    button.dataset.promise;


                /*
                 * Remove previous selection
                 */

                promiseButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                /*
                 * Select current button
                 */

                button.classList.add(
                    "selected"
                );
                button.setAttribute("aria-pressed", "true");

                promiseButtons.forEach(function (item) {
                    if (item !== button) {
                        item.setAttribute("aria-pressed", "false");
                    }
                });


                /*
                 * Promise animation
                 */

                const promiseContent =
                    document.querySelector(
                        ".promise-content"
                    );


                if (promiseContent) {

                    promiseContent.classList.remove(
                        "promise-made"
                    );


                    void promiseContent.offsetWidth;


                    promiseContent.classList.add(
                        "promise-made"
                    );

                }


                /*
                 * Display response
                 */

                if (promiseResponse) {

                    promiseResponse.textContent =
                        promiseMessages[
                            selectedPromise
                        ];


                    promiseResponse.classList.remove(
                        "show"
                    );


                    setTimeout(
                        function () {

                            promiseResponse.classList.add(
                                "show"
                            );

                        },
                        50
                    );

                }


                /*
                 * Show continue
                 */

                if (promiseContinue) {

                    promiseContinue.classList.add(
                        "show"
                    );

                }


                /*
                 * Heart burst
                 */

                heartBurst(4);

            }

        );

    }
);


/* =====================================
   CONTINUE FROM MOOD
===================================== */

moodContinue.addEventListener(
    "click",
    function () {

        /*
         * Require mood selection
         */

        if (!selectedMood) {
            return;
        }


        /*
         * Reset letter
         */

        currentMessage = 0;


        /*
         * Show letter
         */

        showScreen(letterScreen);


        /*
         * Display first message
         */

        showLetter();


        /*
         * Small heart burst
         */

        heartBurst(5);

    }
);


/* =====================================
   NEXT LETTER MESSAGE
===================================== */

nextButton.addEventListener(
    "click",
    function () {

        /*
         * Page 3 -> Promise
         */

        if (currentMessage === 2) {

            /*
             * Page 4 waits
             * after promise
             */

            currentMessage = 3;


            /*
             * Show promise
             */

            showPromise();

            return;

        }


        /*
         * Move forward
         */

        currentMessage++;


        /*
         * More messages
         */

        if (
            currentMessage <
            messages.length
        ) {

            showLetter();

            heartBurst(3);

        }


        /*
         * Letter finished
         */

        else {

            showScreen(finalScreen);

            heartBurst(8);

        }

    }
);


/* =====================================
   CONTINUE FROM PROMISE
===================================== */

promiseContinue.addEventListener(
    "click",
    function () {

        /*
         * Require selection
         */

        if (!selectedPromise) {
            return;
        }


        /*
         * Page 4
         */

        currentMessage = 3;


        /*
         * Show letter
         */

        showScreen(letterScreen);


        /*
         * Display page 4
         */

        showLetter();


        /*
         * Heart burst
         */

        heartBurst(5);

    }
);


/* =====================================
   READ AGAIN
===================================== */

readAgainButton.addEventListener(
    "click",
    function () {

        resetExperienceState();

        showScreen(moodScreen);

        heartBurst(5);

    }
);


/* =====================================
   OPEN WHEN NAVIGATION
===================================== */

if (openWhenButton) {

    openWhenButton.addEventListener(
        "click",
        function () {

            /*
             * Open Open When section
             */

            showOpenWhen();

        }
    );

}


if (openWhenBackButton) {

    openWhenBackButton.addEventListener(
        "click",
        function () {

            if (selectedOpenWhen) {
                resetOpenWhen();

                if (openWhenCardsContainer) {
                    openWhenCardsContainer.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                return;
            }

            /*
             * Return to final screen
             */

            showScreen(finalScreen);


            /*
             * Small heart burst
             */

            heartBurst(4);

        }
    );

}


/* =====================================
   OPEN WHEN MESSAGES
===================================== */

const openWhenMessages = {

    sad: [
        {
            title: "Open When You're Feeling Sad 😔",
            message: `
                Hey... ❤️

                <br><br>

                If you are reading this, let this be a gentle
                reminder that it is okay to feel heavy for a while.
                You are not failing because your heart is tired.

                <br><br>

                You do not have to be okay all at once.
                You are allowed to rest, cry, breathe slowly,
                and take up space in your own life.
            `
        },
        {
            title: "Open When You're Feeling Sad 😔",
            message: `
                Some days feel louder than others.
                Some sadness feels bigger than the room,
                but it still does not last forever.

                <br><br>

                Your pain is real, but so is your future.
                There is still softness waiting for you,
                even if you cannot see it clearly tonight.
            `
        },
        {
            title: "Open When You're Feeling Sad 😔",
            message: `
                Please be kinder to yourself than you are to
                the thoughts in your head right now.

                <br><br>

                You do not deserve to be punished for having
                a difficult day. You deserve gentleness,
                rest, and a little bit of patience.
            `
        },
        {
            title: "Open When You're Feeling Sad 😔",
            message: `
                One hard moment does not define your whole life.
                It is just one chapter, not the story.

                <br><br>

                Even in the sadness, you are still the same
                beautiful soul who deserves love, peace,
                and light again.
            `
        },
        {
            title: "Open When You're Feeling Sad 😔",
            message: `
                So take a breath. Let your shoulders soften.
                Let tomorrow be a little kinder to you.

                <br><br>

                You are important. You are cared for.
                And you are still worthy of healing. 🫶
            `
        }
    ],

    overthinking: [
        {
            title: "Open When You're Overthinking 🧠",
            message: `
                Hey, overthinker... 🌷

                <br><br>

                I know that spiral. The thoughts keep circling,
                the what-ifs feel loud, and your mind refuses to rest.
            `
        },
        {
            title: "Open When You're Overthinking 🧠",
            message: `
                Not every thought deserves your attention.
                Not every worry needs to be solved tonight.

                <br><br>

                You do not have to untangle your whole life
                in one night. You can simply breathe and let it be.
            `
        },
        {
            title: "Open When You're Overthinking 🧠",
            message: `
                Some questions have no answer today.
                Some problems are not meant to be solved by force.

                <br><br>

                Trust the process. Let life unfold a little at a time.
                You do not need to fix everything before you rest.
            `
        },
        {
            title: "Open When You're Overthinking 🧠",
            message: `
                Please remember: your mind is not a judge.
                It is tired, loud, and overwhelmed sometimes.

                <br><br>

                You are allowed to quiet it down and choose peace.
            `
        },
        {
            title: "Open When You're Overthinking 🧠",
            message: `
                Breathe slowly. Let the spiral loosen.
                You are not behind. You are still becoming.

                <br><br>

                One breath, one step, one day at a time. ❤️
            `
        }
    ],

    "bad-day": [
        {
            title: "Open When You're Having a Bad Day 🌧️",
            message: `
                Hey... ❤️

                <br><br>

                So today felt heavy. That is okay.
                One rough day does not make your life a bad one.
            `
        },
        {
            title: "Open When You're Having a Bad Day 🌧️",
            message: `
                You do not need to fix everything today.
                Sometimes getting through the next hour is enough.

                <br><br>

                Survival is still strength. Carrying on is still brave.
            `
        },
        {
            title: "Open When You're Having a Bad Day 🌧️",
            message: `
                Drink some water. Eat something small.
                Step away from the noise for a moment.

                <br><br>

                A little rest can make the world feel less sharp.
            `
        },
        {
            title: "Open When You're Having a Bad Day 🌧️",
            message: `
                Tomorrow does not have to look like today.
                Bad days pass. Pain changes. Light comes back.

                <br><br>

                You are still worthy of a better day.
            `
        },
        {
            title: "Open When You're Having a Bad Day 🌧️",
            message: `
                Keep going gently. You are doing better than you think.

                <br><br>

                Better days are still ahead of you. ✨
            `
        }
    ],

    motivation: [
        {
            title: "Open When You Need Motivation 🫶",
            message: `
                Hey you... ❤️

                <br><br>

                I want you to remember how far you have already come.
                You are not starting from nothing. You are building.
            `
        },
        {
            title: "Open When You Need Motivation 🫶",
            message: `
                You do not need to have everything figured out right now.
                You only need the next honest step.

                <br><br>

                Small progress still counts. Real progress still counts.
            `
        },
        {
            title: "Open When You Need Motivation 🫶",
            message: `
                You are stronger than the days when you doubt yourself.
                You are more capable than your tired thoughts say.

                <br><br>

                Keep moving, even if it is slow. Keep going, even if it is quiet.
            `
        },
        {
            title: "Open When You Need Motivation 🫶",
            message: `
                Do not compare your path to someone else's.
                Your life is not supposed to look exactly like theirs.

                <br><br>

                Your timing is yours, and your growth is still real.
            `
        },
        {
            title: "Open When You Need Motivation 🫶",
            message: `
                So take the next step. Keep believing in yourself.
                The best parts of your life are still waiting for you.

                <br><br>

                You have got this. ❤️
            `
        }
    ],

    smile: [
        {
            title: "Open When You Need a Smile 😊",
            message: `
                Okay... this one is simple.

                <br><br>

                Your job is only to smile for a second.
                Not a big smile. Just a tiny, honest one.
            `
        },
        {
            title: "Open When You Need a Smile 😊",
            message: `
                You are cute. You are kind. You are special.
                You are also a little too good at overthinking,
                and that is part of what makes you endearing.
            `
        },
        {
            title: "Open When You Need a Smile 😊",
            message: `
                You deserve at least a few moments of softness.
                A few moments where your heart feels lighter.

                <br><br>

                Give yourself that gift, even for a second.
            `
        },
        {
            title: "Open When You Need a Smile 😊",
            message: `
                Let the world be a little smaller for a minute.
                Let your shoulders drop.

                <br><br>

                Even a tiny smile can be a quiet kind of healing.
            `
        },
        {
            title: "Open When You Need a Smile 😊",
            message: `
                There. That was nice, right?

                <br><br>

                Keep a little of that warmth with you. 🌷❤️
            `
        }
    ],

    sleep: [
        {
            title: "Open When You Can't Sleep 🌙",
            message: `
                Hey... 

                <br><br>

                If you are reading this at night, let it be a reminder
                that you are allowed to rest without fixing everything first.
            `
        },
        {
            title: "Open When You Can't Sleep 🌙",
            message: `
                Put the thoughts down for now.
                Tomorrow can wait. Tonight deserves gentleness.

                <br><br>

                The world will still be there when you wake up.
            `
        },
        {
            title: "Open When You Can't Sleep 🌙",
            message: `
                Close your eyes. Let your mind soften.
                Let your heart stop carrying so much for a moment.
            `
        },
        {
            title: "Open When You Can't Sleep 🌙",
            message: `
                You are allowed to be tired. You are allowed to rest.
                You are allowed to be at peace, even for a little while.
            `
        },
        {
            title: "Open When You Can't Sleep 🌙",
            message: `
                Good night. Rest well. Tomorrow is another chance to smile.

                <br><br>

                Sweet dreams. 🌙❤️
            `
        }
    ]
};


/* =====================================
   OPEN WHEN STATE
===================================== */

let selectedOpenWhen = null;

let openWhenEnvelopeOpened = false;

let openWhenSlideIndex = 0;


/* =====================================
   RESET OPEN WHEN
===================================== */

function resetOpenWhen() {

    selectedOpenWhen = null;

    openWhenEnvelopeOpened = false;
    openWhenSlideIndex = 0;


    /*
     * Show cards
     */

    if (openWhenCardsContainer) {

        openWhenCardsContainer.classList.remove(
            "hidden"
        );

    }

    if (openWhenHeader) {
        openWhenHeader.classList.remove("hidden");
    }

    if (openWhenBackButton) {
        openWhenBackButton.textContent = "← Back";
        openWhenBackButton.style.display = "";
    }

    if (openWhenEnvelopeStage) {
        openWhenEnvelopeStage.classList.remove("leaving", "hidden");
    }


    /*
     * Reset envelope
     */

    if (openWhenEnvelope) {

        openWhenEnvelope.classList.remove(
            "open",
            "envelope-open"
        );

        openWhenEnvelope.setAttribute(
            "aria-label",
            "Open this letter"
        );

    }


    /*
     * Reset letter
     */

    if (openWhenLetter) {

        openWhenLetter.classList.remove(
            "show",
            "selected",
            "envelope-open"
        );

    }


    /*
     * Hide letter content
     */

    if (openWhenLetterContent) {

        openWhenLetterContent.style.display =
            "none";
        openWhenLetterContent.classList.remove("show");
        openWhenLetterContent.setAttribute("aria-hidden", "true");

    }


    /*
     * Reset hint
     */

    if (openWhenEnvelopeHint) {

        openWhenEnvelopeHint.textContent =
            "Tap the envelope to open it 💌";

    }


    /*
     * Reset title
     */

    if (openWhenLetterTitle) {

        openWhenLetterTitle.textContent =
            "Open When...";

    }


    /*
     * Clear message
     */

    if (openWhenLetterText) {

        openWhenLetterText.innerHTML =
            "";

    }

    if (openWhenPrevButton) {
        openWhenPrevButton.disabled = true;
    }

    if (openWhenNextButton) {
        openWhenNextButton.textContent = "Next →";
        openWhenNextButton.disabled = true;
    }

    if (openWhenSlideCounter) {
        openWhenSlideCounter.textContent = "";
    }

}


function renderOpenWhenSlide() {
    const slides = selectedOpenWhen && openWhenMessages[selectedOpenWhen]
        ? openWhenMessages[selectedOpenWhen]
        : [];

    if (!slides.length) {
        return;
    }

    const slide = slides[openWhenSlideIndex] || slides[0];

    if (openWhenLetterTitle) {
        openWhenLetterTitle.textContent = slide.title;
    }

    if (openWhenLetterText) {
        openWhenLetterText.innerHTML = slide.message;
    }

    if (openWhenPrevButton) {
        openWhenPrevButton.disabled = openWhenSlideIndex === 0;
    }

    if (openWhenNextButton) {
        openWhenNextButton.textContent =
            openWhenSlideIndex === slides.length - 1
                ? "Read Again ✨"
                : "Next →";
        openWhenNextButton.disabled = !openWhenEnvelopeOpened;
    }

    if (openWhenSlideCounter) {
        openWhenSlideCounter.textContent =
            `Note ${openWhenSlideIndex + 1} of ${slides.length}`;
    }
}


/* =====================================
   SHOW OPEN WHEN SCREEN
===================================== */

function showOpenWhen() {

    resetOpenWhen();

    showScreen(openWhenScreen);

    heartBurst(6);

}


/* =====================================
   SELECT OPEN WHEN CARD
===================================== */

openWhenCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const selectedLetter =
                card.dataset.openWhen;

            const letter =
                openWhenMessages[selectedLetter];


            if (!letter) {
                return;
            }


            /*
             * Save selected letter
             */

            selectedOpenWhen =
                selectedLetter;

            openWhenSlideIndex = 0;

            renderOpenWhenSlide();


            /*
             * Hide cards
             */

            if (openWhenCardsContainer) {

                openWhenCardsContainer.classList.add(
                    "hidden"
                );

            }

            if (openWhenHeader) {
                openWhenHeader.classList.add("hidden");
            }

            if (openWhenBackButton) {
                openWhenBackButton.textContent = "← Back to Cards";
                openWhenBackButton.style.display = "";
            }

            if (openWhenEnvelopeStage) {
                openWhenEnvelopeStage.classList.remove("leaving", "hidden");
            }


            /*
             * Reset envelope state
             */

            openWhenEnvelopeOpened = false;


            if (openWhenEnvelope) {

                openWhenEnvelope.classList.remove(
                    "open",
                    "envelope-open"
                );

            }


            /*
             * Show actual letter immediately
             */

            if (openWhenLetter) {

                openWhenLetter.classList.remove("show", "envelope-open");
                openWhenLetter.classList.add("selected");

            }


            if (openWhenLetterContent) {

                openWhenLetterContent.style.display =
                    "none";
                openWhenLetterContent.classList.remove("show");

            }


            /*
             * Reset envelope hint
             */

            if (openWhenEnvelopeHint) {

                openWhenEnvelopeHint.textContent =
                    "Tap the envelope to open it 💌";

            }


            /*
             * Heart burst
             */

            heartBurst(5);

            /*
             * Scroll to envelope
             */

            setTimeout(function () {

                if (openWhenEnvelope) {

                    openWhenEnvelope.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 100);

        }
    );

});


/* =====================================
   OPEN OPEN-WHEN ENVELOPE
===================================== */

function openOpenWhenEnvelope() {

    /*
     * Prevent opening without
     * selecting a card
     */

    if (
        !openWhenEnvelope ||
        !selectedOpenWhen ||
        openWhenEnvelopeOpened
    ) {

        return;

    }


    /*
     * Mark envelope as opened
     */

    openWhenEnvelopeOpened = true;


    /*
     * Start envelope animation
     */

    openWhenEnvelope.classList.add(
        "open",
        "envelope-open"
    );


    /*
     * Update hint
     */

    if (openWhenEnvelopeHint) {

        openWhenEnvelopeHint.textContent =
            "Opening your little letter... ❤️";

    }


    /*
     * Heart burst
     */

    heartBurst(6);


    /*
     * Reveal letter after
     * envelope animation
     */

    setTimeout(function () {

        if (openWhenEnvelopeStage) {
            openWhenEnvelopeStage.classList.add("leaving");
        }

        setTimeout(function () {

            if (openWhenEnvelopeStage) {
                openWhenEnvelopeStage.classList.add("hidden");
            }

            if (openWhenLetter) {
                openWhenLetter.classList.add("show", "envelope-open");
            }

            if (openWhenLetterContent) {
                openWhenLetterContent.style.display = "block";
                openWhenLetterContent.setAttribute("aria-hidden", "false");

                requestAnimationFrame(function () {
                    openWhenLetterContent.classList.add("show");
                });
            }

            if (openWhenPrevButton) {
                openWhenPrevButton.disabled = openWhenSlideIndex === 0;
            }

            if (openWhenNextButton) {
                openWhenNextButton.disabled = false;
            }

            if (openWhenBackButton) {
                openWhenBackButton.style.display = "none";
            }

            setTimeout(function () {
                if (openWhenLetterContent) {
                    openWhenLetterContent.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 100);

        }, 320);

    }, 1200);

}


/* =====================================
   OPEN-WHEN ENVELOPE CLICK
===================================== */

if (openWhenEnvelope) {

    openWhenEnvelope.addEventListener(
        "click",
        openOpenWhenEnvelope
    );

}


/* =====================================
   OPEN-WHEN ENVELOPE KEYBOARD
===================================== */

if (openWhenEnvelope) {

    openWhenEnvelope.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openOpenWhenEnvelope();

            }

        }
    );

}


/* =====================================
   CLOSE OPEN-WHEN LETTER
===================================== */

if (openWhenPrevButton) {
    openWhenPrevButton.addEventListener("click", function () {
        if (!selectedOpenWhen || !openWhenEnvelopeOpened) {
            return;
        }

        const slides = openWhenMessages[selectedOpenWhen] || [];
        if (!slides.length) {
            return;
        }

        openWhenSlideIndex = Math.max(0, openWhenSlideIndex - 1);
        renderOpenWhenSlide();
        heartBurst(2);
    });
}

if (openWhenNextButton) {
    openWhenNextButton.addEventListener("click", function () {
        if (!selectedOpenWhen || !openWhenEnvelopeOpened) {
            return;
        }

        const slides = openWhenMessages[selectedOpenWhen] || [];
        if (!slides.length) {
            return;
        }

        if (openWhenSlideIndex < slides.length - 1) {
            openWhenSlideIndex += 1;
            renderOpenWhenSlide();
            heartBurst(2);
            return;
        }

        openWhenSlideIndex = 0;
        renderOpenWhenSlide();
        heartBurst(2);
    });
}

if (openWhenCloseButton) {

    openWhenCloseButton.addEventListener(
        "click",
        function () {

            heartBurst(4);

            resetOpenWhen();


            setTimeout(function () {

                if (openWhenCardsContainer) {

                    openWhenCardsContainer.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 100);

        }
    );

}


/* =====================================
   INITIAL OPEN-WHEN STATE
===================================== */

resetOpenWhen();


/* =====================================
   INITIAL LETTER STATE
===================================== */

currentMessage = 0;

updateProgress();