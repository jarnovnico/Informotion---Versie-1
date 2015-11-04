pc.script.create('Global', function (app) {
    // Creates a new Global instance
    var Global = function (entity) {
        this.entity = entity;
        
    };

    Global.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            window.globals = this;
            this.deactivateHover = false;
            this.deactivateDetailView = false;
            this.cityParts = [           
                this.entity.findByName('weteringenschans'),
                this.entity.findByName('westerlijke-eilanden'),
                this.entity.findByName('plantage'),
                this.entity.findByName('nieuwmarkt'),
                this.entity.findByName('kadijken'),
                this.entity.findByName('jordaan'),
                this.entity.findByName('grachtengordel-zuid'),
                this.entity.findByName('grachtengordel-west'),
                this.entity.findByName('burgwallen-oost-zijde'),
                this.entity.findByName('burgwallen-nieuwe-zijde')
             ];
             this.averagePrices = [           
                this.entity.findByName('gebouwen-euro1'),
                this.entity.findByName('gebouwen-euro2'),
                this.entity.findByName('gebouwen-euro3'),
                this.entity.findByName('gebouwen-euro4'),
                this.entity.findByName('gebouwen-euro5')
             ];
             this.garbage = [           
                this.entity.findByName('vuilniszak-stapel1'),
                this.entity.findByName('vuilniszak-stapel2'),
                this.entity.findByName('vuilniszak-stapel3'),
                this.entity.findByName('vuilniszak-stapel4'),
                this.entity.findByName('vuilniszak-stapel5')
             ];
             this.backArrow = this.entity.findByName('back');
            
    
            
        },
        
//         prevEntities:[
//             this.grachtengordelwest ,
//             this.burgwallen_nieuwe_zijde ,
//             this.burgwallen_oost_zijde ,
//             this.de_weteringsschans ,
//             this.grachtengordel_zuid ,
//             this.jordaan ,
//             this.nieuwmarkt ,
//             this.oosterlijke_eilanden ,
//             this.plantage ,
//             this.westerlijke_eilanden 
//         ],
        
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Global;
});