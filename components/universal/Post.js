import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Post = React.memo(({ date, title, id }) => <StyledPost></StyledPost>);

const StyledPost = styled.div``;

Post.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
