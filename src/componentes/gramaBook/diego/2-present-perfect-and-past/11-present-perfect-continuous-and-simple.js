// 11 Present Perfect Continous and Simple (I have been doing and I have done)
const chapterExamples = [
  [
    'She has been painting the ceiling. 🎨',
    'Ella ha estado pintando el techo. 🎨',
  ],
  [
    'She has painted the ceiling. 🎨',
    'Ella ha pintado el techo. 🎨',
  ],
  [
    'My hands are very dirty. I’ve been fixing the car. 🔧',
    'Mis manos están muy sucias. He estado arreglando el coche. 🔧',
  ],
  [
    'I’ve fixed the car. 🚗',
    'He arreglado el coche. 🚗',
  ],
  [
    'Joe has been eating too much recently. He should eat less. 🍔',
    'Joe ha estado comiendo demasiado últimamente. Debería comer menos. 🍔',
  ],
  [
    'Somebody has eaten all my candy. The box is empty. 🍬',
    'Alguien se ha comido todos mis caramelos. La caja está vacía. 🍬',
  ],
  [
    'It’s nice to see you again. What have you been doing since the last time we saw you? 👋',
    'Es agradable volver a verte. ¿Qué has estado haciendo desde la última vez que te vimos? 👋',
  ],
  [
    'Where’s the book I gave you? What have you done with it? 📖',
    '¿Dónde está el libro que te di? ¿Qué has hecho con él? 📖',
  ],
  [
    'Whare have you been? Have you been playing tennis? 🎾',
    '¿Dónde has estado? ¿Has estado jugando al tenis? 🎾',
  ],
  [
    'Have you ever played tennis? 🎾',
    '¿Alguna vez has jugado tenis? 🎾',
  ],
  [
    'How long have you been reading that book? 📚',
    '¿Cuánto tiempo has estado leyendo ese libro? 📚',
  ],
  [
    'How much of that book have you read? 📖',
    '¿Cuánto de ese libro has leído? 📖',
  ],
  [
    'Lisa is still writing her report. She’s been writing it all day. 📝',
    'Lisa todavía está escribiendo su informe. Lo ha estado escribiendo todo el día. 📝',
  ],
  [
    'Lisa has written 10 pages today. 📄',
    'Lisa ha escrito 10 páginas hoy. 📄',
  ],
  [
    'The’ve been playing tennis since 2:00. 🎾',
    'Han estado jugando al tenis desde las 2:00. 🎾',
  ],
  [
    'The’ve played tennis three times this week. 🎾',
    'Han jugado tenis tres veces esta semana. 🎾',
  ],
  [
    'I’m studying Spanish, but I haven’t been studying it very long. 🇪🇸',
    'Estoy estudiando español, pero no lo he estado estudiando por mucho tiempo. 🇪🇸',
  ],
  [
    'I’m studying Spanish, but I haven’t learned very much yet. 📚',
    'Estoy estudiando español, pero aún no he aprendido mucho. 📚',
  ],
];

const chapterSolution1 = [
  [
    'Luis started reading a book two hours ago. He is still reading it, and now he is on page 53. He has been reading for two hours. He has read 53 pages so far. 📖',
    'Luis empezó a leer un libro hace dos horas. Todavía lo está leyendo, y ahora está en la página 53. Ha estado leyendo durante dos horas. Ha leído 53 páginas hasta ahora. 📖',
  ],
  [
    'Min is from Korea. She is traveling around Asia right now. She began her trip three months ago. She has been traveling for three months. She has visited six countries so far. ✈️',
    'Min es de Corea. Está viajando por Asia en este momento. Comenzó su viaje hace tres meses. Ha estado viajando durante tres meses. Ha visitado seis países hasta ahora. ✈️',
  ],
  [
    'Jimmy is a tennis player. He began playing tennis when he was 10 years old. This year he is the national champion again, for the fourth time. He has won the national championships four times. He has been playing tennis since he was 10. 🏆',
    'Jimmy es un jugador de tenis. Empezó a jugar al tenis cuando tenía 10 años. Este año es campeón nacional nuevamente, por cuarta vez. Ha ganado los campeonatos nacionales cuatro veces. Ha estado jugando al tenis desde que tenía 10 años. 🏆',
  ],
  [
    'When they graduated from college, Lisa and Amy started making movies together. They still make movies. They have made five movies since they finished college. They have been making movies since they finished college. 🎬',
    'Cuando se graduaron de la universidad, Lisa y Amy empezaron a hacer películas juntas. Todavía hacen películas. Han hecho cinco películas desde que terminaron la universidad. Han estado haciendo películas desde que terminaron la universidad. 🎬',
  ],
];

