import PostItem from './post-item';
import classes from './posts-grid.module.css';

export default function PostGrid({ posts }) {
  return (
    <div>
      <ul className={classes.grid}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
