import React from 'react'

const Talk = () => {
  return (
    <>
      <div className="conatiner talk my-5">
        <h1 className='my-5'>Let's Talk</h1>
        <div className="container-fluid mx-5">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
                <div className="form">
                    <form action="/" get="post">
                        <h2 className='my-5'>Get In Touch</h2>
                       <div className="input-text name">
                       <input type="Text" value='' placeholder='Firsr Name' />
                       <input type="Text" value='' placeholder='Last Name' />
                       </div>
                       <div className="input-text-2 my-5">
                       <input type="email" value='' placeholder='Email' />
                      </div>
                       <div className="input-text-2 my-5">
                       <input type="Text" value='' placeholder='Subject' />
                      </div>
                       <div className="input-text-2 my-5" >
                       <input type="Text" value='' placeholder='Message' />
                      </div>
                      <button type='btn' name='Lets talk' className='btn-main mx-5'>Submit</button>
                    </form>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 right">
           <div className="add mb-4">
              <h1>43A Nature Hut 3</h1>
              <div className="row my-3">
              <div className="col-6 col-md-6 col-sm6">
              <i class="fa-solid fa-globe"></i>
              </div>
              <div className="col-6 col-md-6 col-sm-6">
              <p>Home Address</p>
              </div>
              </div>
           </div>
           <div className="add my-4">
              <h1>shobhitstthakur105@gmail.com</h1>
              <div className="row my-3">
              <div className="col-6 col-md-6 col-sm6">
              <i class="fa-solid fa-globe"></i>
              </div>
              <div className="col-6 col-md-6 col-sm-6">
              <p>Personal Mail</p>
              </div>
              </div>
           </div>
           <div className="add my-4">
              <h1>+91 9068605920</h1>
              <div className="row my-3">
              <div className="col-6 col-md-6 col-sm6">
              <i class="fa-solid fa-globe"></i>
              </div>
              <div className="col-6 col-md-6 col-sm-6">
              <p>Personal Contact</p>
              </div>
              </div>
           </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Talk
