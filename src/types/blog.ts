export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    publishedAt: Date;
    category: string;
    image: string;
    imageAlt: string;
    content: string;
    author: {
        name: string;
        image: string;
        bio: string;
    };
    fromStudioCMS?: boolean;
}
