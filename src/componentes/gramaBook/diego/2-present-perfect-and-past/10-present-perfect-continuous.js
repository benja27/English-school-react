// 10 Present Perfect Continuous ( I have been doing)
const chapterExamples = [
  [
    'You’re out of breath. Have you been running? (= you’re out of breath now) 😅',
    'Te falta el aliento. ¿Has estado corriendo? 😅',
  ],
  [
    'Jason is very tired. He’s been working very hard. (= he’s tired now) 😓',
    'Jason está muy cansado. Ha estado trabajando muy duro. 😓',
  ],
  [
    'Why are your clothes so dirty? What have you been doing? 🤔',
    '¿Por qué están tan sucias tus ropas? ¿Qué has estado haciendo? 🤔',
  ],
  [
    '(on the phone) I’m glad you called. I’ve been thinking about calling you… ☎️',
    '(en el teléfono) Me alegra que hayas llamado. He estado pensando en llamarte… ☎️',
  ],
  [
    'Where have you been? I’ve been looking everywhere for you. 🔍',
    '¿Dónde has estado? He estado buscándote por todas partes. 🔍',
  ],
  [
    'How long have you been studying English? (= you’re still studying English) 📚',
    '¿Cuánto tiempo has estado estudiando inglés? (= aún estás estudiando inglés) 📚',
  ],
  [
    'Tim is still watching television. He’s been watching television all day. 📺',
    'Tim todavía está viendo televisión. Ha estado viendo televisión todo el día. 📺',
  ],
  [
    'Where have you been? I’ve been looking for you for the last half hour. ⌛',
    '¿Dónde has estado? Te he estado buscando durante la última media hora. ⌛',
  ],
  [
    'Christopher hasn’t been feeling well recently. 🤒',
    'Christopher no se ha sentido bien últimamente. 🤒',
  ],
  [
    'Debbie is a very good tennis player. She’s been playing since she was eight. 🎾',
    'Debbie es una muy buena jugadora de tenis. Ha estado jugando desde los ocho. 🎾',
  ],
  [
    'Every morning they meet in the same cafe. They’ve been going there for years. ☕',
    'Cada mañana se encuentran en el mismo café. Han estado yendo allí durante años. ☕',
  ],
];

const chapterSolution1 = [
  ['They’ve been shopping. 🛍️', 'Han estado de compras. 🛍️'],
  ['She has been watching TV. 📺', 'Ella ha estado viendo televisión. 📺'],
  ['They’ve been playing tennis. 🎾', 'Han estado jugando tenis. 🎾'],
  ['He has been running. 🏃', 'Él ha estado corriendo. 🏃'],
];

const chapterSolution2 = [
  [
    'You meet Paul as he is leaving the swimming pool. You ask: Have you been swimming? 🏊‍♂️',
    'Te encuentras con Paul mientras él sale de la piscina. Preguntas: ¿Has estado nadando? 🏊‍♂️',
  ],
  [
    'You have just arrived to meet a friend who is waiting for you. You ask: Have you been waiting long? ⏳',
    'Acabas de llegar para encontrarte con un amigo que te está esperando. Preguntas: ¿Has estado esperando mucho? ⏳',
  ],
  [
    'You meet a friend at the store. His face and hands are very dirty. You ask: What have you been doing? 👀',
    'Te encuentras con un amigo en la tienda. Su cara y manos están muy sucias. Preguntas: ¿Qué has estado haciendo? 👀',
  ],
  [
    'A friend of yours is now working at a gym. You want to know how long. You ask: How long have you been working there? ⌛',
    'Un amigo tuyo ahora trabaja en un gimnasio. Quieres saber cuánto tiempo lleva. Preguntas: ¿Cuánto tiempo has estado trabajando allí? ⌛',
  ],
];

const chapterSolution3 = [
  // Conversation 1
  [
    "It’s raining. The rain started two hours ago. ☔",
    "Está lloviendo. La lluvia comenzó hace dos horas. ☔",
  ],

  // Conversation 2
  [
    "It’s been raining for two hours. ☔",
    "Ha estado lloviendo durante dos horas. ☔",
  ],

  // Conversation 3
  [
    "We are waiting for the bus. We got to the bus stop 20 minutes ago. We have been waiting for 20 minutes. 🚌",
    "Estamos esperando el autobús. Llegamos a la parada hace 20 minutos. Hemos estado esperando durante 20 minutos. 🚌",
  ],

  // Conversation 4
  [
    "I’m studying Spanish. I started classes in December. 📅",
    "Estoy estudiando español. Comencé las clases en diciembre. 📅",
  ],

  // Conversation 5
  [
    "I have been studying Spanish since December. 📚",
    "He estado estudiando español desde diciembre. 📚",
  ],

  // Conversation 6
  [
    "Jessica is working in Tokyo. She started working there on January 18. She has been working in Tokyo since January 18. 🏙️",
    "Jessica está trabajando en Tokio. Comenzó a trabajar allí el 18 de enero. Ha estado trabajando en Tokio desde el 18 de enero. 🏙️",
  ],

  // Conversation 7
  [
    "Our friends always spend their summers in the mountains. They started going there years ago. ⛰️",
    "Nuestros amigos siempre pasan sus veranos en las montañas. Empezaron a ir allí hace años. ⛰️",
  ],

  // Conversation 8
  [
    "They have been spending their summers in the mountains for years. ⛰️",
    "Han estado pasando sus veranos en las montañas durante años. ⛰️",
  ],
];

const chapterSolution4 = [
  // Conversation 1
  [
    "Maria has been studying English for two years. 📚",
    "Maria ha estado estudiando inglés durante dos años. 📚",
  ],

  // Conversation 2
  [
    "Hello, Tom. I have been looking for you all morning. Where have you been? 👋",
    "Hola, Tom. Te he estado buscando toda la mañana. ¿Dónde has estado? 👋",
  ],

  // Conversation 3
  [
    "Why have you been looking at me like that? Stop it! 👀",
    "¿Por qué me has estado mirando así? ¡Detente! 👀",
  ],

  // Conversation 4
  [
    "Linda is a teacher. She has been teaching for 10 years. 🍎",
    "Linda es profesora. Ha estado enseñando durante 10 años. 🍎",
  ],

  // Conversation 5
  [
    "I have been thinking about what you said, and I’ve decided to take your advice. 💭",
    "He estado pensando en lo que dijiste, y he decidido seguir tu consejo. 💭",
  ],

  // Conversation 6
  [
    "Is Kim on vacation this week? – No, she is working. 🏢",
    "¿Kim está de vacaciones esta semana? - No, está trabajando. 🏢",
  ],

  // Conversation 7
  [
    "Sarah is very tired. She has been working very hard recently. 😴",
    "Sarah está muy cansada. Ha estado trabajando muy duro últimamente. 😴",
  ]
];

const presentPerfectContinuos = [
  ...chapterExamples,
  ...chapterSolution1,
  ...chapterSolution2,
  ...chapterSolution3,
  ...chapterSolution4
];

export default presentPerfectContinuos;
