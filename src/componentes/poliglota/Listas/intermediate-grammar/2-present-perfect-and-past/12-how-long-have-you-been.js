//12 How long have you (been) … ?

const chapterExamples = [
    // Conversation 1
    [
      "Han estado casados durante 20 años.",
      "They have been married for 20 years."
    ],
    [
      "¿Cuánto tiempo llevan casados?",
      "How long have they been married?"
    ],
  
    // Conversation 2
    [
      "Él ha estado en el hospital desde el lunes.",
      "He has been in the hospital since Monday."
    ],
  
    // Conversation 3
    [
      "¿Se conocen bien?",
      "Do you know each other well?"
    ],
    [
      "¿Se conocen desde hace mucho tiempo?",
      "Have you known each other for a long time?"
    ],
  
    // Conversation 4
    [
      "Ella está esperando a alguien.",
      "She’s waiting for somebody."
    ],
    [
      "Ha estado esperando toda la mañana.",
      "She’s been waiting all morning."
    ],
  
    // Conversation 5
    [
      "¿Tienen un coche?",
      "Do they have a car?"
    ],
    [
      "¿Cuánto tiempo llevan con su coche?",
      "How long have they had their car?"
    ],
  
    // Conversation 6
    [
      "He estado estudiando inglés durante seis meses.",
      "I’ve been studying English for six months."
    ],
  
    // Conversation 7
    [
      "Ha estado lloviendo desde la hora del almuerzo.",
      "It’s been raining since lunchtime."
    ],
  
    // Conversation 8
    [
      "Richard ha estado haciendo el mismo trabajo durante 20 años.",
      "Richard has been doing the same job for 20 years."
    ],
  
    // Conversation 9
    [
      "¿Cuánto tiempo llevas conduciendo? – Desde que tenía 17.",
      "How long have you been driving? – Since I was 17."
    ],
  
    // Conversation 10
    [
      "¿Cuánto tiempo has conocido a Emily?",
      "How long have you known Emily?"
    ],
  
    // Conversation 11
    [
      "He tenido dolor de estómago todo el día.",
      "I’ve had a stomachache all day."
    ],
  
    // Conversation 12
    [
      "John ha estado viviendo en Montreal durante mucho tiempo.",
      "John has been living in Montreal for a long time."
    ],
    [
      "John ha vivido en Montreal durante mucho tiempo.",
      "John has lived in Montreal for a long time."
    ],
  
    // Conversation 13
    [
      "¿Cuánto tiempo has estado trabajando aquí?",
      "How long have you been working here?"
    ],
    [
      "¿Cuánto tiempo has trabajado aquí?",
      "How long have you worked here?"
    ],
  
    // Conversation 14
    [
      "¿Siempre has vivido en el campo?",
      "Have you always lived in the country?"
    ],
  
    // Conversation 15
    [
      "No he visto a Tom desde el lunes (= el lunes fue la última vez que lo vi).",
      "I haven’t seen Tom since Monday (= Monday was the last time I saw him)."
    ],
  
    // Conversation 16
    [
      "Sue no ha llamado desde hace mucho tiempo. (= la última vez que llamó fue hace mucho tiempo).",
      "Sue hasn’t called for ages. (= the last time she called was ages ago)."
    ]
];

const chapterSolution1 = [
    // Conversation 1
    [
      "Bob es un amigo mío. Lo conozco muy bien.",
      "Bob is a friend of mine. I know him very well."
    ],
    [
      "Bob es un amigo mío. Lo he conocido durante mucho tiempo.",
      "Bob is a friend of mine. I've known him for a long time."
    ],
  
    // Conversation 2
    [
      "Sue y Scott están casados desde julio.",
      "Sue and Scott have been married since July."
    ],
  
    // Conversation 3
    [
      "El clima es terrible. Está lloviendo otra vez.",
      "The weather is awful. It’s raining again."
    ],
    [
      "El clima es terrible. Ha estado lloviendo todo el día.",
      "The weather is awful. It’s been raining all day."
    ],
  
    // Conversation 4
    [
      "Me gusta tu casa. ¿Cuánto tiempo llevas viviendo allí?",
      "I like your house. How long have you been living there?"
    ],
  
    // Conversation 5
    [
      "Gary ha estado trabajando en una tienda durante los últimos meses.",
      "Gary has been working in a store for the last few months."
    ],
  
    // Conversation 6
    [
      "No conozco bien a Tim. Solo nos hemos encontrado algunas veces.",
      "I don’t know Tim well. We’ve only met a few times."
    ],
  
    // Conversation 7
    [
      "Dejé de beber café. No lo he estado bebiendo durante un año.",
      "I quit drinking coffee. I haven’t been drinking it for a year."
    ],
  
    // Conversation 8
    [
      "Esa es una bicicleta muy antigua. ¿Cuánto tiempo la has tenido?",
      "That’s a very old bike. How long have you had it?"
    ]
];

