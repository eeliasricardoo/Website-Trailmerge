import { type BlogPost } from './blogPosts';

// Spanish translations of blog posts (titles, categories, excerpts)
export const blogPostsEs: BlogPost[] = [
	{
		slug: 'help-how-do-i-build-out-my-product-design-team',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/62c87755e04d61389fbc8d0b_gabriella-clare-marino-_NPCTr9XsGc-unsplash-p-800.jpeg',
		title: '¡Ayuda! ¿Cómo construyo mi equipo de diseño de producto?',
		date: '8 DE JULIO, 2022',
		category: 'EQUIPOS DE DISEÑO',
		excerpt:
			'En el mercado actual, los diseñadores son cada vez más valiosos para startups y empresas establecidas, y más empresas están comenzando a reconocer su beneficio para reducir la rotación, impulsar la adopción y mejorar la eficiencia de los usuarios. Un gran equipo de diseño puede ser la diferencia entre un buen producto y un producto estelar.',
		imageAlt: 'Ilustración de mochila de senderismo',
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
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'how-do-i-prioritize-features-part-2',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60c0cdd56e2414337cf33013_ran-berkovich-xU0ZD-TsmmU-unsplash-p-3200.jpeg',
		title: '¿Cómo priorizo funciones? Parte 2 de 2',
		date: '9 DE JUNIO, 2021',
		category: 'SAAS',
		excerpt:
			'En la primera parte de esta serie, discutimos puntos de datos centrados en el cliente que pueden ayudar a formar la estrategia de producto. Exploramos cómo comprender las necesidades, puntos de dolor y objetivos de tus usuarios debe ser la base de cualquier marco de priorización. Pero las necesidades del cliente por sí solas no cuentan toda la historia. El siguiente paso es mezclar las restricciones.',
		imageAlt: 'Ilustración de taza de café',
		content: `<p>En la primera parte de esta serie, discutimos puntos de datos centrados en el cliente que pueden ayudar a formar la estrategia de producto. Exploramos cómo comprender las necesidades, puntos de dolor y objetivos de tus usuarios debe ser la base de cualquier marco de priorización. Pero las necesidades del cliente por sí solas no cuentan toda la historia.</p>

<p>El siguiente paso es mezclar las restricciones. El desarrollo de productos del mundo real ocurre dentro de límites, y reconocer estas restricciones te ayuda a tomar decisiones más realistas y alcanzables.</p>

<h2>Restricciones técnicas</h2>

<p>Las restricciones técnicas incluyen tu stack tecnológico actual, limitaciones de infraestructura y la complejidad de implementar ciertas funciones. Algunas funciones pueden sonar geniales desde la perspectiva del cliente pero podrían requerir cambios arquitectónicos significativos o introducir deuda técnica.</p>

<p>Al evaluar funciones a través de una lente técnica, considera: ¿Cuánto tiempo tomará construir esto? ¿Qué dependencias crea? ¿Requerirá nueva infraestructura o servicios de terceros? ¿Se alinea con tu stack tecnológico actual, o requerirá nueva experiencia?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/Bw2icOlhL9Iv6/source.gif" alt="Constraints keep us from hurting ourselves" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Constraints keep us from hurting ourselves... most of the time. (via Giphy)</p>
</div>

<h2>Restricciones comerciales</h2>

<p>Las restricciones comerciales abarcan tu presupuesto, cronograma, posición en el mercado y objetivos estratégicos. Una función puede ser muy solicitada por los clientes, pero si no se alinea con tu modelo de negocio u objetivos de ingresos, podría no ser la prioridad correcta.</p>

<p>Considera preguntas como: ¿Esta función apoya nuestro modelo de negocio? ¿Nos ayudará a adquirir o retener clientes? ¿Nos diferencia de los competidores? ¿Es el momento adecuado en el ciclo de vida de nuestra empresa para construir esto?</p>

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

<p>El arte de la priorización viene de equilibrar las necesidades del cliente con estos tres tipos de restricciones. Una función que obtiene una puntuación alta en valor para el cliente pero baja en viabilidad podría necesitar esperar. Por el contrario, una función que es fácil de construir pero no sirve bien a los clientes probablemente no debería priorizarse.</p>

<p>Crea un marco que pese todos estos factores. Algunos equipos usan sistemas de puntuación, otros usan matrices, y algunos confían en discusiones estructuradas. El método importa menos que asegurarte de que estás considerando el panorama completo antes de tomar decisiones.</p>

<p>Recuerda, las restricciones no son necesariamente malas: te obligan a ser creativo y enfocado. Los mejores productos a menudo surgen de trabajar dentro de limitaciones, no de recursos ilimitados.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'how-do-i-prioritize-features-part-1',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60a813feba638c0e3ef14854_valery-fedotov-CqX6IhVj2TI-unsplash-p-3200.jpeg',
		title: '¿Cómo priorizo funciones? Parte 1 de 2',
		date: '21 DE MAYO, 2021',
		category: 'SAAS',
		excerpt:
			'Si eres fundador de una startup o líder de producto, es probable que no tengas problemas para soñar en grande. Tu tablero de visión probablemente está desbordado con funciones que revolucionarían tu industria, deleitarían a tus usuarios y harían llorar a tus competidores. Pero sigues encontrándote con las mismas dos molestas restricciones al construir el producto de ensueño para dominar tu industria: tiempo y dinero.',
		imageAlt: 'Ilustración de binoculares',
		content: `<p>Si eres fundador de una startup o líder de producto, es probable que no tengas problemas para soñar en grande. Tu tablero de visión probablemente está desbordado con funciones que revolucionarían tu industria, deleitarían a tus usuarios y harían llorar a tus competidores. Pero sigues encontrándote con las mismas dos molestas restricciones al construir el producto de ensueño para dominar tu industria: tiempo y dinero.</p>

<p>Cada solicitud de función se siente urgente. Cada sesión de retroalimentación del cliente revela otra capacidad "imprescindible". Cada lanzamiento de competidor te hace cuestionar tu hoja de ruta. Entonces, ¿cómo decides qué construir primero?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/lHBbcpFTS5c2Y/giphy.gif" alt="DON'T CARE HOW I WANT IT NOW" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">When dev says it will take years to build (via Giphy)</p>
</div>

<p>Construir tu producto en fases tiene varios beneficios. Te obliga a priorizar lo que es verdaderamente importante, te permite adaptarte basándote en la retroalimentación del cliente y te ayuda a llegar al mercado más rápido. Pero, ¿cómo decides qué va en la fase uno versus la fase dos?</p>

<h2>Recuerda Para Quién Estás Construyendo</h2>

<p>Antes de poder priorizar funciones efectivamente, necesitas entender para quién estás construyendo. Esto significa ir más allá de las personas genéricas de usuario y entender las necesidades específicas, puntos de dolor y objetivos de tu audiencia objetivo. ¿Estás construyendo para clientes empresariales que necesitan funciones robustas de seguridad y cumplimiento? ¿O estás dirigiendo a pequeñas empresas que necesitan simplicidad y configuración rápida?</p>

<p>Entender tu audiencia objetivo te ayuda a tomar mejores decisiones sobre qué funciones importan más. Una función que es crítica para un segmento de usuario podría ser irrelevante para otro. Cuanto más específico puedas ser sobre para quién estás construyendo, más fácil se vuelve priorizar.</p>

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

<p>Para muchos productos, especialmente B2B SaaS, ciertas funciones son esenciales para cerrar tratos. Estas son las funciones que los prospectos preguntan durante las llamadas de ventas, las capacidades que te diferencian de los competidores y la funcionalidad que justifica tu precio.</p>

<p>Entender qué funciones impulsan las ventas requiere hablar con tu equipo de ventas, analizar datos de ganancia/pérdida y escuchar lo que los prospectos realmente dicen durante las demostraciones. ¿Qué funciones los emocionan? ¿Qué capacidades piden? ¿Qué preocupaciones plantean que los hacen alejarse?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/443jTW1yjUiwXOlQ2g/source.gif" alt="What do your potential customers actually want to buy?" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">What do your potential customers actually want to buy? (via Giphy)</p>
</div>

<p>Es importante distinguir entre lo que los prospectos dicen que quieren y lo que realmente necesitan. Las personas a menudo piden funciones basadas en lo que han visto en otros productos, no necesariamente lo que resolvería sus problemas específicos. Confía en los datos de comportamiento pasado: ¿qué funciones usan realmente tus clientes actuales? ¿Qué flujos de trabajo siguen? ¿Qué problemas resuelven con tu producto?</p>

<h2>Próximos pasos: Aplicar Restricciones</h2>

<p>Entender las necesidades del cliente, los problemas de usabilidad y los impulsores de ventas es solo el primer paso. En la parte dos de esta serie, exploraremos cómo equilibrar estas prioridades centradas en el cliente con restricciones del mundo real: limitaciones técnicas, requisitos comerciales y disponibilidad de recursos. Porque incluso las funciones más importantes necesitan ser factibles de construir.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'how-to-ask-good-questions-when-building-saas-product',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/6080815fbafc572380901b88_artem-maltsev-0CvHQ62gwY8-unsplash-p-800.jpeg',
		title: 'Cómo hacer buenas preguntas al construir un producto SaaS',
		date: '21 DE ABRIL, 2021',
		category: 'SAAS',
		excerpt:
			'Como instructor en General Assembly, una de las principales cosas que quería que mi cohorte se llevara del programa intensivo de diseño UX de 10 semanas era esto: cómo hacer las preguntas correctas. Los píxeles son geniales y todo eso, pero las buenas preguntas son la base del buen diseño.',
		imageAlt: 'Ilustración de brújula',
		imageCredit: 'Blog Photo by Artem Maltsev on Unsplash',
		content: `<p>Como instructor en General Assembly, una de las principales cosas que quería que mi cohorte se llevara del programa intensivo de diseño UX de 10 semanas era esto: cómo hacer las preguntas correctas.</p>

<p>Los píxeles son geniales y todo eso – y, sin duda, definen el resultado del trabajo que hacemos como diseñadores de productos. Pero las buenas preguntas son la base del buen diseño, y necesitarás saber cómo hacerlas si estás interesado en identificar qué funciones y funcionalidades tendrán un impacto en tu mercado.</p>

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
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'lets-talk-design-debt',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/606db17540b5ef6754da71c6_ruth-enyedi-zuwx2tvI_iM-unsplash(1)-p-800.jpeg',
		title: 'Hablemos de deuda de diseño: ¿Qué es y qué me podría costar?',
		date: '7 DE ABRIL, 2021',
		category: 'SAAS',
		excerpt:
			'Imagina conmigo por un segundo. Eres un fundador no técnico con un concepto B2B SaaS increíble. Sabes que necesitas contratar a un desarrollador para construir tu producto de software y has escuchado que nadie quiere invertir en tu startup hasta que tengas algo construido, así que vas directamente al desarrollador o tienda de desarrollo que tu amigo recomendó.',
		imageAlt: 'Ilustración de nudo',
		content: `<p>Imagina conmigo por un segundo. Eres un fundador no técnico con un concepto B2B SaaS increíble. Sabes que necesitas contratar a un desarrollador para construir tu producto de software y has escuchado que nadie quiere invertir en tu startup hasta que tengas algo construido, así que vas directamente al desarrollador o tienda de desarrollo que tu amigo recomendó.</p>

<p>El desarrollador toma tu dinero y tus requisitos y se pone a trabajar. Te comunicas de ida y vuelta sobre requisitos y restricciones técnicas que entiendes un poco y has tomado decisiones lo mejor que puedes basándote en esas conversaciones. En cuanto al diseño, has esbozado algunos flujos y wireframes improvisados. Tu desarrollador ha tomado esos y los ha interpretado, tomando varias decisiones de diseño al construir el producto. $30,000 dólares y 6 meses después, tienes un producto.</p>

<p>Lanzas y obtienes algo de interés inicial, pero no lo suficiente para realmente obtener la tracción que buscas. Tus clientes hacen algunas solicitudes de funciones, así que gastas otros $50,000 durante los próximos 6 meses construyendo estas funciones. La buena noticia: Has obtenido algunas funciones geniales durante ese tiempo y a medida que te vuelves más competitivo en tu oferta de funciones, estás viendo más ingresos entrando. Ahora tienes una base de clientes de tamaño decente.</p>

<p>Con todos estos clientes, hay un conjunto completamente nuevo de problemas. Estás viendo montones de tickets de soporte llegando sobre flujos de trabajo frustrantes, funciones que no funcionan como se esperaba, y errores apareciendo que los clientes no saben cómo interpretar o resolver. El tiempo dedicado a apoyar a los clientes se está disparando, y con eso tienes que pagar ayuda adicional en soporte al cliente y desarrollo. ¡Ay! Has golpeado el impacto inicial de la deuda de diseño.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/l0HlNmF2VCrXqjlSM/giphy.gif" alt="Wait, what?" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Wait, what? (via Giphy)</p>
</div>

<p>Pero eso es solo el comienzo. Comienzas a trabajar con tu equipo de desarrollo para arreglar problemas de diseño donde puedes identificarlos, desviando tiempo valioso de nuevas funciones y proyectos estratégicos.</p>

<p>Finalmente, escuchas sobre cómo traer un diseñador UX puede ayudar. Gastas el tiempo y el dinero para reclutar y poner al nuevo diseñador al día. El diseñador audita la plataforma actual y recomienda un rediseño, que podría tomar más tiempo que la construcción original. Puedes obtener algunas funciones nuevas deslizadas en el rediseño, pero el tiempo y el esfuerzo te cuestan un año de tiempo valioso solo reconfigurando las bases actuales en lugar de hacer más progreso. Mientras tanto, estás tambaleándote por la rotación excesiva y el daño a la reputación de tu marca en el mercado. ¡Bam! Ahora estás encontrando el costo completo de la deuda de diseño.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/ESt8At0PXpmj6/giphy.gif" alt="That cost more than expected!" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">That cost more than expected! (via Giphy)</p>
</div>

<p>La gran mayoría de los desarrolladores con los que he trabajado (o cuyo trabajo he heredado) no son grandes diseñadores. Eso podría sonar como si estuviera echando a mis amigos en ingeniería bajo el autobús (lo siento, todos), pero honestamente, la misma razón por la que son desarrolladores increíbles es por la que no deberían estar haciendo diseño.</p>

<p>Los desarrolladores están muy sintonizados con la tecnología con la que trabajan – restricciones, funcionalidad, posibilidades. Son superestrellas traduciendo requisitos definidos en software funcional de la manera más eficiente posible. Los desarrolladores prosperan en lenguaje técnico y flujos de trabajo técnicos, y a menudo están demasiado familiarizados con la tecnología y la forma en que han construido la plataforma para realmente empatizar con la experiencia de un usuario no técnico.</p>

<p>Los diseñadores, por otro lado, se enfocan en representar la perspectiva de los usuarios. Los usuarios no técnicos, en general, no entienden la diferencia entre un error 404 y un error 500. Los usuarios a menudo no ven el botón "claramente etiquetado" que los desarrolladores pueden señalar rápidamente debido a las cientos de horas que han pasado construyendo los flujos de trabajo correspondientes.</p>

<p>Este enfoque en la experiencia de los usuarios, mejorado a través de la realización de investigación de usuarios, permite a los diseñadores de productos SaaS diseñar estructuras de datos, flujos de trabajo, navegación, diseño, mensajería en la aplicación e interacciones que intuitivamente tienen sentido para los usuarios. Uno de los conceptos erróneos comunes es que los diseñadores UX son traídos para hacer que la UI se vea bonita. Si bien los diseñadores ciertamente se enorgullecen de la excelencia estética y en entregar deleite, está lejos de ser el único entregable. En esencia, los diseñadores UX definen los detalles de los requisitos que un desarrollador construirá, contados desde el punto de vista de un usuario.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/606db410c105305eba75446e_Design%20Debt%20Chart.png" alt="Cost to change a design over time" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Cost to change a design over time (Hint: it costs a lot more once it's built!)</p>
</div>

<p>Los diseñadores UX son los arquitectos y los desarrolladores son los constructores. Imagina saltar directamente a contratar una tripulación de construcción para construir tu nuevo rascacielos sin ningún arquitecto involucrado en el proceso hasta que las primeras 15 historias se hayan completado. La analogía se descompone hasta cierto punto en que el software es un proceso iterativo. Pero las iteraciones pueden ser extremadamente costosas si las personas correctas no están involucradas en el momento correcto.</p>

<p>Entonces, ¿cuál es el escenario alternativo? ¿Cuál es la recomendación? Trae apoyo de diseño temprano, antes de que el desarrollo comience a construir. Una hora del tiempo de un diseñador senior es mucho menos costosa que una hora cada una multiplicada por los múltiples desarrolladores que tomará construir el diseño.</p>

<p>Siempre habrá algo de deuda de diseño que se acumule en un entorno SaaS Agile iterativo, pero trabajar con un socio de diseño experimentado, como Trailmerge, desde el principio y a largo plazo puede ayudarte a reducir dramáticamente la severidad de las necesidades de soporte y re-trabajo en un momento en que quieres estar enfocado en el crecimiento.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'your-mvp-is-missing-the-point',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5fe2481631ad4401f048b2d6_the-creativv-2YFpp3NvHy8-unsplash-p-800.jpeg',
		title: 'Tu MVP está perdiendo el punto',
		date: '22 DE DICIEMBRE, 2020',
		category: 'SAAS',
		excerpt:
			'¿Cómo definirías un MVP? Sí, creo que la mayoría de nosotros en el mundo de las startups tecnológicas sabemos que significa "producto mínimo viable". Pero, ¿cuál es el punto? Bueno, a menudo he visto este término usado para significar "¡un pedazo de software arrojado rápidamente para sacar algo por la puerta para que podamos empezar a ganar dinero con este chico malo!"',
		imageAlt: 'Ilustración de linterna',
		content: `<p>¿Cómo definirías un MVP?</p>

<p>Sí, creo que la mayoría de nosotros en el mundo de las startups tecnológicas sabemos que significa "producto mínimo viable". Pero, ¿cuál es el punto?</p>

<p>Bueno, a menudo he visto este término usado para significar "¡un pedazo de software arrojado rápidamente para sacar algo por la puerta para que podamos empezar a ganar dinero con este chico malo!"</p>

<p>Espera – asegurémonos de ir en la dirección correcta primero antes de hundir todo este dinero en un costoso Campo de los Sueños, edición SaaS.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/qVtmVS0eailqg/source.gif" alt="Field of Dreams" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Works for rando baseball ghosts in a cornfield, but not so much in SaaS. (via Giphy)</p>
</div>

<p>Primero, un MVP no siempre es software, incluso si el objetivo final tiene que ver con software.</p>

<p>Eric Reis (en Lean Startup) y Steve Blank (en The Startup Owner's Manual) ambos dan ejemplos de MVPs que no son solo versiones beta del producto eventual.</p>

<p>El ejemplo frecuentemente citado de Reis es el de Zappos, un minorista de zapatos en línea que fue adquirido por Amazon, cuyo MVP involucró una plataforma existente y zapatos comprados bajo demanda de tiendas de zapatos locales – más sobre esto en un segundo.</p>

<p>Blank, por otro lado, menciona que una simple página de destino puede actuar como un MVP.</p>

<p>Ok, seguro, pero ¿cómo?</p>

<p>Bueno, ahora sería un buen momento para volver al propósito de un MVP. Realmente aprecio los pensamientos de Rik Higham sobre el tema en su artículo de Hacker Noon hace unos años:</p>

<p>"Hay un defecto en el corazón del término Producto Mínimo Viable: no es un producto. Es una forma de probar si has encontrado un problema que vale la pena resolver."</p>

<p>En su artículo, continúa afirmando que deberíamos estar enfocados en probar nuestra suposición más riesgosa con la menor cantidad posible de esfuerzo y costo. Cuando comenzamos un negocio, tenemos una idea para un producto, o incluso solo comenzamos a trabajar en nuevas funciones, llevamos una serie de suposiciones con nosotros:</p>

<ul>
	<li>Muchas personas están lidiando con este problema y están motivadas para resolverlo.</li>
	<li>Las personas están dispuestas a invertir dinero, tiempo, esfuerzo para adoptar una solución al problema.</li>
	<li>Suficiente del mercado querrá mi solución particular a este problema.</li>
	<li>Puedo crear un negocio sostenible alrededor de resolver este problema.</li>
</ul>

<p>La lista continúa y continúa. Y algunas suposiciones llevan un riesgo mucho mayor que otras. Por ejemplo, la suposición de que "Los usuarios disfrutarán de animaciones ilustradas lindas en la aplicación" es mucho menos riesgosa que la suposición de que "Los usuarios estarán dispuestos a proporcionarnos su información de cuenta bancaria para usar la función principal de nuestra aplicación." La experiencia del usuario no sufrirá mucho (y la línea de fondo aún menos) si las personas no aman al 100% el patito bailarín lindo en tu pantalla de confirmación, pero una actitud que determina la adopción de la parte principal de tu solución puede ser decisiva para todo tu negocio.</p>

<p>Zappos fue construido probando una suposición riesgosa antes de construir una plataforma: "Las personas estarán dispuestas a comprar zapatos que no han probado en una tienda." Airbnb tuvo que probar la suposición de que los estadounidenses estarían dispuestos a abrir sus hogares a completos extraños, y a su vez, quedarse en hogares de extraños. En las primeras etapas, una página de destino puede funcionar para probar si el mercado objetivo se emociona con un concepto o se identifica con un problema.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/vmv47p4zksWDC/source.gif" alt="Test it out" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Test it out, see if it will come to life! (via Giphy)</p>
</div>

<p>Hace unos años, realicé trabajo de investigación y diseño para un fundador con un concepto de mercado de dos lados. En lugar de construir toda la aplicación para comenzar, encontró éxito probando el valor de su servicio a través de un Formulario de Google y llamadas telefónicas, coordinando manualmente los dos lados del mercado de una manera que reflejaba la coordinación que la plataforma realizaría automáticamente en el futuro.</p>

<p>Puede ser simple – Comienza con esto:</p>

<ul>
	<li>Enumera tus suposiciones más riesgosas. Pide a compañeros, miembros del equipo y/o expertos externos que te ayuden a identificar suposiciones subconscientes.</li>
	<li>Desarrolla un plan para probar la próxima gran suposición. Por ejemplo, podrías ser capaz de probar la suposición de que "los agentes inmobiliarios estarán dispuestos a comprar este producto" usando maquetas de algunas pantallas y una página de destino. Un prototipo podría hacer el truco en otros casos. Una aplicación completamente construida podría ser necesaria (aunque debería, en la mayoría de los casos, ser construida en lanzamientos Agile en pequeños bocados para un aprendizaje óptimo), o algunas videollamadas con personas que encajan en tu mercado objetivo pueden decirte todo lo que necesitas saber. Involucrar un equipo de diseño UX como Trailmerge temprano en el proceso puede ser una forma rentable de llegar rápidamente a aprendizajes clave.</li>
</ul>

<p>Recuerda: La actividad central de una startup es aprender y mejorar con el objetivo de un modelo de negocio sostenible. Entender las suposiciones que llevas y probarlas una por una estilo método científico es un paso clave para aprender y tener éxito, ¡y puede comenzar pequeño!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'idea-to-version-1-how-do-i-get-started',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b92fdfd4bf0e27021d439_david-kovalenko-G85VuTpw6jg-unsplash-p-800.jpeg',
		title: 'De la idea a la versión 1: ¿Cómo empiezo?',
		date: '30 DE OCTUBRE, 2020',
		category: 'SAAS',
		excerpt:
			'Los fundadores de SaaS B2B vienen en una variedad de formas. A menudo, no son los genios tecnológicos que se emocionan con los pros y los contras de las últimas bibliotecas y marcos de Javascript. En muchos casos, no son diseñadores UX o gerentes de producto que decidieron ramificarse para crear un nuevo producto. Son personas de antecedentes no técnicos que han visto una oportunidad para servir a su industria.',
		imageAlt: 'Ilustración de botas de senderismo',
		content: `<p>Los fundadores de SaaS B2B vienen en una variedad de formas. A menudo, no son los genios tecnológicos que se emocionan con los pros y los contras de las últimas bibliotecas y marcos de Javascript. En muchos casos, no son diseñadores UX o gerentes de producto que decidieron ramificarse para crear un nuevo producto.</p>

<p>Son personas (esto podría describirte) de antecedentes no técnicos que han visto una oportunidad para servir a su industria – ya sea finanzas, atención médica, bienes raíces, logística, retail, contabilidad, educación – con tecnología efectiva. Podría ser que hayas tenido una epifanía sobre un mercado abierto para un flujo de trabajo que no ha sido tocado por la transformación digital, o podría ser que hayas sentido el dolor de lidiar con un software terrible y sobrevalorado en tu industria.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/bPCwGUF2sKjyE/source.gif" alt="Todos queremos golpear nuestras computadoras de vez en cuando" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Todos queremos golpear nuestras computadoras de vez en cuando. (via Giphy)</p>
</div>

<p>Increíble. Identificar una oportunidad es un gran lugar para comenzar. Y obviamente, has estado lo suficientemente motivado para aprovechar el día y crear el cambio tan necesario en tu industria. El único problema es que no sabes por dónde empezar. Construir un producto de software – y una empresa alrededor de ese producto – es una tarea inmensamente compleja, sin duda, y si eres un fundador no técnico, puede sentirse como si estuvieras entrando en un mundo diferente con un idioma diferente y un enfoque muy diferente de cómo se hacen las cosas.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/SRx5tBBrTQOBi/source.gif" alt="No tengo idea de lo que estoy haciendo" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">No tengo idea de lo que estoy haciendo. (via Giphy)</p>
</div>

<p>Con eso, aquí hay algunas preguntas rápidas para considerar:</p>

<p><strong>1. ¿Para quién estoy construyendo esto?</strong></p>

<p>Bueno, te diré esto: no estás construyendo tu plataforma para ti. Claro, es posible que hayas encontrado muchos problemas con la forma actual de hacer las cosas en tu industria y es posible que tengas muchas ideas geniales sobre cómo resolver esos problemas. Pero hay un par de grandes suposiciones aquí: 1) Tu experiencia es casi idéntica a la de tus usuarios. 2) Tus soluciones resolverán los problemas que identificaste casi perfectamente.</p>

