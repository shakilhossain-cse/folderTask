import React, { useState } from "react";
import { IFolderData } from "../data/fakeData";
import {
  FolderContainer,
  FolderBody,
  SubFolder,
  FolderButtons,
} from "./FolderStyle";
import Modal from "./Modal";
type Iprops = { data: IFolderData };
const Folder = ({ data }: Iprops) => {
    const [showFolder, setShowFolder] = useState<boolean>(false);
    const [isOpenModal, setSsOpenModal] = useState<boolean>(false);
    

    const andFolder = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      setSsOpenModal(true);
    };
  if (data.isFolder) {
    return (
      <>
        {isOpenModal && <Modal />}

        <FolderContainer>
          <FolderBody onClick={() => setShowFolder(!showFolder)}>
            <span>📁 {data.name}</span>
            <FolderButtons>
              <button onClick={andFolder}>Folder ➕</button>
              <button>File ➕</button>
              <button>Delete ✖</button>
            </FolderButtons>
          </FolderBody>
          <SubFolder showFolder={showFolder}>
            {data.items.map((folder) => (
              <Folder data={folder} key={folder._id} />
            ))}
          </SubFolder>
        </FolderContainer>
      </>
    );
  } else {
    return <span>📹 {data.name}</span>;
  }
};

export default Folder;
