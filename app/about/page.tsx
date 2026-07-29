import React from 'react';
import {getPosts, getTopics} from '@/libs/mdx';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Sidebar} from '@/components/sidebar';
import {FeaturedPost} from '@/components/featured-post';
import {PostCard} from '@/components/post-card';
import {NewsletterSection} from '@/components/newsletter';
import {Metadata} from 'next';

// TODO - definir metadata pertinente à uma página de informações sobre o projeto do blog/jornal
export const metadata: Metadata = {
  title: 'The Journal - Thoughts, stories and ideas',
  description: 'The latest issues, stories, and ideas from The Journal.',
};

export default function About() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Header/>
      
      <main className="container mx-auto px-4 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:flex-1 lg:pr-16">
            About's Page
          </div>
          
          {/*TODO - siderbar conter APENAS as informações de outras notícias e tópicos*/}
          <Sidebar/>
        </div>
      
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
