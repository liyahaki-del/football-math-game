const topics = [
  {
    id: 1, section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", title: "Среднее арифметическое",
    explain: "Чтобы найти среднее арифметическое, сложи все числа и раздели сумму на их количество.",
    hint: "Сложи 2, 1 и 0 голов, а потом раздели на число матчей — их три.",
    question: "Команда забила 2, 1 и 0 голов в трёх матчах. Сколько голов в среднем за матч?",
    answers: ["1"]
  },
  {
    id: 2, section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", title: "Проценты",
    explain: "Процент — это одна сотая часть целого. Например, 20% = 20/100 = 1/5.",
    hint: "Найди одну пятую от 50: раздели 50 на 5.",
    question: "Билет на матч стоит 50 рублей. Сколько рублей составляют 20% этой цены?",
    answers: ["10", "10 рублей"]
  },
  {
    id: 3, section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", title: "Представление данных в круговых диаграммах",
    explain: "В круговой диаграмме целый круг показывает всё количество, а сектор — его часть. Чтобы найти часть, умножь целое на долю.",
    hint: "25% — это четверть круга. Найди четверть от 80 болельщиков.",
    question: "На диаграмме четверть круга соответствует болельщикам одной команды. Всего болельщиков 80. Сколько их у этой команды?",
    answers: ["20", "20 болельщиков"]
  },
  {
    id: 4, section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", title: "Виды треугольников",
    explain: "Треугольник с двумя равными сторонами называется равнобедренным. С тремя равными — равносторонним.",
    hint: "Вспомни название треугольника, у которого равны две стороны.",
    question: "У треугольника две стороны одинаковой длины. Как он называется?",
    answers: ["равнобедренный", "равнобедренный треугольник"]
  },
  {
    id: 5, section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", title: "Понятие множества",
    explain: "Множество — это набор объектов, объединённых общим признаком. Например, множество чётных чисел меньше 7: {2, 4, 6}.",
    hint: "Перечисли чётные числа меньше 7: 2, 4 и 6. Сколько их?",
    question: "Сколько чётных натуральных чисел меньше 7 входит в множество {2, 4, 6}?",
    answers: ["3", "три"]
  },
  {
    id: 6, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Разложение числа на простые множители",
    explain: "Разложить число на простые множители — значит представить его произведением простых чисел. Простые числа делятся без остатка только на 1 и на себя.",
    hint: "30 делится на 2: 30 = 2 × 15. А 15 разложи на 3 × 5.",
    question: "Разложи число 30 на простые множители. Запиши, например: 2×3×5.",
    answers: ["2x3x5", "2*3*5", "2·3·5", "2 × 3 × 5", "2 3 5"]
  },
  {
    id: 7, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Наибольший общий делитель. Взаимно простые числа",
    explain: "НОД — наибольший общий делитель чисел. Если НОД равен 1, числа называются взаимно простыми.",
    hint: "У 18 делители: 1, 2, 3, 6, 9, 18. У 35: 1, 5, 7, 35. Общий только один.",
    question: "Найди НОД чисел 18 и 35.",
    answers: ["1", "один"]
  },
  {
    id: 8, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Наименьшее общее кратное натуральных чисел",
    explain: "НОК — наименьшее натуральное число, которое делится на каждое из данных чисел.",
    hint: "Выпиши кратные 8: 8, 16, 24… Какое из них делится на 6?",
    question: "Найди НОК чисел 6 и 8.",
    answers: ["24", "двадцать четыре"]
  },
  {
    id: 9, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Приведение дробей к наименьшему общему знаменателю",
    explain: "Чтобы привести дроби к общему знаменателю, найди НОК их знаменателей. Дробь умножай на такое число, чтобы знаменатель стал равен НОК.",
    hint: "Найди наименьшее число, которое делится и на 3, и на 4.",
    question: "Приведи дроби 2/5 и 1/3 к наименьшему общему знаменателю. Какой знаменатель получится?",
    answers: ["15", "пятнадцать"]
  },
  {
    id: 10, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Сложение и вычитание обыкновенных дробей",
    explain: "Если знаменатели разные, сначала приведи дроби к общему знаменателю. Затем сложи или вычти числители, а знаменатель оставь прежним.",
    hint: "Для 1/3 и 1/2 общий знаменатель — 6. Тогда 1/3 = 2/6, а 1/2 = 3/6.",
    question: "Вычисли: 1/3 + 1/2. Ответ запиши несократимой дробью.",
    answers: ["5/6"]
  },
  {
    id: 11, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Действия сложения и вычитания смешанных чисел",
    explain: "При сложении смешанных чисел отдельно сложи целые части и дробные части. При вычитании удобно отдельно работать с целыми и дробными частями; если дробной части не хватает, займи одну единицу у целой части.",
    hint: "Сложи целые части: 1 + 2. Затем дробные: 1/4 + 2/4.",
    question: "Вычисли: 1 1/4 + 2 2/4. Ответ можно записать смешанным числом.",
    answers: ["3 3/4", "15/4", "3.75"]
  },
  {
    id: 12, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Действия умножения смешанных чисел",
    explain: "Перед умножением смешанное число удобно превратить в неправильную дробь: целую часть умножить на знаменатель и прибавить числитель.",
    hint: "1 1/2 — это 3/2. Умножь 3/2 на 2.",
    question: "Вычисли: 1 1/2 × 2.",
    answers: ["3", "3/1", "три"]
  },
  {
    id: 13, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Нахождение дроби от числа",
    explain: "Чтобы найти дробь от числа, раздели число на знаменатель и умножь результат на числитель.",
    hint: "Сначала раздели 30 на 5, а затем умножь результат на 2.",
    question: "Найди 2/5 от 30.",
    answers: ["12", "двенадцать"]
  },
  {
    id: 14, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Распределительное свойство",
    explain: "Распределительное свойство: a × (b + c) = a × b + a × c. Можно умножить число на каждое слагаемое в скобках и сложить результаты.",
    hint: "Вычисли удобнее: сначала найди 10 + 2, потом умножь на 7.",
    question: "Вычисли удобным способом: 7 × (10 + 2).",
    answers: ["84", "восемьдесят четыре"]
  },
  {
    id: 15, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Действие деления смешанных чисел",
    explain: "Чтобы разделить на дробь, умножь на дробь, перевёрнутую наоборот. Смешанные числа сначала переведи в неправильные дроби.",
    hint: "1 1/2 = 3/2. Деление на 3/4 замени умножением на 4/3.",
    question: "Вычисли: 1 1/2 ÷ 3/4.",
    answers: ["2", "2/1", "два"]
  },
  {
    id: 16, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Нахождение числа по его дроби",
    explain: "Если известна дробь числа, сначала раздели известную часть на числитель — найдёшь одну долю. Затем умножь на знаменатель.",
    hint: "Если 3/5 числа — 12, то 1/5 — это 12 ÷ 3. Чтобы найти целое, результат умножь на 5.",
    question: "Три пятых числа — это 12. Найди всё число.",
    answers: ["20", "двадцать"]
  },
  {
    id: 17, section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", title: "Дробные выражения",
    explain: "В дробном выражении соблюдай порядок действий: сначала скобки, затем умножение и деление, потом сложение и вычитание.",
    hint: "Сначала раздели 1/2 на 1/4. Деление на 1/4 — это умножение на 4.",
    question: "Вычисли: 1/2 ÷ 1/4 + 1.",
    answers: ["3", "три"]
  },
  {
    id: 18, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Отношения",
    explain: "Отношение показывает, во сколько раз одна величина больше другой, или сравнивает две величины. Отношение a к b записывают a:b или дробью a/b.",
    hint: "Отношение 2 к 3 можно записать дробью с 2 в числителе и 3 в знаменателе.",
    question: "Запиши отношение 2 к 3 в виде дроби.",
    answers: ["2/3"]
  },
  {
    id: 19, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Пропорции",
    explain: "Пропорция — это равенство двух отношений. В пропорции a/b = c/d произведение крайних членов равно произведению средних.",
    hint: "Из 3/5 = x/20 получаем 5x = 3 × 20.",
    question: "Найди x: 3/5 = x/20.",
    answers: ["12", "двенадцать"]
  },
  {
    id: 20, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Прямая и обратная пропорциональные зависимости",
    explain: "При прямой пропорциональности величины меняются в одну сторону: больше билетов — выше общая цена. При обратной пропорциональности, если одна величина увеличивается в несколько раз, другая уменьшается во столько же.",
    hint: "6 билетов — это в 1,5 раза больше, чем 4. Во столько же раз увеличь 20 рублей.",
    question: "4 одинаковых билета стоят 20 рублей. Сколько стоят 6 таких билетов?",
    answers: ["30", "30 рублей"]
  },
  {
    id: 21, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Масштаб",
    explain: "Масштаб 1:100 000 означает: 1 см на карте соответствует 100 000 см на местности, то есть 1 км.",
    hint: "При масштабе 1:100 000 каждый сантиметр на карте — это один километр в реальности.",
    question: "На карте с масштабом 1:100 000 расстояние до стадиона — 3 см. Сколько это километров?",
    answers: ["3", "3 км", "3 километра"]
  },
  {
    id: 22, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Симметрия",
    explain: "Ось симметрии делит фигуру на две зеркально одинаковые части. У квадрата четыре оси симметрии.",
    hint: "У квадрата оси проходят через середины противоположных сторон и по обеим диагоналям.",
    question: "Сколько осей симметрии у квадрата?",
    answers: ["4", "четыре"]
  },
  {
    id: 23, section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", title: "Длина окружности, площадь круга и шар",
    explain: "Длина окружности вычисляется по формуле C = 2πr. Если радиус 5 см, а π ≈ 3,14, то C ≈ 2 × 3,14 × 5.",
    hint: "Подставь радиус 5 в формулу: длина окружности равна 2 × 3,14 × 5.",
    question: "Найди длину окружности радиусом 5 см. Используй π ≈ 3,14. Ответ дай в сантиметрах.",
    answers: ["31.4", "31,4", "31.4 см", "31,4 см"]
  }
];

