import React,{Fragment,useState} from 'react'
import "./About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
   
    <div className='about__title'>
      <h3>Meet the Developers</h3>
    </div>
    <section className="about">
    
    <div className="row">

    <div className="column">
      <div><img className={toggleTab === 1 ?"about-img1":""}></img></div>
      <div><img className={toggleTab === 2 ?"about-img2":""}></img></div>
      <div><img className={toggleTab === 3 ?"about-img3":""}></img></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>Joy</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Het</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Rhythm</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h3>About Me</h3>
      <p>Joy is an aspiring Web developer with absolute proficiency in ReactJS and its various modules. Moreover, He is passinate about Artificial Inteligence and Machine Learning. He also dedicates his time on competitive coding platforms like Codechef and Leetcode.</p>
      
      <h3>Skills</h3>
      <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Designing</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>80%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>ReactJS</h3>
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

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
    <h3>About Me</h3>
      <p>⚡ Passionate INTP Logician with Constant Development Trait, always seeking improvement and learning new things. I am pursuing BTech with specialization in Computer Science and Technology at Chandubhai S. Patel Institute Of Technology, Charusat University, Changa.</p>

<p>🌱 My passion for learning new IT technologies has me exploring Offensive Security, Computer Networks, Virtualization, and System.</p>

<p>🔭 I have been a mentee in Microsoft's Cybersecurity Engage 2022 Program. I'm learning RedHat from RedHat Academy and working on my computer Networking skills. I'm Actively Participating in CTF Events.</p>

<p>💬 I love socializing! Ping me for a chat.</p>
      
      <h2>Skills</h2>
       <a className='skill' href='https://www.w3schools.com/cpp' target="_blank"><img alt='cplusplus' src='https://img.shields.io/badge/C++-100000?style=for-the-badge&logo=cplusplus&logoColor=white&labelColor=000000&color=00427E'/> </a>
        <a className='skill' href='https://www.w3schools.com/c/' target="_blank"><img alt='c' src='https://img.shields.io/badge/C-100000?style=for-the-badge&logo=c&logoColor=white&labelColor=000000&color=035697'/> </a> 
        <a className='skill' href='https://www.microsoft.com/openjdk' target="_blank"><img alt='openjdk' src='https://img.shields.io/badge/java-100000?style=for-the-badge&logo=openjdk&logoColor=white&labelColor=black&color=e26e03'/> </a>
        <a className='skill' href='https://react.dev/' target="_blank"><img alt='react' src='https://img.shields.io/badge/Reactjs-100000?style=for-the-badge&logo=react&logoColor=white&labelColor=black&color=ffffff'/> </a>
        <a className='skill' href='https://www.gnu.org/software/bash/' target="_blank"><img alt='gnu-bash' src='https://img.shields.io/badge/bash-100000?style=for-the-badge&logo=gnu-bash&logoColor=white&labelColor=000000&color=4EAA25'/> </a>
        <a className='skill' href='https://docs.microsoft.com/en-us/powershell/' target="_blank"><img alt='powershell' src='https://img.shields.io/badge/powershell-100000?style=for-the-badge&logo=powershell&logoColor=white&labelColor=000000&color=256DB8'/> </a> 
        <a className='skill' href='https://pop.system76.com/' target="_blank"><img alt='vagrant' src='https://img.shields.io/badge/vagrant-100000?style=for-the-badge&logo=vagrant&logoColor=white&labelColor=000000&color=104CAC'/> </a>
        <a className='skill' href='https://www.kali.org/' target="_blank"><img alt='kali-linux' src='https://img.shields.io/badge/Kali_Linux-100000?style=for-the-badge&logo=kali-linux&logoColor=white&labelColor=black&color=black'/> </a> 
        <a className='skill' href='canva.com' target="_blank"><img alt='canva' src='https://img.shields.io/badge/canva-100000?style=for-the-badge&logo=canva&logoColor=white&labelColor=000000&color=00C4CC'/> </a>
        <a className='skill' href='https://prezi.com/' target="_blank"><img alt='prezi' src='https://img.shields.io/badge/Prezi-100000?style=for-the-badge&logo=prezi&logoColor=white&labelColor=000000&color=5A99F7'/> </a>
        
    </div>
    

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>
      <h3>About Me</h3>
      
      <p>Hello, and welcome to our website!</p>
      <p>My name is Rhythm, and I'm a front-end web developer with proficiency in HTML and CSS. In addition to my skills in web development, I'm also very interested in the world of AI/ML and cybersecurity, particularly ethical hacking.</p>
      <p>I believe that technology should be used to make the world a better place, and I'm passionate about finding ways to use my skills to help achieve that goal. Thank you for stopping by, and I look forward to connecting with you soon!</p>
      <p>I love socializing! Ping me for a chat.</p>
      <h2>Skills</h2>
      <h3>HTML and CSS :</h3>
      <p>I have extensive experience creating websites and user interfaces using these foundational web technologies.</p>
      <h3>Cybersecurity</h3>
      <p>I'm knowledgeable in various cybersecurity concepts and threats.</p>
      <h3>Ethical Hacking</h3>
      <p>I'm knowledgeable in various hacking attacks and their types.</p>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About