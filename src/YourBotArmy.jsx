import React from "react";

function YourBotArmy({ army, onRemove, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {army.map((bot) => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => onRemove(bot)}>Remove from Army</button>
            <button onClick={() => onDischarge(bot.id)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;