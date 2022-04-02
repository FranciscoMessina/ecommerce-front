import React from 'react';
import { createStyles, Anchor, Group, ActionIcon, Title } from '@mantine/core';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {}

export function FooterCentered() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Title order={4}>Fake E-commerce</Title>

        <Group className={classes.links}>
          <Anchor<'a'>
            color='dimmed'
            href='https://www.franciscomessina.com'
            sx={{ lineHeight: 1 }}
            target='_blank'
            rel='noreferrer noopener'
            size='sm'>
            Built by Francisco Messina
          </Anchor>
        </Group>

        <Group spacing={0} position='right' noWrap>
          <ActionIcon
            size='lg'
            component='a'
            href='https://github.com/FranciscoMessina'
            target='_blank'
            rel='noreferrer noopener'>
            <BrandGithub size={18} />
          </ActionIcon>
          <ActionIcon
            size='lg'
            component='a'
            href='https://www.linkedin.com/in/francisco-messina/'
            target='_blank'
            rel='noreferrer noopener'>
            <BrandLinkedin size={18} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
