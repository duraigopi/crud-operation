import React, { useState } from 'react'
import {FaHome,FaCreditCard,FaLink,FaCube,FaHourglassHalf} from "react-icons/fa"
import {BsPostcard} from "react-icons/bs";
import {IoIosSettings} from "react-icons/io"
import {LuLogOut} from "react-icons/lu";
import axios from 'axios';
import DisplayData from './DisplayData';
import './Reports.css'

const Reports = () => {
    const[name,setName]=useState("");
    const[rname,setRname]=useState("");
    const[rdate,setRdate]=useState("");
    const[file,setFile]=useState("");

    const year=new Date();

    const Data={
        name:name,
        rname:rname,
        rdate:rdate,
        file:file
    }
    
    //Adding New Details
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios
        .post("http://localhost:5000/data",Data)
        .then((response)=>{
            if(response.status ===201){
                alert("Successful")
                setName("");
                setRname("");
                setRdate("");
                setFile("");
            }else{
                alert("error")
            }})
            .catch((error)=>{console.log(error)})
    }
    return (
        <>
            <header className='header'>
                <section className='section'>
                    <FaHourglassHalf className='headicon'/>
                    <p className='heading'>Glass&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/> House LLP</p>
                </section>
                <section className='section'>
                    <b className='logoutheading'>Hello:Admin&nbsp;&nbsp;</b><LuLogOut className='logouticon'/>
                </section>
            </header>
            <main className='maincontainer'>
                <nav>
                    <ul>
                        <li><FaHome/><p>Dashboard</p></li>
                        <li><FaCube/><p>Reports</p></li>
                        <li><FaCreditCard/><p>Payments</p></li>
                        <li><FaLink/><p>Links</p></li>
                        <li><BsPostcard/><p>News</p></li>
                        <li><IoIosSettings/><p>Settings</p></li>
                    </ul>
                </nav>
                <section className='reportsection'>
                    <h3>Monthly Reports</h3><br/><hr/>
                        <section className='centersection'>
                            <section className='formcontainer'>
                                <h3 className='formheading'>Monthly Report Upload</h3>
                                    <p>select respective User to upload Monthly reports</p>
                                <form className='form'> 
                                    <label htmlFor='employeename' className='formlabel'>Select Name</label>
                                    <select name="employeename" onChange={(e)=>setName(e.target.value)} >
                                        <option value="Select">SELECT</option>
                                        <option value="Ramesh Kumar">Ramesh Kumar</option>
                                        <option value="Saravanan">Saravanan</option>
                                        <option value="Gopi">Gopi</option>
                                        <option value="Kumar">Kumar</option>
                                    </select>
                                    <label htmlFor='reportname' className='formlabel'>Report Name</label>
                                    <input type="text" name='reportname' onChange={(e)=>setRname(e.target.value)}/>
                                    <label htmlFor='reportdate' className='formlabel'>Report Date(use date picker)</label>
                                    <input type="date" name='reportdate' onChange={(e)=>setRdate(e.target.value)}/>
                                    <label htmlFor='reportfile' className='formlabel'>Report PDF Upload(Multiple PDF File Upload)</label>
                                    <input type="file" name='reportfile' onChange={(e)=>setFile(e.target.value)}/>
                                    <button type='submit' className='submitbutton' onClick={handleSubmit}>Submit</button>
                                </form>
                            </section>
                        </section>
                        <DisplayData handleSubmit={handleSubmit}/>
                </section>
            </main>
            <footer className='footer'>
                <p>Copyright &copy; 2023-{year.getFullYear()}- All Rights Reserved, Glass House LLP. All Terms and Conditions Apply</p>
            </footer>
        </>
    )
}

export default Reports