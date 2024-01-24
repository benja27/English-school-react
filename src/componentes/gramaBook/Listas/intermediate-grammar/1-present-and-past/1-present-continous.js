//Present continous (I'm doing):

const conversationAboutBrian = [
  [
      `A: I saw Brian a few days ago. B: Oh, did you? What’s he doing these days? 
       A: He’s in college now. B: What's he studying? A: Psychology.
       "A: B: Is he enjoying it? "
       "A: Yes, he says he's learning a lot. ",
       "A: Hi, Liz. How is your new job going? B: Not bad. It wasn’t so good at first, but it's getting better now. ",
       "A: What about Jonathan? Is he OK? B: Yes, but he's not enjoying his work at the moment.",
       "B: He’s been in the same job for a long time, and he's beginning to get bored with it.",
       `      
       ,

      `A: Vi a Brian hace unos días. B: ¿Oh, en serio? ¿Qué está haciendo estos días?
      "A: Ahora está en la universidad. B: ¿Qué está estudiando? A: Psicología. "
      "B: ¿Le está gustando?"
      "A: Sí, dice que está aprendiendo mucho."
      "A: Hola, Liz. ¿Cómo va tu nuevo trabajo? B: No mal. No fue tan bueno al principio, pero ahora está mejorando."
      "A: ¿Y Jonathan? ¿Está bien? B: Sí, pero no está disfrutando su trabajo en este momento."
      "B: Ha estado en el mismo trabajo durante mucho tiempo, y está empezando a aburrirse."
      `  
  ],[
    `
      A: I saw Brian a few days ago. B: Oh, did you? What’s he doing these days? 
      A: He’s in college now. B: What's he studying? A: Psychology.
      "A: B: Is he enjoying it? "
      "A: Yes, he says he's learning a lot. ",
    `,
    `
      A: Vi a Brian hace unos días. B: ¿Oh, en serio? ¿Qué está haciendo estos días?
      "A: Ahora está en la universidad. B: ¿Qué está estudiando? A: Psicología. "
      "B: ¿Le está gustando?"
      "A: Sí, dice que está aprendiendo mucho."
    `
  ],[
    `
    "A: Hi, Liz. How is your new job going? B: Not bad. It wasn’t so good at first, but it's getting better now. ",
    "A: What about Jonathan? Is he OK? B: Yes, but he's not enjoying his work at the moment.",
    "B: He’s been in the same job for a long time, and he's beginning to get bored with it."
    `,
    `
    "A: Hola, Liz. ¿Cómo va tu nuevo trabajo? B: No mal. No fue tan bueno al principio, pero ahora está mejorando."
    "A: ¿Y Jonathan? ¿Está bien? B: Sí, pero no está disfrutando su trabajo en este momento."
    "B: Ha estado en el mismo trabajo durante mucho tiempo, y está empezando a aburrirse."
    `
  ]
]

