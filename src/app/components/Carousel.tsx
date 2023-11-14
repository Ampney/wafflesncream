'use client';
import { css } from '@emotion/react'
import Image from 'next/image';
import wafImg3 from 'src/images/waf_dakotas.webp'
import wafImg4 from 'src/images/waf_daypicnic.webp'
import wafImg5 from 'src/images/waf_goodFaith.webp'
import wafImg6 from 'src/images/waf_pithAfrica.webp'
import wafImg7 from 'src/images/waf_Skate_Day.webp'
import wafImg8 from 'src/images/waf_Tarkwa_10.webp'
import wafImg9 from 'src/images/waf_freedomPark.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Parallax } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax'

const breakpoints = [360, 768, 1024, 2560]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)


/** @jsxImportSource @emotion/react */

const carouselCss = {
  container: css({
    [mq[0]]: {
      marginBlock: '8rem',
    },
    [mq[2]]: {
      display: 'flex',
      marginBlock: '5rem',
      alignItems: 'center' 
    }
  }),

  h2Div: css({
    [mq[2]]: {
      paddingInline: '5rem',
    }
  }), 
  
  h2: css({
    [mq[0]]: {
      textTransform: 'uppercase',
      fontWeight: 'lighter',
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    [mq[2]]: {
      fontSize: '3rem',
    }
  }),

  figcaption: css({
    [mq[0]]: {
      fontSize: '3rem',
    },
    [mq[2]]: {
      fontSize: '2rem',
      paddingBlockEnd: '2.5rem'
    }
  })
}


export default function Carousel(){

  return (
    <div css={ carouselCss.container}>
      <div css={carouselCss.h2Div}>
        <h2 css={carouselCss.h2}>Inside Wafflesncream</h2>
      </div>
      <Swiper 
              modules={[Pagination, Parallax, EffectCoverflow]}
              pagination= {{clickable: true, }}
              centeredSlides={true}
              rewind={true}
              setWrapperSize={true}
              effect='coverflow'
              coverflowEffect={{rotate: 30, slideShadows: false, }}
              parallax={true}
              breakpoints={{
                  [mq[0]]: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
            }}
              spaceBetween={0}  >
                        
       <SwiperSlide> 
          <div>
            <figure>
              <Image 
                    src={wafImg9}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="logo" />
          </figure>
           <figcaption css={carouselCss.figcaption}>
              <p>waf X Store Launch</p>
           </figcaption>
          </div>
        </SwiperSlide>      
        <SwiperSlide> 
          <div>
            <figure>
              <Image 
                    src={wafImg4}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="logo" />
          </figure>
           <figcaption css={carouselCss.figcaption}>
              <p>waf X Quacktails Independence Day Picnic</p>
           </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <figure>
              <Image 
                     src={wafImg5}
                     sizes="100vw"
                     style={{
                       width: '100%',
                       height: 'auto',
                     }}
                     alt="logo" />
          </figure>
          <figcaption css={carouselCss.figcaption}>
              <p>waf X Good Life</p>
           </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <figure>
              <Image 
                    src={wafImg3}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="logo" />
          </figure>
          <figcaption css={carouselCss.figcaption}>
              <p>waf X Dakotasc</p>
           </figcaption>
          </div>
        </SwiperSlide>            
        <SwiperSlide> 
        <div>
            <figure>
              <Image 
                     src={wafImg6}
                     sizes="100vw"
                     style={{
                       width: '100%',
                       height: 'auto',
                     }}
                      alt="logo" />
          </figure>
          <figcaption css={carouselCss.figcaption}>
              <p>waf X Pith Africa</p>
           </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
       <div>
            <figure>
              <Image 
                     src={wafImg7}
                     sizes="100vw"
                     style={{
                       width: '100%',
                       height: 'auto',
                     }}
                     alt="logo" />
          </figure>
          <figcaption css={carouselCss.figcaption}>
              <p>waf X Go Skate Day 2023</p>
           </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div>
            <figure>
              <Image 
                     src={wafImg8}
                     sizes="100vw"
                     style={{
                       width: '100%',
                       height: 'auto',
                     }}
                     alt="logo" />
          </figure>
          <figcaption css={carouselCss.figcaption}>
              <p>waf X Tarkwa Bay Lifehuard</p>
           </figcaption>
          </div>
        </SwiperSlide>
       </Swiper>
    </div>
  )
}