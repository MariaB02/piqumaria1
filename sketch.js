function setup() {
  createCanvas(1000, 1000);// tamanho do quadrado
background("grey");// cor do quadrado
}
function draw() {
  
  
 
  stroke("purple");// borda do retângulo
  fill("pink"); 

   // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {// pressionar mouse
   rect(mouseX, mouseY, 100, 150);}// seguir o mouse

}