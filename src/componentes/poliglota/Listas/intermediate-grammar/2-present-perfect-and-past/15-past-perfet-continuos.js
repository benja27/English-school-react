//15 Past Perfect Continuous ( I had been doing)

const pastPerfectContinuos = [
    // Conversation 1
    [
      "Cuando los niños entraron a la casa, sus ropas estaban sucias, su cabello desordenado, y uno de ellos tenía un ojo morado. Habían estado peleando.",
      "When the boys came into the house, their clothes were dirty, their hair was messy, and one of them had a black eye. They’d been fighting."
    ],
  
    // Conversation 2
    [
      "Estaba muy cansado cuando llegué a casa. Había estado trabajando duro todo el día.",
      "I was very tired when I got home. I’d been working hard all day."
    ],
  
    // Conversation 3
    [
      "Cuando fui a Tokio hace unos años, me quedé con una amiga mía. Ella llevaba viviendo allí poco tiempo pero conocía muy bien la ciudad.",
      "When I went to Tokyo a few years ago, I stayed with a friend of mine. She’d been living there only a short time but knew the city very well."
    ],
  
    // Conversation 4
    [
      "Habíamos estado jugando al tenis durante aproximadamente media hora cuando empezó a llover fuerte.",
      "We’d been playing tennis for about half an hour when it started to rain hard."
    ],
  
    // Conversation 5
    [
      "Jim fue al médico el pasado viernes. No se había sentido bien durante algún tiempo.",
      "Jim went to the doctor last Friday. He hadn’t been feeling well for some time."
    ],
  
    // Conversation 6
    [
      "Espero que el autobús llegue pronto. He estado esperando durante 20 minutos. (antes de ahora)",
      "I hope the bus comes soon. I’ve been waiting for 20 minutes. (before now)"
    ],
  
    // Conversation 7
    [
      "Finalmente llegó el autobús. Había estado esperando durante 20 minutos. (antes de que llegara el autobús)",
      "The bus finally came. I’d been waiting for 20 minutes. (before the bus came)"
    ],
  
    // Conversation 8
    [
      "James está sin aliento. Ha estado corriendo.",
      "James is out of breath. He has been running."
    ],
  
    // Conversation 9
    [
      "James estaba sin aliento. Había estado corriendo.",
      "James was out of breath. He had been running."
    ],
  
    // Conversation 10
    [
      "No estaba lloviendo cuando salimos. El sol brillaba. Pero había estado lloviendo, así que el suelo estaba mojado.",
      "It wasn’t raining when we went out. The sun was shining. But it had been raining, so the ground was wet."
    ],
  
    // Conversation 11
    [
      "Stephanie estaba sentada en un sillón descansando. Estaba cansada porque había estado trabajando muy duro.",
      "Stephanie was sitting in an armchair resting. She was tired because she’d been working very hard."
    ],
  
    // Conversation 12
    [
      "Éramos buenos amigos. Nos conocíamos desde hacía años.",
      "We were good friends. We had known each other for years."
    ],
  
    // Conversation 13
    [
      "Estaba muy cansado cuando llegué a casa.",
      "(Yo / trabajar / duro todo el día) I’d been working hard all day."
    ],
  
    // Conversation 14
    [
      "Los dos chicos entraron a la casa. Tenían un balón de fútbol y ambos estaban muy cansados.",
      "The two boys came into the house. They had a soccer ball, and they were both very tired.\nThey had been playing soccer."
    ],
  
    // Conversation 15
    [
      "Me sentí decepcionado cuando tuve que cancelar mis vacaciones.",
      "I was disappointed when I had to cancel my vacation.\nI had been looking forward to it."
    ],
  
    // Conversation 16
    [
      "Ann se despertó en mitad de la noche. Tenía miedo y no sabía dónde estaba.",
      "Ann woke up in the middle of the night. She was scared and didn’t know where she was.\nShe had been dreaming."
    ],
  
    // Conversation 17
    [
      "Cuando llegué a casa, Mike estaba sentado frente al televisor. Acababa de apagarlo.",
      "When I got home, Mike was sitting in front of the TV. He had just turned it off.\nHe had been watching a DVD."
    ],
  
    // Conversation 18
    [
      "Jugamos al tenis ayer. Media hora después de comenzar a jugar, empezó a llover.",
      "We played tennis yesterday. Half an hour after we began playing, it started to rain.\nWe had been playing for half an hour when it started to rain."
    ],
  
    // Conversation 19
    [
      "Había quedado en encontrarme con Robert en un restaurante. Llegué y lo esperé. Después de 20 minutos, de repente me di cuenta de que estaba en el restaurante equivocado.",
      "I had arranged to meet Robert in a restaurant. I arrived and waited for him. After 20 minutes, I suddenly realized that I was in the wrong restaurant.\nI had been waiting for 20 minutes when I realized I was in the wrong restaurant."
    ],
  
    // Conversation 20
    [
      "Sara consiguió un trabajo en una fábrica. Cinco años después, la fábrica cerró.",
      "Sara got a job in a factory. Five years later, the factory closed down.\nWhen the factory closed, Sarah had been working there for five years."
    ],
  
    // Conversation 21
    [
      "Fui a un concierto la semana pasada. La orquesta comenzó a tocar. Después de unos 10 minutos, un hombre en la audiencia de repente empezó a gritar.",
      "I went to a concert last week. The orchestra began playing. After about 10 minutes, a man in the audience suddenly started shouting.\nThe orchestra had been playing for about 10 minutes when the man started shouting."
    ],
  
    // Conversation 22
    [
      "Empecé a conducir a casa desde el trabajo. Había estado conduciendo durante unos 15 minutos cuando mi coche se averió.",
      "I began driving home from work. I had been driving for about 15 minutes when my car broke down."
    ],
  
    // Conversation 23
    [
      "Había mucho ruido al lado. Nuestros vecinos estaban teniendo una fiesta.",
      "It was very noisy next door. Our neighbors were having a party."
    ],
  
    // Conversation 24
    [
      "Éramos buenos amigos. Nos conocíamos desde hacía años.",
      "We were good friends. We had known each other for years."
    ],
  
    // Conversation 25
    [
      "John y yo salimos a dar un paseo. Tuve problemas para seguirle el ritmo porque él había estado caminando muy rápido.",
      "John and I went for a walk. I had trouble keeping up with him because he had been walking so fast."
    ],
  
    // Conversation 26
    [
      "Sue estaba sentada en el suelo. Estaba sin aliento. Había estado corriendo.",
      "Sue was sitting on the ground. She was out of breath. She had been running."
    ],
  
    // Conversation 27
    [
      "Cuando llegué, todos estaban sentados alrededor de la mesa y hablaban. Sus bocas estaban vacías, pero sus estómagos estaban llenos. Habían estado comiendo.",
      "When I arrived, everybody was sitting around the table and talking. Their mouths were empty, but their stomachs were full.\nThey had been eating."
    ],
  
    // Conversation 28
    [
      "Jim estaba de rodillas en el suelo. Estaba buscando su lente de contacto.",
      "Jim was on his hands and knees on the floor. He had been looking for his contact lens."
    ],
  
    // Conversation 29
    [
      "Cuando llegué, Kate me estaba esperando. Estaba molesta conmigo porque llegaba tarde, y había estado esperando durante mucho tiempo.",
      "When I arrived, Kate was waiting for me. She was upset with me because I was late, and she had been waiting for a long time."
    ],
  
    // Conversation 30
    [
      "Estaba triste cuando vendí mi coche. Lo había tenido durante mucho tiempo.",
      "I was sad when I sold my car. I had had it for a long time."
    ],
  
    // Conversation 31
    [
      "Estábamos exhaustos al final de nuestro viaje. Habíamos estado viajando durante más de 24 horas.",
      "We were exhausted at the end of our trip. We had been traveling for more than 24 hours."
    ]
  ];
  

  export default pastPerfectContinuos;