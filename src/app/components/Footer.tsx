'use client'
import Image from 'next/image'
import wafStore from '/src/images/waf_flagshipstore.webp'
import { css } from '@emotion/react'

/** @jsxImportSource @emotion/react */

const footerCss = {
  container: css({
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
    paddingBlock: '2rem',
    backgroundColor: '#212121'
  }),
  h5: css({
    fontSize: '2rem',
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    textAlign: 'left',
    color: '#fff'
  }),
  details: css({
    display: 'flex',
    justifyContent: 'center',
    marginBlock: 'auto',
  }),
  boxing: css({
    padding: '0.5rem',
    marginInline: '2rem'
  }),
  p: css({
    fontSize: '2rem',
    textAlign: 'left',
    color: '#fff'
  }),
  socials: css({
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    justifyItems: 'center',
    paddingTop: '2rem'
  }),
  terms: css({
    color: '#fff',
    marginBlock: '3rem',
    span: css({
      paddingInline: '2rem',
      a: css({
        fontSize: '2rem',
      }),
    })
  }),
  svgContainer: css({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }),
  cls: css({
    fill: 'none',
    stroke: '#fff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }),
  svg: css({
    height: '3rem',
    width: '3rem',
    marginInline: '1rem'
  })
}
export default function Footer(){

  return(
    <footer css={ footerCss.container}>
    <div>
      <Image 
          src={wafStore}
          alt='store'  />
    </div>
    <div css={footerCss.details}>
      <div css={footerCss.boxing}>
        <span>
          <h5 css={footerCss.h5}>your nearest store</h5></span>
        <p css={footerCss.p}>Waf global store</p>
        <p css={footerCss.p}>Unit 5 Trocadero Mall</p>
        <p css={footerCss.p}>The Rock Drive, Behind iMax Cinema</p>
        <p css={footerCss.p}>Eti-Osa 234-1</p>
        <p css={footerCss.p}>Lagos, Nigeria</p>
      </div>
      <div css={footerCss.boxing}>
        <span>
          <h5 css={footerCss.h5}>opening hours</h5></span>
        <p css={footerCss.p}>Mon Closed</p>
        <p css={footerCss.p}>Tue - Sat 11-7 </p>
      </div>
    </div>
    <div css={footerCss.socials}>
      <div css={footerCss.terms}>
        <span><a href="/">About Us</a></span>
        <span><a href="/">Sizing Chart</a></span>
        <span><a href="/">Terms of Use</a></span>
        <span><a href="/">Privacy Policy</a></span>
        <span><a href="/">Return & Refund Policy</a></span>
        <span><a href="/">Shipping Information</a></span>
        <span><a href="/">Jobs</a></span>
      </div>
   
      <div css={footerCss.svgContainer}>
         <div css={footerCss.svg}>
         <a href="https://twitter.com/WAFFLESNCREAM">
            <svg viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0.5"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><defs></defs><path css={footerCss.cls} d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0
           ,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,
            0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z"></path></g></svg>
          </a>
        </div>

        <div css={footerCss.svg}>
          <a href="https://www.instagram.com/wflsncrm/">
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0.5"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" 
            clipRule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" 
            strokeLinejoin="round"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 
            14.6839 13.2956 15 12.5 15Z" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#000000"></rect> 
            <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#fff" strokeLinecap="round"></rect> </g></svg>
          </a>
        </div>

        <div css={footerCss.svg}>
          <a href="https://www.facebook.com/WAFFLESNCREAM">
            <svg fill="#fff" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g  id="SVGRepo_bgCarrier" strokeWidth="0.5"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <title>facebook</title> <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 
            0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path> </g></svg>
          </a>
        </div>
        
        <div css={footerCss.svg}>
          <a href="https://www.tiktok.com/@waf.lagos">
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#fff" 
            strokeLinecap="round" strokeWidth="12" d="M108 132a38.004 38.004 0 0 1-23.458 35.107 37.995 37.995 0 0 1-41.412-8.237 37.996 37.996 0 0 1-8.237-41.412A38.001 38.001 0 0 1 70 94"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" 
            d="M108 132V22c0 18 24 50 52 50"></path></g></svg>
          </a>
        </div>

        <div css={footerCss.svg}>
          <a href="https://vimeo.com/wafflesncream">
           <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0.5"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
           <path d="M21.062 10.414c-2.036 4.349-6.949 10.267-10.054 10.267-3.06 0-3.501-6.527-5.173-10.869-.823-2.138-1.354-1.646-2.896-.567L2 8.031c2.248-1.976 4.499-4.272 5.88-4.399 1.559-.148 2.517.916 2.873 3.193.475 2.994 1.137 7.641 2.291 7.641.9 0 3.117-3.686 
            3.232-5.004.203-1.93-1.421-1.989-2.828-1.387 2.228-7.295 11.494-5.95 7.614 2.339z"></path></g></svg>
          </a>
        </div>
      </div>
      <div css={{marginInline: 'auto'}}>
      <p css={{textAlign: 'center', textTransform: 'uppercase', fontSize: '2rem', color: '#fff'}}>follow us </p>
      <blockquote css={{color: '#fff', marginTop: '2rem'}}>&copy;2023 Wafflesncream</blockquote>
      </div>
        </div>
   </footer>
  )
}