function myViewModel(){
    this.personName = ko.observable();
    this.personAge = ko.computed(function(){
        return this.personName();
    }, this);
} ;

function calculateModel(){
    this.price = ko.observable();
    
    
}

ko.applyBindings(new myViewModel());