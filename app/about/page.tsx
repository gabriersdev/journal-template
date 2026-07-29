import React from 'react';
import {getPosts, getTopics} from '@/libs/mdx';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Sidebar} from '@/components/sidebar';
import {FeaturedPost} from '@/components/featured-post';
import {PostCard} from '@/components/post-card';
import {NewsletterSection} from '@/components/newsletter';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About | The Journal',
  description: 'Learn more about The Journal, our mission, and the stories we share.',
};

export default function About() {
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
      <Header/>
      
      <main className="container mx-auto px-4 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:flex-1 lg:pr-16">
            About's Page
          </div>
          
          <Sidebar hideAbout={true} features={features} topics={topics} />
        </div>
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