const chapterSolution2 = [
    // Conversation 1
    [
      "John te cuenta que su madre está en el hospital. Le preguntas:",
      "How long has your mother been in the hospital?"
    ],
  
    // Conversation 2
    [
      "Conoces a una mujer que te dice que enseña inglés. Le preguntas:",
      "How long have you been teaching English?"
    ],
  
    // Conversation 3
    [
      "Sabes que Erica es una buena amiga de Carol. Le preguntas a Erica:",
      "How long have you known Carol?"
    ],
  
    // Conversation 4
    [
      "El hermano del amigo se mudó a Costa Rica hace un tiempo. Le preguntas a tu amigo:",
      "How long has he been in Costa Rica?"
    ],
  
    // Conversation 5
    [
      "Chris conduce un coche muy antiguo. Le preguntas:",
      "How long have you had that car?"
    ],
  
    // Conversation 6
    [
      "Estás hablando con un amigo sobre Scott. Scott ahora trabaja en el aeropuerto. Le preguntas a tu amigo:",
      "How long has Scott been working at the airport?"
    ],
  
    // Conversation 7
    [
      "Un amigo tuyo está tomando clases de guitarra. Le preguntas:",
      "How long have you been taking guitar lessons?"
    ],
  
    // Conversation 8
    [
      "Conoces a alguien en un avión. Ella dice que vive en Chicago. Le preguntas:",
      "Have you always lived in Chicago?"
    ]
];

const chapterSolution3 = [
    // Conversation 1
    [
      "Amy está en el hospital, ¿verdad? – Sí, ha estado en el hospital desde el lunes.",
      "Amy is in the hospital, isn’t she? – Yes, she has been in the hospital since Monday."
    ],
  
    // Conversation 2
    [
      "¿Ves a Ann muy a menudo? – No, no la he visto en tres meses.",
      "Do you see Ann very often? – No, I haven’t seen her for three months."
    ],
  
    // Conversation 3
    [
      "¿Margaret está casada? – Sí, ha estado casada durante 10 años.",
      "Is Margaret married? – Yes, she has been married for 10 years."
    ],
  
    // Conversation 4
    [
      "¿Me estás esperando? – Sí, he estado esperando durante la última media hora.",
      "Are you waiting for me? – Yes, I have been waiting for the last half hour."
    ],
  
    // Conversation 5
    [
      "Conoces a Linda, ¿verdad? – Sí, nos conocemos desde hace mucho tiempo.",
      "You know Linda, don’t you? – Yes, we have known each other a long time."
    ],
  
    // Conversation 6
    [
      "¿Todavía juegas al tenis? – No, no he jugado al tenis durante años.",
      "Do you still play tennis? – No, I haven’t played tennis for years."
    ],
  
    // Conversation 7
    [
      "¿Jim está viendo la televisión? – Sí, ha estado viendo la televisión toda la noche.",
      "Is Jim watching TV? – Yes, he has been watching TV all night."
    ],
  
    // Conversation 8
    [
      "¿Ves la televisión mucho? – No, no he visto la televisión desde hace mucho tiempo.",
      "Do you watch TV a lot? – No, I haven’t watched TV for ages."
    ],
  
    // Conversation 9
    [
      "¿Tienes dolor de cabeza? – Sí, he tenido dolor de cabeza toda la mañana.",
      "Do you have a headache? – Yes, I have had a headache all morning."
    ],
  
    // Conversation 10
    [
      "George nunca está enfermo, ¿verdad? – No, no ha estado enfermo desde que lo conocí.",
      "George is never sick, is he? – No, he hasn’t been sick since I met him."
    ],
  
    // Conversation 11
    [
      "¿Te sientes enfermo? – Sí, he estado sintiéndome enfermo todo el día.",
      "Are you feeling sick? – Yes, I have been feeling sick all day."
    ],
  
    // Conversation 12
    [
      "Sue vive en Miami, ¿verdad? – Sí, ha vivido en Miami durante los últimos años.",
      "Sue lives in Miami, doesn’t she? – Yes, she has lived in Miami for the last few years."
    ],
  
    // Conversation 13
    [
      "¿Vas mucho al cine? – No, no he ido al cine desde hace mucho tiempo.",
      "Do you go to the movies a lot? – No, I haven’t been to the movies for ages."
    ],
  
    // Conversation 14
    [
      "¿Te gustaría ir a Taiwán algún día? – Sí, siempre he querido ir a Taiwán.",
      "Would you like to go to Taiwan one day? – Yes, I have always wanted to go to Taiwan."
    ]
];
  
  
  

const howLongHaveYou = [
    ...chapterExamples,
    ...chapterSolution1,
    ...chapterSolution2,
    ...chapterSolution3
]

export default howLongHaveYou;
  