import { HobbiesData } from "./assets/Data.js";

function HobbiesPage() {
    return (
        <>
            <h2> These are my hobbies </h2>

            <div>
                {/* Here are my hobbies */}
                {
                    HobbiesData.map((hobbie, index) => {
                        return (
                            <a href={hobbie.link} key={index}>
                            <img src={hobbie.image} alt={hobbie.title} key={index} height={250} className="hobbiesImage"/>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HobbiesPage