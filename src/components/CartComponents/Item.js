import styled from "styled-components";

const Item = styled.div`
  background-color: var(--white);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 90px;
  margin: 5px 0;
  position: relative;

  div {
    position: relative;
    width: 20%;
  }

  div > span {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50px;
    border: 1px solid grey;
    z-index: 2;
    background-color: white;
  }

  img {
    width: 60px;
    height: 60px;
    margin: 12px;
    border-radius: 5px;
    border: 1px solid grey;
  }

  p {
    min-width: 25%;
    max-height: 70px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  span {
    min-width: 25%;
    text-align: center;
    line-height: 20px;
  }

  strong {
    text-decoration: underline;
    line-height: 20px;
  }

  svg {
    position: absolute;
    top: 7px;
    left: 60px;
    width: 20px;
    height: 20px;
    color: #F00;
    background-color: #FFF;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default Item;
