import React, { useState } from "react";
import Folder from "./components/Folder";
import getFolderData, { IFolderData } from "./data/fakeData";

function App() {
  const [foldarData, setFoldarData] = useState<IFolderData>(getFolderData);
  return (
    <div>
      <Folder data={foldarData} />
    </div>
  );
}

export default App;
