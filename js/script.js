function findName(){
  var name = prompt('Please enter your name');
  alert("Thanks for signing up " + name)
}
$(".signup").on('click', findName);
