import React from 'react';

const Contact = () => (
    <div>
    <div className="my-5">
          <h3>Contact Us</h3>
      </div>
      <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your name" />
                  </div>
                  <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" />
                  </div>
                  <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                  
                 <div class="mb-3">
                   <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 </div>
                 <div class="col-12">
                 <button class="btn" type="submit">
                   Submit form
                   
                   </button>
              </div>
            </div>
        </div>
        </div>
      </div>
);

export default Contact;
