// 12 How long have you (been) … ?
const chapterExamples = [
  // Conversation 1
  [
    "They have been married for 20 years.",
    "Han estado casados durante 20 años. 💑",
  ],
  [
    "How long have they been married?",
    "¿Cuánto tiempo llevan casados? 💑",
  ],

  // Conversation 2
  [
    "He has been in the hospital since Monday.",
    "Él ha estado en el hospital desde el lunes. 🏥",
  ],

  // Conversation 3
  [
    "Do you know each other well?",
    "¿Se conocen bien? 👫",
  ],
  [
    "Have you known each other for a long time?",
    "¿Se conocen desde hace mucho tiempo? 👫",
  ],

  // Conversation 4
  [
    "She’s waiting for somebody.",
    "Ella está esperando a alguien. ⏳",
  ],
  [
    "She’s been waiting all morning.",
    "Ha estado esperando toda la mañana. ⏳",
  ],

  // Conversation 5
  [
    "Do they have a car?",
    "¿Tienen un coche? 🚗",
  ],
  [
    "How long have they had their car?",
    "¿Cuánto tiempo llevan con su coche? 🚗",
  ],

  // Conversation 6
  [
    "I’ve been studying English for six months.",
    "He estado estudiando inglés durante seis meses. 📚",
  ],

  // Conversation 7
  [
    "It’s been raining since lunchtime.",
    "Ha estado lloviendo desde la hora del almuerzo. ☔",
  ],

  // Conversation 8
  [
    "Richard has been doing the same job for 20 years.",
    "Richard ha estado haciendo el mismo trabajo durante 20 años. 👨‍💼",
  ],

  // Conversation 9
  [
    "How long have you been driving? – Since I was 17.",
    "¿Cuánto tiempo llevas conduciendo? – Desde que tenía 17. 🚗",
  ],

  // Conversation 10
  [
    "How long have you known Emily?",
    "¿Cuánto tiempo has conocido a Emily? 👩‍🦰",
  ],

  // Conversation 11
  [
    "I’ve had a stomachache all day.",
    "He tenido dolor de estómago todo el día. 😣",
  ],

  // Conversation 12
  [
    "John has been living in Montreal for a long time.",
    "John ha estado viviendo en Montreal durante mucho tiempo. 🌆",
  ],
  [
    "John has lived in Montreal for a long time.",
    "John ha vivido en Montreal durante mucho tiempo. 🌆",
  ],

  // Conversation 13
  [
    "How long have you been working here?",
    "¿Cuánto tiempo has estado trabajando aquí? 💼",
  ],
  [
    "How long have you worked here?",
    "¿Cuánto tiempo has trabajado aquí? 💼",
  ],

  // Conversation 14
  [
    "Have you always lived in the country?",
    "¿Siempre has vivido en el campo? 🌳",
  ],

  // Conversation 15
  [
    "I haven’t seen Tom since Monday (= Monday was the last time I saw him).",
    "No he visto a Tom desde el lunes (= el lunes fue la última vez que lo vi). 👀",
  ],

  // Conversation 16
  [
    "Sue hasn’t called for ages. (= the last time she called was ages ago).",
    "Sue no ha llamado desde hace mucho tiempo. (= la última vez que llamó fue hace mucho tiempo). ☎️",
  ],
];

const chapterSolution1 = [
  // Conversation 1
  [
    "Bob is a friend of mine. I know him very well.",
    "Bob es un amigo mío. Lo conozco muy bien. 👫",
  ],
  [
    "Bob is a friend of mine. I've known him for a long time.",
    "Bob es un amigo mío. Lo he conocido durante mucho tiempo. 👫",
  ],

  // Conversation 2
  [
    "Sue and Scott have been married since July.",
    "Sue y Scott están casados desde julio. 💑",
  ],

  // Conversation 3
  [
    "The weather is awful. It’s raining again.",
    "El clima es terrible. Está lloviendo otra vez. ☔",
  ],
  [
    "The weather is awful. It’s been raining all day.",
    "El clima es terrible. Ha estado lloviendo todo el día. ☔",
  ],

  // Conversation 4
  [
    "I like your house. How long have you been living there?",
    "Me gusta tu casa. ¿Cuánto tiempo llevas viviendo allí? 🏠",
  ],

  // Conversation 5
  [
    "Gary has been working in a store for the last few months.",
    "Gary ha estado trabajando en una tienda durante los últimos meses. 👔",
  ],

  // Conversation 6
  [
    "I don’t know Tim well. We’ve only met a few times.",
    "No conozco bien a Tim. Solo nos hemos encontrado algunas veces. 👥",
  ],

  // Conversation 7
  [
    "I quit drinking coffee. I haven’t been drinking it for a year.",
    "Dejé de beber café. No lo he estado bebiendo durante un año. ☕",
  ],

  // Conversation 8
  [
    "That’s a very old bike. How long have you had it?",
    "Esa es una bicicleta muy antigua. ¿Cuánto tiempo la has tenido? 🚴‍♂️",
  ],
];

