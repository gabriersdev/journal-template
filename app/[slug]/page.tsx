import React from 'react';
import {notFound} from 'next/navigation';
import {MDXRemote} from 'next-mdx-remote/rsc';
import {getPostBySlug, getPosts} from '@/libs/mdx';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {NewsletterSection} from '@/components/newsletter';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generates dynamic metadata
export async function generateMetadata({params}: PageProps) {
  const {slug} = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - The Journal',
      description: 'The requested post could not be found.',
    };
  }
  
  return {
    title: `${post.metadata.title} - The Journal`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
    },
  };
}

// Generates static params for all posts
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({params}: PageProps) {
  const {slug} = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Header/>
      
      <main className="container mx-auto px-4 max-w-4xl pt-16 pb-12">
        <article>
          {/* Post Header */}
          <header className="mb-12">
            <div className="text-[12px] uppercase tracking-wide mb-4 flex items-center flex-wrap gap-1">
              <div><span className={"text-gray-500 font-medium"}>By</span> <span className={" text-gray-900 font-semibold"}>{post.metadata.author}</span></div>
              <div><span className={"text-gray-500 font-medium"}>in</span> <span className={" text-[#2631FF] font-semibold"}>{post.metadata.topic}</span></div>
              <span className="text-blue-300">-</span>
              <span className={"text-gray-500"}>{post.metadata.date}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[56px] font-semibold leading-[1.1] mb-6">
              {post.metadata.title}
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-700 leading-snug">
              {post.metadata.description}
            </p>
          </header>
          
          {/* Cover Image Placeholder */}
          <div className="w-full aspect-[2/1] bg-gray-100 rounded mb-16 flex items-center justify-center text-gray-300 overflow-hidden relative">
            {post.metadata.image ? (
              <img src={post.metadata.image} alt={post.metadata.title} className="w-full h-full object-cover"/>
            ) : (
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            )}
          </div>
          
          {/* Post Content rendered by next-mdx-remote */}
          <div className="prose prose-lg prose-blue max-w-3xl mx-auto">
            <MDXRemote source={post.content}/>
          </div>
          
          <hr className="my-16 border-gray-100 max-w-3xl mx-auto"/>
          
          {/* Internal Footer for post */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Your guide to Ghost</h3>
            <ul className="text-blue-600 space-y-2 list-disc list-inside font-medium mb-8">
              <li><a href="#" className="hover:underline">Customizing your brand and design settings</a></li>
              <li><a href="#" className="hover:underline">Writing and managing content, an advanced guide</a></li>
              <li><a href="#" className="hover:underline">Building your audience with subscriber signups</a></li>
              <li><a href="#" className="hover:underline">Selling premium memberships with recurring revenue</a></li>
              <li><a href="#" className="hover:underline">How to grow your business around an audience</a></li>
              <li><a href="#" className="hover:underline">Setting up apps and custom integrations</a></li>
            </ul>
            <p className="text-gray-600 mb-12">
              If you get through all those and you're hungry for more, you can find an extensive library of content for creators over on <a href="#" className="text-blue-600 hover:underline">the Ghost blog</a>.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Getting help</h3>
            <p className="text-gray-600 mb-4">
              If you need help, <a href="#" className="text-blue-600 hover:underline">Ghost Help</a> is a great place to start. You can always reach out to the support team by clicking on the Ghost(Pro) link in the main navigation menu.
            </p>
            <p className="text-gray-600 mb-12">
              If you're a developer reading with max-attributes or self-managed install, check out our <a href="#" className="text-blue-600 hover:underline">developer community forum</a> to chat with other users.
            </p>
            <p className="text-gray-900 font-bold">Have fun!</p>
          </div>
        </article>
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
