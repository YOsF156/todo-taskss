import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { observer } from 'mobx-react';

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default observer(App);
