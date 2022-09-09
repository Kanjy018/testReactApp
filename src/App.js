import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {

  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);


  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };


  return (
    <div className="App">
      <h1>Nüber</h1>

      <div>
        <p>Testing file upload</p>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      </div>
      <div>
        <button onClick={uploadFile}>Upload File</button>
      </div>
      {fileStatus ? "File uploaded successfully" : ""}

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
