export default function() {
  this.transition(
    this.toModel(true),
    this.hasClass('menu'),
    this.use('toLeft',{
      duration: 5000
    }),
    this.reverse('toRight', {
      duration: 5000
    })
  );
}
