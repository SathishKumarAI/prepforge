---
qid: ing_2bf7e8506b__eli5__local
question: 'Explain: Log-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 232
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:06-05:00'
sources: []
---

Imagine a busy kitchen where every ingredient added or removed is written down on a running recipe card—this card is the database’s transaction log. **Change Data Capture (CDC)** reads that card to see what changed: an ingredient was added, a spice level was tweaked, or a dish was removed. **Log‑based CDC** looks only at the card (the log) instead of re‑checking the whole kitchen inventory; it grabs just the new entries and streams them to another system—like a data lake that feeds a machine‑learning model.  

*Transaction log*: the record of all database changes in order.  
*CDC*: the process that captures those changes for downstream use.  

Because CDC pulls only what’s been written to the log, it is fast, low‑overhead, and keeps models up‑to‑date without re‑scanning everything. This real‑time feed lets machine‑learning algorithms learn from fresh data as soon as it arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
