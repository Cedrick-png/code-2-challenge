import { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotCard from './BotCard';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function addBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== botId));
      setArmy(army.filter((bot) => bot.id !== botId));
    });
  }

  return (
    <div>
      <YourBotArmy army={army} onRemove={removeBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAdd={addBot} onDischarge={dischargeBot} />
      <BotCard
        bot={bots}
        handleClick={() => console.log("Bot clicked:", bots.name)}
        handleDelete={(id) => dischargeBot(id)} // Call the discharge function
      />
    </div>
  );
}

export default App;