/******************************************************************
JAVASCRIPT: MAIN

******************************************************************/

(function() {

    // create people array
    const people = [
        {
            name: "Ferdi",
            img: "img/person-2.jpg"
        },
        {
            name: "Frieda",
            img: "img/person-3.jpg"
        }
    ];

    /***********************************************************************
        ON LOAD
    ************************************************************************/

    // cache DOM
    const person = document.querySelector('.person[data-random="true"]');
    const settings = document.querySelector('.settings');

    // bind events
    settings.addEventListener('submit', addPerson);

    // create a random match
    matchPerson();


    /***********************************************************************
        FUNCTIONS
    ************************************************************************/

    function matchPerson() {

        // cache DOM
        const personName = person.querySelector('.person__name');
        const personImg = person.querySelector('.person__img');

        // get a random person
        const randomPerson = people[Math.floor(Math.random() * people.length)];
        const randomPersonName = randomPerson.name;
        const randomPersonImg = randomPerson.img;

        // output name and img to DOM
        personName.innerHTML = randomPersonName;
        personImg.src = randomPersonImg;
    }

    function addPerson(e) {
        e.preventDefault();

        // cache DOM
        const inputName = settings.querySelector('.settings__name');
        const inputImg = settings.querySelector('.settings__img');

        // check if input field is not empty
        // if (inputName.value !== null && inputImg.value !== null) return;

        // add new person to people array
        people.push({
            name: inputName.value,
            img: inputImg.value
        });
    }


}());
