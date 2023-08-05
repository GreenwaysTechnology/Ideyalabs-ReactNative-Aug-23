import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';

const Logo = () => <div>
    <img src={logo} className="App-logo" alt="logo" height={100} width={100} />
</div>
const Header = () => <header>
    <h1>Header</h1>
    <Logo></Logo>
</header>
const Body = () => <section>
    <section>
        <p>React is declarative dom lib</p>
    </section>
</section>
const Footer = () => <footer>
    <p>Footer</p>
</footer>
//component tree 
const Page = () => <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
</div>


const App = () => <div>
    <Page></Page>
</div>


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App></App>)
