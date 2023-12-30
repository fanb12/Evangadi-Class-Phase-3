import React from 'react'
import puppy3 from "../resource/images/puppy-3.jpg"
import puppy4 from "../resource/images/puppy-4.jpg"
function Section4() {
  return (
    <>
      <section>
        <div className="container">
            <div className="flex">
                <div className="puppy-3">
                          <img src={ puppy3} alt=""/>
                </div>

                <div className="puppy-4">
                          <img src={ puppy4} alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section4
