// popup.js
function updateStatus() {
  chrome.storage.local.get(['connected'], (result) => {
    const indicator = document.getElementById('statusIndicator');
    const text = document.getElementById('statusText');
    
    if (result.connected) {
      indicator.className = 'indicator connected';
      text.innerText = 'Connected';
    } else {
      indicator.className = 'indicator disconnected';
      text.innerText = 'Disconnected';
    }
  });
}

// Initial update
updateStatus();

// Listen for storage changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.connected) {
    updateStatus();
  }
});
