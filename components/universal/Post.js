import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const Post = React.memo(({ date, title, id }) => (
  <StyledPost href={`/posts/${id}`}>
    <PostTitle>{title}</PostTitle>
    <PostDateTime dateTime={parseISO(date)}>
      {format(date, 'LLLL d, yyyy')}
    </PostDateTime>
  </StyledPost>
));

const StyledPost = styled(Link)``;

const PostTitle = styled.h4``;

const PostDateTime = styled.time``;

Post.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
