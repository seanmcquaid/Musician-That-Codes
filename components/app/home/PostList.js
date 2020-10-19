import styled from 'styled-components';
import PropTypes from 'prop-types';
import Post from '../../universal/Post';

const PostList = React.memo(({ posts }) => (
  <StyledPostList>
    {posts.map(({ date, id, title }) => (
      <ListItem key={id}>
        <Post date={date} id={id} title={title} />
      </ListItem>
    ))}
  </StyledPostList>
));

const StyledPostList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow: auto;
`;

const ListItem = styled.li``;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PostList;
