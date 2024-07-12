import { useState } from 'react';

import Card from './components/Card';
import SelectMenu from './components/SelectMenu';

import {gallery} from './gallery.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([-1,-1]);
  const [lobby, setLobby] = useState([
    [ // Team 1
      { name: "Mahdi", icon: "bard", champion: "aatrox", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "jax", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "tristana", s1: "heal", s2: "heal",},
      { name: "Mahdi", icon: "jax", champion: "aurelion", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "ekko", s1: "heal", s2: "flash",}
    ],
    [ // Team 2
      { name: "Mahdi", icon: "jax", champion: "bard", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "jax", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "bard", s1: "flash", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "ekko", s1: "heal", s2: "flash",},
      { name: "Mahdi", icon: "jax", champion: "jax", s1: "heal", s2: "flash",}
    ]
  ]);

  return (
    <div style={{ backgroundImage: `url(${gallery.ui.bg})`}} className="relative h-screen flex flex-col items-center overflow-hidden">
      <div className=' flex flex-col h-full items-center '>
        <h2 className="font-bold text-white text-2xl">Team 1</h2>
        <div className='flex h-full flex-row'>
          {lobby[0].map((player, playerIndex) => {
            return (
              <Card
                onClick={() => {setSelectedPlayer([0,playerIndex])}}
                key={playerIndex}
                p={gallery.portraits[player.champion]}
                i={gallery.icons[player.icon]}
                s1={gallery.spells[player.s1]}
                s2={gallery.spells[player.s2]}
                name={player.name}
                champ={player.champion}
              />
            );
          })}
        </div>
      </div>

      <div className='flex flex-col h-full items-center'>
        <h2 className="font-bold text-white text-2xl ">Team 2</h2>
        <div className='flex h-full flex-row'>
        {lobby[1].map((player, playerIndex) => {
            return (
              <Card
                onClick={() => {setSelectedPlayer([1,playerIndex])}}
                key={playerIndex}
                p={gallery.portraits[player.champion]}
                i={gallery.icons[player.icon]}
                s1={gallery.spells[player.s1]}
                s2={gallery.spells[player.s2]}
                name={player.name}
                champ={player.champion}
              />
            );
          })}
        </div>
      </div>
      <SelectMenu selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} lobby={lobby} setLobby={setLobby}/>
    </div>
  );
}

export default App;
