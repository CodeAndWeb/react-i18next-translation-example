import '../App.css';
import {withTranslation} from "react-i18next";
import {Component} from "react";

class HighOrderComponentBody extends Component {
    render() {
        const { t } = this.props;
        return (
            <p>{t('hoc.text')}</p>
        )
    }
}
export const HighOrderComponent = withTranslation('common')(HighOrderComponentBody)

