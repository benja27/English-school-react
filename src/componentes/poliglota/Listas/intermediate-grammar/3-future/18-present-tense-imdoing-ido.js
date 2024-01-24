// 18 Present Tenses (I amd doing / I do) with a Future Meaning

const chapterSolution2 = [
    [
      "Ben: Can you come over on Monday night? You: Sorry, but I’m playing volleyball. Ben: What about Tuesday night then? You: No, not Tuesday. I'll be working late until 9 pm. Ben: And Wednesday night? You: I have plans to go to the theater. Ben: Well, are you free on Thursday? You: I’m afraid not. I have a meeting with Julia at 8 PM.",
      "Ben: ¿Puedes venir el lunes por la noche? Tú: Lo siento, pero estoy jugando voleibol. Ben: ¿Qué pasa entonces con el martes por la noche? Tú: No, el martes no. Estaré trabajando hasta las 9 pm. Ben: ¿Y el miércoles por la noche? Tú: Tengo planes de ir al teatro. Ben: Bueno, ¿estás libre el jueves? Tú: Me temo que no. Tengo una reunión con Julia a las 8 de la noche. 🗓️⚽🎭",
    ],
  ];
  
  const presentTenseImDoing = [
    ...chapterSolution2,
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
  ];
  
  export default presentTenseImDoing;
  