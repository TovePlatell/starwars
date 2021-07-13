import {useEffect, useRef,useState} from "react"
import axios from "axios"
import Card from "./Card"

const CardList = () => {
    const page = useRef(1)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const fetchCharacter = async () => {
            await axios.get(`https://swapi.dev/api/people/?page=${page.current}`).then(res => {
                if(!res.data.next)return
            setCharacters([...characters, res.data.results])
            page.current += 1
            })
        }
        fetchCharacter()
    }, [characters])

    return(
    <div>
    {
       characters && characters.length && characters.map((character, index) => (
            <Card key={index} character={character}/>
            ))
    }
    </div>
)}

export default CardList