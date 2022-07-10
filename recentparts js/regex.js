//look ahead look behind
var msg = 'Hello World'
var result1 = msg.match(/(?<=e)(\l.)/g)
var msg = "Hello World";
var result2= msg.match(/(?<!e)(\l.)/g);

/*remove whitespace from start and End
let hello = "    Hello,  World!    ";
let wsRegex = /^\s+|\s+$/g
let result = hello.replace(wsRegex,'')

/*use capture groups to search and replace
let wrongText = 'The sky is silver'
let silverRegex = /silver/
let result0 = wrongText.replace(silverRegex, 'blue')

let replace = 'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1')

let huhText = "This sandwich is good"
let fixRegex = /good/
    let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex,replaceText)

/*reuse patterns usin capture groups
let repeatStr = "regex regex"
let repeatRegex = /(\w+)\s\1/
let result1 = repeatRegex.test(repeatStr)
let result2 = repeatStr.match(repeatRegex)

let repeatNum = "42 42 42"
let reRegex = /(^\d+)\s\1\s\1$/
let result = reRegex.test(repeatNum)
let result3 =repeatNum.match(reRegex)

/*positive and negative lookahead
let quit = "qu"
let noquit = "qt"
let quRegex = /q(?=u)/
let qRegex = /q(?!u)/
let result1 = quit.match(quRegex)
let result2 = noquit.match(qRegex)
//check five more or more characters or 2 or more characters
let sampleWord = "astronaut"
let pwRegex = /(?=\w{5})(?=\D*\d{2})/
let result = pwRegex.test(sampleWord)

/*check for all of none
let favWord = "favorite"
let favRegex = /favo?rite/
let result = favRegex.test(favWord)
/*Specify exact number of matches
let timStr = 'Timmmmber'
let timRegex = /Tim{4}ber/
let result = timRegex.test(timStr)

/*specify only the lower number of matches
let haStr = 'Hazzzzah'
let haRegex = /z{3,}/
let result = haRegex.test(haStr)
/*Specify upper and Lower Number of Matches
let ohStr = 'ohhh no'
let ohRegex =/oh{3,6} no/
let result = ohRegex.test(ohStr)

//Match Non-Whitespace characters 
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g;
let result = sample.match(countWhiteSpace);

//match whitespace
let sample = 'Whitespace is important in separating words'
let countWhiteSpace = /\s/g
let result = sample.match(countWhiteSpace)

//restrict possible usernames
//if there are numbers, they must be at the end
//letters cn be lowercase and uppercase
//atleast two characters long.Two letter cant have numbers.
let username = 'JackofAllTrades'
let userCheck = /^[A-Za-z]\d*$/ 
let result = username.match(userCheck)
//match all Non-Numbers
var numString = "Your sandwich will be $5.00";
var numRegex = /\D/g;
var result = numString.match(numRegex);

//match all numbers
var numString = "Your sandwich will be $5.00"
var numRegex = /\d/g
var result = numString.match(numRegex)
//match everything but letters and strings
var quoteSample = "The five boxing wizards jump quickly.";
var alphabetRegexV2 = /\W/g;
var result2 = quoteSample.match(alphabetRegexV2)

//matching all numbers and letters
var quoteSample = "The five boxing wizards jump quickly"
var alphabetRegexV2 = /\w/g
var result = quoteSample.match(alphabetRegexV2)
//Match ending string pattrns
var caboose = 'The last car on a train is the caboose'
var lastRegex =/caboose$/
var result = lastRegex.test(caboose)
//Match beginning string patterns
var rickyAndCal = 'Cal and Ricky both like racing'
var calRegex = /^Cal/
var result =calRegex.test(rickyAndCal)
//find one or more criminals in a hunt
var crowd = 'P1P2P3P4P5P6CCCP7P8P9'
var reCriminals = /C+/
var matchedCriminals = crowd.match(reCriminals)

//find characters with lazy matching(A greedy match but ? will make it a lazy match)
var string = "titanic"
var regex = /t[a-z]*i/
var result = string.match(regex)

var string = "titanic";
var regex = /t[a-z]*?i/;
var result3= string.match(regex);

var text = "<h1>Winter is coming </h1>"
var myRegex = /<.*?>/;
var result2= text.match(myRegex)
//match characters that occur zero or more times 
var soccerWord = 'goooooooal'
var gPhrase = 'gut feeling'
var oPhrase = 'over the moon'
var goRegex = go*
var result1 = soccerWord.match(goRegex)
var result2 = gPhrase.match(goRegex)
var result3 = oPhrase.match(goRegex)

let chewingQuote = 'Aaaaaaaaaaaargh!'
let chewieRegex =a*
let result = chewingQuote.match(chewieRegex)

/*match characters that occur one or more times
var difficultSpelling = 'Mississipi'
var myRegex = /s+/g
var result = difficul
tSpelling.match(myRegex)
//match single characters not specified
var quoteSample = '3 blind mice'
var myRegex = /[^0-9aeiou]/ig
var result = quoteSample.match(myRegex)
//range of numbers
var quoteSample = 'Blueberry 3.141592653s are delicious'
var myRegex = /[2-6 h-s]/ig
var result = quoteSample.match(myRegex)
//Match letters of the alphabet 
let quoteSample = 'The quick brown fox jumps over the lazy dog'
let alphabetRegex = /[a-z]/ig
let result =quoteSample.match(alphabetRegex)

//match single character with multiple possibilities
var bgRegex = /b[aiu]g/

let quoteSample = 'Beware of bugs in the above code; I have only it correctly'
let vowelRegex = /[aeiou]/ig;
let result =quoteSample.match(vowelRegex)

//using dot in a sentence
var exmStr = 'Lets have some fun in regular expression'
var unRx = /.un/
var result = unRx.test(exmStr)
//using period which is a wildcard
var hugStr = 'I will hug my girlfriend today'
var humStr = 'Am humming a Coldplay song'
var bthStr = /hu./
var result1 = hugStr.match(bthStr)
var result2 = humStr.match(bthStr)
//can use two flags to match the regex
var twinkleStar = 'Twinkle, twinkle little star'
var starStr = /Twinkle/ig
var result = twinkleStar.match(starStr)
//matching the array with the number of times it occurs
var stringNme = 'Repeat,Repeat,Repeat'
var matchRegex = /Repeat/g
var result = stringNme.match(matchRegex)
//extracting matching from a string
var extractStr = 'Extract the word "coding" from the String';
var regexMatch = /coding/
var result = extractStr.match(regexMatch)
console.log(result)
//ignore case test
var stringName = 'FreeCodeCamp'
var regexName = /freecodecamp/i
var result = regexName.test(stringName)

//third test
let petName = 'John has a pet named Yuri'
var petRegex = /pet|cat|yuri|dog/
var result = petRegex.test(petName)
//second test
var waldoIsHiding = 'Somewhere in the game of thrones waldo is hiding'
var waldoRegex = /Waldo/
var result = waldoRegex.test(waldoIsHiding)

//first test
var string = "Hello World"
var Regex = /Hello/
var result = Regex.test(string)
//true*/