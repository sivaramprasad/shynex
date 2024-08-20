import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsBuzz'
import b1 from "../assets/img/home/b1.webp";
import b2 from "../assets/img/home/b2.webp";
import b3 from "../assets/img/home/b3.webp";

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)



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
