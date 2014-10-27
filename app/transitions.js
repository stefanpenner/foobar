import { boxCrossFade } from './timings';

export default function() {
  this.transition(
    this.toModel(true),
    this.hasClass('menu'),

    this.use('slideDownAndIn',{
      duration: 1000
    }),
    this.reverse('slideUpAndOut', {
      duration: 1000
    })
  );

  this.transition(
    this.hasClass('box'),
    this.toModel(false),
    this.use('crossFade', {
      duration: boxCrossFade
    })
  );
}
