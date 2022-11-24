export interface IFolderData {
  _id: string;
  name: string;
  isFolder: boolean;
  items: IFolderData[];
}

const getFolderData: IFolderData = {
  _id: "123",
  name: "root",
  isFolder: true,
  items: [
    {
      _id: "124",
      name: "public",
      isFolder: true,
      items: [
        {
          _id: "125",
          name: "public nasted one",
          isFolder: true,
          items: [],
        },
        {
          _id: "126",
          name: "public nasted two",
          isFolder: true,
          items: [],
        },
      ],
    },
    {
      _id: "127",
      name: "src",
      isFolder: true,
      items: [
        {
          _id: "128",
          name: "src nasted one",
          isFolder: true,
          items: [],
        },
        {
          _id: "129",
          name: "src nasted two",
          isFolder: true,
          items: [],
        },
      ],
    },
  ],
};
export default getFolderData;
