import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = React.memo(({ onChange, name, value, placeholder }) => (
  <StyledTextLabel>
    {name}
    <StyledTextInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </StyledTextLabel>
));

const StyledTextInput = styled.input``;

const StyledTextLabel = styled.label``;

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
