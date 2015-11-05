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
            var dataMoney = graphData.hotelData

            function processData (hoteldata,entity) {
                var averageHotel;

                averageHotel= Math.round(hoteldata[1].prijs);
                selectProp(averageHotel,entity);
            };
            function selectProp (data,entity) {
                if (data<100) {
                    if (entity.name == "gebouwen-euro1") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }
                } else if (data>99&&data<150) {
                    if (entity.name == "gebouwen-euro2") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data>149&&data<200) {
                    if (entity.name == "gebouwen-euro3") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data>199&&data<250) {
                    if (entity.name == "gebouwen-euro4") {
                        entity.setLocalScale(0.2,0.2,0.2);
                    }  
                } else if (data>249&&data<350) {
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
                processData(dataMoney[this.entity._parent.name], this.entity);
                //globals.cityParts[0].findByName("gebouwen-euro2").setLocalScale(0.01,0.01,0.01);
            }
            //westerlijke-eilanden
            else if(this.entity._parent.name==globals.cityParts[1].name) {
                this.entity.setLocalPosition(-1.85,3.6,-3.31);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //plantage
            else if(this.entity._parent.name==globals.cityParts[2].name) {
                this.entity.setLocalPosition(3.5,3.6,2.2);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //nieuwmarkt
            else if(this.entity._parent.name==globals.cityParts[3].name) {
                this.entity.setLocalPosition(2.2,3.6,-1.3);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //kadijken
            else if(this.entity._parent.name==globals.cityParts[4].name) {
                this.entity.setLocalPosition(5.6,3.6,0.9);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //jordaan
            else if(this.entity._parent.name==globals.cityParts[5].name) {
                this.entity.setLocalPosition(-2.9,3.6,-0.29);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //grachtengordel-zuid
            else if(this.entity._parent.name==globals.cityParts[6].name) {
                this.entity.setLocalPosition(-0.87,3.6,2.06);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //grachtengordel-west
            else if(this.entity._parent.name==globals.cityParts[7].name) {
                this.entity.setLocalPosition(-1.7,3.6,0.737);
                processData(dataMoney[this.entity._parent.name], this.entity);
            }
            //burgwallen-oost-zijde
            else if(this.entity._parent.name==globals.cityParts[8].name) {
                
                processData(dataMoney[this.entity._parent.name], this.entity);
                this.entity.setLocalPosition(0.348,3.6,-0.194);
            }
            //burgwallen-nieuwe-zijde
            else if(this.entity._parent.name==globals.cityParts[9].name) {
               processData(dataMoney[this.entity._parent.name], this.entity);
                this.entity.setLocalPosition(-0.45,3.6,-0.8);
            }            
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Addprops;
});