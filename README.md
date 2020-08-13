
# dynamic-switch [![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

This is Switch class that aggregates conditions. :fire: :fire: 

## Technologies

- TypeScript
- Jest
- NPM

## How to use
#### Declare checker
```javascript
const myChecker = new Switch();
```
#### Checker add method
```javascript
myChecker.add('test'.length < 5, () => {
  console.error('value is too short');
});
```
#### ... or multiple add method
```javascript
myChecker.add('test'.length < 5, () => {
  console.error('value is too short');
});
myChecker.add(!value.includes('@'), () => {
  console.error('value is not an email');
});
```
#### Checker isValid method
```javascript
myChecker.isValid(); 
```

## Status

Project is: _finished_

## Contact

Created by [@erykslocinski](mailto:eryk.slocinski@gmail.com) - feel free to contact me!
