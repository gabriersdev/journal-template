import React from 'react';
import {getPosts, getTopics} from '@/libs/mdx';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Sidebar} from '@/components/sidebar';
import {FeaturedPost} from '@/components/featured-post';
import {PostCard} from '@/components/post-card';
import {NewsletterSection} from '@/components/newsletter';
import {Metadata} from 'next';
import {appConfigs} from "@/resources/resources";

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
            <div className="mb-10">
              <h1 className="text-4xl font-bold font-inter mb-2">About us</h1>
              <p className="text-gray-500 text-sm">
                {appConfigs["app-name"]}
              </p>
            </div>
            
            <div className="markdown-content">
              <p>
                Journal is a minimal, typography-heavy newsletter theme for Ghost. In addition to being fully responsive and styled, it comes with a few optional bells and whistles that are explained below.
              </p>
              <h2>Highlight your latest post</h2>
              <p>
                To help guide your audience to your latest piece of writing, Journal highlights the most recently published post with larger typography to draw the eye and showcase your content.
              </p>
              <h2>Widgets</h2>
              <p>
                There are three built-in widgets in Journal that will be displayed in the right sidebar of the homepage.
              </p>
              <ul>
                <li><strong>About</strong> - displays a little introduction of the newsletter containing publication icon, title, description, and email subscription input</li>
                <li><strong>Featured posts</strong> - all featured posts will be displayed. Read more about featured posts <a href="#">here</a>.</li>
                <li><strong>Links</strong> - all available tags will be displayed with the count of posts in alphabetical order</li>
              </ul>
              <h2>Email subscription box</h2>
              <p>
                On the bottom, there's a full-width email subscription box with a punchy background color. A great call to action to enrich your members even more.
              </p>
            </div>
          </div>
          
          <Sidebar hideAbout={true} features={features} topics={topics}/>
        </div>
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
