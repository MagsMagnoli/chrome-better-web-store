(() => {
  const query = prompt("Enter search query");
  window.location.replace(
    `https://chrome.google.com/webstore/search/${query}?_category=extensions`
  );
})();
