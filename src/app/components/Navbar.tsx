'use client';
import { css } from '@emotion/react'
import Image from 'next/image';
import Link from 'next/link';
import wafLogo from '/src/images/waf_logo.png';
/** @jsxImportSource @emotion/react */

const navbarCss = {
  nav: css({
    display: 'flex',
    alignItems: 'baseline',
    background: 'transparent' 
  }),
  ulDiv: css({
    display: 'flex',
    justifyContent: 'space-between'
  }),
  ul: css({
    display: 'flex',
    paddingBlock: '0.5rem',
    listStyleType: 'none',
    marginInline: '5rem',  
  }),
  lis: css({
    fontSize: '2rem',
    marginInline: '1rem',
  }),
  a: css({
    fontSize: '1.5rem',
     '&:hover': {
        backgroundColor: '#e7dcc8',
        borderBottom: '0.3rem solid #000',
    }
  }),
  svgDiv: css({
    display: 'flex', 
    marginLeft: '45rem'  
  }),
  svg: css({
    height: '3rem',
    width: '3rem',
    marginInline: '1rem'
  })
}


export default function Navbar() {
  
  return (
    <nav css={ navbarCss.nav }>
      <div>
        <Image
               src={wafLogo}
               width={150}
               height={70}
               alt="waf_logo" />
      </div> 
      <div css={ navbarCss.ulDiv }>
      <div>
        <ul css={ navbarCss.ul }>
          <li css={navbarCss.lis}><Link css={navbarCss.a} href="/">Home</Link></li>
          <li css={navbarCss.lis}><Link css={navbarCss.a} href="">Journals</Link></li>
          <li css={navbarCss.lis}><Link css={navbarCss.a} href="">Skateboard Project</Link></li>
          <li css={navbarCss.lis}><Link css={navbarCss.a} href="">Store</Link></li>
        </ul>
      </div>
      <div css={  navbarCss.svgDiv }>
        <span>
          <svg css={navbarCss.svg} width="500px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
          stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span>
          <svg css={navbarCss.svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g><g id="SVGRepo_iconCarrier"> <path d="M8 11.01V11M16 11.01V11M16 8V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 
            4.92172 8 5.93913 8 7V8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339M16 8H17.1597C18.1999 
            8 19.0664 8.79732 19.1528 9.83391L19.5 14M16 8H12" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </span>
      </div>
      </div>
    </nav>
  );
}