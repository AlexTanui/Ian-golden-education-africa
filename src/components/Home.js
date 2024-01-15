import React from 'react';
import './Home.css'
const Home = () => {
  return (
    <div>
     <div className="container-fluid" style={{ backgroundColor: '#F1FAFE', padding: '170px', margin: '5px',  height: '530px', flexShrink: '0' }}>

        <h2 class="text-start" id="intro"><span>Welcome to Goldsworth.</span><br/>
            Your Education is our <br/>Responsibility.</h2>
        <p class="text-start" id="introparagraph">Neque porro quisquam est qui dolorem ipsum <br/>quia dolor sit amet, consectetur,<br/> adipisci velit..."</p>
      </div>
          {/* first card for signup */}
          <div id="introcard" className="card text-center">
  <div  className="card-body">
    <p className="text-start">Neque porro quisquam est qui dolorem<br/> ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
    <a  id="card-btn" href="#" class="btn btn-primary">Sign up</a>
  </div>
  </div>
          
          {/* card for courses */}
<div id="course-container" className="container" style={{ backgroundColor: '#fff', padding: '20px', display: 'flex', flexWrap: 'wrap' }}>

      <div id="card-courses" className="card mb-3" style={{ maxWidth: '500px', flex: '1', margin: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">Economics and <br/> Financial analysis</h5>
              
            </div>
          </div>
        </div>
      </div>

      <div id="card-courses" className="card mb-3" style={{ maxWidth: '500px', flex: '1', margin: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">Health Economics and <br/> Policy</h5>
             
            </div>
          </div>
        </div>
      </div>

      <div id="card-courses" className="card mb-3" style={{ maxWidth: '500px', flex: '1', margin: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">Project Planning and<br/> Management</h5>
             
            </div>
          </div>
        </div>
      </div>

    </div>

          
      {/* end card here */}
      
      <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
<div class="d-flex flex-row mb-2">
          <div class="p-2 flex-lg-fill">
            <img src="" alt="image1" />
          </div>
          <div class="p-2 flex-lg-fill">
            <h2 >Education Confidence</h2>
            <h4>Neque porro quisquam est qui dolorem <br/>ipsum quia dolor sit amet, consectetur,<br/> adipisci velit..."</h4>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  Neque porro quisquam est  </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet, </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>

          </div>
  
</div>
       
      </div>


       <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
        <div class="d-flex flex-row mb-2">
          
           <div class="p-2 flex-lg-fill">
            <h2 >Achieve Academic Success</h2>
            <h4>Exceptional value with an easy-to-use platform.</h4>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  Neque porro quisquam est qui </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
   
          </div>
          <div class="p-2 flex-lg-fill">
            <img src="" alt="image1" />
          </div>
         
  
</div>
       
      </div>


       <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
<div class="d-flex flex-row mb-2">
          <div class="p-2 flex-lg-fill">
            <img src="" alt="image1" />
          </div>
          <div class="p-2 flex-lg-fill">
             <h2 >Unify, Manage, Excel</h2>
            <h4>Enhance your collaboration between <br/>parents, teachers and students</h4>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  Neque porro quisquam est </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
          </div>
  
</div>
       
      </div>

 <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
        <div class="d-flex flex-row mb-2">
           <div class="p-2 flex-lg-fill">
            <h2 >Full Clarity On Matters <br/>Education made Easy</h2>
            <h4>Complete transparency is what you’ll see.</h4>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  Neque porro quisquam est  </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item"> <span class="badge bg-primary rounded-pill">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>

        </div>
          <div class="p-2 flex-lg-fill">
           
          </div>
         
  
</div>
       
      </div> 
      {/* feedback starts here */}
 <div id="feedback" className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        <h1>A healthy dose of feedback</h1>
        
      </div>


      {/* end of feedback */}

      {/* testimonials */}
<div className="container-fluid" style={{ backgroundColor: ' #F4FCFF', padding: '20px', margin: '10px' }}>
       <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        
        <p class="card-text">Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh <br />euismod tincidunt ut laoreet dolore <br />magna aliquam consectetuer adipiscing elit, sed</p>
        <h3>A Name</h3>
        <h4>specialist</h4>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        
        <p class="card-text">Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh <br />euismod tincidunt ut laoreet dolore<br /> magna aliquam consectetuer adipiscing elit, sed</p>
                <h3>A Name</h3>
                <h4>specialist</h4>
                
      </div>
    </div>
  </div>
</div>
      </div>

      {/* testimonials ends here  */}

      {/* subcrition  */}


      <div id="subscription" clclassName="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px', marginLeft: '700px'}}>
        <h2>Subscribe to our News Letter</h2>
       <form style={{ textAlign: 'center', backgroundColor: '#F1FAFE', padding: '20px', borderRadius: '10px' }}>
  <input type="email" id="email" name="email" style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none' }} />
  <button type="submit" style={{ backgroundColor: '#fff', color: '#004B5B', padding: '8px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Subscribe</button>
</form>

      </div>

      {/* subcrition ends here */}
      <div id="banner" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 15px 5px rgba(0, 76, 93, 0.07)', width: '1500px',height:'200px', marginLeft: '200px' }}>
  <div class="d-flex flex-row mb-2">
    <div class="p-2 flex-lg-fill">
      <h2 id="circle-text">Take the first step to<br /> securing your academic future</h2>
      <h4>Get Started today</h4>
    </div>
    <div class="p-2 flex-lg-fill">
      <div class="semi-circle"></div>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default Home;
