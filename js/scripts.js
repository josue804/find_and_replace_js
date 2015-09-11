var findAndReplace = function(phrase, wordToFind, replacementWord) {
  return phrase.replace(wordToFind, replacementWord);
}

$(function() {
  $("form#find-and-replace").submit(function(event) {
    var phrase = $("input#phrase").val();
    var wordToFind = $("input#wordToFind").val();
    var replacementWord = $("input#replacementWord").val();
    var result = findAndReplace(phrase, wordToFind, replacementWord);
    $(".resultingString").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
