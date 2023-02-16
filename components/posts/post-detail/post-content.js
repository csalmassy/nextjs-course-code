import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const dummyPost = {
  slug: 'getting-started-nextjs2',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2023-02-15',
};

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img(image) {
      return (
      <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
      );
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
    </article>
  );
}
