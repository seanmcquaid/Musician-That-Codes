import styled from 'styled-components';
import postsService from '../../services/postsService';

export default function PostPage({ postData }) {
  return <PostPageContainer></PostPageContainer>;
}

const PostPageContainer = styled.div``;

export async function getStaticPaths() {
  const paths = postsService.getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await postsService.getPostDataById(params.id);
  return {
    props: {
      postData,
    },
  };
}
