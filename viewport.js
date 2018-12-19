

var PI = Math.PI;
var pow = Math.pow;
var tan = Math.tan;
var log = Math.log;
var atan = Math.atan;
var exp = Math.exp;
var DEGREES_TO_RADIANS = PI / 180;
var RADIANS_TO_DEGREES = 180 / PI;
function radians(value) {
  return value * DEGREES_TO_RADIANS;
}
function degrees(value) {
  return value * RADIANS_TO_DEGREES;
}
// see: https://en.wikipedia.org/wiki/Web_Mercator
function ViewportMercator(opts) {
  var scale = (opts.tileSize || 512) * 0.5 / PI * pow(2, opts.zoom);
  var lamda = radians(opts.longitude);
  var phi = radians(opts.latitude);
  var x = scale * (lamda + PI);
  var y = scale * (PI - log(tan(PI * 0.25 + phi * 0.5)));
  var offsetX = opts.width * 0.5 - x;
  var offsetY = opts.height * 0.5 - y;

  function project(lnglat2) {
    var lamda2 = lnglat2[0] * DEGREES_TO_RADIANS;
    var phi2 = lnglat2[1] * DEGREES_TO_RADIANS;
    var x2 = scale * (lamda2 + PI);
    var y2 = scale * (PI - log(tan(PI * 0.25 + phi2 * 0.5)));
    return [x2 + offsetX, y2 + offsetY];
  }

  function unproject(xy) {
    var x2 = xy[0] - offsetX;
    var y2 = xy[1] - offsetY;
    var lamda2 = x2 / scale - PI;
    var phi2 = 2 * (atan(exp(PI - y2 / scale)) - PI * 0.25);
    return [degrees(lamda2), degrees(phi2)];
  }

  function contains(lnglat2) {
    var xy = project(lnglat2);
    var x = xy[0];
    var y = xy[1];
    return (
      x >= 0 && x <= opts.width &&
      y >= 0 && y <= opts.height
    );
  }

  return {
    project: project, 
    unproject: unproject, 
    contains: contains,
    scale: function() { return scale },
    translate: function() { return [offsetX, offsetY]}
  };
}
