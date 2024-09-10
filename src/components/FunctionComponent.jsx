import {useTranslation} from "react-i18next";

export default function FunctionComponent() {

    const {t} = useTranslation("common");

    return (
        <>
            <h2>{t('components.func-component.title')}</h2>
            <p>{t('components.func-component.text')}</p>
        </>
    );
}

