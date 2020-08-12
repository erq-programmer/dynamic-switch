"use strict";
// Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji
// - ma metodę .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jak zostanie warunek spełniony
// - ma metodę .isValid, która iteruje po wszystkich .cases sprawdzając kążdy dodany wcześniej warunek
// - metoda .isValid, która zwraca true jeśli wszystkie warunki będą na false
// po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases
// interface ISwitch {
//     cases: Array<boolean>;
//     conditions: Array<any>;
//     add: (condition: boolean, callback: any) => void; // arrow function
//     isValid(): void;
// }
var Switch = /** @class */ (function () {
    function Switch() {
        this.cases = [];
        this.conditions = [];
    }
    Switch.prototype.add = function (condition, callback) {
        this.cases.push(condition);
        if (condition === true) {
            this.conditions.push(callback);
        }
    };
    Switch.prototype.isValid = function () {
        this.conditions.map(function (condition) {
            return condition();
        });
        console.log(this.cases);
        // this.cases.length = 0;
        return this.conditions;
    };
    return Switch;
}());
// ma to działać tak:
var formChecker = new Switch();
var value = 'test';
formChecker.add(value.length < 5, function () {
    console.error('value is to short');
});
formChecker.add(!value.includes('@'), function () {
    console.error('value is not an email');
});
// console.log(formChecker.cases);
// console.dir(formChecker.conditions);
formChecker.isValid(); // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.cases.length === 0
// console.log(formChecker.cases.length);
//# sourceMappingURL=dynamicSwitch.js.map