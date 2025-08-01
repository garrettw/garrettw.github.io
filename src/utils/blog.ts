import { getCollection } from 'astro:content';

/**
 * Returns blog posts that have a title, a pubDate in the past, and are not drafts/archived.
 * You can extend this filter as needed.
 */
export async function getPublishedBlogPosts() {
  const posts = await getCollection('blog');
  return posts.filter(
    (post) =>
      post.data.title &&
      post.data.pubDate &&
      post.data.pubDate < new Date() &&
      (!post.data.status || post.data.status === 'published')
  );
}
