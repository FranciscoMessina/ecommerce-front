import {
  Anchor,
  Breadcrumbs,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Grid,
  Group,
  InputWrapper,
  MediaQuery,
  Paper,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useBooleanToggle, useDocumentTitle } from '@mantine/hooks';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { CommentSimple } from '../components/Comment';
import { QuantityInput } from '../components/NumberInput';
import { ProductDetailMain } from '../components/ProductDetailMain';
import { getProduct } from '../mock-data/data';
import { NotFound } from './404';

interface DetailProps {}

export const Detail: React.FC<DetailProps> = ({}) => {
  const params = useParams();
  const product = getProduct(parseInt(params.id as string, 10));

  if (!product) {
    return (
      <NotFound
        title="Whoops we couldn't find this item"
        text='Maybe try looking somewhere else?'
      />
    );
  }

  useDocumentTitle(product.title);

  const [reviews, setReviews] = useState(product.reviews || []);

  const commentForm = useForm({
    initialValues: {
      user: '',
      comment: '',
      rating: 0,
    },
  });

  const addComment = (values: typeof commentForm.values) => {
    setReviews((prev) => [...prev, values]);

    commentForm.reset();
  };

  const [show, toggle] = useBooleanToggle();

  return (
    <Container size='md' p={0} mt='md'>
      <Center>
        <Paper shadow='lg' p='lg'>
          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Breadcrumbs separator='→' mb='lg'>
              <Anchor component={Link} to='/'>
                Home
              </Anchor>
              <Anchor component={Link} to='/products'>
                Products
              </Anchor>
              <Anchor component={Link} to={`/products/${product.id}`}>
                {product.title}
              </Anchor>
            </Breadcrumbs>
          </MediaQuery>
          <ProductDetailMain product={product} />

          <MediaQuery smallerThan='sm' styles={{ justifyContent: 'center' }}>
            <Group sx={{ width: '100%', cursor: 'pointer' }} onClick={() => toggle()} mt='lg'>
              {!show ? <ChevronDown /> : <ChevronUp />}
              <Text>More information</Text>
            </Group>
          </MediaQuery>

          <Collapse in={show} p='md'>
            <Stack>
              <Title order={5}>Description:</Title>
              <Text>{product.description}</Text>
            </Stack>
            <Divider my='md' />

            <Grid columns={2}>
              <Grid.Col span={1}>
                <Stack mt='lg'>
                  {reviews.length > 0 ? (
                    reviews.map((review, index) => <CommentSimple {...review} key={index} />)
                  ) : (
                    <Center>
                      <Text size='sm' color='dimmed'>
                        No reviews yet
                      </Text>
                    </Center>
                  )}
                </Stack>
              </Grid.Col>
              <Grid.Col span={1}>
                <Text>Leave a comment</Text>
                <Space my='md' />
                <form onSubmit={commentForm.onSubmit(addComment)}>
                  <Stack>
                    <TextInput
                      label='Name'
                      placeholder='Jane Doe'
                      required
                      {...commentForm.getInputProps('user')}
                    />
                    <Textarea
                      placeholder='Write your comment here...'
                      minRows={5}
                      label='Comment'
                      required
                      {...commentForm.getInputProps('comment')}
                    />
                    <Group
                      noWrap
                      align='end
                      '>
                      <InputWrapper label='Stars'>
                        <QuantityInput min={0} max={5} {...commentForm.getInputProps('rating')} />
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
  );
};
