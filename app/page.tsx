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
  title: appConfigs.title,
  description: appConfigs.description,
};

export default function Home() {
  const posts = getPosts();
  const topics = getTopics();
  
  const featuredPost = posts.find(p => p.metadata.featured) || posts[0];
  const otherPosts = posts.filter(p => p.slug !== featuredPost?.slug);
  
  // Get top 4 other posts for features section
  const features = otherPosts.slice(0, 4).map(p => ({
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
          
          {/* Main Content Area */}
          <div className="w-full lg:flex-1 lg:pr-16">
            {featuredPost && (
              <FeaturedPost slug={featuredPost.slug} metadata={featuredPost.metadata}/>
            )}
            
            {otherPosts.length > 0 && (
              <div className="mt-20">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">
                  MORE ISSUES
                </div>
                <div className="flex flex-col">
                  {otherPosts
                    .toSpliced(15)
                    .map((post) => (
                    <PostCard key={post.slug} slug={post.slug} metadata={post.metadata}/>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Sidebar */}
          <Sidebar features={features} topics={topics}/>
        
        </div>
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