<p>Seamos honestos – has comenzado este negocio con una gran visión e ideas sólidas, pero también eres solo una persona y no te vas a pagar a ti mismo para usar tu producto. Además, ya estás lo suficientemente comprometido con tu idea como para tener un sesgo hacia ella. Está bien, eso es solo natural. Ahora eres un fundador de SaaS. Ya no estás en los mismos zapatos que tus clientes. Entonces, necesitamos entender quién es el cliente real para refinar la visión y hacer que la solución sea aún mejor y más valiosa para el mercado.</p>

<p>¿Entonces quién es? ¿Agentes de arrendamiento en grandes complejos de apartamentos urbanos? ¿Propietarios de viñedos? ¿Promotores de eventos deportivos?</p>

<p>Ahora, puedes comenzar a construir una base de investigación de mercado y usuarios: ¿Qué herramientas usan? ¿Cuáles son sus motivadores? ¿Cuáles son sus necesidades? ¿Cuáles son sus presupuestos? ¿Cuáles son los obstáculos para adoptar nuevas tecnologías?</p>

<p><strong>2. ¿Qué exactamente estoy construyendo?</strong></p>

<p>Ya has llegado a la mesa con una idea que vale la pena investigar e invertir. Tienes una visión a largo plazo para una solución única. Pero hay muchos detalles que necesitan resolverse. Varias formas de investigación, así como una buena comprensión de las dependencias de funciones, te ayudarán a dar definición a la visión a bajo costo.</p>

