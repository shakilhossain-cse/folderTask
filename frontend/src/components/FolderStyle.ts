import styled from "styled-components";

const FolderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
const FolderBody = styled.div`
  margin-top: 10px;
  background-color: #ddd;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
const FolderButtons = styled.div`
button{
    padding: 5px;
    font-size: 1rem;
    margin:0 8px;
}
`;
const SubFolder = styled.div`
  display: ${({ showFolder }: { showFolder: boolean }) =>
    showFolder ? "block" : "none"};
`;

export { FolderContainer, FolderBody, FolderButtons, SubFolder };
