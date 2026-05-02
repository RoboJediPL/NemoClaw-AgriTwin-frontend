// src/components/FilterableList/index.tsx
import React from 'react';
import { List, ListItem } from '@mui/material';

interface FilterableListProps {
  items: any[];
  renderItem: (item: any) => JSX.Element;
}

const FilterableList = ({ items, renderItem }: FilterableListProps) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{renderItem(item)}</ListItem>
      ))}
    </List>
  );
};

export default FilterableList;