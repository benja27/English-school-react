// 11 Present Perfect Continous and Simple (I have been doing and I have done)

const chapterExamples = [
  ['Ella ha estado pintando el techo.', 'She has been painting the ceiling.'],

  ['Ella ha pintado el techo.', 'She has painted the ceiling.'],

  [
    'Mis manos están muy sucias. He estado arreglando el coche.',
    'My hands are very dirty. I’ve been fixing the car.',
  ],

  ['He arreglado el coche.', 'I’ve fixed the car.'],

  [
    'Joe ha estado comiendo demasiado últimamente. Debería comer menos.',
    'Joe has been eating too much recently. He should eat less.',
  ],

  [
    'Alguien se ha comido todos mis caramelos. La caja está vacía.',
    'Somebody has eaten all my candy. The box is empty.',
  ],

  [
    'Es agradable volver a verte. ¿Qué has estado haciendo desde la última vez que te vimos?',
    'It’s nice to see you again. What have you been doing since the last time we saw you?',
  ],

  [
    '¿Dónde está el libro que te di? ¿Qué has hecho con él?',
    'Where’s the book I gave you? What have you done with it?',
  ],

  [
    '¿Dónde has estado? ¿Has estado jugando al tenis?',
    'Whare have you been? Have you been playing tennis?',
  ],

  ['¿Alguna vez has jugado tenis?', 'Have you ever played tennis?'],

  [
    '¿Cuánto tiempo has estado leyendo ese libro?',
    'How long have you been reading that book?',
  ],

  ['¿Cuánto de ese libro has leído?', 'How much of that book have you read?'],

  [
    'Lisa todavía está escribiendo su informe. Lo ha estado escribiendo todo el día.',
    'Lisa is still writing her report. She’s been writing it all day.',
  ],

  ['Lisa ha escrito 10 páginas hoy.', 'Lisa has written 10 pages today.'],

  [
    'Han estado jugando al tenis desde las 2:00.',
    'The’ve been playin tennis since 2:00.',
  ],

  [
    'Han jugado tenis tres veces esta semana.',
    'The’ve played tennis three times this week.',
  ],

  [
    'Estoy estudiando español, pero no lo he estado estudiando por mucho tiempo.',
    'I’m studying Spanish, but I haven’t been studying it very long.',
  ],

  [
    'Estoy estudiando español, pero aún no he aprendido mucho.',
    'I’m studying Spanish, but I haven’t learned very much yet.',
  ],
];

const chapterSolution1 = [
  [
    'Luis empezó a leer un libro hace dos horas. Todavía lo está leyendo, y ahora está en la página 53. Ha estado leyendo durante dos horas. Ha leído 53 páginas hasta ahora.',
    'Luis started reading a book two hours ago. He is still reading it, and now he is on page 53. He has been reading for two hours. He has read 53 pages so far.',
  ],

  [
    'Min es de Corea. Está viajando por Asia en este momento. Comenzó su viaje hace tres meses.Ha estado viajando durante tres meses.Ha visitado seis países hasta ahora.',
    'Min is from Korea. She is traveling around Asia right now. She began her trip three months ago. She has been traveling for three months.She has visited six countries so far.',
  ],

  [
    'Jimmy es un jugador de tenis. Empezó a jugar al tenis cuando tenía 10 años. Este año es campeón nacional nuevamente, por cuarta vez. Ha ganado los campeonatos nacionales cuatro veces. Ha estado jugando al tenis desde que tenía 10 años.',
    'Jimmy is a tennis player. He began playing tennis when he was 10 years old. This year he is the national champion again, for the fourth time. He has won the national championships four times. He has been playing tennis since he was 10.',
  ],

  [
    'Cuando se graduaron de la universidad, Lisa y Amy empezaron a hacer películas juntas. Todavía hacen películas. Han hecho cinco películas desde que terminaron la universidad. Han estado haciendo películas desde que terminaron la universidad.',
    'When they graduated from college, Lisa and Amy started making movies together. They still make movies. They have made five movies since they finished college. They have been making movies since they finished college.',
  ],
];

