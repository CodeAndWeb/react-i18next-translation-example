import React, {Component, Suspense} from 'react';
import './App.css';
import {useTranslation, withTranslation} from "react-i18next";

function HeaderComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}

class HighOrderComponent extends Component {
    render() {
        const { t } = this.props;
        console.log(this.props);

        return (
            <h1>{t('welcome.title', {framework:'React'})}</h1>
        )
    }
}
const HighOrderComponentTranslated = withTranslation('common')(HighOrderComponent)

function App()
{
    return (
        <Suspense fallback="loading">
            <div className="App">
                <HeaderComponent/>
                <HighOrderComponentTranslated/>
            </div>
        </Suspense>
    );
}

export default App;
