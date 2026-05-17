import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import slider76 from '../assets/speak1.jpeg'
import slider65 from '../assets/speak2.jpeg'
import slider45 from '../assets/speak3.jpeg'
import slider34 from '../assets/speak4.jpeg'
import slider99 from '../assets/speak5.jpeg'


const speakers =[
  {
id:1,
name:"ABDUL AZEEZ MUD SODIQ",
role:"Data and business Analyst",
image: slider76



  },
  {
    id:2,
name:"AMINT JIMOH",
role:"Data and business Analyst",
image:slider65


  },
  {
    id:3,
name:"ABDUL GANIYU OLAGUNJU",
role:"Data and business Analyst",
image:slider45



  },
  {
id:4,
name:"modesta uzo",
role:"Data and business Analyst",
image:slider34

  },
  {
  id:5,
name:"OLUWADAMILOLA GBADAMOSI",
role:"Data and business Analyst",
image:slider99

   
              

  }
  
  
]



const Speakers =() =>{

 const [activeId, setActiveId] = useState(1);





  return(
    <Container className='speakers-section'>
      <div>
        <h2>Featured speakers</h2>
        <p> Learn From experienced professionals shaping the tech industry</p>
      </div>
      <div className="speaker-container">
      {speakers.map((speaker) => {
        const isActive = speaker.id === activeId;

        return (
          
          <div
            key={speaker.id}
            className={`speaker-card ${isActive ? "active" : ""}`}
            onClick={() => setActiveId(speaker.id)}
          >
            <img src={speaker.image} alt={speaker.name} />

            {/* Overlay */}
            <div className="overlay">
              {isActive && (
                <>
                  <h4>{speaker.name}</h4>
                  <p>{speaker.role}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>

    </Container>
  )
    
  
}

export default Speakers
