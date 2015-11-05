pc.script.create('returnFromDetail', function (app) {
    // Creates a new ReturnFromDetail instance
    var ReturnFromDetail = function (entity) {
        this.entity = entity;
    };

    ReturnFromDetail.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },
        returnFromDetail: function(){
            for (var i =  globals.cityParts.length - 1; i >= 0; i--) {
                if(globals.cityParts[i].getEulerAngles().data[0]>0){
                    this.returnFromDrop(globals.cityParts[i],i);
                    graphs.removeGraph();
                }
            }
            
        },
        
        returnFromDrop: function(firstcitypart,indexfirstpart) {
            var indexFirstPart = indexfirstpart;
            var i=-1;
            var excludePart = firstcitypart;
            var arrowScale={x:1,y:1,z:0.1};
            TweenLite.to(arrowScale,1,{
                x:0.01,y:0.01,z:0.01,
                onUpdate:function() {             
                            globals.backArrow.setLocalScale(arrowScale.x,arrowScale.y,arrowScale.z);               
                }
            });
            function dropCityCallback() {
                i++;
                if(i<globals.cityParts.length  ) {
                   if (globals.cityParts[i]!=excludePart) {
                       animateDrop(globals.cityParts[i]);
                   } else {
                       dropCityCallback();
                       excludePart.script.color.cityMainColor();
                   }
                } 
                
            }
            
            function animateDrop(citypart) {
                var cityPart = citypart;
                var dataMoney = [5,3,4,2,1,4,4,3,3,1];
                var dataGarbage = [5,3,4,2,1,4,4,3,3,1];//change me to data
                    var angle = cityPart.getEulerAngles();
                    var pos = cityPart.getPosition();
                    var garScale = {x:0.01};
                    var hotelScale = {x:0.01};
                    TweenLite.to(pos,2,{
                        x:0,y:0,z:0,ease: Power3.easeInOut,
                        onUpdate:function() {
                            cityPart.setLocalPosition(pos);
                        }
                    });
                    if (cityPart==excludePart) {
                        TweenLite.to(garScale,1,{
                            x:0.4,
                            onUpdate:function() {
                                for (var t = cityPart._children.length-1; t>=0; t--) {
                                    if (cityPart._children[t].name.indexOf("vuilnis-schaal"+dataGarbage[indexFirstPart])>-1) {
                                        cityPart._children[t].setLocalScale(garScale.x,garScale.x,garScale.x);
                                    }
                                }    
                            }
                        });
                        TweenLite.to(hotelScale,1,{
                            x:0.2,
                            onUpdate:function() {
                                for (var t = cityPart._children.length-1; t>=0; t--) {
                                    if (cityPart._children[t].name.indexOf("gebouwen-euro"+dataMoney[indexFirstPart])>-1) {
                                        cityPart._children[t].setLocalScale(hotelScale.x,hotelScale.x,hotelScale.x);

                                    }
                                }    
                            }
                        });
                    }
                    TweenLite.to(angle,2,{
                        x:0,y:0,z:0,ease: Power3.easeInOut,
                        onUpdate:function() {
                            cityPart.setEulerAngles(angle);
                        },
                        onComplete: function () {
                            if (cityPart==globals.cityParts[globals.cityParts.length - 1]) {
                                globals.deactivateHover=false;
                                globals.deactivateDetailView=false;
                                
                            }                            
                        }

                    });

                    TweenLite.to("pos",0.1,{//not the right way but it works
                            onComplete: function () {
                                dropCityCallback();

                        },delay:0.1
                    });
                 
            } 
            animateDrop(firstcitypart);
        },
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return ReturnFromDetail;
});