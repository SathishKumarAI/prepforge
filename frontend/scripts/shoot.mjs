/**
 * Screenshots the running app, in both themes, driving the keyboard where a
 * surface only opens from one.
 *
 * Why this exists: for two sessions "how does it look" was unanswerable —
 * chrome-devtools-mcp holds a profile lock and the browser extension was not
 * connected — so visual changes shipped verified only by build output. Chrome
 * is already on the machine and speaks CDP over a WebSocket that Node has had
 * built in since 22. That is the whole dependency list.
 *
 *   node scripts/shoot.mjs                       # every shot, into scripts/.shots
 *   node scripts/shoot.mjs --url http://localhost:5177 --out ../shots
 *
 * Owns: launching a throwaway Chrome, driving it, writing PNGs. Owns no
 * assertions — a screenshot is evidence for a human, not a passing test.
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const args = new Map(process.argv.slice(2).flatMap((a, i, all) => (a.startsWith("--") ? [[a.slice(2), all[i + 1]]] : [])));
const BASE = args.get("url") || "http://localhost:5177";
const OUT = resolve(HERE, args.get("out") || ".shots");
const PORT = Number(args.get("port") || 9333);
const WIDTH = Number(args.get("width") || 1440);
const HEIGHT = Number(args.get("height") || 900);

const CHROME = [
  `${process.env.ProgramFiles}\\Google\\Chrome\\Application\\chrome.exe`,
  `${process.env["ProgramFiles(x86)"]}\\Google\\Chrome\\Application\\chrome.exe`,
  `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => p && existsSync(p));

/**
 * Each shot: where to go, what to do when it gets there, what to call the file.
 * `theme` is written to the settings the app reads, because the theme lives in
 * localStorage and there is no URL that selects it.
 */
const SHOTS = [
  { name: "today-dark", path: "/", theme: "dark" },
  { name: "library-dark", path: "/library?view=questions", theme: "dark", settle: 9000 },
  { name: "palette-dark", path: "/", theme: "dark", keys: [{ key: "k", ctrl: true }], settle: 1200 },
  // Typed, because an empty palette proves the dialog opens and nothing else.
  // This one proves the index loaded and the search matches.
  { name: "palette-search", path: "/", theme: "dark", keys: [{ key: "k", ctrl: true }], type: "kafka", settle: 4000 },
  // Opens a question first, so the palette has something recent to offer.
  {
    name: "palette-recent",
    path: "/library?view=questions&id=q005",
    theme: "dark",
    // Longer than the others: the detail pane has to mount before there IS a
    // recent question, and Library waits on the full 17 MB bank to render it.
    settle: 16000,
    keys: [{ key: "k", ctrl: true }],
  },
  // Presses a lens tab and waits for the local model to answer, so the meta row
  // (model id, tokens, cost) is photographed rather than described.
  {
    name: "lens-local",
    path: "/library?view=questions&id=ing_eed59e3a4a",
    theme: "dark",
    settle: 16000,
    // [role=tab], not button: the view switch above it is buttons too, and the
    // first match was "Questions".
    js: "[...document.querySelectorAll('[role=tab]')].find(b => b.textContent.trim().startsWith('ELI5'))?.click()",
    after: 30000,
  },
  { name: "today-light", path: "/", theme: "light" },
  { name: "library-light", path: "/library?view=questions", theme: "light", settle: 9000 },
  { name: "settings-light", path: "/", theme: "light", keys: [{ key: "k", ctrl: true }], settle: 1200 },
];

/** Dev serves unbundled modules, so first paint is far slower than production.
 *  Every shot waits at least this long unless it asks for more. */
const DEFAULT_SETTLE = 4000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForDevTools() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === "page" && t.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error("Chrome never exposed a page target");
}

