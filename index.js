let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let n = [...drivers, name];
  return n;
}

function prependDriver(name) {
  let n = [name, ...drivers];
  return n;
}

function removeLastDriver() {
  drivers.slice()
}

function removeFirstDriver() {
  
}