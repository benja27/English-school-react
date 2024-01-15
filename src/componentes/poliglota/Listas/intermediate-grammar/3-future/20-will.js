// 20 Will 1

const will = [
    [
      "Oh, dejé la puerta abierta. Voy a ir a cerrarla.",
      "Oh, I left the door open. I’ll go and shut it."
    ],
    [
      "¿Qué te gustaría beber? – Tomaré un poco de jugo de naranja, por favor.",
      "What would you like to drink? – I’ll have some orange juice, please."
    ],
    [
      "¿Llamaste a Julie? – Oh no, me olvidé. La llamaré ahora.",
      "Did you call Julie? – Oh no, I forgot. I’ll call her now."
    ],
    [
      "Tengo un poco de hambre. Creo que comeré algo.",
      "I’m a little hungry. I think I’ll have something to eat."
    ],
    [
      "No creo que salga esta noche. Estoy demasiado cansado.",
      "I don’t think I’ll go out tonight. I’m too tired."
    ],
    [
      "Veo que estás ocupado. Así que no me quedaré mucho tiempo.",
      "I can see you’re busy. So I won’t stay long."
    ],
    [
      "Me voy de vacaciones el próximo sábado.",
      "I’m going on vacation next Saturday."
    ],
    [
      "¿Trabajas mañana?",
      "Are you working tomorrow?"
    ],
    [
      "Esa bolsa parece pesada. Te ayudaré con ella.",
      "That bag looks heavy. I’ll help you with it."
    ],
    [
      "¿Puedes darle este libro a Tim? – Claro, se lo daré cuando lo vea esta tarde.",
      "Can you give Tim this book? – Sure, I’ll give it to him when I see him this afternoon."
    ],
    [
      "Gracias por prestarme el dinero. Te lo devolveré el viernes.",
      "Thanks for lending me the money. I’ll pay you back on Friday."
    ],
    [
      "No le contaré a nadie lo que pasó. Lo prometo.",
      "I won’t tell anyone what happened. I promise."
    ],
    [
      "¿Puedes callarte, por favor? Estoy tratando de concentrarme.",
      "Will you please be quiet? I’m trying to concentrate."
    ],
    [
      "¿Puedes cerrar la puerta, por favor?",
      "Will you shut the door, please?"
    ],
    [
      "He tratado de darle consejos, pero ella no escuchará.",
      "I’ve tried to give her advice, but she won’t listen."
    ],
    [
      "El auto no arranca. (= El auto se 'niega' a arrancar).",
      "The car won’t start. (= The car 'refuses' to start.)"
    ],
    [
      "¿Debo abrir la ventana?",
      "Shall I open the window?"
    ],
    [
      "¿Dónde deberíamos almorzar? – Vamos a Marino's.",
      "Where shall we have lunch? – Let’s go to Marino’s."
    ],
    [
      "¿Debo abrir la ventana?",
      "Should I open the window?"
    ],
    [
      "¿Dónde deberíamos almorzar?",
      "Where should we have lunch?"
    ],
    [
      "Estoy demasiado cansado para caminar a casa. Creo que tomaré un taxi.",
      "I’m too tired to walk home. I think I’ll take a taxi."
    ],
    [
      "Hace un poco de frío en esta habitación. – Tienes razón. Encenderé la calefacción.",
      "It’s a little cold in this room. – You’re right. I’ll turn on the heat."
    ],
    [
      "No tenemos leche. – ¿No tenemos? Voy a comprar algo ahora.",
      "We don’t have any milk. – We don’t? I’ll go and get some now."
    ],
    [
      "¿Puedo lavar los platos por ti? – No, está bien. Lo haré más tarde.",
      "Can I wash the dishes for you? – No, that’s all right. I’ll do it later."
    ],
    [
      "No sé cómo usar esta computadora. No te preocupes, te mostraré.",
      "I don’t know how to use this computer. Don’t worry, I’ll show you."
    ],
    [
      "¿Quieres té o café? Tomaré café, por favor.",
      "Would you like tea or coffee? I’ll have coffee, please."
    ],
    [
      "¡Adiós! Que tengas un buen viaje. – Gracias. Te enviaré una postal.",
      "Thanks for letting me borrow your camera. – I’ll give it back to you on Monday, OK?"
    ],
    [
      "Hace un poco de frío. La ventana está abierta, y decides cerrarla. Dices: Creo que cerraré la ventana.",
      "It’s little cold. The window is open, and you decide to close it. You say: I think I’ll close the window."
    ],
    [
      "Estás cansado y es tarde. Decides irte a la cama. Dices: Creo que me iré a la cama.",
      "You’re tired, and it’s getting late. You decide to go to bed. You say: I think I’ll go to bed."
    ],
    [
      "Un amigo tuyo te ofrece un paseo en su auto, pero decides caminar. Dices: No creo que aceptaré el paseo.",
      "A friend of yours offers you a ride in his car, but you decide to walk. You say: I don’t think I’ll take the ride."
    ],
    [
      "Habías quedado para jugar al tenis hoy. Ahora decides que no quieres jugar. Dices: No creo que jugaré al tenis.",
      "You arranged to play tennis today. Now you decide that you don’t want to play. You say: I don’t think I’ll play tennis."
    ],
    [
      "Ibas a ir a nadar. Ahora decides que no quieres ir. Dices: No creo que iré a nadar.",
      "You were going to go swimming. Now you decide that you don’t want to go. You say: I don’t think I’ll go swimming."
    ],
    [
      "¿Llamaste a Julie? – Oh no, me olvidé. La llamaré ahora.",
      "Did you call Julie? – Oh no, I forgot. I’ll call her now."
    ],
    [
      "No puedo verte mañana. Estoy jugando al tenis.",
      "I can’t meet you tomorrow. I’m playing tennis."
    ],
    [
      "¿Te veré afuera del hotel en media hora, está bien? – Sí, está bien.",
      "I’ll meet you outside the hotel in half an hour, OK? – Yes, that's fine."
    ],
    [
      "Necesito dinero. – OK, te prestaré algo. ¿Cuánto necesitas?",
      "I need some money. – OK, I’ll lend you some. How much do you need?"
    ],
    [
      "Estoy organizando una fiesta el próximo sábado. Espero que puedas venir.",
      "I’m having a party next Saturday. I hope you can come."
    ],
    [
      "Recuerda comprar un periódico cuando salgas. – OK. No lo olvidaré.",
      "Remember to get a newspaper when you go out. – OK. I won’t forget."
    ],
    [
      "¿A qué hora saldrá tu avión mañana?",
      "What time will your plane leave tomorrow?"
    ],
    [
      "Le pregunté a Sue qué pasó, pero no me dirá. ",
      "I asked Sue what happened, but she won’t tell me."
    ],
    [
      "¿Harás algo mañana por la noche? – No, estoy libre. ¿Por qué?",
      "Will you do anything tomorrow night? – No, I’m free. Why?"
    ],
    [
      "No quiero salir solo. ¿Vendrás conmigo?",
      "I don’t want to go out alone. Will you come with me?"
    ],
    [
      "¿Dónde almorzaremos? – Vamos a ese nuevo restaurante en North Street.",
      "Where shall we have lunch? – Let’s go to that new restaurant on North Street."
    ],
    [
      "Pronto es el cumpleaños de Mark, y quiero comprarle un regalo. ¿Qué le puedo regalar? – No sé. Nunca sé qué regalar a la gente.",
      "It’s Mark’s birthday soon, and I want to get him a present. What shall I get him? – I don’t know. I never know what to give people."
    ],
    [
      "¿Quieres que guarde estas compras? – No, está bien. Lo haré más tarde.",
      "Do you want me to put these groceries away? – No, that’s OK. I’ll do it later."
    ],
    [
      "Salgamos esta noche. – Ok, ¿a dónde iremos?",
      "Let’s go out tonight. – Ok, where shall we go?"
    ],
    [
      "Lo que te he contado es un secreto. No quiero que nadie más lo sepa. – No te preocupes. No se lo diré a nadie.",
      "What I’ve told you is a secret. I don’t want anybody else to know. – Don’t worry. I won’t tell anybody."
    ],
    [
      "Sé que estás ocupado, pero ¿puedes terminar este informe esta tarde? – Bueno, lo intentaré, pero no puedo prometerlo.",
      "I know you’re busy, but can you finish this report this afternoon? – Well, I’ll try, but I can’t promise."
    ]
  ];
  
  