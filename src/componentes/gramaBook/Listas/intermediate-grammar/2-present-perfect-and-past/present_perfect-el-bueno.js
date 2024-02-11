
const PresentPerfect = [
    ["Have you ever eaten caviar? (in your life)", "¿Alguna vez has comido caviar? (en tu vida)"],
    ["We’ve never had a car.", "Nunca hemos tenido un coche."],
    ["Have you read Hamlet?", "¿Has leído Hamlet?"],
    ["No, I haven’t read any of Shakespeare’s plays.", "No, no he leído ninguna de las obras de Shakespeare."],
    ["Susan Really loves that movie, She’s seen it eight times!", "Susan realmente ama esa película. ¡La ha visto ocho veces!"],
    ["What boring movie! It’s the most boring movie I’ve ever seen.", "¡Qué película tan aburrida! Es la película más aburrida que he visto."],
    ["Have you hear from Brian recently?", "¿Has tenido noticias de Brian últimamente?"],
    ["I’ve met a lot of people in the last few days.", "He conocido a mucha gente en los últimos días."]
]

const presentPerfectAndPast = [
    ["I’ve lost my keys. Have you seen them?", "He perdido mis llaves. ¿Las has visto?"],
    ["Is Sally here? – No, she’s gone out.", "¿Está Sally aquí? – No, ella ha salido."],
    ["The police have arrested two people in connection with the robbery.", "La policía ha arrestado a dos personas en conexión con el robo."],
    ["I lost my keys. Did you see them?", "Perdí mis llaves. ¿Las viste?"],
    ["Is Sally here? – No, she went out.", "¿Está Sally aquí? – No, ella salió."],
    ["The police arrested two people in connection with the robbery.", "La policía arrestó a dos personas en conexión con el robo."],
    ["Have you heard? Bill and Sarah have won the lottery!", "¿Has oído? ¡Bill y Sarah han ganado la lotería!"],
    ["The road is closed. There’s been (there has been) an accident.", "La carretera está cerrada. Ha habido un accidente."]
]

const presentPerfectAndPast2 = [
    ["It was very cold yesterday.", "Hacía mucho frío ayer."],
    ["Paul and Lucy went out 10 minutes ago.", "Paul y Lucy salieron hace 10 minutos."],
    ["Did you eat a lot of candy when you were a child?", "¿Comías muchos caramelos cuando eras niño?"],
    ["I got home late last night. I was very tired and went straight to bed.", "Llegué a casa tarde anoche. Estaba muy cansado y fui directo a la cama."],
    ["When did your friends get here?", "¿Cuándo llegaron tus amigos?"],
    ["What time did you finish work?", "¿A qué hora terminaste el trabajo?"],
    ["I’ve lost my key. I can’t find it anywhere.", "He perdido mi llave. No la encuentro por ningún lado."],
    ["Did you eat a lot of candy when you were a child?", "¿Comías muchos caramelos cuando eras niño?"],
    // ["I’ve bought a new car. You have to come and see it.", "He comprado un coche nuevo. Tienes que venir a verlo."],
    // ["I bought a new car last week.", "Compré un coche nuevo la semana pasada."],
    // ["Where were you last night?", "¿Dónde estabas anoche?"],
    // ["Maria graduated from high school in 2004.", "Maria se graduó de la escuela secundaria en 2004."],
    // ["I’m looking for Mike. Have you seen him?", "Estoy buscando a Mike. ¿Lo has visto?"],
    // ["Have you been to Paris? – Yes, many times.", "¿Has estado en París? – Sí, muchas veces."],
    // ["I’m very hungry. I haven’t eaten much today.", "Tengo mucha hambre. No he comido mucho hoy."],
    // ["When was this book published?", "¿Cuándo se publicó este libro?"],
    // ["It hasn’t rained this week.", "(no / llover / esta semana) No ha llovido esta semana."],
    // ["The weather has been cold recently.", "(el clima / ser / frío / recientemente) El clima ha sido frío recientemente."],
    // ["It was cold last week.", "(hacer / frío / la semana pasada) Hizo frío la semana pasada."],
    // ["I didn't read a newspaper yesterday.", "(yo / no / leer / un periódico ayer) No leí un periódico ayer."],
    // ["I haven't read a newspaper today.", "(yo / no / leer / un periódico hoy) No he leído un periódico hoy."],
    // ["Kate has made a lot of money this year.", "(Kate / ganar / mucho dinero / este año) Kate has made a lot of money this year."],
    // ["She didn't make so much last year.", "(ella / no / ganar / tanto / el año pasado) She didn't make so much last year."],
    // ["Have you taken a vacation recently?", "(tú / tomar / unas vacaciones recientemente) Have you taken a vacation recently?"],
    // ["I don’t know where Lisa is. Have you seen her? (present perfect)", "No sé dónde está Lisa. ¿La has visto?"],
    // ["When I got home last night, I was very tired, so I went straight to bed. (simple past)", "Cuando llegué a casa anoche, estaba muy cansado, así que fui directo a la cama."],
    // ["Did you eat at the new sushi place on Joe’s birthday? – No, but we have been there twice this month. (simple past, present perfect)", "¿Comieron en el nuevo lugar de sushi en el cumpleaños de Joe? – No, pero hemos estado allí dos veces este mes."],
    // ["There was a bus drivers’ strike last week. There were not any buses. (simple past)", "Hubo una huelga de conductores de autobuses la semana pasada. No hubo autobuses."],
    // ["Mr. Lee worked in a bank for 15 years. Then he quit. (simple past)", "El Sr. Lee trabajó en un banco durante 15 años. Luego renunció."],
    // ["Kelly lives in Toronto. She has lived there all her life. (simple past, present perfect)", "Kelly vive en Toronto. Ha vivido allí toda su vida."],
    // ["Did you go to the movies last night? – Yes, but it was a mistake. The movie was awful. (simple past)", "¿Fuiste al cine anoche? – Sí, pero fue un error. La película fue terrible."],
    // ["My grandfather died before I was born. I never met him. (simple past)", "Mi abuelo murió antes de que yo naciera. Nunca lo conocí."],
    // ["I don’t know Karen’s husband. I have never met him. (simple past, present perfect)", "No conozco al esposo de Karen. Nunca lo he conocido."],
    // ["It’s nearly lunchtime, and I haven’t seen Martin all morning. I wonder where he is. (present perfect)", "Es casi la hora del almuerzo, y no he visto a Martin en toda la mañana. Me pregunto dónde está."],
    // ["How long have you lived there? – Five years. (present perfect)", "¿Cuánto tiempo has vivido allí? – Cinco años."],
    // ["Where did you live before that? – In Buenos Aires. (simple past)", "¿Dónde vivías antes de eso? – En Buenos Aires."],
    // ["And how long did you live there? – Two years. (simple past)", "¿Y cuánto tiempo viviste allí? – Dos años."]
]

