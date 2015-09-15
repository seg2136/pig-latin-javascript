var pigLatinTranslator = function(word) {
  var word1 = word.toLowerCase();
  var pigAy = "ay";
  var pigWord = word1 + pigAy;

  if (startsWithAVowel(word)) {
    return pigWord;
  }
}

var startsWithAVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word.slice(0, 1);
  return vowels.indexOf(firstLetter) !== -1;
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
