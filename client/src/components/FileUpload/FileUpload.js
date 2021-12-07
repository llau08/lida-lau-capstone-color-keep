import { useState } from "react";
import axios from "axios";
import "../FileUpload/FileUpload.scss";

function FileUpload({ setPublicId, publicId }) {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wza7rorb");

    axios
      .post("https://api.cloudinary.com/v1_1/dxxh6kd2m/image/upload", formData)
      .then((res) => {
        console.log(res.data.public_id);

        setPublicId(res.data.public_id);
      })
      .catch((err) => {
        console.log("file upload", err);
      });
  };

  return (
    <article className="upload">
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
      </div>

      <img
        className="upload__img"
        src={`https://res.cloudinary.com/dxxh6kd2m/image/upload/${publicId}`}
        alt="default"
        style={{ width: 200 }}
        cloudname="dxxh6kd2m"
        publicId={`https://res.cloudinary.com/dxxh6kd2m/image/upload/${publicId}`}
      ></img>
    </article>
  );
}
export default FileUpload;
