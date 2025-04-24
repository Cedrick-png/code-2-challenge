import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd, onDischarge }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="botGrid">
        {bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            handleClick={() => onAdd(bot)} 
            handleDelete={() => onDischarge(bot.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;