const vocabulary = [
  { id: "baggage", word: "багаж", sentence: "Перед поездкой мы собрали ______ в чемодан." },
  { id: "biblioteka", word: "библиотека", sentence: "Наша ______ открыта до вечера." },
  { id: "velosiped", word: "велосипед", sentence: "Летом я катаюсь на ______ в парке." },
  { id: "vokzal", word: "вокзал", sentence: "______ находится рядом с площадью." },
  { id: "galereya", word: "галерея", sentence: "______ открылась утром." },
  { id: "gorod", word: "город", sentence: "Этот ______ находится на берегу реки." },
  { id: "director", word: "директор", sentence: "______ школы поздравил команду с победой." },
  { id: "zhurnal", word: "журнал", sentence: "Новый ______ лежит на столе." },
  { id: "zavtra", word: "завтра", sentence: "______ у нашего класса контрольная работа." },
  { id: "inzhener", word: "инженер", sentence: "______ придумал новый проект моста." },
  { id: "iskusstvo", word: "искусство", sentence: "Музыка и живопись — виды ______." },
  { id: "calendar", word: "календарь", sentence: "Открой ______ на этой странице." },
  { id: "kollektsiya", word: "коллекция", sentence: "У брата есть ______ футбольных карточек." },
  { id: "koridor", word: "коридор", sentence: "Длинный ______ ведёт к спортзалу." },
  { id: "kosmonavt", word: "космонавт", sentence: "______ полетел на орбиту Земли." },
  { id: "laboratoriya", word: "лаборатория", sentence: "______ открылась для школьников." },
  { id: "magazin", word: "магазин", sentence: "Мы зашли в ______ после тренировки." },
  { id: "million", word: "миллион", sentence: "В городе живёт ______ человек." },
  { id: "obshchestvo", word: "общество", sentence: "______ заботится о детях." },
  { id: "pobeda", word: "победа", sentence: "______ команды порадовала болельщиков." },
  { id: "pozhaluysta", word: "пожалуйста", sentence: "Передай мяч, ______." },
  { id: "rasstoyanie", word: "расстояние", sentence: "Мы измерили ______ от дома до школы." },
  { id: "rovesnik", word: "ровесник", sentence: "Мой ______ тоже учится в шестом классе." },
  { id: "territoriya", word: "территория", sentence: "______ стадиона закрыта после матча." },
  { id: "trenirovka", word: "тренировка", sentence: "Сегодня у команды вечерняя ______." },
  { id: "futbol", word: "футбол", sentence: "После уроков мы играли в ______." },
  { id: "chempion", word: "чемпион", sentence: "______ получил золотую медаль." },
  { id: "ekskursiya", word: "экскурсия", sentence: "______ началась утром." },
  { id: "energiya", word: "энергия", sentence: "Для игры футболистам нужна ______." },
  { id: "yazyk", word: "язык", sentence: "Русский ______ — школьный предмет." }
];

