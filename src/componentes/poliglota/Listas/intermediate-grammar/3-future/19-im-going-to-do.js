// 19 ( I’m) going to (do)

const imGoingToDo = [
    [
      "¿Vas a ver el partido de fútbol en la televisión esta noche? – No, voy a ir a la cama temprano. Estoy cansado de mi viaje.",
      "Are you going to watch the football game on TV tonight? – No, I’m going to go to bed early. I’m tired from my trip."
    ],
    [
      "Escuché que Lisa ganó algo de dinero. ¿Qué va a hacer con eso? – Va a comprar un coche nuevo.",
      "I heard Lisa won some money. What is she going to do with it? – She’s going to buy a new car."
    ],
    [
      "Voy a hacer una llamada rápida. ¿Puedes esperarme?",
      "I’m going to make a quick phone call. Can you wait for me?"
    ],
    ["Este queso huele horrible. No lo voy a comer.", "This cheese smells awful. I’m not going to eat it."],
    ["¿A qué hora te encuentras con Amanda esta noche?", "What time are you meeting Amanda tonight?"],
    ["Me voy mañana. Ya tengo mi boleto de avión.", "I’m leaving tomorrow. I already have my plane ticket."],
    ["Las ventanas están sucias. – Sí, lo sé. Voy a lavarlas más tarde.", "The windows are dirty. – Yes, I know. I’m going to wash them later."],
    [
      "He decidido no quedarme aquí por más tiempo. Mañana voy a buscar otro lugar para vivir.",
      "I’ve decided not to stay here any longer. Tomorrow I’m going to look for another place to live."
    ],
    ["¡Mira esas nubes oscuras! Va a llover.", "Look at those dark clouds! It’s going to rain."],
    ["Me siento fatal. Creo que voy a enfermarme.", "I feel awful. I think I’m going to be sick."],
    [
      "La situación económica es mala ahora, y las cosas van a empeorar.",
      "The economic situation is bad now, and things are going to get worse."
    ],
    ["Íbamos a volar a Nueva York, pero luego decidimos conducir en su lugar.", "We were going to fly to New York, but then we decided to drive instead."],
    ["Peter iba a tomar el examen, pero cambió de opinión.", "Peter was going to take the exam, but he changed his mind."],
    [
      "Estaba a punto de cruzar la calle cuando alguien gritó, ‘’¡Detente!’’.",
      "I was just going to cross the street when somebody shouted, ‘’Stop!’’."
    ],
    ["Pensé que iba a llover, pero no lo hizo.", "I thought it was going to rain, but it didn’t."],
    [
      "Tu amigo ha ganado algo de dinero. Le preguntas: ¿Qué vas a hacer con eso?",
      "Your friend has won some money. You ask: What are you going to do with it?"
    ],
    [
      "Tu amigo va a una fiesta esta noche. Le preguntas: ¿Qué vas a ponerte?",
      "Your friend is going to a party tonight. You ask: What are you going to wear?"
    ],
    [
      "Tu amigo acaba de comprar una mesa nueva. Le preguntas: ¿Dónde la vas a poner?",
      "Your friend has just bought a new table. You ask: Where are you going to put it?"
    ],
    [
      "Tu amigo ha decidido hacer una fiesta. Le preguntas: ¿A quién vas a invitar?",
      "Your friend has decided to have a party. You ask: Who are you going to invite?"
    ],
    [
      "Has decidido limpiar tu habitación esta mañana. ¿Vas a salir esta mañana? – No, voy a limpiar mi habitación.",
      "You have decided to clean your room this morning: Are you going out this morning? – No, I’m going to clean my room."
    ],
    [
      "Compraste un suéter, pero no te queda muy bien. Has decidido devolverlo: Ese suéter te queda demasiado grande. – Lo sé, lo voy a devolver.",
      "You bought a sweater, but it doesn’t fit you very well. You have decided to return it: That sweater is too big for you. – I know, I'm going to return it."
    ],
    [
      "Te han ofrecido un trabajo, pero has decidido no aceptarlo: Escuché que te ofrecieron un trabajo. – Así es, pero no lo voy a aceptar.",
      "You have been offered a job, but you have decided not to take it: I hear you’ve been offered a job. – That’s right, but I'm not going to take it."
    ],
    [
      "Tienes que llamar a Sarah. Es de mañana ahora, y planeas llamarla esta noche: ¿Ya llamaste a Sarah? – No, la voy a llamar esta noche.",
      "You have to call Sarah. It’s morning now, and you intend to call her tonight: Have you called Sarah yet? – No, I'm going to call her tonight."
    ],
    [
      "Estás en un restaurante. La comida es horrible, y has decidido irte: Esta comida es terrible. – Lo sé, no voy a volver a comer aquí.",
      "You are in a restaurant. The food is awful, and you’ve decided to leave: This food is terrible. – I know, I'm not going to eat here again."
    ],
    ["Hay muchas nubes oscuras en el cielo. (lluvia) Va a llover.", "There are a lot of dark clouds in the sky. (rain) It’s going to rain."],
    [
      "Son las 8:30. Tom está saliendo de su casa. Debería estar en el trabajo a las 8:45, pero le lleva 30 minutos llegar allí. (tarde) Va a llegar tarde.",
      "It is 8:30. Tom is leaving his house. He should be at work at 8:45, but it takes him 30 minutes to get there. (late) He is going to be late."
    ],
    [
      "Hay un agujero en el fondo del barco. Mucho agua está entrando por el agujero. (hundir) El barco se va a hundir.",
      "There is a hole in the bottom of the boat. A lot of water is coming in through the hole. (sink) The boat is going to sink."
    ],
    [
      "Erica y Chris están conduciendo en el campo. Queda muy poco gas en el tanque. La gasolinera más cercana está a kilómetros de distancia. (agotarse) Se van a quedar sin gasolina.",
      "Erica and Chris are driving in the country. There is very little gas left in the tank. The nearest gas station is miles away. (run out) They are going to run out of gas."
    ],
    [
      "Íbamos a volar a Nueva York, pero luego decidimos conducir en su lugar.",
      "We were going to fly to New York, but then we decided to drive instead."
    ],
    [
      "Yo iba a comprar ropa nueva ayer, pero estaba muy ocupado y no tenía tiempo para ir de compras.",
      "I was going to buy some new clothes yesterday, but I was very busy and didn’t have time to go shopping."
    ],
    [
      "Joshua y yo íbamos a jugar tenis la semana pasada, pero se lastimó el tobillo.",
      "Joshua and I were going to play tennis last week, but he hurt his ankle."
    ],
    [
      "Yo iba a llamar a Jane, pero decidí enviarle un correo electrónico en su lugar.",
      "I was going to call Jane, but I decided to e-mail her instead."
    ],
    [
      "La última vez que vi a Bob, iba a renunciar a su trabajo. – Así es, pero al final, decidió no hacerlo.",
      "The last time I saw Bob, he was going to quit his job. – That’s right, but in the end, he decided not to."
    ],
    [
      "Íbamos a tener una fiesta la semana pasada, pero algunos de nuestros amigos no pudieron venir, así que la cancelamos.",
      "We were going to have a party last week, but some of our friends couldn’t come, so we canceled."
    ]
  ];
  
  
  

export default imGoingToDo;