const presentContinuous = [
  [
    'You’re working hard today. Yes, I have a lot to do.',
    'Estás trabajando duro hoy. Sí, tengo mucho que hacer. 😅',
  ],
  [
    'I’m looking for Christine. Do you know where she is?',
    'Estoy buscando a Christine. ¿Sabes dónde está?',
  ],
  [
    'It’s getting dark. Should I turn on the light? 🌙💡',
    'Se está oscureciendo. ¿Debería encender la luz? 🔦',
  ],
  [
    'They don’t have anywhere to live at the moment. They’re staying with friends until they find a place. 🏡',
    'No tienen donde vivir en este momento. Están quedándose con amigos hasta que encuentren un lugar. 🤝',
  ],
  [
    'Things are not so good at work. The company is losing money. 💼💸',
    'Las cosas no van tan bien en el trabajo. La empresa está perdiendo dinero. 😟',
  ],
  [
    'Do you have an umbrella? It’s starting to rain. ☔',
    '¿Tienes un paraguas? Está empezando a llover. ☁️',
  ],
  [
    'You’re making a lot of noise. Can you be quieter? I’m trying to concentrate. 🤫🧘‍♂️',
    'Estás haciendo mucho ruido. ¿Puedes estar más tranquilo? Estoy tratando de concentrarme. 🤯',
  ],
  [
    'Why are all these people here? What’s happening? 🤷‍♂️👀',
    '¿Por qué están todas estas personas aquí? ¿Qué está pasando? 🤨',
  ],

  [
    "Please don’t make so much noise. I'm trying to work.",
    'Por favor, no hagas tanto ruido. Estoy tratando de trabajar. 🤫',
  ],
  [
    'Let’s go out now. It isn’t raining anymore.',
    'Vamos afuera ahora. Ya no está lloviendo. ☔',
  ],
  [
    'You can turn off the radio. I am not listening to it.',
    'Puedes apagar la radio. No la estoy escuchando. 📻',
  ],
  [
    'Kate called me last night. She’s on vacation in Quebec. She is having a great time and doesn’t want to come home.',
    'Kate me llamó anoche. Está de vacaciones en Quebec. Lo está pasando muy bien y no quiere volver a casa. 🏞️',
  ],
  [
    'I want to lose weight, so this week I am not eating lunch.',
    'Quiero perder peso, así que esta semana no estoy almorzando. 🥗',
  ],
  [
    'Andrew has just started evening classes. He is studying German.',
    'Andrew acaba de empezar clases nocturnas. Está estudiando alemán. 📚',
  ],
  [
    'Paul and Sally had an argument. They are not speaking to each other.',
    'Paul y Sally tuvieron una discusión. No se están hablando. 😡',
  ],
  [
    'I am getting tired. I need a break.',
    'Me estoy cansando. Necesito un descanso. 😴',
  ],
  [
    "Tim isn't working this week. He has a week off.",
    'Tim no está trabajando esta semana. Tiene una semana libre. 🌴',
  ],[
    `
      A: I saw Brian a few days ago. B: Oh, did you? What’s he doing these days? 
      A: He’s in college now. B: What's he studying? A: Psychology.
      A: B: Is he enjoying it? 
      "A: Yes, he says he's learning a lot. "
    `,
    `
      A: Vi a Brian hace unos días. B: ¿Oh, en serio? ¿Qué está haciendo estos días?
      A: Ahora está en la universidad. B: ¿Qué está estudiando? A: Psicología. 
      B: ¿Le está gustando?
      A: Sí, dice que está aprendiendo mucho.
    `
  ],
  [
    `
    A: Hi, Liz. How is your new job going? B: Not bad. It wasn’t so good at first, but it's getting better now. ,
    A: What about Jonathan? Is he OK? B: Yes, but he's not enjoying his work at the moment.,
    B: He’s been in the same job for a long time, and he's beginning to get bored with it.
    `,
    `
    A: Hola, Liz. ¿Cómo va tu nuevo trabajo? B: No mal. No fue tan bueno al principio, pero ahora está mejorando.
    A: ¿Y Jonathan? ¿Está bien? B: Sí, pero no está disfrutando su trabajo en este momento.
    B: Ha estado en el mismo trabajo durante mucho tiempo, y está empezando a aburrirse.
    `
  ],  
  [
    "The population of the world is increasing very fast.",
    "La poblacion mundial esta incrementando muy rapido."
  ],
  [
    "The world is changing. Things never stay the same.",
    "El mundo esta cambiando. Las cosas nunca se quedan igual."
  ],
  [
    "The situation is already bad and it is getting worse.",
    "La situacion ya esta mal y se esta poniendo peor."
  ],
  [
    "The cost of living is rising. Every year things are more expensive",
    "El costo de vida se esta elevando. Cada Año las cosas son mas caras"
  ],
  [
    "The weather is beginning to improve. The rain has stopped, and the wind ins’t as strong.",
    "El clima está comenzando a mejorar. La lluvia ha parado, y el viento no es tan fuerte."
  ]
];



export default presentContinuous;
