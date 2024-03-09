// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startHighlighting") {
    const wordsToHighlight = message.words;
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      wordsToHighlight.forEach((word) => {
        const regex = new RegExp("\\b" + word + "\\b", "gi");
        const html = paragraph.innerHTML;
        paragraph.innerHTML = html.replace(regex, <span style="background-color: yellow;">${word}</span>);
      });
    });
  }
});