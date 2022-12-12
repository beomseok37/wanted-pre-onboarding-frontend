import styled from '@emotion/styled';

interface Props {
  disabled: boolean;
}

const Button = styled.button<Props>`
  padding: 10px;
  border: 1px solid #aaa;
  background: #fff;
  color: #000;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    background: ${({ disabled }) => (disabled ? '#fff' : '#aaa')};
    color: ${({ disabled }) => (disabled ? '#000' : '#fff')};
  }

  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export { Button };
