
function nextQuestion(currentQuestion) {
   
    const currentElement = document.getElementById(`pergunta${currentQuestion}`);
    const nextElement = document.getElementById(`pergunta${currentQuestion + 1}`);

   
    currentElement.classList.remove('active');

   
    if (nextElement) {
        nextElement.classList.add('active');
    } else {
        
        calculateResult();
    }
}






function calculateResult() {
    const results = {
        azulrusso: 0,
        siames: 0,
        mainecoon: 0,
        persa: 0
    };

    const questions = document.querySelectorAll('input[type="radio"]:checked');

    questions.forEach((answer) => {
        results[answer.value]++;
    });

    let highestCount = 0;
    let finalResult = '';

    // Verificando cada raça de gato com if
    if (results.azulrusso > highestCount) {
        highestCount = results.azulrusso;
        finalResult = 'azulrusso';
    }
    if (results.siames > highestCount) {
        highestCount = results.siames;
        finalResult = 'siames';
    }
    if (results.mainecoon > highestCount) {
        highestCount = results.mainecoon;
        finalResult = 'mainecoon';
    }
    if (results.persa > highestCount) {
        highestCount = results.persa;
        finalResult = 'persa';
    }

    window.location.href = `resultado.html?resultado=${finalResult}`;
}




function shuffleOptions(questionId) {
    const optionsContainer = document.getElementById(`options${questionId}`);
    const options = Array.from(optionsContainer.children);
    
    // Embaralha as opções
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Remove as opções atuais do DOM
    optionsContainer.innerHTML = '';

    // Adiciona as opções embaralhadas de volta ao DOM
    options.forEach(option => optionsContainer.appendChild(option));
}



function startQuiz() {
    // Embaralha as opções de cada pergunta
    for (let i = 1; i <= 7; i++) { // Supondo que você tenha 7 perguntas
        shuffleOptions(i);
    }

    // Outras inicializações do quiz, se necessário
}

// Chame a função startQuiz quando o quiz for iniciado
startQuiz();




function playMusic() {
    const music = document.getElementById("background-music");
    music.play().catch(error => {
        console.log("Erro ao tentar reproduzir a música: ", error);
    });
}


window.onload = function() {
    playMusic();
};