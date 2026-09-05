---
qid: ing_1b807ff9e9__eli5__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 204
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:43-05:00'
sources: []
---

Imagine a librarian who keeps an exact log of every book moved, added, or removed from the shelves.  
In a computer system that’s called **Change Data Capture (CDC)**.  
Every time data changes—think of a new book being shelved, an old one being checked out, or a title being updated—the CDC “tells” you what changed and when, just like the librarian writes down each movement in a notebook.

For audit and compliance, this notebook is essential. Regulators want to prove that records were handled correctly and never tampered with. CDC provides a reliable, real‑time trail of all modifications so auditors can replay the exact sequence of changes, verify integrity, and meet legal requirements without scanning the entire database again.  
In short: CDC is the librarian’s notebook for data, keeping a trustworthy ledger that satisfies both security audits and compliance mandates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