<p>Aquí es donde entran la gestión de productos y el diseño UX. Si te adelantas a construir, corres el riesgo de incurrir en una deuda de diseño significativa y gastar mucho dinero en un alcance mal definido. Hay muchas cosas en las que pensar que surgen a lo largo del proceso de creación de software:</p>

<ul>
	<li>¿Qué funciones deberían incluirse en el primer lanzamiento (pista: piensa en pequeño y enfócate en lo que puedes aprender)?</li>
	<li>¿Qué debería pasar cuando el usuario hace clic en esto?</li>
	<li>¿Qué tipos de entradas permitiremos en este campo?</li>
	<li>¿Cómo debería organizarse la navegación?</li>
	<li>¿Cómo se ve el flujo de trabajo del usuario al completar la tarea principal?</li>
	<li>¿Cómo deberían relacionarse las diferentes piezas de datos entre sí?</li>
	<li>¿Qué componentes se necesitarán para construir el front-end y cómo deberían verse?</li>
</ul>

<p>Definir este tipo de preguntas puede tomar bastante esfuerzo, pero hacerlo con las ideas proporcionadas por la investigación y dentro de los parámetros de una estrategia de producto bien definida puede ahorrar en costosas reconfiguraciones de desarrollo más adelante.</p>

<p><strong>3. ¿Quién lo va a construir?</strong></p>

