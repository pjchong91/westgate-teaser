import React, { Component } from 'react';
import { OnUpdate } from 'rrc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appConfig from 'src/config/app.conf';
import { changeLocale } from 'src/redux/intl';

const updateLanguage = (location, callback) => {
  const language = location.pathname.split('/')[1];
  const locale = process.env.__LOCALES__.includes(language)
    ? language
    : appConfig.defaultLocale;

  callback(locale);
};

class UpdateLanguage extends Component {
  state = {};
  render() {
    return (
      <OnUpdate
        immediate
        call={location => {
          window.scrollTo(0, 0);
          updateLanguage(location, language => {
            this.props.changeLocale(language);
          });
        }}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLocale }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateLanguage);
