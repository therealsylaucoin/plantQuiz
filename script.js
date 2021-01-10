//variables
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let plantResult = {};
let answers = [];
const restartButton = document.querySelector('#restart');
const resultButton = document.querySelector('.buttonResult');
const resultBanner = document.querySelector('#resultBanner');
const finalResult = document.querySelector('.finalResult');
const showResult = document.querySelector('.showResult');
//array of all the possible results - At end of code 

//functions
//check if the arrays match, if so, we have a plant match!
const checkMatch = () => {
    //for each input, if it is checked, push value into user answers array
    inputs.forEach(input => input.checked ? answers.push(input.value) : null);
    //if answers has a length of two, check for matches:
    if (answers.length >= 2){
        //slice the array to two, from the end
        answers = answers.slice(-2);
        //check for matches in both arrays
        plants.forEach(plant => {
            if (plant.attributes.toString() === answers.toString()){
                plantResult = plant;
                printResults();
                showResult.style.display = 'none';
                restartButton.style.display = 'block';
                resultBanner.innerHTML = "Your plant match is:";
            }
        });
    } else {
        alert('You must answer both questions to get a result.');
    }
}

//print the results to the page
const printResults = () => {
    finalResult.innerHTML = `
        <h3>${plantResult.name}</h3>
        <p>${plantResult.description}</p>
        <img class="resultImage" src='assets/results/${plantResult.name}.jpg' alt='Photo of ${plantResult.name}'>
    `;
}

//restart quiz!
const restart = () => {
    //when "start over" button is clicked, forms are cleared and result section reverts to the original:
    answers = [];
    form.reset();
    showResult.style.display = 'block';
    finalResult.innerHTML = '';
    restartButton.style.display = 'none';
    resultBanner.innerHTML = "This way to your perfect plant!";
}

//initialize
const init = () => {
    //Event listeners
    resultButton.addEventListener('click', checkMatch);
    restartButton.addEventListener('click', restart);
}

//document ready :)
document.addEventListener("DOMContentLoaded", function() {
    init();
});

//array of all possible results
const plants = [
    {
        name : 'hibiscus',
        description: "Tropical hibiscus flowers are one of the enduring symbols of the tropics. The trick to success is twofold: managing the deadly winter, and fending off hungry insects. If you can fall into a rhythm, it's possible to keep a hibiscus plant thriving for a decade or more, with blooms in the summer.",
        attributes: ['highSun', 'highTime']
    },
    {
        name : 'croton',
        description: "The croton appears to have it all: colorful foliage, nearly limitless leaf forms, and even a cultish following. The primary challenge when growing them indoors is maintaining the ideal temperature—when it is too cold, they start losing leaves. However, crotons are well worth the effort because well-grown croton is an explosion of color.",
        attributes: ['highSun', 'mediumTime']
    },
    {
        name : 'sansevieria',
        description: "Sansevieria trifasciata (also known as the Snake Plant or Mother-In-Law's Tongue) is one of the most popular and hardy species of houseplants. An architectural species, it features stiff leaves that range from six inches to eight feet tall, depending on the variety. Snake Plants usually have green banded leaves, while the variety commonly known as Mother-In-Law's Tongue typically features a yellow border.",
        attributes: ['highSun', 'lowTime']
    },
    {
        name : 'ficus benjamina',
        description: "Ficus trees are a common plant in the home and office, mainly because they look like a typical tree with a single trunk and a spreading canopy. But for all of their popularity, ficus plants are finicky. However, if you know how to care for a ficus tree, you’ll be better equipped with keeping it healthy and happy in your home for years.",
        attributes: ['mediumSun', 'highTime']
    },
    {
        name : 'fiddle leaf fig',
        description: "The fiddle-leaf fig (Ficus lyrata) is a popular indoor specimen plant featuring very large, heavily veined, violin-shaped leaves that grow upright. They are relatively tough plants that can withstand a less-than-perfect environment for a fairly long time.",
        attributes: ['mediumSun', 'mediumTime']
    },
    {
        name : 'philodendron brasil',
        description: "The Philodendron genus contains some of the most beautiful foliage plants in the plant kingdom. Their glossy leaves add a touch of indoor jungle to your home, reminiscent of the tropical areas of the Americas to which they are native. For indoor use, there are two basic types of philodendrons: the climbing varieties and the self-heading (non-climbing) types. ",
        attributes: ['mediumSun', 'lowTime']
    },
    {
        name : 'calathea',
        description: "The genus Calathea includes some of the most beautiful and striking tropical foliage plants in the world. Calathea species generally have boldly marked, upright, oblong leaves in a dazzling array of colors held on long, upright stalks. Because of the plant's bold markings, it goes by nicknames such as zebra plant, peacock plant, and rattlesnake plant, that reflect that. It is closely related to the similarly gorgeous Maranta.",
        attributes: ['lowSun', 'highTime']
    },
    {
        name : 'asparagus fern',
        description: "The asparagus fern isn’t exactly a common houseplant, but with its feathery, light foliage, it's quite attractive and can be successfully grown indoors. In warmer regions, the fern can be easily adapted to outdoor culture, where it sometimes grows like a creeper and can even become invasive. Indoors, the key to a robust asparagus fern is to keep the plant bushy and dense so its lace-like foliage forms an attractive mound.",
        attributes: ['lowSun', 'mediumTime']
    },
    {
        name : 'alocasia polly',
        description: "Alocasia plants make a statement with their bold, arrow-head shaped leaves and tall stems. Some Alocasia plants can grow to be 8-10 feet tall! Your Alocasia Polly will thrive in a spot with bright,  indirect, filtered light. Never allow this plant to stand in the direct sunlight—the leaves will burn. It can survive in medium light, but avoid a dark corner.",
        attributes: ['lowSun', 'lowTime']
    },
]