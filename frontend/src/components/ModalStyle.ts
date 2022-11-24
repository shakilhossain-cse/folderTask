import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWraper = styled.div`
  width: 40em;
  height: 20em;
  background-color: #d3d3d3;
  opacity: 100%;
`;
const ModalHead = styled.div`
 display: flex;
 justify-content: space-between;
 padding:5px 20px;
 background-color: #ddd;
button{
    padding: 10px;
    cursor: pointer;
}
`;
const ModalBody = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  input{
    width: 80%;
    padding: 10px;
    font-size: 20px;
  }
`;
const ModalFooter = styled.div`
  padding: 5px 20px;
  background-color: #ddd;
  height: 20%;
  display: flex;
  align-items: center;
  button {
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

export { ModalContainer, ModalWraper, ModalHead, ModalBody, ModalFooter };
