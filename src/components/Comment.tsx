import React from 'react';
import { createStyles, Text, Avatar, Group, Spoiler } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

interface CommentSimpleProps {
  user: string;
  comment: string;
  rating: number;
}

export function CommentSimple({ user, comment, rating }: CommentSimpleProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar radius='xl' />
        <div>
          <Text size='sm'>{user}</Text>
          <Text size='xs' color='dimmed'>
            {rating} stars
          </Text>
        </div>
      </Group>

      <Text className={classes.body} size='sm'>
        <Spoiler maxHeight={60} showLabel='Show more' hideLabel='Show less'>
          {comment}
        </Spoiler>
      </Text>
    </div>
  );
}
