import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { H4 } from '../universal';

const Post = React.memo(({ date, title, id }) => (
  <PostInfoContainer>
    <PostDateTime dateTime={parseISO(date)}>
      {format(parseISO(date), 'LLLL d, yyyy')}
    </PostDateTime>
    <H4>
      <Link href={`/posts/${id}`}>{title}</Link>
    </H4>
  </PostInfoContainer>
));

const PostInfoContainer = styled.div`
  border-bottom: 1px solid black;
  margin: 1rem 0;
`;

const PostDateTime = styled.time`
  font-family: 'Karla', sans-serif;
  font-size: 1rem;
`;

Post.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Post;
