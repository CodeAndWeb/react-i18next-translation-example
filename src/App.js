import './App.css';
import {useTranslation} from "react-i18next";
import {HighOrderComponent} from "./components/HighOrderComponent";
import {LanguageSelector} from "./components/LanguageSelector";

function App() {

    const {t} = useTranslation("common");

    return (
        <div className="App">
            <h1>{t('app.title')}</h1>
            <LanguageSelector/>
            <p>{t('app.interpolation', {framework:'react-i18next'})}</p>
            <p>{t('app.format.numbers', {pi:3.14159265359})}</p>
            <p>{t('app.format.numbers-limit', {pi:3.14159265359})}</p>
            <p>{t('app.format.currency', {val:49.99})}</p>
            <p>{t('app.format.datetime', {now:new Date()})}</p>
            <p>{t('app.format.relative-time', {rel:10})}</p>
            <HighOrderComponent/>
        </div>
    );
}

export default App;

