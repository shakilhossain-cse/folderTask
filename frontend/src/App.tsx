import React, { useState } from "react";
import styled from "styled-components";
import Folder from "./components/Folder";
import getFolderData, { IFolderData } from "./data/fakeData";

function App() {
  const [foldarData, setFoldarData] = useState<IFolderData>(getFolderData);
  return (
    <Application>
     
      <Folder data={foldarData} />
    </Application>
  );
}
const Application = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  height: 100vh;
`

export default App;
