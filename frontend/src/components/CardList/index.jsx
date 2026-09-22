import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import api from "../../services/api"


export default function CardList() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState(null);

    useEffect(() => {
        const fetchDeck = async () => {
            // userId está hard coded. Modificar para dinâmico após implementar auth
            const response = await api.get(`/decks/${deckId}?userId=1`);
            setDeck(response.data);
        };
        fetchDeck();
    }, [deckId])

    return (
        <div className="bg-gray-100 h-screen p-4 m-auto">
            <div className="flex justify-around">
                <div className="flex">
                    <Link 
                        to="/"
                        className="border rounded p-1 mr-3"
                    >
                        ← Retornar
                    </Link>
                    <h2 className='text-xl'>{deck ? deck.name : "Carregando..."}</h2>
                </div>
                
                <button className="border rounded p-1">+ Adicionar Card</button>
            </div>
        
        </div>
    )
}