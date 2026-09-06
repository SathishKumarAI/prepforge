---
qid: ing_5acb396d7b__think__local
question: An agent needs to iterate on code - run builds, tests, lints - without disturbing
  what the user sees in their editor. How do you architect that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 476
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:00:01-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

- What *“user sees”* actually means (e.g., live‑preview pane, editor buffer, side‑by‑side diff).
- Which tooling is required: build, test, lint.
- Whether we can spawn background processes or need to stay within a single process.
- Constraints on latency and resource usage.

**2️⃣ Pick an architectural pattern**

Use a *background worker* (or daemon) that runs in the same process but isolated from the UI thread.  
Key components:

| Layer | Responsibility |
|-------|----------------|
| **Editor extension** | Captures file changes, queues jobs, shows status icons. |
| **Job queue** | Thread‑safe FIFO of “build / test / lint” tasks. |
| **Worker pool** | One or more threads/processes that consume the queue and invoke external tools. |
| **Result handler** | Sends output back to the editor via a lightweight protocol (e.g., VS Code’s Language Server Protocol). |

**3️⃣ Step‑by‑step reasoning**

1. Detect file save → enqueue job.
2. Worker picks up job, runs tool in *subprocess* so it doesn’t block UI.
3. Capture stdout/stderr, parse errors/warnings into a structured format.
4. Send results back to the editor; update gutter icons or diagnostics pane without touching the open document.
5. Repeat for each file change; debounce rapid saves.

**4️⃣ Common traps & how to avoid them**

- **Blocking the UI thread**: always spawn subprocesses asynchronously.
- **Resource starvation**: limit parallel workers, throttle jobs per file.
- **Race conditions on shared state**: use proper synchronization or a message‑passing approach.
- **Noise in diagnostics**: filter duplicate messages and only show latest results.

**5️⃣ Sanity checks & verbal communication**

- Verify that the editor remains responsive during long builds.
- Ensure error locations map correctly to the current buffer snapshot (use file timestamps).
- Explain to stakeholders: “We keep a background worker pool separate from the UI; it runs tools asynchronously, pushes diagnostics back via the protocol, so the editor stays uninterrupted.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
