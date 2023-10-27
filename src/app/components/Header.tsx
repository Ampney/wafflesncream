'use client';
import { css } from '@emotion/react'
import Image from 'next/image';
import wafbanner from '/src/images/waf_banner.jpeg';
import wafImg1 from '/src/images/waf_4ABF.webp'
import wafImg2 from '/src/images/waf_DSCF3023.webp'


/** @jsxImportSource @emotion/react */

const headerCss = {
  container: css({
    backgroundColor: '#f6f1de',
    display: 'grid',
    alignItems: 'center',
    height: 'auto',
    paddingTop: '5rem',
    gridAutoFlow:'rows',
    gridTemplateColumns: 'repeat(2, minmax(150px,1fr))'
  }),
  h3: css({
    fontSize: '4rem',
    textTransform: 'uppercase',
    fontWeight: 'lighter'
  })
}

export default function Header(){
  
  return(
    <section>
      <div>
        <Image 
              src={wafbanner}
              width={1500}
              height={800}
              alt='banner' />
      </div>
      <div css={ headerCss.container }>
      <div>
         <Image 
               src={wafImg1}
               width={720}
               height={750}
               alt="logo" />
      </div>
      <div>
          <h3 css={ headerCss.h3 }>Enveloping yourself in crafted sublime fabrics</h3>
      </div>
      <div>
          <h3 css={ headerCss.h3}>Refined drip and elegance</h3>
      </div>
      <div>
         <Image 
               src={wafImg2}
               width={720}
               height={750}
               alt="logo" />
      </div>
      </div>
     
    </section>
  );
}