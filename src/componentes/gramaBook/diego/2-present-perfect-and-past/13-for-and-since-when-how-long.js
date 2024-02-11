const forSinceWhen = [
  // Conversation 1
  [
    "I’ve been waiting for two hours.",
    "He estado esperando durante dos horas. ⌛️",
  ],
  [
    "I’ve been waiting since 8:00.",
    "He estado esperando desde las 8:00. ⏰",
  ],

  // Conversation 2
  [
    "Kelly has been working here for six months.",
    "Kelly ha estado trabajando aquí durante seis meses. 👩‍💼",
  ],
  [
    "Kelly has been working here since April. (= from April until now)",
    "Kelly ha estado trabajando aquí desde abril. (= desde abril hasta ahora) 👩‍💼",
  ],

  // Conversation 3
  [
    "I haven’t seen Tom for three days.",
    "No he visto a Tom durante tres días. 👀",
  ],
  [
    "I haven’t seen Tom since Monday.",
    "No he visto a Tom desde el lunes. 👀",
  ],

  // Conversation 4
  [
    "They've been married 10 years.",
    "Han estado casados 10 años. 💑",
  ],
  [
    "They’ve been married for 10 years.",
    "Han estado casados durante 10 años. 💑",
  ],

  // Conversation 5
  [
    "They haven’t had a vacation for 10 years.",
    "No han tenido vacaciones durante 10 años. 🏖️",
  ],
  [
    "I’ve lived here all my life.",
    "He vivido aquí toda mi vida. 🏡",
  ],
  [
    "They haven’t had a vacation in 10 years.",
    "No han tenido vacaciones en 10 años. 🏖️",
  ],

  // Conversation 6
  [
    "When did it start raining? – It started raining an hour ago, at 1:00.",
    "¿Cuándo comenzó a llover? – Comenzó a llover hace una hora, a la 1:00. 🌧️",
  ],
  [
    "How long has it been raining? – It’s been raining for an hour, since 1:00.",
    "¿Cuánto tiempo ha estado lloviendo? – Ha estado lloviendo durante una hora, desde la 1:00. 🌧️",
  ],

  // Conversation 7
  [
    "When did Joe and Carol first meet? – They first met a long time ago.",
    "¿Cuándo se conocieron Joe y Carol por primera vez? – Se conocieron por primera vez hace mucho tiempo. 👫",
  ],
  [
    "How long have they known each other? – They’ve known each other for a long time.",
    "¿Cuánto tiempo llevan conociéndose? – Se conocen desde hace mucho tiempo. 👫",
  ],
  [
    "How long have they known each other? – They’ve known each other since they were in high school.",
    "¿Desde cuándo se conocen? – Se conocen desde que estaban en la escuela secundaria. 👫",
  ],

  // Conversation 8
  [
    "It’s been two years since I saw Joe. (= I haven’t seen Joe for two years)",
    "Ha pasado dos años desde que vi a Joe. (= No he visto a Joe durante dos años) 👀",
  ],
  [
    "It’s been ages since we went to the movies (= We haven’t gone to the movies for ages)",
    "Ha pasado mucho tiempo desde que fuimos al cine. (= No hemos ido al cine durante mucho tiempo) 🎬",
  ],
  [
    "How long has it been since you saw Joe? (= When did you last see Joe?)",
    "¿Cuánto tiempo ha pasado desde que viste a Joe? (= ¿Cuándo fue la última vez que viste a Joe?) 👀",
  ],
  [
    "How long has it been since Mrs. Hill died? (= When did Mrs. Hill die?)",
    "¿Cuánto tiempo ha pasado desde que murió la Sra. Hill? (= ¿Cuándo murió la Sra. Hill?) ⏳",
  ],

  // Conversation 9
  [
    "It’s been raining since lunchtime. (since)",
    "Ha estado lloviendo desde la hora del almuerzo. (desde) 🌧️",
  ],
  [
    "Sara has lived in Chicago since 1995. (since)",
    "Sara ha vivido en Chicago desde 1995. (desde) 🌆",
  ],
  [
    "Joe has lived in Dallas for 10 years. (for)",
    "Joe ha vivido en Dallas durante 10 años. (durante) 🌇",
  ],
  [
    "I’m tired of waiting. We’ve been sitting here for an hour. (for)",
    "Estoy cansado de esperar. Hemos estado sentados aquí durante una hora. (durante) ⌛️",
  ],
  [
    "Kevin has been looking for a job since he graduated. (since)",
    "Kevin ha estado buscando trabajo desde que se graduó. (desde) 👨‍🎓",
  ],
  [
    "I haven’t been to a party for ages. (for)",
    "No he estado en una fiesta desde hace mucho tiempo. (desde) 🎉",
  ],
  [
    "I wonder how Joe is. I haven’t seen him since last week. (since)",
    "Me pregunto cómo está Joe. No lo he visto desde la semana pasada. (desde) 👀",
  ],
  [
    "Jane is away at college. She’s been away since last August. (since)",
    "Jane está fuera en la universidad. Ha estado fuera desde agosto pasado. (desde) 🎓",
  ],
  [
    "The weather is dry. It hasn’t rained for a few weeks. (for)",
    "El clima está seco. No ha llovido durante unas semanas. (durante) ☀️",
  ],

  // Conversation 10
  [
    "It’s raining.",
    "Está lloviendo. 🌧️",
  ],
  [
    "How long has it been raining?",
    "¿Cuánto tiempo ha estado lloviendo? ⏳",
  ],
  [
    "When did it start raining?",
    "¿Cuándo comenzó a llover? ☔",
  ],

  // Conversation 11
  [
    "Kate is studying Japanese.",
    "Kate está estudiando japonés. 📚",
  ],
  [
    "How long has Kate been studying Japanese?",
    "¿Cuánto tiempo lleva Kate estudiando japonés? 🇯🇵",
  ],
  [
    "When did Kate start studying Japanese?",
    "¿Cuándo comenzó Kate a estudiar japonés? 📅",
  ],

  // Conversation 12
  [
    "I know Jeff. – How long have you known Jeff?",
    "Conozco a Jeff. – ¿Cuánto tiempo llevas conociendo a Jeff? 👥",
  ],
  [
    "When did you meet Jeff?",
    "¿Cuándo conociste a Jeff? 🤝",
  ],

  // Conversation 13
  [
    "Rebecca and David are married.",
    "Rebecca y David están casados. 👰🤵",
  ],
  [
    "How long have Rebecca and David been married?",
    "¿Cuánto tiempo llevan Rebecca y David casados? 💖",
  ],
  [
    "When did Rebecca and David get married?",
    "¿Cuándo se casaron Rebecca y David? 💍",
  ],

  // Conversation 14
  [
    "It’s raining. It’s been raining since lunchtime. It started raining at lunchtime.",
    "Está lloviendo. Ha estado lloviendo desde la hora del almuerzo. Comenzó a llover a la hora del almuerzo. 🌦️",
  ],

  // Conversation 15
  [
    "Ann and Sue are friends. They met years ago. They’ve been friends for years.",
    "Ann y Sue son amigas. Se conocieron hace años. Han sido amigas durante años. 👭",
  ],

  // Conversation 16
  [
    "Mark is sick. He got sick on Sunday. He has been sick since Sunday.",
    "Mark está enfermo. Se puso enfermo el domingo. Ha estado enfermo desde el domingo. 😷",
  ],

  // Conversation 17
  [
    "Mark is sick. He got sick a few days ago. He has been sick for a few days.",
    "Mark está enfermo. Se puso enfermo hace unos días. Ha estado enfermo durante unos días. 🤒",
  ],

  // Conversation 18
  [
    "Sarah is married. She’s been married for a year. She got married a year ago.",
    "Sarah está casada. Ha estado casada durante un año. Se casó hace un año. 💑",
  ],

  // Conversation 19
  [
    "You have a headache. It started when you woke up. – I’ve had a headache since I woke up.",
    "Tienes dolor de cabeza. Comenzó cuando te despertaste. – He tenido dolor de cabeza desde que me desperté. 😣",
  ],

  // Conversation 20
  [
    "Megan has been in France for the last three weeks. She went to France three weeks ago.",
    "Megan ha estado en Francia durante las últimas tres semanas. Fue a Francia hace tres semanas. 🇫🇷",
  ],

  // Conversation 21
  [
    "You’re working in a hotel. You started six months ago. – I’ve been working here for six months.",
    "Estás trabajando en un hotel. Comenzaste hace seis meses. – He estado trabajando aquí durante seis meses. 👨‍💼",
  ],

  // Conversation 22
  [
    "No, I haven’t taken a vacation for five years.",
    "No, no he tomado vacaciones durante cinco años. 🏖️",
  ],

  // Conversation 23
  [
    "No, I haven’t seen Laura for about a month.",
    "No, no he visto a Laura desde hace aproximadamente un mes. 👀",
  ],

  // Conversation 24
  [
    "No, I haven’t gone to the movies for a long time.",
    "No, no he ido al cine desde hace mucho tiempo. 🎬",
  ],

  // Conversation 25
  [
    "No, I haven’t eaten out for ages.",
    "No, no he salido a comer fuera desde hace siglos. 🍽️",
  ],
];

export default forSinceWhen;
