var a,
  arm = 0,
  y,
  n = 153;
var y = n;
while (y > 0) {
  a = y % 10;
  y = Math.floor(y / 10);
  arm = arm + a * a * a;
}
if (arm == n) {
  console.log("yes");
} else {
  console.log("no");
}
