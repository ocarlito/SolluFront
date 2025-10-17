// Simple Markdown Blog Service (CMS simulation)

export interface Post {
    slug: string;
    metadata: {
        title: string;
        date: string;
        excerpt: string;
    };
    content: string;
}

// List of blog post files
const postFiles = [
    '5-dicas-financas.md',
    'o-que-e-capital-de-giro.md',
    'tecnologia-a-favor-do-seu-negocio.md',
];


const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;

const parseMarkdown = (slug: string, rawContent: string): Post => {
    const match = frontmatterRegex.exec(rawContent);
    const frontmatter = match ? match[1] : '';
    const content = match ? rawContent.slice(match[0].length).trim() : rawContent;

    const metadata: any = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key) {
            metadata[key.trim()] = value.join(':').trim().replace(/^['"]|['"]$/g, '');
        }
    });

    return {
        slug,
        metadata: {
            title: metadata.title || 'Untitled',
            date: metadata.date || new Date().toISOString(),
            excerpt: metadata.excerpt || '',
        },
        content
    };
};

let postsPromise: Promise<Post[]> | null = null;

export const getPosts = (): Promise<Post[]> => {
    if (!postsPromise) {
        postsPromise = Promise.all(
            postFiles.map(async (file) => {
                const slug = file.replace('.md', '');
                const response = await fetch(`/blog/${file}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch post: ${file}`);
                }
                const rawContent = await response.text();
                return parseMarkdown(slug, rawContent);
            })
        ).then(posts => {
            // Sort posts from newest to oldest
            return posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
        });
    }
    return postsPromise;
};
