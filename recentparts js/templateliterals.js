//to define the function
function upper(strings, ...values) {
    var ret = '';
    //string h\as an array has one more element as a value so we loop through string array.
    for (let i = 0; i < strings.length; i++){
        if (i < 0) {
            if (i = 0) {
                ret += String(values[i - 1]).toUpperCase();
           }
        }
        //to add value if i is more than zero
        ret += strings[i]
    }
    return ''
}

var name = "kyle",
  twitter = "getify",
  topic = "JS Recent Parts";

console.log(
 upper `Hello ${name}(@${twitter}), welcome to${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
