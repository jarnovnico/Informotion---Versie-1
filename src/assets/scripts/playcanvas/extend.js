pc.script.create('extend', function (app) {
    
    
    // define the constructor
    var Extend = function (entity) {
        
        this.entity = entity;
        // Disabling the app menu stops the browser displaying a menu when
        // you right-click the page
        //app.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
   
        //app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.factor = 0;
        this.returnFactor = 0;
    };

    // define the update function
    Extend.prototype = {
        
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },
        
        extend:function(){
             this.factor = 0.3;

//             if(prevEntity) {
//                 prevEntity.setLocalPosition(0, 0, 0);
//             }
        },
   
                
   
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
             if (this.factor > 0) {
               
                this.factor -= dt;
                var z =  0.2*(1-this.factor);
                 this.entity.setLocalPosition(0, z, 0);
               for (var i =  globals.cityParts.length - 1; i >= 0; i--) {
                   //not when selected and not when rotated or dropped for detailview
                   if(globals.cityParts[i]!=this.entity && (globals.cityParts[i].getEulerAngles().data[0]===0 || globals.cityParts[i].getPosition().data[1]>=0)) {
                      globals.cityParts[i].setLocalPosition(0, 0, 0);
               }
            }
            } 
//             else {
//                 this.entity.setLocalPosition(0, 0, 0);
//             }
            
        }
//         update: function (dt) {

            // Use the keyboard handler from the Application
            // to pause/unpause
//             if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
//                 this.paused = !this.paused; // toggle paused state
//             }
//             onMouseDown: function (event) {
//                 if (event.button === pc.MOUSEBUTTON_LEFT) {
//                     this.entity.setLocalPosition(0, 0, 0.2);
//                 }
//             }
            
//             if (!this.paused) {
//                 // increment the time value by the frametime
//                 this.time += dt;

//                 // Calculate the new value
//                 var z = this.amplitude * Math.sin(this.time);

//                 // Update the x position of the Entity
//                 this.entity.setLocalPosition(0, 0, z);
//             }
//         }
    };

    // return the class definition
    return Extend;
});