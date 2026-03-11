---
title: "El Manifiesto Amigable"
version: "1.0"
date: "11 de marzo de 2026"
lang: "es-ES"
langLabel: "Español"
description: "Un conjunto voluntario de principios para Software Developers (Desarrolladores de Software), Gatekeepers (Guardianes) y Users (Usuarios) de código abierto."
---

<h2 id="tldr">TL;DR</h2>

El Manifiesto Amigable es un conjunto voluntario de principios al que los Software Developers[<sup>1</sup>](#def-1) (Desarrolladores de Software), los Gatekeepers[<sup>2</sup>](#def-2) (Guardianes) y los Users[<sup>3</sup>](#def-3) (Usuarios) de código abierto pueden optar por adherirse.

En resumen:
- Los **Software Developers** se comprometen a crear software honesto, seguro y respetuoso que no explote a sus Users.
- Los **Gatekeepers** se comprometen a distribuir software de manera justa, transparente y sin filtros subjetivos o ideológicos.
- Los **Users** se comprometen a interactuar con los desarrolladores y las comunidades de forma respetuosa, de buena fe y con expectativas realistas.

<h2 id="table-of-contents">Tabla de contenidos</h2>

- [1. Prefacio](#1-preface)
- [2. Principios para Software Developers](#2-principles-for-software-developers)
  - [2.1. Seguridad y Calidad](#21-security--quality)
  - [2.2. Privacidad y Transparencia](#22-privacy--transparency)
  - [2.3. Respeto al User](#23-user-respect)
  - [2.4. Licencias y Honestidad](#24-licensing--honesty)
  - [2.5. Prácticas Predatorias](#25-predatory-practices)
  - [2.6. Acceso para Todos](#26-access-for-everyone)
- [3. Principios para Gatekeepers](#3-principles-for-gatekeepers)
  - [3.1. Transparencia y Comunicación](#31-transparency--communication)
  - [3.2. Seguridad y Privacidad](#32-security--privacy)
  - [3.3. Equidad y Objetividad](#33-fairness--objectivity)
  - [3.4. Relaciones con Desarrolladores](#34-developer-relations)
  - [3.5. Respeto al User](#35-user-respect)
- [4. Principios para Users](#4-principles-for-users)
  - [4.1. Respeto y Comunicación](#41-respect--communication)
  - [4.2. Buena Fe](#42-good-faith)
  - [4.3. Expectativas](#43-expectations)
- [5. Definiciones](#5-definitions)

<h2 id="1-preface">1. Prefacio</h2>

El movimiento de código abierto ha cambiado fundamentalmente la forma en que se construye, comparte y utiliza el software. Lo que comenzó como una filosofía de colaboración y libertad se ha convertido en un ecosistema que impulsa gran parte del mundo moderno, desde sistemas operativos y navegadores web hasta la infraestructura detrás de los servicios más grandes de Internet.

Sin embargo, a medida que este ecosistema ha crecido, también lo han hecho las estructuras que lo rodean. Los Gatekeepers —tiendas de aplicaciones, repositorios de paquetes, catálogos de software— se han convertido en el principal medio por el cual los Users descubren e instalan software. Estas Platforms (Plataformas) cumplen un propósito valioso: proporcionan confianza, comodidad y visibilidad. Pero también poseen un poder significativo. La decisión de aceptar o rechazar un software, de promoverlo o relegarlo, de aplicar las reglas de manera consistente o selectiva, es una decisión que afecta directamente los medios de vida y la reputación de los desarrolladores que lo construyen y las opciones disponibles para los Users que dependen de él.

La relación entre los Software Developers y sus Users tiene el potencial de ser una de las más productivas en tecnología: desarrolladores construyendo algo útil y Users ayudando a darle forma y mejorarlo. Pero sin un entendimiento compartido de lo que cada parte puede razonablemente esperar de la otra, esa relación puede deteriorarse. Lo que falta no es buena voluntad, sino un marco común para expresarla.

El Manifiesto Amigable existe para abordar esta brecha. Es un conjunto voluntario de principios para tres grupos —Software Developers, Gatekeepers y Users— que define lo que significa participar en el ecosistema de código abierto de buena fe. No es una licencia. No es un contrato legal. No es ejecutable por ninguna autoridad. Es simplemente un compromiso público: una forma en que individuos y organizaciones pueden decir: "Así es como elegimos operar, y les invitamos a que nos exijan cumplirlo."

La adhesión a este manifiesto es enteramente voluntaria. Nadie está obligado a adoptarlo, y nadie debería ser penalizado por elegir no hacerlo. Pero al adoptarlo, está eligiendo ser parte de una comunidad que valora la transparencia, la equidad y el respeto mutuo, y está dando a otros un estándar claro contra el cual medir ese compromiso.

<h2 id="2-principles-for-software-developers">2. Principios para los Software Developers</h2>
Al elegir adherirse al Manifiesto Amigable, usted, como Software Developer, elige adherirse a los siguientes principios.

<h3 id="21-security--quality">2.1. Seguridad y calidad</h3>

**2.1.1.** No distribuirá conscientemente software que contenga malware, spyware o código diseñado para dañar a los Users o sus sistemas.

**2.1.2.** Realizará esfuerzos razonables para abordar las vulnerabilidades de seguridad reportadas de manera oportuna.

**2.1.3.** Describirá con precisión lo que hace su software en cualquier Platform[<sup>4</sup>](#def-4) donde se distribuya, incluida su propia Platform (como su propio sitio web o repositorio público de código). Esto incluye los metadatos de distribución, así como la descripción, capturas de pantalla y permisos.

**2.1.4.** Describirá con precisión los cambios que contiene una nueva versión de su software. Por ejemplo, simplemente etiquetar una nueva versión de su software con "mejoras de rendimiento y corrección de errores" no es permisible.

<h3 id="22-privacy--transparency">2.2. Privacidad y transparencia</h3>

**2.2.1.** Será transparente respecto a qué datos recopila su software, si los hay, y con qué propósito.

**2.2.2.** No recopilará datos del User más allá de lo necesario para que el software funcione, a menos que el User opte explícitamente por ello.

**2.2.3.** En relación con el principio 2.2.2., cualquier interacción en la que el User pueda optar por suscribirse a recibir mensajes del desarrollador debe estar desactivada por defecto, a menos que la comunicación se considere crítica para el funcionamiento continuo del producto o la seguridad y privacidad del User.

**2.2.4.** En relación con el principio 2.2.3., cualquier comunicación a la que el usuario esté suscrito por defecto solo debe utilizarse para los fines específicos mencionados en el principio 2.2.3. No se podrá enviar ninguna otra comunicación (por ejemplo, marketing, noticias, ofertas, etc.) a través de este canal.

<h3 id="23-user-respect">2.3. Respeto al User</h3>

**2.3.1.** No degradará ni limitará intencionalmente la funcionalidad de su software en Platforms, distribuciones o entornos de escritorio específicos.

**2.3.2.** Proporcionará una forma razonable para que los Users reporten errores o soliciten soporte (si este último se ofrece). Esto puede incluir un sistema de seguimiento de incidencias, correo electrónico, foro o similar.

**2.3.3.** En relación con el principio 2.3.2., cualquier foro proporcionado para reportes de errores o soporte técnico debe ser de naturaleza asíncrona. En principio, esto significa que los chats grupales o salas de chat públicas no se consideran un mecanismo aceptable de seguimiento de incidencias o reporte de errores si se utilizan exclusivamente.

> [!NOTE]
> El principio 2.3.3. puede parecer draconiano a primera vista. Sin embargo, nótese que no prohíbe el uso de chats grupales o salas de chat para soporte/errores. Lo que sí establece es que este no puede ser el **único** canal oficial de soporte. No se debe esperar que los Users interactúen con el desarrollador en tiempo real, especialmente considerando las diferencias de zonas horarias. Los Users tampoco deberían tener que buscar entre grandes cantidades de contenido no estructurado y no relacionado con su problema para seguir un hilo de conversación sobre su incidencia.

**2.3.4.** Conducirá todas las interacciones con sus Users de manera profesional y respetuosa, independientemente de las circunstancias.

> [!NOTE]
> Ejemplos de comportamiento que viola el principio 2.3.4:
> - Desestimar, menospreciar o burlarse de un User por presentar un reporte de error o pedir ayuda.
> - Cerrar reportes de errores con respuestas hostiles o sarcásticas (por ejemplo, "a mí me funciona", "no es un error", "aprende a leer", "no se corregirá").
> - Tomar represalias contra un User que dejó una reseña negativa pero honesta de su software.
> - Realizar ataques personales contra un User basándose en su nivel de habilidad, antecedentes o empleador.
>
> Los Users que se toman el tiempo de reportar un error o proporcionar comentarios están contribuyendo a la mejora de su software. Trátelos en consecuencia.


<h3 id="24-licensing--honesty">2.4. Licencias y honestidad</h3>

**2.4.1.** Se asegurará de que la licencia declarada de su software refleje con precisión los términos bajo los cuales se distribuye.

**2.4.2.** No tergiversará el origen, autoría o afiliación de su software.

<h3 id="25-predatory-practices">2.5. Prácticas predatorias</h3>

**2.5.1.** No diseñará su software para explotar vulnerabilidades psicológicas, patrones adictivos o Dark Patterns[<sup>7</sup>](#def-7) (Patrones Oscuros) para manipular el comportamiento del User (por ejemplo, urgencia artificial, continuidad forzada, costos ocultos, flujos de exclusión deliberadamente confusos).

**2.5.2.** No bloqueará funcionalidades previamente gratuitas detrás de un muro de pago sin aviso razonable a los Users existentes.

**2.5.3.** No utilizará notificaciones engañosas, alertas falsas del sistema o elementos de interfaz engañosos diseñados para hacer que los Users realicen acciones que no pretendían.

**2.5.4.** Si su software ofrece un nivel gratuito o período de prueba, comunicará claramente las limitaciones y cualquier transición a un servicio de pago antes de que el User invierta tiempo o datos en la Platform.

**2.5.5.** No hará deliberadamente más difícil desinstalar, desactivar o dejar de usar su software de lo que fue instalarlo o activarlo.

**2.5.6.** No implementará cajas de botín, mecánicas gacha ni ningún mecanismo similar en el que el User pague por recompensas aleatorias de valor incierto.

**2.5.7.** No comercializará, publicitará ni promocionará compras dentro de la aplicación, microtransacciones o contenido de pago a Users menores de la edad legal de consentimiento en la jurisdicción del User.

**2.5.8.** Si su software se ofrece por suscripción, publicará una hoja de ruta que describa la frecuencia estimada y el alcance de las funcionalidades nuevas o mejoradas que los suscriptores pueden esperar durante su período de suscripción.

> [!NOTE]
> El principio 2.5.8. no aplica si la suscripción es principalmente para el mantenimiento de un servicio continuo (por ejemplo, un backend, API, almacenamiento en la nube o infraestructura de servidores) en lugar de para la entrega de nuevas funcionalidades de software.

**2.5.9.** Realizará esfuerzos razonables para fijar el precio de su software y cualquier suscripción asociada basándose en el valor genuino entregado a los Users, en lugar de en la dominancia del mercado, la escasez artificial o la ausencia de alternativas.

> [!NOTE]
> El principio 2.5.9. es intencionalmente aspiracional en lugar de prescriptivo. No es posible definir objetivamente un "precio justo". Sin embargo, al adherirse a este principio, está señalando a sus Users que su precio refleja una evaluación de buena fe del valor, no una explotación de su posición en el mercado. Se anima a los desarrolladores a ser transparentes sobre la justificación de sus precios cuando sea posible.

<h3 id="26-access-for-everyone">2.6. Acceso para todos</h3>

**2.6.1.** Realizará esfuerzos razonables para garantizar que su software sea accesible para Users con discapacidades, incluyendo, entre otros, la compatibilidad con lectores de pantalla, la navegación exclusiva por teclado y un contraste de color suficiente.

**2.6.2.** Realizará esfuerzos razonables para que su software esté disponible en múltiples idiomas.

> [!NOTE]
> Los principios 2.6.1. y 2.6.2. reconocen que no todos los desarrolladores tienen los recursos para implementar por sí mismos soporte completo de accesibilidad o localización. Sin embargo, como mínimo, debe diseñar y estructurar su software de manera que permita a otros contribuir con mejoras de accesibilidad y traducciones. Por ejemplo, utilizando APIs de accesibilidad estándar, externalizando las cadenas de texto visibles al usuario y aceptando contribuciones de la comunidad para traducciones.

<h2 id="3-principles-for-gatekeepers">3. Principios para los Gatekeepers</h2>
Al elegir adherirse al Manifiesto Amigable, usted, como Gatekeeper, elige adherirse a los siguientes principios.

<h3 id="31-transparency--communication">3.1. Transparencia y comunicación</h3>

**3.1.1.** Dejará claro a sus usuarios si su Platform revisa activamente (Review[<sup>6</sup>](#def-6)) el software enviado, y en qué medida (por ejemplo, auditorías de seguridad, escaneo automatizado, Review manual, sin Review).

**3.1.2.** Será transparente respecto a sus criterios de aceptación/rechazo y los publicará públicamente.

**3.1.3.** Proporcionará comentarios claros y accionables al solicitar cambios en una Submission[<sup>5</sup>](#def-5) (Envío).

**3.1.4.** Cualquier rechazo de una Submission debe incluir una explicación escrita que cite los criterios específicos de Review o el principio que la Submission viola. Un rechazo sin justificación no es válido.

> [!NOTE]
> Un rechazo de una palabra o sin explicación (por ejemplo, "no", "rechazado", "no adecuado") no se considera válido bajo este principio. El desarrollador ha invertido tiempo en preparar y enviar su software; tiene derecho a saber *por qué* fue rechazado, con referencia a criterios específicos y publicados (véase el principio 3.1.2).

**3.1.5.** Conducirá todas las interacciones con los desarrolladores de manera profesional y respetuosa, independientemente de las circunstancias.

> [!NOTE]
> Ejemplos de comportamiento que viola el principio 3.1.5:
> - Proporcionar comentarios despectivos, groseros u hostiles sobre una Submission debido a la carga de trabajo, presión de tiempo o frustración personal.
> - Tratar la Submission de un desarrollador de manera injusta debido a un desacuerdo previo o conflicto personal con el desarrollador.
> - Realizar ataques personales contra un desarrollador, incluyendo comentarios sobre su empleador, antecedentes o carácter.
> - Usar su posición como revisor para resolver agravios personales o ejercer autoridad más allá del alcance de la Review.
>
> Una Review es una revisión del software, no un juicio sobre la persona que lo escribió.


<h3 id="32-security--privacy">3.2. Seguridad y privacidad</h3>

> [!NOTE]
> Esta sección no aplica si, de acuerdo con el principio 3.1.1, su Platform divulga que no revisa el software enviado y, por lo tanto, permite todas las Submissions.

**3.2.1.** No distribuirá, en la medida de sus posibilidades, software que tenga vulnerabilidades de seguridad críticas conocidas.

**3.2.2.** No distribuirá, en la medida de sus posibilidades, software que se sepa que viola intencionalmente la privacidad del User con fines comerciales o de otro tipo.

**3.2.3.** Tendrá un proceso razonable de divulgación para reportar problemas de seguridad en el software que distribuye.

<h3 id="33-fairness--objectivity">3.3. Equidad y objetividad</h3>

**3.3.1.** Acepta que el propósito de una Platform de distribución es distribuir y promover el software distribuido en ella, y no crear un jardín amurallado ideológico.

**3.3.2.** No rechazará software basándose en preferencias estéticas subjetivas.

> [!NOTE]
> Ejemplos de razones estéticas no válidas para rechazar una Submission según el principio 3.3.2:
> - Rechazar una Submission porque no le gusta el logotipo.
> - Rechazar una Submission porque no le gusta cómo está formateado el nombre del software (por ejemplo, rechazar una Submission porque el nombre es 'DigitalPaint' en lugar de 'Digital Paint' o 'Digitalpaint').
> - Rechazar una Submission porque no le gusta la combinación de colores que utiliza.
> - Rechazar una Submission porque no utiliza un lenguaje de diseño, paleta de colores o tema en particular.
> - Rechazar una Submission por usar un diseño de ventana no estándar.
> - Rechazar una Submission porque utiliza widgets personalizados en lugar de nativos de la Platform.

> [!TIP]
> Ejemplos de razones estéticas permisibles para rechazar una Submission:
> - El logotipo o nombre de la Submission está diseñado para suplantar otra aplicación o engañar a los Users.
> - El logotipo de la Submission contiene imágenes ofensivas o ilegales.
> - El nombre de la Submission infringe una marca registrada.
> - Los metadatos de la Submission son factualmente engañosos.
> - El nombre de la Submission contiene texto promocional o descriptivo más allá del nombre real del software. Por ejemplo, "Digital Paint - Programa de pintura profesional y fácil" debería ser simplemente "Digital Paint."

**3.3.3.** No rechazará una Submission que compita con sus propios productos o servicios.

**3.3.4.** Aplicará sus criterios de Review de manera consistente e igualitaria a todas las Submissions.

**3.3.5.** No requerirá que los desarrolladores utilicen kits de herramientas, frameworks de interfaz de usuario, bibliotecas o lenguajes de diseño específicos como condición para la aceptación.

> [!NOTE]
> El principio 3.3.5. no aplica si:
> - Una Submission utiliza frameworks obsoletos o frameworks con vulnerabilidades de seguridad conocidas.
> - La Platform está orientada a una arquitectura, entorno de escritorio o hardware específico que el o los frameworks o bibliotecas utilizados por la Submission no soportan.

**3.3.6.** No rechazará una Submission basándose en su complejidad percibida, tamaño o alcance. Todo software que funcione según lo descrito por su desarrollador es válido, independientemente de cómo esté implementado.

> [!NOTE]
> Ejemplos de razones no válidas para rechazar una Submission bajo el principio 3.3.6:
> - Rechazar una Submission porque es un "simple envoltorio" alrededor de otra herramienta.
> - Rechazar una Submission porque es una aplicación web empaquetada para uso de escritorio.
> - Rechazar una Submission porque tiene "muy pocas funcionalidades" o "funcionalidad mínima."
> - Rechazar una Submission porque el código fuente se considera demasiado simple.
>
> El papel de una Platform de distribución es distribuir software, no juzgar si el software es "lo suficientemente complejo" para merecer distribución. Los Users son capaces de decidir por sí mismos si una aplicación les es útil.

**3.3.7.** No rechazará una Submission basándose en las herramientas o métodos utilizados para escribir el software, siempre que el software funcione según lo descrito y cumpla con todos los demás criterios publicados.

> [!NOTE]
> Ejemplos de razones no válidas para rechazar una Submission bajo el principio 3.3.7:
> - Rechazar una Submission porque el código fue escrito con la asistencia de herramientas de IA.
> - Rechazar una Submission porque el código fue generado en lugar de escrito a mano.
> - Rechazar una Submission porque fue escrita utilizando una Platform de low-code o no-code.
>
> Una Platform de distribución revisa *software*, no *procesos*. Si el resultado final es funcional, seguro y está descrito con precisión, los medios por los cuales fue creado son irrelevantes. Los Gatekeepers no están en posición de auditar cómo fue escrita cada línea de código, ni deberían estarlo.


<h3 id="34-developer-relations">3.4. Relaciones con los desarrolladores</h3>

**3.4.1.** Tendrá un plazo declarado públicamente para responder a las Submissions de los desarrolladores y se adherirá a dicho plazo.

**3.4.2.** Proporcionará un proceso claro de apelación para software rechazado o eliminado.

**3.4.3.** No eliminará software actualmente publicado sin notificar al desarrollador y darle la oportunidad de abordar las preocupaciones.

**3.4.4.** No rechazará nuevas Submissions basándose en criterios que, si se aplicaran a las Submissions existentes publicadas en esa Platform, resultarían en la eliminación de las Submissions existentes de la Platform.

> [!NOTE]
> En otras palabras, "cambiar de opinión" sobre las reglas para las Submissions está permitido, pero solo si las Submissions existentes que violan las nuevas reglas se eliminan de la Platform de acuerdo con el principio 3.4.3.

<h3 id="35-user-respect">3.5. Respeto al User</h3>

**3.5.1.** No incluirá software adicional, telemetría o modificaciones en los paquetes distribuidos sin el consentimiento del desarrollador.

**3.5.2.** Representará con precisión el origen del software (desarrollador original vs. empaquetado por la comunidad).

<h2 id="4-principles-for-users">4. Principios para los Users</h2>
Al elegir adherirse al Manifiesto Amigable, usted, como User, elige adherirse a los siguientes principios.

<h3 id="41-respect--communication">4.1. Respeto y comunicación</h3>

**4.1.1.** Tratará a los desarrolladores con respeto al reportar errores, solicitar funcionalidades o proporcionar comentarios. Los desarrolladores de software son personas, no mesas de servicio.

**4.1.2.** Al reportar un error, realizará un esfuerzo razonable para proporcionar suficiente información para que el desarrollador pueda reproducir o comprender el problema (por ejemplo, pasos para reproducir, información del sistema, mensajes de error).

**4.1.3.** No dejará Reviews ni calificaciones destinadas a coaccionar a un desarrollador para que implemente una funcionalidad específica o cambie la dirección de su software.

**4.1.4.** No criticará, se burlará ni menospreciará a otros Users por su elección de Platform, sistema operativo, software o la forma en que eligen utilizarlo.

> [!NOTE]
> Ejemplos de comportamiento que viola el principio 4.1.4:
> - "Deberías usar Linux en lugar de Windows."
> - "¿Por qué usas GrapheneOS si vas a instalar Play Services?"
> - "Los verdaderos desarrolladores no usan VS Code."
> - "Si necesitas una interfaz gráfica para eso, lo estás haciendo mal."
>
> Cómo una persona elige usar sus propios dispositivos y software es asunto suyo. Los juicios no solicitados sobre las elecciones de otro User no son constructivos y no tienen lugar en una comunidad saludable.

<h3 id="42-good-faith">4.2. Buena fe</h3>

**4.2.1.** No intentará deliberadamente explotar, realizar ingeniería inversa o eludir medidas de seguridad en el software con fines maliciosos.

**4.2.2.** Respetará la licencia bajo la cual se distribuye el software.

**4.2.3.** No tergiversará errores, fabricará problemas ni presentará reportes fraudulentos contra un desarrollador o su software.

<h3 id="43-expectations">4.3. Expectativas</h3>

**4.3.1.** Reconoce que el software de código abierto a menudo se desarrolla de forma voluntaria y que los desarrolladores no están obligados a implementar solicitudes de funcionalidades, responder de inmediato ni proporcionar soporte ilimitado.

**4.3.2.** Reconoce que el software puede tener errores y que la existencia de un error no es, por sí misma, evidencia de negligencia o incompetencia por parte del desarrollador.

<h2 id="5-definitions">5. Definiciones</h2>

<a id="def-1"></a>**<sup>1</sup> Software Developer (Desarrollador de Software).** Cualquier individuo u organización que crea, mantiene o distribuye software. Esto incluye desarrolladores independientes, contribuidores de código abierto, empresas de software comercial y cualquier otra parte responsable del desarrollo o mantenimiento continuo de un producto de software.

<a id="def-2"></a>**<sup>2</sup> Gatekeeper (Guardián).** Cualquier individuo, organización o plataforma que controla o influye en la distribución de software a los usuarios finales. Esto incluye, entre otros, operadores de tiendas de aplicaciones, mantenedores de repositorios de paquetes, mantenedores de distribuciones y cualquier parte que revisa, aprueba o rechaza envíos de software en nombre de una plataforma de distribución.

<a id="def-3"></a>**<sup>3</sup> User (Usuario).** Cualquier individuo que instala, utiliza o interactúa de alguna manera con software distribuido a través de una plataforma. Esto incluye usuarios finales, administradores de sistemas que instalan software en nombre de otros y cualquier persona que participa en una comunidad de software (por ejemplo, presentando reportes de errores, dejando reseñas o participando en foros).

<a id="def-4"></a>**<sup>4</sup> Platform (Plataforma).** Cualquier sistema, servicio o infraestructura utilizado para distribuir software a los usuarios. Esto incluye tiendas de aplicaciones, repositorios de paquetes, catálogos de software y cualquier otro mecanismo a través del cual el software se pone a disposición para descarga o instalación.

<a id="def-5"></a>**<sup>5</sup> Submission (Envío).** Una solicitud de un Software Developer para que su software sea listado, publicado o puesto a disposición de alguna manera en una Platform. Esto incluye envíos iniciales, actualizaciones de software existente y re-envíos tras un rechazo.

<a id="def-6"></a>**<sup>6</sup> Review (Revisión).** El proceso mediante el cual un Gatekeeper evalúa una Submission contra criterios publicados antes de aceptarla o rechazarla.

<a id="def-7"></a>**<sup>7</sup> Dark Patterns (Patrones Oscuros).** Opciones de diseño de interfaz de usuario deliberadamente creadas para engañar, manipular o coaccionar a los usuarios para que realicen acciones que no son de su interés. Ejemplos incluyen opciones de exclusión ocultas, continuidad forzada, publicidad disfrazada y tácticas de cebo y cambio.
