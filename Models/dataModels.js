function myViewModel(){
    this.personName = ko.observable();
    this.personAge = ko.computed(function(){
        return this.personName();
    }, this);
} ;

function calculateModel(){
    this.checkType = ko.observable("HP");
    this.charge = ko.observable("10");
    this.tax = ko.observable("10");
    this.material1name = ko.computed(function(){
        return this.checkType() == "HP" ? "ヴァレリジョナス×2" : "ヴァルナレーザ×3";
    }, this);
    this.material1 = ko.computed(function(){
        return this.checkType() == "HP" ? 100 : 375;
    }, this);
    this.material2name = ko.computed(function(){
        return this.checkType() == "HP" ? "ディルゲレ" : "ウオシス";
    }, this);
    this.material2 = ko.observable(1100);
    this.material = ko.computed(function(){
        return this.material1() + 120;
    }, this);
    this.personAge = ko.computed(function(){
        return this.charge();
    }, this);
    
};

ko.applyBindings(new calculateModel());