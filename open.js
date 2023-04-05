function open_urls() {
  const urls = document.getElementById('urls').value.split('\n');
  let limit = parseInt(document.getElementById('limit').value);
  if (isNaN(limit) || limit <= 0 || limit > urls.length) {
    limit = urls.length;
  }
  for (let i = 0; i < limit; i++) {
    chrome.tabs.create({ url: urls[i] });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('open').addEventListener('click', open_urls);
});
