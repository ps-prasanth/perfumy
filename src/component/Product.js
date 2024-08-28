   //images

   import one from "../pictur/f1095b77836739.5c932e0135983.jpg"

   import two from "../pictur/OIP (1).jpg"
   
   import theri from "../pictur/OIP.jpg"
   

function Products(){

 
    return(
    <div class="prodacts">
          
             <div class="box">
                 <img src={one}alt="one"></img>
              
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi dolor odit delectus fugiat iusto soluta tempora expedita nulla adipisci.
                 </p>
  
              </div>   
          
  
          
              <div class="box">
  
                  <img src={two}alt="two"></img>
                  
                  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi dolor odit delectus fugiat iusto soluta tempora expedita nulla adipisci.
                  </p>
              </div>
          
  
          
              <div class="box">
  
                  <img src={theri}alt="theri"></img>
                  
                  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi dolor odit delectus fugiat iusto soluta tempora expedita nulla adipisci.
                  </p>
              </div>    
  
    </div>
  )
  }

  export default Products