const chapterSolution2 = [
    // Conversation 1
    [
      "Tienes un amigo que está estudiando árabe. Le preguntas: ¿Cuánto tiempo llevas estudiando árabe?",
      "You have a friend who is studying Arabic. You ask: How long have you been studying Arabic?"
    ],
  
    // Conversation 2
    [
      "Acabas de llegar para encontrarte con una amiga. Ella te está esperando. Le preguntas: ¿Has estado esperando mucho?",
      "You have just arrived to meet a friend. She is waiting for you. You ask: Have you been waiting long?"
    ],
  
    // Conversation 3
    [
      "Unos amigos tuyos están organizando una fiesta la próxima semana. Les preguntas: ¿Cuántas personas han invitado?",
      "Some friends of yours are having a party next week. You ask: How many people have they invited?"
    ],
  
    // Conversation 4
    [
      "Un amigo tuyo es profesor. Le preguntas: ¿Cuánto tiempo llevas enseñando?",
      "A friend of yours is a teacher. You ask: How long have you been teaching?"
    ],
  
    // Conversation 5
    [
      "Te encuentras con alguien que es escritor. Le preguntas: ¿Cuántos libros has escrito?",
      "You meet somebody who is a writer. You ask: How many books have you written?"
    ],
  
    // Conversation 6
    [
      "Un amigo tuyo está ahorrando dinero para hacer un viaje. Le preguntas: ¿Cuánto tiempo llevas ahorrando? ¿Cuánto dinero has ahorrado?",
      "A friend of yours is saving money to take a trip. You ask: How long have you been saving? How much money have you saved?"
    ]
  ];

const chapterSolution3 = [
    // Conversation 1
    [
      "¿Dónde has estado? ¿Has estado jugando tenis?",
      "Where have you been? Have you been playing tennis?"
    ],
    [
      "¡Mira! Alguien ha roto esa ventana.",
      "Look! Somebody has broken that window."
    ],
  
    // Conversation 2
    [
      "Te ves cansado. ¿Has estado trabajando duro?",
      "You look tired. Have you been working hard?"
    ],
  
    // Conversation 3
    [
      "¿Alguna vez has trabajado en una fábrica? – No, nunca.",
      "Have you ever worked in a factory? – No, never."
    ],
  
    // Conversation 4
    [
      "Hola, ¿está Sam allí? – No, ha salido a correr.",
      "Hi, is Sam there? – No, he has gone for a run."
    ],
  
    // Conversation 5
    [
      "Mi hermano es actor. Ha aparecido en varias películas.",
      "My brother is an actor. He has appeared in several films."
    ],
  
    // Conversation 6
    [
      "Lo siento, llego tarde. – Está bien. No he estado esperando mucho.",
      "Sorry, I’m late. – That’s all right. I haven’t been waiting long."
    ],
  
    // Conversation 7
    [
      "¿Sigue lloviendo? – No, ha dejado de llover.",
      "Is it still raining? – No, it has stopped."
    ],
  
    // Conversation 8
    [
      "He perdido mi teléfono móvil. ¿Lo has visto en algún lugar?",
      "I have lost my cell phone. Have you seen it anywhere?"
    ],
  
    // Conversation 9
    [
      "He leído el libro que me prestaste, pero aún no lo he terminado. Es muy interesante.",
      "I have read the book you lent me, but I haven't finished it yet. It’s very interesting."
    ],
  
    // Conversation 10
    [
      "He leído el libro que me prestaste, así que puedes tenerlo de vuelta ahora.",
      "I have read the book you lent me, so you can have it back now."
    ]
  ];
  
  

const presentPerfectContinuosandSimple = [...chapterExamples
...chapterSolution1,
...chapterSolution2,
...chapterSolution3,
];

export default presentPerfectContinuosandSimple;