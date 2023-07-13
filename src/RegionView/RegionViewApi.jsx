import React, { useEffect, useState } from "react";
import RegionApi from "../api/RegionApi";
import RegionCreate from "./RegionCreate";

export default function RegionViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  
  useEffect(() => {
    RegionApi.list().then((data) => {
      setRegion(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    RegionApi.deleted(id).then(() => {
      window.alert("Data successfully deleted");
      setRefresh(true);
    });
  };
  
  return (
    <div>
      {display ? (
        <RegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplay(true)}>Add Regions</button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {region && region.map((reg) => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
                      <button onClick={() => onDelete(reg.regionId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}