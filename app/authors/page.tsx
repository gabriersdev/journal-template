import React from 'react';
import {getPosts, getTopics} from '@/libs/mdx';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Sidebar} from '@/components/sidebar';
import {FeaturedPost} from '@/components/featured-post';
import {PostCard} from '@/components/post-card';
import {NewsletterSection} from '@/components/newsletter';
import {Metadata} from 'next';

// TODO - definir metadata pertinente à uma página de informações sobre autores do blog/jornal
export const metadata: Metadata = {
  title: 'The Journal - Thoughts, stories and ideas',
  description: 'The latest issues, stories, and ideas from The Journal.',
};

export default function Authors() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Header/>
      
      <main className="container mx-auto px-4 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row">
          {/*// TODO - definir uma estrutura em /lib/authors.js de objeto JS que contenha as informações pertinentes aos autores. */}
          {/*// TODO - listar os autores do projeto (a partir de /lib/authors.js e criar um /author/[author-name], que liste os posts com autoria do author-name. Usar em /author/author-name o mesmo componente de sidebar, porém ao invés de mostrar informações sobre o "The Journal", mostrar informações sobre o próprio autor. */}
          <div className="w-full lg:flex-1 lg:pr-16">
            Author's Page
          </div>
        <Sidebar/>
        </div>
        
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
