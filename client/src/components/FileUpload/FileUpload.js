import { useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";
function FileUpload() {
  const [imageSelected, setImageSelected] = useState("");
  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "t3gvyimy");

    axios
      .post("https://api.cloudinary.com/v1_1/dee8ga7np/image/upload", formData)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <Image
        style={{ width: 200 }}
        cloudName="dee8ga7np"
        publicId="https://res.cloudinary.com/dee8ga7np/image/upload/v1638535314/ccqgdtxsrektjfobwzfh.jpg"
      />
      //ASK ABOUT URL FROM DATABASE
    </div>
  );
}
export default FileUpload;
