import { MTGData } from './assets/Data.js'

function MagicTheGatheringPage() {
    return (
        <>
            <h2> Magic the Gathering </h2>
            <p> I play the Commander format of Magic the Gathering. </p>
            <p> Here you can see the commanders of the decks I play. </p>
            <br />

            <div>
                {/* Here are my decks */}
                {
                    MTGData.map((hobbie, index) => {
                        return (
                            <a href={hobbie.link} key={index}>
                            <img src={hobbie.image} alt={hobbie.title} key={index} height={400} className="mtgImage"/>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MagicTheGatheringPage