const chapterSolution2 = [
  // Conversation 1
  [
    'You have a friend who is studying Arabic. You ask: How long have you been studying Arabic? 📚',
    'Tienes un amigo que está estudiando árabe. Le preguntas: ¿Cuánto tiempo llevas estudiando árabe? 📚',
  ],

  // Conversation 2
  [
    'You have just arrived to meet a friend. She is waiting for you. You ask: Have you been waiting long? ⏳',
    'Acabas de llegar para encontrarte con una amiga. Ella te está esperando. Le preguntas: ¿Has estado esperando mucho? ⏳',
  ],

  // Conversation 3
  [
    'Some friends of yours are having a party next week. You ask: How many people have they invited? 🎉',
    'Unos amigos tuyos están organizando una fiesta la próxima semana. Les preguntas: ¿Cuántas personas han invitado? 🎉',
  ],

  // Conversation 4
  [
    'A friend of yours is a teacher. You ask: How long have you been teaching? 🍎',
    'Un amigo tuyo es profesor. Le preguntas: ¿Cuánto tiempo llevas enseñando? 🍎',
  ],

  // Conversation 5
  [
    'You meet somebody who is a writer. You ask: How many books have you written? 📚',
    'Te encuentras con alguien que es escritor. Le preguntas: ¿Cuántos libros has escrito? 📚',
  ],

  // Conversation 6
  [
    'A friend of yours is saving money to take a trip. You ask: How long have you been saving? How much money have you saved? 💰',
    'Un amigo tuyo está ahorrando dinero para hacer un viaje. Le preguntas: ¿Cuánto tiempo llevas ahorrando? ¿Cuánto dinero has ahorrado? 💰',
  ],
];

const chapterSolution3 = [
  // Conversation 1
  [
    'Where have you been? Have you been playing tennis? 🎾',
    '¿Dónde has estado? ¿Has estado jugando tenis? 🎾',
  ],
  [
    'Look! Somebody has broken that window. 👀',
    '¡Mira! Alguien ha roto esa ventana. 👀',
  ],

  // Conversation 2
  [
    'You look tired. Have you been working hard? 😓',
    'Te ves cansado. ¿Has estado trabajando duro? 😓',
  ],

  // Conversation 3
  [
    'Have you ever worked in a factory? – No, never. 👷‍♂️',
    '¿Alguna vez has trabajado en una fábrica? – No, nunca. 👷‍♂️',
  ],

  // Conversation 4
  [
    'Hi, is Sam there? – No, he has gone for a run. 🏃‍♂️',
    'Hola, ¿está Sam allí? – No, ha salido a correr. 🏃‍♂️',
  ],

  // Conversation 5
  [
    'My brother is an actor. He has appeared in several films. 🎬',
    'Mi hermano es actor. Ha aparecido en varias películas. 🎬',
  ],

  // Conversation 6
  [
    'Sorry, I’m late. – That’s all right. I haven’t been waiting long. 🕰️',
    'Lo siento, llego tarde. – Está bien. No he estado esperando mucho. 🕰️',
  ],

  // Conversation 7
  [
    'Is it still raining? – No, it has stopped. ☔',
    '¿Sigue lloviendo? – No, ha dejado de llover. ☔',
  ],

  // Conversation 8
  [
    'I have lost my cell phone. Have you seen it anywhere? 📱',
    'He perdido mi teléfono móvil. ¿Lo has visto en algún lugar? 📱',
  ],

  // Conversation 9
  [
    'I have read the book you lent me, but I haven\'t finished it yet. It’s very interesting. 📖',
    'He leído el libro que me prestaste, pero aún no lo he terminado. Es muy interesante. 📖',
  ],

  // Conversation 10
  [
    'I have read the book you lent me, so you can have it back now. 📚',
    'He leído el libro que me prestaste, así que puedes tenerlo de vuelta ahora. 📚',
  ],
];

const presentPerfectContinuosandSimple = [
  ...chapterExamples,
  ...chapterSolution1,
  ...chapterSolution2,
  ...chapterSolution3,
];

export default presentPerfectContinuosandSimple;
