---
qid: ing_6833e74c91__eli5__local
question: 'Explain: Summary — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 213
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:04-05:00'
sources: []
---

**Change Data Capture (CDC)** is like a “live‑feed notebook” that writes down every edit you make to a big spreadsheet instead of re‑writing the whole sheet each time.

Imagine your data lives in a giant ledger book. Every day, someone adds new pages or scribbles corrections on existing ones. Instead of copying the entire book into another place for machine‑learning models to read, CDC watches the original ledger and records only those page additions or edits—one line at a time. Those “change lines” are then streamed straight to the ML system.

*Unavoidable term:* **Stream** – a continuous flow of data that arrives in real time.  

By capturing just the changes, CDC saves bandwidth, keeps models up‑to‑date, and lets you treat the fresh data as if it were freshly written, without reprocessing everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