const presentPerfectCountinous = [
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
]
const PresentPerfectAndSimple = [
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
]
const howLongHaveYouBeen = [
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
]
const ForAndSince = [
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
]
const pastPerfect = [
    [
        "Sara got to the party.",
        "Sara llegó a la fiesta. 🎉",
      ],
    
      // Conversation 2
      [
        "When Sarah arrived at the party, Eric had already gone home.",
        "Cuando Sarah llegó a la fiesta, Eric ya se había ido a casa. 🚪",
      ],
    
      // Conversation 3
      [
        "When we got home last night, we found that somebody had broken into our house.",
        "Cuando llegamos a casa anoche, descubrimos que alguien había entrado a nuestra casa. 🏡🔒",
      ],
    
      // Conversation 4
      [
        "Karen didn’t want to go to the movies with us because she’d already seen the film.",
        "Karen no quería ir al cine con nosotros porque ya había visto la película. 🍿🎬",
      ],
    
      // Conversation 5
      [
        "At first, I thought I’d done the right thing. But I soon realized that I’d made a big mistake.",
        "Al principio pensé que había hecho lo correcto. Pero pronto me di cuenta de que había cometido un gran error. 💡❌",
      ],
    
      // Conversation 6
      [
        "The man sitting next to me on the plane was very nervous. He hadn’t flown before.",
        "El hombre que estaba sentado a mi lado en el avión estaba muy nervioso. No había volado antes. ✈️😬",
      ],
    
      // Conversation 7
      [
        "The man sitting next to me on the plane was very nervous. He had never flown before.",
        "El hombre que estaba sentado a mi lado en el avión estaba muy nervioso. Nunca había volado antes. ✈️😬",
      ],
    
      // Conversation 8
      [
        "Who is that woman? I’ve never seen her before.",
        "¿Quién es esa mujer? Nunca la había visto antes. 👩🤷‍♂️",
      ],
]
const PastPerfectContinous = [
    [
        "When the boys came into the house, their clothes were dirty, their hair was messy, and one of them had a black eye. They’d been fighting.",
        "Cuando los niños entraron a la casa, sus ropas estaban sucias, su cabello desordenado, y uno de ellos tenía un ojo morado. Habían estado peleando. 👦👊",
      ],
    
      // Conversation 2
      [
        "I was very tired when I got home. I’d been working hard all day.",
        "Estaba muy cansado cuando llegué a casa. Había estado trabajando duro todo el día. 😴💼",
      ],
    
      // Conversation 3
      [
        "When I went to Tokyo a few years ago, I stayed with a friend of mine. She’d been living there only a short time but knew the city very well.",
        "Cuando fui a Tokio hace unos años, me quedé con una amiga mía. Ella llevaba viviendo allí poco tiempo pero conocía muy bien la ciudad. 🗼👫",
      ],
    
      // Conversation 4
      [
        "We’d been playing tennis for about half an hour when it started to rain hard.",
        "Habíamos estado jugando al tenis durante aproximadamente media hora cuando empezó a llover fuerte. 🎾🌧️",
      ],
    
      // Conversation 5
      [
        "Jim went to the doctor last Friday. He hadn’t been feeling well for some time.",
        "Jim fue al médico el pasado viernes. No se había sentido bien durante algún tiempo. 🤒⚕️",
      ],
    
      // Conversation 6
      [
        "I hope the bus comes soon. I’ve been waiting for 20 minutes. (before now)",
        "Espero que el autobús llegue pronto. He estado esperando durante 20 minutos. (antes de ahora) 🚌⌛",
      ],
    
      // Conversation 7
      [
        "The bus finally came. I’d been waiting for 20 minutes. (before the bus came)",
        "Finalmente llegó el autobús. Había estado esperando durante 20 minutos. (antes de que llegara el autobús) 🚍⏳",
      ],
    
      // Conversation 8
      [
        "James is out of breath. He has been running.",
        "James está sin aliento. Ha estado corriendo. 🏃‍♂️😅",
      ],
]

