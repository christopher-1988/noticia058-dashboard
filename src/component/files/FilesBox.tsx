import React, { useRef } from "react";
import fileIcon from "@assets/icons/upload.svg";

interface Props {
  title?: string;
  label: string;
  handleFileSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilesBox = ({ title, label, handleFileSelection }: Props) => {
  const upLoadRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    upLoadRef.current?.click();
  };

  return (
    <div className="dotted-file-box">
      <input
        multiple
        id="fileInput"
        name="file"
        type="file"
        ref={upLoadRef}
        style={{ display: "none" }}
        accept=".pdf,image/*,.doc,.docx"
        onChange={handleFileSelection}
      />
      <div
        className="dotted-file"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={fileIcon} alt="file" />
      </div>
      {title && <h3 className="text-center">{title}</h3>}
      <label className="dotted-file-text text-center">{label}</label>
    </div>
  );
};

export default FilesBox;
