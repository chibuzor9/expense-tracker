import styled from 'styled-components';

const ButtonDiv = styled.div`
  width: 1.75rem;
  background-color: red;
  height: 0.5rem;
  border: 1px solid black;
  margin: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
`;

const DisableButton = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <ButtonDiv onClick={props.delete} />
  );
};

export default DisableButton;
