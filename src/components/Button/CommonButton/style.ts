import styled from '@emotion/styled';

interface Props {
  disabled: boolean;
  noBorder: boolean;
}

const Button = styled.button<Props>`
  color: #000;
  border-radius: 4px;
  padding: ${({ noBorder }) => (noBorder ? '0' : '10px')};

  border: ${({ noBorder }) => (noBorder ? 'unset' : '1px solid #ccc')};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    background: ${({ disabled, noBorder }) =>
      disabled ? '#fff' : noBorder ? 'transparent' : '#ccc'};
    color: ${({ disabled }) => (disabled ? '#000' : '#fff')};
  }

  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export { Button };
