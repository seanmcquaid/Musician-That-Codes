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

const PostPageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const ArticleText = styled.article``;

const HomeLink = styled(Link)``;

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
