"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PostData } from '../libs/mdx';

interface SearchModalProps {
  posts: PostData[];
}

export function SearchModal({ posts }: SearchModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filteredPosts = posts.filter((post) => {
    if (!query) return false;
    const lowerQuery = query.toLowerCase();
    return (
      post.metadata.title.toLowerCase().includes(lowerQuery) ||
      post.metadata.description.toLowerCase().includes(lowerQuery) ||
      (post.metadata.topic && post.metadata.topic.toLowerCase().includes(lowerQuery))
    );
  });

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-gray-900 flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Search posts"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-gray-900/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden m-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-100 flex items-center">
              <svg className="w-4 h-4 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                className="w-full text-[15px] outline-none placeholder-gray-400 bg-transparent text-gray-900"
                placeholder="trans"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
            
            <div className="min-h-[300px] max-h-[60vh] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-[13px] font-bold text-gray-900 mb-4 px-2">Posts</h3>
                {query && filteredPosts.length > 0 ? (
                  <ul className="space-y-4">
                    {filteredPosts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/${post.slug}`} className="block px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors group" onClick={() => setIsOpen(false)}>
                          <h4 className="font-bold text-gray-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">
                             {highlightMatch(post.metadata.title, query)}
                          </h4>
                          <p className="text-[13px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                            {post.metadata.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : query && filteredPosts.length === 0 ? (
                  <p className="text-sm text-gray-500 px-2">No results found.</p>
                ) : (
                  <p className="text-sm text-gray-400 px-2 italic">Type to start searching...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function highlightMatch(text: string, query: string) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="bg-yellow-300">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
