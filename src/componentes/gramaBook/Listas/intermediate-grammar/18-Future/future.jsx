const presentTenses = [
    ["He is playing tennis on Monday afternoon. 🎾", "Él está jugando tenis el lunes por la tarde. 🎾"],
    ["He is going to the dentist on Tuesday morning. 😬", "Él va al dentista el martes por la mañana. 😬"],
    ["He is having dinner with Ann on Friday. 🍽️", "Él va a cenar con Ann el viernes. 🍽️"],
    ["What are you doing Saturday night? – I’m going to the theater. 🎭", "¿Qué estás haciendo el sábado por la noche? – Voy al teatro. 🎭"],
    ["What time is Cathy arriving tomorrow? – At 10:30. I’m meeting her at the airport. ✈️", "¿A qué hora llega Cathy mañana? – A las 10:30. La voy a encontrar en el aeropuerto. ✈️"],
    ["I’m not working tomorrow, so we can go out somewhere. 🌃", "No trabajo mañana, así que podemos salir a algún lugar. 🌃"],
    ["Sam isn’t playing football next Saturday. He hurt his leg. ⚽", "Sam no juega al fútbol el próximo sábado. Se lastimó la pierna. ⚽"],
    ["What are you going to do Saturday night? 🤔", "¿Qué vas a hacer el sábado por la noche? 🤔"],
    ["What are you doing tonight? 🌙", "¿Qué estás haciendo esta noche? 🌙"],
    ["Eric is getting married next month. 💍", "Eric se casa el próximo mes. 💍"],
    ["I’m tired. I’m going to bed now. Goodnight. 😴", "Estoy cansado. Me voy a la cama ahora. Buenas noches. 😴"],
    ["Tina, are you ready yet? – Yes, I’m coming. 🏃‍♀️", "Tina, ¿ya estás lista? – Sí, voy. 🏃‍♀️"],
    ["My flight leaves at 11:30, so I need to get to the airport by 10:00. ✈️", "Mi vuelo sale a las 11:30, así que necesito llegar al aeropuerto a las 10:00. ✈️"],
    ["What time does the movie begin? 🎬", "¿A qué hora comienza la película? 🎬"],
    ["It’s Wednesday tomorrow. 📅", "Mañana es miércoles. 📅"],
    ["Tomorrow is Wednesday. 📆", "Mañana es miércoles. 📆"],
    ["I start my new job on Monday. 💼", "Empiezo mi nuevo trabajo el lunes. 💼"],
    ["What time do you finish work tomorrow? ⌚", "¿A qué hora terminas el trabajo mañana? ⌚"],
    ["What time are you meeting Ann tomorrow? ⌚", "¿A qué hora te encuentras con Ann mañana? ⌚"],
    ["What time are you arriving? ⌚", "¿A qué hora llegas? ⌚"],
    ["What time does the plane arrive? ✈️", "¿A qué hora llega el avión? ✈️"],
    ["I’m going to the movies tonight. 🎥", "Voy al cine esta noche. 🎥"],
    ["The movie starts at 8:15 (tonight). 🕗", "La película comienza a las 8:15 (esta noche). 🕗"],
    ["Where are you going? – Quebec. 🌍", "¿Adónde vas? – Quebec. 🌍"],
    ["How long are you planning to stay? – Ten days. ⏳", "¿Cuánto tiempo planeas quedarte? – Diez días. ⏳"],
    ["When are you planning to leave? – Next Friday. 🗓️", "¿Cuándo planeas irte? – El próximo viernes. 🗓️"],
    ["Are you planning to go alone? – No, with a friend. 👫", "¿Planeas ir solo? – No, con un amigo. 👫"],
    ["Are you planning to travel by car? – No, by plane. ✈️", "¿Planeas viajar en auto? – No, en avión. ✈️"],
    ["Where are you planning to stay? – In a hotel. 🏨", "¿Dónde planeas quedarte? – En un hotel. 🏨"],
    ["I’m going to the movie tonight. 🎬", "Voy al cine esta noche. 🎬"],
    ["Does the movie begin at 3:30 or 4:30? 🕒", "¿La película comienza a las 3:30 o a las 4:30? 🕒"],
    ["We are having a party next Saturday. Would you like to come? 🎉", "Vamos a tener una fiesta el próximo sábado. ¿Te gustaría venir? 🎉"],
    ["The art exhibit opens on May 3. 🎨", "La exposición de arte se inaugura el 3 de mayo. 🎨"],
    ["I am not going out tonight. I am staying at home. 🏡", "No salgo esta noche. Me quedo en casa. 🏡"],
    ["Are you doing anything tomorrow morning? – No, I’m free. Why? 🤷‍♂️", "¿Estás haciendo algo mañana por la mañana? – No, estoy libre. ¿Por qué? 🤷‍♂️"],
    ["We are going to a concert tonight. It starts at 7:30. 🎤", "Vamos a un concierto esta noche. Comienza a las 7:30. 🎤"],
    ["I am leaving now. I came to say goodbye. 👋", "Me voy ahora. Vine a despedirme. 👋"],
    ["Have you seen Liz recently? – No, but we are meeting for lunch next week. 🍽️", "¿Has visto a Liz últimamente? – No, pero nos encontraremos para almorzar la próxima semana. 🍽️"],
    ["Excuse me. What time does this train get to Boston? 🚆", "Disculpe. ¿A qué hora llega este tren a Boston? 🚆"],
    ["Julie, I am going to the store now. Are you coming with me? 🛒", "Julie, voy a la tienda ahora. ¿Vienes conmigo? 🛒"],
    ["I’m bored with this show. What time does it end? 🎭", "Me aburro con este espectáculo. ¿A qué hora termina? 🎭"],
    ["I am not using the car tonight, so you can have it. 🚗", "No voy a usar el coche esta noche, así que puedes tomarlo. 🚗"],
    ["Sue is coming to see us tomorrow. She is flying from Seattle, and her plane arrives at 10:15 a.m. ✈️", "Sue viene a vernos mañana. Viene volando desde Seattle, y su avión llega a las 10:15 a. m. ✈️"]
]

