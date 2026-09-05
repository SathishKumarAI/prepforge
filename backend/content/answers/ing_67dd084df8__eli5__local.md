---
qid: ing_67dd084df8__eli5__local
question: 'Explain: Single Source Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 217
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:40-05:00'
sources: []
---

Imagine a popular recipe book that you want everyone in your family to have, but you only keep one master copy at home. Every time someone needs the recipe, they ask you (the master) for it, and you give them their own printed copy. In database terms, **single‑source replication** is exactly this: there’s one *primary* or *master* database that holds the truth, and all other databases are just *replicas* that stay in sync by copying changes from that single source.

When a change happens—say you add a new ingredient—the master writes it down. It then pushes (or “pushes”) this update to each replica so they all show the same updated recipe. The replicas never write back; they only read and mirror the master’s data. This keeps consistency simple: everyone sees the same information, but you don’t have to worry about conflicting edits from multiple sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
