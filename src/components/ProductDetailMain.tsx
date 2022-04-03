import {
  Group,
  Title,
  Alert,
  Center,
  Button,
  createStyles,
  Space,
  Image,
  Stack,
  Text,
  Badge,
  SimpleGrid,
  ScrollArea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSetState } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Star, InfoCircle, TruckDelivery, ShoppingCart } from 'tabler-icons-react';
import { cartState } from '../atoms/cartAtom';
import { IProduct } from '../types/types';
import { QuantityInput } from './NumberInput';

const useStyles = createStyles({
  mainImg: {
    maxWidth: '400px',
    maxHeight: '500px',
  },
  smallImgs: {
    width: '120px',
    height: '120px',
    cursor: 'pointer',
  },
});

interface ProductDetailMainProps {
  product: IProduct;
}

export const ProductDetailMain: React.FC<ProductDetailMainProps> = ({ product }) => {
  const { classes, theme } = useStyles();
  const [cart, setCart] = useRecoilState(cartState);

  const cartForm = useForm({
    initialValues: {
      productId: product.id,
      quantity: 1,
      price: product.price,
    },
  });

  function addToCart(values: typeof cartForm.values) {
    const moneyToAdd = values.quantity * product.price;
    console.log(moneyToAdd);
    console.log(cart);

    if (cart.items.some((item) => item.productId === values.productId)) {
      setCart((prev) => ({
        total: {
          price: prev.total.price + moneyToAdd,
          quantity: prev.total.quantity + values.quantity,
        },
        items: prev.items.map((item) => {
          if (item.productId === values.productId) {
            return {
              ...item,
              quantity: item.quantity + values.quantity,
            };
          }
          return item;
        }),
      }));
    } else {
      setCart((prev) => ({
        total: {
          price: prev.total.price + moneyToAdd,
          quantity: prev.total.quantity + values.quantity,
        },
        items: [...prev.items, values],
      }));
    }
    console.log(cart);
  }

  const [images, setImages] = useSetState({
    main: product?.images[0],
    small: product?.images[1],
    small2: product?.images[2],
    small3: product?.images[3],
  });

  return (
    <SimpleGrid
      mb='lg'
      cols={1}
      breakpoints={[
        {
          minWidth: 'sm',
          cols: 2,
          spacing: 'lg',
        },
      ]}>
      <Group direction='column' sx={{ maxWidth: '400px' }}>
        <div className={classes.mainImg}>
          <Image radius='md' src={images.main} fit='cover' withPlaceholder />
        </div>
        <ScrollArea style={{ width: '100%' }}>
          <Group
            position='apart'
            sx={(theme) => ({
              width: '100%',
            })}
            noWrap>
            <div
              className={classes.smallImgs}
              onClick={(e) => {
                setImages({
                  main: images.small,
                  small: images.main,
                });
              }}>
              <Image radius='md' height={120} src={images.small} fit='cover' withPlaceholder />
            </div>
            <div
              className={classes.smallImgs}
              onClick={(e) => {
                setImages({
                  main: images.small2,
                  small2: images.main,
                });
              }}>
              <Image radius='md' height={120} src={images.small2} fit='cover' withPlaceholder />
            </div>
            <div
              className={classes.smallImgs}
              onClick={(e) => {
                setImages({
                  main: images.small3,
                  small3: images.main,
                });
              }}>
              <Image radius='md' height={120} src={images.small3} fit='cover' withPlaceholder />
            </div>
          </Group>
        </ScrollArea>
      </Group>
      <Stack justify='start' sx={{ height: 635 }}>
        <div>
          {product.createdAt < Date.now() - 14000 && <Badge size='sm'>New!</Badge>}
          <Title order={1}>{product.title}</Title>

          <Group spacing={4} mt={12} mb={12}>
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Text size='sm' ml={12} inline>
              {product.ratings.amount} ratings
            </Text>
          </Group>

          <Text sx={{ fontSize: '3rem' }} inline>
            $ {product.price}
          </Text>
        </div>

        <Stack>
          {product.safe && (
            <Alert icon={<InfoCircle />} title='Protected purchase' color='blue'>
              This purchase is completely secure, if you don't receive what you paid for, or are
              unsatisfied with it we will refund you the paid amount.
            </Alert>
          )}
          {product.freeShipping && (
            <Alert icon={<TruckDelivery />} title='Free shipping!' color='green'>
              You have free shipping with this item, congratulations!
            </Alert>
          )}
        </Stack>

        <Stack
          sx={(theme) => ({
            marginTop: 'auto',
          })}>
          <form onSubmit={cartForm.onSubmit(addToCart)}>
            <Center>
              <Text>Quantity:</Text>
              <Space mx={8} />
              <QuantityInput min={1} max={product.stock} {...cartForm.getInputProps('quantity')} />
            </Center>
            <Space my='md' />
            <Button leftIcon={<ShoppingCart size={20} />} size='md' type='submit' fullWidth>
              ADD TO CART
            </Button>
          </form>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};
