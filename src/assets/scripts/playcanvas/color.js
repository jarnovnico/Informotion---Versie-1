pc.script.attribute("materials", "asset", [], {type: "material"});
pc.script.create('color', function (app) {
    // Creates a new Color instance
    var Color = function (entity) {
        this.entity = entity;
    };

    Color.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.cityMainColor();
            globals.backArrow.setLocalScale(0.01,0.01,0.01);
            
        },
        
        cityMainColor: function () {
            this.redMaterial1 = app.assets.find("citycolor1").resource;
            this.redMaterial2 = app.assets.find("citycolor2").resource;
            this.redMaterial3 = app.assets.find("citycolor3").resource;
            this.redMaterial4 = app.assets.find("citycolor4").resource;
            this.redMaterial5 = app.assets.find("citycolor5").resource;
            
            // not yet working
            function setColorToMesh (material) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = material;
                    }
                }
            }
            
            if(this.entity.name==globals.cityParts[0].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial1;
                    }
                }

            }
            else if(this.entity.name==globals.cityParts[1].name) {

                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial2;
                    }
                }
              
            }
            else if(this.entity.name==globals.cityParts[2].name) {               
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial3;
                    }
                }                
            }
            else if(this.entity.name==globals.cityParts[3].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial4;
                    }
                }                
               
                
            }
            else if(this.entity.name==globals.cityParts[4].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial5;
                    }
                }               
           
            }
            else if(this.entity.name==globals.cityParts[5].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial2;
                    }
                }                
                
            }
            else if(this.entity.name==globals.cityParts[6].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial4;
                    }
                }               
               
            }
            else if(this.entity.name==globals.cityParts[7].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial3;
                    }
                }                
                
            }
            else if(this.entity.name==globals.cityParts[8].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial2;
                    }
                }
            }
            else if(this.entity.name==globals.cityParts[9].name) {
                for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                    if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                         this.entity.model.model.meshInstances[i+1].material = this.redMaterial1;
                    }
                }               
                
            }        
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Color;
});