import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Header } from './components/Header';
import { FooterCentered } from './components/Footer';
import { Detail } from './pages/Detail';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';

const links: { link: string; label: string }[] = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/products',
    label: 'Products',
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
        <ModalsProvider>
          <AppShell
            header={<Header links={links} />}
            footer={<FooterCentered />}
            fixed
            zIndex={150}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            })}>
            <Outlet />
          </AppShell>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
