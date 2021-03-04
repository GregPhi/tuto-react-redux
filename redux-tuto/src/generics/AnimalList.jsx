import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import AnimalListItem from './AnimalListItem';

export default function AnimalList({animals, onToggle, onDelete}){
  return (
    <List
      size="medium"
      bordered
      dataSource={animals}
      renderItem={animal => <AnimalListItem animal={animal} onToggle={onToggle} onDelete={onDelete} />}
    />
  );
}
