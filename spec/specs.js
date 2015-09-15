describe('pigLatinTranslator', function() {
  it("adds 'ay' to a word that starts with a vowel", function() {
    expect(pigLatinTranslator("unique")).to.equal("uniqueay");
  });

  it("takes a single consonant at the beginning of the word and moves it to the end", function() {
    expect(pigLatinTranslator("coffee")).to.equal("offeecay");
  });

  it("takes two consonants at the beginning of the word and moves it to the end", function() {
    expect(pigLatinTranslator("great")).to.equal("eatgray");
  });
});
