import { Container, Group, SimpleGrid, Title, Text, Chips, Chip, Center } from '@mantine/core';
import React, { useState } from 'react';
import { ItemCard } from '../components/ItemCard';
import { categoryData, getProducts, getProductsByCategories } from '../mock-data/data';
import { IProduct } from '../types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useDocumentTitle } from '@mantine/hooks';
import { useSearchParams } from 'react-router-dom';

const MotionSimpleGrid = motion(SimpleGrid);

interface CatalogProps {
  products?: IProduct[];
}

export const Catalog: React.FC<CatalogProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<string[]>(searchParams.get('filters')?.split(',')!);

  useDocumentTitle('Products');

  const superFunction = (values: string[]) => {
    // console.log(values);
    setFilters(values);
    if (values) {
      setSearchParams({
        filters: values.join(','),
      });
    } else {
      setSearchParams({});
    }
  };

  const products = getProductsByCategories(filters);

  return (
    <Container size='xl'>
      <Group my='lg' align='center'>
        <Text>Filter by category:</Text>
        <Chips multiple value={filters} onChange={superFunction} variant='outline'>
          {categoryData.map((cat) => (
            <Chip value={cat} key={cat}>
              {cat}
            </Chip>
          ))}
        </Chips>
      </Group>
      <MotionSimpleGrid
        layout
        cols={4}
        spacing='lg'
        breakpoints={[
          {
            maxWidth: 'xs',
            cols: 1,
            spacing: 'lg',
          },
          {
            maxWidth: 'sm',
            cols: 2,
          },
        ]}>
        <AnimatePresence>
          {products.map((product) => (
            <ItemCard {...product} key={product.id} />
          ))}
        </AnimatePresence>
      </MotionSimpleGrid>
    </Container>
  );
};
