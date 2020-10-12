import postsService from '../../services/postsService';

export async function getStaticPaths() {
  const posts = await postsService.getPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await postsService.getPost(params.id);

  return {
    props: { post },
  };
}
