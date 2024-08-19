import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsBuzz'
import { useDotButton } from './EmblaCarouselDotButtonBuzz'
import b1 from "../assets/img/886x498_26-july2-746x498.png";
import b2 from "../assets/img/5554-746x498.png";
import b3 from "../assets/img/886x4982-1-746x498.png";
const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="emblab">
      <div className="embla__viewportb" ref={emblaRef}>
        <div className="embla__containerb">
          
            <div className="embla__slideb" key={1}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b1}
                    alt="Your alt text"
                  />
                  <div className="buzzdiv">
                  <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                  <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="embla__slideb" key={2}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b2}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                   <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                   <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="embla__slideb" key={3}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b3}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                    <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                    <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="embla__slideb" key={4}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b1}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                   <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                   <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="embla__slideb" key={5}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b1}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                   <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                   <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="embla__slideb" key={6}>
              <div className="embla__parallaxb">
                <div className="embla__parallax__layerb">
                  <img
                    className="embla__slide__imgb embla__parallax__imgb"
                    src={b1}
                    alt="Your alt text"
                  />
                   <div className="buzzdiv">
                   <h1>Enhance Your Skin with HydraFacial Steps: Understanding Each Phase</h1>
                   <p>HydraFacial steps offer a comprehensive approach to skincare, addressing various concerns to achieve a radiant complexion. From...</p>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>

      <div className="embla__controlsb">
        <div className="embla__buttonsb">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      
      </div>
    </div>
  )
}

export default EmblaCarousel
