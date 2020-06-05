export function deepClone(origin, target) {
  var target = target || {};
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      if (target[prop] !== null && typeof target[prop] === 'object') {
          origin[prop] = Object.prototype.toString.call(target[prop]) === '[object Array]' ? [] : {};
          deepClone(origin[prop], target[prop]);
      } else {
          origin[prop] = target[prop]
      }
    }
  }
}