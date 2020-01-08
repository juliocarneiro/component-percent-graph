import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  > div:first-child {
    background: ${props => (props.data < 0 ? "red" : props.color)};
    width: ${props => (props.data > 0 ? props.data : 0.1)}%;
    margin-right: 10px;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    height: 100%;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Styled;
