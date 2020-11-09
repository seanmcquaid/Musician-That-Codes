import Head from 'next/head';
import { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import PostList from '../components/app/home/PostList';
import { Button, H1, P } from '../components/universal';
import postsService from '../services/postsService';

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const currentPosts = posts.slice(currentPage * 5, (currentPage + 1) * 5);
  const totalPages = useMemo(
    () => Math.floor(posts.length / 5) + (posts % 5 !== 0 ? 1 : 0),
    [posts]
  );

  const prevButtonOnClick = useCallback(() => {
    setCurrentPage((pageNumber) => pageNumber - 1);
  }, []);

  const nextButtonOnClick = useCallback(() => {
    setCurrentPage((pageNumber) => pageNumber + 1);
  }, []);

  return (
    <HomePageContainer>
      <Head>
        <title>Home</title>
      </Head>
      <Header>
        <H1>The Musician That Codes</H1>
        <P>
          Hello and welcome to my blog! My name is Sean and I am a Software
          Engineer that specializes in Web Development. I will primarily post
          about coding best practices, general advice and how to successfully
          transition into the industry!
        </P>
      </Header>
      <Main>
        <PostList posts={currentPosts} />
        <PageButtonsContainer>
          <Button onClick={prevButtonOnClick} disabled={currentPage === 0}>
            Prev
          </Button>
          <PageNumber>
            Page {currentPage + 1} of {totalPages}
          </PageNumber>
          <Button
            onClick={nextButtonOnClick}
            disabled={currentPage + 1 === totalPages}
          >
            Next
          </Button>
        </PageButtonsContainer>
      </Main>
    </HomePageContainer>
  );
}

export async function getStaticProps() {
  const posts = postsService.getSortedPosts();
  return {
    props: { posts },
  };
}

const HomePageContainer = styled.div`
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
  max-width: 520px;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  max-width: 520px;
`;

const PageButtonsContainer = styled.div``;

const PageNumber = styled.span`
  font-family: 'Karla', sans-serif;
  padding: 1rem;
`;
