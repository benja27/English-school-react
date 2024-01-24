//17 Used to (do)
const usedToDo = [
  // Sentence 1
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

  // Sentence 9
  [
    'There used to be four movie theaters in town. Now there is only one.',
    'Solía haber cuatro cines en el pueblo. Ahora solo hay uno. 🎥🔄',
  ],

  // Sentence 10
  [
    'Did you used to eat a lot of candy when you were a child?',
    '¿Solías comer muchos dulces cuando eras niño? 🍬🔄',
  ],

  // Sentence 11
  ['I didn’t used to like him.', 'No solía gustarme. 😕🔄'],

  // Sentence 12
  [
    'I used to watch TV a lot when I was little.',
    'Solía ver mucha televisión cuando era pequeño. 📺🔄',
  ],

  // Sentence 13
  ['I was watching TV when Mike called.', 'Estaba viendo televisión cuando Mike llamó. 📺📞'],

  // Sentence 14
  ['I used to live alone.', 'Solía vivir solo. 🏠🔄'],

  // Sentence 15
  ['I am used to living alone.', 'Estoy acostumbrado a vivir solo. 🏠🔄'],

  // Sentence 16
  [
    'David quit jogging two years ago. He used to jog three miles a day.',
    'David dejó de correr hace dos años. Solía correr tres millas al día. 🏃‍♂️🔄',
  ],

  // Sentence 17
  [
    'Liz used to ride a motorcycle, but last year she sold it and bought a car.',
    'Liz solía andar en motocicleta, pero el año pasado la vendió y compró un auto. 🏍️🚗',
  ],

  // Sentence 18
  [
    'We moved to Spain a few years ago. We used to live in Paris.',
    'Nos mudamos a España hace unos años. Solíamos vivir en París. 🌍🔄',
  ],

  // Sentence 19
  [
    'I seldom eat ice cream now, but I used to love it when I was a child.',
    'Suelo comer helado ahora, pero solía encantarme cuando era niño. 🍦🔄',
  ],

  // Sentence 20
  [
    "Tracy used to be my best friend, but we aren't friends anymore.",
    'Tracy solía ser mi mejor amiga, pero ya no somos amigos. 👫❌',
  ],

  // Sentence 21
  [
    'It only takes me about 40 minutes to get to work now that the new highway is open. It used to take more than an hour.',
    'Ahora solo me lleva unos 40 minutos llegar al trabajo ahora que la nueva autopista está abierta. Solía llevar más de una hora. 🚗🔄',
  ],

  // Sentence 22
  [
    'There used to be a hotel near the airport, but it closed a long time ago.',
    'Solía haber un hotel cerca del aeropuerto, pero cerró hace mucho tiempo. 🏨🔄',
  ],

  // Sentence 23
  [
    'When you lived in New York, did you used to go to the theater very often?',
    'Cuando vivías en Nueva York, ¿solías ir al teatro muy a menudo? 🎭🔄',
  ],

  // Sentence 24
  [
    'She used to travel a lot, but she doesn’t take many trips these days.',
    'Ella solía viajar mucho, pero ya no hace muchos viajes estos días. ✈️🔄',
  ],

  // Sentence 25
  [
    "She used to have lots of friends, but she doesn't see many people these days.",
    'Solía tener muchos amigos, pero ya no ve a mucha gente estos días. 👥🔄',
  ],

  // Sentence 26
  [
    'She used to be very lazy, but she works very hard these days.',
    'Solía ser muy perezosa, pero ahora trabaja muy duro. 💪🔄',
  ],

  // Sentence 27
  [
    'She used to not like cheese, but she eats lots of cheese now.',
    'Antes no solía gustarle el queso, pero ahora come mucho queso. 🧀🔄',
  ],

  // Sentence 28
  [
    "She used to go to a lot of parties, but she hasn't been to a party for ages.",
    'Solía ir a muchas fiestas, pero no va a una fiesta desde hace mucho tiempo. 🎉🔄',
  ],

  // Sentence 29
  [
    'She used to be a hotel desk clerk, but she works in a bookstore now.',
    'Solía ser recepcionista de hotel, pero ahora trabaja en una librería. 🏨📚',
  ],

  // Sentence 30
  [
    "She used to play the piano, but she hasn't played the piano for years.",
    'Solía tocar el piano, pero no toca el piano desde hace años. 🎹🔄',
  ],

  // Sentence 31
  [
    'She used to never read newspapers, but she reads a newspaper every day now.',
    'Antes no solía leer periódicos, pero ahora lee un periódico todos los días. 📰🔄',
  ],

  // Sentence 32
  [
    'She used to not drink tea, but tea is great! She likes it now.',
    'Antes no solía beber té, ¡pero el té es genial! Le gusta ahora. ☕🔄',
  ],

  // Sentence 33
  [
    'She used to have a dog, but her dog died two years ago.',
    'Solía tener un perro, pero su perro murió hace dos años. 🐕🔄',
  ],
];

export default usedToDo;
