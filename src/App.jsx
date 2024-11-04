import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactsForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Contact Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  </Provider>
);

export default App;