const iamGoingToDo = [
    [
        "Are you going to watch the football game on TV tonight? – No, I’m going to go to bed early. I’m tired from my trip. 😴",
        "¿Vas a ver el partido de fútbol en la televisión esta noche? – No, voy a ir a la cama temprano. Estoy cansado de mi viaje. 😴"
      ],
      [
        "I heard Lisa won some money. What is she going to do with it? – She’s going to buy a new car. 🚗",
        "Escuché que Lisa ganó algo de dinero. ¿Qué va a hacer con eso? – Va a comprar un coche nuevo. 🚗"
      ],
      [
        "I’m going to make a quick phone call. Can you wait for me? ☎️",
        "Voy a hacer una llamada rápida. ¿Puedes esperarme? ☎️"
      ],
      [
        "This cheese smells awful. I’m not going to eat it. 🤢",
        "Este queso huele horrible. No lo voy a comer. 🤢"
      ],
      [
        "What time are you meeting Amanda tonight? ⌚",
        "¿A qué hora te encuentras con Amanda esta noche? ⌚"
      ],
      [
        "I’m leaving tomorrow. I already have my plane ticket. ✈️",
        "Me voy mañana. Ya tengo mi boleto de avión. ✈️"
      ],
      [
        "The windows are dirty. – Yes, I know. I’m going to wash them later. 🪟",
        "Las ventanas están sucias. – Sí, lo sé. Voy a lavarlas más tarde. 🪟"
      ],
      [
        "I’ve decided not to stay here any longer. Tomorrow I’m going to look for another place to live. 🏡",
        "He decidido no quedarme aquí por más tiempo. Mañana voy a buscar otro lugar para vivir. 🏡"
      ],
      [
        "Look at those dark clouds! It’s going to rain. ☔",
        "¡Mira esas nubes oscuras! Va a llover. ☔"
      ],
      [
        "I feel awful. I think I’m going to be sick. 🤢",
        "Me siento fatal. Creo que voy a enfermarme. 🤢"
      ],
      [
        "The economic situation is bad now, and things are going to get worse. 📉",
        "La situación económica es mala ahora, y las cosas van a empeorar. 📉"
      ],
      [
        "We were going to fly to New York, but then we decided to drive instead. 🛫",
        "Íbamos a volar a Nueva York, pero luego decidimos conducir en su lugar. 🚗"
      ],
      [
        "Peter was going to take the exam, but he changed his mind. 📚",
        "Peter iba a tomar el examen, pero cambió de opinión. 📚"
      ],
      [
        "I was just going to cross the street when somebody shouted, ‘’Stop!’’. 🚸",
        "Estaba a punto de cruzar la calle cuando alguien gritó, ‘’¡Detente!’’. 🚸"
      ],
      [
        "I thought it was going to rain, but it didn’t. ☁️",
        "Pensé que iba a llover, pero no lo hizo. ☁️"
      ],
      [
        "Your friend has won some money. You ask: What are you going to do with it? 💰",
        "Tu amigo ha ganado algo de dinero. Le preguntas: ¿Qué vas a hacer con eso? 💰"
      ],
      [
        "Your friend is going to a party tonight. You ask: What are you going to wear? 👗",
        "Tu amigo va a una fiesta esta noche. Le preguntas: ¿Qué vas a ponerte? 👗"
      ],
      [
        "Your friend has just bought a new table. You ask: Where are you going to put it? 🪑",
        "Tu amigo acaba de comprar una mesa nueva. Le preguntas: ¿Dónde la vas a poner? 🪑"
      ],
      [
        "Your friend has decided to have a party. You ask: Who are you going to invite? 🎉",
        "Tu amigo ha decidido hacer una fiesta. Le preguntas: ¿A quién vas a invitar? 🎉"
      ],
      [
        "You have decided to clean your room this morning: Are you going out this morning? – No, I’m going to clean my room. 🧹",
        "Has decidido limpiar tu habitación esta mañana: ¿Vas a salir esta mañana? – No, voy a limpiar mi habitación. 🧹"
      ],
      [
        "You bought a sweater, but it doesn’t fit you very well. You have decided to return it: That sweater is too big for you. – I know, I'm going to return it. 🛍️",
        "Compraste un suéter, pero no te queda muy bien. Has decidido devolverlo: Ese suéter te queda demasiado grande. – Lo sé, lo voy a devolver. 🛍️"
      ],
      [
        "You have been offered a job, but you have decided not to take it: I hear you’ve been offered a job. – That’s right, but I'm not going to take it. 👔",
        "Te han ofrecido un trabajo, pero has decidido no aceptarlo: Escuché que te ofrecieron un trabajo. – Así es, pero no lo voy a aceptar. 👔"
      ],
      [
        "You have to call Sarah. It’s morning now, and you intend to call her tonight: Have you called Sarah yet? – No, I'm going to call her tonight. 📞",
        "Tienes que llamar a Sarah. Es de mañana ahora, y planeas llamarla esta noche: ¿Ya llamaste a Sarah? – No, la voy a llamar esta noche. 📞"
      ],
      [
        "You are in a restaurant. The food is awful, and you’ve decided to leave: This food is terrible. – I know, I'm not going to eat here again. 🍽️",
        "Estás en un restaurante. La comida es horrible, y has decidido irte: Esta comida es terrible. – Lo sé, no voy a volver a comer aquí. 🍽️"
      ],
      [
        "There are a lot of dark clouds in the sky. (rain) It’s going to rain. ☔",
        "Hay muchas nubes oscuras en el cielo. (lluvia) Va a llover. ☔"
      ],
      [
        "It is 8:30. Tom is leaving his house. He should be at work at 8:45, but it takes him 30 minutes to get there. (late) He is going to be late. ⏰",
        "Son las 8:30. Tom está saliendo de su casa. Debería estar en el trabajo a las 8:45, pero le lleva 30 minutos llegar allí. (tarde) Va a llegar tarde. ⏰"
      ],
      [
        "There is a hole in the bottom of the boat. A lot of water is coming in through the hole. (sink) The boat is going to sink. ⛵",
        "Hay un agujero en el fondo del barco. Mucho agua está entrando por el agujero. (hundir) El barco se va a hundir. ⛵"
      ],
      [
        "Erica and Chris are driving in the country. There is very little gas left in the tank. The nearest gas station is miles away. (run out) They are going to run out of gas. ⛽",
        "Erica and Chris están conduciendo en el campo. Queda muy poco gas en el tanque. La gasolinera más cercana está a kilómetros de distancia. (agotarse) Se van a quedar sin gasolina. ⛽"
      ],
      [
        "We were going to fly to New York, but then we decided to drive instead. ✈️",
        "Íbamos a volar a Nueva York, pero luego decidimos conducir en su lugar. 🚗"
      ],
      [
        "I was going to buy some new clothes yesterday, but I was very busy and didn’t have time to go shopping. 👕",
        "Yo iba a comprar ropa nueva ayer, pero estaba muy ocupado y no tenía tiempo para ir de compras. 👕"
      ],
      [
        "Joshua and I were going to play tennis last week, but he hurt his ankle. 🎾",
        "Joshua and I were going to play tennis last week, but he hurt his ankle. 🎾"
      ],
      [
        "I was going to call Jane, but I decided to e-mail her instead. 📧",
        "Yo iba a llamar a Jane, pero decidí enviarle un correo electrónico en su lugar. 📧"
      ],
      [
        "The last time I saw Bob, he was going to quit his job. – That’s right, but in the end, he decided not to. 👔",
        "La última vez que vi a Bob, él iba a renunciar a su trabajo. – Así es, pero al final, decidió no hacerlo. 👔"
      ],
      [
        "We were going to have a party last week, but some of our friends couldn’t come, so we canceled. 🎉",
        "Íbamos a tener una fiesta la semana pasada, pero algunos de nuestros amigos no pudieron venir, así que la cancelamos. 🎉"
      ]
]
const will1 = [
    [
        "Oh, I left the door open. I’ll go and shut it. 🔒",
        "Oh, dejé la puerta abierta. Voy a ir a cerrarla. 🔒"
      ],
      [
        "What would you like to drink? – I’ll have some orange juice, please. 🍹",
        "¿Qué te gustaría beber? – Tomaré un poco de jugo de naranja, por favor. 🍹"
      ],
      [
        "Did you call Julie? – Oh no, I forgot. I’ll call her now. 📞",
        "¿Llamaste a Julie? – Oh no, me olvidé. La llamaré ahora. 📞"
      ],
      [
        "I’m a little hungry. I think I’ll have something to eat. 🍽️",
        "Tengo un poco de hambre. Creo que comeré algo. 🍽️"
      ],
      [
        "I don’t think I’ll go out tonight. I’m too tired. 😴",
        "No creo que salga esta noche. Estoy demasiado cansado. 😴"
      ],
      [
        "I can see you’re busy. So I won’t stay long. ⏳",
        "Veo que estás ocupado. Así que no me quedaré mucho tiempo. ⏳"
      ],
      [
        "I’m going on vacation next Saturday. ✈️",
        "Me voy de vacaciones el próximo sábado. ✈️"
      ],
      [
        "Are you working tomorrow? 💼",
        "¿Trabajas mañana? 💼"
      ],
      [
        "That bag looks heavy. I’ll help you with it. 💪",
        "Esa bolsa parece pesada. Te ayudaré con ella. 💪"
      ],
      [
        "Can you give Tim this book? – Sure, I’ll give it to him when I see him this afternoon. 📖",
        "¿Puedes darle este libro a Tim? – Claro, se lo daré cuando lo vea esta tarde. 📖"
      ],
      [
        "Thanks for lending me the money. I’ll pay you back on Friday. 💸",
        "Gracias por prestarme el dinero. Te lo devolveré el viernes. 💸"
      ],
      [
        "I won’t tell anyone what happened. I promise. 🤐",
        "No le contaré a nadie lo que pasó. Lo prometo. 🤐"
      ],
      [
        "Will you please be quiet? I’m trying to concentrate. 🤫",
        "¿Puedes callarte, por favor? Estoy tratando de concentrarme. 🤫"
      ],
      [
        "Will you shut the door, please? 🚪",
        "¿Puedes cerrar la puerta, por favor? 🚪"
      ],
      [
        "I’ve tried to give her advice, but she won’t listen. 👂",
        "He tratado de darle consejos, pero ella no escuchará. 👂"
      ],
      [
        "The car won’t start. (= The car 'refuses' to start.) 🚗",
        "El auto no arranca. (= El auto se 'niega' a arrancar.) 🚗"
      ],
      [
        "Shall I open the window? 🪟",
        "¿Debo abrir la ventana? 🪟"
      ],
      [
        "Where shall we have lunch? – Let’s go to Marino’s. 🍽️",
        "¿Dónde deberíamos almorzar? – Vamos a Marino's. 🍽️"
      ],
      [
        "Should I open the window? 🪟",
        "¿Debo abrir la ventana? 🪟"
      ],
      [
        "Where should we have lunch? 🍽️",
        "¿Dónde deberíamos almorzar? 🍽️"
      ],
      [
        "I’m too tired to walk home. I think I’ll take a taxi. 🚕",
        "Estoy demasiado cansado para caminar a casa. Creo que tomaré un taxi. 🚕"
      ],
      [
        "It’s a little cold in this room. – You’re right. I’ll turn on the heat. ❄️",
        "Hace un poco de frío en esta habitación. – Tienes razón. Encenderé la calefacción. ❄️"
      ],
      [
        "We don’t have any milk. – We don’t? I’ll go and get some now. 🥛",
        "No tenemos leche. – ¿No tenemos? Voy a comprar algo ahora. 🥛"
      ],
      [
        "Can I wash the dishes for you? – No, that’s all right. I’ll do it later. 🍽️",
        "¿Puedo lavar los platos por ti? – No, está bien. Lo haré más tarde. 🍽️"
      ],
      [
        "I don’t know how to use this computer. Don’t worry, I’ll show you. 💻",
        "No sé cómo usar esta computadora. No te preocupes, te mostraré. 💻"
      ],
      [
        "Would you like tea or coffee? I’ll have coffee, please. ☕",
        "¿Quieres té o café? Tomaré café, por favor. ☕"
      ],
      [
        "Thanks for letting me borrow your camera. – I’ll give it back to you on Monday, OK? 📷",
        "¡Adiós! Que tengas un buen viaje. – Gracias. Te enviaré una postal. 📷"
      ],
      [
        "It’s little cold. The window is open, and you decide to close it. You say: I think I’ll close the window. 🪟",
        "Hace un poco de frío. La ventana está abierta, y decides cerrarla. Dices: Creo que cerraré la ventana. 🪟"
      ],
      [
        "You’re tired, and it’s getting late. You decide to go to bed. You say: I think I’ll go to bed. 🛌",
        "Estás cansado, y es tarde. Decides irte a la cama. Dices: Creo que me iré a la cama. 🛌"
      ],
      [
        "A friend of yours offers you a ride in his car, but you decide to walk. You say: I don’t think I’ll take the ride. 🚶",
        "Un amigo tuyo te ofrece un paseo en su auto, pero decides caminar. Dices: No creo que aceptaré el paseo. 🚶"
      ],
      [
        "You arranged to play tennis today. Now you decide that you don’t want to play. You say: I don’t think I’ll play tennis. 🎾",
        "Habías quedado para jugar al tenis hoy. Ahora decides que no quieres jugar. Dices: No creo que jugaré al tenis. 🎾"
      ],
      [
        "Did you call Julie? – Oh no, I forgot. I’ll call her now. 📞",
        "¿Llamaste a Julie? – Oh no, me olvidé. La llamaré ahora. 📞"
      ],
      [
        "I can’t meet you tomorrow. I’m playing tennis. 🎾",
        "No puedo verte mañana. Estoy jugando al tenis. 🎾"
      ],
      [
        "I’ll meet you outside the hotel in half an hour, OK? – Yes, that's fine. ⌛",
        "¿Te veré afuera del hotel en media hora, está bien? – Sí, está bien. ⌛"
      ],
      [
        "I need some money. – OK, I’ll lend you some. How much do you need? 💰",
        "Necesito dinero. – OK, te prestaré algo. ¿Cuánto necesitas? 💰"
      ],
      [
        "I’m having a party next Saturday. I hope you can come. 🎉",
        "Estoy organizando una fiesta el próximo sábado. Espero que puedas venir. 🎉"
      ],
      [
        "Remember to get a newspaper when you go out. – OK. I won’t forget. 📰",
        "Recuerda comprar un periódico cuando salgas. – OK. No lo olvidaré. 📰"
      ],
      [
        "What time will your plane leave tomorrow? ✈️",
        "¿A qué hora saldrá tu avión mañana? ✈️"
      ],
      [
        "I asked Sue what happened, but she won’t tell me. 🤐",
        "Le pregunté a Sue qué pasó, pero no me dirá. 🤐"
      ],
      [
        "Will you do anything tomorrow night? – No, I’m free. Why? 🆓",
        "¿Harás algo mañana por la noche? – No, estoy libre. ¿Por qué? 🆓"
      ],
      [
        "I don’t want to go out alone. Will you come with me? 🚶‍♂️",
        "No quiero salir solo. ¿Vendrás conmigo? 🚶‍♂️"
      ],
      [
        "Where shall we have lunch? – Let’s go to that new restaurant on North Street. 🍽️",
        "¿Dónde almorzaremos? – Vamos a ese nuevo restaurante en North Street. 🍽️"
      ],
      [
        "It’s Mark’s birthday soon, and I want to get him a present. What shall I get him? – I don’t know. I never know what to give people. 🎁",
        "Pronto es el cumpleaños de Mark, y quiero comprarle un regalo. ¿Qué le puedo regalar? – No sé. Nunca sé qué regalar a la gente. 🎁"
      ],
      [
        "Do you want me to put these groceries away? – No, that’s OK. I’ll do it later. 🛒",
        "¿Quieres que guarde estas compras? – No, está bien. Lo haré más tarde. 🛒"
      ],
      [
        "Let’s go out tonight. – Ok, where shall we go? 🌃",
        "Salgamos esta noche. – Ok, ¿a dónde iremos? 🌃"
      ],
      [
        "What I’ve told you is a secret. I don’t want anybody else to know. – Don’t worry. I won’t tell anybody. 🤫",
        "Lo que te he contado es un secreto. No quiero que nadie más lo sepa. – No te preocupes. No se lo diré a nadie. 🤫"
      ],
      [
        "I know you’re busy, but can you finish this report this afternoon? – Well, I’ll try, but I can’t promise. 📊",
        "Sé que estás ocupado, pero ¿puedes terminar este informe esta tarde? – Bueno, lo intentaré, pero no puedo prometerlo. 📊"
      ]
]
const will2 = [
    [
        "Ann is working next week. 💼",
        "Ann estará trabajando la próxima semana. 💼"
      ],
      [
        "Are you going to watch television tonight? 📺",
        "¿Vas a ver televisión esta noche? 📺"
      ],
      [
        "Jill has lived abroad for a long time. When she comes back, she’ll find a lot of changes here. 🌍",
        "Jill ha vivido en el extranjero durante mucho tiempo. Cuando regrese, encontrará muchos cambios aquí. 🌍"
      ],
      [
        "Where will you be this time next year? – I’ll be in Japan. 🗾",
        "¿Dónde estarás en esta misma fecha el próximo año? – Estaré en Japón. 🗾"
      ],
      [
        "That plate is hot. If you touch it, you’ll burn yourself. 🔥",
        "Ese plato está caliente. Si lo tocas, te quemarás. 🔥"
      ],
      [
        "Tom won’t pass the exam. He hasn’t studied hard enough. 📚",
        "Tom no aprobará el examen. No ha estudiado lo suficiente. 📚"
      ],
      [
        "When will you find out how you did on the exam? 🤔",
        "¿Cuándo descubrirás cómo te fue en el examen? 🤔"
      ],
      [
        "I’ll probably be home late tonight. ⌛",
        "Probablemente llegue tarde a casa esta noche. ⌛"
      ],
      [
        "I expect the test will take two hours. ⏳",
        "Espero que la prueba tome dos horas. ⏳"
      ],
      [
        "Don’t worry about the exam. I’m sure you’ll pass. 🤞",
        "No te preocupes por el examen. Estoy seguro de que aprobarás. 🤞"
      ],
      [
        "Do you think Sarah will like the present we bought her? 🎁",
        "¿Crees que a Sarah le gustará el regalo que le compramos? 🎁"
      ],
      [
        "I don’t think the exam will be very difficult. 🤯",
        "No creo que el examen sea muy difícil. 🤯"
      ],
      [
        "I guess your parents will be tired after their trip. 😴",
        "Supongo que tus padres estarán cansados después de su viaje. 😴"
      ],
      [
        "When do you suppose Jan and Mark will get married? 💍",
        "¿Cuándo crees que Jan y Mark se casarán? 💍"
      ],
      [
        "I doubt you’ll need a heavy coat in Las Vegas. It’s usually warm there. ☀️",
        "Dudo que necesites un abrigo pesado en Las Vegas. Por lo general, hace calor allí. ☀️"
      ],
      [
        "I worry about those people who lost their jobs. I wonder what will happen to them. 😟",
        "Me preocupo por esas personas que perdieron sus trabajos. Me pregunto qué les sucederá. 😟"
      ],
      [
        "I hope Kate passes the exam. 🙏",
        "Espero que Kate apruebe el examen. 🙏"
      ],
      [
        "I hope it doesn’t rain tomorrow. ☔",
        "Espero que no llueva mañana. ☔"
      ],
      [
        "Diane isn’t free on Saturday. She’s working. (She’s working is correct) 📅",
        "Diane no está libre el sábado. Está trabajando. (Está trabajando es correcto) 📅"
      ],
      [
        "I’m going to a party tomorrow night. Would you like to come too? 🎉",
        "Voy a una fiesta mañana por la noche. ¿Quieres venir también? 🎉"
      ],
      [
        "I think Amy will get the job. She has a lot of experience. 💼",
        "Creo que Amy conseguirá el trabajo. Ella tiene mucha experiencia. 💼"
      ],
      [
        "I can’t meet you tonight. A friend of mine is coming over. 🤷",
        "No puedo encontrarme contigo esta noche. Un amigo mío vendrá. 🤷"
      ],
      [
        "Have you decided where to go on vacation? – Yes, we are going to Italy. ✈️",
        "¿Ya decidieron dónde ir de vacaciones? – Sí, iremos a Italia. ✈️"
      ],
      [
        "Don’t be afraid of the dog. It won’t hurt you. 🐕",
        "No tengas miedo del perro. No te hará daño. 🐕"
      ],
      [
        "Don’t worry about the exam. I’m sure you’ll pass. 🤞",
        "No te preocupes por el examen. Estoy seguro de que aprobarás. 🤞"
      ],
      [
        "Why don’t you try on this jacket? It will look nice on you. 👚",
        "¿Por qué no pruebas esta chaqueta? Te quedará bien. 👚"
      ],
      [
        "I want you to meet Brandon sometime. I think you’ll like him. 👋",
        "Quiero que conozcas a Brandon en algún momento. Creo que te caerá bien. 👋"
      ],
      [
        "It’s raining. Don’t go out. You will get wet. ☔",
        "Está lloviendo. No salgas. Te mojarás. ☔"
      ],
      [
        "Do you think people will live longer in the future? 🤔",
        "¿Crees que las personas vivirán más tiempo en el futuro? 🤔"
      ],
      [
        "Goodbye. I’m sure we will see each other again soon. 👋",
        "Adiós. Estoy seguro de que nos veremos pronto. 👋"
      ],
      [
        "I invited Sue to the party, but I don’t think she will come. 🎉",
        "Invité a Sue a la fiesta, pero no creo que venga. 🎉"
      ],
      [
        "When the new road is finished, I expect that my trip to work will take less time. ⌛",
        "Cuando terminen la nueva carretera, espero que mi viaje al trabajo lleve menos tiempo. ⌛"
      ],
      [
        "Can you wait for me? – I won’t be very long. ⌚",
        "¿Puedes esperarme? – No tardaré mucho. ⌚"
      ],
      [
        "You don’t need to take an umbrella along. It won’t rain. ☔",
        "No necesitas llevar un paraguas. No lloverá. ☔"
      ],
      [
        "If you don’t eat anything now, you will be hungry later. 🍽️",
        "Si no comes nada ahora, tendrás hambre más tarde. 🍽️"
      ],
      [
        "I’m sorry about what happened yesterday. It won’t happen again. 🙅‍♂️",
        "Lo siento por lo que pasó ayer. No volverá a suceder. 🙅‍♂️"
      ],
      [
        "I’ve got some incredible news! You won’t believe what happened. 😲",
        "¡Tengo unas noticias increíbles! No creerás lo que sucedió. 😲"
      ],
      [
        "There’s no more bread. I guess we will have to go shopping before we eat. 🛒",
        "No hay más pan. Supongo que tendremos que ir de compras antes de comer. 🛒"
      ],
      [
        "Don’t ask Amanda for advice. She won’t know what to do. 🤷‍♀️",
        "No le pidas consejo a Amanda. No sabrá qué hacer. 🤷‍♀️"
      ],
      [
        "Jack doesn’t like crowds. I don’t think he will come with us to the party. 🚶‍♂️",
        "A Jack no le gustan las multitudes. No creo que venga con nosotros a la fiesta. 🚶‍♂️"
      ],
      [
        "I bought Rosa a present. Do you think she’ll like it? 🎁",
        "Le compré un regalo a Rosa. ¿Crees que le gustará? 🎁"
      ],
      [
        "The sky is dark and cloudy. Do you think it will rain? ☁️",
        "El cielo está oscuro y nublado. ¿Crees que lloverá? ☁️"
      ],
      [
        "The meeting is still going on. When do you think it will end? 📅",
        "La reunión aún está en marcha. ¿Cuándo crees que terminará? 📅"
      ],
      [
        "My car needs to be fixed. How much do you think it will cost? 🚗",
        "Mi auto necesita ser reparado. ¿Cuánto crees que costará? 🚗"
      ],
      [
        "Sally and David are in love. Do you think they will get married? 💑",
        "Sally y David están enamorados. ¿Crees que se casarán? 💑"
      ],
      [
        "I’m going out now. – OK, what time do you think you will be back? ⌚",
        "Me estoy yendo ahora. – Bien, ¿a qué hora crees que volverás? ⌚"
      ],
      [
        "The future is uncertain. What do you think will happen? 🤷‍♂️",
        "El futuro es incierto. ¿Qué crees que sucederá? 🤷‍♂️"
      ]
]
const iwillAndIamGoingTo= [
    [
        "Let’s have a party. – That’s a great idea. We’ll invite lots of people. 🎉",
        "Tengamos una fiesta. – Esa es una gran idea. Invitaremos a mucha gente. 🎉"
      ],
      [
        "Sue and I have decided to have a party. We’re going to invite lots of people. 🎊",
        "Sue y yo hemos decidido hacer una fiesta. Vamos a invitar a mucha gente. 🎊"
      ],
      [
        "Daniel called while you were out. – Ok. I’ll call him back. 📞",
        "Daniel llamó mientras no estabas. – Vale. Lo llamaré de vuelta. 📞"
      ],
      [
        "Daniel called while you were out. Yes, I know. I’m going to call him back. 📱",
        "Daniel llamó mientras no estabas. Sí, lo sé. Voy a llamarlo de vuelta. 📱"
      ],
      [
        "Anna is in the hospital. Oh really? I didn’t know. I’ll go and visit her. 🏥",
        "Anna está en el hospital. ¿Ah, sí? No lo sabía. Iré a visitarla. 🏥"
      ],
      [
        "Anna is in the hospital. Yes, I know. I’m going to visit her tonight. 🌙",
        "Anna está en el hospital. Sí, lo sé. Voy a visitarla esta noche. 🌙"
      ],
      [
        "I think the weather will be nice later. ☀️",
        "Creo que el clima estará agradable más tarde. ☀️"
      ],
      [
        "I think the weather is going to be nice later. 🌦️",
        "Creo que el clima va a estar agradable más tarde. 🌦️"
      ],
      [
        "Look at those black clouds. It’s going to rain. ☔",
        "Mira esas nubes negras. Va a llover. ☔"
      ],
      [
        "I feel terrible. I think I’m going to be sick. 🤢",
        "Me siento terrible. Creo que voy a enfermarme. 🤢"
      ],
      [
        "Tom will probably get here at about 8:00. ⌛",
        "Tom probablemente llegará alrededor de las 8:00. ⌛"
      ],
      [
        "I think Jessica will like the present we bought for her. 🎁",
        "Creo que a Jessica le gustará el regalo que le compramos. 🎁"
      ],
      [
        "These shoes are very well made. They’ll last a long time. 👟",
        "Estos zapatos están muy bien hechos. Durarán mucho tiempo. 👟"
      ],
      [
        "Why are you turning on the television? – I'm going to watch the news. 📺",
        "¿Por qué estás encendiendo la televisión? – Voy a ver las noticias. 📺"
      ],
      [
        "Oh, I just realized. I don’t have any money. – You don’t? Well, don’t worry. I'll lend you some. 💸",
        "Oh, acabo de darme cuenta. No tengo dinero. – ¿No? Bueno, no te preocupes. Te prestaré algo. 💸"
      ],
      [
        "I have a headache. – You do? Wait a second and I'll get an aspirin for you. 💊",
        "Me duele la cabeza. – ¿De verdad? Espera un segundo y te conseguiré una aspirina. 💊"
      ],
      [
        "Why are you filling that bucket with water? – I'm going to wash the car. 🚗",
        "¿Por qué estás llenando ese cubo de agua? – Voy a lavar el coche. 🚗"
      ],
      [
        "I’ve decided to paint this room. – Oh, really? What color are you going to paint it? 🎨",
        "He decidido pintar esta habitación. – ¿Ah, sí? ¿De qué color la vas a pintar? 🎨"
      ],
      [
        "Where are you going? Are you going shopping? – Yes, I'm going to buy some things for dinner. 🛒",
        "¿A dónde vas? ¿Vas de compras? – Sí, voy a comprar algunas cosas para la cena. 🛒"
      ],
      [
        "I don’t know how to use this camera. – It’s easy. I'll show you. 📸",
        "No sé cómo usar esta cámara. – Es fácil. Te mostraré. 📸"
      ],
      [
        "Did you mail that letter for me? – Oh, Im sorry. I completely forgot. I'll do it now. 📮",
        "¿Enviaste esa carta por mí? – Oh, lo siento. Lo olvidé por completo. Lo haré ahora. 📮"
      ],
      [
        "The ceiling in this room doesn’t look very safe, does it? – No, it looks as if it's going to fall down. 😬",
        "El techo de esta habitación no parece muy seguro, ¿verdad? – No, parece como si fuera a caerse. 😬"
      ],
      [
        "Has Dan decided what to do when he finishes high school? – Yes. Everything is planned. He's going to take a few months off. Then he's going to start classes at the community college. 🎓",
        "¿Dan ha decidido qué hacer cuando termine la secundaria? – Sí. Todo está planeado. Tomará unos meses libres. – Entonces va a empezar clases en la universidad comunitaria. 🎓"
      ],
      [
        "Caller: Hello, Can I speak to Jim, please?\nYou: Just a minute. I’ll get him. 📞",
        "Llamante: Hola, ¿puedo hablar con Jim, por favor?\nYou: Just a minute. I’ll get him. 📞"
      ],
      [
        "You: The weather’s too nice to stay indoors. I'm going to take a walk. Friend: Good idea. I think I'll join you. 🌳",
        "Es un buen día, así que he decidido dar un paseo. Justo antes de irme, le dices a tu amigo. 🌳"
      ],
      [
        "You: Don’t worry about the letter. I’m sure you'll find it. 📬",
        "Tu amiga está preocupada porque ha perdido una carta importante. 📬"
      ],
      [
        "Friend: Have you decided what to do about that job you were interested in? You: Yes, I'm not going to apply for it. 💼",
        "Hubo un trabajo anunciado en el periódico recientemente. Al principio, estabas interesado, pero luego decidiste no presentar la solicitud. 💼"
      ],
      [
        "You: Shh! Don’t make so much noise. You'll wake everybody up. 🤫",
        "Tú y un amigo llegan a casa muy tarde. Otras personas en la casa están dormidas. Tu amigo hace ruido. 🤫"
      ],
      [
        "John: Ann, I need a ride to the airport tomorrow morning. Ann: That’s no problem. I'll take you. What time is your flight? John: 10:50. Ann: OK, we'll leave at about 8:00. 🚗",
        "John tiene que ir al aeropuerto para tomar un avión mañana por la mañana. 🚗"
      ],
      [
        "Joe: John, do you want me to take you to the airport? John: No thanks, Joe. Ann will take me. (Ann / take) 🚕",
        "Más tarde ese día, Joe le ofrece a John llevarlo al aeropuerto. 🚕"
      ]
]

