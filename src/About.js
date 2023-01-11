import React,{Fragment,useState} from 'react'
import "./About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Skills</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Experience</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>My Story</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>
       <h3>I Am Web Designer And Developer Having 10 Year Of Experience</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae accusantium totam mollitia facilis debitis porro sunt repellat eveniet dignissimos.</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Skills</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>

       <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Developer</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>80%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Designer</h3>
          <div className="progress">
            <div className="progress-bar Designer">
              <span>90%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Javascript</h3>
          <div className="progress">
            <div className="progress-bar Javascript">
              <span>85%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>PhotoShop</h3>
          <div className="progress">
            <div className="progress-bar PhotoShop">
              <span>88%</span>
            </div>
          </div>
        </div>
       </div>

       </div>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Web Developer</h3>
      <span>2014-2022</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Graphic Designer</h3>
      <span>2015-2022</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Photoshop</h3>
      <span>2017-2022</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About