import React, { useState, useEffect } from "react";
import axios from "axios";

import { Upload } from "lucide-react";
import { Container, Card, Title, UploadLabel, FileName, HiddenInput, Button, JobDescInput, SubmitForm } from "./UploadPage.styles";
import Loader from "../UI_Components/Loader";
import ScoreMeter from "../UI_Components/ScoreMeter";


export default function UploadPage({ onUpload }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [score, setSocre] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loader, setLoader] = useState(false);


  console.log("check env value", process.env.REACT_APP_BACKEND_API_URL)
  const url = `${process.env.REACT_APP_BACKEND_API_URL}/api/resume-upload`
  useEffect(()=>{
if(!file){
  return
}
const fileReader = new FileReader();
fileReader.onload = ()=>{
setPreviewUrl(fileReader.result)
}
fileReader.readAsDataURL(file)
  },[file])
  

  
  const handleFileChange = (e) => {
    if(e.target.files && e.target.files.length===1){
setFile(e.target.files[0]);
    }
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // if (file) onUpload(file);
    try{
      const formData = new FormData(); //the FormData is a browser api so we no need to install any 3rd party. It is used to send files in binary format along with any JSOn values
      formData.append('JD', jobDesc)
      formData.append('resumefile', file)
      // for(let [key, value] of formData.entries()){
      //   console.log('check formData', key, value, formData.entries())
      // }
      setLoader(true)
const res = await axios.post(`${url}`,formData)
setSocre(res?.data?.score)
setFeedback(res?.data?.feedback)
    }
    catch(err){

    }
    finally{
      setLoader(false);
    }
    
  };

  const handleJobDesc = (e)=>{
setJobDesc(e.target.value)
  }

  return (
    <Container>
    {loader && <Loader />}
      <Card>
        <Title>📄 Upload a Document</Title>
        <SubmitForm onSubmit={handleSubmit}>
          <UploadLabel>
            <Upload size={32} color="#6b7280" />
            <FileName>{file ? "File uploaded successfully" : "Click to upload PDF/DOCX"}</FileName>
            <HiddenInput
              type="file"
              accept=".pdf,.docx,.txt"
              onChange={handleFileChange}
            />
          </UploadLabel>
          
          

          <JobDescInput onChange={(e)=>handleJobDesc(e)} type="text" placeholder="Enter the job description"/>
<Button type="submit" disabled={!file || !jobDesc}>
           Submit
          </Button>
        </SubmitForm>
     
        {
          file && <div
            // onClick={() => window.open(previewUrl, "_blank")}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              cursor: "pointer",
              width: 300,
              height: 400,
              overflow: "hidden",
            }}
          >
            <iframe
              src={previewUrl}
              title="PDF Preview"
              width="100%"
              height="100%"
            /></div>
        }
      </Card>
      {score && feedback && <Card>
            {score && <ScoreMeter score={score} />}
            {feedback && <div>{feedback}</div>}
             
      </Card>}
    </Container>
  );
}
