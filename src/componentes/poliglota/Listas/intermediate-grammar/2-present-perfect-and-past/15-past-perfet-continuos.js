//15 Past Perfect Continuous ( I had been doing)

const pastPerfectContinuos = [
  // Conversation 1
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

  // Conversation 9
  [
    "James was out of breath. He had been running.",
    "James estaba sin aliento. Había estado corriendo. 🏃‍♂️😓",
  ],

  // Conversation 10
  [
    "It wasn’t raining when we went out. The sun was shining. But it had been raining, so the ground was wet.",
    "No estaba lloviendo cuando salimos. El sol brillaba. Pero había estado lloviendo, así que el suelo estaba mojado. ☔🌞",
  ],

  // Conversation 11
  [
    "Stephanie was sitting in an armchair resting. She was tired because she’d been working very hard.",
    "Stephanie estaba sentada en un sillón descansando. Estaba cansada porque había estado trabajando muy duro. 💺💪",
  ],

  // Conversation 12
  [
    "We were good friends. We had known each other for years.",
    "Éramos buenos amigos. Nos conocíamos desde hacía años. 👫🤝",
  ],

  // Conversation 13
  [
    "I was very tired when I got home.",
    "(Yo / trabajar / duro todo el día) I’d been working hard all day. 😴💼",
  ],

  // Conversation 14
  [
    "The two boys came into the house. They had a soccer ball, and they were both very tired. They had been playing soccer.",
    "Los dos chicos entraron a la casa. Tenían un balón de fútbol y ambos estaban muy cansados.\nHabían estado jugando al fútbol. ⚽😓",
  ],

  // Conversation 15
  [
    "I was disappointed when I had to cancel my vacation. I had been looking forward to it.",
    "Me sentí decepcionado cuando tuve que cancelar mis vacaciones. Las había estado esperando. 😞✈️",
  ],

  // Conversation 16
  [
    "Ann woke up in the middle of the night. She was scared and didn’t know where she was. She had been dreaming.",
    "Ann se despertó en mitad de la noche. Tenía miedo y no sabía dónde estaba.\nHabía estado soñando. 😱💤",
  ],

  // Conversation 17
  [
    "When I got home, Mike was sitting in front of the TV. He had just turned it off. He had been watching a DVD.",
    "Cuando llegué a casa, Mike estaba sentado frente al televisor. Acababa de apagarlo.\nHabía estado viendo un DVD. 📺🍿",
  ],

  // Conversation 18
  [
    "We played tennis yesterday. Half an hour after we began playing, it started to rain. We had been playing for half an hour when it started to rain.",
    "Jugamos al tenis ayer. Media hora después de comenzar a jugar, empezó a llover.\nHabíamos estado jugando durante media hora cuando empezó a llover. 🎾🌧️",
  ],

  // Conversation 19
  [
    "I had arranged to meet Robert in a restaurant. I arrived and waited for him. After 20 minutes, I suddenly realized that I was in the wrong restaurant. I had been waiting for 20 minutes when I realized I was in the wrong restaurant.",
    "Había quedado en encontrarme con Robert en un restaurante. Llegué y lo esperé. Después de 20 minutos, de repente me di cuenta de que estaba en el restaurante equivocado.\nHabía estado esperando durante 20 minutos cuando me di cuenta de que estaba en el restaurante equivocado. 🤦‍♂️🕰️",
  ],

  // Conversation 20
  [
    "Sara got a job in a factory. Five years later, the factory closed down. When the factory closed, Sarah had been working there for five years.",
    "Sara consiguió un trabajo en una fábrica. Cinco años después, la fábrica cerró.\nCuando la fábrica cerró, Sarah había estado trabajando allí durante cinco años. 👩‍🏭⏭️🔐",
  ],

  // Conversation 21
  [
    "I went to a concert last week. The orchestra began playing. After about 10 minutes, a man in the audience suddenly started shouting. The orchestra had been playing for about 10 minutes when the man started shouting.",
    "Fui a un concierto la semana pasada. La orquesta comenzó a tocar. Después de unos 10 minutos, un hombre en la audiencia de repente empezó a gritar.\nLa orquesta había estado tocando durante unos 10 minutos cuando el hombre empezó a gritar. 🎵🗣️",
  ],

  // Conversation 22
  [
    "I began driving home from work. I had been driving for about 15 minutes when my car broke down.",
    "Empecé a conducir a casa desde el trabajo. Había estado conduciendo durante unos 15 minutos cuando mi coche se averió. 🚗🔧",
  ],

  // Conversation 23
  [
    "It was very noisy next door. Our neighbors were having a party.",
    "Había mucho ruido al lado. Nuestros vecinos estaban teniendo una fiesta. 🎉🔊",
  ],

  // Conversation 24
  [
    "We were good friends. We had known each other for years.",
    "Éramos buenos amigos. Nos conocíamos desde hacía años. 👫🤝",
  ],

  // Conversation 25
  [
    "John and I went for a walk. I had trouble keeping up with him because he had been walking so fast.",
    "John y yo salimos a dar un paseo. Tuve problemas para seguirle el ritmo porque él había estado caminando muy rápido. 🚶‍♂️💨",
  ],

  // Conversation 26
  [
    "Sue was sitting on the ground. She was out of breath. She had been running.",
    "Sue estaba sentada en el suelo. Estaba sin aliento. Había estado corriendo. 🏃‍♀️😓",
  ],

  // Conversation 27
  [
    "When I arrived, everybody was sitting around the table and talking. Their mouths were empty, but their stomachs were full. They had been eating.",
    "Cuando llegué, todos estaban sentados alrededor de la mesa y hablaban. Sus bocas estaban vacías, pero sus estómagos estaban llenos.\nHabían estado comiendo. 🍽️😋",
  ],

  // Conversation 28
  [
    "Jim was on his hands and knees on the floor. He had been looking for his contact lens.",
    "Jim estaba de rodillas en el suelo. Estaba buscando su lente de contacto. 👀🔍",
  ],

  // Conversation 29
  [
    "When I arrived, Kate was waiting for me. She was upset with me because I was late, and she had been waiting for a long time.",
    "Cuando llegué, Kate me estaba esperando. Estaba molesta conmigo porque llegaba tarde, y había estado esperando durante mucho tiempo. ⏰😡",
  ],

  // Conversation 30
  [
    "I was sad when I sold my car. I had had it for a long time.",
    "Estaba triste cuando vendí mi coche. Lo había tenido durante mucho tiempo. 🚗😢",
  ],

  // Conversation 31
  [
    "We were exhausted at the end of our trip. We had been traveling for more than 24 hours.",
    "Estábamos exhaustos al final de nuestro viaje. Habíamos estado viajando durante más de 24 horas. 🌍✈️😴",
  ],
];

export default pastPerfectContinuos;
