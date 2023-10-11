import React from 'react'
import './Faq.css'
function Faq() {
  return (
    <div class="faq">
    
<div class="our-faq-wrapper">
<div class="container">
  <div class="row">
    <div class="col-md-12">

                      <div class="faq-title">
                          <h2 id="qq">Frequently Asked Questions(FAQ)</h2><br/><br/>
                      </div>
                  </div>
    <div class="col-lg-6">
      <div class="accordion" id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is the Student Information Manager Portal? </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">  &#8226; The Student Information Manager Portal is an online platform designed to help students manage their academic information, schedules, and important university-related tasks in one place and remind their tasks and know their desired Activities </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How do I access the portal? </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">   &nbsp; &nbsp; &#8226; You can access the portal by visiting  "www.edutech.com"  and logging in with your university credentials. If you're a new user, you may need to register first and then continue your Works and Record your Performance here. </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> What can I do in the portal? </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body"> 
            <p>&#8226; View your class schedule and complete task/Activities, and grades </p>
            <p>&#8226; Register for courses and make changes to your course selections.</p>
            <p>&#8226; Access and download course materials, syllabi, and assignments.</p>
            <p>&#8226; Communicate with professors and advisors for clarifiying doubts.</p> </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="accordion" id="accordion2">
        <div class="card">
          <div class="card-header" id="heading4">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4"> How can I get help or support if I encounter issues with the portal?</button>
            </h5>
          </div>
          <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordion2">
            <div class="card-body"><p>&#8226; If you encounter any issues or have questions about using the portal, you can reach out to our IT support team by emailing support@email.com or by calling [phone number]. You can also visit the IT Help Desk on campus for in-person assistance.</p> </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading5">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Can I access the portal on my mobile device?</button>
            </h5>
          </div>
          <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordion2">
            <div class="card-body"> <p>&#8226;  Yes, the portal is mobile-responsive, so you can access it on your smartphone or tablet. We recommend using a modern web browser for the best experience and Complete and View all your Activities and Reports.</p> </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="heading6">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">Is my personal information secure in the portal?</button>
            </h5>
          </div>
          <div id="collapse6" class="collapse show" aria-labelledby="heading6" data-parent="#accordion2">
            <div class="card-body"><p>&#8226;   Yes, we take the security and privacy of your personal information seriously. The portal uses advanced encryption and security measures to protect your data. Always log out of the portal when you're finished using it, especially on shared computers.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Faq