import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <div className="bot-card" onClick={handleClick}>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300"; 
        }}
      />
  
    <div className="botInfo">
    <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>
        Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
      </p>
      {handleDelete && (
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          x
        </button>
      )}
       </div>
    </div>
  );
}

export default BotCard;
