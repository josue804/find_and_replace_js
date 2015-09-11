describe('findAndReplace', function() {
  it("will find and replace a word with a user specified word in a string", function() {
    expect(findAndReplace("hello world", "world", "universe")).to.equal("hello universe");
  });
});
