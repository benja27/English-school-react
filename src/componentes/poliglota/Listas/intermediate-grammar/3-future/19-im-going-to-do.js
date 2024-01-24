// 19 ( I’m) going to (do)
const imGoingToDo = [
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
];

export default imGoingToDo;
