console.clear();

console.log("");
console.log("---------------------------- // 1 ");

//1

const data = { a: 1 };
const myObj = { a: 1, b: 2 };

function isPlainObject(el) {
  let condition = typeof el === "object";
  if (condition) {
    if (Array.isArray(el))
      return `${condition} --> ${el} ${JSON.stringify(
        el
      )} ===> it's an array-like object.`;
    return `${condition} --> ${el} ${JSON.stringify(
      el
    )} ===> it's an ${typeof el}.`;
  }

  return `${condition} --> ${el} ${JSON.stringify(
    el
  )} ===> is not an object, data type is ${typeof el}.`;
}

console.log(isPlainObject("WebDev"));
console.log(isPlainObject(data));
console.log(isPlainObject([1, 2]));
console.log(isPlainObject(myObj));
console.log(isPlainObject({}));

console.log("");
console.log("---------------------------- // 2 ");

//2

const data2 = { a: 1, b: 2 };

const makePairs = (obj) => Object.entries(obj);

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]
console.log(makePairs({ x: 1, y: 2, z: 4 }));

console.log("");
console.log("---------------------------- // 3 ");

//3

const data3 = { a: 1, b: 2 };

const without = (obj, arg) =>
  Object.fromEntries(Object.entries(obj).filter((el) => el[0] !== arg));

console.log(without(data3, "b")); // { a: 1 }

console.log("");
console.log("---------------------------- // 4 ");

//4

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };

function isEmpty(obj) {
  let keysArr = Object.keys(obj);
  if (keysArr.length === 0) return true;
  for (let key of keysArr) {
    if (obj[key]) return false;
    if (obj[key] === undefined || obj[key] === 0 || obj[key] === false)
      return true;
  }
}

console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true
console.log(isEmpty({})); // true

console.log("");
console.log("---------------------------- // 5 ");

//5

const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };

const isEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

console.log("");
console.log("---------------------------- // 6 ");

//6

const data6 = { a: { b: [1, 2, 3] } };
const test6 = { a: { b: { c: [1, 2, 3] } } };

function invoke(obj, depth, method, args) {
  let arr = depth.split(".").reduce((acc, key) => acc[key], obj);
  let result = arr[method](...args);
  return result;
}
// const invoke = (obj, str, fun, args) =>
//   eval("obj." + str + "." + fun + "(" + args + ");");

console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]
console.log(invoke(test6, "a.b.c", "splice", [1, 2])); // [2, 3]

console.log("");
console.log("---------------------------- // 7 ");

//7 ( NOT CONCLUDED YET, WORKING ON IT... )

const data7 = { a: { b: undefined } };

function isEmptyDeep(obj) {
  let str = JSON.stringify(obj);
  let objDeepCopy = JSON.parse(str);

  console.log("objDeepCopy:", objDeepCopy);

  for (let key in objDeepCopy) {
    console.log("obj.key ==> ", objDeepCopy[key]);

    if (
      objDeepCopy[key] === "" ||
      objDeepCopy[key] === null ||
      objDeepCopy[key] === {} ||
      objDeepCopy[key] === NaN ||
      objDeepCopy[key] === undefined ||
      objDeepCopy[key] === [] ||
      (typeof objDeepCopy[key] === "object" &&
        Object.entries(objDeepCopy).length < 1)
    )
      return true;

    for (let nestedKey in objDeepCopy[key]) {
      if (
        objDeepCopy[key][nestedKey] === null ||
        objDeepCopy[key][nestedKey] === "" ||
        objDeepCopy[key][nestedKey] === NaN ||
        objDeepCopy[key][nestedKey] === undefined ||
        objDeepCopy[key][nestedKey].length == [].length ||
        objDeepCopy[key][nestedKey] === {}
      )
        return true;
    }
  }
}

console.log(isEmptyDeep(data7));
console.log(isEmptyDeep({ a: 1 }));
console.log(isEmptyDeep({ a: "" }));
console.log(isEmptyDeep({}));
console.log(isEmptyDeep({ a: { b: 1 } }));
console.log(isEmptyDeep({ a: { b: { c: [] } } }));

console.log("");
console.log("---------------------------- // 8 ");

//8

const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };

function isEqualDeep() {}
console.log(isEqualDeep(data8, data81)); // true
console.log(isEqualDeep(data8, data82)); // false

console.log("");
console.log("---------------------------- // 9 ");

//9

const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };

function intersection() {}
console.log(intersection(data9, data91)); // { b: 2 }

console.log("");
console.log("---------------------------- // 10 ");

//10

const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };

function intersectionDeep() {}
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }

console.log("");
console.log("---------------------------- ");
