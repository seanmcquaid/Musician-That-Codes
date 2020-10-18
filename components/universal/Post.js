import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const Post = React.memo(({ date, title, id }) => (
  <StyledPostLink href={`/posts/${id}`}>
    <PostInfoContainer>
      <PostDateTime dateTime={parseISO(date)}>
        {format(parseISO(date), 'LLLL d, yyyy')}
      </PostDateTime>
      <PostTitle>{title}</PostTitle>
    </PostInfoContainer>
  </StyledPostLink>
));

const StyledPostLink = styled(Link)``;

const PostInfoContainer = styled.div``;

const PostTitle = styled.h4``;

const PostDateTime = styled.time``;

Post.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Post;
