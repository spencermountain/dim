import * as d3 from 'd3-color';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function toHex(c) {
  c = d3.color(c)
  c = c.rgb()
  return "#" + componentToHex(c.r) + componentToHex(c.g) + componentToHex(c.b);
}

export default toHex;
