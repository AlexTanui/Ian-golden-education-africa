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
            <img src="https://cdn-icons-png.flaticon.com/128/4844/4844459.png" className="img-fluid rounded-start" alt="..." />
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
            <img src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png" className="img-fluid rounded-start" alt="..." />
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
            <img src="https://cdn-icons-png.flaticon.com/128/10007/10007857.png" className="img-fluid rounded-start" alt="..." />
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
        
<div id="container4" class="d-flex flex-row mb-2">
          <div class="p-2 flex-lg-fill">
            <img src="https://assets.techrepublic.com/uploads/2022/05/AI-for-business-users.jpeg" alt="image1" />
          </div>
          <div id="custom-containerright1" class="p-2 flex-lg-fill">
            <h2 >Education Confidence</h2>
            <h4>Neque porro quisquam est qui dolorem <br />ipsum quia dolor sit amet, consectetur,<br /> adipisci velit..."</h4>
             <ul class="custom-listright">
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  Neque porro quisquam est  </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet, </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
            </ul>
          </div>
  
</div>
       
      </div>


       <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
        <div   id="container4" class="d-flex flex-row mb-2">
          
           <div  id="custom-containerleft" class="p-2 flex-lg-fill d-flex flex-column">
            <h2 >Achieve Academic Success</h2>
            <h4>Exceptional value with an easy-to-use platform.</h4>

            <ul class="custom-listleft">
            <li class="list-group-item  align-items-center"> <span class="badge ">󠀿󠀿✔</span>  Neque porro quisquam est qui </li>
            <li class="list-group-item  align-items-center"> <span class="badge ">󠀿󠀿✔</span>  dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item align-items-center"> <span class="badge ">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
            </ul>
          </div>
          <div class="p-2 flex-lg-fill">
            <img src="https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-1192241835_464834_qr50f5.jpg" alt="image1" />
          </div>
         
  
</div>
       
      </div>


       <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
<div   id="container4" class="d-flex flex-row mb-2">
          <div id="custom-containerright "class="p-2 flex-lg-fill">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwzw4B6mrVK6EUu7bDTnu7ZjynxAdDWh8Fx7mlxj7BlUidIYif5YwtZYu6QQNdl_A8YA&usqp=CAU" alt="image1" />
          </div>
          <div class="p-2 flex-lg-fill">
             <h2 >Unify, Manage, Excel</h2>
            <h4>Enhance your collaboration between <br />parents, teachers and students</h4>
             <ul class="custom-listright2">
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  Neque porro quisquam est </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
          </ul>
          \</div>
  
</div>
       
      </div>

 <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px' }}>
        
        <div   id="container4" class="d-flex flex-row mb-2">
           <div id="custom-containerleft"class="p-2 flex-lg-fill">
            <h2 >Full Clarity On Matters <br/>Education made Easy</h2>
            <h4>Complete transparency is what you’ll see.</h4>
            <ul class="custom-listleft2">
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  Neque porro quisquam est  </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  qui dolorem ipsum quia dolor sit amet,  </li>
            <li class="list-group-item"> <span class="badge ">󠀿󠀿✔</span>  consectetur, adipisci velit..." </li>
              </ul>
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
<div id="testimonials" className="container-fluid" style={{ backgroundColor: ' #F4FCFF', padding: '20px', margin: '10px' }}>
       <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div id="testimonials-card"class="card">
      <div class="card-body">
        
        <p class="card-text">Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh <br />euismod tincidunt ut laoreet dolore <br />magna aliquam consectetuer adipiscing elit, sed</p>
        <h3>A Name</h3>
        <h4>specialist</h4>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div id="testimonials-card" class="card">
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
        <h2 id="subscribe">subscribe to our News Letter</h2>
       <form style={{ textAlign: 'center', backgroundColor: '#F1FAFE', padding: '20px', borderRadius: '10px' }}>
  <input  placeholder='enter your email' type="email" id="email" name="email" style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: 'none' }} />
  <button type="submit" style={{ backgroundColor: '#fff', color: '#004B5B', padding: '8px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Subscribe</button>
</form>

      </div>

      {/* subcrition ends here */}
      <div id="banner" style={{ backgroundColor: '#fff', padding: '20px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 15px 5px rgba(0, 76, 93, 0.07)', width: '1500px',height:'200px', marginLeft: '200px' }}>
  <div class="d-flex flex-row mb-2">
    <div class="p-2 flex-lg-fill">
      <h2 className="text-start"id="circle-text">Take the first step to<br /> securing your academic future</h2>
      <h4 className="text-start">Get Started today</h4>
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
