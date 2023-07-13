import React, { useState } from "react";
import RegionApi from "../api/RegionApi";

export default function RegionCreate(props) {
  const [value, setValue] = useState({
    name: undefined,
  });
  
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };
    await RegionApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data success Create");
    });
  };

  return (
    <div>
      <h2>Add Regions</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name :</label>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange("name")}
          ></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}
