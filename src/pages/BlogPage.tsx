import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { posts } from '../data/blog';

const BlogPage: React.FC = () => (
  <div className="section space-y-8">
    <SectionHeader
      eyebrow="Notes"
      title="Blog"
      description="Short-form notes and writeups. Replace with your own posts or remove the route if unused."
    />
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.title} className="card space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{post.title}</h3>
            <span className="text-xs text-slate-500">{post.date}</span>
          </div>
          <p className="text-slate-700 dark:text-slate-200">{post.summary}</p>
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
            {post.content}
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default BlogPage;
