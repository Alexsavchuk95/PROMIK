import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

function mapStateToProps({ i18n: { locale } }) {
  return { locale };
}

export default connect(mapStateToProps)(Home);
