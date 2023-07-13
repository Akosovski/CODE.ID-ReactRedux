import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AddRegionRequest } from "../ReduxSaga/Action/RegionAction";

export default function FormikSagaRegion(props) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImage] = useState();
  const [upload, setUpload] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: undefined,
      file: undefined,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("file", values.file);
      dispatch(AddRegionRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });
  const uploadConfig = (name) => (event) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event) => {
    event.preventDefault();
    setPreviewImage();
    setUpload(false);
  };
  return (
    <div>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <label>Photo</label>
        <div>
          {upload === false ? (
            <>
              <span>Kosong</span>
            </>
          ) : (
            <>
              <img src={previewImg} alt="img"></img>
              <span onClick={onClear}>Remove</span>
            </>
          )}
        </div>
        <div>
          <label>
            <span>upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              onChange={uploadConfig("file")}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit" onClick={formik.handleSubmit}>
            Simpan
          </button>
          <button type="submit" onClick={() => props.setDisplay(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
