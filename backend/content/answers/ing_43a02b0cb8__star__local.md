---
qid: ing_43a02b0cb8__star__local
question: 'Explain: The Highway Analogy — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 314
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:09-05:00'
sources: []
---

**Situation**  
I was tasked with deploying a real‑time recommendation engine for a streaming platform that had to serve millions of requests per second while keeping the user latency below 50 ms.

**Task**  
Design the inference pipeline so that we could meet strict latency targets without sacrificing throughput, all within our existing server budget.

**Action**  
I mapped the system onto a highway analogy: *latency* is the time it takes a single car to travel from source to destination; *throughput* is how many cars can pass the checkpoint per second; and *bandwidth* is the number of lanes available.  
First, I sharded the model across multiple GPUs (adding lanes) to increase bandwidth. Then I introduced a lightweight pre‑processor queue that used CPU cores as toll booths, reducing the per‑car processing time—cutting latency by 30 %. Finally, I deployed an async batching layer so each GPU lane could handle several requests in parallel, boosting throughput from 12k/s to 35k/s while keeping average latency under 45 ms.

**Result**  
The final system handled 40M daily predictions with a 15 % cost reduction and maintained sub‑50 ms latency. I learned that treating system constraints like highway capacity forces you to balance lane expansion, toll efficiency, and car speed—principles that apply across any high‑scale ML deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
