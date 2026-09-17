/* =====================================
   SPECIAL LETTER WEBSITE
   PHASE 1 — PREMIUM POLISH
   FEATURE 1 — FLOATING HEARTS
===================================== */


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


/* =====================================
   SAFETY CHECK
===================================== */

if (
    !welcomeScreen ||
    !moodScreen ||
    !letterScreen ||
    !promiseScreen ||
    !finalScreen ||
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
        finalScreen
    ];

    screens.forEach(function (screen) {

        if (screen) {
            screen.classList.remove("active");
        }

    });


    if (screenToShow) {
        screenToShow.classList.add("active");
    }

}


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


    /* Create occasional hearts */

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
   ENVELOPE
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

        /*
         * Start again from letter

         */

        currentMessage = 0;


        /*
         * Show letter

         */

        showScreen(letterScreen);


        /*
         * Display first page

         */

        showLetter();


        /*
         * Heart burst

         */

        heartBurst(5);

    }
);


/* =====================================
   INITIAL STATE
===================================== */

currentMessage = 0;

updateProgress();