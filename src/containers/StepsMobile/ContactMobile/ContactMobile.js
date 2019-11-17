import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, clearSubmitErrors, propTypes as formPropTypes } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { AuthInput, ClassicButton } from 'ComponentsRoot';
import colors from 'ColorsRoot';
import {
  Title,
  Subtitle,
  Yellow,
  ErrorMessage,
} from 'StyledComponentsRoot';
import { Form } from '../../Contact/StyledComponents';


const { primary } = colors;

const text = {
  maxWidth: '283px'
};

class ContactMobile extends Component {
  static propTypes = {
    ...formPropTypes,
  };

  render() {
    const {
      handleSubmit,
      error,
      pristine,
      submitting,
    } = this.props;

    return (
      <Fragment>
        <div>
          <Title margin="0">
            {I18n.t('contact.leaveYour')}
            <Yellow>{I18n.t('contact.email')}</Yellow>
          </Title>
          <Form
            onSubmit={handleSubmit}
          >
            <Field
              component={AuthInput}
              name="email"
              type="email"
              placeholder={I18n.t('contact.email')}
              width="260px"
              height="40px"
              borderLeft
              bgColor="rgba(216,216,216,0.3)"
              styleInput={{ margin: '0 auto 26px' }}
              styleWrapper={{ margin: '0 auto ' }}
            />
            <ClassicButton
              type="submit"
              color={primary._auth_btn_color}
              bgColor="inherit"
              colorHover={primary._auth_btn_color_hover}
              bgColorHover={primary._auth_btn_bg_color_hover}
              borderColor={primary._auth_btn_border_color}
              bgColorPressed={primary._auth_btn_bg_color_pressed}
              borderRadius="4px"
              width="200px"
              height="34px"
              disabled={pristine || submitting}
              styleWrapper={{ margin: '0 auto', marginBottom: '16px', maxWidth: '80%', fontSize: '16px' }}
            >
              {submitting ? I18n.t('buttons.loading') : I18n.t('buttons.contactMe')}
            </ClassicButton>
            <If condition={error}>
              <ErrorMessage color={primary._white} bgColor={primary._grey}>
                {error}
              </ErrorMessage>
            </If>
            <Subtitle style={text}>{I18n.t('contact.info')}</Subtitle>
          </Form>
        </div>
      </Fragment>
    );
  }
}

const ContactForm = reduxForm({
  form: 'contact-form',
  onChange: (values, dispatch, props) => {
    if (props.invalid) dispatch(clearSubmitErrors('contact-form'));
  }
})(ContactMobile);

export default connect()(ContactForm);
