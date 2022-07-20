
import React from 'react'
import Image from 'next/image'


const Newsletter = () => {
    return (
        <div className="container-fluid-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{ height: "250px" }}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">Ready to get started</h3>
                        <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: "45px" }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className ="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                            </svg></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <Image className="img-fluid mt-5" style={{ height: "250px" }} src="/img/newsletter.png" width="400px" height="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter