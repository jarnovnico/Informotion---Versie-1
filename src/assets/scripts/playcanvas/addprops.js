pc.script.attribute("prop", "asset", [], {type: "model"});

pc.script.create('addprops', function (app) {
    // Creates a new Addprops instance
    var Addprops = function (entity) {
        this.entity = entity;
    };

    Addprops.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.addProps();
        },
        
        addProps : function () {
            var dataMoney = [5,3,4,2,1,4,4,3,3,1];
            
            function selectProp (data,entity) {
                if (data==1) {
                    if (entity.name == "gebouwen-euro1") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }                
                } else if (data==2) {
                    if (entity.name == "gebouwen-euro2") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data==3) {
                    if (entity.name == "gebouwen-euro3") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data==4) {
                    if (entity.name == "gebouwen-euro4") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data==5) {
                    if (entity.name == "gebouwen-euro5") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                }
            }
//             this.building1 = app.assets.find("gebouwen-euro1");
//             this.building2 = app.assets.find("gebouwen-euro2");
//             this.building3 = app.assets.find("gebouwen-euro3");
//             this.building4 = app.assets.find("gebouwen-euro4");
//             this.building5 = app.assets.find("gebouwen-euro5");
            this.entity.setLocalScale(0.01,0.01,0.01);
            //weteringenschans
            if(this.entity._parent.name==globals.cityParts[0].name) {
                this.entity.setLocalPosition(-1.79,3.6,2.7);
                selectProp(dataMoney[0], this.entity);
                //globals.cityParts[0].findByName("gebouwen-euro2").setLocalScale(0.01,0.01,0.01);
            }
            //westerlijke-eilanden
            else if(this.entity._parent.name==globals.cityParts[1].name) {
                this.entity.setLocalPosition(-1.85,3.6,-3.31);
                selectProp(dataMoney[1], this.entity);
            }
            //plantage
            else if(this.entity._parent.name==globals.cityParts[2].name) {
                this.entity.setLocalPosition(3.5,3.6,2.2);
                selectProp(dataMoney[2], this.entity);
            }
            //nieuwmarkt
            else if(this.entity._parent.name==globals.cityParts[3].name) {
                this.entity.setLocalPosition(2.2,3.6,-1.3);
                selectProp(dataMoney[3], this.entity);
            }
            //kadijken
            else if(this.entity._parent.name==globals.cityParts[4].name) {
                this.entity.setLocalPosition(5.6,3.6,0.9);
                selectProp(dataMoney[4], this.entity);
            }
            //jordaan
            else if(this.entity._parent.name==globals.cityParts[5].name) {
                this.entity.setLocalPosition(-2.9,3.6,-0.29);
                selectProp(dataMoney[5], this.entity);
            }
            //grachtengordel-zuid
            else if(this.entity._parent.name==globals.cityParts[6].name) {
                this.entity.setLocalPosition(-0.87,3.6,2.06);
                selectProp(dataMoney[6], this.entity);
            }
            //grachtengordel-west
            else if(this.entity._parent.name==globals.cityParts[7].name) {
                this.entity.setLocalPosition(-1.7,3.6,-1);
                selectProp(dataMoney[7], this.entity);
            }
            //burgwallen-oost-zijde
            else if(this.entity._parent.name==globals.cityParts[8].name) {
                
                selectProp(dataMoney[8], this.entity);
                this.entity.setLocalPosition(0.348,3.6,-0.194);
            }
            //burgwallen-nieuwe-zijde
            else if(this.entity._parent.name==globals.cityParts[9].name) {
               selectProp(dataMoney[9], this.entity);
                this.entity.setLocalPosition(-0.45,3.6,-0.8);
            }            
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Addprops;
});