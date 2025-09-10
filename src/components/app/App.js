import PageWrapper from '../layout/page-wrapper/page-wrapper';
import './style.css';
import starList from '../../mocks/starList';

function App() {
  return (
    <div className='App'>
      <PageWrapper stars={starList}></PageWrapper>
    </div>
  );
}

export default App;
