import '../App.css';
import {withTranslation} from "react-i18next";
import {Component} from "react";
import PropTypes from "prop-types";

class HighOrderComponentBody extends Component {
    render() {
        const { t } = this.props;
        return (
            <p>{t('hoc.text')}</p>
        )
    }
}

HighOrderComponentBody.propTypes = {
    t: PropTypes.func.isRequired,
};


export const HighOrderComponent = withTranslation('common')(HighOrderComponentBody)
