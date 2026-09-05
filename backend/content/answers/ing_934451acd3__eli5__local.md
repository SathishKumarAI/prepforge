---
qid: ing_934451acd3__eli5__local
question: Design an LLM agent that files and updates work orders in a customer's ERP
  - real writes to a production system. How do you make that safe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 239
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:08-05:00'
sources: []
---

Imagine your LLM agent is like a careful librarian who must hand out books (work‑orders) into the right shelf of a huge library (the ERP). To keep everything safe, you give the librarian three simple rules:

1. **Read‑only first** – Before touching anything, let the librarian scan the book’s current location and status without moving it. This is like a “dry run” that shows what would happen if the order were updated.

2. **Check‑in‑check** – After the dry run, the librarian asks for a second opinion from another trusted librarian (a separate verification service). If both agree on the change, only then does the librarian actually place the book in its new spot.

3. **Rollback safety net** – The library keeps an instant snapshot of every shelf. If something goes wrong after the move, the system can instantly revert to the previous state, just like a “undo” button.

By combining read‑only previews, dual verification, and an immediate rollback option, the LLM agent can safely write real updates to production without risking data corruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