const storageKey = "football-math-progress-v1";
const telegramEndpointKey = "football-math-telegram-endpoint-v1";
const dailyTarget = 20;
const dailyMathCount = 16;
const dailyWordCount = dailyTarget - dailyMathCount;
const dailyPlanVersion = 2;
let progress = loadProgress();
let currentTask = null;
let feedbackTimer;

const topicList = document.querySelector("#topic-list");
const answerForm = document.querySelector("#answer-form");
const answerInput = document.querySelector("#answer");
const feedback = document.querySelector("#feedback");
const helpPanel = document.querySelector("#help-panel");
const dailyStatus = document.querySelector("#daily-status");
const telegramForm = document.querySelector("#telegram-form");
const telegramEndpointInput = document.querySelector("#telegram-endpoint");
const wordCard = document.querySelector("#word-card");
const wordDisplay = document.querySelector("#word-display");
const wordContext = document.querySelector("#word-context");
const wordToggle = document.querySelector("#word-toggle");
const nextButton = document.querySelector("#next-button");
const vocabularyButton = document.querySelector("#vocabulary-button");

function localDate() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60 * 1000).toISOString().slice(0, 10);
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function buildDailyProgress(topicDates, wordStats) {
  const mathTasks = [
    { section: "§1 · ВЫЧИСЛЕНИЯ И ПОСТРОЕНИЯ", count: 4 },
    { section: "§2 · ДЕЙСТВИЯ СО СМЕШАННЫМИ ЧИСЛАМИ", count: 8 },
    { section: "§3 · ОТНОШЕНИЯ И ПРОПОРЦИИ", count: 4 }
  ].flatMap(group => {
    const topicsInSection = topics.filter(topic => topic.section === group.section);
    const ordered = shuffle(topicsInSection).sort((left, right) =>
      (topicDates[left.id] ?? "").localeCompare(topicDates[right.id] ?? "")
    );
    return ordered.slice(0, group.count).map(topic => `math:${topic.id}`);
  });

  const words = shuffle(vocabulary).sort((left, right) => {
    const leftStats = wordStats[left.id] ?? {};
    const rightStats = wordStats[right.id] ?? {};
    const errorPriority = Number(Boolean(rightStats.lastError)) - Number(Boolean(leftStats.lastError));
    return errorPriority || (leftStats.lastSeen ?? "").localeCompare(rightStats.lastSeen ?? "");
  });
  const wordTasks = words.slice(0, dailyWordCount).map(word => `word:${word.id}`);
  const shuffledMath = shuffle(mathTasks);
  const shuffledWords = shuffle(wordTasks);
  const queue = [];
  for (let index = 0; index < dailyWordCount; index++) {
    const mathStart = index * (dailyMathCount / dailyWordCount);
    queue.push(shuffledMath[mathStart], shuffledMath[mathStart + 1], shuffledWords[index],
      shuffledMath[mathStart + 2], shuffledMath[mathStart + 3]);
  }
  return {
    version: dailyPlanVersion,
    date: localDate(),
    queue,
    tasks: [],
    notificationSent: false
  };
}

