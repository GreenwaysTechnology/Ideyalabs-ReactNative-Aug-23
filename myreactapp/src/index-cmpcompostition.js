import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './components/page/Page';

const App = () => <div>
    <Page></Page>
</div>


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App></App>)
