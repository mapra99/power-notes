import { render } from 'react-dom';
import AppRouter from './navigation/AppRouter';

const App = () => <AppRouter />;

export default App;

render(<App />, document.getElementById('root'));
