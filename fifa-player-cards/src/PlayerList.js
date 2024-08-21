import React from "react";
import Player from "./Player";
import players from "./players";
import './playerList.css'

function PlayersList (){
    return (
        <div className="container">
            {players.map((player,index) => (
                <Player Key={index} {...player} />
            ))}
        </div>
    )
}

export default PlayersList;