function createDailyProgress(daily, topicDates, wordStats) {
  if (!daily || daily.version !== dailyPlanVersion || daily.date !== localDate() || !Array.isArray(daily.queue)) {
    return buildDailyProgress(topicDates, wordStats);
  }
  const queue = [...new Set(daily.queue)];
  const validMathCount = queue.filter(id => /^math:\d+$/.test(id) && topics.some(topic => `math:${topic.id}` === id)).length;
  const validWordCount = queue.filter(id => id.startsWith("word:") && vocabulary.some(word => `word:${word.id}` === id)).length;
  if (queue.length !== dailyTarget || validMathCount !== dailyMathCount || validWordCount !== dailyWordCount) {
    return buildDailyProgress(topicDates, wordStats);
  }
  return {
    version: dailyPlanVersion,
    date: daily.date,
    queue,
    tasks: Array.isArray(daily.tasks) ? [...new Set(daily.tasks.filter(id => queue.includes(id)))] : [],
    notificationSent: daily.notificationSent === true
  };
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || typeof saved !== "object") {
      const topicDates = {};
      const wordStats = {};
      return { xp: 0, streak: 0, completed: [], topicDates, wordStats, daily: createDailyProgress(null, topicDates, wordStats) };
    }
    const topicDates = saved.topicDates && typeof saved.topicDates === "object" ? saved.topicDates : {};
    const wordStats = saved.wordStats && typeof saved.wordStats === "object" ? saved.wordStats : {};
    return {
      xp: Number.isFinite(saved.xp) && saved.xp >= 0 ? saved.xp : 0,
      streak: Number.isFinite(saved.streak) && saved.streak >= 0 ? saved.streak : 0,
      completed: Array.isArray(saved.completed) ? saved.completed.filter(id => topics.some(topic => topic.id === id)) : [],
      topicDates,
      wordStats,
      daily: createDailyProgress(saved.daily, topicDates, wordStats)
    };
  } catch {
    const topicDates = {};
    const wordStats = {};
    return { xp: 0, streak: 0, completed: [], topicDates, wordStats, daily: createDailyProgress(null, topicDates, wordStats) };
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function renderTopics() {
  topicList.replaceChildren();
  let lastSection = "";
  for (const topic of topics) {
    if (topic.section !== lastSection) {
      const label = document.createElement("p");
      label.className = "chapter-label";
      label.textContent = topic.section;
      topicList.append(label);
      lastSection = topic.section;
    }
    const button = document.createElement("button");
    button.type = "button";
    const active = currentTask?.kind === "math" && topic.id === currentTask.topic.id;
    button.className = `topic-button${active ? " active" : ""}`;
    button.setAttribute("aria-current", active ? "page" : "false");
    button.innerHTML = `<span class="topic-number">${topic.id}</span><span></span><span class="topic-check"></span>`;
    button.children[1].textContent = topic.title;
    button.children[2].textContent = progress.completed.includes(topic.id) ? "✓" : "";
    button.addEventListener("click", () => showTask({ kind: "math", topic, taskId: `math:${topic.id}` }));
    topicList.append(button);
  }
}

function updateScore() {
  if (progress.daily.date !== localDate()) {
    progress.daily = createDailyProgress(null, progress.topicDates, progress.wordStats);
    saveProgress();
  }
  document.querySelector("#xp").textContent = progress.xp;
  document.querySelector("#streak").textContent = progress.streak;
  const dailyCompleted = Math.min(progress.daily.tasks.length, dailyTarget);
  document.querySelector("#daily-count").textContent = `${dailyCompleted}/${dailyTarget}`;
  document.querySelector("#daily-progress-bar").style.width = `${dailyCompleted / dailyTarget * 100}%`;
  dailyStatus.classList.toggle("done", dailyCompleted >= dailyTarget);
  if (dailyCompleted >= dailyTarget) {
    dailyStatus.textContent = progress.daily.notificationSent
      ? "Цель выполнена! Сообщение отправлено родителю в Telegram. Отличная тренировка! ⚽"
      : "20 разных заданий решены! Отправляю родителю сообщение в Telegram…";
  } else {
    dailyStatus.textContent = `Решено ${dailyCompleted} из ${dailyTarget}: математика и словарные слова. Осталось ${dailyTarget - dailyCompleted}.`;
  }
  nextButton.disabled = dailyCompleted >= dailyTarget;
  nextButton.innerHTML = dailyCompleted >= dailyTarget
    ? "Тренировка завершена ✓"
    : "Следующее задание <span aria-hidden=\"true\">→</span>";
}

function showTask(task) {
  currentTask = task;
  const isWord = task.kind === "word";
  const topic = task.topic;
  const word = task.word;
  document.querySelector("#section-label").textContent = isWord
    ? "РУССКИЙ ЯЗЫК · СЛОВАРНЫЕ СЛОВА"
    : `ГЛАВА I · ${topic.section.replace(/^§\d+ · /, "")}`;
  document.querySelector("#topic-title").textContent = isWord ? "Словарные слова" : topic.title;
  document.querySelector("#question-label").textContent = isWord ? "ПРОЧИТАЙ ПРИМЕР И НАПИШИ СЛОВО" : "МАТЕМАТИЧЕСКОЕ ЗАДАНИЕ";
  document.querySelector("#question").textContent = isWord
    ? `${word.sentence} Напиши пропущенное слово по памяти.`
    : topic.question;
  const position = progress.daily.queue.indexOf(task.taskId);
  document.querySelector("#level-badge").textContent = position >= 0
    ? `ЗАДАНИЕ ${position + 1}/${dailyTarget}`
    : "ПОВТОРЕНИЕ";
  wordCard.hidden = !isWord;
  if (isWord) {
    wordDisplay.textContent = word.word;
    wordDisplay.classList.remove("is-hidden");
    wordContext.textContent = "Прочитай слово вслух, обрати внимание на его написание. Потом спрячь карточку и напиши слово по памяти.";
    wordToggle.textContent = "Спрятать слово и попробовать";
  }
  answerInput.value = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  helpPanel.hidden = true;
  helpPanel.textContent = "";
  renderTopics();
  answerInput.focus({ preventScroll: true });
}

function showNextTask() {
  const nextTaskId = progress.daily.queue.find(taskId => !progress.daily.tasks.includes(taskId));
  if (!nextTaskId) return;
  const [kind, id] = nextTaskId.split(":");
  if (kind === "math") {
    const topic = topics.find(item => item.id === Number(id));
    if (topic) showTask({ kind, topic, taskId: nextTaskId });
    return;
  }
  const word = vocabulary.find(item => item.id === id);
  if (word) showTask({ kind, word, taskId: nextTaskId });
}

function showNextVocabularyTask() {
  const nextWordTaskId = progress.daily.queue.find(taskId =>
    taskId.startsWith("word:") && !progress.daily.tasks.includes(taskId)
  );
  const word = vocabulary.find(item => `word:${item.id}` === nextWordTaskId)
    ?? shuffle(vocabulary)[0];
  showTask({ kind: "word", word, taskId: `word:${word.id}` });
}

function normalize(value) {
  return value.toLocaleLowerCase("ru").trim().replace(/\s+/g, "").replace(/,/g, ".").replace(/[×·]/g, "x");
}

function showFeedback(message, status) {
  window.clearTimeout(feedbackTimer);
  feedback.textContent = message;
  feedback.className = `feedback ${status}`;
}

async function notifyParent() {
  if (progress.daily.tasks.length < dailyTarget || progress.daily.notificationSent) return;
  const endpoint = localStorage.getItem(telegramEndpointKey);
  if (!endpoint) {
    dailyStatus.textContent = "20 заданий выполнены! Добавь ссылку на Telegram-сервер в настройках, чтобы отправить сообщение.";
    document.querySelector(".parent-settings").open = true;
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: progress.daily.date, completed: progress.daily.tasks.length })
    });
    if (!response.ok) throw new Error(`Сервер уведомлений ответил с кодом ${response.status}`);
    progress.daily.notificationSent = true;
    saveProgress();
    updateScore();
  } catch (error) {
    console.error("Не удалось отправить сообщение родителю в Telegram:", error);
    dailyStatus.textContent = "20 заданий выполнены, но сообщение не отправилось. Проверь интернет и ссылку Telegram-сервера.";
    dailyStatus.classList.add("done");
  }
}

