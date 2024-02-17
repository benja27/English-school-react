const verbAndIngOrTo = [
    ['Do you like getting up early? 😊⏰', '¿Te gusta levantarte temprano? 😊⏰'],
    ['Stephanie hates flying. ✈️😣', 'A Stephanie le desagrada volar. ✈️😣'],
    ['I love meeting people. ❤️🤝', 'Me encanta conocer gente. ❤️🤝'],
    ['I don’t like being kept waiting. 🙅‍♂️⏳', 'No me gusta que me hagan esperar. 🙅‍♂️⏳'],
    ['I don’t like friends calling me at work. 📞😒', 'No me gusta que los amigos me llamen al trabajo. 📞😒'],
    ['Paul lives in Vancouver now. He likes living there.', 'Paul vive en Vancouver ahora. Le gusta vivir allí.'],
    ['Do you like being a student? 📚😊', '¿Te gusta ser estudiante? 📚😊'],
    ['The office I worked at was horrible. I hated working there. 😣🏢', 'La oficina en la que trabajaba era horrible. Odiaba trabajar allí. 😣🏢'],
    ['I like doing something. 😊👍', 'Me gusta hacer algo. 😊👍'],
    ['I like cleaning the kitchen. 🧼🍽️', 'Me gusta limpiar la cocina. 🧼🍽️'],
    ['It’s not my favorite job, but I like to clean the kitchen as often as possible. 🧼🤔', 'No es mi trabajo favorito, pero me gusta limpiar la cocina tan seguido como sea posible. 🧼🤔'],
    ['I enjoy cleaning the kitchen. 😊🧼', 'Disfruto limpiar la cocina. 😊🧼'],
    ['I don’t mind cleaning the kitchen. 🤷‍♂️🧼', 'No me importa limpiar la cocina. 🤷‍♂️🧼'],
    ['I’d like to go away for a few days. 🌴🛄', 'Me gustaría irme unos días de vacaciones. 🌴🛄'],
    ['Would you like to come to dinner on Friday? 🍽️🤔', '¿Te gustaría venir a cenar el viernes? 🍽️🤔'],
    ['I wouldn’t like to go on vacation alone. 🏖️🙅‍♂️', 'No me gustaría irme de vacaciones solo. 🏖️🙅‍♂️'],
    ['I’d love to meet your family. ❤️👨‍👩‍👧‍👦', 'Me encantaría conocer a tu familia. ❤️👨‍👩‍👧‍👦'],
    ['Would you prefer to have dinner now or later? 🍽️🤔', '¿Preferirías cenar ahora o más tarde? 🍽️🤔'],
    ['I like playing tennis. 🎾😊', 'Me gusta jugar al tenis. 🎾😊'],
    ['I’d like to play tennis today. 🎾📅', 'Me gustaría jugar al tenis hoy. 🎾📅'],
    ['Would you mind closing the door please? 🚪🙏', '¿Te importaría cerrar la puerta, por favor? 🚪🙏'],
    ['It’s too bad we didn’t see Johnny when we were in Nashville. I would like to have seen him again. 😞👀', 'Es una lástima que no hayamos visto a Johnny cuando estábamos en Nashville. Me hubiera gustado verlo de nuevo. 😞👀'],
    ['We’d like to have gone on vacation, but we didn’t have enough money. 🏖️💸', 'Nos habría gustado irnos de vacaciones, pero no teníamos suficiente dinero. 🏖️💸'],
    ['Poor Tom! I would hate to have been in his position. 😔💼', '¡Pobre Tom! Odiaría haber estado en su lugar. 😔💼'],
    ['I’d love to have gone to the party, but it was impossible. 🎉😞', 'Me encantaría haber ido a la fiesta, pero fue imposible. 🎉😞'],
  ];

  const preferAndWouldRather = [
    ['I don’t like cities. I prefer to live in the country. 😞🏙️', 'No me gustan las ciudades. Prefiero vivir en el campo. 😞🏙️'],
    ['I prefer this coat to the coat you were wearing yesterday. 👕🤔', 'Prefiero este abrigo al abrigo que llevabas ayer. 👕🤔'],
    ['I prefer driving to traveling by train. 🚗🚆', 'Prefiero conducir a viajar en tren. 🚗🚆'],
    ['I prefer to drive rather than travel by train. 🚗🤔', 'Prefiero conducir en lugar de viajar en tren. 🚗🤔'],
    ['Ann prefers to live in the country rather than in a city. 👩‍🌾🌳', 'Ann prefiere vivir en el campo en lugar de en la ciudad. 👩‍🌾🌳'],
    ['Would you prefer tea or coffee? –Coffee, please. ☕🤔', '¿Prefieres té o café? –Café, por favor. ☕🤔'],
    ['Should we take the train? –No, I’d prefer to drive. 🚂🚗', '¿Deberíamos tomar el tren? –No, prefiero conducir. 🚂🚗'],
    ['I’d prefer to stay at home tonight rather than go to the movies. 🏠🎥', 'Prefiero quedarme en casa esta noche en lugar de ir al cine. 🏠🎥'],
    ['Should we take the train? –I’d rather drive. 🚂🚗', '¿Deberíamos tomar el tren? –Prefiero conducir. 🚂🚗'],
    ['Would you rather have tea or coffee? –Coffee, please. ☕🤔', '¿Preferirías té o café? –Café, por favor. ☕🤔'],
    ['I’m tired. I’d rather not go out tonight, if you don’t mind. 😴🚫', 'Estoy cansado. Preferiría no salir esta noche, si no te importa. 😴🚫'],
    ['Do you want to go out tonight? –I’d rather not. 🌃🤔', '¿Quieres salir esta noche? –Prefiero no hacerlo. 🌃🤔'],
    ['I’d rather stay at home tonight than go to the movies. 🏠🎥', 'Prefiero quedarme en casa esta noche en lugar de ir al cine. 🏠🎥'],
    ['I’ll fix your car tomorrow, OK? –I’d rather you did it today. 🚗🔧', '¿Arreglo tu auto mañana, vale? –Preferiría que lo hicieras hoy. 🚗🔧'],
    ['Is it OK if Ben stays here? –I’d rather he came with us. 🤷‍♂️🏠', '¿Está bien si Ben se queda aquí? –Preferiría que viniera con nosotros. 🤷‍♂️🏠'],
    ['Shall I tell them, or would you rather they didn’t know? 🤔🗣️', '¿Debo decírselo, o preferirías que no lo supieran? 🤔🗣️'],
    ['I’d rather make dinner now. 🍲🤔', 'Prefiero hacer la cena ahora. 🍲🤔'],
    ['I’d rather you made dinner now. 🍲🤔', 'Prefiero que hagas la cena ahora. 🍲🤔'],
    ['I’d rather you didn’t tell anyone what I said. 🤫🚫', 'Preferiría que no le dijeras a nadie lo que dije. 🤫🚫'],
    ['Should I tell Stephanie? –I’d rather you didn’t. 🤔🤫', '¿Debería decírselo a Stephanie? –Preferiría que no lo hicieras. 🤔🤫'],
  ];

  const preposition = [
    ['Are you interested in working for us? 🙂', '¿Estás interesado en trabajar para nosotros? 🙂'],
    ['I’m not very good at learning languages. 😕', 'No soy muy bueno aprendiendo idiomas. 😕'],
    ['Sue must be fed up with studying. 😩', 'Sue debe estar harta de estudiar. 😩'],
    ['What are the advantages of having a car? 🚗', '¿Cuáles son las ventajas de tener un coche? 🚗'],
    ['Thanks very much for inviting me to your party. 😊', 'Muchas gracias por invitarme a tu fiesta. 😊'],
    ['How about meeting for lunch tomorrow? 🍽️', '¿Qué te parece si nos encontramos para almorzar mañana? 🍽️'],
    ['Why don’t you go out instead of sitting at home all the time? 🏠', '¿Por qué no sales en lugar de estar sentado en casa todo el tiempo? 🏠'],
    ['Carol went to work in spite of feeling sick. 😷', 'Carol fue a trabajar a pesar de sentirse enferma. 😷'],
    ['I’m fed up with people telling me what to do. 😤', 'Estoy harto de que la gente me diga qué hacer. 😤'],
    ['Before going out, I called Sarah. 📞', 'Antes de salir, llamé a Sarah. 📞'],
    ['What did you do after finishing school? 🎓', '¿Qué hiciste después de terminar la escuela? 🎓'],
    ['The burglars got into the house by breaking a window and climbing in. 🏠', 'Los ladrones entraron en la casa rompiendo una ventana y escalando. 🏠'],
    ['You can improve your English by reading more. 📚', 'Puedes mejorar tu inglés leyendo más. 📚'],
    ['She made herself sick by not eating properly. 🤢', 'Se enfermó por no comer adecuadamente. 🤢'],
    ['Many accidents are caused by people driving too fast. 🚗', 'Muchos accidentes son causados por personas que conducen demasiado rápido. 🚗'],
    ['We ran 10 miles without stopping. 🏃', 'Corrimos 10 millas sin parar. 🏃'],
    ['It was a stupid thing to say. I said it without thinking. 😒', 'Fue una tontería decirlo. Lo dije sin pensar. 😒'],
    ['She needs to work without people disturbing her. 👩‍💻', 'Necesita trabajar sin que la molesten. 👩‍💻'],
    ['I have enough problems of my own without having to worry about yours. 😤', 'Tengo suficientes problemas propios como para preocuparme por los tuyos. 😤'],
    ['We decided to go out. 🚶', 'Decidimos salir. 🚶'],
    ['Would you like to meet for lunch tomorrow? 🍽️', '¿Te gustaría encontrarnos para almorzar mañana? 🍽️'],
    ['We drove from Houston to Chicago. 🚗', 'Condujimos de Houston a Chicago. 🚗'],
    ['I prefer tea to coffee. ☕', 'Prefiero el té al café. ☕'],
    ['Are you looking forward to the weekend? 🎉', '¿Estás deseando que llegue el fin de semana? 🎉'],
    ['I prefer driving to traveling by train. 🚗', 'Prefiero conducir que viajar en tren. 🚗'],
    ['Are you looking forward to going on vacation? ✈️', '¿Estás deseando irte de vacaciones? ✈️'],
  ];

  const beGetUsedTo = [
    ['She wasn’t used to driving on the left. 🚗😕', 'Ella no estaba acostumbrada a conducir por la izquierda. 🚗😕'],
    ['She got used to driving on the left. 🚗😊', 'Se acostumbró a conducir por la izquierda. 🚗😊'],
    ['She is used to driving on the left. 🚗😌', 'Ella está acostumbrada a conducir por la izquierda. 🚗😌'],
    ['Frank lives alone. He doesn’t mind this because he has lived alone for 15 years. It is not strange for him. He is used to it. He is used to living alone. 🏠😌', 'Frank vive solo. No le importa porque ha vivido solo durante 15 años. No es extraño para él. Está acostumbrado. Está acostumbrado a vivir solo. 🏠😌'],
    ['I bought some new shoes. They felt strange at first because I wasn’t used to them. 👟😕', 'Compré unos zapatos nuevos. Al principio se sintieron extraños porque no estaba acostumbrado a ellos. 👟😕'],
    ['Our new apartment is on a very busy street. I expect we’ll get used to the noise, but for now it’s very annoying. 🏙️😤', 'Nuestro nuevo apartamento está en una calle muy concurrida. Espero que nos acostumbremos al ruido, pero por ahora es muy molesto. 🏙️😤'],
    ['Diane has a new job. She has to get up much earlier now than before. At 6:30. She finds this difficult, because she isn’t used to getting up so early. ⏰😩', 'Diane tiene un nuevo trabajo. Ahora tiene que levantarse mucho más temprano que antes. A las 6:30. Le resulta difícil, porque no está acostumbrada a levantarse tan temprano. ⏰😩'],
    ["Barbara's husband is often away. She doesn’t mind. She is used to him being away. 👫😌", 'El esposo de Barbara está a menudo fuera. A ella no le importa. Está acostumbrada a que él esté fuera. 👫😌'],
    ['She is used to driving on the left. 🚗😌', 'Ella está acostumbrada a conducir por la izquierda. 🚗😌'],
    ['Frank is used to living alone. 🏠😌', 'Frank está acostumbrado a vivir solo. 🏠😌'],
    ['Lisa had to get used to driving on the left. 🚗😊', 'Lisa tuvo que acostumbrarse a conducir por la izquierda. 🚗😊'],
    ['I am used to the weather in this country. 🌦️😌', 'Estoy acostumbrado al clima de este país. 🌦️😌'],
    ['I’m used to driving on the left because I’ve lived in Japan a long time. 🚗😌', 'Estoy acostumbrado a conducir por la izquierda porque he vivido en Japón mucho tiempo. 🚗😌'],
    ['I used to drive to work every day, but these days I usually ride my bike. 🚴‍♂️😊', 'Solía conducir al trabajo todos los días, pero estos días suelo ir en bicicleta. 🚴‍♂️😊'],
    ['We used to live in a small town, but now we live in Los Angeles. 🏘️🌆', 'Solíamos vivir en un pueblo pequeño, pero ahora vivimos en Los Ángeles. 🏘️🌆'],
  ];

  const verbPrepositionIng = [
    ['We talked about the problem. 💬😕', 'Hablamos sobre el problema. 💬😕'],
    ['You should apologize for what you said. 🙏😔', 'Deberías disculparte por lo que dijiste. 🙏😔'],
    ['We talked about going to South America. 💬🌎', 'Hablamos de ir a Sudamérica. 💬🌎'],
    ['You should apologize for not telling the truth. 🙏🤥', 'Deberías disculparte por no decir la verdad. 🙏🤥'],
    ['Have you succeeded in finding a job yet? 🤔💼', '¿Has tenido éxito en encontrar un trabajo todavía? 🤔💼'],
    ['They insisted on paying for dinner. 💵😊', 'Insistieron en pagar la cena. 💵😊'],
    ['I’m thinking of buying a house. 🏠🤔', 'Estoy pensando en comprar una casa. 🏠🤔'],
    ['I wouldn’t dream of asking them for money. 💭💰', 'No se me ocurriría pedirles dinero. 💭💰'],
    ['He doesn’t approve of swearing. 👎🤬', 'Él no aprueba jurar. 👎🤬'],
    ['We have decided against moving to Chicago. 🚫🏙️', 'Decidimos no mudarnos a Chicago. 🚫🏙️'],
    ['Do you feel like going out tonight? 🌃😊', '¿Te apetece salir esta noche? 🌃😊'],
    ['I’m looking forward to meeting her. 🤗👩', 'Estoy deseando conocerla. 🤗👩'],
    ['I don’t approve of people killing animals for fun. 👎🐾', 'No apruebo que la gente mate animales por diversión. 👎🐾'],
    ['We are all looking forward to Bob coming home. 🏠👨‍👩‍👧‍👦', 'Todos estamos deseando que Bob vuelva a casa. 🏠👨‍👩‍👧‍👦'],
    ['I congratulated Ann on getting a new job. 🎉👩💼', 'Felicité a Ann por conseguir un nuevo trabajo. 🎉👩💼'],
    ['They accused us of telling lies. 😠🗣️', 'Nos acusaron de decir mentiras. 😠🗣️'],
    ['Nobody suspected the general of being a spy. 🕵️‍♂️🔍', 'Nadie sospechaba que el general fuera un espía. 🕵️‍♂️🔍'],
    ['What prevented you from coming to see us? ❓🚫', '¿Qué te impidió venir a vernos? ❓🚫'],
    ['The noise keeps me from falling asleep. 🙉😴', 'El ruido me impide dormir. 🙉😴'],
    ['The rain didn’t stop us from enjoying our vacation. 🌧️🏖️', 'La lluvia no nos impidió disfrutar de nuestras vacaciones. 🌧️🏖️'],
    ['I forgot to thank them for helping me. 😬🙏', 'Olvidé agradecerles por ayudarme. 😬🙏'],
    ['Please excuse me for not returning your call. 📞🙏', 'Por favor, discúlpame por no devolverte la llamada. 📞🙏'],
    ['We were accused of telling lies. 😠🗣️', 'Nos acusaron de decir mentiras. 😠🗣️'],
    ['The general was suspected of being a spy. 🕵️‍♂️🔍', 'Se sospechaba que el general era un espía. 🕵️‍♂️🔍'],
    ['I apologized to them for keeping them waiting. 🙏⏳', 'Les pedí disculpas por hacerlos esperar. 🙏⏳'],
  ];

  const expressionsIng = [
    ['There’s no point in having a car if you never use it. 🚗❌', 'No tiene sentido tener un coche si nunca lo usas. 🚗❌'],
    ['There was no point in waiting any longer, so we left. 🕒❌', 'No tenía sentido esperar más, así que nos fuimos. 🕒❌'],
    ['What’s the point of having a car if you never use it? 🤔❓', '¿Cuál es el punto de tener un coche si nunca lo usas? 🤔❓'],
    ['There’s nothing you can do about the situation, so there’s no use worrying about it. 🤷‍♂️❌', 'No puedes hacer nada sobre la situación, así que no sirve de nada preocuparse por ella. 🤷‍♂️❌'],
    ['I live only a short walk from here, so it’s not worth taking a taxi. 🚶‍♂️🚖', 'Vivo a solo un corto paseo de aquí, así que no vale la pena tomar un taxi. 🚶‍♂️🚖'],
    ['Our flight was very early in the morning, so it wasn’t worth going to bed. ✈️😴', 'Nuestro vuelo era muy temprano en la mañana, así que no valía la pena ir a la cama. ✈️😴'],
    ['What was the movie like? Was it worth seeing? 🎬🤔', '¿Cómo estuvo la película? ¿Valió la pena verla? 🎬🤔'],
    ['Thieves broke into the house but didn’t take anything. There was nothing worth stealing. 👮‍♂️🏠', 'Los ladrones entraron a la casa pero no se llevaron nada. No había nada que valiera la pena robar. 👮‍♂️🏠'],
    ['I had no trouble finding a place to live. 🏠😊', 'No tuve ningún problema para encontrar un lugar donde vivir. 🏠😊'],
    ['Did you have any trouble getting a visa? 🛂🤔', '¿Tuviste algún problema para obtener una visa? 🛂🤔'],
    ['People often have a lot of trouble reading my writing. 👀📝', 'A menudo las personas tienen muchos problemas para leer mi escritura. 👀📝'],
    ['I had difficulty finding a place to live. 🏠😟', 'Tuve dificultades para encontrar un lugar donde vivir. 🏠😟'],
    ['I had a problem finding a place to live. 🏠😞', 'Tuve un problema para encontrar un lugar donde vivir. 🏠😞'],
    ['He spent hours trying to repair the clock. ⏰⏳', 'Pasó horas tratando de reparar el reloj. ⏰⏳'],
    ['I waste a lot of time daydreaming. 💭😔', 'Pierdo mucho tiempo soñando despierto. 💭😔'],
    ['She said she couldn’t go with us. She was too busy doing other things. 🙅‍♀️🕒', 'Dijo que no podía ir con nosotros. Estaba demasiado ocupada haciendo otras cosas. 🙅‍♀️🕒'],
    ['How often do you go swimming? 🏊‍♂️🤔', '¿Con qué frecuencia nadas? 🏊‍♂️🤔'],
    ['I’d like to go skiing. ⛷️🙂', 'Me gustaría ir a esquiar. ⛷️🙂'],
    ['When was the last time you went shopping? 🛍️🤔', '¿Cuándo fue la última vez que fuiste de compras? 🛍️🤔'],
    ['I’ve never gone sailing. ⛵🤷‍♂️', 'Nunca he ido a navegar. ⛵🤷‍♂️'],
  ];  

  const toForAndSoThat = [
    ['Why are you going out? –To mail a letter. 📬🚶‍♂️', '¿Por qué sales? –Para echar una carta. 📬🚶‍♂️'],
    ['A friend of mine called to invite me to a party. 🎉📞', 'Un amigo mío llamó para invitarme a una fiesta. 🎉📞'],
    ['We shouted to warn everybody of the danger. 🗣️⚠️', 'Gritamos para advertir a todos del peligro. 🗣️⚠️'],
    ['This fence is to keep people out of the yard. 🏡🚫', 'Esta valla es para mantener a la gente fuera del patio. 🏡🚫'],
    ['The president has a team of bodyguards to protect him. 👤💂‍♂️', 'El presidente tiene un equipo de guardaespaldas para protegerlo. 👤💂‍♂️'],
    ['It’s hard to find a place to park downtown. 🅿️🏙️', 'Es difícil encontrar un lugar para estacionar en el centro. 🅿️🏙️'],
    ['Would you like something to eat? 🍽️🤔', '¿Quieres algo para comer? 🍽️🤔'],
    ['Do you have much work to do? 💼🤔', '¿Tienes mucho trabajo que hacer? 💼🤔'],
    ['I get lonely if there’s nobody to talk to. 😔🗣️', 'Me siento solo si no hay nadie con quien hablar. 😔🗣️'],
    ['I need something to open this bottle with. 🍾🔧', 'Necesito algo con qué abrir esta botella. 🍾🔧'],
    ['They gave us some money to buy some food. 💵🍲', 'Nos dieron algo de dinero para comprar comida. 💵🍲'],
    ['Do you have much opportunity to practice your English? 🏴󠁧󠁢󠁥󠁮󠁧󠁿🗣️🤔', '¿Tienes muchas oportunidades de practicar tu inglés? 🏴󠁧󠁢󠁥󠁮󠁧󠁿🗣️🤔'],
    ['I need a few days to think about your proposal. 🤔📅', 'Necesito unos días para pensar en tu propuesta. 🤔📅'],
    ['I’m going to Spain for a vacation. ✈️🇪🇸', 'Voy a España de vacaciones. ✈️🇪🇸'],
    ['I’m going to Spain to learn Spanish. 🇪🇸📚', 'Voy a España para aprender español. 🇪🇸📚'],
    ['What would you like for dinner? 🍽️🤔', '¿Qué te gustaría para cenar? 🍽️🤔'],
    ['What would you like to eat? 🍽️🤔', '¿Qué te gustaría comer? 🍽️🤔'],
    ['Let’s go to the pool for a swim. 🏊‍♂️🤽‍♀️', 'Vamos a la piscina a nadar. 🏊‍♂️🤽‍♀️'],
    ['Let’s go to the pool to have a swim. 🏊‍♂️🤽‍♀️', 'Vamos a la piscina a nadar. 🏊‍♂️🤽‍♀️'],
    ['There weren’t any chairs for us to sit on, so we had to sit on the floor. 🪑❌🛋️', 'No había sillas para que nos sentáramos, así que tuvimos que sentarnos en el suelo. 🪑❌🛋️'],
    ['Do you use this brush for washing the dishes? 🧼🍽️🤔', '¿Usas este cepillo para lavar los platos? 🧼🍽️🤔'],
    ['What is this switch for? 💡🤔', '¿Para qué es este interruptor? 💡🤔'],
    ['What did you do that for? 🤷‍♂️🤔', '¿Para qué hiciste eso? 🤷‍♂️🤔'],
    ['I hurried so that I wouldn’t be late. ⏰🏃‍♂️🙅‍♂️', 'Me apresuré para no llegar tarde. ⏰🏃‍♂️🙅‍♂️'],
    ['Leave early so that you won’t miss the bus. ⏰🚌🏃‍♀️🙅‍♂️', 'Sal temprano para no perder el autobús. ⏰🚌🏃‍♀️🙅‍♂️'],
    ['She’s learning English so that she can study in Canada. 🇨🇦📚🇬🇧', 'Está aprendiendo inglés para poder estudiar en Canadá. 🇨🇦📚🇬🇧'],
    ['We moved to the city so that we could see our children more often. 🏙️👨‍👩‍👧‍👦🏠', 'Nos mudamos a la ciudad para poder ver a nuestros hijos con más frecuencia. 🏙️👨‍👩‍👧‍👦🏠'],
  ];
  const adjectiveTo = [
    ["Jim doesn't speak very clearly. It is hard to understand him. 🗣️❌", "Jim no habla muy claramente. Es difícil entenderlo. 🗣️❌"],
    ["Michael doesn’t speak very clearly. He is hard to understand. 🗣️❌", "Michael no habla muy claramente. Es difícil entenderlo. 🗣️❌"],
    ["Do you think it is safe to drink this water? 💧🤔", "¿Crees que es seguro beber esta agua? 💧🤔"],
    ["Do you think this water is safe to drink? 💧🤔", "¿Crees que esta agua es segura para beber? 💧🤔"],
    ["The questions on the exam were very difficult. It was impossible to answer them. 📝🤯", "Las preguntas del examen fueron muy difíciles. Era imposible responderlas. 📝🤯"],
    ["The questions on the exam were very difficult. They were impossible to answer. 📝🤯", "Las preguntas del examen fueron muy difíciles. Eran imposibles de responder. 📝🤯"],
    ["Jill has lots of interesting ideas. It’s interesting to talk to her. 💡🗣️", "Jill tiene muchas ideas interesantes. Es interesante hablar con ella. 💡🗣️"],
    ["Jill is interesting to talk to. 🗣️💡", "Jill es interesante para hablar. 🗣️💡"],
    ["This is a difficult question to answer. 🤔📝", "Esta es una pregunta difícil de responder. 🤔📝"],
    ["It was nice of you to take me to the airport. Thank you very much. 🛫🙏", "Fue amable de tu parte llevarme al aeropuerto. Muchas gracias. 🛫🙏"],
    ["It’s foolish of Mary to quit her job when she needs the money. 🤦‍♀️💼", "Es una tontería de Mary renunciar a su trabajo cuando necesita el dinero. 🤦‍♀️💼"],
    ["I think it was very unfair of him to criticize me. 😡⚖️", "Creo que fue muy injusto de su parte criticarme. 😡⚖️"],
    ["I was sorry to hear that your father is ill. 😞👨‍⚕️", "Lamento escuchar que tu padre está enfermo. 😞👨‍⚕️"],
    ["Was Julia surprised to see you? 😯👀", "¿Julia se sorprendió al verte? 😯👀"],
    ["It was long and tiring trip. We were glad to get home. 🚗😓", "Fue un viaje largo y cansador. Estábamos contentos de llegar a casa. 🚗😓"],
    ["If I have any more news, you will be the first person to know. 📰🤔", "Si tengo más noticias, serás la primera persona en saberlo. 📰🤔"],
    ["The next plane to arrive at Gate 4 will be Flight 268 from Bogota. ✈️🛬", "El próximo avión en llegar a la Puerta 4 será el Vuelo 268 desde Bogotá. ✈️🛬"],
    ["Everybody was late except me. I was the only one to arrive on time. ⏰⚠️", "Todos llegaron tarde excepto yo. Fui el único en llegar a tiempo. ⏰⚠️"],
    ["Carla is a very good student. She’s bound to pass the exam. 📚👩‍🎓", "Carla es una muy buena estudiante. Seguro pasará el examen. 📚👩‍🎓"],
    ["I’m likely to get home late tonight. 🌙🏠", "Es probable que llegue a casa tarde esta noche. 🌙🏠"],
  ];
  const toAndPrepositionIng = [
    ['This part of town dangerous. People are afraid to walk here at night. ⚠️🚶‍♂️', 'Esta parte de la ciudad es peligrosa. La gente tiene miedo de caminar aquí por la noche. ⚠️🚶‍♂️'],
    ['James was afraid to tell his parents what happened. 😨🗣️', 'James tenía miedo de contarle a sus padres lo que sucedió. 😨🗣️'],
    ['The sidewalk was icy, so we walked very carefully. We were afraid of falling. ❄️🚶‍♀️', 'La acera estaba helada, así que caminamos con mucho cuidado. Teníamos miedo de caernos. ❄️🚶‍♀️'],
    ['I don’t like dogs. I’m always afraid of being bitten. 🐕😨', 'No me gustan los perros. Siempre tengo miedo de ser mordido. 🐕😨'],
    ['I was afraid to go near the dog because I was afraid of being bitten. 😨🐶', 'Tenía miedo de acercarme al perro porque temía ser mordido. 😨🐶'],
    ['Let me know if you’re interested in joining the club. 🤔🎉', 'Avísame si estás interesado en unirte al club. 🤔🎉'],
    ['I tried to sell my car, but nobody was interested in buying it. 🚗💰', 'Intenté vender mi auto, pero a nadie le interesaba comprarlo. 🚗💰'],
    ['I was interested to hear that Tanya quit her job. 🤔👩‍💼', 'Me interesó escuchar que Tanya renunció a su trabajo. 🤔👩‍💼'],
    ['Ask Mike for his opinion. I would be interested to know what he thinks. 🗣️🤔', 'Pídele la opinión a Mike. Me interesaría saber qué piensa él. 🗣️🤔'],
    ['I was surprised to hear that Tanya quit her job. 😲👩‍💼', 'Me sorprendió escuchar que Tanya renunció a su trabajo. 😲👩‍💼'],
    ['I was sorry to hear that Nicky lost her job. 😞👩‍💼', 'Lamenté escuchar que Nicky perdió su trabajo. 😞👩‍💼'],
    ['I’ve enjoyed my stay here. I’ll be sorry to leave. 😊🏨', 'Disfruté mi estadía aquí. Me entristecerá irme. 😊🏨'],
    ['I’m sorry to call you so late, but I need to ask you something. 😔📞', 'Lamento llamarte tan tarde, pero necesito preguntarte algo. 😔📞'],
    ['I’m sorry for shouting at you yesterday. 😔🗣️', 'Lamento haberte gritado ayer. 😔🗣️'],
    ['I’m sorry I shouted at you yesterday. 😔🗣️', 'Lamento haber gritado ayer. 😔🗣️'],
  ];

  const seeSomebodyDoDoing = [
    ['I saw Tom get into his car and drive away. 👀🚗', 'Vi a Tom subirse a su coche y conducir lejos. 👀🚗'],
    ['I saw somebody do something. 👀👤', 'Vi a alguien hacer algo. 👀👤'],
    ['I saw Kate waiting for a bus. 👀🚌', 'Vi a Kate esperando un autobús. 👀🚌'],
    ['He fell off the wall. I saw him fall off the wall. 🧱😲', 'Se cayó del muro. Lo vi caerse del muro. 🧱😲'],
    ['Did you see the accident happen? 👀🚗', '¿Viste el accidente suceder? 👀🚗'],
    ['He was walking along the street. I saw him walking along the street. 🚶‍♂️🏙️', 'Él caminaba por la calle. Lo vi caminar por la calle. 🚶‍♂️🏙️'],
    ['I’ve never seen her dance. / I’ve never seen her dancing. 👀💃', 'Nunca la he visto bailar. / Nunca la he visto bailando. 👀💃'],
    ['I didn’t hear you come in. 👂🚪', 'No te oí entrar. 👂🚪'],
    ['Liz suddenly felt somebody touch her on the shoulder. 😮👐', 'Liz de repente sintió a alguien tocarle en el hombro. 😮👐'],
    ['Did you notice anyone go out? 👀🚶‍♂️', '¿Notaste a alguien salir? 👀🚶‍♂️'],
    ['I could hear it raining. 👂🌧️', 'Podía oír que llovía. 👂🌧️'],
    ['The missing children were last seen playing near the river. 👀👧👦', 'Se vio por última vez a los niños desaparecidos jugando cerca del río. 👀👧👦'],
    ['Listen to the birds singing! 🐦🎶', '¡Escucha a los pájaros cantando! 🐦🎶'],
    ['Can you smell something burning? 👃🔥', '¿Puedes oler algo quemándose? 👃🔥'],
    ['I found Sue in my room reading my letters. 👀📃', 'Encontré a Sue en mi habitación leyendo mis cartas. 👀📃'],
  ];  

  const ingPhrases = [
    ['Joe hurt his knee playing football. ⚽🩹', 'Joe se lastimó la rodilla jugando al fútbol. ⚽🩹'],
    ['Feeling tired, I went to bed early. 😴🛏️', 'Sintiéndome cansado, me fui a la cama temprano. 😴🛏️'],
    ['Kate is in the kitchen making coffee. 👩‍🍳☕', 'Kate está en la cocina preparando café. 👩‍🍳☕'],
    ['A man ran out of the house shouting. 🏃‍♂️🏠', 'Un hombre salió corriendo de la casa gritando. 🏃‍♂️🏠'],
    ['Do something! Don’t just stand there doing nothing! 🤷‍♂️🛑', '¡Haz algo! ¡No te quedes ahí sin hacer nada! 🤷‍♂️🛑'],
    ['Did you cut yourself shaving? ✂️🪒', '¿Te cortaste afeintándote? ✂️🪒'],
    ['Joe hurt his knee while playing football. ⚽🩹', 'Joe se lastimó la rodilla mientras jugaba al fútbol. ⚽🩹'],
    ['Be careful when crossing the street. 🚸⚠️', 'Ten cuidado al cruzar la calle. 🚸⚠️'],
    ['Having found a hotel, we looked for someplace to have dinner. 🏨🍽️', 'Habiendo encontrado un hotel, buscamos algún lugar para cenar. 🏨🍽️'],
    ['Having finished her work, she went home. 🏠👩‍💼', 'Habiendo terminado su trabajo, ella se fue a casa. 🏠👩‍💼'],
    ['After finishing her work, she went home. 🏠👩‍💼', 'Después de terminar su trabajo, ella se fue a casa. 🏠👩‍💼'],
    ['Taking a key out of his pocket, he opened the door. 🔑🚪', 'Sacando una llave de su bolsillo, abrió la puerta. 🔑🚪'],
    ['Feeling tired, I went to bed early. 😴🛏️', 'Sintiéndome cansado, me fui a la cama temprano. 😴🛏️'],
    ['Being unemployed, he doesn’t have much money. 🚫💼', 'Al estar desempleado, no tiene mucho dinero. 🚫💼'],
    ['Not having a car, she has trouble getting around. 🚗🚫', 'Al no tener un coche, tiene problemas para moverse. 🚗🚫'],
    ['Having already seen the movie twice, I didn’t want to go again with my friends. 🎬👀', 'Habiendo visto la película dos veces, no quería ir de nuevo con mis amigos. 🎬👀'],
  ];  

export default { verbAndIngOrTo, beGetUsedTo, verbPrepositionIng, expressionsIng, toForAndSoThat, adjectiveTo, toAndPrepositionIng, seeSomebodyDoDoing, ingPhrases}