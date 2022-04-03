import React from 'react';
import {
  Container,
  createStyles,
  Grid,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { EmailBanner } from '../components/Newsletter';
import { useModals } from '@mantine/modals';
import { useDocumentTitle } from '@mantine/hooks';

const PRIMARY_COL_HEIGHT = 450;

const useStyles = createStyles((theme, _params, getRef) => {
  const overlay = getRef('overlay');

  return {
    card: {
      position: 'relative',
      overflow: 'hidden',

      [`&:hover .${overlay}`]: {
        opacity: 1,
      },
    },

    inner: {
      overflow: 'hidden',
    },

    overlay: {
      ref: overlay,
      width: '100%',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      transition: 'opacity 300ms ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },
  };
});

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { classes, theme } = useStyles();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  useDocumentTitle('Home');

  return (
    <Container my='md' size='xl'>
      <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Link to='/products?filters=Footwear' className={classes.card}>
          <Image
            height={PRIMARY_COL_HEIGHT}
            radius='md'
            src='/images/bootsLanding.webp'
            withPlaceholder
          />
          <div className={classes.overlay}>
            <Title order={2} className={classes.title}>
              Footwear
            </Title>
          </div>
        </Link>
        <Grid gutter='md'>
          <Grid.Col className={classes.card}>
            <Link to='/products?filters=Shirts'>
              <Image
                height={SECONDARY_COL_HEIGHT}
                radius='md'
                src='/images/shirtsLanding.jpg'
                withPlaceholder
              />
              <div className={classes.overlay}>
                <Title order={2} className={classes.title}>
                  Shirts
                </Title>
              </div>
            </Link>
          </Grid.Col>
          <Grid.Col span={6} className={classes.card}>
            <Link to='/products?filters=Outerwear'>
              <Image
                height={SECONDARY_COL_HEIGHT}
                radius='md'
                src='/images/jacketsLanding.webp'
                withPlaceholder
              />
              <div className={classes.overlay}>
                <Title order={2} className={classes.title}>
                  Outerwear
                </Title>
              </div>
            </Link>
          </Grid.Col>
          <Grid.Col span={6} className={classes.card}>
            <Link to='/products?filters=Accessories'>
              <Image
                height={SECONDARY_COL_HEIGHT}
                radius='md'
                src='/images/beltLanding.jpg'
                withPlaceholder
              />
              <div className={classes.overlay}>
                <Title order={2} className={classes.title}>
                  Accessories
                </Title>
              </div>
            </Link>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <EmailBanner />
    </Container>
  );
};
