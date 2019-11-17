export function hexToRGBa(_hexVal, opacity = 1) {
  let hexVal = _hexVal.replace('#', '');

  // turn 3-HEX to 6-HEX
  if (hexVal.length === 3) {
    hexVal = hexVal[0] + hexVal[0] + hexVal[1] + hexVal[1] + hexVal[2] + hexVal[2];
  }

  // extracting the hex values for RGB
  const red = hexVal.substr(0, 2);

  const green = hexVal.substr(2, 2);

  const blue = hexVal.substr(4, 2);

  // converting in decimal values
  const red10 = parseInt(red, 16);

  const green10 = parseInt(green, 16);

  const blue10 = parseInt(blue, 16);

  // stitching it together
  const rgb = `${red10},${green10},${blue10}`;

  // the final rgba CSS ouptut
  return `rgba(${rgb},${opacity})`;
}

export const upperCaseFirst = value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export const splitCamelCase = value => value.replace(/([a-z])([A-Z])/g, '$1 $2');

export const arrayRemove = (arr, currentId) => arr.filter(element => (element.id !== currentId));
