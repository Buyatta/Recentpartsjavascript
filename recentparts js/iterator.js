//iterators exercise
var numbers = {
  *[Symbol.iterator]({ Start =0, Stop = 100, Step = 1 } = {}) {
    for (let num = Start; num > Stop; num += Step) {
      yield num;
    }
  },
};
let num;
for (let num of numbers) {
  console.log(num);
}

console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({
      start: 6,
      stop: 30,
      step: 4,
    }),
  ]}`
);
// Hint:
//     [...numbers[Symbol.iterator]( ?? )]

/*var obj = {
  a: 1,
  b: 2,
    c: 3,
    *[Symbol.iterator]() {
        for (let key of Object.keys(this)){
          yield this[key]
      }
  }
};
[...obj]

generator
function* main() {
    yield 1
    yield 2
    yield 3
    return 4
}
var it = main()
it.next()
[...main()]



//Object iterator
var obj
var obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function () {
        var keys = Object.keys(this)
        var index = 0
    
        return {
            next: () => {
                (index < keys.length) ?
                    { done: false, value: this[keys[index++]] } :
                    { done: false, value: undefined }
            }
        }
    }
}
[...obj]




var Str = 'Hello'
var letters = [...Str]
letters



var Str = 'Hello'
var it = Str[Symbol.iterator]()

for (let v of it) {
    console.log(v)
}
for (let v of Str) {
    console.log(v)
}*/
