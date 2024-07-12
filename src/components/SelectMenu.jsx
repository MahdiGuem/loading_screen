import { useEffect, useState } from 'react';
import {gallery} from '../gallery.jsx';

const tabs = [
    {
        img: gallery.ui.tab_champion,
        label: 'Champion'
    },
    {
        img: gallery.ui.tab_icon,
        label: 'Icon'
    }, 
    {
        img: gallery.ui.tab_spell,
        label: 'Spells'
    },
]
const SelectMenu = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const updateLobby = (i,what) => {
        props.setLobby(oldLobby => {
            const newLobby = [...oldLobby]
            newLobby[props.selectedPlayer[0]][props.selectedPlayer[1]][what]=i
            return newLobby
        })
    }

    return(
        <div className={(props.selectedPlayer[1] >=0 ? 'block': ' hidden ')+' absolute w-full h-full'}>
            <div className='absolute w-full h-full bg-black opacity-50'/>
            <div onClick={() => props.setSelectedPlayer([-1,-1])} className='absolute w-full h-full flex justify-center items-center '>
                <div onClick={(e) => e.stopPropagation()} className=' h-3/4 w-3/4 rounded-sm bg-yellow-600 mx-2 my-1 shadow-md border border-yellow-800 flex flex-row'>
                    <div className='h-full'>
                        {tabs.map((tab, index) => (
                            <button onClick={() => setSelectedTab(index)} key={index} className={(index == selectedTab? ' bg-yellow-600 border-r-0 font-bold': ' bg-yellow-800 hover:bg-yellow-700') +'  h-1/3 aspect-square p-6 rounded-sm  border border-yellow-800 flex flex-col justify-center items-center'}>
                                <p>{tab.label}</p>
                                <img src={tab.img} className={(index == selectedTab? ' scale-100': ' scale-75')+' transition-transform'} />
                            </button>
                        ))}
                    </div>
                    <div className={`${selectedTab === 0 ? '' : 'hidden'} grid grid-cols-5 gap-2 p-2 w-full h-full overflow-y-scroll `}>
                        {Object.entries(gallery.portraits).map(([key, src]) => (
                            <button onClick={() => updateLobby(key,"champion")} key={key} style={{ backgroundImage: `url(${src})`}} className=' hover:scale-105 hover:brightness-125 self-center bg-center transition-all active:scale-100 active:brightness-75 bg-contain h-full bg-no-repeat' >
                            </button>
                        ))}
                    </div>
                    <div className={`${selectedTab === 1 ? '' : 'hidden'} items-start grid grid-cols-4 gap-2 p-2 w-full h-full overflow-y-scroll`}>
                        {Object.entries(gallery.icons).map(([key, src]) => (
                            <button onClick={() => updateLobby(key,"icon")} key={key} style={{ backgroundImage: `url(${src})`}} className=' hover:scale-105 hover:brightness-125 self-center bg-center transition-all active:scale-100 active:brightness-75 bg-contain h-full bg-no-repeat' >
                            </button>
                        ))}
                    </div>
                    <div className={`${selectedTab === 2 ? '' : 'hidden'} items-start grid grid-cols-4 gap-2 p-2 w-full h-full overflow-y-scroll`}>
                        {Object.entries(gallery.spells).map(([key, src]) => (
                            <button onClick={() => updateLobby(key,"s1")} key={key} style={{ backgroundImage: `url(${src})`}} className=' hover:scale-105 hover:brightness-125 self-center bg-center transition-all active:scale-100 active:brightness-75 bg-contain h-full bg-no-repeat' >
                            </button>
                        ))}
                    </div>
                    <div className={`${selectedTab === 2 ? '' : 'hidden'} items-start grid grid-cols-4 gap-2 p-2 w-full h-full overflow-y-scroll`}>
                        {Object.entries(gallery.spells).map(([key, src]) => (
                            <button onClick={() => updateLobby(key,"s2")} key={key} style={{ backgroundImage: `url(${src})`}} className=' hover:scale-105 hover:brightness-125 self-center bg-center transition-all active:scale-100 active:brightness-75 bg-contain h-full bg-no-repeat' >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SelectMenu;