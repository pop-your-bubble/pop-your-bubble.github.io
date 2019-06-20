const { TimelineMax } = window;
const controller = new ScrollMagic.Controller();

$('.text-project').each(function(){
  const textOverlay = $(this).find('.text-overlay');
  let animateIn = new TimelineMax();

  animateIn
    .fromTo(
      textOverlay,
      2,
      {skewX: 20, scale: 1.5},
      {
        skewX: 0,
        xPercent: 100,
        transformOrigin: '0% 100%',
        ease: Power4.easeOut
      }
    );
  const scene = new ScrollMagic.Scene({
  triggerElement: this
  }).addIndicators().setTween(animateIn).addTo(controller);
});

$('.project').each(function(){
  const imgOverlay = $(this).find('.overlay');
  const projectInfo = $(this).find('.project-info');
  const smallTitle = $(this).find('.small-title');
  const projectLink = $(this).find('.project-link');
  const title = $(this).find('h4');
  let animateIn = new TimelineMax();

  animateIn
    .fromTo(
      imgOverlay,
      2,
      {skewX: 20, scale: 1.5},
      {
        skewX: 0,
        xPercent: 100,
        transformOrigin: '0% 100%',
        ease: Power4.easeOut
      }
    )
    .from(
      projectInfo,
      1,
      {
        scaleY: 0,
        transformOrigin: 'bottom-left'
      },
      '-=1.5'
    )
    .from(
      smallTitle,
      0.3,
      {
        autoAlpha: 0,
        y: 30,
        ease: Power4.easeOut
      },
      '-=0.8'
    )
    .from(
      projectLink, 0.3,
      { autoAlpha: 0,
        y: 30,
        ease: Power4.easeOut},
      '-=0.8'
    )
    .from(
      title,
      0.3,
      {autoAlpha: 0, y: 30, ease: Power4.easeOut},
      '-=0.8'
    );

  const scene = new ScrollMagic.Scene({
  triggerElement: this
  }).addIndicators().setTween(animateIn).addTo(controller);
});


