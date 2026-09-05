---
qid: vq_c8439e6061__star__local
question: What exactly is wrong with a recursive function that is not tail-recursive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:22-05:00'
sources: []
---

**Situation** – In a data‑pipeline project at my previous employer we were building an ETL job that flattened nested JSON documents into a star schema. The incoming payloads could be arbitrarily deep, so the original implementation used a recursive function to walk the tree and emit rows for each leaf node.

**Task** – I was tasked with making the pipeline scalable to handle 50 M records per day without blowing out memory or causing JVM GC spikes.

**Action** – I profiled the job in VisualVM and saw that every recursion created a new stack frame; the depth of 30 levels on average meant about 1.5 GB of stack usage per worker, leading to frequent full GCs. I rewrote the function as tail‑recursive using an explicit work‑list (a `Deque` of nodes) and processed it iteratively with a loop. This eliminated the call‑stack overhead and allowed the JVM to reuse a single frame for all iterations. I also added back‑pressure by batching writes to the database.

**Result** – The new implementation cut peak memory from 1.5 GB to <200 MB per worker, reduced GC pause time from 2 s to under 100 ms, and increased throughput from 20k rows/sec to 120k rows/sec. I learned that non‑tail recursion can be a silent performance killer in data engineering when deep nested structures are common.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
