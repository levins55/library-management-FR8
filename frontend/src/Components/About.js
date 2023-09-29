import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    A library is a collection of books, and possibly other materials and media,
                     that is accessible for use by its members and members of allied institutions
                      Libraries provide physical (hard copies) or digital access (soft copies) materials,
                       and may be a physical location or a virtual space, or both. A library's collection 
                       normally includes printed materials which can be borrowed, and a reference section 
                       of publications which are not permitted to leave the library and can only be viewed 
                       inside the premises. There may be other physical resources in many formats, such as 
                       commercial releases of films, television programmes, other video recordings, radio, 
                       music and audio recordings on DVD, Blu-ray, CD and cassette, besides access to 
                       information, music or other content held on bibliographic databases. <br/>

                        <br/>
                        The term "library" refers broadly to any place where people can find things they need
                        at their own pace; it does not refer specifically to an organizational structure.
                        
                       <br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
