const historia = {
    inicio: {
        texto: "¡Bienvenido al Reino de Arkania, donde la magia y la aventura se entrelazan en un tapiz de misterio y poder! Eres un joven aventurero llamado Tristan, cuya misión es encontrar el legendario Orbe de la Luz, una reliquia que posee el poder de iluminar incluso las sombras más oscuras del reino. Tu viaje comienza en la tranquila aldea de Durnholm.",
        opciones: [
            {
                texto: "Iniciar tu búsqueda en la antigua biblioteca de la ciudad.",
                siguienteEscena: "biblioteca"
            },
            {
                texto: "Consultar a un sabio anciano en la plaza del pueblo.",
                siguienteEscena: "anciano"
            }
        ]
    },
    biblioteca: {
        texto: "Te adentras en la antigua biblioteca de la ciudad en busca de pistas sobre el paradero del Orbe de la Luz. Mientras exploras los polvorientos estantes, encuentras un pergamino antiguo que menciona una cripta oculta en el Bosque Encantado como posible ubicación del orbe.",
        opciones: [
            {
                texto: "Aventurarte en el Bosque Encantado de inmediato.",
                siguienteEscena: "bosqueEncantado"
            },
            {
                texto: "Buscar más información antes de adentrarte en el bosque.",
                siguienteEscena: "buscarInformacion"
            }
        ]
    },
    anciano: {
        texto:"Te acercas al sabio anciano que se sienta bajo un roble centenario en la plaza del pueblo y le pides orientación sobre el Orbe de la Luz. Él te indica que el orbe podría estar oculto en las ruinas del Castillo de las Sombras, una fortaleza maldita en las afueras del reino.",
        opciones:[
            {
                texto: "Te diriges al Castillo de las Sombras.",
                siguienteEscena: "castilloDeLasSombras"
            },
            {
                texto: "Optas por buscar aliados antes de enfrentarte al peligro.",
                siguienteEscena: "bosqueEncantado"
            }
        ],
    },
    bosqueEncantado:{
        texto:"Te adentras en el Bosque Encantado, un lugar lleno de magia y peligros. Después de horas de búsqueda, encuentras la entrada a la cripta mencionada en el pergamino. Al abrir la puerta antigua, una luz misteriosa brilla desde el interior, prometiendo grandes secretos y desafíos.",
        opciones:[
            {
                texto: "Decides entrar en la cripta de inmediato.",
                siguienteEscena: "dentroDeLaCripta"
            },
            {
                texto: "Investigar más a fondo los alrededores antes de entrar.",
                siguienteEscena: "investigarAlrededores"
            }
        ]
    },
    buscarInformacion:{
        texto:"Buscas más información entre los ancianos de la aldea y descubres que hay un antiguo erudito en las Montañas del Norte que podría tener pistas sobre el Orbe de la Luz. Te preparas para viajar hacia las montañas, pero sabes que el camino estará lleno de peligros.",
        opciones:[
            {
                texto: "Viajas solo hacia las Montañas del Norte.",
                siguienteEscena: "viajeSolitario"
            },
            {
                texto: "Buscas compañeros de viaje en la aldea antes de partir.",
                siguienteEscena: "companerosDeViaje"
            }
        ]
    },
    castilloDeLasSombras:{
        texto:"Decides enfrentarte directamente al peligro y te diriges al Castillo de las Sombras. Al llegar, te encuentras con criaturas oscuras que guardan la entrada. ¿Cómo planeas superar este desafío?",
        opciones:[
            {
                texto:"Te enfrentas a las criaturas con tu espada y tus habilidades magicas",
                siguienteEscena:"batallaEnElCastillo"
            },
            {
                texto:"Te infiltras sigilosamente en el castillo",
                siguienteEscena:"infiltrarseEnElCastillo"
            }
        ]
    },
    busquedaDeAliados:{
        texto:"Decides buscar aliados en la aldea antes de enfrentarte a los peligros del Castillo de las Sombras. Convences a un hábil arquero y a un poderoso mago para que se unan a tu causa. Juntos, parten hacia el castillo. ¡Felicidades! Ahora tienes aliados valiosos en tu búsqueda del Orbe de la Luz.",
        opciones:[
            {
                texto: "Te diriges al Castillo de las Sombras junto a tus nuevos aliados.",
                siguienteEscena: "castilloDeLasSombras"
            }
        ]
    },
    dentroDeLaCripta:{
        texto:"Te aventuras valientemente dentro de la cripta y te encuentras con trampas y guardianes mágicos. Después de superar numerosos desafíos, finalmente llegas al corazón de la cripta, donde el Orbe de la Luz brilla con una intensa luminosidad.",
        opciones:[
            {
                texto:"Tomas el Orbe y sles de la Cripta",
                siguienteEscena:"elOrbeDeLaLuz"
            },
            {
                texto:"Decides Investigar más sobre la historia del orbe antes de llevártelo",
                siguienteEscena:"investigarOrbe"
            }
        ]
    },
    investigarAlrededores:{
        texto:"Exploras los alrededores de la cripta y encuentras un antiguo altar dedicado a los dioses. Al hacer una ofrenda, revelas un pasadizo secreto que conduce a una cámara llena de tesoros y conocimientos antiguos.",
        opciones:[
            {
                texto:"Exploras la cámara en busca de artefactos útiles",
                siguienteEscena:"camaraDeLosTesoros"
            },
            {
                texto:"Sigues adelante y entras en la cripta",
                siguienteEscena:"dentroDeLaCripta"
            }
        ]
    },
    viajeSolitario: {
        texto:"Emprendes el viaje hacia las Montañas del Norte solo, enfrentándote a peligros y desafíos en el camino. Finalmente, llegas al refugio del erudito y buscas su sabiduría sobre el Orbe de la Luz.",
        opciones:[
            {
                texto:"Investigas el Orbe",
                siguienteEscena:"investigarOrbe"
            }
        ]
    },
    companerosDeViaje:{
        texto:"Reclutas a algunos valientes de la aldea para que se unan a ti en tu búsqueda. Juntos, enfrentan los peligros del viaje hacia las Montañas del Norte y llegan al refugio del erudito. Ahora, con aliados a tu lado, estás mejor preparado para enfrentar los desafíos que te esperan.",
        opciones:[
            {
                texto:"Te diriges, junto a tus nuevos compañeros, hacia el Castillo de las Sombras",
                siguienteEscena:"castilloDeLasSombras"
            }
        ]
    },
    batallaEnElCastillo: {
        texto:"Te enfrentas valientemente a las criaturas que guardan la entrada del Castillo de las Sombras. Con tu espada desenvainada y tus hechizos lanzados, derrotas a tus enemigos y avanzas hacia el interior del castillo, preparado para lo que sea que te espere.",
        opciones:[
            {
                texto:"Sigues adelante sin vacilar",
                siguienteEscena:"enfrentandoLaOscuridad"
            },
            {
                texto:"Decides buscar una ruta alternativa para evitar más peligros",
                siguienteEscena:"rutaAlternativa"
            }
        ]
    },
    infiltracionSilenciosa:{
        texto:"Con sigilo y astucia, te infiltras en el Castillo de las Sombras, evitando las patrullas enemigas y las trampas mortales. Pronto llegas a la sala donde se cree que se guarda el Orbe de la Luz, pero está custodiada por un poderoso hechicero.",
        opciones:[
            {
                texto:"Decides enfrentarte al hechicero y reclamar el orbe",
                siguienteEscena:"dueloMagico"
            },
            {
                texto:"Buscas una manera de neutralizar al hechicero sin entrar en combate",
                siguienteEscena:"astucioaYEngano"
            }
        ]
    },
    elOrbeDeLaLuz: {
        texto:"Tomando el Orbe de la Luz en tus manos, sientes su poder radiante llenarte de esperanza y determinación. Sales de la cripta con tu preciado tesoro y te diriges de regreso a la aldea de Durnholm, listo para enfrentar los desafíos que aguardan. ¡Felicidades! Has encontrado el Orbe de la Luz y completado tu misión."
    },
    investigarElOrbe: {
        texto:"Decides investigar más sobre la historia del Orbe de la Luz antes de llevártelo. Descubres que el orbe tiene la capacidad de purificar la oscuridad y restaurar la paz en el reino, pero también atrae la atención de aquellos que desean su poder para fines oscuros.",
        opciones:[
            {
                texto:"Decides llevar el orbe contigo",
                siguienteEscena:"elOrbeDeLaLuz"
            },
            {
                texto:"Prefieres dejar el orbe donde está y continuar investigando",
                siguienteEscena:"laBusquedaContinua"
            }
        ]
    },
    laCamaraDeLosTesoros:{
        texto:"Exploras la cámara en busca de artefactos útiles y encuentras una espada ancestral que brilla con una luz divina. Te equipas con la espada y sales de la cámara, sintiéndote más poderoso y preparado para lo que sea que te depare el futuro. ¡Ahora estás mejor armado para enfrentar los desafíos que se avecinan!",
        opciones:[
            {
                texto:"Vuelves a la cripta y te adentras en ella",
                siguienteEscena:"dentroDeLaCripta"
            },
        ]
    },
    enfrentandoLaOscuridad:{
        texto:"Avanzas valientemente por los pasillos del Castillo de las Sombras, enfrentándote a criaturas oscuras y trampas mortales. Finalmente, llegas a la sala donde se guarda el Orbe de la Luz, pero descubres que está custodiado por un dragón antiguo.",
        opciones:[
            {
                texto:"Te enfrentas al Dragón y reclamas el Orbe",
                siguienteEscena:"batallaConElDragon"
            },
            {
                texto:"Buscas una manera de distraer al Dragón y tomar el Orbe sin luchar",
                siguienteEscena:"distraerAlDragon"
            }
        ]
    },
    rutaAlternativa:{
        texto:"Encuentras una ruta alternativa a través de pasadizos secretos y pasillos ocultos, evitando la mayoría de los peligros del castillo. Sin embargo, te encuentras con un guardián mágico que bloquea tu camino hacia el Orbe de la Luz.",
        opciones:[
            {
                texto:"Decides enfrentarte al Guardián Magico",
                siguienteEscena:"batallaConElGuardianMagico"
            },
            {
                texto:"Buscas una manera de engañar al Guardián MAgico y pasar desapercibido",
                siguienteEscena:"enganarAlGuardianMagico"
            }
        ]
    },
    dueloMagico:{
        texto:"Te enfrentas al poderoso hechicero con toda tu habilidad y determinación. Después de un arduo duelo mágico, logras derrotarlo y reclamar el Orbe de la Luz como tuyo. Con el orbe en tu poder, sales victorioso del Castillo de las Sombras y regresas triunfante a la aldea. ¡Felicidades! Has superado un desafío formidable y has asegurado el poderoso artefacto."
    },
    astuciaYEngano:{
        texto:"Usando tu ingenio y tu conocimiento de la magia, logras neutralizar al hechicero sin entrar en combate directo. Con el hechicero derrotado, tomas el Orbe de la Luz y te retiras del Castillo de las Sombras, regresando a la aldea como un héroe astuto y valiente. ¡Has demostrado que la astucia es tan poderosa como la fuerza bruta!"
    },
    laBusquedaContinua:{
        texto:"Decides continuar investigando la historia del Orbe de la Luz antes de llevártelo contigo. Descubres pistas sobre su verdadero propósito y el destino de aquellos que lo poseyeron en el pasado. Con esta nueva información en mente, te preparas para tomar una decisión sobre cómo proceder.",
        opciones:[
            {
                texto:"Decides llevar el orbe contigo ahora",
                siguienteEscena:"elOrbeDeLaLuz"
            },
            {
                texto:"Prefieres buscar más pistas antes e tomar una decisión final",
                siguienteEscena:"buscaMasPistas"
            }
        ]
    },
    buscaMasPistas:{
        texto:"Después de una exhaustiva búsqueda, encuentras un antiguo pergamino oculto en la biblioteca de la academia de magia. El pergamino revela que el Orbe de la Luz es la clave para deshacer una maldición que ha plagado el reino durante siglos. Con esta nueva revelación, decides tomar el orbe y partir hacia la misteriosa Ciudad Olvidada, donde se dice que la maldición se originó.",
        opciones: [
            {
                texto: "Dirigirte directamente a la Ciudad Olvidada para deshacer la maldición.",
                siguienteEscena: "ciudadOlvidada"
            },
            // {
            //     texto: "Buscar aliados poderosos antes de enfrentarte a la maldición.",
            //     siguienteEscena: "buscarAliados"
            // },
            {
                texto: "Investigar más sobre la historia de la maldición antes de tomar acción.",
                siguienteEscena: "investigarMaldicion"
            }
        ]
    },
    batallaConElDragon:{
        texto:"Después de un épico enfrentamiento, logras derrotar al dragón y reclamar el Orbe de la Luz como tuyo. Con el orbe en tu poder, sales victorioso del Castillo de las Sombras y regresas triunfante a la aldea, donde eres recibido como un héroe. ¡Felicidades! Has superado un desafío formidable y has asegurado el poderoso artefacto."
    },
    distraerAlDragon:{
        texto:"Encuentras una manera ingeniosa de distraer al dragón y tomar el Orbe de la Luz sin luchar. Con el orbe en tu poder, escapas del Castillo de las Sombras y regresas a la aldea, donde eres aclamado como un héroe astuto y valiente. ¡Has demostrado que la astucia es tan valiosa como la fuerza!"
    },
    batallaConElGuardianMagico:{
        texto:"Después de un arduo enfrentamiento, logras derrotar al guardián mágico y tomar el Orbe de la Luz como tuyo. Con el orbe en tu poder, sales victorioso del Castillo de las Sombras y regresas triunfante a la aldea, donde eres recibido como un héroe. ¡Felicidades! Has superado un desafío formidable y has asegurado el poderoso artefacto."
    },
    enganarAlGuardianMagico:{
        texto:"Usando tu ingenio y tu conocimiento de la magia, logras engañar al guardián mágico y tomar el Orbe de la Luz sin entrar en combate directo. Con el orbe en tu poder, sales del Castillo de las Sombras y regresas a la aldea, donde eres aclamado como un héroe astuto y valiente. ¡Has demostrado que la astucia es tan poderosa como la fuerza bruta!"
    }
};

export default historia;