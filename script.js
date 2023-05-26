const question = [ 
    {
        question: "The content of the page (such as your pictures, text, links) will show up here.",
        answer: [
            {text: "Head", correct: false},
            {text: "Body", correct: true},
            {text: "Folder", correct: false},
            {text: "Style", correct: false},
        ]
    },

    {
        question: "Web Standards are decided on by who?",
        answer: [
            {text: "Google Ads", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Apple", correct: false},
            {text: "W3C", correct: true},
        ]
    },

    {
        question: "What does HTML stand for?",
        answer: [
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyperlinks and Text Markup Language.", correct: false},
            {text: "HyperText Markup Language", correct: true},
            {text: "Hyperhome Text Markup Language", correct: false},
        ]
    },

    {
        question: "How can a developer show a pop-up message to the user?",
        answer: [
            {text: "console.log", correct: false},
            {text: "alert", correct: true},
            {text: "<p> tag", correct: false},
            {text: "prompt", correct: false},
        ]
    },

    {
        question: "What symbol should you use to target a class name in css?",
        answer: [
            {text: "#", correct: false},
            {text: ".", correct: true},
            {text: "()", correct: false},
            {text: ",", correct: false},
        ]
    },

    {
        question: "What tag do you use to make a numbered list?",
        answer: [
            {text: "ol", correct: true},
            {text: "list", correct: false},
            {text: "li", correct: false},
            {text: "ul", correct: false},
        ]
    },

    {
        question: "How do you change the font color with CSS?",
        answer: [
            {text: "font-color: green;", correct: false},
            {text: "color: green;", correct: true},
            {text: "change-font-color: green;", correct: false},
            {text: "fontcolor=green;", correct: false},
        ]
    },

    {
        question: "Which function among the following lets to register a function to be invoked once?",
        answer: [
            {text: "setInterval()", correct: false},
            {text: "setTimeout()", correct: true},
            {text: "setTotaltime()", correct: false},
            {text: "setTime()", correct: false},
        ]
    },

    {
        question: "Where should you put the link tag to connect your CSS and HTML file?",
        answer: [
            {text: "Between the head and head tag in HTML", correct: false},
            {text: "Between the body and head tag in HTML", correct: true},
            {text: "Between the body and footer tag in HTML", correct: false},
            {text: "None of the above.", correct: false},
        ]
    },

    {
        question: "How are the objects organized in the HTML DOM?",
        answer: [
            {text: "Class-wise", correct: false},
            {text: "Stack", correct: false},
            {text: "Queue", correct: false},
            {text: "Hierarchy", correct: true},
        ]
    },

    {
        question: "What symbol should you use to target an id in css?",
        answer: [
            {text: ".", correct: false},
            {text: "&", correct: false},
            {text: "$", correct: false},
            {text: "#", correct: true},
        ]
    },

    {
        question: "How do I change the size of an image?",
        answer: [
            {text: "border-radius", correct: false},
            {text: "width / height", correct: true},
            {text: "padding", correct: false},
            {text: "box-sizing", correct: false},
        ]
    },

    {
        question: "Which one is the smallest heading?",
        answer: [
            {text: "h6", correct: true},
            {text: "h1", correct: false},
            {text: "h2", correct: false},
            {text: "h5", correct: false},
        ]
    },

    {
        question: "What does CSS stand for? ",
        answer: [
            {text: "Creative Style Sheets", correct: false},
            {text: "Computer Style Spread", correct: false},
            {text: "Cascading Style Sheets", correct: true},
            {text: "Colorful Style Spread", correct: false},
        ]
    },

    {
        question: "To select an element in the DOM with id equal to 'test' we use:",
        answer: [
            {text: "document.get('test')", correct: false},
            {text: "select('#test')", correct: false},
            {text: "document('test')", correct: false},
            {text: "document.getElementById('test')", correct: true},
        ]
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answer: [
            {text: "src", correct: false},
            {text: "alt", correct: true},
            {text: "title", correct: false},
            {text: 'longdesc', correct: false},
        ]
    },

    {
        question: "Which is the most current version of CSS?",
        answer: [
            {text: "CSS1", correct: false},
            {text: "CSS2", correct: false},
            {text: "CSS3", correct: true},
            {text: "CSS4", correct: false},
        ]
    },

    {
        question: "What is the difference between HTML and CSS?",
        answer: [
            {text: "CSS is one type of HTML.", correct: false},
            {text: "HTML gives a webpage structure. CSS provides styling.", correct: true},
            {text: "CSS structures a webpage. HTML strictly provides styling.", correct: false},
            {text: "There is no difference.", correct: false},
        ]
    },

    {
        question: "How can comments be added in a JavaScript code?",
        answer: [
            {text: "//", correct: true},
            {text: "/**/", correct: false},
            {text: "**", correct: false},
            {text: "/", correct: false},
        ]
    },

    {
        question: "When working with color codes RGB stands for...",
        answer: [
            {text: "Green Red Purple", correct: false},
            {text: "Red Grey Blue", correct: false},
            {text: "Red Green Blue", correct: true},
            {text: "Blue Green Pink", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");                        // QuestionElement'i question id'li sorulara tanımladık
const answerButton = document.getElementById("answer-button");                      // answerButton'u answer-button id'li cevaplara tanımladık
const nextButton = document.getElementById("next-btn");                             // nextButton'u next-btn id'li devam et buttonuna tanımladık

let currentQuestionIndex = 0;                                                       // currentQuestionIndex, soruların indexi (kaçıncı soru diye) olsun, ve değeri başlangıçta 0 olsun
let score = 0;                                                                      // score, toplam puan olsun, ve değeri başlangıçta 0 olsun

function startQuiz(){                                                               // Quizi başla fonskiyonu
    currentQuestionIndex = 0;                                                       // Başlangıçta ilk soru görünsün
    score = 0;                                                                      // Başlangıçta toplam puan 0 olsun
    nextButton.innerHTML = "Next";                                                  // Next Buttonun ismini belirliyoruz
    showQuestion();                                                                 // Soruları göster fonksiyonunu çalıştırıyoruz
};

function showQuestion(){                                                            // Soruları göster fonskiyonu
    resetState();                                                                   // Daha önceki soruları ve cevapları sıfırla fonskiyonunu çalıştırıyoruz, başlangıçta yeni soru ve yeni cevaplar gelsin
    let currentQuestion = question[currentQuestionIndex];                           // currentQuestion güncel soru olsun, ve sorunun ta kendisini ve sorunun indexini barındırsın
    let questionNo = currentQuestionIndex + 1;                                      // questionNo, yanlış cevap olsun, ve güncel sorunun indexini bulundurur ve sonraki soruya geçmek için +1 olsun
    questionElement.innerHTML = questionNo + ".   " + currentQuestion.question;      // Soruların başına güncel soru indexi + 1 ekliyoruz, ardından . ekliyoruz. Ve her soruda güncelleniyor bu

    currentQuestion.answer.forEach(answer => {                                      // currentQuestionun (güncel soru + soru indexi) cevapları ....
        const button = document.createElement("button");                            // Bir HTML nesnesini oluşturalım, ismi "button" olsun
        button.innerHTML = answer.text;                                             // Yarratığımız HTML nesnesi "button"'nun cevapları text olarak gelsinler 
        button.classList.add("btn");                                                // HTML nesnesine "button"'a, classList methodu ile daha önce css'te yazdığımız "btn" özelliklerini ekleyelim
        answerButton.appendChild(button);                                           // cevaplara "button" nesnesini ve özelliklerini ekle
        if(answer.correct){                                                         // eğer cevap doğruysa 
            button.dataset.correct = answer.correct;                                // button nesnesinin (css özellikler) doğru olduğunu varsay,ve cevap correct olsun (yeşile dönsün-css özellikler vs)
        }
        button.addEventListener("click", selectAnswer);                             // cevap buttonuna tıklandında, selectAnswer fonksiyonu çalışsın
    });
};

function resetState(){                                                              //önceki soruları ve cevapları temizle, yeni sorulara ve cevaplara geç fonskiyonu
    nextButton.style.display = "none";                                              // Yeni soru ve cevaplar geldiğinde, "Next" buttonu gözükmesin
    while(answerButton.firstChild){                                                 // Cevpların ilk elemanından başlayarak döndürür
        answerButton.removeChild(answerButton.firstChild);                          // Yanlış cevabı bulana kadar 
    }
};

function selectAnswer(e){                                                           // Cevapları seç fonskiyonu
    const selectBtn = e.target;                                                     // Buttona (cevap buttonuna) tıklandığına buttonun nasıl tepki vereceğine belirleyen bir satır
    const isCorrect = selectBtn.dataset.correct === "true";                         // Cevap doğruysa eğer (isCorrect), selectBtn (cevap buttonu) true dönsün, yani "correct: true" olsun
    if (isCorrect){                                                                 // eğer isCorrect(doğru cevap)
        selectBtn.classList.add("correct");                                         // selectBtn (cevap buttonuna) buttonuna css ile daha önce belirlenmiş "correct" özelliklerini ekle (yeşile dönsün)
        score++;                                                                    // ve kullanıcının güncel puanına +1 puan eklensin (10 puanı vardır, doğru cevap ile + 1 olsun = 11)
    }else{                                                                          // eğer cevap yanlışsa
        selectBtn.classList.add("incorrect");                                       // selectionBtn buttonuna daha önce css ile belirlenmiş "incorrect" özelliklerini ekle (kırmııya dönsün)
    }
    Array.from(answerButton.children).forEach(button =>{                            // Cevap buttonun, cevaplarını al (answer-buttonun elemantlarını) ve buttonun HTML ve css özelliklerini döndür
        if(button.dataset.correct === "true"){                                      // eğer buttona basıldığında cevap doğruysa, değer "true" dönsün 
            button.classList.add("correct");                                        //buttona daha öncec yazdığımız ccs "correct" özellikleri ekle (yeşile dönsün)
        }
        button.disabled = true;                                                     // button cevaplamadan gözükmesin
    });
    nextButton.style.display = "block";                                             //cevapladıktan sonra Next Buttonu gözükmeye başlasın
}

function showScore(){                                                               // Quiz bittikten sonra topladığımız puan ve toplam alabileceiğimiz puan gözüksün
    resetState();                                                                   // önceki soruları ve cevapları temizle fonksiyonu çalışsın
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;   // soruların geldiği yere, bu sefer bu satırda belirttiğimiz yazı ve değerler gelsin
    nextButton.innerHTML = "Play Again!";                                           // Next buttonun "Next" yasızı yerine "Play Again" yazısı gözüksün
    nextButton.style.display = "block";                                             // Next buttonu sabit kalsın
}

function handleNextButton(){                                                        // Next Buttonu işle fonksiyonu
    currentQuestionIndex++;                                                         // Güncel soru indexini al ve + 1 ekle 
    if (currentQuestionIndex < question.length){                                    // eğer güncel sorunun indexi toplam soruların uzunluğundan daha az ise
        showQuestion();                                                             // soruları devam ettir
    }else{                                                                          // değilse
        showScore();                                                                // Quizde aldığın puanı ve toplam puanı göster
    }
}

nextButton.addEventListener("click", ()=>{                                          // next buttonuna tıklandığında, "click" haraketini ekle
    if(currentQuestionIndex < question.length){                                     // eğer güncel sorunun indexi toplam soruların uzunluğundan daha az ise
        handleNextButton();                                                         // next buttonu işle fonskiyonu çalışsın (ya devam et soruları göstermeye ya da sonuç puanlarını göster fonksiyonu)
    }else{                                                                          //değilse
        startQuiz();                                                                // Quize tekrardan başla fonsksiyonunu çalıştır
    }
});


startQuiz();                                                                        //quize başla fonksiyonunu çalıştır