telegramEndpointInput.value = localStorage.getItem(telegramEndpointKey) ?? "";
telegramForm.addEventListener("submit", event => {
  event.preventDefault();
  const endpoint = telegramEndpointInput.value.trim();
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:") throw new Error("Адрес должен начинаться с https://");
    localStorage.setItem(telegramEndpointKey, url.href);
    dailyStatus.textContent = "Ссылка сохранена.";
    if (progress.daily.tasks.length >= dailyTarget && !progress.daily.notificationSent) notifyParent();
  } catch {
    dailyStatus.textContent = "Вставь правильную безопасную ссылку, которая начинается с https://";
  }
});

answerForm.addEventListener("submit", event => {
  event.preventDefault();
  const answer = normalize(answerInput.value);
  if (!answer) {
    showFeedback("Сначала напиши ответ — ты справишься!", "try-again");
    answerInput.focus();
    return;
  }
  const expectedAnswers = currentTask.kind === "word" ? [currentTask.word.word] : currentTask.topic.answers;
  const correct = expectedAnswers.some(expected => normalize(expected) === answer);
  if (!correct) {
    if (currentTask.kind === "word") {
      const stats = progress.wordStats[currentTask.word.id] ?? { lastSeen: null, lastError: null };
      stats.lastError = localDate();
      progress.wordStats[currentTask.word.id] = stats;
    }
    showFeedback(
      currentTask.kind === "word"
        ? "Проверь написание, посмотри на слово ещё раз и попробуй по памяти."
        : "Пока мимо! Нажми «Подсказка» и попробуй ещё раз.",
      "try-again"
    );
    progress.streak = 0;
    saveProgress();
    updateScore();
    return;
  }

  const alreadyCountedToday = progress.daily.tasks.includes(currentTask.taskId);
  const countedToday = !alreadyCountedToday
    && progress.daily.queue.includes(currentTask.taskId)
    && progress.daily.tasks.length < dailyTarget;
  if (countedToday) {
    progress.daily.tasks.push(currentTask.taskId);
    progress.xp += 10;
  }
  if (currentTask.kind === "math") {
    if (!progress.completed.includes(currentTask.topic.id)) progress.completed.push(currentTask.topic.id);
    progress.topicDates[currentTask.topic.id] = localDate();
  } else {
    const stats = progress.wordStats[currentTask.word.id] ?? { lastSeen: null, lastError: null };
    stats.lastSeen = localDate();
    stats.lastError = null;
    progress.wordStats[currentTask.word.id] = stats;
  }
  progress.streak += 1;
  saveProgress();
  updateScore();
  renderTopics();
  showFeedback(
    alreadyCountedToday
      ? "ГОЛ! ⚽ Верно! Это задание уже засчитано сегодня."
      : countedToday
        ? "ГОЛ! ⚽ Верно! +1 к дневной цели."
        : "ГОЛ! ⚽ Верно! Для дневной цели ответь на следующее задание из плана.",
    "success"
  );
  if (progress.daily.tasks.length >= dailyTarget && !progress.daily.notificationSent) notifyParent();
  feedbackTimer = window.setTimeout(() => {
    if (feedback.classList.contains("success")) {
      feedback.textContent = "Выбери следующую тему или закрепи эту.";
    }
  }, 2800);
});

