import React from "react";
import { IFolderData } from "../data/fakeData";
type Iprops = { data: IFolderData };
const Folder = ({ data }: Iprops) => {
  if (data.isFolder) {
    return (
      <div>
        <div>
          <span>📁 {data.name}</span>
        </div>
        <div>
          {data.items.map((folder) => (
            <Folder data={folder} key={folder._id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span>📹 {data.name}</span>;
  }
};

export default Folder;
