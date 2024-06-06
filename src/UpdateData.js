import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateData = () => {
  //Receiving Data From goToUpdatePage function  
  const navigate=useNavigate();
  const getData=useLocation();
  const data=getData.state;
  console.log(data)

  const [name,setName]=useState(data.name);
  const [rname,setRname]=useState(data.rname);
  const [rdate,setRdate]=useState(data.rdate);
  const [file,setFile]=useState(data.file);
  const id=data.id;

  //Defining Object Format
  const Data={
    id:id,
    name:name,
    rname:rname,
    rdate:rdate,
    file:file
  }

  //Updating the data to JSON server Function
  const EditData= async(e) =>{
    e.preventDefault();
    await axios
    .put(`http://localhost:5000/data/${id}`,Data)
    .then((response)=>{
      if(response.status===200){
        alert("Data Updated Successfully")
        setName("");
        setRname("");
        setRdate("");
        setFile("");        
        navigate('/')
      }else{
        alert("Error While Updating Data")
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <section className='reportsection'>
      <section className='centersection'>
        <section className='formcontainer'>
          <h3 className='formheading'>Update Monthly Report</h3>
            <p>select respective User to upload Monthly reports</p>
          <form className='form'> 
            <label htmlFor='employeename' className='formlabel'>Select Name</label>
            <select name="employeename" value={name} onChange={(e)=>setName(e.target.value)} >
              <option value="Select">SELECT</option>
              <option value="Ramesh Kumar">Ramesh Kumar</option>
              <option value="Saravanan">Saravanan</option>
              <option value="Gopi">Gopi</option>
              <option value="Kumar">Kumar</option>
            </select>
            <label htmlFor='reportname' className='formlabel'>Report Name</label>
            <input type="text" name='reportname' value={rname} onChange={(e)=>setRname(e.target.value)}/>
            <label htmlFor='reportdate' className='formlabel'>Report Date(use date picker)</label>
            <input type="date" name='reportdate' value={rdate} onChange={(e)=>setRdate(e.target.value)}/>
            <label htmlFor='reportfile' className='formlabel'>Report PDF Upload(Multiple PDF File Upload)</label>
            <input type="file" name='reportfile'value={file} onChange={(e)=>setFile(e.target.value)}/>
            <button type='submit' className='submitbutton' onClick={EditData}>Submit</button>
          </form>
        </section>
      </section>
    </section>
  )
}

export default UpdateData