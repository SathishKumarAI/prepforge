---
qid: ing_f3d06dee4b__star__local
question: 'Explain: Delay service — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:21-05:00'
sources: []
---

**Situation**  
When I joined Meta’s ML infrastructure team, the latency of our recommendation pipelines was creeping up—batch inference jobs were taking an extra 2–3 seconds on average, pushing user experience scores down and inflating GPU utilization by ~15%.

**Task**  
I had to redesign the service so that heavy model inference could run asynchronously, freeing real‑time requests from waiting on large tensor computations while still delivering predictions within the 100 ms window.

**Action**  
First, I introduced a message‑queue layer (Kafka) between the front‑end and the inference workers. Each request was enqueued with a unique token; a pool of GPU workers pulled jobs, executed the transformer model in PyTorch, and stored results in Redis keyed by that token. The client poller then fetched predictions or received a “pending” status. I also added back‑pressure logic: when queue depth exceeded 10 k items, new requests were temporarily redirected to a lighter CPU fallback model. Finally, I instrumented Prometheus metrics to monitor queue latency and GPU load.

**Result**  
Latency for real‑time traffic dropped from 120 ms to 85 ms (a 30% improvement), while GPU utilization fell by 18%. We also reduced the 99th‑percentile tail latency by 40%. This exercise taught me how to balance asynchronous processing with graceful degradation and the importance of observability in distributed ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
