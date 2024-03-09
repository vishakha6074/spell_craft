document.addEventListener('DOMContentLoaded', function() {
  var highlightButton = document.getElementById('highlightButton');

  highlightButton.addEventListener('click', function() {
    // Words to highlight
    var wordsToHighlight = ['leave', 'mose', 'moonlite', 'gleemed', 'smothe','forrest', 'fench','purpel'];

    // Send a message to the content script to initiate word highlighting
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'startHighlighting', words: wordsToHighlight});
    });
  });
});