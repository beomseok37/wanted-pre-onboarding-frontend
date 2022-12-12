import styled from '@emotion/styled';

interface Props {
  activate: boolean;
}

const P = styled.p<Props>`
  color: ${({ activate }) => (activate ? 'red' : '#aaa')};
  font-size: 12px;
  padding: 8px;
`;

export { P };
