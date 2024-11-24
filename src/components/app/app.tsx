import Main from '../../pages/main/main';

type AppProps = {
  cardCount: number;
}

function App({cardCount}: AppProps): JSX.Element {
  return (
    <Main cardCount = {cardCount} />
  );
}

export default App;
