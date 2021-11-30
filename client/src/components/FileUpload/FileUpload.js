import { useState } from "react";
import axios from "axios";
function FileUpload() {
  const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("Choose File");
  const onChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="file" onChange={onChange} />
      <button>Upload</button>
    </form>
  );
}
export default FileUpload;
