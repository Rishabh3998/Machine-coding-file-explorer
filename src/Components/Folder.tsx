import React, { useState } from "react";

const Folder = ({ explorer }: any) => {
  console.log(explorer);
  const [open, setOpen] = useState(false);

  const handleClickFolder = () => {
    setOpen(!open);
  };

  const handleAddFileFolder = (fileType: string) => {
    if (fileType === "folder") {
      explorer.items.push({
        name: "New Folder",
        isFolder: true,
        items: [],
      });
    } else if (fileType === "file") {
      explorer.items.push({
        name: "New File",
        isFolder: false,
      });
    }
  };

  return (
    <div>
      <div
        style={{
          width: "20rem",
          backgroundColor: "grey",
          padding: "0.5rem",
          cursor: "pointer",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "space-between",
        }}
        onClick={handleClickFolder}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>{explorer.isFolder ? "🗂️" : "📄"}</div>
          {explorer.name}
        </div>
        <div>
          <button onClick={() => handleAddFileFolder("folder")}>
            + Folder
          </button>
          <button onClick={() => handleAddFileFolder("file")}>+ File</button>
        </div>
      </div>
      <div style={{ marginLeft: "0.5rem", display: open ? "block" : "none" }}>
        {explorer?.items?.map((item: any) => {
          return (
            <div
              style={{
                margin: "0.5rem",
                padding: "0.5rem",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <Folder explorer={item} key={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
