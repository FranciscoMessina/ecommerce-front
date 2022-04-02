import {
  Center,
  Container,
  createStyles,
  Group,
  Image,
  Paper,
  Title,
  Text,
  Button,
  Stack,
  Badge,
  Space,
  Alert,
  Collapse,
  Divider,
  Grid,
  Textarea,
  TextInput,
  NumberInput,
  InputWrapper,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useBooleanToggle } from '@mantine/hooks';
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  InfoCircle,
  ShoppingCart,
  Star,
  TruckDelivery,
} from 'tabler-icons-react';
import { CommentSimple } from '../components/Comment';
import { QuantityInput } from '../components/NumberInput';
import { products } from '../mock-data/data';

interface DetailProps {}

const useStyles = createStyles({
  mainImg: {
    width: '100%',
    maxWidth: '400px',
    height: '100%',
    maxHeight: '500px',
  },
  smallImgs: {
    width: '120px',

    height: '120px',
  },
});

const product = products[1];

export const Detail: React.FC<DetailProps> = ({}) => {
  const { classes, theme } = useStyles();

  const [reviews, setReviews] = useState(product.reviews);
  const form = useForm({
    initialValues: {
      user: '',
      comment: '',
      rating: 0,
    },
  });

  const addComment = (values: typeof form.values) => {
    // setReviews((prev) => [...prev, values]);
    // update reviews state
    setReviews((prev) => [...prev, values]);

    form.reset();
    // reset form
  };

  const [show, toggle] = useBooleanToggle();

  return (
    <>
      <Container fluid p={0} mt='md'>
        <Center>
          <Paper
            shadow='lg'
            p='lg'
            sx={(theme) => ({
              width: 860,
            })}>
            <Group align='self-start' p='md' spacing='xl' noWrap>
              <Group direction='column'>
                <div className={classes.mainImg}>
                  <Image
                    radius='md'
                    width={400}
                    height={500}
                    src='https://source.unsplash.com/random/400x500'
                    fit='contain'
                    withPlaceholder
                  />
                </div>
                <Group
                  position='apart'
                  sx={(theme) => ({
                    width: '400px',
                  })}>
                  <div className={classes.smallImgs}>
                    <Image
                      radius='md'
                      width={120}
                      height={120}
                      src='https://source.unsplash.com/random/120x121'
                      fit='contain'
                      withPlaceholder
                    />
                  </div>
                  <div className={classes.smallImgs}>
                    <Image
                      radius='md'
                      width={120}
                      height={120}
                      src='https://source.unsplash.com/random/121x120'
                      fit='contain'
                      withPlaceholder
                    />
                  </div>
                  <div className={classes.smallImgs}>
                    <Image
                      radius='md'
                      width={120}
                      height={120}
                      src='https://source.unsplash.com/random/120x119'
                      fit='contain'
                      withPlaceholder
                    />
                  </div>
                </Group>
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
                  {product.protected && (
                    <Alert icon={<InfoCircle />} title='Protected purchase' color='blue'>
                      This purchase is completely secure, if you don't receive what you paid for, or
                      are unsatisfied with it we will refund you the paid amount.
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
                  <Center>
                    <Text>Quantity:</Text>
                    <Space mx={8} />
                    <QuantityInput min={1} max={product.stock} />
                  </Center>
                  <Button leftIcon={<ShoppingCart size={20} />} size='md'>
                    ADD TO CART
                  </Button>
                </Stack>
              </Stack>
            </Group>

            <Group
              align='end'
              sx={{ width: '100%', cursor: 'pointer' }}
              onClick={() => toggle()}
              mt='md'
              ml='md'>
              {!show ? <ChevronDown /> : <ChevronUp />}
              <Text>More information</Text>
            </Group>

            <Collapse in={show} p='md'>
              <Stack>
                <Title order={5}>Description:</Title>
                <Text>{product.description}</Text>
              </Stack>
              <Divider my='md' />

              <Grid columns={2}>
                <Grid.Col span={1}>
                  <Stack mt='lg'>
                    {product.reviews.length > 0 &&
                      product.reviews.map((review) => <CommentSimple {...review} />)}
                  </Stack>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Text>Leave a comment</Text>
                  <Space my='md' />
                  <form onSubmit={form.onSubmit(addComment)}>
                    <Stack>
                      <TextInput
                        label='Name'
                        placeholder='Jane Doe'
                        required
                        {...form.getInputProps('user')}
                      />
                      <Textarea
                        placeholder='Write your comment here...'
                        minRows={5}
                        label='Comment'
                        required
                        {...form.getInputProps('comment')}
                      />
                      <Group
                        noWrap
                        align='end
                      '>
                        <InputWrapper label='Stars'>
                          <QuantityInput min={0} max={5} {...form.getInputProps('rating')} />
                        </InputWrapper>
                        <Button size='md' fullWidth type='submit'>
                          Comment
                        </Button>
                      </Group>
                    </Stack>
                  </form>
                </Grid.Col>
              </Grid>
            </Collapse>
          </Paper>
        </Center>
      </Container>
    </>
  );
};
