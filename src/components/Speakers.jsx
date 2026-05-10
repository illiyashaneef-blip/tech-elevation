import React from 'react'
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
    id:1,
name:"AMINT JIMOH",
role:"Data and business Analyst",
image:slider65


  },
  {
    id:1,
name:"ABDUL GANIYU OLAGUNJU",
role:"Data and business Analyst",
image:slider45



  },
  {
id:1,
name:"modesta uzo",
role:"Data and business Analyst",
image:slider34

  },
  {
  id:1,
name:"OLUWADAMILOLA GBADAMOSI",
role:"Data and business Analyst",
image:slider99

   
              

  }
  
  
]



const Speakers =() =>{
  return(
    <Container>
      <div>
        <h2>Featured speakers</h2>
        <p> Learn From experienced professionals shaping the tech industry</p>
      </div>
      <Row>
        {speakers.map((speaker) => (
          <div key={speakers.id} className='col-12 col-md-6 col-1g-4'>
          <div>
            <img src={speaker.image} alt=""  />
             
            <div>
          <h5>{speaker.name}</h5>
          <p>{speaker.role}</p>
            </div>
          </div>
          </div>

        ))

        }
      </Row>
    </Container>
  )
    
  
}

export default Speakers
