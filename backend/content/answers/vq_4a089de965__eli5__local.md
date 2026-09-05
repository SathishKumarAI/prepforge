---
qid: vq_4a089de965__eli5__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 300
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:32-05:00'
sources: []
---

Think of a **temporary table** as a *blank whiteboard* you set up in a meeting room. Anyone who has access to that room can write on it, and it stays visible until the meeting ends or someone clears it. A **table variable**, by contrast, is like a *sticky note* you keep on your desk: only you see what’s written there, and once you leave the desk (or close your notebook) it disappears.

**Key differences**

| Feature | Temporary Table | Table Variable |
|---------|-----------------|---------------|
| Scope | Session‑wide or connection‑specific; visible to any part of that session. | Local to the batch or procedure where declared. |
| Persistence | Lives until dropped or the session ends. | Exists only while the batch runs; gone afterward. |
| Metadata & Statistics | SQL Server gathers statistics, can be indexed, and can have constraints. | No statistics are maintained; limited indexing (only primary key). |
| Performance | Better for large data sets; optimizer can use stats to plan queries. | Good for small, short‑lived data; less overhead but no stats help the optimizer. |

So, choose a temporary table when you need a shared, long‑lasting workspace with full database features, and pick a table variable for quick, isolated scratch work where simplicity matters more than heavy optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
