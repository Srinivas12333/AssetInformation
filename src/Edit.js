import React from 'react'


const Edit = () => {
  return (
    <div >
      <center>
      <div style={{'width':'100%','backgroundColor':'lightyellow','padding':'10px'}}>
          <h1>Asset Information Form</h1>
    
          <form>
             <label>Employee Name:</label> &nbsp;
             <input type="text" placeholder='Employee Name'/> 
             
             <label>Location:</label> &nbsp;
             <input type="text" placeholder='Location'/>  

             <label>Client:</label> &nbsp;
             <input type="text" placeholder='Client'/> <br/> <br/>

             <label>Designation:</label> &nbsp;
             <input type="text" placeholder='Designation'/> <br/> <br/>

             <label>Employee Id:</label> &nbsp;
             <input type="text" placeholder='Employee Id'/> <br/> <br/>

             <label>Laptop Type&Model:</label> &nbsp;
             <input type="text" placeholder='Laptop Type&Model'/> <br/> <br/>

             <label>Processor:</label> &nbsp;
             <input type="text" placeholder='Processor'/> <br/> <br/>

             <label>Ram:</label> &nbsp;
             <input type="text" placeholder='Ram'/> <br/> <br/>

             <label>Storage&Type:</label> &nbsp;
             <input type="text" placeholder='Storage&Type'/> <br/> <br/>

             <label>Serial Number:</label> &nbsp;
             <input type="text" placeholder='Serial Number'/> <br/> <br/>

             <label>Adaptor Serial Number:</label> &nbsp;
             <input type="text" placeholder='Adaptor Serial Number'/> <br/> <br/>

             <label>Softwares:</label> &nbsp;
             <input type="text" placeholder='Softwares'/> <br/> <br/>

             <label>Official Email:</label> &nbsp;
             <input type="email" placeholder='Official Email'/> <br/> <br/>

             <label>Licenses:</label> &nbsp;
             <input type="text" placeholder='Licenses'/> <br/> <br/>

             <label>Department:</label> &nbsp;
             <input type="text" placeholder='Department'/> <br/> <br/>

             <label>Contact No:</label> &nbsp;
             <input type="text" placeholder='Contact No'/> <br/> <br/>

             <label>Asset Code:</label> &nbsp;
             <input type="text" placeholder='Asset Code'/> <br/> <br/>

             <label>Asset Owner:</label> &nbsp;
             <input type="text" placeholder='Asset Owner'/> <br/> <br/>

             <label>Asset HandoverDate:</label> &nbsp;
             <input type="date" placeholder='Asset HandoverDate'/> <br/> <br/>

             <label>Operating System:</label> &nbsp;
             <input type="text" placeholder='Operating System'/> <br/> <br/>

             <label>KeyBoard:</label> &nbsp;
             <input type="text" placeholder='KeyBoard'/> <br/> <br/>

             <label>Mouse:</label> &nbsp;
             <input type="text" placeholder='Mouse'/> <br/> <br/>

             <label>Status:</label> &nbsp;
             <input type="text" placeholder='Status'/> <br/> <br/>

             <label>Received From:</label> &nbsp;
             <input type="text" placeholder='Received From'/> <br/> <br/>

             <label>Remarks:</label> &nbsp;
             <input type="text" placeholder='Remarks' style={{'width':'150px','height':'40px'}}/> <br/> <br/>
            </form>
          </div>
      </center>
      
    </div>
  )
}

export default Edit
