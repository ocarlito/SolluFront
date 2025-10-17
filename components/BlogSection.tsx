import React, { useState, useEffect } from 'react';
import { getPosts, Post } from '../services/blog';

const BlogPostCard: React.FC<{ title: string; excerpt: string; date: string; }> = ({ title, excerpt, date }) => (
    <div className="rounded-2xl bg-gradient-to-br from-sollu-accent/50 to-white/10 dark:from-sollu-accent/20 dark:to-sollu-dark-bg/10 p-px shadow-lg hover:shadow-sollu-primary/20 transition-all duration-300 h-full">
      <div className="bg-white/60 dark:bg-sollu-dark-bg/60 backdrop-blur-xl p-8 rounded-[15px] h-full flex flex-col">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex-grow">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{excerpt}</p>
        <a href="#" className="font-semibold text-sollu-primary hover:underline mt-auto">
          Ler Mais &rarr;
        </a>
      </div>
    </div>
);


const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then(fetchedPosts => {
        setPosts(fetchedPosts);
      })
      .catch(err => {
        console.error("Failed to load blog posts:", err);
        setError("Não foi possível carregar os posts do blog.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">📰 Fique por Dentro</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Nossos insights e novidades sobre o mercado financeiro.</p>
        </div>
        
        {loading && <p className="text-center dark:text-gray-300">Carregando posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <BlogPostCard key={post.slug} {...post.metadata} />
                ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
