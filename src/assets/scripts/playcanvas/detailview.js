pc.script.attribute("materials", "asset", [], {type: "material"});
pc.script.create('detailview', function (app) {
    // Creates a new Detailview instance
    var Detailview = function (entity) {
        this.entity = entity;
    };

    Detailview.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },
        
        detailview:function(){
            if (globals.deactivateDetailView===false) {
                this.dropCityPart(globals.cityParts[0]);
            }
        },
        colorSubParts : function() {
            var subParts=[];
            this.materials = [app.assets.find("citycolor1").resource,
             app.assets.find("citycolor2").resource,
            app.assets.find("citycolor3").resource,
             app.assets.find("citycolor4").resource,
             app.assets.find("citycolor5").resource,
            app.assets.find("citycolor6").resource,
            app.assets.find("citycolor7").resource];
            
            for (i = 0; i < this.entity.model.model.meshInstances.length; i++) {
                if(this.entity.model.model.meshInstances[i].node.name.length>10) {
                    subParts.push (this.entity.model.model.meshInstances[i+1]);
                }
            }
            for (t = 0; t < subParts.length; t++) {
                subParts[t].material = this.materials[t];
            }
        },

        dropCityPart:function(citypart){
            var clickedEntity=this.entity;
            var i=0;
            var arrowScale={x:0.01,y:0.01,z:0.01};
            TweenLite.to(arrowScale,1,{
                x:1,y:1,z:0.1,
                onUpdate:function() {             
                            globals.backArrow.setLocalScale(arrowScale.x,arrowScale.y,arrowScale.z);               
                }
            });
            function dropCityCallback() {
                i++;
                if(i<globals.cityParts.length) {
                   animateDrop(globals.cityParts[i]);
                } else {
                    zoomCityPart();
                }
                
            }
            
            function animateDrop(citypart) {
                var cityPart=citypart;
                if (clickedEntity!=globals.cityParts[i]){
                    var pos = cityPart.getPosition();
                    TweenLite.to(pos,2,{
                        y:-30,ease: Power3.easeIn,
                        onUpdate:function() {
                            cityPart.setLocalPosition(pos);
                        }
                    });
                    TweenLite.to("pos",0.1,{//not the right way but it works
                            onComplete: function () {
                                dropCityCallback();
                        },delay:0.1
                    });
                } else {
                    dropCityCallback();
                }
               
            }
            function zoomCityPart() {
                var pos = clickedEntity.getPosition();
                var garScale = {x:0.4};
                var hotelScale = {x:0.2};
                var angle = {x:0,y:0,z:0};
                var citypartsPos=[
                    {x:0,y:6,z:2},{x:1,y:4,z:8},{x:-3,y:6,z:3},{x:-2,y:4.5,z:4.4},{x:-5,y:5.2,z:4.6},{x:2,y:3.5,z:3.4},{x:0,y:6.8,z:3.6},{x:0,y:4.5,z:4},{x:-0.5,y:5.7,z:5.4},{x:0,y:4.1,z:4.4}
                ];
                    
                
                TweenLite.to(garScale,1,{
                        x:0.01,
                        onUpdate:function() {
                            for (var t = clickedEntity._children.length-2; t>=0; t--) {
                                if (clickedEntity._children[t].name.indexOf("vuilnis")>-1) {
                                    clickedEntity._children[t].setLocalScale(garScale.x,garScale.x,garScale.x);
                                }
                            }    
                        }
                    });
                TweenLite.to(hotelScale,1,{
                        x:0.01,
                        onUpdate:function() {
                            for (var t = clickedEntity._children.length-2; t>=0; t--) {
                                if (clickedEntity._children[t].name.indexOf("gebouw")>-1) {
                                    clickedEntity._children[t].setLocalScale(hotelScale.x,hotelScale.x,hotelScale.x);
                                }
                            }    
                        }
                    });
                TweenLite.to(angle,2,{
                        x:20,y:5,z:0,
                        onUpdate:function() {
                            clickedEntity.setEulerAngles(angle.x,angle.y,angle.z);
                        }
                    });
               for (var i =  globals.cityParts.length - 1; i >= 0; i--) {
                   if(clickedEntity==globals.cityParts[i]) {
                       TweenLite.to(pos,2,{
                            x:citypartsPos[i].x,y:citypartsPos[i].y,z:citypartsPos[i].z,
                            onUpdate:function() {
                                clickedEntity.setLocalPosition(pos);
                            },
                            onComplete:function() {
                                clickedEntity.script.detailview.colorSubParts();
                            }
                       });
                   }
               }
                
                
            }
            animateDrop(citypart);

        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {

        }
    };

    return Detailview;
});