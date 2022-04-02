import React from 'react';
import {
  createStyles,
  Header as MantineHeader,
  Autocomplete,
  Group,
  Burger,
  ActionIcon,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Search, ShoppingCart } from 'tabler-icons-react';
import { ActionToggle } from './ActionToggle';
import { categories } from '../mock-data/data';

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
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
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
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}>
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <ActionToggle />
        </Group>

        <Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder='Search'
            icon={<Search size={16} />}
            data={categories}
          />
          <ActionIcon>
            <ShoppingCart />
          </ActionIcon>
        </Group>
      </div>
    </MantineHeader>
  );
};
