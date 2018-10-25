
//boba constructor
function Boba() {
  this.size=size;
  this.flavors=[];
  this.milk=milk;
  this.fillings=[];
}
//boba price function
Boba.prototype.price = function(){
  var total = 0;
  if (this.size==="small") {
    total+=3;
  }else if (this.size==="medium") {
    total+=4;
  }else if (this.size==="large") {
    total+=5;
  }
  if (this.milk==="soy") {
      total+=.5;
  }
  return total;
}



///user interface logic
$("document").ready(function(){
  $(".boba-form").submit(function(event){
    event.preventDefault();
    var order = new Boba;
    $(".order").show();
    $("input:checkbox[name=boba-flavor]:checked").each(function(){
      var bobaFlavor = $(this).val();
      console.log(bobaFlavor)
    });
  })
});
