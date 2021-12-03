import { useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";
function FileUpload({ setPublicId, publicId }) {
  const [imageSelected, setImageSelected] = useState("");
  // const [publicId, setPublicId] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "t3gvyimy");

    axios
      .post("https://api.cloudinary.com/v1_1/dee8ga7np/image/upload", formData)
      .then((res) => {
        console.log(res.data.public_id);

        setPublicId(res.data.public_id);
      })
      .catch((err) => {
        console.log("file upload", err);
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
        publicId={`https://res.cloudinary.com/dee8ga7np/image/upload/${publicId}`}
      />
    </div>
  );
}
export default FileUpload;
