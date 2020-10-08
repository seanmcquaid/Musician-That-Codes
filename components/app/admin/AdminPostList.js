import styled from 'styled-components';
import PropTypes from 'prop-types';
import Post from '../../universal/Post';

const AdminPostList = React.memo(({posts}) => (
  <StyledAdminPostList>
    {posts.map(postInfo => (
      <AdminPost>
        <Post />
      </AdminPost>
    ))}
  </StyledAdminPostList>
));

const StyledAdminPostList = styled.ol``;

const AdminPost = styled.li``;


AdminPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default AdminPostList;
