pc.script.create('addgarbage', function (app) {
    // Creates a new Addgarbage instance
    var Addgarbage = function (entity) {
        this.entity = entity;
    };

    Addgarbage.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.addGarbage ();
        },
        addGarbage: function () {
            var dataGarbage = [5,3,4,2,1,4,4,3,3,1];
            
            function selectProp (data,entity) {
                var x =0.4;
                if (data==1) {
                    if (entity.name == "vuilnis-schaal1") {
                        entity.setLocalScale(x,x,x);
                    }                
                } else if (data==2) {
                    if (entity.name == "vuilnis-schaal2") {
                        entity.setLocalScale(x,x,x);
                    }  
                } else if (data==3) {
                    if (entity.name == "vuilnis-schaal3") {
                        entity.setLocalScale(x,x,x);
                    }  
                } else if (data==4) {
                    if (entity.name == "vuilnis-schaal4") {
                        entity.setLocalScale(x,x,x);
                    }  
                } else if (data==5) {
                    if (entity.name == "vuilnis-schaal5") {
                        entity.setLocalScale(x,x,x);
                    }  
                }
            }
            this.entity.setLocalScale(0.01,0.01,0.01);
            //weteringenschans
            if(this.entity._parent.name==globals.cityParts[0].name) {
                this.entity.setLocalPosition(-0.79,3.6,3.54);
                selectProp(dataGarbage[0], this.entity);
                //globals.cityParts[0].findByName("gebouwen-euro2").setLocalScale(0.01,0.01,0.01);
            }
            //westerlijke-eilanden
            else if(this.entity._parent.name==globals.cityParts[1].name) {
                this.entity.setLocalPosition(-0.79,3.6,-2.9);
                selectProp(dataGarbage[1], this.entity);
            }
            //plantage
            else if(this.entity._parent.name==globals.cityParts[2].name) {
                this.entity.setLocalPosition(2.08,3.6,2.7);
                selectProp(dataGarbage[2], this.entity);
            }
            //nieuwmarkt
            else if(this.entity._parent.name==globals.cityParts[3].name) {
                this.entity.setLocalPosition(1.78,3.6,0.76);
                selectProp(dataGarbage[3], this.entity);
            }
            //kadijken
            else if(this.entity._parent.name==globals.cityParts[4].name) {
                this.entity.setLocalPosition(4.38,3.6,0.8);
                selectProp(dataGarbage[4], this.entity);
            }
            //jordaan
            else if(this.entity._parent.name==globals.cityParts[5].name) {
                this.entity.setLocalPosition(-3.09,3.6,0.8);
                selectProp(dataGarbage[5], this.entity);
            }
            //grachtengordel-zuid
            else if(this.entity._parent.name==globals.cityParts[6].name) {
                this.entity.setLocalPosition(0.458,3.6,2.8);
                selectProp(dataGarbage[6], this.entity);
            }
            //grachtengordel-west
            else if(this.entity._parent.name==globals.cityParts[7].name) {
                this.entity.setLocalPosition(-1.86,3.6,0.83);
                selectProp(dataGarbage[7], this.entity);
            }
            //burgwallen-oost-zijde
            else if(this.entity._parent.name==globals.cityParts[8].name) {
                
                selectProp(dataGarbage[8], this.entity);
                this.entity.setLocalPosition(-0.2,3.6,0.96);
            }
            //burgwallen-nieuwe-zijde
            else if(this.entity._parent.name==globals.cityParts[9].name) {
               selectProp(dataGarbage[9], this.entity);
                this.entity.setLocalPosition(0.6,3.6,-1.6);
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Addgarbage;
});