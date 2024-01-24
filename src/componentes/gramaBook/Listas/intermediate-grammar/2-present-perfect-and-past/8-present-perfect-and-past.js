// 8 Present Perfect and Past 1 ( I have done and I did)

const presentPerfectAndPast = [
    ["I’ve lost my keys. Have you seen them?", "He perdido mis llaves. ¿Las has visto?"],
    ["Is Sally here? – No, she’s gone out.", "¿Está Sally aquí? – No, ella ha salido."],
    ["The police have arrested two people in connection with the robbery.", "La policía ha arrestado a dos personas en conexión con el robo."],
    ["I lost my keys. Did you see them?", "Perdí mis llaves. ¿Las viste?"],
    ["Is Sally here? – No, she went out.", "¿Está Sally aquí? – No, ella salió."],
    ["The police arrested two people in connection with the robbery.", "La policía arrestó a dos personas en conexión con el robo."],
    ["Have you heard? Bill and Sarah have won the lottery!", "¿Has oído? ¡Bill y Sarah han ganado la lotería!"],
    ["The road is closed. There’s been (there has been) an accident.", "La carretera está cerrada. Ha habido un accidente."],
    ["The road is closed, There was an accident.", "La carretera está cerrada. Hubo un accidente."],
    ["Mozart was a composer. He wrote more than 600 pieces of music.", "Mozart fue un compositor. Escribió más de 600 piezas de música."],
    ["My mother grew up in Chile.", "Mi madre creció en Chile."],
    ["Shakespeare wrote many plays.", "Shakespeare escribió muchas obras."],
    ["My brother is a writer. He has written many books. (he still writes books)", "Mi hermano es escritor. Ha escrito muchos libros. (aún escribe libros)"],
    ["I’m sorry, but I’ve forgotten your name. (= I can’t remember it now)", "Lo siento, pero he olvidado tu nombre. (= No puedo recordarlo ahora)"],
    ["Sally isn’t here. She’s gone out. (= She is out now)", "Sally no está aquí. Se ha ido. (= Ella está fuera ahora)"],
    ["I can’t find my bag. Have you seen it? (= Do you know where it is now?)", "No puedo encontrar mi bolso. ¿Lo has visto? (= ¿Sabes dónde está ahora?)"],
    ["It has stopped raining, so you don’t need the umbrella.", "Ha dejado de llover, así que no necesitas el paraguas."],
    ["It stopped raining for a while, but now it’s raining again.", "Dejó de llover por un tiempo, pero ahora está lloviendo de nuevo."],
    ["Are you hungry? – No, I just had lunch (or I’ve just had lunch).", "¿Tienes hambre? – No, acabo de almorzar (o Ya he almorzado)."],
    ["Why are you so happy? – I just heard some good news(or I’ve just heard some good news).", "¿Por qué estás tan feliz? – Acabo de escuchar buenas noticias (o Ya he escuchado buenas noticias)."],
    ["Don’t forget to mail the letter – I already mailed it(or I’ve already mailed it).", "No olvides enviar la carta – Ya la envié (o Ya he enviado la carta)."],
    ["What time is Mark leaving? – He already left (or He’s already left).", "¿A qué hora se va Mark? – Ya se fue (o Ya ha salido)."],
    ["Did it stop raining yet?", "¿Dejó de llover ya?"],
    ["Has it stopped raining yet?", "¿Ha dejado de llover ya?"],
    ["I wrote the letter, but I didn’t mail it yet.", "Escribí la carta, pero aún no la he enviado."],
    ["I haven’t mailed it yet.", "No la he enviado todavía."],
    ["It has stopped raining, so you don’t need your umbrella.", "Ha dejado de llover, así que no necesitas tu paraguas."],
    ["The town is very different now. It has changed a lot.", "El pueblo es muy diferente ahora. Ha cambiado mucho."],
    ["I meant to call you last night, but I forgot.", "Tenía la intención de llamarte anoche, pero lo olvidé."],
    ["Mary went to Peru for a vacation, but she’s back home in Austin now.", "Mary fue a Perú de vacaciones, pero ahora está de vuelta en Austin."],
    ["Are you OK? – Yes. I had a headache, but I feel fine now.", "¿Estás bien? – Sí. Tenía dolor de cabeza, pero ahora me siento bien."],
    ["You look great! You have lost weight.", "¡Te ves genial! Has perdido peso."],
    ["a) My mother has grown up in Chile.", "a) Mi madre creció en Chile."],
    ["b) My mother grew up in Chile.", "b) Mi madre creció en Chile."],
    ["a) Did you see my purse?", "a) ¿Viste mi bolso?"],
    ["b) Have you seen my purse?", "b) ¿Has visto mi bolso?"],
    ["a) I already paid the gas bill.", "a) Ya pagué la factura de gas."],
    ["b) I’ve already paid the gas bill.", "b) Ya he pagado la factura de gas."],
    ["a) The Chinese invented paper.", "a) Los chinos inventaron el papel."],
    ["b) Where were you born?", "b) ¿Dónde naciste?"],
    ["a) Ow! I cut my finger.", "a) ¡Ay! Me corté el dedo."],
    ["b) Ow! I’ve cut my finger.", "b) ¡Ay! Me corté el dedo."],
    ["a) I forgot Jerry’s address.", "a) Olvidé la dirección de Jerry."],
    ["b) I’ve forgotten Jerry’s address.", "b) He olvidado la dirección de Jerry."],
    ["a) Did you go to the store yet?", "a) ¿Fuiste a la tienda ya?"],
    ["b) Have you gone to the store yet?", "b) ¿Ya has ido a la tienda?"],
    ["b) Albert Einstein was the scientist who developed the theory of relativity.", "b) Albert Einstein fue el científico que desarrolló la teoría de la relatividad."],
    ["a) My father was raised by his aunt.", "a) Mi padre fue criado por su tía."],
    ["After lunch, you go to see a friend at her house. She says: “Would you like something to eat?” – No, thank you. I’ve just had lunch.", "Después del almuerzo, vas a ver a una amiga en su casa. Ella dice: ¿Quieres algo de comer? – No, gracias. Acabo de almorzar (o Ya he almorzado)."],
    ["Joe goes out. Five minutes later, the phone rings, and the caller says, “Can I speak to Joe?” – I’m sorry, he's just gone out.", "Joe sale. Cinco minutos después, suena el teléfono y el llamante dice: ¿Puedo hablar con Joe? – Lo siento, acaba de salir."],
    ["You are eating in a restaurant. The waiter thinks you have finished and starts to clear the table. You say: Wait a minute! I haven't finished yet.", "Estás comiendo en un restaurante. El camarero piensa que has terminado y comienza a limpiar la mesa. Dices: ¡Espera un minuto! Aún no he terminado."],
    ["You are going to a restaurant tonight. You call to reserve a table. Later, your friend says, “Should I call to reserve a table?” You say: No, I've already done it.", "Vas a un restaurante esta noche. Llamas para reservar una mesa. Más tarde, tu amigo pregunta: ¿Debería llamar para reservar una mesa? Dices: No, ya lo he hecho."],
    ["You know that a friend of yours is looking for a place to live. Perhaps she has been successful. Ask her. You say: Have you found a place yet?", "Sabes que una amiga tuya está buscando un lugar para vivir. Tal vez ha tenido éxito. Le preguntas. Dices: ¿Ya has encontrado un lugar?"],
    ["Linda went to the bank, but a few minutes ago she returned. Somebody asks, “Is Linda still at the bank?” You say: No, she's already come back.", "Linda fue al banco, pero hace unos minutos regresó. Alguien pregunta: ¿Linda todavía está en el banco? Dices: No, ella ya regresó."],
    ["Yesterday, Carol invited you to a party on Saturday. Now another friend is inviting you to the same party. You say: Thanks, but Carol has already invited me.", "Ayer, Carol te invitó a una fiesta el sábado. Ahora otro amigo te está invitando a la misma fiesta. Dices: Gracias, pero Carol ya me invitó."]
];


export default presentPerfectAndPast;