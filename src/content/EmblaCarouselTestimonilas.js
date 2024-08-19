import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import rajath from '../assets/img/test/rajatojha.webp'
import sridar from '../assets/img/test/shridhar.webp'
import navin from '../assets/img/test/navinmandal.webp'
import kash from '../assets/img/test/kashyapreddy.webp'
import satish from '../assets/img/test/SatishChandra.webp'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsTest'
import {useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
            <div className="embla__slide" key={1}>
              <div className="embla__slide__number">
              <div class="testimonial-slide w-slide">
                <div class="testimonial-columns">
                 
                  <div class="testimonial-content-wrap">
                    <div class="testimonial-content-block">
                      
                      <div className="tcontent">
                      <div className="tname"><img src={rajath} className="testimonial-image" alt="rajath"/></div>
                      <p class="testimonial-paragraph">"Before I visited Shynex Clinic, I was quite self-conscious about my wrinkles. But from the moment I walked into their clinic, I felt reassured and in safe hands. The staff were incredibly knowledgeable and made me feel at ease about the Botox treatment. It was a game changer for me! Not only was the procedure quick and almost painless, but the results were also nothing short of amazing. My wrinkles have dramatically reduced, giving me a much more youthful appearance. I'm so grateful for the care and expertise at Shynex Clinic. They've truly revitalized my skin while ensuring my safety and comfort throughout the process." </p>
                      <div class="testimonial-author-wrap">
                        
                        <h4 class="author-name">Kalpana Mathur - Hyderabad</h4>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
              </div>
            </div>

            <div className="embla__slide" key={2}>
              <div className="embla__slide__number">
              <div class="testimonial-slide w-slide">
              <div class="testimonial-columns">
               
                  <div class="testimonial-content-wrap">
                    <div class="testimonial-content-block">
                     
                      <div className="tcontent">
                      <div className="tname"><img src={rajath} className="testimonial-image" alt="rajath"/></div>
                      <p class="testimonial-paragraph">"My experience at Shynex Clinic has been exceptional. From the moment I stepped in, I was greeted with warmth and professionalism. I was looking for a comprehensive solution to my skincare needs and found exactly that. The specialists here are not just experts in their field but also genuinely caring individuals. They recommended a personalized skin care regimen that addressed all my concerns - from dryness to uneven tone. The products and treatments, especially the hydrating facials, have been transformative. My skin now looks and feels healthier, and more radiant, and the compliments I receive are endless. I can confidently say that doctors at Shynex Clinic have given my skin a new lease of life."</p>
                      <div class="testimonial-author-wrap">
                        
                        <h4 class="author-name">Manisha Reddy - Hyderabad</h4>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
              </div>
            </div>
            <div className="embla__slide" key={3}>
              <div className="embla__slide__number">
              <div class="testimonial-slide w-slide">
              <div class="testimonial-columns">
                  
                  <div class="testimonial-content-wrap">
                    <div class="testimonial-content-block">
                      
                      <div className="tcontent">
                      <div className="tname"><img src={rajath} className="testimonial-image" alt="rajath"/></div>
                      <p class="testimonial-paragraph">"I visited Shynex Clinic for a laser skin treatment after noticing my skin losing its elasticity and firmness. The Dr at Shynex was fantastic - She walked me through the entire process, ensuring I understood and was comfortable with every step. The treatment itself was a revelation. In a couple of sessions, I could see a noticeable tightening and uplifting of my skin, giving me a refreshed and rejuvenated look. It's like they've turned back the clock on my skin! I'm beyond pleased with the results and the level of care I received. Thankyou Shynex"</p>
                      <div class="testimonial-author-wrap">
                        
                        <h4 class="author-name">Ruchi Sharma - Hyderabad</h4>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
              </div>
            </div>
          
            
          
        </div>
      </div>

      <div className="embla__controlss">
        <div className="embla__buttonss">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
