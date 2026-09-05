---
qid: vq_e10bf2461d__eli5__local
question: What is a heap (table on a heap)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 212
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:39-05:00'
sources: []
---

Think of a **heap** as a big, unorganized pile of building blocks in a sandbox.  
When you drop a new block into the sandbox, it just lands wherever there’s space; no effort is made to keep the blocks sorted or arranged. That’s exactly what a “table on a heap” does: data is written straight into storage without any special ordering, like a log of events or a list of records that don’t need fast searching.

**Heap (storage)** – a region in disk space where files are stored as they arrive, with no predefined structure.  
Because the blocks aren’t sorted, retrieving a specific row can be slow—just like finding a particular toy in a messy pile—but inserting new rows is very quick, which is great for high‑volume writes.

So, a heap table is your “write‑fast, read‑slow” sandbox: easy to add data, harder to find anything quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
