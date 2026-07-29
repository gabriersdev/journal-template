import React from 'react';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {AppSidebar} from '@/components/app-sidebar';
import {PageHeading} from '@/components/page-heading';
import {NewsletterSection} from '@/components/newsletter';
import {Metadata} from 'next';
import {appConfigs} from "@/resources/resources";

export const metadata: Metadata = {
  title: `About | ${appConfigs["app-name"]}`,
  description: 'Learn more about The Journal, our mission, and the stories we share.',
};

export default function About() {

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Header/>
      
      <main className="container mx-auto px-4 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:flex-1 lg:pr-16">
            <PageHeading
              title="About us"
              description={appConfigs["app-name"]}
            />
            
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
          
          <AppSidebar hideAbout={true} />
        </div>
      </main>
      
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
