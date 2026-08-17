import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import api from './services/api';
import DeckList from './components/DeckList';
import Banner from './components/Banner';
import NewDeckModal from './components/NewDeckModal';
import EditDeckModal from './components/EditDeckModal';
import CardList from './components/CardList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deckBeingEdited, setDeckBeingEdited] = useState(null);
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        const fetchDecks = async () => {
            // exibe o index do user 2
            const response = await api.get('/decks/?userId=1');

            setDecks(response.data)
        }
        fetchDecks()
    }, []);

  const addDeckToList = (newDeck) => {
    setDecks([...decks, newDeck])
  };

  const removeDeckFromList = (id) => {
    setDecks(decks.filter(deck => deck.id !== id));
  }

  const updateDeckInList = (updatedDeck) => {
    setDecks(decks.map(deck => {
      return deck.id === updatedDeck.id ? updatedDeck : deck
    }));
    setDeckBeingEdited(null);
  }
  
  return (
    <div>
      <Banner onOpenModal={() => setIsModalOpen(true)} />

      <Routes>
        <Route
          path='/'
          element={
            <DeckList 
              decks={decks} 
              onDelete={removeDeckFromList}
              onEdit={setDeckBeingEdited}
              onDeckClick={(id) => navigate(`/decks/${id}`)}
            />
          }
        />
        <Route
          path='/decks/:deckId'
          element={
            <CardList />
          }
        />
      </Routes>
      

      {isModalOpen && <NewDeckModal onClose={() => setIsModalOpen(false)} onDeckCreated={addDeckToList} />}

      {deckBeingEdited && <EditDeckModal deck={deckBeingEdited} onClose={() => setDeckBeingEdited(null)} onUpdate={updateDeckInList} />}
    </div>
  );
}

export default App;