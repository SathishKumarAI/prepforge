---
qid: vq_4a179c7237__aws__local
question: In which construct should this calculation be placed?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 347
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – I was asked to add a new “average latency” metric to our real‑time analytics pipeline that processes ~2 M events per second.  
> 
> **Action** – To keep the pipeline fully streaming and avoid an extra batch job, I embedded the calculation inside the *windowed aggregation* construct of Apache Flink (or AWS Kinesis Data Analytics). The window function (`TumblingWindow`) was extended to compute `SUM(latency)` and `COUNT(events)`, then emit `AVG = SUM/COUNT`. This keeps all state local to each worker, removes cross‑partition shuffles, and guarantees exactly‑once semantics.  
> 
> **Result** – Deployment reduced metric latency from 15 s (batch) to < 1 s in production, cutting operational cost by ~30% (no separate Spark job). We saw a 12 % drop in downstream alert noise because the metric was now more accurate and timely.  
> 
> **Leadership Principles** – *Ownership* (I took end‑to‑end responsibility for performance), *Dive Deep* (analyzed Flink internals to choose the right window type), *Bias for Action* (implemented within 3 days), and *Deliver Results* (measurable speed & cost gains).  
> 
> **Bar‑raiser takeaway** – The key was selecting the streaming construct that kept state local, proving scalability, and quantifying impact with real numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
