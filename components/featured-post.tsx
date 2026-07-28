import Link from 'next/link';
import { PostMetadata } from '../libs/mdx';

type FeaturedPostProps = {
  slug: string;
  metadata: PostMetadata;
};

export function FeaturedPost({ slug, metadata }: FeaturedPostProps) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center">
        <span>LATEST</span>
        <span className="mx-2 text-blue-300">—</span>
        <span>{metadata.date}</span>
      </div>
      
      <Link href={`/${slug}`} className="block group">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 group-hover:text-blue-600 transition-colors">
          {metadata.title}
        </h1>
      </Link>
      
      <p className="text-xl md:text-2xl text-gray-700 leading-snug mb-6 max-w-3xl">
        {metadata.description}
      </p>
      
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {metadata.readTime}
      </div>
    </div>
  );
}
