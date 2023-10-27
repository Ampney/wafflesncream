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


/** @jsxImportSource @emotion/react */

const carouselCss = {
  container: css({
    display: 'flex',
    marginBlock: '5rem',
    alignItems: 'center' 
  }),
  h2Div: css({
    paddingInline: '5rem',
  }), 
  h2: css({
    textTransform: 'uppercase',
    fontSize: '3rem',
    fontWeight: 'lighter'
  }),
  figcaption: css({
    fontSize: '2rem',
    paddingBlockEnd: '2.5rem'
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
              allowSlideNext={true}
              allowSlidePrev={true}
              slidesPerView={3}
              rewind={true}
              setWrapperSize={true}
              effect='coverflow'
              coverflowEffect={{rotate: 30, slideShadows: false, }}
              parallax={true}
              spaceBetween={0}  >
                        
       <SwiperSlide> 
          <div>
            <figure>
              <Image 
                    src={wafImg9}
                    width={300}
                    height={380}
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
                    width={300}
                    height={380}
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
                     width={300}
                     height={380}
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
                    width={300}
                    height={380}
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
                     width={300}
                     height={380}
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
                     width={300}
                     height={380}
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
                     width={300}
                     height={380}
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