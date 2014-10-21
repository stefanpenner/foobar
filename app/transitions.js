export default function() {
  this.transition(
    this.hasClass('menu'),
    this.use('toLeft',{
      duration: 500
    }),
    this.reverse('toRight', {
      duration: 500
    })
  );
}
