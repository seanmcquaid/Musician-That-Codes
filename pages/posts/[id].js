import styled from 'styled-components';
import postsService from '../../services/postsService';
import Head from 'next/head';
import Link from 'next/link';
import { H1 } from '../../components/universal';

export default function PostPage({ postData }) {
  return (
    <PostPageContainer>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ArticleText>
        <Header>
          <H1>{postData.title}</H1>
          <HomeLink href="/">Go back</HomeLink>
        </Header>
        <Main dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Main>
      </ArticleText>
    </PostPageContainer>
  );
}

const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  max-width: 600px;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  max-width: 600px;
`;

const ArticleText = styled.article`
  font-family: 'Karla', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HomeLink = styled(Link)`
  font-family: 'Karla', sans-serif;
  font-size: 1rem;
`;

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
