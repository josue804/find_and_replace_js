var findAndReplace = function(phrase, wordToFind, replacementWord) {
  if(phrase.split(" ")[0] === wordToFind){
    phrase = phrase.split(" ");
    phrase[0] = replacementWord;
    phrase = phrase.join(" ");
  }
  return phrase.replace(new RegExp(" " + wordToFind, 'g'), " " + replacementWord);
}

$(function() {
  $("form#find-and-replace").submit(function(event) {
    var phrase = $("input#phrase").val();
    var wordToFind = $("input#wordToFind").val();
    var replacementWord = $("input#replacementWord").val();
    var result = findAndReplace(phrase, wordToFind, replacementWord);
    debugger;
    $(".resultingString").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
