import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import api from "../../services/api"


export default function CardList() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState(null);
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // userId está hard coded. Modificar para dinâmico após implementar auth
            const [deckResponse, cardsResponse] = await Promise.all([
                api.get(`/decks/${deckId}?userId=1`),
                api.get(`/cards`, {params: { deckId, userId: 1 } }),
            ]);

            setDeck(deckResponse.data);
            setCards(cardsResponse.data)
        };
        fetchData();
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

        <div>
            {cards.length === 0 ? (
                <p className="m-6 text-gray-800">Nenhum card neste deck. Clique no botão  <strong>Adicionar Cards</strong> para iniciar o seu deck</p>
            ) : (
                cards.map((card) => (
                    
                    <div 
                        key={card.id}
                        className="flex flex-col rounded-md h-18 w-[95%] m-auto mt-3 p-3 bg-white text-gray-800 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                        <p className="text-xl">{card.front}</p>
                        <p className="text-gray-500 italic">{card.back}</p>
                    </div>
                ))
            )}
        </div>
        
        </div>
    )
}