const willBeDoing = [
    [
        "An hour from now, the stadium will be full. Everyone will be watching the game. 🏟️",
        "Una hora a partir de ahora, el estadio estará lleno. Todos estarán viendo el juego. 🏟️"
      ],
      [
        "Three hours from now, the stadium will be empty. The game will have ended. Everyone will have gone home. 🕒",
        "Tres horas a partir de ahora, el estadio estará vacío. El juego habrá terminado. Todos se habrán ido a casa. 🕒"
      ],
      [
        "I’m leaving on vacation this Saturday. This time next week, I’ll be lying on the beach or swimming in the ocean. 🏖️",
        "Me voy de vacaciones este sábado. A esta hora la próxima semana, estaré tumbado en la playa o nadando en el océano. 🏖️"
      ],
      [
        "You have no chance of getting the job. You’ll be wasting your time if you apply for it. ⌛",
        "No tienes posibilidad de conseguir el trabajo. Estarás perdiendo el tiempo si aplicas para ello. ⌛"
      ],
      [
        "Don’t call me between 7 and 8. We’ll be having dinner. 🍽️",
        "No me llames entre las 7 y las 8. Estaremos cenando. 🍽️"
      ],
      [
        "Let’s wait for Maria to arrive, and then we’ll have dinner. 🕰️",
        "Esperemos a que María llegue, y luego cenaremos. 🕰️"
      ],
      [
        "At 10:00 yesterday, Kelly was at the office. She was working. ⏰",
        "A las 10:00 de ayer, Kelly estaba en la oficina. Estaba trabajando. ⏰"
      ],
      [
        "It’s 10:00 now. She is at the office. She is working. ⌚",
        "Son las 10:00 ahora. Ella está en la oficina. Está trabajando. ⌚"
      ],
      [
        "At 10:00 tomorrow, she will be at the office. She will be working. 🕙",
        "A las 10:00 de mañana, ella estará en la oficina. Estará trabajando. 🕙"
      ],
      [
        "The government will be making a statement about the crisis later today. 🗣️",
        "El gobierno hará una declaración sobre la crisis más tarde hoy. 🗣️"
      ],
      [
        "Will you be going away this summer? 🌞",
        "¿Te vas de vacaciones este verano? 🌞"
      ],
      [
        "Later in the program, I’ll be talking to the Minister of Education… 🎙️",
        "Más tarde en el programa, hablaré con el Ministro de Educación… 🎙️"
      ],
      [
        "Our best player is injured and won’t be playing in the game on Saturday. ⚽",
        "Nuestro mejor jugador está herido y no jugará en el partido del sábado. ⚽"
      ],
      [
        "Sally always leaves for work at 8:30 in the morning. She won’t be at home at 9:00, She’ll have gone to work. 🏢",
        "Sally siempre sale para el trabajo a las 8:30 de la mañana. No estará en casa a las 9:00, se habrá ido al trabajo. 🏢"
      ],
      [
        "We’re late. The movie will already have started by the time we get to the theater. 🎬",
        "Estamos tarde. La película ya habrá comenzado para cuando lleguemos al cine. 🎬"
      ],
      [
        "Ted and Amy have been married for 24 years. Next year they will have been married for 25 years. 💑",
        "Ted y Amy llevan casados 24 años. El próximo año habrán estado casados por 25 años. 💑"
      ],
      [
        "Don’t call me between 7 and 8. We’ll be having (we / have) dinner then. 🍝",
        "No me llames entre las 7 y las 8. Estaremos cenando entonces. 🍝"
      ],
      [
        "Call me after 8:00. We will have finished dinner by then. 🕗",
        "Llámame después de las 8:00. Habremos terminado de cenar para entonces. 🕗"
      ],
      [
        "Tomorrow afternoon we’re going to play tennis from 3:00 until 4:30. So at 4:00, we will be playing tennis. 🎾",
        "Mañana por la tarde vamos a jugar al tenis de 3:00 a 4:30. Así que a las 4:00, estaremos jugando al tenis. 🎾"
      ],
      [
        "Can we meet tomorrow afternoon? –I’m sorry, I can’t. I will be working. 💼",
        "¿Podemos encontrarnos mañana por la tarde? –Lo siento, no puedo. Estaré trabajando. 💼"
      ],
      [
        "B: has to go to a meeting that begins at 10:00. It will last about an hour. A: Will you be free at 11:30? B: Yes, the meeting will have ended by then. 🤝",
        "B: tiene que ir a una reunión que comienza a las 10:00. Durará aproximadamente una hora. A: ¿Estarás libre a las 11:30? B: Sí, la reunión habrá terminado para entonces. 🤝"
      ],
      [
        "Ben is on vacation, and he is spending his money very quickly. If he continues like this, he will have spent all his money before the end of his vacation. 💸",
        "Ben está de vacaciones, y está gastando su dinero muy rápidamente. Si continúa así, habrá gastado todo su dinero antes del final de sus vacaciones. 💸"
      ],
      [
        "Do you think you will still be doing the same job 10 years from now? 👩‍💼",
        "¿Crees que seguirás haciendo el mismo trabajo dentro de 10 años? 👩‍💼"
      ],
      [
        "Lisa is from New Zealand. She is traveling around South America right now. So far she has traveled about 1,000 miles. By the end of the trip, she will have traveled more than 3,000 miles. 🌍",
        "Lisa es de Nueva Zelanda. Está viajando por Sudamérica en este momento. Hasta ahora ha recorrido alrededor de 1,000 millas. Al final del viaje, habrá recorrido más de 3,000 millas. 🌍"
      ],
      [
        "If you need to contact me, I will be staying at the Bellmore Hotel until Friday. 🏨",
        "Si necesitas contactarme, estaré hospedándome en el Hotel Bellmore hasta el viernes. 🏨"
      ],
      [
        "A: Will you see Laura tomorrow? B: Yes, probably. Why? A: I borrowed this CD from her. Can you give it back to her? 📀",
        "A: ¿Vas a ver a Laura mañana? B: Sí, probablemente. ¿Por qué? A: Le presté este CD. ¿Puedes devolvérselo? 📀"
      ],
]
const whenIdo = [
    [
        "Will you call me tomorrow? –Yes, I’ll call you when I get home from work. ☎️",
        "¿Me llamarás mañana? –Sí, te llamaré cuando llegue a casa del trabajo. ☎️"
      ],
      [
        "We’ll go out when it stops raining. ☔",
        "Saldré cuando deje de llover. ☔"
      ],
      [
        "When you are in Los Angeles again, give us a call. 📞",
        "Cuando estés de nuevo en Los Ángeles, llámanos. 📞"
      ],
      [
        "(said to a child) What do you want to be when you grow up? 👶",
        "(dicho a un niño) ¿Qué quieres ser cuando crezcas? 👶"
      ],
      [
        "I’m going to read a lot of books while I’m on vacation. 📚",
        "Voy a leer muchos libros mientras esté de vacaciones. 📚"
      ],
      [
        "I’ll probably go back home on Sunday. Before I go, I’d like to visit a museum. 🏛️",
        "Probablemente regrese a casa el domingo. Antes de irme, me gustaría visitar un museo. 🏛️"
      ],
      [
        "Wait here until I come back. ⌛",
        "Espera aquí hasta que regrese. ⌛"
      ],
      [
        "Wait here till I come back. ⏳",
        "Espera aquí hasta que regrese. ⏳"
      ],
      [
        "Can I borrow that book when you’ve finished it? 📖",
        "¿Puedo tomar prestado ese libro cuando lo hayas terminado? 📖"
      ],
      [
        "Don’t say anything while Ben is here. Wait until he has gone. 🤫",
        "No digas nada mientras Ben esté aquí. Espera hasta que se haya ido. 🤫"
      ],
      [
        "When I’ve called Kate, we can have dinner. 🍽️",
        "Cuando haya llamado a Kate, podemos cenar. 🍽️"
      ],
      [
        "When I call Kate, I’ll ask her about the party. 🎉",
        "Cuando llame a Kate, le preguntaré sobre la fiesta. 🎉"
      ],
      [
        "I’ll come as soon as I finish. 🏃",
        "Vendré tan pronto como termine. 🏃"
      ],
      [
        "I’ll come as soon as I’ve finished. 🏃",
        "Vendré tan pronto como termine. 🏃"
      ],
      [
        "You’ll feel better after you have something to eat. 🍲",
        "Te sentirás mejor después de que comas algo. 🍲"
      ],
      [
        "You’ll feel better after you’ve had something to eat. 🍲",
        "Te sentirás mejor después de haber comido algo. 🍲"
      ],
      [
        "It’s raining hard. We’ll get wet if we go out. 🌧️",
        "Está lloviendo fuerte. Nos mojaremos si salimos. 🌧️"
      ],
      [
        "I’ll be angry if it happens again. 😡",
        "Me enojaré si vuelve a suceder. 😡"
      ],
      [
        "Hurry up! If we don’t hurry, we’ll be late. ⏰",
        "¡Apúrate! Si no nos apuramos, llegaremos tarde. ⏰"
      ],
      [
        "I’m going shopping later.(for sure) When I go shopping, I’ll get some cheese. 🧀",
        "Voy de compras más tarde. (Seguro) Cuando vaya de compras, compraré algo de queso. 🧀"
      ],
      [
        "I might go shopping later. (it’s possible) If I go shopping, I’ll get some cheese. 🛒",
        "Podría ir de compras más tarde. (Es posible) Si voy de compras, compraré algo de queso. 🛒"
      ],
      [
        "If it is raining tonight, I won’t go out. ☔",
        "Si está lloviendo esta noche, no saldré. ☔"
      ],
      [
        "Don’t worry if I’m late tonight. 😅",
        "No te preocupes si llego tarde esta noche. 😅"
      ],
      [
        "If they don’t come soon, I’m not going to wait. ⌛",
        "Si no vienen pronto, no voy a esperar. ⌛"
      ],
      [
        "I’ll call you when I get home from work. ☎️",
        "Te llamaré cuando llegue a casa del trabajo. ☎️"
      ],
      [
        "I want to see Jennifer before she goes out. 👀",
        "Quiero ver a Jennifer antes de que salga. 👀"
      ],
      [
        "We’re going on a trip tomorrow. I will tell you all about it when we come back. 🌍",
        "Vamos de viaje mañana. Te contaré todo al regresar. 🌍"
      ],
      [
        "Brian looks very different now. When you see him again, you won’t recognize him. 😲",
        "Brian se ve muy diferente ahora. Cuando lo veas de nuevo, no lo reconocerás. 😲"
      ],
      [
        "Will you miss me while I am away? 😢",
        "¿Me extrañarás mientras estoy fuera? 😢"
      ],
      [
        "We should do something soon before it is too late. ⏳",
        "Deberíamos hacer algo pronto antes de que sea demasiado tarde. ⏳"
      ],
      [
        "I don’t want to go without you. I will wait until you are ready. ⌛",
        "No quiero irme sin ti. Esperaré hasta que estés listo. ⌛"
      ],
      [
        "Sue has applied for the job, but she isn’t very well qualified for it. I will be surprised if she gets it. 😯",
        "Sue ha solicitado el trabajo, pero no está muy calificada para ello. Me sorprenderé si lo consigue. 😯"
      ],
      [
        "I’d like to play tennis tomorrow if the weather is nice. 🎾",
        "Me gustaría jugar al tenis mañana si el clima es agradable. 🎾"
      ],
      [
        "I’m going out now. If anybody calls while I am out, can you take a message? 📞",
        "Me estoy yendo ahora. Si alguien llama mientras no estoy, ¿puedes tomar un mensaje? 📞"
      ],
      [
        "Give us a call when you are in Los Angeles again. 📱",
        "Llámanos cuando estés de nuevo en Los Ángeles. 📱"
      ],
      [
        "I'll give you my address when I find a place to live. 🏡",
        "Te daré mi dirección cuando encuentre un lugar para vivir. 🏡"
      ],
      [
        "I'll come straight home after I go shopping. 🛍️",
        "Vendré directo a casa después de ir de compras. 🛍️"
      ],
      [
        "Let’s go home before it gets dark. 🌆",
        "Vamos a casa antes de que oscurezca. 🌆"
      ],
      [
        "I won't speak to her until she apologizes to me first. 😤",
        "No hablaré con ella hasta que me pida disculpas primero. 😤"
      ],
      [
        "A friend of yours is going on vacation. You want to know what she is going to do. You ask: What are you going to do when you go on vacation? 🌴",
        "Una amiga tuya se va de vacaciones. Quieres saber qué va a hacer. Le preguntas: ¿Qué vas a hacer cuando vayas de vacaciones? 🌴"
      ],
      [
        "A friend of yours is visiting you. She has to go soon, but you’d like to show her some pictures. You ask: Do you have time to look at some pictures before you go? 📷",
        "Una amiga tuya te está visitando. Ella tiene que irse pronto, pero te gustaría mostrarle algunas fotos. Le preguntas: ¿Tienes tiempo para ver algunas fotos antes de irte? 📷"
      ],
      [
        "You want to sell your car. Jim is interested in buying it, but he hasn’t decided yet. You ask: Can you let me know as soon as you decide? 🚗",
        "Quieres vender tu coche. Jim está interesado en comprarlo, pero aún no ha decidido. Le preguntas: ¿Puedes avisarme tan pronto como decidas? 🚗"
      ],
      [
        "A friend of yours is going to visit Hong Kong. You want to know where she is going to stay. You ask: Where are you going to stay when you visit Hong Kong? 🏨",
        "Una amiga tuya va a visitar Hong Kong. Quieres saber dónde va a quedarse. Le preguntas: ¿Dónde vas a quedarte cuando visites Hong Kong? 🏨"
      ],
      [
        "The traffic is very bad in your town, but they are going to build a new road. You say: I think things will be better when they build the new road. 🚗",
        "El tráfico es muy malo en tu ciudad, pero van a construir una nueva carretera. Dices: Creo que las cosas mejorarán cuando construyan la nueva carretera. 🚗"
      ],
      [
        "Don’t worry if I’m late tonight. 😅",
        "No te preocupes si llego tarde esta noche. 😅"
      ],
      [
        "Chris might call while I’m out tonight. If he does, can you take a message? 📞",
        "Chris podría llamar mientras estoy fuera esta noche. Si lo hace, ¿puedes tomar un mensaje? 📞"
      ],
      [
        "I’m going to Tokyo next week. When I’m there, I hope to visit a friend of mine. 🗾",
        "Me voy a Tokio la próxima semana. Cuando esté allí, espero visitar a un amigo mío. 🗾"
      ],
      [
        "I think Beth will get the job. I’ll be very surprised if she doesn’t get it. 😲",
        "Creo que Beth conseguirá el trabajo. Me sorprenderé mucho si no lo consigue. 😲"
      ],
      [
        "I’m going shopping. If you want anything, I can get it for you. 🛒",
        "Me voy de compras. Si quieres algo, puedo comprártelo. 🛒"
      ],
      [
        "I’m going away for a few days. I’ll call you when I get back. 🌅",
        "Me voy por unos días. Te llamaré cuando regrese. 🌅"
      ],
      [
        "I want you to come to the party, but if you don’t want to come, that’s all right. 🎉",
        "Quiero que vengas a la fiesta, pero si no quieres venir, está bien. 🎉"
      ],
      [
        "We can eat at home or, if you prefer, we can go to a restaurant. 🍽️",
        "Podemos comer en casa o, si prefieres, podemos ir a un restaurante. 🍽️",
      ],
]

export { presentTenses, iamGoingToDo, will1, will2, iwillAndIamGoingTo,  willBeDoing, whenIdo}