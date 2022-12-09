import React from 'react';
import { useState } from 'react';

interface Item {
  name: string;
  count: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
  effect: () => void;
  price: number;
}

function Darknet() {
  const items = [
    createItem('Bot', 10, () => {}, useState(0)),
    createItem('Zero Day', 1000, () => {}, useState(0)),
    createItem('XSS', 100, () => {}, useState(0)),
    createItem('Script Kiddy Script', 10000, () => {}, useState(0)),
  ]

  return (
    <div>
      <ul>
        {
          items.map((item,index) =>
            <li key={index}>
              <button onClick={() => buy(item)}>{item.name}</button>
              - {item.price} Hacks - {item.count}
            </li>
          )
        }
      </ul>
    </div>
  );
}

function createItem(name: string, price: number, effect: () => void, stateHook: [number, React.Dispatch<React.SetStateAction<number>>]): Item {
  const [count, setter] = stateHook;
  return {
    name,
    effect,
    price,
    setter,
    count,
  };
}

function buy(item: Item) {
  
}

export default Darknet;