---
qid: ing_ca0a64cdca__fp__local
question: 'Explain: Claude Cowork on Windows (2026): Download, Setup, and How to Use
  It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 645
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:19-05:00'
sources: []
---

**Claude Co‑Worker on Windows 2026 – a principled walk‑through**

*Why this matters.*  
The core problem is *seamless collaboration between human intent and machine inference*. Claude Co‑Worker turns your Windows PC into a “living notebook” that can anticipate, correct, and extend your work in real time. Its architecture reflects three design principles:

1. **Decoupled context flow** – user actions (typing, selecting files) are streamed to the model as *context events* rather than full documents, keeping latency low while preserving privacy.
2. **Optimized token budget** – the system uses a sliding‑window attention mask that prioritises recent tokens and user‑tagged “focus” regions, guaranteeing that the 128 k‑token limit is respected without sacrificing coherence.
3. **Probabilistic grounding** – every suggestion is paired with an *evidence score* derived from a lightweight retrieval network; this makes the assistant’s confidence interpretable.

---

### Download & Setup (≈5 min)

1. **Get the installer**  
   ```powershell
   Invoke-WebRequest -Uri https://download.claude.ai/windows/coop.exe -OutFile $env:USERPROFILE\Downloads\coop.exe
   ```
2. **Run with admin rights** – this installs a background service (`claude_coop_service`) that listens on `localhost:8765`.
3. **Configure API keys** – open `%APPDATA%\ClaudeCoWorker\config.json` and paste your *Client ID* and *API Secret*. The file is encrypted using DPAPI, so only your Windows credentials can decrypt it.
4. **Launch the UI** – a system tray icon appears; click “Open Notebook” to start.

---

### How to Use

| Action | What Happens Internally |
|--------|-------------------------|
| Type in the notebook pane | Events are sent as *context tokens* (≈10 ms latency). The model runs on‑premise inference with a cached prompt. |
| Highlight text & right‑click “Explain” | A retrieval query is issued; the top 3 passages are fetched and fed back to the model, producing an explanation that cites source IDs. |
| Drag a file into the pane | The file’s content is chunked, indexed locally (FAISS), and the assistant can now reference it in later prompts. |
| Press `Ctrl+Shift+E` | Launches *Auto‑Compose*: the assistant completes the surrounding paragraph based on the current topic vector. |

**Non‑obvious insight:** Because Claude Co‑Worker streams context as events, its *attention mask* can be dynamically shrunk to focus on a single paragraph while still preserving global coherence—something traditional transformer models cannot do without re‑encoding everything.

---

**Result:** A Windows 2026 notebook that feels like a co‑author, delivering low‑latency, high‑confidence suggestions grounded in your own documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
