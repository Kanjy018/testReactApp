import React, { useState, useEffect } from "react";
import "./App.css" 
import { API, Storage } from "aws-amplify";
import { Authenticator, useTheme, Image, View, Flex} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Header } from "./Header"

const components = {
  Header,

};

const formFields = {
  signUp: {
    Driver: {
      labelHidden: false,
      placeholder: 'Driver/Customer',
      isRequired: true,
      label: 'Sign-up to become a Nüber driver?',
    }
  }
};

export default function App() {
  const {tokens} = useTheme();

  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);


  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
  };

  
  return (
    <Authenticator 
      components={components}
      formFields={formFields}
      >
    {({ signOut, user }) => (
    <div className="App">
      <Flex justifyContent="center">
        <Image
          alt="logo"
          src= {require("./photos/nuber_header.PNG")}
        />
      </Flex>
      <div>
        <p>Please upload your drivers licence.</p>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      </div>
      <div>
        <button style={{marginTop: "30px"}} onClick={uploadFile}>Upload File</button>
      </div>
      <div style={{marginTop: "30px"}}>
        {fileStatus ? "File uploaded successfully" : ""}
      </div>
      
      
      <button className="signOutbtn" onClick={signOut}>Sign out</button>
      <withAuthenticator />
    </div> )}
    </Authenticator>
    );
}




