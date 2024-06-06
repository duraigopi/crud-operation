import React, { useEffect, useState } from 'react'
import {FaRegFilePdf,FaRegEdit,FaRegTrashAlt} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const DisplayData = ({handleSubmit}) => {

    const [profiles,setProfiles]=useState([]);
    const navigate=useNavigate();

    //Get Data from API
    const getApiData=async()=>{
        await axios
        .get("http://localhost:5000/data")
        .then((response)=>{
            setProfiles(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getApiData();
    },[handleSubmit])

    //Delete Existing Data
    const handleDelete=async(id)=>{
        await axios
        .delete(`http://localhost:5000/data/${id}`)
        .then((response)=>{setProfiles(profiles.filter((profile)=>profile.id !== id))})
    }

    //Update Page 
    const goToUpdatePage=(e)=>{
        navigate('/edit',{state:profiles})
    }

    return (
        <section className='tablesection'>
            {profiles.map((profile)=>(
                <>
                    <h3 className='tableheading'>Previous Reports for {profile.name}</h3>
                        <table className='table' key={profile.id}>
                            <tr>
                                <th>Report Name</th>
                                <th>Date Added</th>
                                <th>Files</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>{profile.rname}</td>
                                <td>{profile.rdate}</td>
                                <td><FaRegFilePdf/>{profile.file}</td>
                                <td><button className="editbutton" onClick={()=>goToUpdatePage(profile)}><FaRegEdit/>
                                </button><button className="deletebutton" onClick={()=>handleDelete(profile.id)}><FaRegTrashAlt/></button></td>
                            </tr>
                        </table>
                </>
            ))}
        </section>
    )
}

export default DisplayData