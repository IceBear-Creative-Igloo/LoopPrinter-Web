// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // PostHog
    const posthogEvents = document.querySelectorAll('[data-posthog]');
    if (posthogEvents.length) {
        const posthogEventsLength = posthogEvents.length;
        console.log('PostHog events', posthogEvents);
        for (let i = 0; i < posthogEventsLength; i++) {
            posthogEvents[i].addEventListener('click', (e) => {
                // e.preventDefault();
                const data = posthogEvents[i].data;
                console.log(posthogEvents[i], data);
                posthog.capture('button click', { property: data });
            });
        }
    }

    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
