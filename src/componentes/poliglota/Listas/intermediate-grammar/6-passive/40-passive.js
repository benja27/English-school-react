// 42 Passive 1, 2 and 3

const passive = [
    ['This house is pretty old. It was built in 1935. 🏠', 'Esta casa es bastante antigua. Fue construida en 1935. 🏠'],
    ['Two hundred people are employed by the company. 👥', 'Doscientas personas están empleadas por la empresa. 👥'],
    ['A lot of money was stolen in the robbery. 💰', 'Se robó mucho dinero en el robo. 💰'],
    ['Is this room cleaned every day? 🧹', '¿Se limpia esta habitación todos los días? 🧹'],
    ['Thai was built by my grandfather. 🏗️', 'Esta tailandesa fue construida por mi abuelo. 🏗️'],
    ['Two hundred people are employed by the company. 👥', 'Doscientas personas están empleadas por la empresa. 👥'],
    ['This room is cleaned everyday. 🧼', 'Esta habitación se limpia todos los días. 🧼'],
    ['Many accidents are caused by careless driving. 🚗', 'Muchos accidentes son causados por una conducción descuidada. 🚗'],
    ['I’m not often invited to parties. 🎉', 'No me invitan a menudo a fiestas. 🎉'],
    ['How is this word pronounced? 🗣️', '¿Cómo se pronuncia esta palabra? 🗣️'],
    ['We were woken up by a loud noise during the night. 🌙', 'Nos despertó un ruido fuerte durante la noche. 🌙'],
    ['Did you go to the party? –No, I wasn’t invited. 🎈', '¿Fuiste a la fiesta? –No, no fui invitado. 🎈'],
    ['This room will be cleaned later. 🧹', 'Esta habitación se limpiará más tarde. 🧹'],
    ['The situation is serious. Something must be done before it’s too late. ⚠️', 'La situación es seria. Algo debe hacerse antes de que sea demasiado tarde. ⚠️'],
    ['A mystery is something that can’t be explained. ❓', 'Un misterio es algo que no se puede explicar. ❓'],
    ['The music was very loud and could be heard from far away. 🔊', 'La música era muy fuerte y se podía escuchar desde lejos. 🔊'],
    ['A new supermarket is going to be built next year. 🏪', 'El próximo año se construirá un supermercado nuevo. 🏪'],
    ['Please go away. I want to be left alone. 🚶‍♂️', 'Por favor, vete. Quiero estar solo. 🚶‍♂️'],
    ['This room should have been cleaned. 🧹', 'Esta habitación debería haber sido limpiada. 🧹'],
    ['I haven’t received the letter yet. It might have been sent to the wrong address. 📬', 'Todavía no he recibido la carta. Puede que haya sido enviada a la dirección incorrecta. 📬'],
    ['If you had locked the car, it wouldn’t have been stolen. 🔐', 'Si hubieras cerrado con llave el coche, no lo habrían robado. 🔐'],
    ['There were some problems at first, but they seem to have been solved. ✅', 'Hubo algunos problemas al principio, pero parece que se han solucionado. ✅'],
    ['The room looks nice. It has been cleaned. 👍', 'La habitación se ve bien. Ha sido limpiada. 👍'],
    ['Have you heard? The concert has been canceled. 🎵', '¿Has escuchado? El concierto ha sido cancelado. 🎵'],
    ['Have you ever been bitten by a dog? 🐕', '¿Alguna vez te ha mordido un perro? 🐕'],
    ['Are you going to the party? –No, I haven’t been invited. 🎉', '¿Vas a la fiesta? –No, no me han invitado. 🎉'],
    ['The room looked nice. It had been cleaned. 👌', 'La habitación se veía bien. Había sido limpiada. 👌'],
    ['The vegetables didn’t taste very good. They had been cooked too long. 🥦', 'Las verduras no sabían muy bien. Se habían cocinado demasiado tiempo. 🥦'],
    ['The car was three years old but hadn’t been used very much. 🚗', 'El coche tenía tres años pero no había sido usado mucho. 🚗'],
    ['This room is being cleaned right now. 🧼', 'Esta habitación se está limpiando en este momento. 🧼'],
    ['There’s somebody walking behind us. I think we are being followed. 👀', 'Hay alguien caminando detrás de nosotros. Creo que nos están siguiendo. 👀'],
    ['Can I help you? –No, thank you. I’m being helped. 🤝', '¿Puedo ayudarte? –No, gracias. Ya estoy siendo ayudado. 🤝'],
    ['This room was being cleaned when I arrived. 🧹', 'Esta habitación se estaba limpiando cuando llegué. 🧹'],
    ['There was somebody walking behind us. We were being followed. 👣', 'Había alguien caminando detrás de nosotros. Nos estaban siguiendo. 👣'],
    ['The police were given the information. 🚓', 'La policía recibió la información. 🚓'],
    ['The information was given to the police. 📝', 'La información fue dada a la policía. 📝'],
    ['I was offered the job, but I refused it. 🤝', 'Me ofrecieron el trabajo, pero lo rechacé. 🤝'],
    ['You will be given plenty of time to decide. ⏳', 'Se te dará mucho tiempo para decidir. ⏳'],
    ['Have you been shown the new machine? 🔧', '¿Te han mostrado la nueva máquina? 🔧'],
    ['The men were paid $200 to do the work. 💰', 'A los hombres se les pagó $200 por hacer el trabajo. 💰'],
    ['I don’t like being told what to do. 🚫', 'No me gusta que me digan qué hacer. 🚫'],
    ['I remember being taken to the zoo when I was a child. 🦁', 'Recuerdo que me llevaron al zoológico cuando era niño. 🦁'],
    ['Steve hates being kept waiting. 😠', 'Steve odia que lo hagan esperar. 😠'],
    ['We managed to climb over the wall without being seen. 🧗‍♂️', 'Logramos trepar sobre la pared sin ser vistos. 🧗‍♂️'],
    ['I was born in Chicago. 🌆', 'Nací en Chicago. 🌆'],
    ['How many babies are born every day? 👶', '¿Cuántos bebés nacen todos los días? 👶'],
    ['There was a fight at the game, but nobody got hurt. 🥊', 'Hubo una pelea en el juego, pero nadie resultó herido. 🥊'],
    ["I don't often get invited to parties. 🎉", "No me invitan a menudo a fiestas. 🎉"],
    ["I'm surprised Ann didn't get offered the job. 😯", "Me sorprende que Ann no haya sido ofrecida el trabajo. 😯"],
    ['Jill is liked by everybody. ❤️', 'A todos les cae bien Jill. ❤️'],
    ['He was a mystery man. Very little was known about him. 🕵️‍♂️', 'Era un hombre misterioso. Se sabía muy poco sobre él. 🕵️‍♂️'],
    ['get married 💒', 'casarse 💒'],
    ['get divorced 💔', 'divorciarse 💔'],
    ['get dressed 👗', 'vestirse 👗'],
    ['get lost 🗺️', 'perderse 🗺️'],
    ['get changed 🔄', 'cambiarse 🔄'],
  ];
  
export default passive;