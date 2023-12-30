import React from 'react'
import puppy1 from "../resource/images/puppy-1.jpg"
import puppy2 from "../resource/images/puppy-2.jpg"
function Section2() {
  return (
    <>
     <section>
        <div className="container">
            <div className="flex">

                <div className="puppy-1">
                    <img src={puppy1} alt=""/>
                </div>

                <div className="miss">
                    <h1> puppy missing here!!</h1>
                </div>

                <div className="puppy-2">
                    <img src={puppy2} alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section2
