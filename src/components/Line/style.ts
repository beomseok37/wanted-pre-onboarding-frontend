import styled from '@emotion/styled';

interface CellProps {
  size: 'small' | 'big';
  borderRightNone?: boolean;
}

const Cell = styled.p<CellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({ size }) => (size === 'small' ? 1 : 3)};
  border-right: ${({ borderRightNone }) =>
    borderRightNone ? 'unset' : '1px solid #aaa'};
  cursor: pointer;
`;

Cell.defaultProps = {
  borderRightNone: true,
};

export { Cell };