const haveAndHaveGot = [
    [
        "They have a new car.",
        "Ellos tienen un coche nuevo. 🚗🆕",
      ],
    
      // Sentence 2
      [
        "They’ve got a new car.",
        "Ellos tienen un coche nuevo. 🚗🆕",
      ],
    
      // Sentence 3
      [
        "Nancy has two sisters.",
        "Nancy tiene dos hermanas. 👭",
      ],
    
      // Sentence 4
      [
        "Nancy has got two sisters.",
        "Nancy tiene dos hermanas. 👭",
      ],
    
      // Sentence 5
      [
        "I have a headache.",
        "Tengo dolor de cabeza. 🤕",
      ],
    
      // Sentence 6
      [
        "I’ve got a headache.",
        "Tengo dolor de cabeza. 🤕",
      ],
    
      // Sentence 7
      [
        "He has a few problems.",
        "Él tiene algunos problemas. 😕",
      ],
    
      // Sentence 8
      [
        "He’s got a few problems.",
        "Él tiene algunos problemas. 😕",
      ],
]

const UsedTo = [
    [
        'I used to play tennis a lot, but I don’t play very often now.',
        'Solía jugar tenis mucho, pero ahora no juego muy a menudo. 🎾🔄',
      ],
    
      // Sentence 2
      [
        'David used to spend a lot of money on clothes. These days he can’t afford it.',
        'David solía gastar mucho dinero en ropa. Estos días no puede permitírselo. 💸👗',
      ],
    
      // Sentence 3
      [
        'Do you go to the movies much? – Not anymore, but I used to.',
        '¿Vas al cine mucho? - Ya no, pero solía hacerlo. 🎬🔄',
      ],
    
      // Sentence 4
      [
        'This building is now a furniture store. It used to be a movie theater.',
        'Este edificio ahora es una tienda de muebles. Solía ser un cine. 🏢🔄',
      ],
    
      // Sentence 5
      [
        'I used to think Mark was unfriendly, but now I realize he’s a very nice person.',
        'Solía pensar que Mark era antipático, pero ahora me doy cuenta de que es una persona muy agradable. 😕🔄',
      ],
    
      // Sentence 6
      [
        'I’ve started drinking coffee recently. I never used to like it before.',
        'Recientemente comencé a tomar café. Antes no solía gustarme. ☕🔄',
      ],
    
      // Sentence 7
      [
        'Nicole used to have very long hair when she was a child.',
        'Nicole solía tener el pelo muy largo cuando era niña. 👧💇‍♀️',
      ],
    
      // Sentence 8
      [
        'We used to live in a small town, but now we live in Chicago.',
        'Solíamos vivir en un pueblo pequeño, pero ahora vivimos en Chicago. 🏡🌆',
      ],       
]

export { PresentPerfect, presentPerfectAndPast, presentPerfectAndPast2, PresentPerfectAndSimple, presentPerfectCountinous, howLongHaveYouBeen, ForAndSince, pastPerfect, PastPerfectContinous, haveAndHaveGot, UsedTo}