import { CardData } from './assets/Data.js'
import { Card } from './utiles/Card.jsx'


function AboutPage() {
    return (
      <>
        <div> 
          <a href="https://github.com/PabloTutorMoegle">
            <img src="https://unavatar.io/pablotutormoegle" className="userIMG" alt="PabloIMG" />
          </a>
          <h2> Pablo Tutor Moegle </h2>
          <p>Full Stack Developer</p>
        </div>

        <h2 style={{ padding: "2rem" }}>Social Media</h2>

        <div className="divCards">
          {/* Here are my social media pages */}
          {
            CardData.map((card, index) => {
              return (
                <a href={card.link} key={index}>
                <Card title={card.title} image={card.image} />
                </a>
              )}
            )
          }
        </div>
      </>
    )
}

export default AboutPage