import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pok}) {
  const [showBack , setShowBack]= useState(false)
  const handleToggle = () => {
    setShowBack(!showBack)

  }


  return (
    <Card>
      <div on onClick={handleToggle}>
        <div className="image">
          <img alt="oh no!" src= { showBack ? pok.sprites.back : pok.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{pok.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pok.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
