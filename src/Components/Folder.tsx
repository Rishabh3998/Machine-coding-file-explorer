import React, { useState } from "react";

const Folder = ({ explorer }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickFolder = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "grey",
          padding: "0.5rem",
          cursor: "pointer",
          display: "flex",
          gap: "0.5rem",
        }}
        onClick={handleClickFolder}
      >
        <div>{explorer.isFolder ? "🗂️" : "📄"}</div>
        {explorer.name}
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
