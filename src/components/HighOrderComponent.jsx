import {Component} from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types";

class HighOrderComponentBody extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <h2>{t('components.hoc-component.title')}</h2>
                <p>{t('components.hoc-component.text')}</p>
            </>
        )
    }
}

HighOrderComponentBody.propTypes = {
    t: PropTypes.func.isRequired,
}

export const HighOrderComponent = withTranslation('common')(HighOrderComponentBody)

