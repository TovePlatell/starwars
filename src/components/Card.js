
import {useState} from "react"

const Card = ({character}) => {
    const [showMore, setShowMore] = useState({});

    console.log("inuti card", character)

    return(
<>
         {character.map((char, index) => {
            return(
             <div key={index} className="bg-gray-400 pb-10 m-2 w-1/2 ml-auto mr-auto cursor-pointer" onClick={() => setShowMore({...showMore, [index]: !showMore[index]})}>
                <p className="text-white pt-10 font-bold">{char.name}</p>
                {
                    showMore[index] && (
                        <div className="pt-10">
                        <p className="text-white">Gender: {char.gender}</p>
                        <p className="text-white">Height: {char.height} cm</p>
                        <p className="text-white">Eye Color: {char.eye_color}</p>
                        <p className="text-white">Hair Color: {char.hair_color}</p>
                        <p className="text-white">Weight: {char.mass} kg</p>
                        </div>
                    )
                }
             </div>
         )})}
</>
    )
}
export default Card