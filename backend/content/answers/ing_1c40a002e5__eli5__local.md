---
qid: ing_1c40a002e5__eli5__local
question: 'Explain: Ordering — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 213
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:59-05:00'
sources: []
---

**Imagine a kitchen where recipes (your data) are written on sticky notes that keep moving along a conveyor belt.**  
In a machine‑learning pipeline, the “conveyor” is the **Change Data Capture (CDC)** process: it watches a database for every edit—add, update, delete—and writes each change to a log in the exact order they happened.  

Why order matters? Think of cooking: you must add ingredients in the right sequence or the dish will taste wrong. If your ML model learns from a shuffled log, it may think “tomatoes were added before onions” when actually onions came first, leading to a faulty recipe (model).  

So, system designers build CDC so that every change is timestamped and queued **FIFO** (first‑in, first‑out), ensuring the learning algorithm sees data exactly as the world produced it. This keeps training honest and predictions reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
