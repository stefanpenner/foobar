import { boxCrossFade } from './timings';

export default function() {
  this.transition(
    this.toModel(true),
    this.hasClass('menu'),
    this.use('toLeft',{
      duration: 200
    }),
    this.reverse('toRight', {
      duration: 200
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
