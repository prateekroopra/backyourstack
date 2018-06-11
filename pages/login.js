import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header from '../components/Header';
import Content from '../components/Content';

export default class Login extends React.Component {

  static async getInitialProps (ctx) {
    return { next: ctx.query.next || '/' }
  }

  static propTypes = {
    loggedInUser: PropTypes.object,
    next: PropTypes.string,
  }

  render () {
    return (
      <div>
        <Header loggedInUser={this.props.loggedInUser} />
        <Content>
          <h2>Authenticate wit Github to give access to your private repositories.</h2>
          <p>What are going to do with it?</p>
          <ul>
            <li>We&#8217;ll only look for dependency files such as package.json, composer.json and Gemfile.</li>
            <li>The data will be cached up to 24 hours, not stored longer than that.</li>
            <li>The resulting data will only be accessible by you.</li>
            <li>Trust us, the code is Open Source and you can audit it.</li>
          </ul>
          <p>Want to analyze your Organization repositories too?</p>
          <ul>
            <li>Make sure to Grant access in the GitHub permission page.</li>
          </ul>
          <Link href={`/auth/github?next=${this.props.next}`}>
            <a>Login with Github</a>
          </Link>
        </Content>
      </div>
    )
  }

}