import { useEffect, useState } from 'react';

const Card = (props) => {
    return (
        <button onClick={props.onClick} className="hover:scale-105 transition-all rounded-sm bg-yellow-600 p-1 mx-2 my-1 shadow-md border border-yellow-800 flex flex-col ">
            <div style={{ backgroundImage: `url(${props.p})` }} className="flex-grow bg-cover bg-center flex flex-col justify-end relative">
                <div className='flex flex-col justify-end h-full bg-gradient-to-t from-black to-transparent p-2'>
                    <h1 className="text-lg self-center text-white">{props.name}</h1>
                    <h1 className="text-xl self-center text-white">{props.champ}</h1>
                    <div className="flex justify-center mt-2">
                        <img src={props.s2} className="self-center  m-0.5 h-8 w-8 rounded-full border-yellow-800 border-2" />
                        <img src={props.i} className="self-center m-1 h-16 w-16 rounded-full border-yellow-800 border-2" />
                        <img src={props.s1} className="self-center  m-0.5 h-8 w-8 rounded-full border-yellow-800 border-2" />
                    </div>
                </div>
            </div>
        </button>
    );
}

export default Card;
