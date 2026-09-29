import * as React from 'react';
import { Link } from 'gatsby';

import { DOWNLOADS_URL } from '../../utils/downloads';
export function getMenu(className: string) {
  return (
    <div className={className}>
      {/*<Link to={'/training'}>Training</Link>*/}
      <Link to="/posts">Posts</Link>
      <Link to={'/about'}>Authors</Link>
      <a
        href={
          DOWNLOADS_URL
        }
        className="sign"
      >
        Login
      </a>
    </div>
  );
}

export function MainMenuMobile() {
  return getMenu('mobile-header');
}

export function MainMenu() {
  return getMenu('header-page');
}
