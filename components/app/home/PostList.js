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

const StyledPostList = styled.ol``;

const ListItem = styled.li``;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PostList;
