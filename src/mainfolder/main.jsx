
import './main.css';
export function Main(){
    return(
 <div className="container-fluid" id="nan">
    <div className=' text-white' id='div1'>
        <div className='ms-4 mt-3'>
            <p>Netlinkz</p>
            <h5><i>Neuro</i></h5>
        </div>

        <div className='ms-4' id='mr'>
            <button className='bi bi-house form-select me-4'style={{"width" : "90%"}}><span className='ms-1'>Home</span></button>
            <select className='form-select bi bi-house' style={{"width" : "90%"}}  >
                  <option value=""><span className=''></span>Neuro Configurations</option>
                  <option value="Edge Configurations">Edge Configurations</option>
                  <option value="Mobile Clients">Mobile Clients</option>
                  <option value="Applications">Applications</option>
                  <option value="Traffic Management">Traffic Management</option>
        
           </select>
           <select className='form-select' style={{"width" : "90%"}}  >
                  <option value=""><span className=''></span>Neuro Operations</option>
                  <option value="Diagnostics and Repair">Diagnostics and Repair</option>
           </select>
           <select className='form-select' style={{"width" : "90%"}}  >
                  <option value=""><span className=''></span>Neuro NaaS</option>
                  <option value="Backbone Control Plane">Backbone Control Plane</option>
           </select>
           <select className='form-select bi' style={{"width" : "90%"}}  >
                  <option >Settings</option>
                  <option value="Edge Configurations">Edge Configurations</option>
                  <option value="Mobile Clients">Mobile Clients</option>
                  <option value="Applications">Applications</option>
                  <option value="Traffic Management">Traffic Management</option>
        
           </select>
           

            
        </div>
                
           

     </div>
     <div className='d-flex'>
          <div className='ms-4 mt-3 d-inline-flex'>
                  <span className='mt-2'>Tenant</span>
                   <select className='ms-2 form-select' id='w'>
                          <option>All</option>
                          <option>QA</option>
                  </select> 
          </div>
          <div className='d-flex' id='div2'>
                  <select className="form-select" id="selt">
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
      
                  </select>
                  <span className='bi bi-person ms-3 mt-4'></span>
                  <span className='ms-3 mt-4'>vsmadmin</span>
                  <span className='bi bi-power ms-3 mt-4' ></span>
          </div>
     </div>
 </div>
    )
}