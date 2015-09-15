var pigLatinTranslator = function(word) {
  var word1 = word.toLowerCase();
  var pigAy = "ay";
  var pigWord = word1 + pigAy;

  if (startsWithAVowel(word)) {
      return pigWord;
  } else if (startsWithTwoConsonants(word)) {
      var pigWordCons = word.substring(2) + word[0] + "ay";
      return pigWordCons;
  } else {
      var consWord = word.substring(1) + word[0] + "ay";
      return consWord;
    }
};

var startsWithAVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word.slice(0, 1);
  return vowels.indexOf(firstLetter) !== -1;
};

var startsWithTwoConsonants = function(word) {
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y"];
  var twoCons = word.slice(0,2);
  return consonants.indexOf(twoCons) !== -1;
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
