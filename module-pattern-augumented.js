var MODULE = (function(self) {
    self.secondMethod = function() {

        console.log("secondMethod");
    };

    var oldMethod = self.firstMethod();

    self.firstMethod = function() {
        console.log("Array operations");
        //console.log(Array);
        var a = [2, 3, 4];
        console.log(a);

        a.concat(6, 7, 8);

        console.log(a);

        console.log(a.pop());

        console.log(a.join('/'));

        a.push(100);

        console.log(a);

        console.log(a.reverse
        	
        console.log(a.shift());
        console.log(a.slice(2, 4));
        a.testMethod();




    }


    return self;

}(MODULE));

Array.prototype.testMethod = function() {
    console.log("testMethod");
}
