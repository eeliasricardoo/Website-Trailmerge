import { type BlogPost } from './blogPosts';

// Spanish translations of blog posts (titles, categories, excerpts)
export const blogPostsEs: BlogPost[] = [
	{
		slug: "help-how-do-i-build-out-my-product-design-team",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/62c87755e04d61389fbc8d0b_gabriella-clare-marino-_NPCTr9XsGc-unsplash-p-800.jpeg",
		title: "¡Ayuda! ¿Cómo construyo mi equipo de diseño de producto?",
		date: "8 DE JULIO, 2022",
		category: "EQUIPOS DE DISEÑO",
		excerpt: "En el mercado actual, los diseñadores son cada vez más valiosos para startups y empresas establecidas. Sin embargo, contratar y encontrar diseñadores efectivos puede ser un proceso que consume tiempo y es desafiante.",
		imageAlt: "Ilustración de mochila de senderismo",
		content: `<p>En el mercado actual, los diseñadores son cada vez más valiosos para startups y empresas establecidas por igual, y más empresas están comenzando a reconocer su beneficio para reducir la rotación, impulsar la adopción y mejorar la eficiencia de los usuarios. Un gran equipo de diseño puede ser la diferencia entre un buen producto y un producto estelar.</p>

<p>Sin embargo, contratar y encontrar diseñadores efectivos puede ser un proceso que consume tiempo y es desafiante.</p>

<h2>Comienza con un líder</h2>

<p>Como jefe de producto que busca realizar sus primeras contrataciones de diseño a tiempo completo o como jefe de diseño que busca construir el equipo, ¿por dónde empezar? Aquí hay algunos consejos y estrategias que he aprendido en el camino durante mi trayectoria en el mundo del diseño de producto.</p>

<p>Para aquellos que recién comienzan a construir un equipo de diseño, en la mayoría de los casos, recomendaría comenzar por contratar un diseñador líder o un jefe de diseño jugador-entrenador. Alguien con un conjunto sólido de habilidades de diseño de producto de extremo a extremo y algo de experiencia en liderazgo es ideal: alguien motivado para hacer trabajo práctico, establecer los procesos de diseño de la empresa y construir una gran cultura de diseño valdrá su peso en oro. Formar un equipo desde "arriba hacia abajo" ayuda a garantizar que el equipo de diseño comience con experiencia, así como con la capacidad de mentorizar a los diseñadores entrantes que son más junior.</p>

<h2>Tamaño y estructura del equipo</h2>

<p>Una vez que tu primer líder de diseño esté en su lugar (¡o tal vez seas tú!), considera cuántos diseñadores necesitarás para los próximos 6-12 meses. Una buena regla general es considerar la proporción de diseñadores a ingenieros. Generalmente, he encontrado que tener 4-10 desarrolladores por diseñador funciona bien para equilibrar la carga de trabajo de diseño e ingeniería. Ese número de ingenieros por diseñador debería ser mayor para productos centrados en backend y menor para aquellos centrados en frontend.</p>

<p>A continuación, deberás decidir qué estructura deseas adoptar para tus equipos. He visto que un modelo de agencia funciona bien para empresas más pequeñas con uno o dos equipos de ingeniería. En este enfoque, a los diseñadores se les asignan proyectos, pero pueden estar en general menos integrados con los ingenieros y el resto de la empresa.</p>

<p>Un modelo matricial, por otro lado, asigna diseñadores (generalmente todos reportando a un gerente o director de diseño común) a diferentes equipos interfuncionales, que cada uno típicamente consta de un gerente de producto, un diseñador y un equipo de ingenieros, trabajando juntos para lograr su objetivo. En este tipo de entorno, los investigadores y otros roles pueden estar integrados en cada equipo o trabajar estilo agencia en múltiples equipos.</p>

<p>El modelo que elijas dependerá del tamaño de tu empresa, así como de la naturaleza de tu negocio, e incluso el mismo tipo de estructura puede tener sabores únicos en diferentes contextos. Sé flexible y dispuesto a ajustar si algo no funciona bien o si otra estructura utilizará mejor las fortalezas de tu equipo.</p>

<h2>Antigüedad y conjuntos de habilidades</h2>

<p>Finalmente, deberás considerar qué nivel(es) y rol(es) deseas contratar para tu nuevo equipo. Los diseñadores senior obviamente proporcionarán más experiencia y sabiduría ganada con esfuerzo. Los diseñadores junior pueden aportar energía y fuego fresco para ayudar a completar un equipo. Deberás asegurarte de tener el ancho de banda en el equipo (o en tu propio horario) para invertir en su crecimiento, pero en mi experiencia, traer a los juniors correctos vale la pena con la pasión, la perspectiva única y el crecimiento que aportan al equipo. De cualquier manera, es vital contratar personas con una mentalidad de crecimiento: seniors que sean apasionados por mentorizar a otros mientras continúan creciendo ellos mismos, y juniors que estén ansiosos por aprender.</p>

<p>Además del nivel, querrás evaluar si los diseñadores generalistas o especialistas servirán mejor a tus necesidades. Los generalistas son responsables de todo a lo largo del proceso (llamado diseño "de extremo a extremo"): investigación, wireframing, prototipado, trabajo con desarrolladores, etc., y son excelentes para equipos matriciales y equipos nuevos por igual. Por otro lado, los especialistas se centrarán en un área específica, como investigación, operaciones de diseño, etc., y son excelentes adiciones a una organización de diseño en crecimiento. En última instancia, cualquier enfoque puede funcionar bien, siempre y cuando te asegures de tener un equilibrio de conjuntos de habilidades.</p>

<p>Aunque formar un equipo de diseño puede ser una tarea desalentadora, con tiempo y paciencia los resultados valdrán todo el esfuerzo. ¡Brindo por tu equipo de diseño, que podría hacer que el mundo sea un poco más increíble!</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		},
	},
	{
		slug: "how-do-i-prioritize-features-part-2",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60c0cdd56e2414337cf33013_ran-berkovich-xU0ZD-TsmmU-unsplash-p-3200.jpeg",
		title: "¿Cómo Priorizo Características? Parte 2 de 2",
		date: "9 DE JUNIO, 2021",
		category: "SAAS",
		excerpt: "En la primera parte de esta serie, discutimos puntos de datos centrados en el cliente que pueden ayudar a formar la estrategia de producto. El siguiente paso es mezclar las restricciones.",
		imageAlt: "Ilustración de taza de café",
		content: `<p>En la primera parte de esta serie, discutimos puntos de datos centrados en el cliente que pueden ayudar a formar la estrategia de producto. Exploramos cómo comprender las necesidades, puntos de dolor y objetivos de tus usuarios debe ser la base de cualquier marco de priorización. Pero las necesidades del cliente por sí solas no cuentan toda la historia.</p>

<p>El siguiente paso es mezclar las restricciones. El desarrollo de productos del mundo real ocurre dentro de límites, y reconocer estas restricciones te ayuda a tomar decisiones más realistas y alcanzables.</p>

<h2>Restricciones técnicas</h2>

<p>Las restricciones técnicas incluyen tu stack tecnológico actual, limitaciones de infraestructura y la complejidad de implementar ciertas características. Algunas características pueden sonar geniales desde la perspectiva del cliente pero podrían requerir cambios arquitectónicos significativos o introducir deuda técnica.</p>

<p>Al evaluar características a través de una lente técnica, considera: ¿Cuánto tiempo tomará construir esto? ¿Qué dependencias crea? ¿Requerirá nueva infraestructura o servicios de terceros? ¿Se alinea con tu stack tecnológico actual, o requerirá nueva experiencia?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/Bw2icOlhL9Iv6/source.gif" alt="Constraints keep us from hurting ourselves" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Constraints keep us from hurting ourselves... most of the time. (via Giphy)</p>
</div>

<h2>Restricciones comerciales</h2>

<p>Las restricciones comerciales abarcan tu presupuesto, cronograma, posición en el mercado y objetivos estratégicos. Una característica puede ser muy solicitada por los clientes, pero si no se alinea con tu modelo de negocio u objetivos de ingresos, podría no ser la prioridad correcta.</p>

<p>Considera preguntas como: ¿Esta característica apoya nuestro modelo de negocio? ¿Nos ayudará a adquirir o retener clientes? ¿Nos diferencia de los competidores? ¿Es el momento adecuado en el ciclo de vida de nuestra empresa para construir esto?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/QU3VPCKslm8sF0TO0v/source.gif" alt="Don't let your important features get blocked" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Don't let your important features get blocked. (via Giphy)</p>
</div>

<h2>Restricciones de recursos</h2>

<p>Las restricciones de recursos involucran el tamaño de tu equipo, conjuntos de habilidades y capacidad. Podrías tener ideas brillantes, pero si no tienes las personas adecuadas o suficiente ancho de banda, esas ideas seguirán siendo solo eso: ideas.</p>

<p>Sé honesto acerca de: ¿Tenemos las habilidades adecuadas en el equipo? ¿Cuánta capacidad tenemos realmente? ¿Qué otras prioridades están compitiendo por atención? ¿Podemos entregar esto de manera realista dentro de nuestro cronograma?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/leWwDRvSI49jy/source.gif" alt="Taking on tons of features can be a battle" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Taking on tons of features can be a battle. (via Giphy)</p>
</div>

<h2>Equilibrando la ecuación</h2>

<p>El arte de la priorización viene de equilibrar las necesidades del cliente con estos tres tipos de restricciones. Una característica que obtiene una puntuación alta en valor para el cliente pero baja en viabilidad podría necesitar esperar. Por el contrario, una característica que es fácil de construir pero no sirve bien a los clientes probablemente no debería priorizarse.</p>

<p>Crea un marco que pese todos estos factores. Algunos equipos usan sistemas de puntuación, otros usan matrices, y algunos confían en discusiones estructuradas. El método importa menos que asegurarte de que estás considerando el panorama completo antes de tomar decisiones.</p>

<p>Recuerda, las restricciones no son necesariamente malas: te obligan a ser creativo y enfocado. Los mejores productos a menudo surgen de trabajar dentro de limitaciones, no de recursos ilimitados.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "how-do-i-prioritize-features-part-1",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60a813feba638c0e3ef14854_valery-fedotov-CqX6IhVj2TI-unsplash-p-3200.jpeg",
		title: "¿Cómo Priorizo Características? Parte 1 de 2",
		date: "21 DE MAYO, 2021",
		category: "SAAS",
		excerpt: "Si eres fundador de una startup o líder de producto, es probable que no tengas problemas para soñar en grande. Pero sigues encontrándote con las mismas dos molestas restricciones al construir el producto de ensueño para dominar tu industria: tiempo y dinero...",
		imageAlt: "Ilustración de binoculares",
		content: `<p>Si eres fundador de una startup o líder de producto, es probable que no tengas problemas para soñar en grande. Tu tablero de visión probablemente está desbordado con características que revolucionarían tu industria, deleitarían a tus usuarios y harían llorar a tus competidores. Pero sigues encontrándote con las mismas dos molestas restricciones al construir el producto de ensueño para dominar tu industria: tiempo y dinero.</p>

<p>Cada solicitud de característica se siente urgente. Cada sesión de retroalimentación del cliente revela otra capacidad "imprescindible". Cada lanzamiento de competidor te hace cuestionar tu hoja de ruta. Entonces, ¿cómo decides qué construir primero?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/lHBbcpFTS5c2Y/giphy.gif" alt="DON'T CARE HOW I WANT IT NOW" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">When dev says it will take years to build (via Giphy)</p>
</div>

<p>Construir tu producto en fases tiene varios beneficios. Te obliga a priorizar lo que es verdaderamente importante, te permite adaptarte basándote en la retroalimentación del cliente y te ayuda a llegar al mercado más rápido. Pero, ¿cómo decides qué va en la fase uno versus la fase dos?</p>

<h2>Recuerda Para Quién Estás Construyendo</h2>

<p>Antes de poder priorizar características efectivamente, necesitas entender para quién estás construyendo. Esto significa ir más allá de las personas genéricas de usuario y entender las necesidades específicas, puntos de dolor y objetivos de tu audiencia objetivo. ¿Estás construyendo para clientes empresariales que necesitan características robustas de seguridad y cumplimiento? ¿O estás dirigiendo a pequeñas empresas que necesitan simplicidad y configuración rápida?</p>

<p>Entender tu audiencia objetivo te ayuda a tomar mejores decisiones sobre qué características importan más. Una característica que es crítica para un segmento de usuario podría ser irrelevante para otro. Cuanto más específico puedas ser sobre para quién estás construyendo, más fácil se vuelve priorizar.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/RaLIOPl8MLyWA/source.gif" alt="Do your research" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Do your research</p>
	<p style="margin-top: 4px; font-size: 12px; color: var(--grey-3); font-style: italic;">Don't skip understanding! (via Giphy)</p>
</div>

<p>Recopilar perspectivas del cliente implica múltiples enfoques. Las entrevistas con usuarios te ayudan a entender motivaciones y contexto. Las pruebas de usabilidad revelan dónde los usuarios luchan. Los tickets de soporte destacan frustraciones recurrentes. Los análisis del producto te muestran lo que la gente realmente hace, no solo lo que dice que hace.</p>

<p>Busca patrones en estas fuentes de datos. Si múltiples clientes mencionan el mismo problema, esa es una señal. Si los análisis muestran que los usuarios luchan consistentemente con un flujo de trabajo particular, esa es una señal. Si los tickets de soporte se agrupan alrededor de un problema específico, esa es una señal.</p>

<h2>¿Si Está Roto, Arréglalo?</h2>

<p>Los problemas de usabilidad pueden impactar significativamente la satisfacción y retención del usuario. Si los usuarios no pueden completar tareas principales, o si están frustrados por interfaces confusas, esos problemas deberían subir a la cima de tu lista de prioridades. Pero no todos los problemas de usabilidad son iguales.</p>

<p>Considera la severidad y frecuencia de cada problema. Un error crítico que impide que los usuarios completen una compra es más urgente que una inconsistencia menor de UI. Un problema de usabilidad que afecta al 80% de tus usuarios es más importante que uno que afecta al 5%. Las auditorías de diseño y las escalas de severidad pueden ayudarte a identificar y priorizar sistemáticamente estos problemas.</p>

<h2>¿Qué Va a Vender?</h2>

<p>Para muchos productos, especialmente B2B SaaS, ciertas características son esenciales para cerrar tratos. Estas son las características que los prospectos preguntan durante las llamadas de ventas, las capacidades que te diferencian de los competidores y la funcionalidad que justifica tu precio.</p>

<p>Entender qué características impulsan las ventas requiere hablar con tu equipo de ventas, analizar datos de ganancia/pérdida y escuchar lo que los prospectos realmente dicen durante las demostraciones. ¿Qué características los emocionan? ¿Qué capacidades piden? ¿Qué preocupaciones plantean que los hacen alejarse?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/443jTW1yjUiwXOlQ2g/source.gif" alt="What do your potential customers actually want to buy?" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">What do your potential customers actually want to buy? (via Giphy)</p>
</div>

<p>Es importante distinguir entre lo que los prospectos dicen que quieren y lo que realmente necesitan. Las personas a menudo piden características basadas en lo que han visto en otros productos, no necesariamente lo que resolvería sus problemas específicos. Confía en los datos de comportamiento pasado: ¿qué características usan realmente tus clientes actuales? ¿Qué flujos de trabajo siguen? ¿Qué problemas resuelven con tu producto?</p>

<h2>Próximos pasos: Aplicar Restricciones</h2>

<p>Entender las necesidades del cliente, los problemas de usabilidad y los impulsores de ventas es solo el primer paso. En la parte dos de esta serie, exploraremos cómo equilibrar estas prioridades centradas en el cliente con restricciones del mundo real: limitaciones técnicas, requisitos comerciales y disponibilidad de recursos. Porque incluso las características más importantes necesitan ser factibles de construir.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "how-to-ask-good-questions-when-building-saas-product",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/6080815fbafc572380901b88_artem-maltsev-0CvHQ62gwY8-unsplash-p-800.jpeg",
		title: "Cómo Hacer Buenas Preguntas al Construir un Producto SaaS",
		date: "21 DE ABRIL, 2021",
		category: "SAAS",
		excerpt: "Mejora tu técnica de cuestionamiento con estos fundamentos para hacer buenas preguntas al construir tu producto SaaS.",
		imageAlt: "Ilustración de brújula",
		imageCredit: "Blog Photo by Artem Maltsev on Unsplash",
		content: `<p>Como instructor en General Assembly, una de las principales cosas que quería que mi cohorte se llevara del programa intensivo de diseño UX de 10 semanas era esto: cómo hacer las preguntas correctas.</p>

<p>Los píxeles son geniales y todo eso – y, sin duda, definen el resultado del trabajo que hacemos como diseñadores de productos. Pero las buenas preguntas son la base del buen diseño, y necesitarás saber cómo hacerlas si estás interesado en identificar qué características y funcionalidades tendrán un impacto en tu mercado.</p>

<p>Primero, necesitarás entender qué información esperas obtener haciendo preguntas. ¿Está relacionada con comportamientos y preferencias actuales? ¿Es retroalimentación sobre una idea que tienes? ¿Es si los clientes están dispuestos a pagar por tu producto o no?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/XBpEStoQ5rftPFA8rh/giphy.gif" alt="Next question" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Next question. (via Giphy)</p>
</div>

<p>En esta publicación, nos enfocaremos en preguntas en descubrimiento de clientes y entrevistas con usuarios, aunque estos principios se pueden aplicar al trabajo con partes interesadas, sesiones de ideación y más.</p>

<p>Echemos un vistazo a los elementos esenciales de las buenas preguntas que revelarán perspectivas claras, precisas y accionables:</p>

<p><strong>1. Define los objetivos de investigación y las preguntas con anticipación.</strong></p>

<p>Soy un gran fanático de salirme del guión. Era el niño que lograba hacer bastante bien en las presentaciones escolares con poca preparación. El hecho es que es importante prepararse por algunas razones:</p>

<ul>
	<li>Los objetivos claros te ayudarán a entender qué información buscar en tu investigación (y por lo tanto, qué metodologías usar y qué preguntas hacer).</li>
	<li>Serás menos propenso a olvidar hacer preguntas importantes.</li>
	<li>Tus datos serán más confiables porque estás haciendo preguntas consistentes en todos los participantes.</li>
	<li>Podrás elaborar preguntas no capciosas para reducir el sesgo de los participantes y mejorar la confiabilidad de las perspectivas de investigación, lo que nos lleva a...</li>
</ul>

<p><strong>2. Evita preguntas capciosas.</strong></p>

<p>En The Mom Test, Rob Fitzpatrick da una ilustración conmovedora de los peligros de hacer preguntas capciosas. Aquí hay una pequeña paráfrasis:</p>

<p><em>Emprendedor: "¿Te gusta mi idea?"</em><br />
<em>Mamá: "¡Por supuesto, cariño!"</em><br />
<em>Emprendedor: "Oh, dulce. ¡Voy a ser rico!"</em></p>

<p>Fitzpatrick luego elabora sobre el peligro de que las personas – no solo madres cariñosas, sino familia, amigos y extraños por igual – le digan a los investigadores lo que quieren escuchar para ser "amables" en lugar de la verdad dura que necesitan saber.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/wRfVij0ow9h28/source.gif" alt="Moral support" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">El apoyo es agradable y todo, pero las mentiras piadosas pueden llevar a la ruina. (via Giphy)</p>
</div>

<p>Hay otros métodos para navegar alrededor de estos falsos positivos, pero un primer paso fácil es dejar de hacer preguntas de sí/no, especialmente las relacionadas con preferencias.</p>

<p><strong>3. Usa tus palabras de pregunta "W".</strong></p>

<p>¿Qué tipos de preguntas hacer, entonces? ¡Las abiertas!</p>

<p>Una gran base para formar estas preguntas comenzando con las 5 Ws:</p>

<ul>
	<li>Quién</li>
	<li>Qué</li>
	<li>Cuándo</li>
	<li>Dónde</li>
	<li>Por qué</li>
	<li>Cómo (ok, no son 5, y no es una W, pero tenemos que incluirlo)</li>
</ul>

<p>Esta es una manera fácil, pero no la única, de formar preguntas que no sean de sí/no que alentarán a los entrevistados a proporcionar respuestas descriptivas. Si te sientes especialmente aventurero, prueba algunos indicadores que comiencen con, "¿Hasta qué punto…?" y "En una escala del 1 al 5, …?"</p>

<p><strong>4. Haz preguntas de seguimiento (especialmente ¿Por qué?)</strong></p>

<p>Si tienes niños pequeños (yo tengo cuatro), probablemente estés familiarizado con largas sesiones de interrogatorio compuestas enteramente de esta sola palabra: "¿Por qué?"</p>

<p>¿Por qué, preguntas? 🙃</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/2fuSGwfvM77J1sAzxj/giphy.gif" alt="4 year old girls ask around 390 questions a day" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">This seems about right for my daughter. (via Giphy)</p>
</div>

<p>Bueno, es simple, esa pequeña palabra puede producir mucha información útil mientras los niños aprenden sobre el mundo que los rodea. Capas y capas de información útil. También puede ayudarte como emprendedor o persona de producto a llegar al núcleo de algunos problemas complicados, como Eric Ries señala en The Lean Startup al elaborar sobre el principio de los 5 Por qués.</p>

<p><strong>5. No solo preguntes. Observa.</strong></p>

<p>El comportamiento observado (o incluso contado) típicamente es más confiable que las afirmaciones especulativas que hacen los entrevistados. Sí, puedo decir que definitivamente tomaría un viaje de fin de semana a la luna si tuviera la oportunidad. Pero si miras mi comportamiento, verías que ni siquiera he gastado dinero para volar fuera del país en los últimos años. No exactamente ajuste producto-mercado, ¿verdad? Confía en el historial más que en las preferencias, esperanzas y deseos expresados.</p>

<p><strong>6. Practica la escucha activa.</strong></p>

<p>La escucha activa es la técnica de estar completamente presente y comprometido en lo que alguien está diciendo. Es esencial para el descubrimiento de clientes y la investigación de usuarios. Además de dar contacto visual y lenguaje corporal que demuestre interés y cuidado en lo que el entrevistado está hablando, la escucha activa implica repetir frases cortas y hacer preguntas aclaratorias, por ejemplo, "Parece que has estado luchando con tu software actual porque la navegación es confusa. ¿Es correcto?" La escucha activa no solo ayuda a asegurar que tu información sea precisa, también puede ayudar a que los entrevistados se sientan más cómodos porque se sienten seguros y entendidos.</p>

<p><strong>7. Solo agrega curiosidad.</strong></p>

<p>Puedes escuchar activamente sin permitir que tus suposiciones sean desafiadas. Esté dispuesto a dejar que los datos te lleven a nuevas ideas, nuevos entendimientos del problema y nuevas soluciones potenciales.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/Uod3eEQvIMHYHl88U2/giphy.gif" alt="Keep those questions coming" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Keep asking to keep learning! (via Giphy)</p>
</div>

<p>Estos simplemente representan los fundamentos de hacer buenas preguntas. A medida que ganes más práctica, notarás qué funciona y qué produce datos engañosos. Es un proceso iterativo desarrollar estas habilidades. ¿El siguiente paso? ¡Ve a hablar con algunas personas y ve qué perspectivas descubres!</p>

<p>¡Oh, y siéntete libre de hacernos cualquier pregunta que tengas sobre este tema también!</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "lets-talk-design-debt",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/606db17540b5ef6754da71c6_ruth-enyedi-zuwx2tvI_iM-unsplash(1)-p-800.jpeg",
		title: "Hablemos de Deuda de Diseño: ¿Qué es y qué me podría costar?",
		date: "7 DE ABRIL, 2021",
		category: "SAAS",
		excerpt: "Eres un fundador no técnico con un concepto B2B SaaS increíble. Sabes que necesitas contratar a un desarrollador para construir tu producto de software... pero meses después, enfrentas el impacto inicial de la deuda de diseño.",
		imageAlt: "Ilustración de nudo",
		content: `<p>Eres un fundador no técnico con un concepto B2B SaaS increíble. Has validado la idea, asegurado algunos clientes iniciales y estás listo para construir. Sabes que necesitas contratar a un desarrollador para construir tu producto de software, así que encuentras un ingeniero talentoso, compartes tu visión y observas cómo tu producto comienza a tomar forma.</p>

<p>Pero meses después, enfrentas el impacto inicial de la deuda de diseño. Tu desarrollador construyó exactamente lo que pediste, pero no se siente bien. Los usuarios están confundidos. La interfaz es torpe. Agregar nuevas características se siente como sacar dientes. ¿Qué salió mal?</p>

<h2>¿Qué es la deuda de diseño?</h2>

<p>La deuda de diseño se acumula cuando las decisiones de diseño se toman apresuradamente o sin la planificación adecuada. Es la acumulación de soluciones rápidas, patrones inconsistentes y elecciones de diseño no planificadas que hacen que tu producto sea más difícil de usar, más difícil de mantener y más difícil de escalar.</p>

<p>A diferencia de la deuda técnica, que los desarrolladores entienden y discuten abiertamente, la deuda de diseño a menudo pasa desapercibida hasta que es demasiado tarde. Pero su impacto puede ser igual de severo, si no más, porque afecta directamente la experiencia de tus usuarios.</p>

<h2>El costo de la deuda de diseño</h2>

<p>La deuda de diseño puede ralentizar el desarrollo futuro porque cada nueva característica requiere trabajar alrededor de inconsistencias existentes. Impacta la experiencia del usuario porque las interfaces confusas reducen la adopción y aumentan los costos de soporte. Afecta tu marca porque el diseño inconsistente hace que tu producto se sienta poco profesional.</p>

<p>Más críticamente, la deuda de diseño se compone. Cuanto más esperes para abordarla, más cara se vuelve de arreglar. Lo que podría haber sido una refactorización simple temprano se convierte en un rediseño completo más tarde.</p>

<h2>Cómo se acumula la deuda de diseño</h2>

<p>La deuda de diseño a menudo comienza inocentemente. Necesitas una característica rápidamente, así que te saltas el proceso de diseño. Copias un patrón de otro producto sin considerar si se ajusta a tu contexto. Tomas decisiones de diseño "temporales" que se vuelven permanentes. Priorizas la velocidad sobre la consistencia.</p>

<p>Cada decisión parece pequeña en aislamiento, pero juntas crean un producto que es más difícil de usar y más difícil de mantener.</p>

<h2>Prevenir la deuda de diseño</h2>

<p>Comprender y abordar la deuda de diseño temprano es crucial para el éxito a largo plazo. Invierte en diseño por adelantado, incluso si sientes que te está ralentizando. Crea sistemas de diseño y patrones que puedan escalar. Haz que la consistencia sea una prioridad, no una idea tardía.</p>

<p>Si ya estás lidiando con deuda de diseño, no la ignores. Crea un plan para abordarla incrementalmente. Corrige los problemas más críticos primero, luego establece procesos para prevenir que se acumule nueva deuda.</p>

<p>Recuerda: cada producto tiene algo de deuda de diseño. La pregunta no es si la tendrás, sino cómo la gestionarás. Los mejores productos son construidos por equipos que reconocen la deuda de diseño temprano y la abordan proactivamente.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "your-mvp-is-missing-the-point",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5fe2481631ad4401f048b2d6_the-creativv-2YFpp3NvHy8-unsplash-p-800.jpeg",
		title: "Tu MVP está Perdiendo el Punto",
		date: "22 DE DICIEMBRE, 2020",
		category: "SAAS",
		excerpt: "¿Cómo definirías un MVP? Sí, creo que la mayoría de nosotros en el mundo de las startups tecnológicas sabemos que significa \"producto mínimo viable\". Pero, ¿cuál es el punto?",
		imageAlt: "Ilustración de linterna",
		content: `<p>¿Cómo definirías un MVP? Sí, creo que la mayoría de nosotros en el mundo de las startups tecnológicas sabemos que significa "producto mínimo viable". Todos hemos escuchado el término lanzado en círculos de startups, reuniones de inversionistas y discusiones de productos. Pero, ¿cuál es el punto?</p>

<p>Demasiados fundadores tratan al MVP como una excusa para enviar algo a medias. Se enfocan en la parte "mínimo": ¿qué es lo menos que podemos construir?, y olvidan la parte "viable". O peor, olvidan el propósito real: aprender.</p>

<h2>El propósito real de un MVP</h2>

<p>Un MVP debe tratarse de aprendizaje y validación, no solo de construir el producto más pequeño posible. El objetivo no es enviar rápido por el simple hecho de enviar rápido. El objetivo es aprender lo que necesitas saber para tomar mejores decisiones.</p>

<p>¿Qué necesitas aprender? ¿Los clientes realmente tienen este problema? ¿Pagarán por resolverlo? ¿Puedes resolverlo de una manera mejor que las alternativas? ¿Qué características importan más? ¿Cuál es tu estrategia de salida al mercado?</p>

<h2>Aprendizaje mínimo viable</h2>

<p>En lugar de preguntar "¿Qué es lo mínimo que podemos construir?" pregunta "¿Qué es lo mínimo que necesitamos aprender?" Concéntrate en lo que necesitas aprender para tomar mejores decisiones, no solo en lo que puedes construir rápidamente.</p>

<p>A veces, el aprendizaje mínimo viable requiere construir un producto. A veces requiere una página de destino, un prototipo o incluso solo conversaciones. La forma debe seguir el objetivo de aprendizaje, no al revés.</p>

<h2>Viable significa valioso</h2>

<p>El "viable" en MVP significa que tu producto debe entregar valor real, incluso si es mínimo. Un MVP que no resuelve un problema real o proporciona valor real no es viable, es solo un prototipo o una demostración.</p>

<p>Tu MVP debe ser algo que los clientes realmente usarían y potencialmente pagarían, incluso si le faltan características que planeas agregar más tarde. Si no es lo suficientemente valioso para los early adopters, no es un MVP.</p>

<h2>Ciclos de aprendizaje</h2>

<p>Piensa en tu MVP como la primera iteración en un ciclo de aprendizaje: construir, medir, aprender, repetir. Cada iteración debe enseñarte algo nuevo que informe la siguiente iteración. Cuanto más rápido puedas recorrer estos ciclos, más rápido construirás un producto que realmente sirva a tus clientes.</p>

<p>No caigas en la trampa de construir un MVP y luego moverte inmediatamente a "el producto real". Tu MVP debe informar tu producto real. Usa lo que aprendes para tomar mejores decisiones sobre qué construir a continuación.</p>

<p>Recuerda: un MVP no es un destino, es un punto de partida. Es tu primer paso hacia construir algo grandioso, no una excusa para construir algo mediocre.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "idea-to-version-1-how-do-i-get-started",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b92fdfd4bf0e27021d439_david-kovalenko-G85VuTpw6jg-unsplash-p-800.jpeg",
		title: "De la Idea a la Versión 1: ¿Cómo Empiezo?",
		date: "30 DE OCTUBRE, 2020",
		category: "SAAS",
		excerpt: "Identificar una oportunidad es un gran lugar para comenzar. Y obviamente, has estado lo suficientemente motivado para aprovechar el día y crear el cambio tan necesario en tu industria. El único problema es que no sabes por dónde empezar.",
		imageAlt: "Ilustración de botas de senderismo",
		content: `<p>Identificar una oportunidad es un gran lugar para comenzar. Has detectado una brecha en el mercado, identificado un problema que necesita resolverse o visto una manera de hacer algo mejor de lo que se ha hecho antes. Y obviamente, has estado lo suficientemente motivado para aprovechar el día y crear el cambio tan necesario en tu industria.</p>

<p>El único problema es que no sabes por dónde empezar. Tienes la idea, la motivación y tal vez incluso algo de validación temprana, pero el camino desde la idea hasta la versión 1 se siente abrumador. ¿Por dónde empiezas?</p>

<h2>Valida antes de construir</h2>

<p>Comienza validando tu idea con usuarios potenciales. Antes de escribir una sola línea de código o diseñar una sola pantalla, asegúrate de que la gente realmente quiera lo que planeas construir. Habla con clientes potenciales. Entiende sus problemas profundamente. Ve si tu solución resuena.</p>

<p>La validación no requiere un producto, requiere conversaciones. Haz preguntas, escucha atentamente y busca señales de que estás en el camino correcto. ¿La gente está emocionada? ¿Ven el valor? ¿Pagarían por ello?</p>

<h2>Comienza simple</h2>

<p>Construye un prototipo simple o una página de destino para probar el interés. No necesitas un producto completo para validar la demanda. Una página de destino simple con una propuesta de valor clara y una forma de capturar el interés puede decirte mucho. Un prototipo clicable puede ayudarte a probar la usabilidad antes de construir lo real.</p>

<p>El objetivo no es construir algo perfecto, es construir algo que te ayude a aprender. Cada iteración debe responder preguntas e informar el siguiente paso.</p>

<h2>Recopila retroalimentación temprano</h2>

<p>Recopila retroalimentación temprano e itera basándote en lo que aprendes. No esperes hasta que creas que tu producto está "listo" para mostrárselo a la gente. Cuanto antes obtengas retroalimentación, más fácil será hacer cambios. Cuanto más esperes, más apegado te volverás a tus ideas iniciales.</p>

<p>Crea un ciclo de retroalimentación: construye algo pequeño, muéstralo a los usuarios, aprende de sus reacciones y usa ese aprendizaje para informar lo que construyes a continuación. Repite este ciclo lo más rápido posible.</p>

<h2>Enfócate en una cosa</h2>

<p>Al construir la versión 1, concéntrate en hacer una cosa realmente bien en lugar de muchas cosas pobremente. Identifica la propuesta de valor central, lo único que hace que tu producto sea único y valioso, y haz que eso sea excepcional.</p>

<p>Puedes agregar características más tarde. Para la versión 1, clava la experiencia central. Hazla tan buena que los usuarios tempranos se conviertan en defensores, no solo en clientes.</p>

<h2>Envía y aprende</h2>

<p>Finalmente, recuerda que la versión 1 no es la línea de meta, es la línea de salida. Envía algo, aprende de cómo la gente lo usa e itera. Los mejores productos no se construyen en aislamiento; se refinan a través del uso en el mundo real.</p>

<p>El viaje desde la idea hasta la versión 1 se trata de aprender, iterar y mantenerse enfocado. Comienza con validación, construye algo simple, recopila retroalimentación y sigue iterando. Antes de que te des cuenta, tendrás la versión 1 y un camino claro hacia la versión 2.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	},
	{
		slug: "learning-the-core-of-successful-saas-startup",
		image: "https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b8ef55d4ba34a9d30655e_daniil-silantev-ioYwosPYC0U-unsplash-p-1080.jpeg",
		title: "Aprender: El Núcleo de una Startup SaaS Exitosa",
		date: "22 DE OCTUBRE, 2020",
		category: "SAAS",
		excerpt: "Una startup es una organización en busca de un modelo de negocio sostenible. Escuché esa definición en un evento en Colorado Springs hace unos años, y se me queda hasta el día de hoy como la forma más clara de identificar una startup.",
		imageAlt: "Mano sosteniendo un mapa examinándolo",
		content: `<p>Una startup es una organización en busca de un modelo de negocio sostenible. Escuché esa definición en un evento en Colorado Springs hace unos años, y se me queda hasta el día de hoy como la forma más clara de identificar una startup.</p>

<p>Piénsalo: las empresas establecidas tienen modelos de negocio probados. Saben quiénes son sus clientes, por qué pagarán y cómo entregar valor de manera rentable. Las startups, por definición, no tienen eso todavía. Están buscando, experimentando y aprendiendo su camino hacia un modelo de negocio sostenible.</p>

<h2>El aprendizaje es el núcleo</h2>

<p>El aprendizaje está en el núcleo de cada startup exitosa. Esto no se trata solo de leer libros o asistir a conferencias, se trata de aprendizaje sistemático y continuo a través de la experimentación y la retroalimentación.</p>

<p>Necesitas aprender sobre tus clientes: ¿Quiénes son realmente? ¿Qué problemas enfrentan? ¿Por qué están dispuestos a pagar? Necesitas aprender sobre tu mercado: ¿Quiénes son tus competidores? ¿Cuál es tu posicionamiento? ¿Qué tendencias están dando forma a tu industria?</p>

<p>Necesitas aprender sobre tu producto: ¿Resuelve problemas reales? ¿Es mejor que las alternativas? ¿Qué características importan más? Y necesitas aprender sobre tu modelo de negocio: ¿Cómo ganarás dinero? ¿Cuáles son tus economías unitarias? ¿Cómo escalarás?</p>

<h2>Abraza la incertidumbre</h2>

<p>Abraza la incertidumbre y construye una cultura de aprendizaje continuo. La mayoría de los fundadores se sienten incómodos con la incertidumbre. Quieren respuestas, planes y certeza. Pero las startups operan en la incertidumbre por definición. Cuanto más rápido puedas sentirte cómodo sin saber, más rápido podrás aprender lo que necesitas saber.</p>

<p>En lugar de pretender que tienes todas las respuestas, reconoce lo que no sabes. Crea hipótesis, pruébalas, aprende de los resultados y ajusta. Este ciclo de aprendizaje es cómo navegas desde la incertidumbre hacia la claridad.</p>

<h2>Construye el aprendizaje en tu proceso</h2>

<p>Haz del aprendizaje una parte sistemática de cómo operas. Configura ciclos de retroalimentación regulares con clientes. Crea experimentos para probar suposiciones. Mide lo que importa. Documenta lo que aprendes. Comparte ideas en todo tu equipo.</p>

<p>Las startups que tienen éxito no son las que tienen las mejores ideas iniciales, son las que aprenden más rápido. Son las que pueden identificar rápidamente lo que no está funcionando, pivotar cuando sea necesario y duplicar lo que sí está funcionando.</p>

<h2>Aprende del fracaso</h2>

<p>Finalmente, aprende del fracaso. No todos los experimentos funcionarán. No todas las hipótesis serán correctas. No todas las características resonarán. Eso está bien, siempre y cuando aprendas de ello.</p>

<p>El fracaso solo se desperdicia si no extraes aprendizaje de él. Cada experimento fallido te enseña algo. Cada suposición equivocada revela una verdad. Cada característica que no resuena te muestra lo que los usuarios realmente valoran.</p>

<p>Recuerda: no estás construyendo un producto, estás construyendo una organización de aprendizaje. El producto es solo el vehículo para aprender. Cuanto más rápido aprendas, más rápido encontrarás ese modelo de negocio sostenible. Y eso es lo que hace que una startup tenga éxito.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier es el fundador de Trailmerge, con amplia experiencia en diseño en diversas industrias y pasión por desarrollar talento tecnológico."
		}
	}
];

export function getPostBySlugEs(slug: string): BlogPost | undefined {
	return blogPostsEs.find(post => post.slug === slug);
}

export function getAllPostsEs(): BlogPost[] {
	return blogPostsEs;
}
