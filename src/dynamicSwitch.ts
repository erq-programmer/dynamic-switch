// Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji
// - ma metodę .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jak zostanie warunek spełniony
// - ma metodę .isValid, która iteruje po wszystkich .cases sprawdzając kążdy dodany wcześniej warunek
// - metoda .isValid, która zwraca true jeśli wszystkie warunki będą na false
// po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases

// interface ISwitch {
//     cases: Array<boolean>;
//     conditions: Array<any>;
//     add: (condition: boolean, callback: () => void);
//     isValid(): void;
// }

class Switch {
  private cases: Array<() => void> = [];
  private conditions: Array<boolean> = [];

  add(condition: boolean, callback: () => void) {
    if (condition === true) {
      this.cases.push(callback);
    }

    this.conditions.push(condition);
  }
  isValid() {
    function everyChecker(element: boolean) {
      return element === false;
    }

    console.log('Cases before: ', this.cases);
    console.log('Conditions before: ', this.conditions);
    console.log(this.conditions.every(everyChecker));
    // this.cases.map(case => console.log(case));

    this.cases.length = 0;
    this.conditions.length = 0;

    console.log('Cases after: ', this.cases);
    console.log('Conditions after: ', this.conditions);
    // return this.conditions;
  }
}

// ma to działać tak:
const formChecker = new Switch();
const value = 'test';

formChecker.add(value.length < 5, () => {
  console.error('value is too short');
});

formChecker.add(!value.includes('@'), () => {
  console.error('value is not an email');
});

formChecker.add(value.includes('@'), () => {
  console.error('value is an email');
});

formChecker.isValid(); // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.cases.length === 0

// console.log(formChecker.cases.length);

module.exports = { Switch };
