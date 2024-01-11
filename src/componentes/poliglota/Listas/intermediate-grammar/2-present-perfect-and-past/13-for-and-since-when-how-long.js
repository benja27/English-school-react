const forSinceWhen = [
    // Conversation 1
    [
      "He estado esperando durante dos horas.",
      "I’ve been waiting for two hours."
    ],
    [
      "He estado esperando desde las 8:00.",
      "I’ve been waiting since 8:00."
    ],
  
    // Conversation 2
    [
      "Kelly ha estado trabajando aquí durante seis meses.",
      "Kelly has been working here for six months."
    ],
    [
      "Kelly ha estado trabajando aquí desde abril.",
      "Kelly has been working here since April. (= from April until now)"
    ],
  
    // Conversation 3
    [
      "No he visto a Tom durante tres días.",
      "I haven’t seen Tom for three days."
    ],
    [
      "No he visto a Tom desde el lunes.",
      "I haven’t seen Tom since Monday."
    ],
  
    // Conversation 4
    [
      "Han estado casados ​​10 años.",
      "They've been married 10 years."
    ],
    [
      "Han estado casados ​​durante 10 años.",
      "They’ve been married for 10 years."
    ],
  
    // Conversation 5
    [
      "No han tenido vacaciones durante 10 años.",
      "They haven’t had a vacation for 10 years."
    ],
    [
      "He vivido aquí toda mi vida.",
      "I’ve lived here all my life."
    ],
    [
      "No han tenido vacaciones en 10 años.",
      "They haven’t had a vacation in 10 years."
    ],
  
    // Conversation 6
    [
      "¿Cuándo comenzó a llover? – Comenzó a llover hace una hora, a la 1:00.",
      "When did it start raining? – It started raining an hour ago, at 1:00."
    ],
    [
      "¿Cuánto tiempo ha estado lloviendo? – Ha estado lloviendo durante una hora, desde la 1:00.",
      "How long has it been raining? – It’s been raining for an hour, since 1:00."
    ],
  
    // Conversation 7
    [
      "¿Cuándo se conocieron Joe y Carol por primera vez? – Se conocieron por primera vez hace mucho tiempo.",
      "When did Joe and Carol first meet? – They first met a long time ago."
    ],
    [
      "¿Cuánto tiempo llevan conociéndose? – Se conocen desde hace mucho tiempo.",
      "How long have they known each other? – They’ve known each other for a long time."
    ],
    [
      "¿Desde cuándo se conocen? – Se conocen desde que estaban en la escuela secundaria.",
      "How long have they known each other? – They’ve known each other since they were in high school."
    ],
  
    // Conversation 8
    [
      "Ha pasado dos años desde que vi a Joe. (= No he visto a Joe durante dos años)",
      "It’s been two years since I saw Joe. (= I haven’t seen Joe for two years)"
    ],
    [
      "Ha pasado mucho tiempo desde que fuimos al cine. (= No hemos ido al cine durante mucho tiempo)",
      "It’s been ages since we went to the movies (= We haven’t gone to the movies for ages)"
    ],
    [
      "¿Cuánto tiempo ha pasado desde que viste a Joe? (= ¿Cuándo fue la última vez que viste a Joe?)",
      "How long has it been since you saw Joe? (= When did you last see Joe?)"
    ],
    [
      "¿Cuánto tiempo ha pasado desde que murió la Sra. Hill? (= ¿Cuándo murió la Sra. Hill?)",
      "How long has it been since Mrs. Hll died? (= When did Mrs. Hill die?)"
    ],
  
    // Conversation 9
    [
      "Ha estado lloviendo desde la hora del almuerzo. (desde)",
      "It’s been raining since lunchtime. (since)"
    ],
    [
      "Sara ha vivido en Chicago desde 1995. (desde)",
      "Sara has lived in Chicago since 1995. (since)"
    ],
    [
      "Joe ha vivido en Dallas durante 10 años. (durante)",
      "Joe has lived in Dallas for 10 years. (for)"
    ],
    [
      "Estoy cansado de esperar. Hemos estado sentados aquí durante una hora. (durante)",
      "I’m tired of waiting. We’ve been sitting here for an hour. (for)"
    ],
    [
      "Kevin ha estado buscando trabajo desde que se graduó. (desde)",
      "Kevin has been looking for a job since he graduated. (since)"
    ],
    [
      "No he estado en una fiesta desde hace mucho tiempo. (desde)",
      "I haven’t been to a party for ages. (for)"
    ],
    [
      "Me pregunto cómo está Joe. No lo he visto desde la semana pasada. (desde)",
      "I wonder how Joe is. I haven’t seen him since last week. (since)"
    ],
    [
      "Jane está fuera en la universidad. Ha estado fuera desde agosto pasado. (desde)",
      "Jane is away at college. She’s been away since last August. (since)"
    ],
    [
      "El clima está seco. No ha llovido durante unas semanas. (durante)",
      "The weather is dry. It hasn’t rained for a few weeks. (for)"
    ],
  
    // Conversation 10
    [
      "Está lloviendo.",
      "It’s raining."
    ],
    [
      "¿Cuánto tiempo ha estado lloviendo?",
      "How long has it been raining?"
    ],
    [
      "¿Cuándo comenzó a llover?",
      "When did it start raining?"
    ],
  
    // Conversation 11
    [
      "Kate está estudiando japonés.",
      "Kate is studying Japanese."
    ],
    [
      "¿Cuánto tiempo lleva Kate estudiando japonés?",
      "How long has Kate been studying Japanese?"
    ],
    [
      "¿Cuándo comenzó Kate a estudiar japonés?",
      "When did Kate start studying Japanese?"
    ],
  
    // Conversation 12
    [
      "Conozco a Jeff. – ¿Cuánto tiempo llevas conociendo a Jeff?",
      "I know Jeff. – How long have you known Jeff?"
    ],
    [
      "¿Cuándo conociste a Jeff?",
      "When did you meet Jeff?"
    ],
  
    // Conversation 13
    [
      "Rebecca y David están casados.",
      "Rebecca and David are married."
    ],
    [
      "¿Cuánto tiempo llevan Rebecca y David casados?",
      "How long have Rebecca and David been married?"
    ],
    [
      "¿Cuándo se casaron Rebecca y David?",
      "When did Rebecca and David get married?"
    ],
  
    // Conversation 14
    [
      "Está lloviendo. Ha estado lloviendo desde la hora del almuerzo. Comenzó a llover a la hora del almuerzo.",
      "It’s raining. It’s been raining since lunchtime. It started raining at lunchtime."
    ],
  
    // Conversation 15
    [
      "Ann y Sue son amigas. Se conocieron hace años. Han sido amigas durante años.",
      "Ann and Sue are friends. They met years ago. They’ve been friends for years."
    ],
  
    // Conversation 16
    [
      "Mark está enfermo. Se puso enfermo el domingo. Ha estado enfermo desde el domingo.",
      "Mark is sick. He got sick on Sunday. He has been sick since Sunday."
    ],
  
    // Conversation 17
    [
      "Mark está enfermo. Se puso enfermo hace unos días. Ha estado enfermo durante unos días.",
      "Mark is sick. He got sick a few days ago. He has been sick for a few days."
    ],
  
    // Conversation 18
    [
      "Sarah está casada. Ha estado casada durante un año. Se casó hace un año.",
      "Sarah is married. She’s been married for a year. She got married a year ago."
    ],
  
    // Conversation 19
    [
      "Tienes dolor de cabeza. Comenzó cuando te despertaste. – He tenido dolor de cabeza desde que me desperté.",
      "You have a headache. It started when you woke up. – I’ve had a headache since I woke up."
    ],
  
    // Conversation 20
    [
      "Megan ha estado en Francia durante las últimas tres semanas. Fue a Francia hace tres semanas.",
      "Megan has been in France for the last three weeks. She went to France three weeks ago."
    ],
  
    // Conversation 21
    [
      "Estás trabajando en un hotel. Comenzaste hace seis meses. – He estado trabajando aquí durante seis meses.",
      "You’re working in a hotel. You started six months ago. – I’ve been working here for six months."

    // Conversation 22
    [
      "No, no he tomado vacaciones durante cinco años.",
      "No, I haven’t taken a vacation for five years."
    ],
  
    // Conversation 23
    [
      "No, no he visto a Laura desde hace aproximadamente un mes.",
      "No, I haven’t seen Laura for about a month."
    ],
  
    // Conversation 24
    [
      "No, no he ido al cine desde hace mucho tiempo.",
      "No, I haven’t gone to the movies for a long time."
    ],
  
    // Conversation 25
    [
      "No, no he salido a comer fuera desde hace siglos.",
      "No, I haven’t eaten out for ages."
    ]
  ];
  
  
export default forSinceWhen;