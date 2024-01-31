import React from "react";
import Folder from "./Folder";

const Container = ({ explorer }: any) => {
  return (
    <div
      style={{
        width: "25rem",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <Folder explorer={explorer} />
    </div>
  );
};

export default Container;
