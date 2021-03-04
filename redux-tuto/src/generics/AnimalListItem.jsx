import React from 'react';
import 'antd/dist/antd.css';
import { List, Checkbox } from 'antd';

export default function AnimalListItem({animal, onToggle, onDelete}){
  return (
    <List.Item>
      <Checkbox checked={animal.favorite} onChange={() => onToggle(animal)}/>
      {animal.name}
      <button onClick={ () => onDelete(animal)}>X</button>
    </List.Item>
  );
}
