import Head from 'next/head';
import styled from 'styled-components';
import { H1 } from '../components/universal';
import postsService from '../services/postsService';

export default function Home({ posts }) {
  return (
    <HomePageContainer>
      <Head>Home</Head>
      <H1>Sean McQuaid's Code Blog</H1>
    </HomePageContainer>
  );
}

export async function getStaticProps() {
  const posts = await postsService.getPosts();
  return {
    props: {
      posts,
    },
  };
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
