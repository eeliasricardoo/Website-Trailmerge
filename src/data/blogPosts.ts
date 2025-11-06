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
}

export const blogPosts: BlogPost[] = [
	{
		slug: "help-how-do-i-build-out-my-product-design-team",
		image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=600&h=400&fit=crop",
		title: "Help! How do I build out my product design team?",
		date: "JULY 8, 2022",
		category: "DESIGN TEAMS",
		excerpt: "In today's market, designers are becoming increasingly valuable for startups and established companies alike. Yet, hiring and finding effective designers can be time-consuming and challenging.",
		imageAlt: "Foosball table representing team building",
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
			name: "Mark Tegtmeier",
			image: "/images/Mark.png",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		},
		imageCredit: "Blog photo by Gabriella Clare Marino on Unsplash"
	},
	{
		slug: "how-do-i-prioritize-features-part-2",
		image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
		title: "How Do I Prioritize Features? Part 2 of 2",
		date: "JUNE 9, 2021",
		category: "SAAS",
		excerpt: "In part one of this series, we discussed customer-centered data points that can help form product strategy. The next step is to mix in constraints.",
		imageAlt: "Coffee cup on wooden table",
		content: `<p>In part one of this series, we discussed customer-centered data points that can help form product strategy. The next step is to mix in constraints.</p>

<p>Consider technical constraints, business constraints, and resource constraints when prioritizing features. This balanced approach will help you make better decisions about what to build next.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "how-do-i-prioritize-features-part-1",
		image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
		title: "How Do I Prioritize Features? Part 1 of 2",
		date: "MAY 21, 2021",
		category: "SAAS",
		excerpt: "If you're a startup founder or a product leader, chances are you don't have a hard time dreaming big. But you keep running into the same two pesky constraints when building the dream product to rule your industry: time and money...",
		imageAlt: "Jenga blocks representing prioritization",
		content: `<p>If you're a startup founder or a product leader, chances are you don't have a hard time dreaming big. But you keep running into the same two pesky constraints when building the dream product to rule your industry: time and money.</p>

<p>To prioritize effectively, start with customer-centered data points. What do your users need most? What problems are they trying to solve? Understanding your customers' needs is the foundation of good product strategy.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "how-to-ask-good-questions-when-building-saas-product",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
		title: "How to Ask Good Questions When Building a SaaS Product",
		date: "APRIL 21, 2021",
		category: "SAAS",
		excerpt: "Improve your questioning technique with these foundations for asking good questions when building your SaaS product.",
		imageAlt: "Person presenting ideas to team",
		content: `<p>Improve your questioning technique with these foundations for asking good questions when building your SaaS product.</p>

<p>Good questions help you understand user needs, validate assumptions, and build better products. Focus on open-ended questions that encourage detailed responses.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "lets-talk-design-debt",
		image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
		title: "Let's Talk Design Debt: What is it and what could it cost me?",
		date: "APRIL 7, 2021",
		category: "SAAS",
		excerpt: "You're a non-technical founder with an awesome B2B SaaS concept. You know you need to hire a developer to build your software product... but months later, you hit the initial shock of design debt.",
		imageAlt: "Neon sign with text",
		content: `<p>You're a non-technical founder with an awesome B2B SaaS concept. You know you need to hire a developer to build your software product... but months later, you hit the initial shock of design debt.</p>

<p>Design debt accumulates when design decisions are made hastily or without proper planning. It can slow down future development and impact user experience. Understanding and addressing design debt early is crucial for long-term success.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "your-mvp-is-missing-the-point",
		image: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=600&h=400&fit=crop",
		title: "Your MVP is Missing the Point",
		date: "DECEMBER 22, 2020",
		category: "SAAS",
		excerpt: "How would you define an MVP? Yeah, I think most of us in the tech startup world know it stands for \"minimum viable product.\" But what's the point of it?",
		imageAlt: "Vintage light bulb",
		content: `<p>How would you define an MVP? Yeah, I think most of us in the tech startup world know it stands for "minimum viable product." But what's the point of it?</p>

<p>An MVP should be about learning and validation, not just building the smallest possible product. Focus on what you need to learn to make better decisions, not just what you can build quickly.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "idea-to-version-1-how-do-i-get-started",
		image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
		title: "Idea to Version 1: How Do I Get Started?",
		date: "OCTOBER 30, 2020",
		category: "SAAS",
		excerpt: "Identifying an opportunity is a great place to start. And obviously, you've been motivated enough to carpe diem it up and create much-needed change in your industry. The only problem is you don't know where to begin.",
		imageAlt: "Sprout growing from soil",
		content: `<p>Identifying an opportunity is a great place to start. And obviously, you've been motivated enough to carpe diem it up and create much-needed change in your industry. The only problem is you don't know where to begin.</p>

<p>Start by validating your idea with potential users. Build a simple prototype or landing page to test interest. Gather feedback early and iterate based on what you learn.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	},
	{
		slug: "learning-the-core-of-successful-saas-startup",
		image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
		title: "Learning: The Core of a Successful SaaS Startup",
		date: "OCTOBER 22, 2020",
		category: "SAAS",
		excerpt: "A startup is an organization in search of a sustainable business model. I heard that definition at an event in Colorado Springs a few years ago, and it sticks with me to this day as the clearest way to identify a startup.",
		imageAlt: "Hand holding a leaf examining it",
		content: `<p>A startup is an organization in search of a sustainable business model. I heard that definition at an event in Colorado Springs a few years ago, and it sticks with me to this day as the clearest way to identify a startup.</p>

<p>Learning is at the core of every successful startup. You need to learn about your customers, your market, your product, and your business model. Embrace uncertainty and build a culture of continuous learning.</p>`,
		author: {
			name: "Mark Tegtmeier",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
			bio: "Mark Tegtmeier is the founder of Trailmerge, with extensive design experience across various industries and a passion for developing tech talent."
		}
	}
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
	return blogPosts;
}

