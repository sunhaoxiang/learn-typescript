var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var userName = 'bob';
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['hello', 10];
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var list3 = [1, true, "free"];
function warnUser() {
    console.log('This is my warning message');
}
