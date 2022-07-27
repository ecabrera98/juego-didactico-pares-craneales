// seleccionamos todos los elementos a usar en este código
const start = document.getElementById("start");
const finish = document.getElementById("finish");
const reload = document.getElementById("reload");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// elaboracón del cuestionario de opción múltiple
let questions = [
    {
        question : "1. ¿Cuál es el primer Nervio Craneal?",
        imgSrc : "componentes/img/img1.jpg",
        choiceA :  "A) Olfatorio",
        choiceB :  "B) Óptico",
        choiceC :  "C) Vestibulococlear",
        choiceD :  "D)Facial",
        correct : "A"
    },{
        question : "2. Una Infección de la Mucosa Nasal puede ocasionar Pérdida del Sentido del Olfato. ¿Cómo Se Denomina a esta Pérdida?",
        imgSrc : "componentes/img/img3.jpg",
        choiceA : "A) Anopia",
        choiceB : "B) Ptosis",
        choiceC : "C) Anosmia",
        choiceD : "D) Estrabismo",
        correct : "C"
    },{
        question : "3. Tienen la función de ser Sensitivos y Finalizan en Dos Masas de color gris: ",
        imgSrc : "componentes/img/img3.jpg",
        choiceA : "A) Tractos Olfatorios",
        choiceB : "B) Neuronas",
        choiceC : "C) Epitelio Olfatorio",
        choiceD : "D) Bulbos Olfatorios",
        correct : "D"
    },{
        question : "4. ¿Cómo se llama el Nervio señalado en la Figura?",
        imgSrc : "componentes/img/img4.jpg",
        choiceA : "A) Quiasma Óptico",
        choiceB : "B) Tracto Óptico",
        choiceC : "C) Óptico",
        choiceD : "D) Estrabismo",
        correct : "C"
    },{
        question : "5. ¿Dónde convergen los Dos Nervios Ópticos?",
        imgSrc : "componentes/img/brain12.jpg",
        choiceA : "A) Quiasma",
        choiceB : "B) Tractos Ópticos",
        choiceC : "C) Mesencéfalo",
        choiceD : "D) Cono",
        correct : "A"
    },{
        question : "6. La Ceguera es producida debido a un Defecto en ambos Ojos. ¿A esta pérdida se la conoce cómo?",
        imgSrc : "componentes/img/img7.jpg",
        choiceA : "A) Anacusia",
        choiceB : "B) Anopia",
        choiceC : "C) Queratocono",
        choiceD : "D) Ataxia",
        correct : "B"
    },{
        question : "7. ¿Cómo se divide el Nervio Ocular?",
        imgSrc : "componentes/img/img5.jpg",
        choiceA : "A) Superior E Inferior Y Atraviesa La Fisura Orbitaria Superior Llegando A La Órbita",
        choiceB : "B) Izquierdo Y Derecho Atravesando La Fisura Orbitaria Superior Llegando A La Órbita",
        choiceC : "C) Superior E Inferior Y Llega A La Órbita",
        choiceD : "D) Ninguna de las Anteriores",
        correct : "A"
    },{
        question : "8. ¿Qué controlan las Neuronas Somáticas?",
        imgSrc : "componentes/img/img7.jpg",
        choiceA : "A) Controlan Movimientos Oculares y El Párpado Inferior",
        choiceB : "B) Controlan Movimientos Oculares y Músculo Recto Superior",
        choiceC : "C) Controlan Movimientos Oculares y El Párpado Superior",
        choiceD : "D) Ninguna de las Anteriores",
        correct : "C"
    },{
        question : "9. ¿Cuál es el Nervio Craneal señalado con en la Figura?",
        imgSrc : "componentes/img/img2.jpg",
        choiceA : "A) Oculomotor",
        choiceB : "B) Troclear",
        choiceC : "C) Óptico",
        choiceD : "D) Olfatorio",
        correct : "D"
    },{
        question : "10. ¿Qué Nervio nos ayuda con las expresiones de asombro y sonrisa?",
        imgSrc : "componentes/img/brain3.jpg",
        choiceA : "A) Nervio Facial",
        choiceB : "B) Nervio Trigémino",
        choiceC : "C) Nervio Troclear",
        choiceD : "D) Nervio Olfatorio",
        correct : "A"
    },{
        question : "11. ¿Si decimos que el 8 es un número par, al igual que el 6. ¿Cuál es el número romano impar para el Nervio Facial?",
        imgSrc : "componentes/img/brain5.jpg",
        choiceA : "A) III Nervio Facial",
        choiceB : "B) VII Nervio Facial",
        choiceC : "C) VI Nervio Facial",
        choiceD : "D) IX Nervio Glosofaríngeo ",
        correct : "B"
    },{
        question : "12. ¿Qué Nervio Inerva las vísceras del tórax y abdomen?",
        imgSrc : "componentes/img/img11.jpg",
        choiceA : "A) Nervio Troclear",
        choiceB : "B) Nervio Trigémino",
        choiceC : "C) Nervio Glosofaríngeo",
        choiceD : "D) Nervio Vago",
        correct : "D"
    },{
        question : "13. ¿Qué Nervio interviene al momento de brindar un beso?",
        imgSrc : "componentes/img/brain13.jpg",
        choiceA : "A) Nervio Vago",
        choiceB : "B) Nervio Olfatorio", 
        choiceC : "C) Nervio Facial",
        choiceD : "D) Nervio Abductor",
        correct : "C"
    },{
        question : "14. ¿Qué Nervio se forma de las primeras tres letras de la palabra Abdomen?",
        imgSrc : "componentes/img/brain7.jpg",
        choiceA : "A) Abducens o Vestíbulo Coclear",
        choiceB : "B) Accesorio ",
        choiceC : "C) Vago",
        choiceD : "D) Glosofaríngeo",
        correct : "A"
    },{
        question : "15. ¿Si no escuchamos cuando nos hablan. ¿Qué nervio estaría afectado?",
        imgSrc : "componentes/img/img7.jpg",
        choiceA : "A) Abductor",
        choiceB : "B) Troclear",
        choiceC : "C) Oculomotor",
        choiceD : "D) Vestíbulo Coclear",
        correct : "D"
    },{
        question : "16. ¿Al no haber secreción salival que nervio estaría implicado?",
        imgSrc : "componentes/img/brain5.jpg",
        choiceA : "A) Neumogástrico",
        choiceB : "B) Abductor",
        choiceC : "C) Glosofaríngeo",
        choiceD : "D) Troclear",
        correct : "C"
    },{
        question : "17. ¿Cuál es el nervio que ayuda en el control de la presión arterial?",
        imgSrc : "componentes/img/img8.jpg",
        choiceA : "A) Nervio Vago",
        choiceB : "B) Nervio Glosofaríngeo",
        choiceC : "C) Nervio Accesorio",
        choiceD : "D) Nervio Hipogloso",
        correct : "A"
    },{
        question : "18. ¿Cuál es el motor que Interviene en el funcionamiento de la deglución, tos y habla (Nervio Vago)?",
        imgSrc : "componentes/img/brain4.jpg",
        choiceA : "A) Motor Branquial",
        choiceB : "B) Motor Autónomo",
        choiceC : "C) Motor Espinal",
        choiceD : "D) Motor Hipogloso",
        correct : "A"
    },{
        question : "19. ¿Cuál es el Nervio que Inerva los músculos esternocleidomastoideo y trapecio?",
        imgSrc : "componentes/img/brain5.jpg",
        choiceA : "A) Nervio Facial",
        choiceB : "B) Nervio Hipogloso",
        choiceC : "C) Nervio Accesorio",
        choiceD : "D) Nervio Trigémino",
        correct : "C"
    },{
        question : "20. ¿Cuál es el Nervio que Interviene en la manipulación de alimentos?",
        imgSrc : "componentes/img/img7.jpg",
        choiceA : "A) Nervio Facial",
        choiceB : "B) Nervio Hipogloso",
        choiceC : "C) Nervio Trigémino",
        choiceD : "D) Nervio Vago",
        correct : "B"
    },{
        question : "21. ¿Qué produce una lesión del nervio hipogloso?",
        imgSrc : "componentes/img/brain12.jpg",
        choiceA : "A) Atrofia Esclerosis Muscular",
        choiceB : "B) Esclerosis Muscular Disfagia",
        choiceC : "C) Disartria Disfagia",
        choiceD : "D) Ninguna las Anteriores",
        correct : "C"
    },{
        question : "22. ¿Cuál es el Nervio que se origina en el encéfalo y medula espinal?",
        imgSrc : "componentes/img/img8.jpg",
        choiceA : "A) Nervio Accesorio",
        choiceB : "B) Nervio Abducens",
        choiceC : "C) Nervio Hipogloso",
        choiceD : "D) Nervio Vestibulococlear",
        correct : "A"
    },{
        question : "23. ¿Cuál es el Motor que Realiza el movimiento de la cabeza y cintura escapular. (Nervio Accesorio)?",
        imgSrc : "componentes/img/brain13.jpg",
        choiceA : "A) Motor Espinal",
        choiceB : "B) Motor Branquial",
        choiceC : "C) Motor Autónomo",
        choiceD : "D) Motor Somático",
        correct : "B"
    },{
        question : "24. ¿Cuál de los siguientes Nervios se encarga de la función motora?",
        imgSrc : "componentes/img/img3.jpg",
        choiceA : "A) El Nervio Troclear",
        choiceB : "B) El Nervio Olfatorio",
        choiceC : "C) El Nervio Trigémino",
        choiceD : "D) El Nervio Oculomotor",
        correct : "A"
    },{
        question : "25. ¿Cuál de las ramas del nervio Trigémino lleva información sobre el parpado inferior, la mejilla, la nariz y el labio superior?",
        imgSrc : "componentes/img/img9.jpg",
        choiceA : "A) Nervio Mandibular",
        choiceB : "B) Nervio Maxilar",
        choiceC : "C) Nervio Oftálmico",
        choiceD : "D) Nervio Espinal",
        correct : "B"
    },{
        question : "26. ¿Cuál es el Nervio encargado de los movimientos  de la mandíbula?",
        imgSrc : "componentes/img/img10.jpg",
        choiceA : "A) Nervio Abducens",
        choiceB : "B) Nervio Oculomotor",
        choiceC : "C) Nervio Glosofaríngeo",
        choiceD : "D) Nervio Trigémino",
        correct : "D"
    },{
        question : "27. El Nervio Oftálmico, Nervio maxilar, Nervio Mandibular son las ramas que constituyen el:",
        imgSrc : "componentes/img/img9.jpg",
        choiceA : "A) Nervio Glosofaríngeo",
        choiceB : "B) Nervio Abducens",
        choiceC : "C) Nervio Trigémino",
        choiceD : "D) Nervio Hipogloso",
        correct : "C"
    },{
        question : "28. ¿Cuál es el Nervio que se encuentra en el mesencéfalo caudal, bajo el acueducto cerebral?",
        imgSrc : "componentes/img/img6.jpg",
        choiceA : "A) Accesorio",
        choiceB : "B) Vago",
        choiceC : "C) Troclear",
        choiceD : "D) Óptico",
        correct : "C"
    },{
        question : "29. ¿Cómo se llama el Nervio que controla movimientos oculares, los reflejos fotomotores y la acomodación?",
        imgSrc : "componentes/img/img5.jpg",
        choiceA : "A) Hipogloso",
        choiceB : "B) Espinal",
        choiceC : "C) Óptico",
        choiceD : "D) Abducens",
        correct : "D"
    },{
        question : "30. Aquel Nervio que tiene la función principal del movimiento del músculo recto lateral, lo cual permite la abducción del ojo es: ",
        imgSrc : "componentes/img/img3.jpg",
        choiceA : "A) Nervio Facial",
        choiceB : "B) Nervio Olfatorio",
        choiceC : "C) Nervio Abducens",
        choiceD : "D) Nervio Espinal",
        correct : "C"
    },{
        question : "31. Si no podemos mover la lengua para deglutir.¿Qué nervio se vería afectado? ",
        imgSrc : "componentes/img/brain13.jpg",
        choiceA : "A) Trigémino ",
        choiceB : "B) Facial",
        choiceC : "C) Hipogloso",
        choiceD : "D) Glosofaríngeo",
        correct : "D"
    },{
        question : "32. Aquel Nervio que se origina en  la protuberancia o puente de Varolio es:",
        imgSrc : "componentes/img/brain7.jpg",
        choiceA : "A) Nervio Abducens",
        choiceB : "B) Nervio Vago",
        choiceC : "C) Nervio Espinal",
        choiceD : "D) Nervio Vestibulotroclear",
        correct : "A"
    },{
        question : "33. ¿Cuál es el Nervio que se encarga de la función sensitiva?",
        imgSrc : "componentes/img/brain9.jpg",
        choiceA : "A) Nervio Facial",
        choiceB : "B) Nervio Óptico",
        choiceC : "C) Nervio Vago",
        choiceD : "D) Nervio Trigémino",
        correct : "D"
    },{
        question : "34. Basaándose en el término Neuro-Oftalmología. ¿Cuál es Nervio que se ve afectado con la patología que presenta la parálisis congénita?",
        imgSrc : "componentes/img/brain12.jpg",
        choiceA : "A) Nervio Troclear",
        choiceB : "B) Nervio Accesorio",
        choiceC : "C) Nervio Hipogloso",
        choiceD : "D) Nervio Óptico",
        correct : "A"
    }
];

