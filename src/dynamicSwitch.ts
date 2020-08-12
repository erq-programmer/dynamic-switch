// Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji
// - ma metodę .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jak zostanie warunek spełniony
// - ma metodę .isValid, która iteruje po wszystkich .cases sprawdzając kążdy dodany wcześniej warunek
// - metoda .isValid, która zwraca true jeśli wszystkie warunki będą na false
// po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases

class Switch {
  public cases: Array<() => void> = [];
  public conditions: Array<boolean> = [];

  add(condition: boolean, callback: () => void) {
    if (condition === true) {
      this.cases.push(callback);
    }
    this.conditions.push(condition);
  }

  isValid(): boolean {
    function everyChecker(element: boolean) {
      return element === false;
    }

    // console.log('Cases before: ', this.cases);
    // console.log('Conditions before: ', this.conditions);

    const isValid = this.conditions.every(everyChecker);

    this.cases.forEach((callback) => callback());

    this.cases.length = 0;
    this.conditions.length = 0;

    // console.log('Cases after: ', this.cases);
    // console.log('Conditions after: ', this.conditions);

    return isValid;
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

formChecker.add(value.length > 6, () => {
  console.error('value is too long');
});

formChecker.isValid(); // === false

// [OK] console.error('value is to short')
// [OK] console.error('value is not an email')
// [OK] formChecker.cases.length === 0

module.exports = { Switch };
