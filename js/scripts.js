//global variables

//boba constructor
function Boba(size, flavors, milks, fillings, total) {
  this.size = size;
  this.flavors = flavors;
  this.milks = milks;
  this.fillings = fillings;
  this.total = total;
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
  if(this.fillings.length > 1){
    total+=this.fillings.length
  }
  return total;
}



///user interface logic
$("document").ready(function(){
  $(".boba-form").submit(function(event){
    event.preventDefault();
    var name = prompt("Who will be receiving boba?")
    //get the values of the checkboxes and store them in a var
    var bobaSize = "";
     $("input:checkbox[name=boba-size]:checked").each(function(){
      bobaSize = $(this).val();
    });
    var bobaFlavors = [];
    $("input:checkbox[name=boba-flavor]:checked").each(function(){
      bobaFlavors.push($(this).val());

    })
    var bobaMilks = [];
    $("input:checkbox[name=boba-milk]:checked").each(function(){
      bobaMilks.push($(this).val());
    });
    var bobaFillings = [];
    $("input:checkbox[name=boba-fillings]:checked").each(function(){
      bobaFillings.push($(this).val());
    });
    //make the new object
    var boba1 = new Boba(bobaSize, bobaFlavors, bobaMilks, bobaFillings);
    //get the price of the object
    var y = boba1.price();
    //make arrays correct grammatically
    var flavors = boba1.flavors.join(" and ")
    var milks = boba1.milks.join(" and ")
    var fillings = boba1.fillings.join(", ")
    //write the text
    $(".order").append("Your " + boba1.size + ", " + flavors + " boba with " + milks + " milk, and " + fillings + " fillings. will be on the way to " + name +   " in 20mins or less. Your total is $" + y);
    $(".order").show();
    console.log(boba1);


  })
});
