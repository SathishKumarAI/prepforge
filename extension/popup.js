// PrepForge Clipper — sends {url, title, selection, topic} to the local backend.
// Safety: only talks to 127.0.0.1:8787; only fires on your explicit click;
// selection is read via activeTab (temporary, click-scoped) — no broad host access.

const BACKEND = "http://127.0.0.1:8787/resources/add";
const QUEUE_KEY = "prepforge_queue";

const $ = (id) => document.getElementById(id);

function setStatus(text, isErr = false) {
  const el = $("status");
  el.textContent = text;
  el.className = isErr ? "err" : "";
}

async function activeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

// read the user's selected text on the page (activeTab grants temporary access)
async function getSelection(tabId) {
  try {
    const [res] = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => String(window.getSelection?.() ?? "").slice(0, 1000),
    });
    return res?.result ?? "";
  } catch {
    return "";
  }
}

async function post(payload) {
  const res = await fetch(BACKEND, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// If the backend was offline, retry anything queued locally.
async function flushQueue() {
  const { [QUEUE_KEY]: queue = [] } = await chrome.storage.local.get(QUEUE_KEY);
  if (!queue.length) return;
  const remaining = [];
  for (const item of queue) {
    try { await post(item); } catch { remaining.push(item); }
  }
  await chrome.storage.local.set({ [QUEUE_KEY]: remaining });
}

async function init() {
  const tab = await activeTab();
  $("title").textContent = tab?.title || tab?.url || "(no page)";
  flushQueue(); // opportunistic

  $("save").addEventListener("click", async () => {
    $("save").disabled = true;
    setStatus("Saving…");
    const payload = {
      url: tab.url,
      title: tab.title || "",
      topic: $("topic").value,
      selection: await getSelection(tab.id),
    };
    try {
      const r = await post(payload);
      setStatus(r.error ? r.message : `Saved (${r.count} total). Refresh in the app.`, !!r.error);
    } catch {
      // backend offline → queue for next time
      const { [QUEUE_KEY]: queue = [] } = await chrome.storage.local.get(QUEUE_KEY);
      queue.push(payload);
      await chrome.storage.local.set({ [QUEUE_KEY]: queue });
      setStatus("Backend offline — queued. It'll send when PrepForge is running.", true);
    } finally {
      $("save").disabled = false;
    }
  });
}

init();
