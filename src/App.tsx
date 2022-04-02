import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  ScrollArea,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Header } from './components/Header';
import { FooterCentered } from './components/Footer';
import { Detail } from './pages/Detail';

const links: { link: string; label: string }[] = [
  {
    link: '/catalog',
    label: 'Catalog',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/sale',
    label: 'Sale',
  },
];

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
        <AppShell
          header={<Header links={links} />}
          footer={<FooterCentered />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}>
          <Detail />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
