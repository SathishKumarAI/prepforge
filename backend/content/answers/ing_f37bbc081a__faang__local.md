---
qid: ing_f37bbc081a__faang__local
question: 'Explain: Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:25-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of how Meta (formerly Facebook) approaches asynchronous computing for ML workloads, plus key lessons learned. I’ll assume they’re interested in distributed training, inference pipelines, and the trade‑offs between synchronous vs. async execution.

**Approach**  
1. Summarize Meta’s async model: data‑parallel workers publish gradients to a parameter server or shared tensor store; inference services use message queues and micro‑services.  
2. Highlight core benefits (latency hiding, fault tolerance).  
3. List challenges (stale parameters, consistency).  
4. Conclude with actionable learnings.

**Depth**  
Meta’s ML stack (PyTorch + FBGEMM, RocksDB, S3) runs asynchronous training by letting each GPU compute gradients locally and push them to a *parameter server* cluster. Workers proceed without waiting for global sync, which reduces idle time during straggler events. For inference, services queue requests on Kafka, process in micro‑service shards, and cache results in Redis—allowing the system to absorb bursty traffic.  
Key learnings:  
- **Stale gradients** can hurt convergence; Meta mitigates this with *bounded staleness* (e.g., allow up to 3 rounds of delay).  
- **Consistency vs. throughput**: aggressive async yields higher GPU utilization but requires careful monitoring of loss spikes.  
- **Observability**: instrumenting queue depth and gradient lag is essential for auto‑scaling.  

**Edge cases**  
- Extreme stragglers (GPU failures) can stall the entire job; fallback to synchronous sync or checkpoint recovery is needed.  
- High request latency during cache warm‑ups may violate SLAs; use *pre‑fetching* and *adaptive batching*.  

**Optimize & communicate**  
Future improvements: adopt *model‑parallel async* shards, leverage *tensor pipelines*, and integrate adaptive consistency protocols. When explaining, I’ll emphasize the trade‑off diagram (latency vs. convergence) and show a small code snippet of gradient push logic to ground the theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
