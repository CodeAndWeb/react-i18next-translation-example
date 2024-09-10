import './App.css';
import FunctionComponent from "./components/FunctionComponent.jsx";
import {HighOrderComponent} from "./components/HighOrderComponent.jsx";
import {useTranslation} from "react-i18next";
import {LanguageSelector} from "./components/LanguageSelector.jsx";

function App() {

    const {t} = useTranslation("common");

    return (
        <div className="App">
            <LanguageSelector/>
            <FunctionComponent/>
            <HighOrderComponent/>

            <p>{t('app.interpolation', {framework: 'react-i18next'})}</p>
            <p>{t('app.format.numbers', {pi: 3.14159265359})}</p>
            <p>{t('app.format.numbers-limit', {pi: 3.14159265359})}</p>
            <p>{t('app.format.currency', {val: 49.99})}</p>
            <p>{t('app.format.datetime', {now: new Date()})}</p>
            <p>{t('app.format.relative-time', {rel: 10})}</p>
        </div>
    );
}

export default App;