var pigLatinTranslator = function(word) {
  var word = word.toLowerCase();
  var pigAy = "ay";
  var pigWord = word + pigAy;


    if (startsWithAVowel(word)) {
      return pigWord;
    }
    else if (startsWithTwoConsonants(word)) {
      var pigWordCons = word.substring(2) + word.slice(0, 2) + pigAy;
      return pigWordCons;
    }
    else {
      var consWord = word.substring(1) + word.slice(0, 1) + pigAy;
      return consWord;
    }
};

var check = function(word) {
  return word.indexOf(' ') === -1;
};

var startsWithAVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word.slice(0, 1);
  return vowels.indexOf(firstLetter) !== -1;
};

var startsWithTwoConsonants = function(word) {
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "z"];
  var firstTwo = word.slice(0, 2).split(""); // ["p", "r"]
  var firstLetterCons = consonants.indexOf(firstTwo[0]) > -1; // true
  var secondLetterCons = consonants.indexOf(firstTwo[1]) > -1; // true
  return firstLetterCons && secondLetterCons;
};

var digraphFilter = function(word) {
  var digraphs = ["qu", "ch", "gh", "kn", "ng", "ph", "sh", "tch", "th", "wh", "wr", "ai", "ay", "ee", "ei", "ie", "oa", "oe", "ow"];
  var firstTwo = word.slice(0, 1);
  var digraph = digraphs.indexOf(firstTwo[0]) > -1;
};

$(document).ready(function() {
  $("form#translator").submit(function(event) {
  var word = ($("input#word").val());
  var result = pigLatinTranslator(word);

  $(".pigAnswer").text(result);

  $("#result").show();
  event.preventDefault();
  });
});
