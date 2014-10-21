export default function() {
  this.transition(
    this.toModel(true),
    this.hasClass('menu'),
    this.use('toLeft',{
      duration: 500
    }),
    this.reverse('toRight', {
      duration: 500
    })
  );

  this.transition(
    this.hasClass('box'),
    this.toModel(false),
    this.use('crossFade', {
      duration: 500
    })
  );
}
