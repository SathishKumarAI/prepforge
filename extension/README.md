# PrepForge Clipper — local browser extension

One click sends the current page (and any selected text) to your **local** PrepForge
backend's resource feed. Runs entirely on your machine — **not published to any store.**

## Install (Chrome or Brave)

1. Start the PrepForge backend (must be on `http://127.0.0.1:8787`).
2. Open `chrome://extensions` (Brave: `brave://extensions`).
3. Toggle **Developer mode** (top-right).
4. Click **Load unpacked** → select this `extension/` folder.
5. Pin the extension. On any page, click it → pick a topic → **Save this page**.
6. In the app, open **Resources** and hit **Refresh** (or it shows on next load).

## Safety by design

- **Talks to `127.0.0.1:8787` only** — `host_permissions` is locked to your local backend; it can't reach any other server.
- **No background tracking** — nothing is sent until you click **Save**. There is no content script running on every page.
- **Minimal permissions** — `activeTab` + `scripting` give temporary, click-scoped access to read the current tab's selection; `storage` only holds a local retry queue.
- **Offline-safe** — if the backend is down, the clip is queued in local storage and retried next time you open the popup. Nothing is lost, nothing leaks.
- **Sends only** the URL, page title, your text selection (capped at 1000 chars), and the topic — never full-page dumps.

## Optional hardening

If you expose the backend beyond localhost, add a shared token: set a header check in
`backend/main.py` on `/resources/add` and send the same token from `popup.js`. For a
purely local setup this isn't needed.
