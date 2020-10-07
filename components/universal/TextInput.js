import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = React.memo(({}) => (
  <StyledTextLabel>
    <StyledTextInput />
  </StyledTextLabel>
));

const StyledTextInput = styled.input``;

const StyledTextLabel = styled.label``;

TextInput.propTypes = {};

export default TextInput;