function connect(url) {
  const ws = new WebSocket(url);
  const pending = new Map();
  let id = 0;
  const events = new Map();

  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve: ok, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : ok(msg.result);
    } else if (msg.method && events.has(msg.method)) {
      events.get(msg.method).forEach((fn) => fn(msg.params));
      events.delete(msg.method);
    }
  });

  const ready = new Promise((ok, bad) => {
    ws.addEventListener("open", ok, { once: true });
    ws.addEventListener("error", () => bad(new Error("CDP socket failed")), { once: true });
  });

  return {
    ready,
    send(method, params = {}) {
      const msgId = ++id;
      ws.send(JSON.stringify({ id: msgId, method, params }));
      return new Promise((ok, bad) => pending.set(msgId, { resolve: ok, reject: bad }));
    },
    once(method) {
      return new Promise((ok) => events.set(method, [...(events.get(method) || []), ok]));
    },
    close: () => ws.close(),
  };
}

/** Ctrl+K is four events, not one: modifier down, key down, key up, modifier up. */
async function press(cdp, { key, ctrl }) {
  const mod = ctrl ? 2 : 0;
  const code = `Key${key.toUpperCase()}`;
  const vk = key.toUpperCase().charCodeAt(0);
  await cdp.send("Input.dispatchKeyEvent", { type: "rawKeyDown", modifiers: mod, key, code, windowsVirtualKeyCode: vk });
  await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", modifiers: mod, key, code, windowsVirtualKeyCode: vk });
}

async function main() {
  if (!CHROME) throw new Error("No Chrome found — set one of the paths in CHROME");
  mkdirSync(OUT, { recursive: true });

  const chrome = spawn(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--window-size=${WIDTH},${HEIGHT}`,
    `--remote-debugging-port=${PORT}`,
    "--remote-allow-origins=*",
    // In the OS temp dir, never inside the repo: Chrome writes .tmp files
    // constantly, and vite's watcher died with EBUSY the one time this profile
    // lived under frontend/. A screenshot tool must not be able to kill the
    // server it is photographing.
    `--user-data-dir=${join(tmpdir(), "prepforge-shoot-profile")}`,
    "about:blank",
  ]);
  chrome.on("error", (e) => console.error("chrome:", e.message));

  const cdp = connect(await waitForDevTools());
  await cdp.ready;
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");

  for (const shot of SHOTS) {
    // Seed the theme before the page that reads it loads, then navigate: the
    // app applies the theme on mount, so setting it after paint would shoot the
    // previous one.
    await cdp.send("Page.navigate", { url: BASE });
    await cdp.once("Page.loadEventFired");
    // "prepforge:settings", not "settings" — lib/storage.ts namespaces every
    // key, and writing the un-namespaced one shot six dark screenshots while
    // claiming three of them were light.
    await cdp.send("Runtime.evaluate", {
      expression: `(() => {
        const key = "prepforge:settings";
        const raw = localStorage.getItem(key);
        const s = raw ? JSON.parse(raw) : {};
        localStorage.setItem(key, JSON.stringify({ ...s, theme: ${JSON.stringify(shot.theme)}, themeMigration: 2 }));
      })()`,
    });

    await cdp.send("Page.navigate", { url: BASE + shot.path });
    await cdp.once("Page.loadEventFired");
    await sleep(shot.settle ?? DEFAULT_SETTLE);

    for (const key of shot.keys || []) {
      await press(cdp, key);
      await sleep(600);
    }
    if (shot.type) {
      await cdp.send("Input.insertText", { text: shot.type });
      await sleep(1200);
    }
    // Some surfaces are only reachable by pressing something the keyboard
    // cannot reach. `after` is how long that press needs — a lens generation on
    // a local model is seconds, not milliseconds.
    if (shot.js) {
      await cdp.send("Runtime.evaluate", { expression: shot.js });
      await sleep(shot.after ?? 3000);
    }

    const { data } = await cdp.send("Page.captureScreenshot", { format: "png" });
    const file = join(OUT, `${shot.name}.png`);
    writeFileSync(file, Buffer.from(data, "base64"));
    console.log(`${shot.name.padEnd(16)} -> ${file}`);
  }

  cdp.close();
  chrome.kill();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
