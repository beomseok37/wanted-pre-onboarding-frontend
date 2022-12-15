import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px 0;
`;

const AttributeWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
  border-radius: 5px;
`;

const TodoWrapper = styled.div`
  height: 400px;
  margin-top: 40px;
  overflow-y: overlay;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
  }
`;

export { Wrapper, AttributeWrapper, TodoWrapper };
