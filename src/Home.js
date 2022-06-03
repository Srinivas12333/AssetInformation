import React, {useState} from 'react'
import {db} from './firebase'

const Home = () => {
    const [data,setData] = useState({
        employeename :"",
        location:"",
        client:"",
        designation:"",
        employeeid:"",
        laptoptype:"",
        processor:"",
        Ram:"",
        storagetype:"",
        serialnumber:"",
        adaptorserialnumber:"",
        softwares:"",
        officialemail:"",
        licenses:"",
        department:"",
        contactno:"",
        assetcode:"",
        assetowner:"",
        assethandoverdate:"",
        operatingsystem:"",
        keyboard:"",
        mouse:"",
        status:"",
        receivedfrom:"",
        remarks:""
    })
    const {employeename,location,client,designation,employeeid,
    laptoptype,processor,ram,storagetype,serialnumber,
     adaptorserialnumber,softwares,officialemail,licenses,
    department,contactno,assetcode,assetowner,assethandoverdate,
    operatingsystem,keyboard,mouse,status,receivedfrom,remarks } = {...data}
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        // db.child('asset-data').push(
        //   data,
        // )
        
        
        
    }
  return (
    <div>
      <center>
      <div style={{'width':'100%','backgroundColor':'lightblue','padding':'10px'}}>
          <h1>Asset Information Form</h1>
    
          <form onSubmit={submitHandler}>
          
             <label>Employee Name:</label> 
             <input type="text" placeholder='Employee Name' className = "employee"
             name='employeename' value={employeename} required onChange = {changeHandler}/> <br/> <br/>
             
             
             <label>Location:</label> 
             <input type="text" placeholder='Location' style={{'marginLeft':'100px'}}
             name='location' value={location} required onChange = {changeHandler}/>  <br/> <br/>
              

             <label>Client:</label>&nbsp;
             <input type="text" placeholder='Client' style={{'marginLeft':'115px'}}
             name='client' value={client} required onChange = {changeHandler}/> <br/> <br/>

             <label>Designation:</label> &nbsp;
             <input type="text" placeholder='Designation' style={{'marginLeft':'68px'}}
             name='designation' value={designation} required onChange = {changeHandler}/> <br/> <br/>

             <label>Employee Id:</label> &nbsp;
             <input type="text" placeholder='Employee Id' style={{'marginLeft':'65px'}}
             name='employeeid' value={employeeid} required onChange = {changeHandler}/> <br/> <br/>

             <label>Laptop Type&Model:</label>
             <input type="text" placeholder='Laptop Type&Model'style={{'marginLeft':'12px'}}
             name='laptoptype' value={laptoptype} required onChange = {changeHandler}/> <br/> <br/>

             <label>Processor:</label> &nbsp;
             <input type="text" placeholder='Processor' style={{'marginLeft':'78px'}}
             name='processor' value={processor} required onChange = {changeHandler}/> <br/> <br/>

             <label>Ram:</label> &nbsp;
             <input type="text" placeholder='Ram' style={{'marginLeft':'112px'}}
             name='ram' value={ram} required onChange = {changeHandler}/> <br/> <br/>

             <label>Storage&Type:</label> &nbsp;
             <input type="text" placeholder='Storage&Type' style={{'marginLeft':'45px'}}
             name='storagetype' value={storagetype} required onChange = {changeHandler}/> <br/> <br/>

             <label>Serial Number:</label> &nbsp;
             <input type="text" placeholder='Serial Number' style={{'marginLeft':'45px'}}
             name='serialnumber' value={serialnumber} required onChange = {changeHandler}/> <br/> <br/>

             <label>Adaptor SerialNumber:</label> 
             <input type="text" placeholder='Adaptor Serial Number'
             name='adaptorserialnumber' value={adaptorserialnumber} required onChange = {changeHandler}/> <br/> <br/>

             <label>Softwares:</label> &nbsp;
             <input type="text" placeholder='Softwares' style={{'marginLeft':'78px'}}
             name='softwares' value={softwares} required onChange = {changeHandler}/> <br/> <br/>

             <label>Official Email:</label> &nbsp;
             <input type="email" placeholder='Official Email' style={{'marginLeft':'56px'}}
             name='officialemail' value={officialemail} required onChange = {changeHandler}/> <br/> <br/>

             <label>Licenses:</label> &nbsp;
             <input type="text" placeholder='Licenses' style={{'marginLeft':'87px'}}
             name='licenses' value={licenses} onChange = {changeHandler}/> <br/> <br/>

             <label>Department:</label> &nbsp;
             <input type="text" placeholder='Department' style={{'marginLeft':'60px'}}
             name='department' value={department} onChange = {changeHandler}/> <br/> <br/>

             <label>Contact No:</label> &nbsp;
             <input type="text" placeholder='Contact No' style={{'marginLeft':'65px'}}
             name='contactno' value={contactno} required onChange = {changeHandler}/> <br/> <br/>

             <label>Asset Code:</label> &nbsp;
             <input type="text" placeholder='Asset Code' style={{'marginLeft':'65px'}}
             name='assetcode' value={assetcode} required onChange = {changeHandler}/> <br/> <br/>

             <label>Asset Owner:</label> &nbsp;
             <input type="text" placeholder='Asset Owner' style={{'marginLeft':'55px'}}
             name='assetowner' value={assetowner} onChange = {changeHandler}/> <br/> <br/>

             <label>Asset HandoverDate:</label> &nbsp;
             <input type="date" placeholder='Asset HandoverDate' style={{'marginLeft':'55px'}}
             name='assethandoverdate' value={assethandoverdate}/> <br/> <br/>

             <label>Operating System:</label> &nbsp;
             <input type="text" placeholder='Operating System' style={{'marginLeft':'15px'}}
             name='operatingsystem' value={operatingsystem} onChange = {changeHandler}/> <br/> <br/>

             <label>KeyBoard:</label> &nbsp;
             <input type="text" placeholder='KeyBoard' style={{'marginLeft':'72px'}}
             name='keyboard' value={keyboard} onChange = {changeHandler}/> <br/> <br/>

             <label>Mouse:</label> &nbsp;
             <input type="text" placeholder='Mouse'  style={{'marginLeft':'90px'}}
             name='mouse' value={mouse} onChange = {changeHandler}/> <br/> <br/>

             <label>Status:</label> &nbsp;
             <input type="text" placeholder='Status' style={{'marginLeft':'94px'}}
             name='status' value={status} onChange = {changeHandler}/> <br/> <br/>

             <label>Received From:</label> &nbsp;
             <input type="text" placeholder='Received From' style={{'marginLeft':'30px'}}
             name='receivedfrom' value={receivedfrom} required onChange = {changeHandler}/> <br/> <br/>

             <label>Remarks:</label> &nbsp;
             <input type="text" placeholder='Remarks' style={{'width':'150px','height':'40px','marginLeft':'55px'}}
             name='remarks' value={remarks} onChange = {changeHandler}/> <br/> <br/>

             <input type="submit" value="Submit"/>
             


           </form>
          </div>
      </center>
    </div>
  )
}

export default Home
