$("#textarea").on("change keyup paste", function() {
  console.log(this.value);
  var pi= $('#writer');
  $(pi).addClass('visible');
     setTimeout(function() {
        $(pi).removeClass('visible');
   }, 3000);
});