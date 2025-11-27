export interface BlogPost {
	slug: string;
	image: string;
	title: string;
	date: string;
	category: string;
	excerpt: string;
	imageAlt: string;
	content: string;
	author: {
		name: string;
		image: string;
		bio: string;
	};
	imageCredit?: string;
	fromStudioCMS?: boolean;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'help-how-do-i-build-out-my-product-design-team',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/62c87755e04d61389fbc8d0b_gabriella-clare-marino-_NPCTr9XsGc-unsplash-p-800.jpeg',
		title: 'Help! How do I build out my product design team?',
		date: 'JULY 8, 2022',
		category: 'DESIGN TEAMS',
		excerpt:
			"In today's market, designers are becoming increasingly valuable for startups and established companies alike, and more companies are starting to recognize their benefit to reducing churn, driving adoption, and improving users' efficiency. A great design team can be the difference between a good product and a stellar product.",
		imageAlt: 'Hiking backpack illustration',
		content: `<p>In today's market, designers are becoming increasingly valuable for startups and established companies alike, and more companies are starting to recognize their benefit to reducing churn, driving adoption, and improving users' efficiency. A great design team can be the difference between a good product and a stellar product.</p>

<p>Yet, hiring and finding effective designers can be time-consuming and challenging.</p>

<h2>Start with a leader</h2>

<p>As a head of product looking to make your first full-time design hires or the head of design looking to build out the team, how do you even begin? Here are a few tips and strategies I've learned along the way during my journey in the world of product design.</p>

<p>For those just beginning to build a design team, in most cases, I'd recommend starting by hiring a lead designer or player-coach head of design. Someone with a strong end-to-end product design skill set and some leadership experience is ideal – someone motivated to do hands-on work, establish the company's design processes, and build a great design culture will be worth their weight in gold. Forming a team from the "top down" helps ensure that the design team will start off with expertise, as well as the ability to mentor incoming designers who are more junior.</p>

<h2>Team size and structure</h2>

<p>Once your first design leader is in place (or maybe that's you!), consider how many designers you'll need for the next 6-12 months. A good rule of thumb is to consider the ratio of designers to engineers. Generally, I've found that having 4-10 developers per designer works well for balancing the design and engineering workload. That number of engineers per designer should be higher for back-end heavy products and lower for front-end heavy ones.</p>

<p>Next, you'll need to decide on which structure you want to adopt for your teams. I've seen an agency model work well for smaller companies with one or two engineering teams. In this approach, designers are assigned projects but may be overall less integrated with the engineers and the rest of the company.</p>

<p>A matrixed model, on the other hand, assigns designers (usually all reporting into a common design manager or director) to different cross-functional teams, which each typically consist of one product manager, one designer, and a team of engineers, working together to accomplish their goal. In this kind of environment, researchers and other roles may either be embedded in each team or work agency-style across multiple teams.</p>

<p>The model you choose will depend on the size of your company as well as the nature of your business, and even the same kind of structure can have unique flavors in different contexts. Be flexible and willing to adjust if something isn't working well or if another structure will better utilize the strengths of your team.</p>

<h2>Seniority and skill sets</h2>

<p>Finally, you'll need to consider what level(s) and role(s) you'll want to hire for your new team. Senior designers will obviously provide more experience and hard-earned wisdom. Junior designers can bring energy and fresh fire to help fill out a team. You'll need to ensure you have the bandwidth on the team (or in your own schedule) to invest in their growth, but in my experience, bringing in the right juniors is well worth it with the passion, unique perspective, and growth they contribute to the team. Either way, it's vital to hire people with a growth mindset: seniors who are passionate about mentoring others while continuing to grow themselves, and juniors who are eager to learn.</p>

<p>In addition to level, you'll want to evaluate if generalists or specialists designers will best serve your needs. Generalists are responsible for everything throughout the process (called "end-to-end" design) – research, wireframing, prototyping, working with developers, etc, and are great for matrixed teams and new teams alike. On the other hand, specialists will hone in on a specific area, such as research, design operations, etc. and are great additions to a growing design org. Ultimately, either approach can work well, as long as you make sure you have a balance of skill sets.</p>

<p>Though forming a design team can be a daunting task, with time and patience the results will be worth all of the effort! Here's to your design team, which might just make the world a little more amazing!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'how-do-i-prioritize-features-part-2',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60c0cdd56e2414337cf33013_ran-berkovich-xU0ZD-TsmmU-unsplash-p-3200.jpeg',
		title: 'How Do I Prioritize Features? Part 2 of 2',
		date: 'JUNE 9, 2021',
		category: 'SAAS',
		excerpt:
			"In part one of this series, we discussed customer-centered data points that can help form product strategy. We explored how understanding your users' needs, pain points, and goals should be the foundation of any prioritization framework. But customer needs alone don't tell the whole story. The next step is to mix in constraints.",
		imageAlt: 'Coffee cup illustration',
		content: `<p>In part one of this series, we discussed customer-centered data points that can help form product strategy. We explored how understanding your users' needs, pain points, and goals should be the foundation of any prioritization framework. But customer needs alone don't tell the whole story.</p>

<p>The next step is to mix in constraints. Real-world product development happens within boundaries, and acknowledging these constraints helps you make more realistic and achievable decisions.</p>

<h2>Technical constraints</h2>

<p>Technical constraints include your current technology stack, infrastructure limitations, and the complexity of implementing certain features. Some features might sound great from a customer perspective but could require significant architectural changes or introduce technical debt.</p>

<p>When evaluating features through a technical lens, consider: How long will this take to build? What dependencies does it create? Will it require new infrastructure or third-party services? Does it align with your current tech stack, or will it require new expertise?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/Bw2icOlhL9Iv6/source.gif" alt="Constraints keep us from hurting ourselves" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Constraints keep us from hurting ourselves... most of the time. (via Giphy)</p>
</div>

<h2>Business constraints</h2>

<p>Business constraints encompass your budget, timeline, market position, and strategic goals. A feature might be highly requested by customers, but if it doesn't align with your business model or revenue goals, it might not be the right priority.</p>

<p>Consider questions like: Does this feature support our business model? Will it help us acquire or retain customers? Does it differentiate us from competitors? Is this the right time in our company's lifecycle to build this?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/QU3VPCKslm8sF0TO0v/source.gif" alt="Don't let your important features get blocked" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Don't let your important features get blocked. (via Giphy)</p>
</div>

<h2>Resource constraints</h2>

<p>Resource constraints involve your team size, skill sets, and capacity. You might have brilliant ideas, but if you don't have the right people or enough bandwidth, those ideas will remain just that—ideas.</p>

<p>Be honest about: Do we have the right skills on the team? How much capacity do we actually have? What other priorities are competing for attention? Can we realistically deliver this within our timeline?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/leWwDRvSI49jy/source.gif" alt="Taking on tons of features can be a battle" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Taking on tons of features can be a battle. (via Giphy)</p>
</div>

<h2>Balancing the equation</h2>

<p>The art of prioritization comes from balancing customer needs with these three types of constraints. A feature that scores high on customer value but low on feasibility might need to wait. Conversely, a feature that's easy to build but doesn't serve customers well probably shouldn't be prioritized.</p>

<p>Create a framework that weighs all these factors. Some teams use scoring systems, others use matrices, and some rely on structured discussions. The method matters less than ensuring you're considering the full picture before making decisions.</p>

<p>Remember, constraints aren't necessarily bad—they force you to be creative and focused. The best products often emerge from working within limitations, not from unlimited resources.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'how-do-i-prioritize-features-part-1',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/60a813feba638c0e3ef14854_valery-fedotov-CqX6IhVj2TI-unsplash-p-3200.jpeg',
		title: 'How Do I Prioritize Features? Part 1 of 2',
		date: 'MAY 21, 2021',
		category: 'SAAS',
		excerpt:
			"If you're a startup founder or a product leader, chances are you don't have a hard time dreaming big. Your vision board is probably overflowing with features that would revolutionize your industry, delight your users, and make your competitors weep. But you keep running into the same two pesky constraints when building the dream product to rule your industry: time and money.",
		imageAlt: 'Binoculars illustration',
		content: `<p>If you're a startup founder or a product leader, chances are you don't have a hard time dreaming big. Your vision board is probably overflowing with features that would revolutionize your industry, delight your users, and make your competitors weep. But you keep running into the same two pesky constraints when building the dream product to rule your industry: time and money.</p>

<p>Every feature request feels urgent. Every customer feedback session reveals another "must-have" capability. Every competitor launch makes you question your roadmap. So how do you decide what to build first?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/lHBbcpFTS5c2Y/giphy.gif" alt="DON'T CARE HOW I WANT IT NOW" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">When dev says it will take years to build (via Giphy)</p>
</div>

<p>Building your product in phases has several benefits. It forces you to prioritize what's truly important, allows you to adapt based on customer feedback, and helps you get to market faster. But how do you decide what goes in phase one versus phase two?</p>

<h2>Remember Who You're Building For</h2>

<p>Before you can prioritize features effectively, you need to understand who you're building for. This means going beyond generic user personas and understanding the specific needs, pain points, and goals of your target audience. Are you building for enterprise customers who need robust security and compliance features? Or are you targeting small businesses that need simplicity and quick setup?</p>

<p>Understanding your target audience helps you make better decisions about which features matter most. A feature that's critical for one user segment might be irrelevant for another. The more specific you can be about who you're building for, the easier it becomes to prioritize.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/RaLIOPl8MLyWA/source.gif" alt="Do your research" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Do your research</p>
	<p style="margin-top: 4px; font-size: 12px; color: var(--grey-3); font-style: italic;">Don't skip understanding! (via Giphy)</p>
</div>

<p>Gathering customer insights involves multiple approaches. User interviews help you understand motivations and context. Usability testing reveals where users struggle. Support tickets highlight recurring frustrations. Product analytics show you what people actually do, not just what they say they do.</p>

<p>Look for patterns across these data sources. If multiple customers mention the same problem, that's a signal. If analytics show users consistently struggling with a particular workflow, that's a signal. If support tickets cluster around a specific issue, that's a signal.</p>

<h2>If it's Broke, Fix it?</h2>

<p>Usability issues can significantly impact user satisfaction and retention. If users can't complete core tasks, or if they're frustrated by confusing interfaces, those problems should rise to the top of your priority list. But not all usability issues are created equal.</p>

<p>Consider the severity and frequency of each issue. A critical bug that prevents users from completing a purchase is more urgent than a minor UI inconsistency. A usability problem that affects 80% of your users is more important than one that affects 5%. Design audits and severity scales can help you systematically identify and prioritize these issues.</p>

<h2>What's Going to Sell?</h2>

<p>For many products, especially B2B SaaS, certain features are essential for closing deals. These are the features that prospects ask about during sales calls, the capabilities that differentiate you from competitors, and the functionality that justifies your pricing.</p>

<p>Understanding which features drive sales requires talking to your sales team, analyzing win/loss data, and listening to what prospects actually say during demos. What features do they get excited about? What capabilities do they ask for? What concerns do they raise that cause them to walk away?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/443jTW1yjUiwXOlQ2g/source.gif" alt="What do your potential customers actually want to buy?" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">What do your potential customers actually want to buy? (via Giphy)</p>
</div>

<p>It's important to distinguish between what prospects say they want and what they actually need. People often ask for features based on what they've seen in other products, not necessarily what would solve their specific problems. Rely on past behavior data—what features do your current customers actually use? What workflows do they follow? What problems do they solve with your product?</p>

<h2>Next steps: Apply Constraints</h2>

<p>Understanding customer needs, usability issues, and sales drivers is just the first step. In part two of this series, we'll explore how to balance these customer-centered priorities with real-world constraints: technical limitations, business requirements, and resource availability. Because even the most important features need to be feasible to build.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'how-to-ask-good-questions-when-building-saas-product',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/6080815fbafc572380901b88_artem-maltsev-0CvHQ62gwY8-unsplash-p-800.jpeg',
		title: 'How to Ask Good Questions When Building a SaaS Product',
		date: 'APRIL 21, 2021',
		category: 'SAAS',
		excerpt:
			"As an instructor at General Assembly, one of the main things I wanted my cohort to take away from the 10-week UX design immersive was this: how to ask the right questions. Pixels are great and all – and, to be sure, they define the output of the work we do as product designers. But good questions are the foundation of good design.",
		imageAlt: 'Compass illustration',
		imageCredit: 'Blog Photo by Artem Maltsev on Unsplash',
		content: `<p>As an instructor at General Assembly, one of the main things I wanted my cohort to take away from the 10-week UX design immersive was this: how to ask the right questions.</p>

<p>Pixels are great and all – and, to be sure, they define the output of the work we do as product designers. But good questions are the foundation of good design, and you'll need to know how to ask them if you're interested in identifying which features and functionality will make an impact in your market.</p>

<p>First, you'll need to understand what information you're hoping to gain by asking questions. Is it related to current behaviors and preferences? Is it feedback on an idea you have? Is it whether or not customers are willing to pay for your product?</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/XBpEStoQ5rftPFA8rh/giphy.gif" alt="Next question" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Next question. (via Giphy)</p>
</div>

<p>In this post, we'll be focusing on questions in customer discovery and user interviews, though these principles can be applied to working with stakeholders, ideation sessions, and more.</p>

<p>Let's take a look at the essentials to good questions that will uncover clear, accurate, and actionable insights:</p>

<p><strong>1. Define research goals and questions ahead of time.</strong></p>

<p>I'm a big fan of going off-script. I was the kid who managed to do pretty well in school presentations with little preparation. The fact of the matter is, it's important to prepare for a few reasons:</p>

<ul>
	<li>Clear goals will help you to understand what information to seek out in your research (and therefore which methodologies to use and which questions to ask).</li>
	<li>You'll be less likely to forget to ask important questions.</li>
	<li>Your data will be more reliable because you're asking consistent questions across all participants.</li>
	<li>You'll be able to craft non-leading questions to reduce biasing participants and enhance reliability of research insights, which brings us to...</li>
</ul>

<p><strong>2. Avoid leading questions.</strong></p>

<p>In The Mom Test, Rob Fitzpatrick gives a poignant illustration of the dangers of asking leading questions. Here's a little paraphrase:</p>

<p><em>Entrepreneur: "Do you like my idea?"</em><br />
<em>Mom: "Of course, honey!"</em><br />
<em>Entrepreneur: "Oh sweet. I'm going to be rich!"</em></p>

<p>Fitzpatrick then elaborates on the danger of people – not just doting mothers, but family, friends, and strangers alike – telling researchers what they want to hear to be "nice" rather than the hard truth they need to know.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/wRfVij0ow9h28/source.gif" alt="Moral support" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Support's nice and all, but white lies can lead to ruin. (via Giphy)</p>
</div>

<p>There are other methods to navigate around these false positives, but one easy first step is to stop asking yes/no questions, especially those pertaining to preferences.</p>

<p><strong>3. Use your W question words.</strong></p>

<p>What kinds of questions to ask, then? Open-ended ones!</p>

<p>A great foundation to forming these questions by starting with 5 Ws:</p>

<ul>
	<li>Who</li>
	<li>What</li>
	<li>When</li>
	<li>Where</li>
	<li>Why</li>
	<li>How (ok, not 5, and not a W, but we gotta throw it in there)</li>
</ul>

<p>This is an easy way, but not the only way, to form non-yes/no questions that will encourage interviewees to provide descriptive responses. If you're feeling extra adventurous, go for some prompts that begin with, "To what extent…?" and "On a scale of 1-5, …?"</p>

<p><strong>4. Ask follow up questions (especially Why?)</strong></p>

<p>If you have young kids (I have four), you're likely familiar with long interrogation sessions entirely composed of this single word: "Why?"</p>

<p>Why, you ask? 🙃</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/2fuSGwfvM77J1sAzxj/giphy.gif" alt="4 year old girls ask around 390 questions a day" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">This seems about right for my daughter. (via Giphy)</p>
</div>

<p>Well, it's simple, that one little word can produce a lot of helpful information as kids learn about the world around them. Layers upon layers of helpful information. It can also help you as an entrepreneur or product person get to the core of some hairy problems, as Eric Ries notes in The Lean Startup when elaborating on the principle of the 5 Whys.</p>

<p><strong>5. Don't just ask. Observe.</strong></p>

<p>Observed (or even recounted) behavior is typically more reliable than speculative assertions that interviewees make. Yes, I may say I would totally take a weekend trip to the moon if I had the chance. But if you look at my behavior, you'd see I haven't even spent money to fly out of the country in the last few years. Not exactly product-market fit, right? Trust the track record more than voiced preferences, hopes, and wishes.</p>

<p><strong>6. Practice active listening.</strong></p>

<p>Active listening is the technique of being fully present and engaged in what someone is saying. It's essential to customer discovery and user research. In addition to giving eye contact and body language that demonstrates interest and care in what the interviewee is talking about, active listening involves repeating back short phrases and asking clarifying questions, for example, "It sounds like you've been struggling with your current software because the navigation is confusing. Is that right?" Not only does active listening help ensure your information is accurate, it can also help interviewees feel more at ease because they feel safe and understood.</p>

<p><strong>7. Just add curiosity.</strong></p>

<p>You can actively listen without allowing your assumptions to be challenged. Be willing to let the data take you to new ideas, new understandings of the problem, and new potential solutions.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/Uod3eEQvIMHYHl88U2/giphy.gif" alt="Keep those questions coming" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Keep asking to keep learning! (via Giphy)</p>
</div>

<p>These simply represent the foundations of asking good questions. As you gain more practice, you'll notice what works and what produces misleading data. It's an iterative process to develop these skills. The next step? Go talk to some folks and see what insights you uncover!</p>

<p>Oh, and feel free to ask us any questions you have about this topic as well!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'lets-talk-design-debt',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/606db17540b5ef6754da71c6_ruth-enyedi-zuwx2tvI_iM-unsplash(1)-p-800.jpeg',
		title: "Let's Talk Design Debt: What is it and what could it cost me?",
		date: 'APRIL 7, 2021',
		category: 'SAAS',
		excerpt:
			"Imagine with me for a second. You're a non-technical founder with an awesome B2B SaaS concept. You know you need to hire a developer to build your software product and you've heard no one wants to invest in your startup until you have something built, so you go straight to the developer or dev shop your friend recommended.",
		imageAlt: 'Knot illustration',
		content: `<p>Imagine with me for a second. You're a non-technical founder with an awesome B2B SaaS concept. You know you need to hire a developer to build your software product and you've heard no one wants to invest in your startup until you have something built, so you go straight to the developer or dev shop your friend recommended.</p>

<p>The developer takes your money and your requirements and gets to work. You communicate back and forth on requirements and technical constraints that you kind of understand and you've made decisions to the best of your ability based on those conversations. As far as design goes, you've sketched together a few flows and back-of-the-napkin wireframes. Your developer has taken those and interpreted them, making several design decisions when building out the product. $30,000 dollars in and 6 months later, you have a product.</p>

<p>You launch and get some initial interest, but not enough to really get the traction you're looking for. Your customers make some feature requests, so you drop another $50,000 over the next 6 months building out these features. The good news: You've gotten some great features out during that time and as you become more competitive in your feature offering, you're seeing more revenue coming in. You now have a decent-sized customer base.</p>

<p>With all these customers, there's a whole new set of issues. You're seeing loads of support tickets coming in about frustrating workflows, features not working as expected, and errors popping up that customers don't know how to interpret or resolve. Time spent dedicated to supporting customers is skyrocketing, and with it you're having to pay for additional help on customer support and dev. Ouch! You've hit the initial shock of design debt.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/l0HlNmF2VCrXqjlSM/giphy.gif" alt="Wait, what?" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Wait, what? (via Giphy)</p>
</div>

<p>But that's just the beginning. You start working with your dev team to fix design problems where you can identify them, diverting valuable time from new features and strategic projects.</p>

<p>Finally, you hear about how bringing on a UX designer can help. You spend the time and money to recruit and bring the new designer up to speed. The designer audits the current platform and recommends a redesign, which could take longer than the original build. You're able to get a few new features slipped into the redesign, but the time and effort costs you a year of valuable time just reconfiguring the current foundations instead of making further progress. Meanwhile, you're reeling from excessive churn and damage to your brand's reputation in the market. Bam! You're now encountering the full cost of design debt.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/ESt8At0PXpmj6/giphy.gif" alt="That cost more than expected!" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">That cost more than expected! (via Giphy)</p>
</div>

<p>The vast majority of developers I've worked with (or whose work I've inherited) are not great designers. That might sound like I'm throwing my friends in engineering under the bus (sorry, y'all), but truthfully, the very reason they're amazing developers is why they shouldn't be doing design.</p>

<p>Developers are highly attuned to the technology they work with – constraints, functionality, possibilities. They're superstars at translating defined requirements into working software in the most efficient way possible. Developers thrive on technical language and technical workflows, and oftentimes are too deeply familiar with the tech and the way they've built the platform to really empathize with the experience of a non-technical user.</p>

<p>Designers, on the other hand, are focused on representing the users' perspective. Non-technical users, by and large, don't understand the difference between a 404 error and 500 error. Users often don't see the "clearly labeled" button that developers can quickly point out because of the hundreds of hours they've spent building the corresponding workflows.</p>

<p>This focus on the users' experience, enhanced through conducting user research enables SaaS product designers to design data structures, workflows, navigation, layout, in-app messaging, and interactions that intuitively make sense to users. One of the common misconceptions is that UX designers are brought in to make the UI look pretty. While designers certainly take pride in aesthetic excellence and in delivering delight, it's far from the only deliverable. In essence, UX designers define the details of the requirements that a developer will build, told from a user's point of view.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/606db410c105305eba75446e_Design%20Debt%20Chart.png" alt="Cost to change a design over time" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Cost to change a design over time (Hint: it costs a lot more once it's built!)</p>
</div>

<p>UX designers are the architects and developers are the builders. Imagine jumping straight to hiring a construction crew to build your new skyscraper with no architect involved in the process until the first 15 stories have been completed. The analogy breaks down to an extent in that software is an iterative process. But iterations can be extremely expensive if the right people aren't involved at the right time.</p>

<p>So, what's the alternate scenario? What's the recommendation? Bring in design support early, before dev starts building. An hour of a senior designer's time is much less expensive than an hour each multiplied by the multiple developers it will take to build out the design.</p>

<p>There will always be some design debt that accrues in an iterative Agile SaaS environment, but working with an experienced design partner, like Trailmerge, at the outset and over the long-term can help you dramatically reduce the severity of support needs and rework at a time when you want to be focused on growth.</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'your-mvp-is-missing-the-point',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5fe2481631ad4401f048b2d6_the-creativv-2YFpp3NvHy8-unsplash-p-800.jpeg',
		title: 'Your MVP is Missing the Point',
		date: 'DECEMBER 22, 2020',
		category: 'SAAS',
		excerpt:
			'How would you define an MVP? Yeah, I think most of us in the tech startup world know it stands for "minimum viable product." But what\'s the point of it? Well, I\'ve often seen this term used to mean "a hunk o\' software thrown together quickly to get something out the door so we can start making money off this bad boy!"',
		imageAlt: 'Lantern illustration',
		content: `<p>How would you define an MVP?</p>

<p>Yeah, I think most of us in the tech startup world know it stands for "minimum viable product." But what's the point of it?</p>

<p>Well, I've often seen this term used to mean "a hunk o' software thrown together quickly to get something out the door so we can start making money off this bad boy!"</p>

<p>Hold up – let's make sure we're going the right direction first before we sink all this cash into a costly Field of Dreams, SaaS edition.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/qVtmVS0eailqg/source.gif" alt="Field of Dreams" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Works for rando baseball ghosts in a cornfield, but not so much in SaaS. (via Giphy)</p>
</div>

<p>First off, an MVP is not always software, even if the end goal has to do with software.</p>

<p>Eric Reis (in Lean Startup) and Steve Blank (in The Startup Owner's Manual) both give examples of MVPs that are not just beta versions of the eventual product.</p>

<p>Reis' often cited example is that of Zappos, an online shoe retailer which was acquired by Amazon, whose MVP involved an existing platform and shoes purchased on demand from local shoe stores – more on this in a second.</p>

<p>Blank, on the other hand, mentions that a simple landing page can act as an MVP.</p>

<p>Ok, sure, but how?</p>

<p>Well, now would be a good time to go back to the purpose of an MVP. I really appreciate Rik Higham's thoughts on the matter in his Hacker Noon article a few years back:</p>

<p>"There is a flaw at the heart of the term Minimum Viable Product: it's not a product. It's a way of testing whether you've found a problem worth solving."</p>

<p>In his article, he goes on to assert that we should be focused on testing our single riskiest assumption with the least possible amount of effort and cost. When we start a business, have an idea for a product, or even just start working on new features, we carry a number of assumptions with us:</p>

<ul>
	<li>Lots of people are dealing with this problem and are motivated to solve it.</li>
	<li>People are willing to invest money, time, effort to adopt a solution to the problem.</li>
	<li>Enough of the market will want my particular solution to this problem.</li>
	<li>I can create a sustainable business around solving this problem.</li>
</ul>

<p>The list goes on and on. And some assumptions carry a much higher risk than others. For example, the assumption that "Users will enjoy cute illustrated animations in the app" is much less risky than the assumption that "Users will be willing to provide their bank account information to us in order to use the core feature of our app." The user experience won't suffer much (and the bottom line even less) if people don't 100% love the cute dancing duckling on your confirmation screen, but an attitude that determines adoption of the main part of your solution can be make-or-break for your entire business.</p>

<p>Zappos was built by testing a risky assumption before they built a platform: "People will be willing to buy shoes they haven't tried on in a store." Airbnb had to test the assumption that Americans would be willing to open their homes to complete strangers, and, in turn, stay in strangers' homes. In early stages, a landing page can work to test whether or not the target market gets excited about a concept or identifies with a problem.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/vmv47p4zksWDC/source.gif" alt="Test it out" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">Test it out, see if it will come to life! (via Giphy)</p>
</div>

<p>A few years back, I performed research and design work for a founder with a two-sided marketplace concept. Instead of building out the whole app to start, he found success in testing the value of his service through a Google Form and phone calls, manually coordinating the two sides of the marketplace in a way that reflected the coordination the platform would perform automatically in the future.</p>

<p>It can be simple – Start with this:</p>

<ul>
	<li>List out your riskiest assumptions. Ask peers, team members, and/or external experts to help you identify subconscious assumptions.</li>
	<li>Develop a plan to test the next big assumption. For example, you might be able to test the assumption that "realtors will be willing to purchase this product" using mockups of a few screens and a landing page. A prototype might do the trick in other cases. A fully built app might be needed (though it should, in most cases, be built in bite-sized Agile releases for optimal learning), or a few video calls with people who fit your target market may tell you all you need to know. Involving a UX design team like Trailmerge early in the process can be a cost-effective way to quickly arrive at key learnings.</li>
</ul>

<p>Remember: The central activity of a startup is to learn and improve with the goal of a sustainable business model. Understanding the assumptions you carry and testing them one-by-one scientific method style is a key step to learning and succeeding, and it can start small!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'idea-to-version-1-how-do-i-get-started',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b92fdfd4bf0e27021d439_david-kovalenko-G85VuTpw6jg-unsplash-p-800.jpeg',
		title: 'Idea to Version 1: How Do I Get Started?',
		date: 'OCTOBER 30, 2020',
		category: 'SAAS',
		excerpt:
			"B2B SaaS founders come in a variety of forms. Oftentimes, they're not the tech geniuses who geek out on the pros and cons of the latest Javascript libraries and frameworks. In many cases, they're not UX designers or product managers who decided to branch out to create a new product. They're folks (this might describe you) from non-technical backgrounds who have seen an opportunity to serve their industry.",
		imageAlt: 'Hiking boots illustration',
		content: `<p>B2B SaaS founders come in a variety of forms. Oftentimes, they're not the tech geniuses who geek out on the pros and cons of the latest Javascript libraries and frameworks. In many cases, they're not UX designers or product managers who decided to branch out to create a new product.</p>

<p>They're folks (this might describe you) from non-technical backgrounds who have seen an opportunity to serve their industry – be it finance, healthcare, real estate, logistics, retail, accounting, education – with effective technology. It could be you've had an epiphany about an open market for a workflow that's not been touched by digital transformation, or it could be you've felt the pain of dealing with a terrible, overpriced incumbent software in your industry.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/bPCwGUF2sKjyE/source.gif" alt="We all want to beat on our computers from time to time" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">We all want to beat on our computers from time to time. (via Giphy)</p>
</div>

<p>Awesome. Identifying an opportunity is a great place to start. And obviously, you've been motivated enough to carpe diem it up and create much-needed change in your industry. The only problem is you don't know where to begin. Building a software product – and a company around that product – is an immensely complex task to be sure, and if you're a non-technical founder, it can feel like you're entering into a different world with a different language a very different approach to how things are done.</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/SRx5tBBrTQOBi/source.gif" alt="No idea what I'm doing" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">No idea what I'm doing. (via Giphy)</p>
</div>

<p>With that, here are a few quick questions to consider:</p>

<p><strong>1. Who am I building this for?</strong></p>

<p>Well, I'll tell you this much: you're not building your platform for you. Sure, you may have found a lot of problems with the current way of doing things in your industry and you may have a lot of great ideas about how to solve those problems. But there are a couple big assumptions here: 1) Your experience is nearly identical to that of your users. 2) Your solutions will solve the problems you identified near perfectly.</p>

<p>Let's face it – you've started this business with a great vision and solid ideas, but you're also just one person and you're not going to be paying yourself to use your product. Also, you're already committed enough to your idea to have a bias towards it. It's OK, that's only natural. You're a SaaS founder now. You're no longer in the same shoes as your customers. So, we need to understand who the real customer is in order to refine the vision and make the solution even better and more valuable to the market.</p>

<p>So who is it? Leasing agents at large urban apartment complexes? Winery owners? Sports event promoters?</p>

<p>Now, you can begin to build a foundation of market and user research: What tools do they use? What are their motivators? What are their needs? What are their budgets? What are obstacles to adopting new technologies?</p>

<p><strong>2. What exactly am I building?</strong></p>

<p>You've already come to the table with an idea worth researching and investing in. You have a long-term vision for a unique solution. But there are many details that need to be ironed out. Various forms of research, as well as some good understanding of feature dependencies, will help you bring definition to the vision at a low cost.</p>

<p>This is where product management and UX design come in. If you skip ahead to building, you run the risk of incurring significant design debt and spending a lot of money on an ill-defined scope. There are lots of things to think about that come up throughout the process of creating software:</p>

<ul>
	<li>Which features should be included in the first release (hint: think small and focus on what you can learn)?</li>
	<li>What should happen when the user clicks this?</li>
	<li>What kinds of inputs will we allow in this field?</li>
	<li>How should the navigation be organized?</li>
	<li>What does the user's workflow look like in completing the core task?</li>
	<li>How should different pieces of data relate to one another?</li>
	<li>What components will be needed to build the front-end, and what should they look like?</li>
</ul>

<p>Defining these kinds of questions can take quite a lot of effort, but doing so with the insights provided by research and within the parameters of a well-defined product strategy can save on costly development rework later on.</p>

<p><strong>3. Who's going to build it?</strong></p>

<p>As you can see, building goes beyond development, and partnering with a SaaS product design team like Trailmerge can be valuable for taking some of the burden off your shoulders, guiding you to and through the development stage and launch of your first customer-facing piece of software.</p>

<p>As far as the development team itself, think about the tech stack you want to use, your budget constraints, time zones, and the terms of the relationship. You'll want to find a team who knows the tech you're targeting (For example, are you building a native mobile app, a desktop app, or a web app?), who you can communicate with easily in your daily workflow, and who fits into the long-term strategy for your business. We're happy to help you think through these big questions as well.</p>

<p>Well, there you have it. You've found the opportunity, you're going for it, and now you're armed with some questions to ask yourself. So much of building a startup is learning, and the answers to these questions will help you move forward. Keep at it – we're rooting for you!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
	{
		slug: 'learning-the-core-of-successful-saas-startup',
		image:
			'https://cdn.prod.website-files.com/5f21852057e32cd33932fc16/5f9b8ef55d4ba34a9d30655e_daniil-silantev-ioYwosPYC0U-unsplash-p-1080.jpeg',
		title: 'Learning: The Core of a Successful SaaS Startup',
		date: 'OCTOBER 29, 2020',
		category: 'SAAS',
		excerpt:
			'A startup is an organization in search of a sustainable business model. I heard that definition at an event in Colorado Springs a few years ago, and it sticks with me to this day as the clearest way to identify a startup. "Startup" is not a description of the age, size, popularity, or revenue of a company.',
		imageAlt: 'Hand holding a map examining it',
		content: `<p>A startup is an organization in search of a sustainable business model.</p>

<p>I heard that definition at an event in Colorado Springs a few years ago, and it sticks with me to this day as the clearest way to identify a startup. "Startup" is not a description of the age, size, popularity, or revenue of a company. We can still justifiably label large, well-known entities like DoorDash, Airbnb, and Slack as startups. They are still learning and searching for a continually scaling, sustainable business model (and have been doing a great job of it so far!).</p>

<p>Today, we're going to focus on a single element of this definition: "in search of."</p>

<p>We start new companies with an idea, a passion, or a desire to cash in. We think ahead to the big exit, we dream of success, and we make plans. And let's be clear – this is not a bad thing. Vision is important!</p>

<div style="margin: 32px 0; text-align: center;">
	<img src="https://media.giphy.com/media/12xvz9NssSkaS4/giphy.gif" alt="See you in the future" style="max-width: 100%; height: auto; border-radius: 4px;" />
	<p style="margin-top: 8px; font-size: 14px; color: var(--grey-3); font-style: italic;">See you in the future. (via Giphy)</p>
</div>

<p>But at the core of a successful search for a sustainable business model, there needs to be learning.</p>

<p>Think about it: We're starting from zero. SaaS founders are not franchisees, handed a packaged, already proven business model to replicate. We need to define new processes in every area of business: product, design, development, sales, marketing, customer operations, finance, human resources. We need to test the waters of distribution channels, competitive landscapes, product offerings, pricing strategies, and more.</p>

<p>What we've done elsewhere will certainly inform what we try in this new context, but there are always new variables in every new startup – new markets, new team members, new users, new buyers. While I was able to transfer some best practices from my time working with the enterprise UX team at The Home Depot, running a design team within UserIQ, a customer success SaaS startup, is a vastly different environment with unique demands and considerations. The way it's worked before is not going to be how it's going to work this time.</p>

<p>So, what are we trying to learn with each of our company's efforts? A good place to start is by taking inventory of our assumptions, then putting them to the test. Here's some practical steps we can take to learn in our everyday operations:</p>

<ul>
	<li>Generative research (surveys, user interviews, observational research) can give us insight into customer and user motivations, pain points, and behaviors.</li>
	<li>Prototypes can tell us about the usability and desirability of our product before we drop a fat wad of cash on development, and can even be used to kickstart sales conversations with customers.</li>
	<li>Through an early product, we can learn about which features are actually valued, what customers request in enhancements, and how well our direction fits the market we're targeting.</li>
	<li>Our marketing campaigns are not just an end product – They can be sources of valuable information if we're listening.</li>
	<li>Running standups and regular team retrospectives in a supportive, reflective environment can move us from raw processes to well-defined collaboration in which team members can thrive and efficiency is optimized.</li>
</ul>

<p>And surrounding yourself with knowledgeable people with different perspectives and emphases – employees, vendors, agencies, and strategic partners – can be a valuable learning experience to propel you forward.</p>

<p>Of course, learning alone is not going to propel us to success. We must have a willingness and a courage to adapt, change course, and even *gasp* say no to some of what we've envisioned. It's all about humility, tenacity, and a desire to improve. That's how we start up!</p>`,
		author: {
			name: 'Mark Tegtmeier',
			image: '/images/Mark.png',
			bio: 'Founder Mark Tegtmeier brings years of design experience to Trailmerge. He has worked with early stage startups, design and software agencies, government, and enterprise, driving them further in their product vision. A husband of one, father of four, and urban homesteader, Mark loves developing tech talent and coming alongside founders with ambitious visions for their products and companies.',
		},
	},
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
	return blogPosts;
}
