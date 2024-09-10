import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </StrictMode>,
)