document.querySelector("#explain-button").addEventListener("click", () => {
  helpPanel.innerHTML = `<strong>Объяснение:</strong> `;
  const explanation = currentTask.kind === "word"
    ? `Слово «${currentTask.word.word}» пишется именно так. Прочитай его целиком и обрати внимание на каждую букву.`
    : currentTask.topic.explain;
  helpPanel.append(document.createTextNode(explanation));
  helpPanel.hidden = false;
});

document.querySelector("#hint-button").addEventListener("click", () => {
  helpPanel.innerHTML = `<strong>Подсказка:</strong> `;
  const hint = currentTask.kind === "word"
    ? `Слово для проверки: ${currentTask.word.word}. Проговори его по слогам, затем спрячь карточку и напиши ещё раз.`
    : currentTask.topic.hint;
  helpPanel.append(document.createTextNode(hint));
  helpPanel.hidden = false;
});

wordToggle.addEventListener("click", () => {
  const hidden = wordDisplay.classList.toggle("is-hidden");
  wordToggle.textContent = hidden ? "Показать слово" : "Спрятать слово и попробовать";
});

vocabularyButton.addEventListener("click", () => showNextVocabularyTask());

nextButton.addEventListener("click", () => {
  showNextTask();
  document.querySelector(".lesson").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderTopics();
updateScore();
showNextTask();
saveProgress();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(error => {
      console.error("Не удалось включить офлайн-режим:", error);
    });
  });
}
