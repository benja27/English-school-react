const countable = [
    ['I eat a banana every day. 🍌🥣', 'Como un plátano todos los días. 🍌🥣'],
    ['I like bananas. 🍌❤️', 'Me gustan los plátanos. 🍌❤️'],
    ['I eat rice every day. 🍚🥢', 'Como arroz todos los días. 🍚🥢'],
    ['I like rice. 🍚❤️', 'Me gusta el arroz. 🍚❤️'],
    ['Kate was singing a song. 🎤🎶', 'Kate estaba cantando una canción. 🎤🎶'],
    ['There’s a nice beach near here. 🏖️🌊', 'Hay una bonita playa cerca de aquí. 🏖️🌊'],
    ['Do you have a $10 bill? 💵💰', '¿Tienes un billete de $10? 💵💰'],
    ['It wasn’t your fault. It was an accident. ⚠️🤷‍♂️', 'No fue tu culpa. Fue un accidente. ⚠️🤷‍♂️'],
    ['There are no batteries in the radio. 🔋📻', 'No hay pilas en la radio. 🔋📻'],
    ['We don’t have enough cups. 🥤❌', 'No tenemos suficientes tazas. 🥤❌'],
    ['Kate was listening to music. 🎧👂', 'Kate estaba escuchando música. 🎧👂'],
    ['There’s sand in my shoes. 🏖️👞', 'Hay arena en mis zapatos. 🏖️👞'],
    ['Do you have any money? 💰❓', '¿Tienes dinero? 💰❓'],
    ['It wasn’t your fault. It was bad luck. 🍀🤷‍♂️', 'No fue tu culpa. Fue mala suerte. 🍀🤷‍♂️'],
    ['There is no electricity in this house. 💡🏠', 'No hay electricidad en esta casa. 💡🏠'],
    ['We don’t have enough water. 💧❌', 'No tenemos suficiente agua. 💧❌'],
    ['I want a banana. 🍌😊', 'Quiero un plátano. 🍌😊'],
    ['There’s been an accident. ⚠️😞', 'Ha habido un accidente. ⚠️😞'],
    ['Accidents can be prevented. ⚠️🛑', 'Los accidentes pueden prevenirse. ⚠️🛑'],
    ['There’s blood on your shirt. 💉👕', 'Hay sangre en tu camisa. 💉👕'],
    ['Can you hear music? 🎶👂', '¿Puedes oír música? 🎶👂'],
    ['We sang some songs. 🎤🎵', 'Cantamos algunas canciones. 🎤🎵'],
    ['Did you buy any apples? 🍏🛒', '¿Compraste algunas manzanas? 🍏🛒'],
    ['We didn’t take many pictures. 📸❌', 'No tomamos muchas fotos. 📸❌'],
    ['I have a few things to do. 📝🤔', 'Tengo algunas cosas que hacer. 📝🤔'],
    ['We listened to some music. 🎵👂', 'Escuchamos algo de música. 🎵👂'],
    ['Did you buy any apple juice? 🍎🥤', '¿Compraste jugo de manzana? 🍎🥤'],
    ['We didn’t do much shopping. 🛍️❌', 'No hicimos muchas compras. 🛍️❌'],
    ['I have little work to do. 👷‍♂️📉', 'Tengo poco trabajo que hacer. 👷‍♂️📉'],
  ];
  const countableNounsWithSome = [
    ['Goodbye! have a nice evening. 👋🌆', '¡Adiós! que tengas una buena tarde. 👋🌆'],
    ['Do you need an umbrella? ☂️🌧️', '¿Necesitas un paraguas? ☂️🌧️'],
    ['She never wears a hat. 🎩🚫', 'Ella nunca usa sombrero. 🎩🚫'],
    ['Be careful of the dog. 🐕⚠️', 'Ten cuidado con el perro. 🐕⚠️'],
    ['What a beautiful day! ☀️😍', '¡Qué hermoso día! ☀️😍'],
    ['I’ve got a headache. 💆‍♂️😩', 'Tengo dolor de cabeza. 💆‍♂️😩'],
    ['That’s a nice table. 🪑👌', 'Esa es una bonita mesa. 🪑👌'],
    ['Those are nice chairs. 🪑👍', 'Esas son sillas bonitas. 🪑👍'],
    ['A dog is an animal. 🐶🦴', 'Un perro es un animal. 🐶🦴'],
    ['Dogs are animals. 🐕🐾', 'Los perros son animales. 🐕🐾'],
    ['I’m an optimist. 😊🌈', 'Soy optimista. 😊🌈'],
    ['We’re optimists. 😄🌟', 'Somos optimistas. 😄🌟'],
    ["Tim's father is a doctor. 👨‍⚕️💼", 'El padre de Tim es médico. 👨‍⚕️💼'],
    ['Most of my friends are students. 🎓👫', 'La mayoría de mis amigos son estudiantes. 🎓👫'],
    ['Are you a good driver? 🚗🤔', '¿Eres un buen conductor? 🚗🤔'],
    ['Are they good students? 📚👍', '¿Son buenos estudiantes? 📚👍'],
    ['Jill is a really nice person. 👩‍🦰😊', 'Jill es una persona realmente agradable. 👩‍🦰😊'],
    ['Jill’s parents are really nice people. 👨‍👩‍👧‍👦🙂', 'Los padres de Jill son personas realmente agradables. 👨‍👩‍👧‍👦🙂'],
    ['What a pretty dress! 👗🤩', '¡Qué bonito vestido! 👗🤩'],
    ['What awful shoes! 👞😖', '¡Qué zapatos horribles! 👞😖'],
    ['Jack has a long nose. 👃📏', 'Jack tiene una nariz larga. 👃📏'],
    ['Jack has blue eyes. 👀💙', 'Jack tiene ojos azules. 👀💙'],
    ['Sandra is a nurse. 👩‍⚕️💉', 'Sandra es enfermera. 👩‍⚕️💉'],
    ['Would you like to be an English teacher? 📚🍎', '¿Te gustaría ser profesor de inglés? 📚🍎'],
    ['I’ve seen some good movies recently. 🍿🎬', 'He visto algunas buenas películas recientemente. 🍿🎬'],
    ['Some friends of mine are coming to stay this weekend. 🏠👫', 'Algunos amigos míos vienen a quedarse este fin de semana. 🏠👫'],
    ['I need some new sunglasses. 🕶️😎', 'Necesito unos nuevos lentes de sol. 🕶️😎'],
    ['I love bananas. 🍌😍', 'Me encantan los plátanos. 🍌😍'],
    ['My aunt is a writer. She writes books. 📚✍️', 'Mi tía es escritora. Ella escribe libros. 📚✍️'],
    ['There are some eggs in the refrigerator if you’re hungry. 🥚🍳', 'Hay unos huevos en el refrigerador si tienes hambre. 🥚🍳'],
    ['Some children learn very quickly. 👦📚', 'Algunos niños aprenden muy rápido. 👦📚'],
    ['Tomorrow there will be rain in some places, but most of the country will be dry. 🌧️🌎', 'Mañana habrá lluvia en algunos lugares, pero la mayor parte del país estará seca. 🌧️🌎'],
  ];  
  const aAnThe = [
    ['I had a sandwich and an apple for lunch. The sandwich wasn’t very good, but the apple was delicious. 🥪🍏', 'Almorcé un sándwich y una manzana. El sándwich no estaba muy bueno, pero la manzana estaba deliciosa. 🥪🍏'],
    ['A man and a woman were sitting across from me. The man was American, but I think the woman was British. 👨👩', 'Un hombre y una mujer estaban sentados frente a mí. El hombre era estadounidense, pero creo que la mujer era británica. 👨👩'],
    ['When we were on vacation, we stayed at a hotel. Sometimes we ate at the hotel, and sometimes we went to a restaurant. 🏨🍽️', 'Cuando estábamos de vacaciones, nos quedamos en un hotel. A veces comíamos en el hotel, y a veces íbamos a un restaurante. 🏨🍽️'],
    ['Tim sat down on a chair. 🪑', 'Tim se sentó en una silla. 🪑'],
    ['Tim sat down on the chair nearest the door. 🚪🪑', 'Tim se sentó en la silla más cercana a la puerta. 🚪🪑'],
    ['Paula is looking for a job. 👀💼', 'Paula está buscando trabajo. 👀💼'],
    ['Did Paula get the job she applied for? 🤔💼', '¿Paula consiguió el trabajo para el que aplicó? 🤔💼'],
    ['Do you have a car? 🚗', '¿Tienes un coche? 🚗'],
    ['I washed the car yesterday. 🧼🚗', 'Lavé el coche ayer. 🧼🚗'],
    ['Can you turn off the light, please? 💡', '¿Puedes apagar la luz, por favor? 💡'],
    ['I took a taxi to the station. 🚖🚉', 'Tomé un taxi a la estación. 🚖🚉'],
    ['I’d like to speak to the manager, please. 👩‍💼🗣️', 'Me gustaría hablar con el gerente, por favor. 👩‍💼🗣️'],
    ['I have to go to the bank and then I’m going to the post office. 🏦📬', 'Tengo que ir al banco y luego voy a la oficina de correos. 🏦📬'],
    ['Carol isn’t very well. She went to the doctor. 🤒👩‍⚕️', 'Carol no está muy bien. Fue al médico. 🤒👩‍⚕️'],
    ['Two people were taken to the hospital after the accident. 🏥🚑', 'Dos personas fueron llevadas al hospital después del accidente. 🏥🚑'],
    ['I have to go to the bank today. 🏦', 'Tengo que ir al banco hoy. 🏦'],
    ['Is there a bank near here? 🏦📍', '¿Hay un banco cerca de aquí? 🏦📍'],
    ['I don’t like going to the dentist. 😬🦷', 'No me gusta ir al dentista. 😬🦷'],
    ['My sister is a dentist. 👩‍⚕️🦷', 'Mi hermana es dentista. 👩‍⚕️🦷'],
    ['How often do you go to the movies? –about once a month. 🎬📅', '¿Con qué frecuencia vas al cine? - Aproximadamente una vez al mes. 🎬📅'],
    ['How much are those potatoes? –A dollar a pound. 🥔💲', '¿Cuánto cuestan esas papas? - Un dólar la libra. 🥔💲'],
    ['Helen works eight hours a day, six days a week. 👩‍💼⏰', 'Helen trabaja ocho horas al día, seis días a la semana. 👩‍💼⏰'],
  ];

  const the = [
    ['What is the longest river in the world? 🌊🌍', '¿Cuál es el río más largo del mundo? 🌊🌍'],
    ['The Earth goes around the sun, and the moon goes around the Earth. 🌎🌞🌛', 'La Tierra gira alrededor del sol y la luna gira alrededor de la Tierra. 🌎🌞🌛'],
    ['Have you ever crossed the equator? 🌐', '¿Alguna vez has cruzado el ecuador? 🌐'],
    ['I’m going away at the end of this month. ✈️📅', 'Me voy a ir a fin de mes. ✈️📅'],
    ['Paris is the capital of France. 🇫🇷🗼', 'París es la capital de Francia. 🇫🇷🗼'],
    ['The sun is a star. ☀️⭐', 'El sol es una estrella. ☀️⭐'],
    ['The hotel we stayed at was a very nice hotel. 🏨😊', 'El hotel en el que nos alojamos era un hotel muy bonito. 🏨😊'],
    ['We looked up at all the stairs in the sky. 🌌👀', 'Miramos todas las estrellas en el cielo. 🌌👀'],
    ['Would you like to live in the country? 🏞️🏠', '¿Te gustaría vivir en el campo? 🏞️🏠'],
    ['We must do more to protect the environment. 🌳🌱', 'Debemos hacer más para proteger el medio ambiente. 🌳🌱'],
    ['There are millions of stars in space. ✨🌌', 'Hay millones de estrellas en el espacio. ✨🌌'],
    ['I tried to park my cay, but the space was too small. 🚗🅿️', 'Intenté estacionar mi auto, pero el espacio era demasiado pequeño. 🚗🅿️'],
    ['Your sweater is the same color as mine. 👚🎨', 'Tu suéter es del mismo color que el mío. 👚🎨'],
    ['Are these keys the same? No, they’re different. 🔑❌', '¿Estas llaves son iguales? No, son diferentes. 🔑❌'],
    ['I go to the movies a lot, but I haven’t been to the theater in ages. 🎬🎭', 'Voy mucho al cine, pero no he ido al teatro en mucho tiempo. 🎬🎭'],
    ['I listen to the radio a lot. 📻🎶', 'Escucho la radio mucho. 📻🎶'],
    ['I watch television a lot. 📺👀', 'Miro la televisión mucho. 📺👀'],
    ['We heard the news on the radio. 📰📻', 'Escuchamos las noticias en la radio. 📰📻'],
    ['We watched the news on TV. 📰📺', 'Vimos las noticias en la televisión. 📰📺'],
    ['Can you turn off the television, please? 📺❌', '¿Puedes apagar la televisión, por favor? 📺❌'],
    ['What did you have for breakfast? 🍳🥞', '¿Qué desayunaste? 🍳🥞'],
    ['We had lunch in a very nice restaurant. 🍽️😋', 'Almorzamos en un restaurante muy agradable. 🍽️😋'],
    ['What time is dinner? 🍽️🕔', '¿A qué hora es la cena? 🍽️🕔'],
    ['We had a very nice lunch. 🍽️😊', 'Tuvimos un almuerzo muy agradable. 🍽️😊'],
    ['Our plane leaves from Gate 10. ✈️🛫', 'Nuestro avión sale de la Puerta 10. ✈️🛫'],
    ['Do you have these shoes in size 9? 👞👟', '¿Tienes estos zapatos en talla 9? 👞👟'],
  ];
  const the_2 = [
    ['Claudia is 10 years old and every day she goes to school. 🏫👧', 'Claudia tiene 10 años y todos los días va a la escuela. 🏫👧'],
    ['She’s at school now. 🕒📚', 'Ella está en la escuela ahora. 🕒📚'],
    ['School begins at 8:30 and ends at 3:00. 🕣📝', 'La escuela comienza a las 8:30 y termina a las 3:00. 🕣📝'],
    ['Today Claudia’s mother wants to speak to her daughter’s teacher. So she has gone to the school to see her. She’s at the school now. 👩‍👧‍🏫📝', 'Hoy la madre de Claudia quiere hablar con la maestra de su hija. Así que ha ido a la escuela a verla. Ella está en la escuela ahora. 👩‍👧‍🏫📝'],
    ['Ken’s brother is in prison for robbery. 🚔👮‍♂️', 'El hermano de Ken está en la cárcel por robo. 🚔👮‍♂️'],
    ['When I finish high school, I want to go to college. 🎓📚', 'Cuando termine la escuela secundaria, quiero ir a la universidad. 🎓📚'],
    ['Mrs. Kelly goes to church every Sunday. ⛪👵', 'La Sra. Kelly va a la iglesia todos los domingos. ⛪👵'],
    ['I was in class for five hours today. 🕒📖', 'Estuve en clase durante cinco horas hoy. 🕒📖'],
    ['Ken went to the prison to visit his brother. 🚗🔒', 'Ken fue a la prisión a visitar a su hermano. 🚗🔒'],
    ['Dan is a student at the college where I used to work. 🎓💼', 'Dan es estudiante en el colegio donde solía trabajar. 🎓💼'],
    ['Some workmen went to the church to repair the roof. 🏗️⛪', 'Algunos trabajadores fueron a la iglesia a reparar el techo. 🏗️⛪'],
    ['Who is the youngest student in the class? 🧑‍🎓👶', '¿Quién es el estudiante más joven de la clase? 🧑‍🎓👶'],
    ['It’s time to go to bed now. ⏰😴', 'Es hora de ir a la cama ahora. ⏰😴'],
    ['Do you ever have breakfast in bed? 🍳🛏️', '¿Alguna vez desayunas en la cama? 🍳🛏️'],
    ['I sat down on the bed. 🛏️🧍', 'Me senté en la cama. 🛏️🧍'],
    ["Ann didn’t go to work yesterday. 👩‍💼🚫", 'Ann no fue al trabajo ayer. 👩‍💼🚫'],
    ['What time do you usually finish work? ⏰🏢', '¿A qué hora sueles terminar el trabajo? ⏰🏢'],
    ["It’s late. Let’s go home. 🌙🏠", 'Es tarde. Vamos a casa. 🌙🏠'],
    ['Will you be at home tomorrow afternoon? 🏡🌅', '¿Estarás en casa mañana por la tarde? 🏡🌅'],
  ];

  export default { countable, countableNounsWithSome, aAnThe, the, the_2 }

//   falta hasta la 79