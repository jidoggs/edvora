export function distanceRange(x, y) {
  for (var i = 0; i < x.length; i++) {
    if (/*!(x[i] < parseInt(y - 3)) ||*/ !(x[i] > parseInt(y + 3))) {
      // Value is outside the range
      return x[i];
    }
    // return false;
  }
  // All values are inside the range
}
export function validRange(x, y) {
  for (var i = 0; i < x.length; i++) {
    if (/*x[i] < parseInt(y - 3) ||*/ x[i] > parseInt(y + 3)) {
      // Value is outside the range
      return false;
    }
    return true;
  }
  // All values are inside the range
}
