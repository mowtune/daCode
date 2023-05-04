import Home from '../src/pages/home/home';
import Servicepage from '../src/pages/servicepage/servicepage';
import Cases from '../src/pages/cases/cases';
import Blog from '../src/pages/blog/blog';
import Specialists from '../src/pages/specialists/specialists';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import Header from '../src/header/header';
// import Footer from '../src/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Servicepage} />
          <Route path='/cases' exact component={Cases} />
          <Route path='/specialists' exact component={Specialists} />
          <Route path='/blog' exact component={Blog} />
        </Switch>
      </main>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
