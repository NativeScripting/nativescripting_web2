import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { DOWNLOADS_URL } from '../../../utils/downloads';
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 50px;

  a {
    color: white;
  }

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`;

const LinkWrapper = styled.div`
  margin-left: 20px;
`;

interface SiteHeaderLinksProps {}

function SiteHeaderLinks(props: SiteHeaderLinksProps) {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/posts">Articles</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/authors">Authors</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/about">About</Link>
      </LinkWrapper>
      <LinkWrapper>
        <a
          href={
            DOWNLOADS_URL
          }
          className="sign"
        >
          Login
        </a>
      </LinkWrapper>
    </Container>
  );
}

export default SiteHeaderLinks;
