//spec for words that starts with a vowel (add "ay" to the end)

describe('pigLatinTranslator', function() {
  it("adds 'ay' to a word that starts with a vowel", function() {
    expect(pigLatinTranslator("unique")).to.equal("uniqueay");
  });
});
