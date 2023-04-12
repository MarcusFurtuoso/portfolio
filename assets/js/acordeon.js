const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpens = acordeon.classList.contains('open');

        if(isOpens) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open')
        }
    })
})
















