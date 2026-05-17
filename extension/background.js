// background.js

let socket = null;
let heartbeatInterval = null;

function connectWebSocket() {
  // Connect to the local Continuum Electron WebSocket server using 127.0.0.1
  // This is more reliable than 'localhost' which can sometimes resolve to ::1 (IPv6)
  socket = new WebSocket('ws://127.0.0.1:49382');

  socket.onopen = () => {
    console.log('Connected to Continuum Desktop');
    chrome.storage.local.set({ connected: true });
    
    // Start heartbeat to keep service worker alive
    heartbeatInterval = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'PING' }));
      }
    }, 20000);
  };

  socket.onmessage = async (event) => {
    const message = JSON.parse(event.data);
    
    if (message.type === 'REQUEST_TABS') {
      console.log('Received tab request from desktop');
      try {
        const tabs = await chrome.tabs.query({});
        const tabData = tabs.map(tab => ({
          id: tab.id,
          title: tab.title,
          url: tab.url,
          favicon: tab.favIconUrl,
          windowId: tab.windowId
        }));

        socket.send(JSON.stringify({
          type: 'TAB_DATA',
          tabs: tabData
        }));
      } catch (e) {
        console.error('Failed to query tabs:', e);
      }
    }
  };

  socket.onclose = () => {
    console.log('Disconnected from Continuum Desktop');
    chrome.storage.local.set({ connected: false });
    if (heartbeatInterval) clearInterval(heartbeatInterval);
    // Retry connection every 5 seconds
    setTimeout(connectWebSocket, 5000);
  };

  socket.onerror = (err) => {
    console.error('WebSocket Error:', err);
  };
}

// Initial connection
connectWebSocket();
