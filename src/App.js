import { StrictMode } from 'react';
import { render } from 'react-dom';
import SearchParams from './components/SearchParams';

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
