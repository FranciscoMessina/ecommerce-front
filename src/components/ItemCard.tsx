import React from 'react';
import { CurrencyDollar, Lock, Star, TruckDelivery } from 'tabler-icons-react';
import { Card, Text, Group, Center, createStyles } from '@mantine/core';
import { IProduct } from '../types/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      [theme.fn.smallerThan('sm')]: {
        minHeight: 460,
        height: '100%',
      },
      [theme.fn.largerThan('sm')]: {
        height: 360,
      },
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      overflow: 'hidden',

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    price: {
      color: theme.colors.dark[0],
    },
    icons: {
      position: 'absolute',
      top: '3%',
      left: 10,
      right: 10,
    },
  };
});

interface ImageCardProps {}

export function ItemCard({ images, title, price, id, ratings, safe, freeShipping }: IProduct) {
  const { classes, theme } = useStyles();

  return (
    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
      <Card
        p='lg'
        shadow='lg'
        className={classes.card}
        radius='lg'
        component={Link}
        to={`/products/${id}`}>
        <div className={classes.image} style={{ backgroundImage: `url(${images[0]})` }} />
        <div className={classes.overlay} />
        <div className={classes.icons}>
          <Group align='center' position='right'>
            {freeShipping && <TruckDelivery color={theme.colors.green[6]} />}
            {safe && <Lock color={theme.colors.blue[6]} />}
          </Group>
        </div>

        <div className={classes.content}>
          <div>
            <Text size='lg' className={classes.title} weight={500}>
              {title}
            </Text>

            <Group position='apart' spacing='xs'>
              <Center>
                <CurrencyDollar size={18} color={theme.white} />
                <Text size='lg' weight={700} className={classes.price}>
                  {price}
                </Text>
              </Center>

              <Group spacing='lg'>
                <Center>
                  <Star size={16} color={theme.colors.dark[2]} />
                  <Text size='sm' className={classes.bodyText}>
                    {ratings.average}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
