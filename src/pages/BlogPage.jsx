import React from 'react';
import { posts } from '../data/blog.js';
import BlogCard from '../molecules/BlogCard.jsx';

/**
 * Página de blog que lista entradas destacadas.
 */
export default function BlogPage() {
  return (
    <div>
      <h2>Blog</h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}