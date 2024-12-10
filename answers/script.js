const questions = [
    {
        "question": "Можно ли использовать отрицательные индексы для доступа к элементам статического массива?",
        "answers": [
            "Да, отрицательные индексы допустимы и ссылаются на элементы массива с конца.",
            "Нет, компилятор выдает ошибку при использовании отрицательных индексов.",
            "Да, но только если массив определен глобально.",
            "Да, отрицательные индексы можно использовать, но они обращаются к памяти за пределами массива, что приводит к неопределенному поведению, что может привести к ошибкам компиляции."
        ],
        "correct": 3
    },
    {
        "question": " Какой будет результат выполнения следующего кода:\nint arr[5];\narr[5] = 10\n?",
        "answers": [
            "Код сгенерирует ошибку компиляции, так как индекс 5 выходит за пределы массива.",
            "Код записывает значение 10 в память за пределами массива, что может привести к неопределенному поведению.",
            "Программа завершится аварийно, поскольку доступ за пределы массива запрещен.\nКод выведет сообщение об ошибке выполнения на этапе исполнения программы.",
            "Код выведет сообщение об ошибке выполнения на этапе исполнения программы.",
            "Значение 10 будет записано в последний элемент массива."
        ],
        "correct": 1
    },
    {
        "question": "Как узнать текущий размер динамического массива в языке C?",
        "answers": [
            "Использовать функцию sizeof(arr) / sizeof(arr[0]).",
            "Использовать стандартную библиотечную функцию malloc_size(arr).",
            "Хранить размер массива отдельно и обращаться к этой переменной.",
            "Нельзя узнать размер динамического массива напрямую, нужно самостоятельно сохранять его размер при выделении памяти.",
            "Использовать функцию get_size(arr) из стандартной библиотеки C."
        ],
        "correct": 3
    },
    {
        "question": "Можно ли использовать переменную для задания размера статического массива?",
        "answers": [
            "Да, это стандартная возможность языка C.",
            "Нет, размер статического массива должен быть известен на этапе компиляции, поэтому использовать переменную нельзя.",
            "Да, если переменная объявлена как const.",
            "Да, но только начиная с стандарта C99.",
            "Нет, так как это не поощряется сообществом программистов и нарушает правила хорошего кода."
        ],
        "correct": 1
    },
    {
        "question": "Можно ли использовать функцию calloc для выделения памяти под статический массив в языке C?",
        "answers": [
            "Да, функция calloc специально предназначена для выделения памяти под статические массивы.",
            "Нет, потому что calloc используется только для динамических массивов.",
            "Нет, статические массивы выделяются на этапе компиляции, а calloc используется для динамической памяти во время выполнения.",
            "Да, но только если массив создается внутри функции."
        ],
        "correct": 2
    },
    {
        "question": "Как выделить память под одномерный динамический массив длины length с использованием функции malloc?",
        "answers": [
            "malloc(sizeof(arr) * length);",
            "malloc(sizeof(int) + length);",
            "malloc(length * sizeof(int));",
            "malloc(sizeof(int[length]));",
            "malloc(length * sizeof(char));"
        ],
        "correct": 2
    },
    {
        "question": "Какие различия между функциями malloc и calloc при выделении динамической памяти?",
        "answers": [
            "malloc выделяет память, а calloc очищает уже выделенную память.",
            "malloc выделяет память с инициализацией нулями, а calloc оставляет память неинициализированной.",
            "malloc выделяет память без инициализации, а calloc выделяет и инициализирует её нулями.",
            "calloc всегда быстрее, чем malloc, из-за инициализации памяти.",
            "Различий нет, это две разные реализации одной и той же функции из разных стандартов языка Си."
        ],
        "correct": 2
    },
    {
        "question": "Как проверить, успешно ли была выделена память с использованием функции malloc?",
        "answers": [
            "Проверить, вернула ли malloc значение NULL.",
            "Использовать операцию if (ptr != NULL) после вызова malloc().",
            "Проверить, равен ли ptr нулю.",
            "Проверить, был ли установлен флаг ошибки в errno.",
            "Использовать функцию sizeof() для проверки успешности выделения памяти."
        ],
        "correct": 1
    },
    {
        "question": "Почему при работе с динамическим массивом рекомендуется использовать calloc вместо malloc для инициализации памяти?",
        "answers": [
            "calloc инициализирует выделенную память нулями, что упрощает работу с памятью.",
            "calloc автоматически заполняет нулями выделенную память, предотвращая неинициализированные значения.",
            "calloc быстрее, чем malloc, так как сразу заполняет память нулями.",
            "malloc нельзя использовать для инициализации памяти, в отличие от calloc."
        ],
        "correct": 1
    },
    {
        "question": "Надо ли проверять память на NULL перед тем как её освободить функцией free?",
        "answers": [
            "Нет, free безопасно обработает NULL и не вызовет ошибку.",
            "Да, рекомендуется проверять указатель на NULL, чтобы избежать ошибок при освобождении памяти.",
            "Нет, это не требуется, так как free проигнорирует NULL и просто ничего не освободит.",
            "Не нужно проверять NULL, если память выделена с использованием calloc."
        ],
        "correct": 2
    },
    {
        "question": "Какой заголовочный файл нужно подключить для malloc / calloc?",
        "answers": [
            "malloc.h",
            "stdlib.h",
            "memory.h",
            "alloc.h",
            "miem.h"
        ],
        "correct": 1
    },
    {
        "question": "Что возвращают функции malloc, calloc?",
        "answers": [
            "malloc и calloc возвращают указатель на выделенную память типа void*, что требует явного приведения к типам (int*, char* и т.д.).",
            "Возвращают указатель на типизированную память (int*, char* и т.д.), тип вычисляется автоматически.",
            "Возвращают указатель на массив.",
            "Возвращают указатель на адрес выделенной памяти в стеке.",
            "Возвращают указатель на всю программу."
        ],
        "correct": 0
    },
    {
        "question": "Что делает оператор sizeof, примененный к массиву?",
        "answers": [
            "Возвращает размер в байтах типа данных в этом массиве.",
            "Возвращает длину массива.",
            "Возвращает общее количество байтов в массиве – количество элементов на размер типа.",
            "Применение оператора sizeof недопустимо к массивам, только к типам данных."
        ],
        "correct": 2
    }, 
    {
        "question": "Запишите формулу, как можно обратиться к элементу двумерного статичного массива A[i][j], где А – адрес начала массива, количество столбцов = COLS, рядов = ROWS.",
        "answers": [
            "A + i * ROWS + j",
            "A[i * COLS + j]",
            "*(A + j * COLS + i)",
            "*(A + i * COLS + j)",
            "A[i][j]"
        ],
        "correct": 3
    },
           
];

function toggleAnswers(element) {
    const answersDiv = element.nextElementSibling;
    if (answersDiv.style.display === "block") {
        answersDiv.style.display = "none";
    } else {
        answersDiv.style.display = "block";
    }
}

function getRandomQuestions(count) {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, count);
}

function createQuestion(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionTitle.classList.add('question-title');
    questionTitle.onclick = () => toggleAnswers(questionTitle);
    
    const answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');
    question.answers.forEach((answer, i) => {
        const answerDiv = document.createElement('div');
        answerDiv.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${answer}`;
        answersDiv.appendChild(answerDiv);
    });
    
    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(answersDiv);
    document.getElementById('questions').appendChild(questionDiv);
}

function checkAnswers() {
    let correctCount = 0;
    
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name=q${index}]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === question.correct) {
            correctCount++;
        }
    });
    
    const attemptedQuestionsCount = questions.filter((_, index) => {
        return document.querySelector(`input[name=q${index}]:checked`);
    }).length;
    
    document.getElementById('result').textContent = `Вы ответили правильно на ${correctCount} вопросов(а) из ${attemptedQuestionsCount}.`;
}


const randomQuestions = getRandomQuestions(3);
randomQuestions.forEach((question, index) => {
    createQuestion(question, index);
});

