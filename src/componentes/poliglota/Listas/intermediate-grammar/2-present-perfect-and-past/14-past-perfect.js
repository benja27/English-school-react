//14 Past Perfect (I had done)

const pastPerfect = [
  // Conversation 1
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

  // Conversation 9
  [
    "We aren’t hungry. We’ve just had lunch.",
    "No teníamos hambre. Acabábamos de almorzar. 🍽️",
  ],

  // Conversation 10
  [
    "We weren’t hungry. We’d just had lunch.",
    "No teníamos hambre. Acabábamos de almorzar. 🍽️",
  ],

  // Conversation 11
  [
    "The house is dirty. They haven’t cleaned it for weeks.",
    "La casa está sucia. No la han limpiado durante semanas. 🏠🧹",
  ],

  // Conversation 12
  [
    "The house was dirty. They hadn’t cleaned it for weeks.",
    "La casa estaba sucia. No la habían limpiado durante semanas. 🏠🧹",
  ],

  // Conversation 13
  [
    "Was Tom there when you arrived? – Yes, but he left a little later.",
    "¿Estaba Tom allí cuando llegaste? – Sí, pero se fue un poco después. 🚶‍♂️",
  ],

  // Conversation 14
  [
    "Was Tom there when you arrived? – No, he had already left.",
    "¿Estaba Tom allí cuando llegaste? – No, ya se había ido. 🚪",
  ],

  // Conversation 15
  [
    "Amy wasn’t at home when I called. She was at her mother’s house.",
    "Amy no estaba en casa cuando llamé. Estaba en la casa de su madre. 📞🏠",
  ],

  // Conversation 16
  [
    "You went to Jill’s house, but she wasn’t there. She had gone out.",
    "Fuiste a la casa de Jill, pero ella no estaba allí. Había salido. 🚪🚶‍♀️",
  ],

  // Conversation 17
  [
    "You went back to your hometown after many years. It wasn’t the same as before. It had changed a lot.",
    "Regresaste a tu ciudad natal después de muchos años. No era lo mismo que antes. Había cambiado mucho. 🏡🔄",
  ],

  // Conversation 18
  [
    "I invited Rachel to the party, but she couldn’t come. She had made plans to do something else.",
    "Invité a Rachel a la fiesta, pero no pudo venir. Había hecho planes para hacer algo más. 🎉🗓️",
  ],

  // Conversation 19
  [
    "You went to the movies last night. You got there late. The movie had already begun.",
    "Fuiste al cine anoche. Llegaste tarde. La película ya había comenzado. 🍿🎬",
  ],

  // Conversation 20
  [
    "It was nice to see Daniel again after such a long time. I hadn't seen him in five years.",
    "Fue agradable volver a ver a Daniel después de tanto tiempo. No lo había visto en cinco años. 👋👥",
  ],

  // Conversation 21
  [
    "I offered Sue something to eat, but she wasn’t hungry. She had just had breakfast.",
    "Le ofrecí algo de comer a Sue, pero no tenía hambre. Acababa de desayunar. 🍽️🍳",
  ],

  // Conversation 22
  [
    "The man sitting next to you on the plane was very nervous. It was his first flight. (fly) He had never flown before.",
    "El hombre que estaba sentado a tu lado en el avión estaba muy nervioso. Fue su primer vuelo. (volar) Nunca había volado antes. ✈️😬",
  ],

  // Conversation 23
  [
    "A woman walked into the room. She was a complete stranger to me. (see) I had never seen her before.",
    "Una mujer entró en la habitación. Era una completa desconocida para mí. (ver) Nunca la había visto antes. 👩‍🚀🤷‍♂️",
  ],

  // Conversation 24
  [
    "Sam played tennis yesterday. He wasn’t very good at it because it was his first game. (play) He had never played before.",
    "Sam jugó al tenis ayer. No fue muy bueno en eso porque era su primer juego. (jugar) Nunca había jugado antes. 🎾👟",
  ],

  // Conversation 25
  [
    "Last year we went to Mexico, It was our first time there. (be there) We had never been there before.",
    "El año pasado fuimos a México, fue nuestra primera vez allí. (estar allí) Nunca habíamos estado allí antes. 🌎✈️",
  ],

  // Conversation 26
  [
    "Was Ben at the party when you got there? – No, he had gone (go) home.",
    "¿Ben estaba en la fiesta cuando llegaste? – No, se había ido (irse) a casa. 🏠🚶‍♂️",
  ],

  // Conversation 27
  [
    "I felt very tired when I got home, so I went (go) straight to bed.",
    "Me sentí muy cansado cuando llegué a casa, así que me fui (irse) directamente a la cama. 😴🛌",
  ],

  // Conversation 28
  [
    "The house was very quiet when I got home. Everybody had gone (go) to bed.",
    "La casa estaba muy tranquila cuando llegué a casa. Todos se habían ido (irse) a la cama. 🏠😴",
  ],

  // Conversation 29
  [
    "Sorry I’m late. My car broke (break) down on the way here.",
    "Lo siento, llego tarde. Mi coche se rompió (romperse) en el camino aquí. 🚗🔧",
  ],

  // Conversation 30
  [
    "We were driving on the highway when we saw (see) a car that had broken (break) down, so we stopped (stop) to help.",
    "Estábamos conduciendo por la carretera cuando vimos (ver) un coche que se había descompuesto (descomponerse), así que nos detuvimos (detenernos) para ayudar. 🛣️🚗🛠️",
  ],
];

export default pastPerfect;
