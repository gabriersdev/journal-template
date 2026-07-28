"use client";
import Link from 'next/link';
import { NewsletterForm } from './newsletter';

type SidebarProps = {
  features?: { title: string; date: string; readTime: string; slug: string; description: string }[];
  topics?: { name: string; count: number }[];
};

export function Sidebar({ features = [], topics = [] }: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 lg:pl-10 lg:border-l border-gray-100 mt-16 lg:mt-0">
      
      {/* About Section */}
      <div className="mb-12">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">About</h3>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
            {/* Simple logo substitute */}
            <div className="w-8 h-8 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-lg leading-tight">The Journal</h4>
            <p className="text-sm text-gray-500">Thoughts, stories and ideas.</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Sign up now to get access to the library of members-only issues.
        </p>
        <NewsletterForm variant="compact" />
      </div>

      {/* Features Section */}
      {features.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Features</h3>
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="group cursor-pointer">
                <Link href={`/${feature.slug}`}>
                  <h4 className="font-bold font-inter text-md leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-2 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center">
                    <span>{feature.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-400">{feature.readTime}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Topics Section */}
      {topics.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Topics</h3>
          <div className="space-y-3">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded -mx-2 transition-colors">
                <Link href={`/topic/${topic.name.toLowerCase().replace(' ', '-')}`} className="font-semibold text-sm group-hover:text-blue-600 transition-colors w-full">
                  {topic.name}
                </Link>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full text-nowrap">
                  {topic.count} {topic.count === 1 ? 'post' : 'posts'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </aside>
  );
}