// creación de variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// método preguntas
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// método iniciar cuestionario
function startQuiz(){
    finish.style.display ="none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,6000); // 1000ms = 1s
}

// método progreso 
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// método evaluación de respuestas correctas e incorrectas

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // progreso en cada pregunta
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // ver nota obtenida
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// método calificar respuestas 

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // si la respuesta es correcta
        score++;
        // se añade el color verde
        answerIsCorrect();
    }else{
        // si la respuesta es incorrecta 
        // se le añade el color rojo
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // nota obtenida
        clearInterval(TIMER);
        scoreRender();
    }
}

// método respuesta correcta
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// método respuesta incorrecta
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// método evaluación
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // choose the image based on the scorePerCent
    let img = (score >= 32) ? "componentes/img/5.png" :
              (score >= 24) ? "componentes/img/4.png" :
              (score >= 16) ? "componentes/img/3.png" :
              (score >= 8) ? "componentes/img/2.png" :
              "componentes/img/1.png";

    let cal = (score >= 32) ? "Sobresaliente" :
              (score >= 24) ? "Muy Bueno" :
              (score >= 16) ? "Regular" :
              (score >= 8) ? "Insatisfactorio" :
              "Insuficiente";
              
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML +="Cuestionario Finalizado ";
    scoreDiv.innerHTML += "<br>"+"Su Desempeño fue : " + cal+"</br>";
    scoreDiv.innerHTML += "Su Calificación es: "
    scoreDiv.innerHTML += "<br>"+" "+ "</br>";
    scoreDiv.innerHTML += "<br>"+ score +"/"+ questions.length +"</br>";
    scoreDiv.innerHTML += "<br>"+"MENU PRINCIPAL"+ "</br>";
    scoreDiv.addEventListener("click",reloadPage);
}

//método volver página principal
function reloadPage(){
    location.reload();
}

//método salir
finish.addEventListener("click",quitPage);
function quitPage(){
    window.close();
}










