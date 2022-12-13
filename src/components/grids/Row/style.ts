import styled from '@emotion/styled';

interface Props {
  justifyContent: string;
  alignItems: string;
  width: number;
  height: number;
  padding: number;
  fullHeight: boolean;
  fullWidth: boolean;
}

const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => (width === 0 ? 'fit-content' : `${width}px`)};
  height: ${({ height }) => (height === 0 ? 'fit-content' : `${height}px`)};
  padding: ${({ padding }) => (padding === 0 ? 'unset' : `${padding}px`)};
  width: ${({ width, fullWidth }) =>
    fullWidth ? '100%' : width === 0 ? 'fit-content' : `${width}px`};
  height: ${({ height, fullHeight }) =>
    fullHeight ? '100%' : height === 0 ? 'fit-content' : `${height}px`};
`;

export { Wrapper };
