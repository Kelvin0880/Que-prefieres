
import { type Question, type Level } from '../types';

export const LEVELS: Level[] = ['Calentando Motores', 'Subiendo la Temperatura', 'Nivel Infierno'];

export const QUESTIONS: Record<Level, Question[]> = {
  'Calentando Motores': [
    { id: 1, optionA: 'Un masaje sensual de una hora con aceites aromáticos', optionB: 'Un baño de espuma juntos con velas y música' },
    { id: 2, optionA: 'Que te susurren al oído todo lo que te quieren hacer', optionB: 'Recibir una nota escrita a mano con sus fantasías más secretas' },
    { id: 3, optionA: 'Bailar lento y pegado en la sala de estar a medianoche', optionB: 'Cocinar juntos en ropa interior y darse de comer en la boca' },
    { id: 4, optionA: 'Un beso apasionado bajo la lluvia', optionB: 'Un beso lento y profundo que dure cinco minutos sin parar' },
    { id: 5, optionA: 'Pasar una noche entera solo abrazados, sintiendo sus cuerpos', optionB: 'Dormir desnudos juntos sin tocarse a propósito' },
    { id: 6, optionA: 'Vendarte los ojos y dejar que tu pareja te dé de probar diferentes sabores en la boca', optionB: 'Que tu pareja te vende los ojos y te toque con diferentes texturas' },
    { id: 7, optionA: 'Enviar mensajes provocadores durante todo el día', optionB: 'Dejar pequeñas notas sensuales por la casa para que las encuentre' },
    { id: 8, optionA: 'Una sesión de besos que recorra todo tu cuerpo', optionB: 'Que tu pareja te quite la ropa lentamente, pieza por pieza, solo con la boca' },
    { id: 9, optionA: 'Ver una película erótica juntos y comentar qué les gustaría probar', optionB: 'Leer en voz alta un libro erótico el uno al otro' },
    { id: 10, optionA: 'Hacer el amor en completa oscuridad, agudizando los otros sentidos', optionB: 'Hacer el amor frente a un espejo' },
    { id: 11, optionA: 'Una escapada de fin de semana a una cabaña aislada', optionB: 'Una noche en un hotel de lujo con servicio a la habitación' },
    { id: 12, optionA: 'Que tu pareja te domine suavemente durante el sexo', optionB: 'Dominar suavemente a tu pareja durante el sexo' },
    { id: 13, optionA: 'Un striptease lento y sensual hecho por tu pareja', optionB: 'Hacerle un striptease lento y sensual a tu pareja' },
    { id: 14, optionA: 'Experimentar con lencería o ropa interior que nunca han usado', optionB: 'Jugar a verdad o reto, pero solo con preguntas y retos sensuales' },
    { id: 15, optionA: 'Probar diferentes tipos de besos (francés, mordiscos suaves, esquimal)', optionB: 'Intentar mantener el contacto visual durante todo el acto sexual' },
    { id: 16, optionA: 'Que te aten las manos suavemente con una corbata de seda', optionB: 'Atar las manos de tu pareja suavemente con una corbata de seda' },
    { id: 17, optionA: 'Darse un baño de chocolate o crema batida el uno al otro', optionB: 'Jugar con cubos de hielo sobre el cuerpo del otro' },
    { id: 18, optionA: 'Hacer el amor en un lugar inusual de la casa (cocina, sofá, etc.)', optionB: 'Hacer el amor en silencio total, comunicándose solo con el cuerpo' },
    { id: 19, optionA: 'Un cumplido extremadamente detallado sobre tu cuerpo', optionB: 'Una descripción detallada de lo que te harían si estuvieran solos' },
    { id: 20, optionA: 'Recrear su primera cita, pero con un final mucho más apasionado', optionB: 'Recrear su primer beso, pero prolongándolo todo lo posible' }
  ],
  'Subiendo la Temperatura': [
    { id: 21, optionA: 'Hacerlo en un lugar semi-público donde exista el riesgo de que los vean', optionB: 'Experimentar con un juego de roles donde uno tiene todo el control' },
    { id: 22, optionA: 'Una noche entera dedicada únicamente a tu placer, sin que tengas que hacer nada a cambio', optionB: 'Una noche de exploración mutua donde prueben algo completamente nuevo para ambos' },
    { id: 23, optionA: 'Hablar sucio y explícito durante el sexo', optionB: 'Gemir tan fuerte como quieran sin inhibiciones' },
    { id: 24, optionA: 'Ser observados por su pareja mientras se masturban', optionB: 'Masturbar a su pareja hasta que llegue al clímax' },
    { id: 25, optionA: 'Hacerlo en el coche en un lugar apartado', optionB: 'Hacerlo en una playa desierta por la noche' },
    { id: 26, optionA: 'Introducir juguetes sexuales en su rutina', optionB: 'Usar una venda en los ojos y dejar que tu pareja te lleve al orgasmo sin que sepas cómo' },
    { id: 27, optionA: 'Confesar su fantasía sexual más recurrente', optionB: 'Describir la persona (famosa o no) con la que tendrían un trío' },
    { id: 28, optionA: 'Una sesión de sexo oral prolongada y sin prisas para ambos', optionB: 'Probar la posición sexual más acrobática que conozcan' },
    { id: 29, optionA: 'Recibir un azote juguetón durante el sexo', optionB: 'Dar un azote juguetón durante el sexo' },
    { id: 30, optionA: 'Tener sexo rápido y apasionado contra una pared', optionB: 'Tener sexo lento y tántrico que dure horas' },
    { id: 31, optionA: 'Dejar que tu pareja escoja tu ropa interior para una cita y no saber qué es hasta el final', optionB: 'Salir a un bar sin ropa interior y que solo tu pareja lo sepa' },
    { id: 32, optionA: 'Experimentar con sumisión y dominación de forma más intensa', optionB: 'Atar a tu pareja a la cama y tener control total durante una hora' },
    { id: 33, optionA: 'Ver porno juntos y actuar la escena que más les guste', optionB: 'Crear su propio guion de rol y llevarlo a cabo' },
    { id: 34, optionA: 'Probar el sexo anal (recibir o dar)', optionB: 'Explorar el sexo oral profundo (garganta profunda)' },
    { id: 35, optionA: 'Que tu pareja te grabe un audio describiendo lo que te haría', optionB: 'Enviar fotos provocadoras que solo ustedes puedan ver' },
    { id: 36, optionA: 'Hacerlo en la casa de un amigo cuando no esté', optionB: 'Hacerlo en el probador de una tienda de ropa' },
    { id: 37, optionA: 'Llegar al orgasmo al mismo tiempo', optionB: 'Controlar el orgasmo de tu pareja, decidiendo cuándo puede llegar' },
    { id: 38, optionA: 'Incorporar comida de forma más atrevida en el juego previo', optionB: 'Pintar sus cuerpos con pintura corporal comestible y lamerla' },
    { id: 39, optionA: 'Hacer un strip poker donde el perdedor cumple una fantasía del ganador', optionB: 'Jugar a "nunca he nunca" versión picante y ser totalmente honestos' },
    { id: 40, optionA: 'Confesar cuántas personas se han acostado', optionB: 'Describir su mejor experiencia sexual antes de estar juntos' }
  ],
  'Nivel Infierno': [
    { id: 41, optionA: 'Cumplir la fantasía sexual más atrevida de tu pareja, sin importar cuál sea', optionB: 'Que tu pareja cumpla la tuya, sin importar cuál sea' },
    { id: 42, optionA: 'Grabar un video íntimo solo para ustedes dos', optionB: 'Describir con todo lujo de detalles el acto más excitante que hayan tenido para escucharlo más tarde' },
    { id: 43, optionA: 'Tener una conversación telefónica erótica con tu pareja mientras están en habitaciones separadas', optionB: 'Masturbarse juntos por videollamada' },
    { id: 44, optionA: 'Invitar a una tercera persona a su cama para una noche', optionB: 'Ir a un club swinger solo para mirar' },
    { id: 45, optionA: 'Experimentar con juegos de cera caliente (de bajo punto de fusión)', optionB: 'Experimentar con pinzas para pezones u otro tipo de BDSM ligero' },
    { id: 46, optionA: 'Dejar que tu pareja lea tu diario de fantasías sexuales', optionB: 'Escribir una fantasía juntos y luego representarla' },
    { id: 47, optionA: 'Tener sexo en un lugar donde es casi seguro que los atrapen', optionB: 'Tener sexo con disfraces muy elaborados y manteniendo el personaje toda la noche' },
    { id: 48, optionA: 'Probar el fetiche de pies (adoración de pies)', optionB: 'Probar un juego de roles de humillación erótica consensuada' },
    { id: 49, optionA: 'Decirle a tu pareja el nombre de la persona que más te excitaba antes que ella/él', optionB: 'Que tu pareja te cuente quién fue la persona que más la excitó antes que tú' },
    { id: 50, optionA: 'Renunciar a tu propio orgasmo para darle a tu pareja múltiples orgasmos', optionB: 'Que tu pareja renuncie a su orgasmo para darte múltiples orgasmos a ti' }
  ]
};