<p>Como puedes ver, construir va más allá del desarrollo, y asociarse con un equipo de diseño de productos SaaS como Trailmerge puede ser valioso para aliviar parte de la carga de tus hombros, guiándote hacia y a través de la etapa de desarrollo y el lanzamiento de tu primera pieza de software orientada al cliente.</p>

<p>En cuanto al equipo de desarrollo en sí, piensa en la pila tecnológica que quieres usar, tus restricciones presupuestarias, zonas horarias y los términos de la relación. Querrás encontrar un equipo que conozca la tecnología que estás apuntando (Por ejemplo, ¿estás construyendo una aplicación móvil nativa, una aplicación de escritorio o una aplicación web?), con quien puedas comunicarte fácilmente en tu flujo de trabajo diario, y que encaje en la estrategia a largo plazo para tu negocio. Estamos felices de ayudarte a pensar en estas grandes preguntas también.</p>

<p>Bueno, ahí lo tienes. Has encontrado la oportunidad, vas por ella, y ahora estás armado con algunas preguntas para hacerte a ti mismo. Gran parte de construir una startup es aprender, y las respuestas a estas preguntas te ayudarán a avanzar. ¡Sigue adelante – estamos animándote!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
	{
		slug: 'learning-the-core-of-successful-saas-startup',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b8ef55d4ba34a9d30655e_daniil-silantev-ioYwosPYC0U-unsplash-p-1080.jpeg',
		title: 'Aprender: El núcleo de una startup SaaS exitosa',
		date: '29 DE OCTUBRE, 2020',
		category: 'SAAS',
		excerpt:
			'Una startup es una organización en busca de un modelo de negocio sostenible. Escuché esa definición en un evento en Colorado Springs hace unos años, y se me queda hasta el día de hoy como la forma más clara de identificar una startup. "Startup" no es una descripción de la edad, el tamaño, la popularidad o los ingresos de una empresa.',
		imageAlt: 'Mano sosteniendo un mapa examinándolo',
		content: `<p>Una startup es una organización en busca de un modelo de negocio sostenible.</p>

<p>Escuché esa definición en un evento en Colorado Springs hace unos años, y se me queda hasta el día de hoy como la forma más clara de identificar una startup. "Startup" no es una descripción de la edad, el tamaño, la popularidad o los ingresos de una empresa. Todavía podemos etiquetar justificadamente entidades grandes y conocidas como DoorDash, Airbnb y Slack como startups. Todavía están aprendiendo y buscando un modelo de negocio sostenible que se escale continuamente (¡y lo han estado haciendo muy bien hasta ahora!).</p>

<p>Hoy, nos vamos a enfocar en un solo elemento de esta definición: "en busca de".</p>

<p>Comenzamos nuevas empresas con una idea, una pasión o un deseo de ganar dinero. Pensamos en la gran salida, soñamos con el éxito y hacemos planes. Y seamos claros – esto no es algo malo. ¡La visión es importante!</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/12xvz9NssSkaS4/giphy.gif" alt="Nos vemos en el futuro" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Nos vemos en el futuro. (via Giphy)</p>
</div>

<p>Pero en el núcleo de una búsqueda exitosa de un modelo de negocio sostenible, debe haber aprendizaje.</p>

<p>Piensa en ello: Estamos empezando desde cero. Los fundadores de SaaS no son franquiciados, a quienes se les entrega un modelo de negocio empaquetado y ya probado para replicar. Necesitamos definir nuevos procesos en cada área del negocio: producto, diseño, desarrollo, ventas, marketing, operaciones de clientes, finanzas, recursos humanos. Necesitamos probar las aguas de los canales de distribución, los paisajes competitivos, las ofertas de productos, las estrategias de precios y más.</p>

<p>Lo que hemos hecho en otros lugares ciertamente informará lo que intentamos en este nuevo contexto, pero siempre hay nuevas variables en cada nueva startup – nuevos mercados, nuevos miembros del equipo, nuevos usuarios, nuevos compradores. Si bien pude transferir algunas mejores prácticas de mi tiempo trabajando con el equipo de UX empresarial en The Home Depot, dirigir un equipo de diseño dentro de UserIQ, una startup SaaS de éxito del cliente, es un entorno muy diferente con demandas y consideraciones únicas. La forma en que funcionó antes no va a ser cómo funcionará esta vez.</p>

<p>Entonces, ¿qué estamos tratando de aprender con cada uno de los esfuerzos de nuestra empresa? Un buen lugar para comenzar es haciendo un inventario de nuestras suposiciones, luego poniéndolas a prueba. Aquí hay algunos pasos prácticos que podemos tomar para aprender en nuestras operaciones diarias:</p>

<ul>
	<li>La investigación generativa (encuestas, entrevistas con usuarios, investigación observacional) puede darnos información sobre las motivaciones, puntos de dolor y comportamientos de clientes y usuarios.</li>
	<li>Los prototipos pueden decirnos sobre la usabilidad y deseabilidad de nuestro producto antes de que gastemos un montón de dinero en desarrollo, y pueden incluso usarse para iniciar conversaciones de ventas con clientes.</li>
	<li>A través de un producto temprano, podemos aprender sobre qué funciones son realmente valoradas, qué mejoras solicitan los clientes y qué tan bien nuestra dirección se ajusta al mercado que estamos apuntando.</li>
	<li>Nuestras campañas de marketing no son solo un producto final – Pueden ser fuentes de información valiosa si estamos escuchando.</li>
	<li>Ejecutar standups y retrospectivas regulares del equipo en un entorno de apoyo y reflexivo puede llevarnos de procesos crudos a colaboración bien definida en la que los miembros del equipo pueden prosperar y la eficiencia se optimiza.</li>
</ul>

<p>Y rodearte de personas conocedoras con diferentes perspectivas y énfasis – empleados, proveedores, agencias y socios estratégicos – puede ser una experiencia de aprendizaje valiosa para impulsarte hacia adelante.</p>

<p>Por supuesto, el aprendizaje solo no nos va a impulsar al éxito. Debemos tener la voluntad y el coraje de adaptarnos, cambiar de rumbo e incluso *suspira* decir no a algunas de las cosas que hemos imaginado. Se trata de humildad, tenacidad y un deseo de mejorar. ¡Así es como comenzamos!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'El fundador Mark Tegtmeier aporta años de experiencia en diseño a Trailmerge. Ha trabajado con startups en etapa temprana, agencias de diseño y software, gobierno y empresas, impulsándolos más allá en su visión de producto. Esposo de una, padre de cuatro y homesteader urbano, Mark ama desarrollar talento tecnológico y acompañar a fundadores con visiones ambiciosas para sus productos y empresas.',
		},
	},
];

export function getPostBySlugEs(slug: string): BlogPost | undefined {
	return blogPostsEs.find((post) => post.slug === slug);
}

export function getAllPostsEs(): BlogPost[] {
	return blogPostsEs;
}