const chapterSolution2 = [
  // Conversation 1
  [
    "How long has your mother been in the hospital?",
    "Amy está en el hospital, ¿verdad? – Sí, ha estado en el hospital desde el lunes. 🏥",
  ],

  // Conversation 2
  [
    "How long have you been teaching English?",
    "Conoces a una mujer que te dice que enseña inglés. Le preguntas: 📚",
  ],

  // Conversation 3
  [
    "How long have you known Carol?",
    "Sabes que Erica es una buena amiga de Carol. Le preguntas a Erica: 👭",
  ],

  // Conversation 4
  [
    "How long has he been in Costa Rica?",
    "El hermano del amigo se mudó a Costa Rica hace un tiempo. Le preguntas a tu amigo: 🌎",
  ],

  // Conversation 5
  [
    "How long have you had that car?",
    "Chris conduce un coche muy antiguo. Le preguntas: 🚗",
  ],

  // Conversation 6
  [
    "How long has Scott been working at the airport?",
    "Estás hablando con un amigo sobre Scott. Scott ahora trabaja en el aeropuerto. Le preguntas a tu amigo: ✈️",
  ],

  // Conversation 7
  [
    "How long have you been taking guitar lessons?",
    "Un amigo tuyo está tomando clases de guitarra. Le preguntas: 🎸",
  ],

  // Conversation 8
  [
    "Have you always lived in Chicago?",
    "Conoces a alguien en un avión. Ella dice que vive en Chicago. Le preguntas: 🏙️",
  ],
];

const chapterSolution3 = [
  // Conversation 1
  [
    "Amy is in the hospital, isn’t she? – Yes, she has been in the hospital since Monday.",
    "Amy está en el hospital, ¿verdad? – Sí, ha estado en el hospital desde el lunes. 🏥",
  ],

  // Conversation 2
  [
    "Do you see Ann very often? – No, I haven’t seen her for three months.",
    "¿Ves a Ann muy a menudo? – No, no la he visto en tres meses. 👀",
  ],

  // Conversation 3
  [
    "Is Margaret married? – Yes, she has been married for 10 years.",
    "¿Margaret está casada? – Sí, ha estado casada durante 10 años. 💑",
  ],

  // Conversation 4
  [
    "Are you waiting for me? – Yes, I have been waiting for the last half hour.",
    "¿Me estás esperando? – Sí, he estado esperando durante la última media hora. ⌛",
  ],

  // Conversation 5
  [
    "You know Linda, don’t you? – Yes, we have known each other a long time.",
    "Conoces a Linda, ¿verdad? – Sí, nos conocemos desde hace mucho tiempo. 👫",
  ],

  // Conversation 6
  [
    "Do you still play tennis? – No, I haven’t played tennis for years.",
    "¿Todavía juegas al tenis? – No, no he jugado al tenis durante años. 🎾",
  ],

  // Conversation 7
  [
    "Is Jim watching TV? – Yes, he has been watching TV all night.",
    "¿Jim está viendo la televisión? – Sí, ha estado viendo la televisión toda la noche. 📺",
  ],

  // Conversation 8
  [
    "Do you watch TV a lot? – No, I haven’t watched TV for ages.",
    "¿Ves la televisión mucho? – No, no he visto la televisión desde hace mucho tiempo. 📺",
  ],

  // Conversation 9
  [
    "Do you have a headache? – Yes, I have had a headache all morning.",
    "¿Tienes dolor de cabeza? – Sí, he tenido dolor de cabeza toda la mañana. 😣",
  ],

  // Conversation 10
  [
    "George is never sick, is he? – No, he hasn’t been sick since I met him.",
    "George nunca está enfermo, ¿verdad? – No, no ha estado enfermo desde que lo conocí. 🤒",
  ],

  // Conversation 11
  [
    "Are you feeling sick? – Yes, I have been feeling sick all day.",
    "¿Te sientes enfermo? – Sí, he estado sintiéndome enfermo todo el día. 🤢",
  ],

  // Conversation 12
  [
    "Sue lives in Miami, doesn’t she? – Yes, she has lived in Miami for the last few years.",
    "Sue vive en Miami, ¿verdad? – Sí, ha vivido en Miami durante los últimos años. 🏝️",
  ],

  // Conversation 13
  [
    "Do you go to the movies a lot? – No, I haven’t been to the movies for ages.",
    "¿Vas mucho al cine? – No, no he ido al cine desde hace mucho tiempo. 🎬",
  ],

  // Conversation 14
  [
    "Would you like to go to Taiwan one day? – Yes, I have always wanted to go to Taiwan.",
    "¿Te gustaría ir a Taiwán algún día? – Sí, siempre he querido ir a Taiwán. 🌏",
  ],
];

const howLongHaveYou = [
  ...chapterExamples,
  ...chapterSolution1,
  ...chapterSolution2,
  ...chapterSolution3,
];

export default howLongHaveYou;
