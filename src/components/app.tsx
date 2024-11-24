import MainScreen from '../pages/main-screen';

type AppProps = {
  cardCount: number;
}

function App({cardCount}: AppProps): JSX.Element {
  return (
    <MainScreen cardCount = {cardCount} />
  );
}

export default App;
