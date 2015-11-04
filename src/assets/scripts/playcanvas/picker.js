pc.script.create('picker', function (app) {
    // Creates a new PickerFramebuffer instance
    var PickerFramebuffer = function (entity) {
        this.entity = entity;
        
        // Create a frame buffer picker with a resolution of 1024x1024
        this.picker = new pc.scene.Picker(app.graphicsDevice, 1024, 1024);
    };
    var prevEntity;
    PickerFramebuffer.prototype = {
        
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            app.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onSelect, this);
            app.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onClick, this);
        },
        

        onSelect: function (event) {
            if (globals.deactivateHover===false) {
                var canvas = app.graphicsDevice.canvas;
                var canvasWidth = parseInt(canvas.clientWidth, 10);
                var canvasHeight = parseInt(canvas.clientHeight, 10);

                var camera = this.entity.camera.camera;
                var scene = app.scene;
                var picker = this.picker;


                picker.prepare(camera, scene);

                // Map the mouse coordinates into picker coordinates and 
                // query the selection
                var selected = picker.getSelection({
                    x: Math.floor(event.x * (picker.width / canvasWidth)), 
                    y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
                });

                if (selected.length > 0) {
                    // Get the graph node used by the selected mesh instance
                    var entity = selected[0].node;

                    // Bubble up the hierarchy until we find an actual Entity
                    while (!(entity instanceof pc.Entity) && entity !== null) {
                        entity = entity.getParent();
                    }

                    if (entity) {
                        if(typeof entity.script != "undefined"){
                            if(typeof entity.script.extend != "undefined"){
                                if (entity!=prevEntity) {
                                    entity.script.extend.extend();
                                    console.log(entity);
                                    prevEntity=entity;
                                }

                            }
                        }
                    }
                }
            }

        },

        onClick: function (event) {

            var canvas = app.graphicsDevice.canvas;
            var canvasWidth = parseInt(canvas.clientWidth, 10);
            var canvasHeight = parseInt(canvas.clientHeight, 10);

            var camera = this.entity.camera.camera;
            var scene = app.scene;
            var picker = this.picker;
            
            
            picker.prepare(camera, scene);

            // Map the mouse coordinates into picker coordinates and 
            // query the selection
            var selected = picker.getSelection({
                x: Math.floor(event.x * (picker.width / canvasWidth)), 
                y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
            });

            if (selected.length > 0) {
                // Get the graph node used by the selected mesh instance
                var entity = selected[0].node;

                // Bubble up the hierarchy until we find an actual Entity
                while (!(entity instanceof pc.Entity) && entity !== null) {
                    entity = entity.getParent();
                }
                
                if (entity) {
                    if(typeof entity.script != "undefined"){
                        if(typeof entity.script.detailview != "undefined"){
                            if (globals.deactivateDetailView===true) {
                                var index = entity.model.model.meshInstances.indexOf(selected[0])-1;
                                console.log(entity.model.model.meshInstances[index].node.name);
                            } else {                          
                                globals.deactivateHover=true;
                                entity.script.detailview.detailview(entity);
                                globals.deactivateDetailView=true;
                            } 
                        }
                        if(typeof entity.script.returnFromDetail != "undefined"){
                                entity.script.returnFromDetail.returnFromDetail();                             
                        }
                    }

                }
            }
        },
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return PickerFramebuffer;
});