---
qid: vq_b63a5b1d1a__eli5__local
question: what is accumulator?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 210
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:11-05:00'
sources: []
---

In big‑data systems like Apache Spark, an **accumulator** is a special counter that lets many parallel workers add values together safely. Think of it as a giant shared notebook on which every worker can write down a number (e.g., how many records were processed). When all the workers finish, the notebook’s total shows the combined sum.

**How it works:**  
- Each worker receives its own copy of the accumulator.  
- While processing data, it “adds” to this local copy.  
- At the end, Spark merges all the copies into one final value, just like adding up all the pages of the notebook.

Accumulators are write‑only: workers can only add; they cannot read or modify values mid‑run. They’re perfect for metrics (counts, sums) that need to be collected from distributed tasks without interfering with each other’s work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
