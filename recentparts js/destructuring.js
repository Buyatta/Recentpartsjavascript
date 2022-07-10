//array inside an object pattern
var obj = {
  a: 1,
  b: [500,5000]!== undefined?b:b,
  c: 3,
};
//refactor
var {
  a,
  b,
  b: [x,w]= [],
  c,
} = obj;


//object inside n object pattern
var obj = {
  a: 1,
  b: {2:4},
  c: 3
};
//refaactor
var {
  a,
  b,
  b: {
    x:w
  },
  c
} = obj;



//original nested destructuring
function data() {
  return { a: 1, b:{ c: 3, d: 4 }
}
  
}
var tmp = data() || {};
var a = tmp.a;
var b = tmp.b;
var c = b.c
var d = b.d

//refactor by destructuring
function data() {
  return { a: 1, b: { c: 3, d: 4 }
};

}

({
  a, b: {c,d
  
} } = data());


/*original parameter objects
function data(tmp) {
  var {
    a,b
  } = tmp
  //....
}

//refactor
function data({ a, b } = {}) {
  //....
}

/*original nested destructuring
function data() {
  return { a: 1, b:{ c: 3, d: 4 }
}
  
}
var tmp = data() || {};
var a = tmp.a;
var b = tmp.b;
var c = b.c
var d = b.d

//refactor by destructuring
function data() {
  return { a: 1, b: { c: 3, d: 4 }
};

}

({
  a, b: {c,d
  
} } = data());

/*original naming the variable the same thing as the soource
function data() {
 // return {a:1,b:2,c:3}
  return;
}
var tmp = data() || {}
var a = tmp.a
var b = tmp.b


//refactor by destructuring
function data() {
 // return { a: 1, b: 2, c: 3 };
  return;
}

({
  b,
  a
}=data())
//original empty object not to return an error
function data() {
  //return {a:1,b:2,c:3,d:4}
  return
}

var tmp = data() || {}
var first,second,third
 first = tmp.a
 second = tmp.b
 third = tmp.c

//refactor(using no parenthesis)
function data() {
 // return { a: 1, b: 2, c: 3, d: 4 };
  return
}

var first, second, third;
({ a: first, b: second, ...third } = data()|| {});

/*original
function data() {
  return {a:1,b:2,c:3,d:4}
}

var tmp = data()
var first,second,third
 first = tmp.a
 second = tmp.b
 third = tmp.c

//refactor(using no parenthesis)
function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}
var tmp
var first,second,third
tmp = { a: first, b: second, ...third } = data();

original
function data() {
  return {a:1,b:2,c:3,d:4}
}

var tmp = data()
var first,second,third
 first = tmp.a
 second = tmp.b
 third = tmp.c

//refactor(to avoid it throwing a syntax error considering it is a block{} you cover whole statement with a parenthesis)
function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}
var first,second,third
({ a: first, b: second, ...third } = data());

/* original
function data() {
  return {b:2,c:3,d:4}
}

var tmp = data()
var first = tmp.a !== undefined ? tmp.a : 42
var second = tmp.b
var third = tmp.c

//refactor
function data() {
  return {b: 2, c: 3, d: 4 };
}

var { a: first = 42, b: second, ...third } = data();*/

/*original
function data() {
  return {a:1,b:2,c:3,d:4}
}

var tmp = data()
var first = tmp.a
var second = tmp.b
var third = tmp.c

//refactor
function data() {
  return { a: 1, b: 2, c: 3,d:4 };
}


var {
 a: first,b: second,...third
} = data()




/*original
function data() {
  return {a:1,b:2}
}

var tmp = data()
var first = tmp.a
var second = tmp.b
var third = tmp.c

//refactor
function data() {
  return { a: 1, b: 2};
}


var {
 b: second,c: third,a:first
} = data()



original
function data() {
  return {a:1,b:2,c:3}
}

var tmp = data()
var first = tmp.a
var second = tmp.b
var third = tmp.c

//refactor
function data() {
  return { a: 1, b: 2, c: 3 };
}


var {
 b: second,c: third,a:first
} = data()


original
function data() {
  return [1,[2,3],4];
}
var tmp = data() || [];
var first = tmp[0];
var tmp2 = tmp[1]
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2]

//refactor
function data() {
  return [1,2,3,4];
}

var tmp;
var [first, [second, third] = [],fourth] = (tmp = data() || []);

original code
function data(tmp = []) {
  var [first, second, third] = tmp;
}
//refactor through destructure
function data([first, second, third]=[]) {
  //.....
}

//original
function data() {
  return null;
}
var tmp = data() || [];
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];

//refactor
function data() {
  return null;
}

var tmp;
var [first, second, third, ...fourth] = (tmp = data() || []);

//original(result type error)
/*function data() {
  return null;
}
var tmp = data()
var first = tmp[0];
var second = tmp[1]
var third = tmp[2];

//refactor(result type error)
function data() {
  return null;
}

var tmp;
var [
  first,
  second,
  third,
  ...fourth
] = tmp = data()

//original code
function data(tmp) {
  var [
    first,
    second,
    third
  ] = tmp;
}
//refactor through destructure
function data(
  [
    first,
    second,
    third
  ]
) {
  //.....
}

//original code
var x = 10
var y = 20
{
  let tmp = x
  x = y
  y = tmp
}

//refactor destructuring
var x = 10
var y = 20
[x,y] = [y,x]

//First code to destructure
/*function getSomeRecords() {
    return [0,1]
}
var tmp = getSomeRecords();
var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : 'nobody@none.tld';*

//First refactored
function getSomeRecords() {
  return [0, 1];
}
var [
    {
        name: firstName,
        email: firstEmail= 'nobody@none.tld'
    }
    ,
    {
        name: secondName,
        email:secondEmail='nobody@none.tld'
    }


] = getSomeRecords();

//Second destructuring code

/*function data() {
    return[1,,3]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1] !== undefined? tmp[1]:10;
var third = tmp[2];

//second refactored

function data() {
  return [1,,3,4];
}
var [{ first, second = 10, third }] = data();

/*function data() {
    return[1,2,3,4,5]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1]
var third = tmp[2];
var fourth = tmp.slice(3)




//second refactored(no tmpon the second slide)

function data() {
  return [1,2,3,4,5];
}
var [{ first, second, third, ...fourth }] = data();

/*function data() {
    return[1,,3]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1]
var third = tmp[2]
var fourth = tmp.slice[3]



//second refactored

function data() {
  return [1,2,3,4,5];
}
var tmp
var first,second,third,fourth 
[{ first, second, third, ...fourth }] = data();

/*function data() {
    return[1,2,3,4,5]
}
var tmp = data();
var o = {};
o.first = tmp[0];
o.second = tmp[1] 
o.third = tmp[2];
o.fourth = tmp.slice[3];



//second refactored

function data() {
  return [1,2,3,4,5];
}
var tmp
var o = {};

[o.first, o.second, o.third, ...o.fourth] = data();

/*function data() {
    return[1,2,3,4,5]
}
var tmp = data();
var o = [];
o[3] = tmp[0];
o[10] = tmp[1] 
o[42]= tmp[2];
o[100] = tmp.slice[3];



//second refactored
function data() {
  return [1,2,3,4,5]
}
var tmp = data()
var o = [];
[
  o[3],
  o[10],
  o[42],
  ...o[100]
] = tmp 

/*function data() {
    return[1,,3]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1]
var third = tmp[2]
var fourth = tmp.slice[3]


//second refactored

function data() {
  return [1,2,3,4,5];
}
var tmp
var 
[ first, ,second, third, ...fourth ] = tmp = data();*/
