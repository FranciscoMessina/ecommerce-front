import {
  ActionIcon,
  Button,
  Center,
  createStyles,
  Drawer,
  Group,
  Header as MantineHeader,
  Image,
  MediaQuery,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Home, ShoppingCart } from 'tabler-icons-react';
import { cartState } from '../atoms/cartAtom';
import { getProduct } from '../mock-data/data';
import { ActionToggle } from './ActionToggle';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const { classes, theme } = useStyles();

  const [isOpen, toggleOpen] = useBooleanToggle(false);

  const [cart, setCart] = useRecoilState(cartState);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
      style={({ isActive }) => ({
        backgroundColor: isActive
          ? theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0]
          : 'transparent',
      })}>
      {link.label}
    </NavLink>
  ));

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <ActionIcon component={Link} to='/'>
              <Home />
            </ActionIcon>
          </MediaQuery>
          <ActionToggle />
        </Group>

        <Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Center style={{ position: 'relative' }}>
            <ActionIcon onClick={() => toggleOpen(true)}>
              <ShoppingCart />
              {cart.total.quantity > 0 && (
                <ThemeIcon size='xs' radius='xl' sx={{ position: 'absolute', top: -5, right: -4 }}>
                  <Text size='xs'>{cart.total.quantity}</Text>
                </ThemeIcon>
              )}
            </ActionIcon>
          </Center>
          <Drawer
            opened={isOpen}
            onClose={() => toggleOpen(false)}
            position='right'
            shadow='md'
            zIndex={999999}
            padding='md'
            size='lg'
            aria-labelledby='Cart'
            aria-describedby='Items in cart'
            closeButtonLabel='Close cart'>
            <Center style={{ height: '90%' }} sx={{ width: '100%' }}>
              <Stack
                align='center'
                justify='space-between'
                style={{ height: '100%', width: '100%' }}>
                <Stack spacing='lg'>
                  {cart.items.length > 0 ? (
                    cart.items.map((item) => {
                      const product = getProduct(item.productId);

                      return (
                        <Group sx={{ width: '100%' }} key={product?.id}>
                          <Image
                            src={product?.images[0]}
                            width={60}
                            height={60}
                            radius='md'
                            withPlaceholder
                          />
                          <Stack spacing='xs'>
                            <Title order={6}>{product?.title}</Title>
                            <Group position='apart' sx={{ width: '100%' }}>
                              <Text> Price: ${product?.price}</Text>
                              <Text> x {item.quantity}</Text>
                            </Group>
                          </Stack>
                        </Group>
                      );
                    })
                  ) : (
                    <Text>No items in cart</Text>
                  )}
                </Stack>
                {cart.total.quantity > 0 && (
                  <Stack sx={{ width: '100%' }}>
                    <Text>
                      Total: ${cart.total.price} for {cart.total.quantity} items
                    </Text>
                    <>
                      <Button
                        fullWidth
                        onClick={() =>
                          alert(
                            ` You did not just buy ${cart.total.quantity} items for ${cart.total.price}`
                          )
                        }>
                        Checkout
                      </Button>
                      <Button
                        color='red'
                        fullWidth
                        onClick={() => {
                          setCart({
                            total: {
                              price: 0,
                              quantity: 0,
                            },
                            items: [],
                          });
                          toggleOpen(false);
                        }}>
                        Clear Cart
                      </Button>
                    </>
                  </Stack>
                )}
              </Stack>
            </Center>
          </Drawer>
        </Group>
      </div>
    </MantineHeader>
  );
};
