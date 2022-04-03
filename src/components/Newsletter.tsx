import React from 'react';
import { createStyles, Text, Title, TextInput, Button, Image, Paper } from '@mantine/core';
import image from './image.svg';
import { useModals } from '@mantine/modals';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    marginBlock: theme.spacing.xl,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function EmailBanner() {
  const { classes } = useStyles();
  const modals = useModals();

  const showModal = () => {
    modals.openConfirmModal({
      title: 'Congratulations!',
      children: <Text>Thank you for subscribing to our fake newsletter</Text>,
      centered: true,
      labels: { confirm: 'Great!', cancel: 'Oh ok.' },

      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text weight={500} size='lg' mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text size='sm' color='dimmed'>
          You will never miss our sales, and seasonal releases!
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder='Your email'
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control} onClick={showModal}>
            Subscribe
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
