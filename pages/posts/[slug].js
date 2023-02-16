import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

export default function PostPage(props) {
  return (
    <div>
      <PostContent post={props.post}/>
    </div>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //  every 10 minutes
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slug = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slug.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
