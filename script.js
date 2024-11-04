// script.js

// Load the score from localStorage when the page loads
let score = parseFloat(localStorage.getItem('score')) || 0.00;
document.getElementById('score').textContent = `₱${score.toFixed(2)}`;

// Function to update the score
function updateScore(points) {
    score += points;
    localStorage.setItem('score', score); // Save the updated score to localStorage
    document.getElementById('score').textContent = `₱${score.toFixed(2)}`;
}

const questions = [
    { question: "What is the capital city of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo", difficulty: "hard", score: 0.05 },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars", difficulty: "hard", score: 0.05 },
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: "William Shakespeare", difficulty: "hard", score: 0.05 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean", difficulty: "hard", score: 0.05 },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Iron"], answer: "Oxygen", difficulty: "hard", score: 0.05 },
    { question: "What is the value of π (pi) to two decimal places?", options: ["2.14", "3.14", "3.41", "3.24"], answer: "3.14", difficulty: "medium", score: 0.03 },
    { question: "What is 12 multiplied by 11?", options: ["132", "124", "112", "134"], answer: "132", difficulty: "medium", score: 0.03 },
    // (Continue with each question, ensuring "score" is included)
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12", difficulty: "medium", score: 0.03 },
    { question: "If x + 3 = 10, what is the value of x?", options: ["7", "8", "6", "9"], answer: "7", difficulty: "medium", score: 0.03 },
    { question: "What is the value of 5 factorial (5!)?", options: ["120", "100", "60", "30"], answer: "120", difficulty: "medium", score: 0.03 },
    { question: "What is the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], answer: "Photosynthesis", difficulty: "easy", score: 0.01 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Quartz"], answer: "Diamond", difficulty: "easy", score: 0.01 },
    { question: "What is the primary gas found in the Earth’s atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Nitrogen", difficulty: "easy", score: 0.01 },
    { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "80°C"], answer: "100°C", difficulty: "easy", score: 0.01 },
    { question: "What type of bond involves the sharing of electron pairs between atoms?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: "Covalent", difficulty: "easy", score: 0.01 },
    { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful", difficulty: "easy", score: 0.01 },
    { question: "Which of the following is a correctly spelled word?", options: ["Definately", "Definitely", "Definately", "Definatly"], answer: "Definitely", difficulty: "easy", score: 0.01 },
    { question: "What is the past tense of 'go'?", options: ["Goes", "Going", "Went", "Gone"], answer: "Went", difficulty: "easy", score: 0.01 },
    { question: "Which word is an antonym of 'difficult'?", options: ["Tough", "Easy", "Hard", "Challenging"], answer: "Easy", difficulty: "easy", score: 0.01 },
    { question: "What is a noun?", options: ["A word that describes an action", "A person, place, thing, or idea", "A word that connects phrases", "A type of adjective"], answer: "A person, place, thing, or idea", difficulty: "easy", score: 0.01 },
    { question: "Who directed the movie 'Titanic'?", options: ["Steven Spielberg", "James Cameron", "Martin Scorsese", "Christopher Nolan"], answer: "James Cameron", difficulty: "hard", score: 0.05 },
    { question: "In which movie does the character 'Darth Vader' appear?", options: ["Star Trek", "Star Wars", "The Matrix", "Avatar"], answer: "Star Wars", difficulty: "medium", score: 0.03 },
    { question: "What is the highest-grossing film of all time (as of 2021)?", options: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: "Avatar", difficulty: "medium", score: 0.03 },
    { question: "Which animated movie features a clownfish named Marlin?", options: ["Finding Nemo", "The Little Mermaid", "Finding Dory", "Shark Tale"], answer: "Finding Nemo", difficulty: "easy", score: 0.01 },
    { question: "Who played the character of Jack Dawson in 'Titanic'?", options: ["Johnny Depp", "Brad Pitt", "Leonardo DiCaprio", "Tom Cruise"], answer: "Leonardo DiCaprio", difficulty: "medium", score: 0.03 },
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: "George Washington", difficulty: "easy", score: 0.01 },
    { question: "Which ancient civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Mayans"], answer: "Egyptians", difficulty: "medium", score: 0.03 },
    { question: "What year did World War II begin?", options: ["1939", "1941", "1945", "1936"], answer: "1939", difficulty: "easy", score: 0.01 },
    { question: "Who was known as the 'Iron Lady'?", options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"], answer: "Margaret Thatcher", difficulty: "medium", score: 0.03 },
    { question: "What was the main cause of the French Revolution?", options: ["Economic Inequality", "World War I", "The Rise of Communism", "Industrialization"], answer: "Economic Inequality", difficulty: "medium", score: 0.03 },
    { question: "What is the largest continent on Earth?", options: ["Africa", "Asia", "Europe", "North America"], answer: "Asia", difficulty: "easy", score: 0.01 },
    { question: "Which gas is most abundant in the Earth’s atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen", difficulty: "easy", score: 0.01 },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci", difficulty: "medium", score: 0.03 },
    { question: "In what year did the Titanic sink?", options: ["1912", "1905", "1920", "1915"], answer: "1912", difficulty: "easy", score: 0.01 },
    { question: "What is the term for a story’s underlying message or lesson?", options: ["Theme", "Plot", "Character", "Setting"], answer: "Theme", difficulty: "medium", score: 0.03 },
    { question: "What is the freezing point of water in Celsius?", options: ["0°C", "32°C", "100°C", "-10°C"], answer: "0°C", difficulty: "easy", score: 0.01 },
    { question: "What has keys but can’t open locks?", options: ["Door", "Book", "Piano", "House"], answer: "Piano", difficulty: "medium" },
    { question: "What has to be broken before you can use it?", options: ["Glass", "Egg", "Pen", "Stick"], answer: "Egg", difficulty: "hard", score: 0.05 },
    { question: "I have branches, but no fruit, trunk, or leaves. What am I?", options: ["River", "Library", "Bank", "Computer"], answer: "Bank", difficulty: "hard", score: 0.05 },
    { question: "What is the value of 8 squared?", options: ["64", "32", "16", "56"], answer: "64", difficulty: "hard", score: 0.05 },
    { question: "What is the sum of angles in a triangle?", options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"], answer: "180 degrees", difficulty: "hard", score: 0.05 },
    { question: "If you have a dozen eggs, how many eggs do you have?", options: ["10", "12", "14", "16"], answer: "12", difficulty: "hard", score: 0.05 },
    { question: "What is the next prime number after 7?", options: ["9", "10", "11", "12"], answer: "11", difficulty: "hard", score: 0.05 },
    { question: "What can travel around the world while staying in a corner?", options: ["Clock", "Map", "Stamp", "Letter"], answer: "Stamp", difficulty: "medium", score: 0.03 },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au", difficulty: "medium", score: 0.03 },
    { question: "Which organ in the human body is responsible for pumping blood?", options: ["Brain", "Lungs", "Heart", "Liver"], answer: "Heart", difficulty: "medium", score: 0.03 },
    { question: "What part of the plant conducts photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flowers"], answer: "Leaves", difficulty: "easy", score: 0.01 },
    { question: "Which type of animal is a dolphin?", options: ["Fish", "Reptile", "Mammal", "Amphibian"], answer: "Mammal", difficulty: "easy", score: 0.01 },
    { question: "What is H2O commonly known as?", options: ["Hydrogen", "Water", "Oxygen", "Helium"], answer: "Water", difficulty: "easy", score: 0.01 },
    { question: "What is the capital city of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo", difficulty: "hard", score: 0.05 },
    { question: "What is the opposite of 'generous'?", options: ["Kind", "Selfish", "Caring", "Helpful"], answer: "Selfish", difficulty: "easy", score: 0.01 },
    { question: "Which of the following is a synonym for 'quick'?", options: ["Slow", "Fast", "Gradual", "Lazy"], answer: "Fast", difficulty: "easy", score: 0.01 },
    { question: "What is the term for a word that has the same meaning as another word?", options: ["Antonym", "Synonym", "Homonym", "Adjective"], answer: "Synonym", difficulty: "easy", score: 0.01 },
    { question: "Which punctuation mark is used to indicate a question?", options: ["Period", "Comma", "Exclamation point", "Question mark"], answer: "Question mark", difficulty: "easy", score: 0.01 },
    { question: "What is the past tense of 'speak'?", options: ["Spoke", "Speak", "Spoked", "Speaking"], answer: "Spoke", difficulty: "hard", score: 0.05 },
    { question: "Who played the character of Harry Potter?", options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"], answer: "Daniel Radcliffe", difficulty: "hard", score: 0.05 },
    { question: "What animated film features a young girl named Mulan?", options: ["Aladdin", "Mulan", "Beauty and the Beast", "Cinderella"], answer: "Mulan", difficulty: "hard", score: 0.05 },
    { question: "Who directed the film 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], answer: "Christopher Nolan", difficulty: "hard", score: 0.05 },
    { question: "In which movie does the character 'Forrest Gump' appear?", options: ["The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "Goodfellas"], answer: "Forrest Gump", difficulty: "hard", score: 0.05 },
    { question: "What is the highest-grossing animated film of all time (as of 2021)?", options: ["The Lion King", "Frozen II", "Frozen", "Toy Story 4"], answer: "Frozen", difficulty: "hard", score: 0.05 },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"], answer: "Neil Armstrong", difficulty: "easy", score: 0.01 },
    { question: "What year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: "1989", difficulty: "easy", score: 0.01 },
    { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"], answer: "Margaret Thatcher", difficulty: "easy", score: 0.01 },
    { question: "What was the main cause of the American Civil War?", options: ["Taxation", "Slavery", "Territory", "Trade"], answer: "Slavery", difficulty: "easy", score: 0.01 },
    { question: "Which empire was known for its extensive road system?", options: ["Roman Empire", "Ottoman Empire", "British Empire", "Byzantine Empire"], answer: "Roman Empire", difficulty: "easy", score: 0.01 },
    { question: "What is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Orca"], answer: "Blue Whale", difficulty: "easy", score: 0.01 },
    { question: "Which vitamin is known as the 'sunshine vitamin'?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: "Vitamin D", difficulty: "medium", score: 0.03 },
    { question: "Who invented the telephone?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"], answer: "Alexander Graham Bell", difficulty: "medium", score: 0.03 },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], answer: "Canberra", difficulty: "hard", score: 0.05 },
    { question: "Who was the famous civil rights leader known for his 'I Have a Dream' speech?", options: ["Nelson Mandela", "Martin Luther King Jr.", "Malcolm X", "Rosa Parks"], answer: "Martin Luther King Jr.", difficulty: "easy", score: 0.01 },
    { question: "What is the hardest natural mineral?", options: ["Quartz", "Diamond", "Ruby", "Sapphire"], answer: "Diamond", difficulty: "easy", score: 0.01 },
    { question: "Which planet is known for its rings?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], answer: "Saturn", difficulty: "easy", score: 0.01 },
    { question: "What is the boiling point of water in Fahrenheit?", options: ["212°F", "100°F", "32°F", "180°F"], answer: "212°F", difficulty: "easy", score: 0.01 },
    { question: "Which country is known for its maple syrup?", options: ["United States", "Canada", "Germany", "France"], answer: "Canada", difficulty: "easy", score: 0.01 },
    { question: "Who wrote the novel '1984'?", options: ["Aldous Huxley", "George Orwell", "F. Scott Fitzgerald", "Mark Twain"], answer: "George Orwell", difficulty: "easy", score: 0.01 },
    { question: "What is the primary function of red blood cells?", options: ["Immune response", "Transport oxygen", "Clotting", "Digestion"], answer: "Transport oxygen", difficulty: "easy", score: 0.01 },
    { question: "Which instrument measures atmospheric pressure?", options: ["Barometer", "Thermometer", "Anemometer", "Hydrometer"], answer: "Barometer", difficulty: "medium", score: 0.03 },
    { question: "What is the name of the largest desert in the world?", options: ["Sahara Desert", "Antarctic Desert", "Arabian Desert", "Gobi Desert"], answer: "Antarctic Desert", difficulty: "medium", score: 0.03 },
    { question: "Who is the author of the Harry Potter series?", options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Philip Pullman"], answer: "J.K. Rowling", difficulty: "hard", score: 0.05 },
    { question: "What is the primary language spoken in Egypt?", options: ["Arabic", "English", "French", "Greek"], answer: "Arabic", difficulty: "easy", score: 0.01 },
    { question: "What is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia", difficulty: "easy", score: 0.01 },
    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York City", "San Francisco"], answer: "New York City", difficulty: "easy", score: 0.01 },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Lime"], answer: "Avocado", difficulty: "easy", score: 0.01 },
    { question: "Who painted the Starry Night?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Vincent van Gogh", difficulty: "medium", score: 0.03 },
    { question: "The more you take, the more you leave behind. What am I?", options: ["Steps", "Sand", "Water", "Air"], answer: "Steps", difficulty: "medium", score: 0.03 },
    { question: "What is 30 divided by 5?", options: ["4", "5", "7", "6"], answer: "6", difficulty: "easy", score: 0.01 },
    { question: "I am light as a feather, yet the strongest man can’t hold me for more than a few minutes. What am I?", options: ["Feather", "Air", "Breath", "Whisper"], answer: "Breath", difficulty: "medium", score: 0.03 },
    { question: "What is the area of a rectangle with a length of 10 and a width of 5?", options: ["50", "15", "30", "25"], answer: "50", difficulty: "medium", score: 0.03 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "hard", score: 0.05 },
    { question: "What is the value of 7 multiplied by 6?", options: ["42", "36", "48", "54"], answer: "42", difficulty: "easy", score: 0.01 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: "Mitochondria", difficulty: "hard", score: 0.05 },
    { question: "What gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", difficulty: "hard", score: 0.05 },
    { question: "Which planet is known as the ‘Red Planet’?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars", difficulty: "hard", score: 0.05 },
    { question: "What type of bond involves the sharing of electron pairs between atoms?", options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"], answer: "Covalent bond", difficulty: "hard", score: 0.05 },
    { question: "Which vitamin is primarily obtained from sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: "Vitamin D", difficulty: "hard", score: 0.05 },
    { question: "What is the plural form of 'child'?", options: ["Childs", "Children", "Childes", "Childer"], answer: "Children", difficulty: "hard", score: 0.05 },
    { question: "Which of the following is a compound word?", options: ["Sunshine", "Happy", "Quickly", "Strong"], answer: "Sunshine", difficulty: "easy", score: 0.05 },
    { question: "What is the main theme of a story?", options: ["The setting", "The plot", "The central idea", "The characters"], answer: "The central idea", difficulty: "hard", score: 0.05 },
    { question: "What is an antonym of 'happy'?", options: ["Joyful", "Sad", "Excited", "Cheerful"], answer: "Sad", difficulty: "hard", score: 0.05 },
    { question: "Which word means to express or convey a thought?", options: ["Communicate", "Communicate", "Communicate", "Communicate"], answer: "Communicate", difficulty: "hard", score: 10 },
];

let currentScore = 0;
let currentQuestionIndex = -1;
let timer;

document.getElementById("play-btn").addEventListener("click", startGame);
document.getElementById("try-again-btn").addEventListener("click", resetGame);
document.getElementById("back-btn").addEventListener("click", goBack);

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    updateScore();
    loadNextQuestion();
}

function goBack() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    resetGame();
}

function loadNextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    shuffleArray(question.options).forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    if (selected === question.answer) {
        currentScore += question.difficulty === "easy" ? 0.01 : 0.05;
        updateScore();
        loadNextQuestion();
    } else {
        endGame("Wrong Answer");
    }
}

function startTimer() {
    clearInterval(timer);
    let timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame("Times Up");
        }
    }, 1000);
}

function endGame(message) {
    clearInterval(timer);
    document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "block";
}

function resetGame() {
    document.getElementById("popup").style.display = "none";
    loadNextQuestion();
}

function updateScore() {
    const formattedScore = currentScore.toFixed(2);
    document.getElementById("score").textContent = formattedScore;
    document.getElementById("quiz-score").textContent = formattedScore; // Update quiz screen score
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
