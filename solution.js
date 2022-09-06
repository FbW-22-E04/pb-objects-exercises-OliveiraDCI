console.clear();

//1
console.log("");
console.log("---------------------------- // 1 ");
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

//2
console.log("");
console.log("---------------------------- // 2 ");
const data2 = { a: 1, b: 2 };

const makePairs = (obj) => Object.entries(obj);

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]
console.log(makePairs({ x: 1, y: 2, z: 4 }));

//3
console.log("");
console.log("---------------------------- // 3 ");
const data3 = { a: 1, b: 2 };

const without = (obj, arg) =>
  Object.fromEntries(Object.entries(obj).filter((el) => el[0] !== arg));

console.log(without(data3, "b")); // { a: 1 }

//4
console.log("");
console.log("---------------------------- // 4 ");
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

//5
console.log("");
console.log("---------------------------- // 5 ");
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };

const isEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

//6
console.log("");
console.log("---------------------------- // 6 ");
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

// 7
console.log("");
console.log("---------------------------- // 7 ");
function isEmptyDeep(object) {
  const values = Object.values(object);

  for (let obj of values) {
    let value = Object.values(obj)[0];
    let key = Object.keys(obj)[0];

    if (!obj) return true;
    if (values.length < 2 && obj[key] && obj[key].length === 0) return true;
    if (values.length < 2 && obj[key] && obj[key] !== undefined) return false;
    if (values.length < 2 && value === undefined) return true;
    if (values.length > 1 && value !== undefined) return false;
  }

  return true;
}

console.log(isEmptyDeep({})); // true
console.log(isEmptyDeep({ a: { b: undefined } })); // true
console.log(isEmptyDeep({ a: { b: [] } })); // true
console.log(isEmptyDeep({ a: { b: 3 } })); // false
console.log(isEmptyDeep({ a: { b: undefined }, c: { d: [1, 2, 3] } })); // false
console.log(isEmptyDeep({ a: { b: undefined }, c: { d: undefined } })); // true
console.log(isEmptyDeep({ a: { b: 1 }, c: { d: undefined } })); // false

//8
console.log("");
console.log("---------------------------- // 8 ");
const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };

const isEqualDeep = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
console.log(isEqualDeep(data8, data81)); // true
console.log(isEqualDeep(data8, data82)); // false

//9
console.log("");
console.log("---------------------------- // 9 ");

const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };

function intersection(object1, object2) {
  const keys = Object.keys(object1);
  const object3 = {};

  for (let i = 0; i < keys.length; i++) {
    if (object1[keys[i]] === object2[keys[i]]) {
      object3[keys[i]] = object1[keys[i]];
    }
  }

  return object3;
}
console.log(intersection(data9, data91)); // { b: 2 }

//10
console.log("");
console.log("---------------------------- // 10 ");

const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };

function intersectionDeep(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const valuesObj1 = Object.values(obj1);
  const valuesObj2 = Object.values(obj2);
  const obj3 = {};

  for (let i = 0; i < valuesObj1.length; i++) {
    if (
      keysObj1[i] === keysObj2[i] &&
      Object.keys(valuesObj1[i])[i] === Object.keys(valuesObj2[i])[i] &&
      Object.values(valuesObj1[i])[i] === Object.values(valuesObj2[i])[i]
    ) {
      obj3[keysObj1[i]] = valuesObj1[i];
    }
    if (keysObj1[i] === keysObj2[i] && valuesObj1[i] === valuesObj2[i]) {
      obj3[keysObj1[i]] = valuesObj1[i];
    }
  }

  return obj3;
}
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }

console.log("");
console.log("---------------------------- ");
