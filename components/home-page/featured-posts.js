import PostGrid from '../posts/post-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
export default FeaturedPosts;
