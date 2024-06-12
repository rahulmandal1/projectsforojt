var num = 42;
var str = "Hello, world!";
var bool = true;
var arr = [1, 2, 3, 4, 5];
var obj = { name: "John", age: 30, city: "New York" };
function add(a, b) {
    return a + b;
}
var und;
var nul = null;
var sym = Symbol("foo");
var bigIntNum = 1234567890123456789012345678901234567890n;
console.log("Number:", num, typeof num);
console.log("String:", str, typeof str);
console.log("Boolean:", bool, typeof bool);
console.log("Array:", arr, typeof arr);
console.log("Object:", obj, typeof obj);
console.log("Function:", add, typeof add);
console.log("Undefined:", und, typeof und);
console.log("Null:", nul, typeof nul);
console.log("Symbol:", sym, typeof sym);
console.log("BigInt:", bigIntNum, typeof bigIntNum);