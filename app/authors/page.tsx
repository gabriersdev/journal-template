import React from 'react';
import { getPosts, getTopics } from '@/libs/mdx';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { NewsletterSection } from '@/components/newsletter';
import { Metadata } from 'next';
import { authors } from '@/libs/authors';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authors | The Journal',
  description: 'Meet the authors contributing thoughts, stories and ideas to The Journal.',
};

export default function Authors() {
  const posts = getPosts();
  const topics = getTopics();
  
  const features = posts.slice(0, 4).map(p => ({
    title: p.metadata.title,
    description: p.metadata.description,
    date: p.metadata.date,
    readTime: p.metadata.readTime,
    slug: p.slug
  }));

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Header />

      <main className="container mx-auto px-4 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:flex-1 lg:pr-16">
            <h1 className="text-4xl font-bold font-inter mb-10">Our Authors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {authors.map((author) => (
                <div key={author.slug} className="border border-gray-100 p-8 rounded-lg hover:shadow-md transition-shadow group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl overflow-hidden relative">
                      {author.avatar ? (
                        <img src={author.avatar} alt={author.name} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <Link href={`/author/${author.slug}`}>
                        <h2 className="text-2xl font-bold font-inter group-hover:text-blue-600 transition-colors">{author.name}</h2>
                      </Link>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{author.bio}</p>
                  <Link href={`/author/${author.slug}`} className="text-sm font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">
                    View posts →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Sidebar hideAbout={true} features={features} topics={topics} />
        </div>
      </main>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
