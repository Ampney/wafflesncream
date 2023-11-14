'use client';
import { css } from '@emotion/react'
import Image from 'next/image';
import wafbanner from '/src/images/waf_banner.jpeg';
import wafImg1 from '/src/images/waf_4ABF.webp'
import wafImg2 from '/src/images/waf_DSCF3023.webp'


const breakpoints = [360, 768, 1024, 2560]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)


/** @jsxImportSource @emotion/react */

const headerCss = {
  container: css({
    [mq[0]]: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '1.5rem',
    },
    [mq[2]]: {
      backgroundColor: '#f6f1de',
      display: 'grid',
      alignItems: 'center',
      height: 'auto',
      paddingTop: '5rem',
      gridAutoFlow:'rows',
      gridTemplateColumns: 'repeat(2, minmax(150px,1fr))',
    },
  }),
  
  h3: css({
    [mq[0]]: {
      fontSize: '2rem',
      textTransform: 'uppercase',
      fontWeight: 'lighter',
    },
    [mq[2]]: {
      fontSize: '4rem',
    },
  })
}

export default function Header(){
  
  return(
    <section>
      <div>
        <Image 
              src={wafbanner}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt='banner' />
      </div>
      <div css={ headerCss.container }>
      <div>
         <Image 
               src={wafImg1}
               sizes="100vw"
               style={{
                 width: '100%',
                 height: 'auto'
               }}
               alt="logo" />
      </div>
      <div>
          <h3 css={ headerCss.h3 }>Enveloping yourself in crafted sublime fabrics</h3>
      </div>
      <div css={{ 
          [mq[0]]: {
             order: '2',
             paddingBlock: '1rem'
              },
          [mq[2]]: {
             order: '0',
             paddingBlock: '0'
             },
            }}>
          <h3 css={ headerCss.h3}>Refined drip and elegance</h3>
      </div>
      <div css={{ 
          [mq[0]]: {
             order: '1',
             paddingTop: '2rem'
              },
          [mq[2]]: {
             order: '0',
             paddingTop: '0'
              },
            }}>
         <Image 
               src={wafImg2}
               sizes="100vw"
               style={{
                 width: '100%',
                 height: 'auto',
               }}
               alt="logo" />
      </div>
      </div>
     
    </section>
  );
}