//spec for words that starts with a vowel (add "ay" to the end)
describe('pigLatin', function() {
  it("is a word that starts with a vowel"), function() {
    expect(pigLatin("unique")).to.equal("uniqueay");
  });

})
