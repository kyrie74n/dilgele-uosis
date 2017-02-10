function calculateModel(){
    this.checkType = ko.observable("HP");
    this.charge = ko.observable("10");
    this.price = ko.observable(2000);
    this.tax = ko.observable("100");
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
    this.unit = ko.computed(function(){
        return (Number(this.material()) + Number(this.material2()))/5 ;
    }, this);
    this.gross = ko.computed(function(){
        return this.price() - this.unit() ;
    }, this);
    this.profit = ko.computed(function(){
        return this.price()
            - this.unit()
            - Number(this.price()) * (Number(this.charge()) + Number(this.tax())) / 1000 ;
    }, this);
};

ko.applyBindings(new calculateModel());